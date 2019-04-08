@auth
@can('touch', $room)
<a id="editBtn" href="/rooms/{{ $room->id }}/edit" class="btn btn-warning btn-sm mr-2 float-right" type="button" >Edit</a>
<!--<form action="/rooms/{{ $room->id }}" method="post" class="mr-2 float-right">
    @csrf
    @method('delete')-->
<button id="delete{{ $room->id }}" data-action="delete" class="btn btn-danger btn-sm mr-2 float-right" data-id-room="{{ $room->id }}" >Delete</button>
<!--</form>-->
@endcan
@endauth
