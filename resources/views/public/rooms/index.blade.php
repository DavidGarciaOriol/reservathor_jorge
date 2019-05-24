@extends('layouts.app')

@section('title', 'Room List')

@section('content')
<h1>Room List</h1>

  <form id="search_form">

    <div class="d-flex mb-4 col-3">

      <input id="searchInput" name="searchInput" class="form-control" type="text" placeholder="Search" aria-label="Search">  

      <div class="form-group mb-4 col-12">
        
        <select id="searchType" name="searchType" class="form-control">
          <option value="" selected> - Type - </option>
          <option value="1">Jazmin Greenfelder</option>
          <option value="2">Rebecca Kuvalis</option>
          <option value="3">Madeline Schmitt</option>
          <option value="4">Helena Bode</option>
          <option value="5">Dariana Kertzmann PhD</option>
          <option value="6">Brandyn Bernhard</option>
          <option value="7">Mia Schmitt</option>
          <option value="8">Adam O'Conner</option>
        </select>

      </div>

      <div class="form-check mb-4 col-12">

        <input name="searchCheck" class="form-check-input" type="checkbox" value="1" id="searchCheck">

        <label id="searchCheckLabel" class="form-check-label" for="searchCheck">
          Filter by lowest price.
        </label>

      </div>

      <div class="form-check mb-4 col-12">

        <input name="searchCheck2" class="form-check-input" type="checkbox" value="2" id="searchCheck2">

        <label id="searchCheckLabel2" class="form-check-label" for="searchCheck2">
          Filter by room title.
        </label>

      </div>

    </div>

  </form>

  <div id="theIndex">
    @include('public.rooms.partials.partialPaginate')
  </div>
  
  

    <!-- =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/= -->

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
        <form action="/rooms/" method="post" class="mr-2 float-right">
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

<div id="theSpinner2"> </div>


@include('public.rooms.partials.modal')


@endsection

@push('scripts')
    <script src="{{ mix('js/elements/elements.js') }}" defer></script>
@endpush

@push('styles')
    <link href="{{ mix('css/validations.css') }}" rel="stylesheet">
@endpush