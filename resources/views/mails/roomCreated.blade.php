@component('mail::message')
# New Room: {{ $room->title }}

{{ $room->description }}
@component('mail::button', ['url' => url('/rooms/'. $room->slug)])
Room Info
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent