@extends('layouts.app')

@section('title', 'Update Room')

@section('content')

<h1>Edit Room</h1>

<form action="/rooms/{{ $room->id }}" method="post" enctype="multipart/form-data" novalidate>

    @csrf

    @method('patch')

    @include('public.rooms.partials.form')

    <button type="submit" class="btn btn-primary">Update Room</button>

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