@extends('layouts.app')

@section('title', 'New room')

@section('content')

<h1>Create New Room</h1>

<form id="formCreate" action="/rooms" method="post" enctype="multipart/form-data" novalidate>

    @csrf

    @include('public.rooms.partials.form')

    <button type="submit" class="btn btn-primary">Save Room</button>

</form>

@include('public.rooms.partials.modal')

<div id="successModalCreate" data-backdrop="static" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Status</h5>
      </div>
      <div class="modal-body">
        <p>ELemento creado satisfactoriamente.</p>
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