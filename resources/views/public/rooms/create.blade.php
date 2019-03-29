@extends('layouts.app')

@section('title', 'New room')

@section('content')
<h1>Create New Room</h1>
<form id="formCreate" action="/rooms" method="post" enctype="multipart/form-data" novalidate>

    @csrf

    @include('public.rooms.partials.form')

    <button type="submit" class="btn btn-primary">Save Room</button>
</form>
@endsection
@push('scripts')
    <script src="{{ mix('js/elements/elements.js') }}" defer></script>
@endpush