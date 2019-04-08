<h2>{{ $room->title }}</h2>

@if( $room->portrait )
    <div class="col-3">
            <img class="img-fluid" src="http://reservathor.test/storage/{{ $room->portrait }}" alt="">
    </div>
@endif

<div class="col">

    <h4>Type: {{ $room->type->name }}</h4>
    <h4> Address: {{ $room->address }} </h4>
    <p>{{ $room->description }}</p>
    <h3>Price: {{ $room->prize }} $ </p>
    
    
</div>

