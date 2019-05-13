@extends('layouts.app')

@section('title', 'Room List')

@section('content')
<h1>Room List</h1>

  <form id="search_form">

    <div class="d-flex mb-4 col-3">

      <input id="searchInput" name="inputSearch" class="form-control" type="text" placeholder="Search" aria-label="Search">  

      <div class="form-group mb-4 col-12">
        
        <select id="searchType" name="selectSearch" class="form-control" id="typeSearch">
          <option value="" selected> - Type - </option>
          <option >Jazmin Greenfelder</option>
          <option>Rebecca Kuvalis</option>
          <option>Madeline Schmitt</option>
          <option>Helena Bode</option>
          <option>Dariana Kertzmann PhD</option>
          <option>Brandyn Bernhard</option>
          <option>Mia Schmitt</option>
          <option>Adam O'Conner</option>
        </select>

      </div>

      <div class="form-check mb-4 col-12">

        <input name="checkSearch" class="form-check-input" type="checkbox" value="" id="searchCheck">

        <label id="searchCheckLabel" class="form-check-label" for="searchCheck">
          Filter by lowest price.
        </label>

      </div>

      <div class="form-check mb-4 col-12">

        <input name="checkSearch2" class="form-check-input" type="checkbox" value="" id="searchCheck2">

        <label id="searchCheckLabel2" class="form-check-label" for="searchCheck2">
          Skip owned rooms.
        </label>

      </div>

    </div>

  </form>

  <div id="theIndex">
    @include('public.rooms.partials.partialSearch')
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


@include('public.rooms.partials.modal')


@endsection

@push('scripts')
    <script src="{{ mix('js/elements/elements.js') }}" defer></script>
@endpush

@push('styles')
    <link href="{{ mix('css/validations.css') }}" rel="stylesheet">
@endpush