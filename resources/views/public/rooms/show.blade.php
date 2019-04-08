@extends('layouts.app')

@section('title', 'Room Info')

@section('content')

<div id="modalContentShow" class="row">

@include('public.rooms.partials.partialShow')

@include('public.rooms.partials.buttons')
    <a href="/reservations/create" class="btn btn-primary btn-sm mr-2 float-right">Reservate</a>

   

</div>

@endsection

@push('scripts')
    <script src="{{ mix('js/elements/elements.js') }}" defer></script>
@endpush

@push('styles')
    <link href="{{ mix('css/validations.css') }}" rel="stylesheet">
@endpush