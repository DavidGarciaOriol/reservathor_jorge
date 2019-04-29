@extends('layouts.app')

@section('title', 'Room List')

@section('content')
<h1>Room List</h1>

  <form>

    <div class="d-flex mb-4 col-3">
      
      <input id="searchForm" class="form-control" type="text" placeholder="Search" aria-label="Search">  
      
      <div class="form-group mb-4 col-12">
        
        <select class="form-control" id="typeSearch">
          <option selected> - Type - </option>
          <option>Jazmin Greenfelder</option>
          <option>Rebecca Kuvalis</option>
          <option>Madeline Schmitt</option>
          <option>Helena Bode</option>
          <option>Dariana Kertzmann PhD</option>
          <option>Brandyn Bernhard</option>
          <option>Mia Schmitt</option>
          <option>Adam O'Conner</option>
        </select>

      </div>

    </div>

  </form>

    

    <div class="d-flex justify-content-center">
        {{ $rooms->links() }}
    </div>

    @forelse($rooms as $room)
    <div data-id-room="{{ $room->id }}" class="room-card card mb-2">
        <div class="card-header">
            {{ $room->title }}
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-2">
                    <img class="img-fluid" src="http://reservathor.test/storage/{{ $room->portrait }}" alt="">
                </div>
                
                <div class="col">

                    <h5 class="card-title">User: <a href="{{ route('userrooms.index', $room->user->slug) }}" title="{{ $room->user->name }}'s room list">{{ $room->user->name }}</a></h5>

                    <h6 class="card-subtitle mb-2 text-muted">Type: {{ $room->type->name }}</h6>
                    <p class="card-text">{{ str_limit($room->description, 300) }}</p>
                    <h4> {{ $room->prize }}$ </h4>

                    @include('public.rooms.partials.buttons')

                    <button data-id-room="{{ $room->id }}" data-action="show" class="btn btn-primary btn-sm mr-2 float-right">View Room</button>
                </div>
            </div>
      </div>
    </div>
    @empty
      <p>There's no Rooms to show.</p>
    @endforelse

    <div class="d-flex justify-content-center">
        {{ $rooms->links() }}
    </div>

    <!-- =/=/=/=/=/=/=/=/==/=/=/=/=/==/=/=/=/=/== -->

<div id="deleteModal" class="modal" data-backdrop="static" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Delete Element</h5>
      </div>
      <div class="modal-body">
        <p>Are you sure you'd like to delete this element? <br>
        It'll be deleted forever (a looong time)!</p>
      </div>
      <div class="modal-footer">
        <form action="/rooms/{{ $room->id }}" method="post" class="mr-2 float-right">
        @csrf
        @method('delete')
            <button id="sureDeleteButton" type="button" data-id-room="" class="btn btn-danger" data-dismiss="modal">Sure, delete it!</button>
        </form>        
        <button id="thoughTwiceButton" type="button" class="btn btn-secondary" data-dismiss="modal">I've though it better.</button>
      </div>
    </div>
  </div>
</div>


<div id="elementDeletedModal" class="modal" data-backdrop="static" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Delete Element</h5>
      </div>
      <div class="modal-body">
        <p>The Element has been deleted.</p>
      </div>
      <div class="modal-footer">
    
        <button id="thoughTwiceButton" type="button" class="btn btn-secondary" data-dismiss="modal">Accept.</button>
      </div>
    </div>
  </div>
</div>

<div id="showElementModal" class="modal" data-backdrop="static" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Info</h5>
      </div>
      <div id="showModalBody" class="modal-body">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fade</button>
      </div>
    </div>
  </div>
</div>


@include('public.rooms.partials.modal')


@endsection

@push('scripts')
    <script src="{{ mix('js/elements/elements.js') }}" defer></script>
@endpush

@push('styles')
    <link href="{{ mix('css/validations.css') }}" rel="stylesheet">
@endpush