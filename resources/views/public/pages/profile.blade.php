@extends('layouts.app')

@section('title', 'User Profile')

@section('content')

    <ul class="nav justify-content-center">
        <li class="nav-item">
            <a id="profilenavbutton" class="nav-link active" href="#">Profile</a>
        </li>
        <li class="nav-item">
            <a id="passnavbutton" class="nav-link" href="#">Password</a>
        </li>
        <li class="nav-item">
            <a id="favnavbutton" class="nav-link" href="#">Fav</a>
        </li>
    </ul>

    <div id="profile_content"> </div>



@endsection

@push('scripts')
    <script src="{{ mix('js/elements/elements.js') }}" defer></script>
@endpush

@push('styles')
    <link href="{{ mix('css/validations.css') }}" rel="stylesheet">
@endpush