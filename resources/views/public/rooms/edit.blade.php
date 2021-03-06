@extends('layouts.app')

@section('title', 'Update Room')

@section('content')

<h1>Edit Room</h1>

<form id="formEdit" action="/rooms/{{ $room->id }}" method="post" enctype="multipart/form-data" novalidate>

    @csrf

    @method('patch')

    @include('public.rooms.partials.form')

    <button id="editButton" data-id-room="{{ $room->id }}" class="btn btn-primary">Update Room</button>

</form>

@include('public.rooms.partials.modal')

<div id="successModalEdit" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Status</h5>
      </div>
      <div class="modal-body">
        <p>Elemento editado satisfactoriamete.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Accept</button>
      </div>
    </div>
  </div>
</div>

@endsection

@push('scripts')
    <script src="{{ mix('js/elements/elements.js') }}" defer></script>
@endpush

@push('styles')
    <link href="{{ mix('css/validations.css') }}" rel="stylesheet">
@endpush