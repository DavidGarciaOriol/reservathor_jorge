<?php

namespace App\Http\Controllers;

use App\Room;
use App\Type;
use App\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\RoomRequest;
use App\Notifications\RoomCreated;

class RoomController extends Controller
{
  public function __construct()
  {
      $this->middleware('auth', [
        'only' => ['create' , 'store', 'edit', 'update', 'destroy']
      ]);
      $this->middleware('can:touch,room',[
        'only' => ['edit','update','destroy']
    ]);
  }
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
      $rooms = Room::latest()->paginate(8);
      return view('public.rooms.index')->withRooms($rooms);
  }
  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    $types = Type::all();
    return view('public.rooms.create', [
        'types' => $types
    ]);
  }
  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(RoomRequest $request)
  {

      $portrait = $request->file('portrait');

      $room = Room::create([
          'user_id' => $request->user()->id,
          'title' => request('title'),
          'slug' => str_slug(request('title'), "-"),
          'address' => request('address'),
          'type_id' => request('type'),
          'prize' => request('prize'),
          'description' => request('description'),
          'portrait' => ($portrait?$portrait->store('portraits','public'):null),
      ]);

      $user = User::find(1);
      $user->notify(new RoomCreated($room));

      return redirect('/rooms');
  }
  /**
   * Display the specified resource.
   *
   * @param  \App\Room $room
   * @return \Illuminate\Http\Response
   */
  public function show($slug)
  {
      $room = Room::where('slug', $slug)->firstOrFail();
      return view('public.rooms.show', ['room' => $room]);
  }
  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Room $room
   * @return \Illuminate\Http\Response
   */
  public function edit(Room $room)
  {
      $types = Type::all();

      return view('public.rooms.edit', [
          'room' => $room,
          'types' => $types
      ]);
  }
  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Room  $room
   * @return \Illuminate\Http\Response
   */
  public function update(RoomRequest $request, Room $room)
  {
    $portrait = $request->file('portrait');

    if( $portrait && $room->portrait  ){
        Storage::disk('public')->delete($room->portrait);
    }

      $room->update([
          'title' => request('title'),
          'type' => request('type'),
          'slug' => str_slug(request('title'), "-"),
          'address' => request('address'),
          'prize' => request('prize'),
          'description' => request('description'),
          'portrait' => ($portrait?$portrait->store('portraits','public'):$room->portrait),
      ]);
      return redirect('/rooms/'.$room->slug);
  }
  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Room  $room
   * @return \Illuminate\Http\Response
   */
  public function destroy(Room $room)
  {

    if( $room->portrait ){
        Storage::disk('public')->delete($room->portrait);
    }

    $room->delete();
    return redirect('/rooms')
    ->with('message', "The room '{$room->title}' has been deleted.");
  }

    public function createAjax(RoomRequest $request){
    
        

        $portrait = $request->file('portrait');

        $room = Room::create([
            'user_id' => $request->user()->id,
            'title' => request('title'),
            'slug' => str_slug(request('title'), "-"),
            'address' => request('address'),
            'type_id' => request('type'),
            'prize' => request('prize'),
            'description' => request('description'),
            'portrait' => ($portrait?$portrait->store('portraits','public'):null),
        ]);
    }

    public function editAjax($idRoom, RoomRequest $request){

        

        $portrait = $request->file('portrait');

        if( $portrait && $room->portrait ){
            Storage::disk('public')->delete($room->portrait);
        }

        $room = Room::where('id', $idRoom)->firstOrFail();

        $room->update([
            'title' => request('title'),
            'type' => request('type'),
            'slug' => str_slug(request('title'), "-"),
            'address' => request('address'),
            'prize' => request('prize'),
            'description' => request('description'),
            'portrait' => ($portrait?$portrait->store('portraits','public'):$room->portrait),
        ]);

        
    }

    public function deleteAjax($roomId){

        
        
        $room = Room::where('id', $roomId)->firstOrFail();

        if( $room->portrait ){
            Storage::disk('public')->delete($room->portrait);
        }

        $room->delete();
    }

    public function showAjax($roomId){

        $room = Room::where('id', $roomId)->firstOrFail();
        return view('public.rooms.partials.partialShow', ['room' => $room]);
    }

    public function searchAjax(Request $request){

        
        $input = request('inputSearch');
        $select = request('selectSearch');
        $checkbox = request('checkSearch');
        $checkbox2 = request('checkSearch2');

        if(!($input==""&&$select=="" &&isset($checkbox)&&isset($checkbox2))){
            $rooms =  DB::table('rooms');
            if($input != ""){
                $rooms = $rooms->where('title', $input);
            }

            if($select != ""){
                $rooms = $rooms->where('type', $select);    
            }


            $rooms = Room::where('title', $input)->where('type', $select)->paginate(8);
            $response = view('public.rooms.partials.partialSearch')->withRooms($rooms);
        } else {
            $response = $rooms = Room::latest()->paginate(8);
        }

        return $response;
    }

}


