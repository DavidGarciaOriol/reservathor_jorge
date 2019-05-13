<div class="d-flex justify-content-center">
        {{ $rooms->links() }}
    </div>

    @forelse($rooms as $room)
    <div data-id-room="{{ $room->id }}" class="room-card card mb-2">
        <div class="card-header">
            {{ $room->title }}
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-2">
                    <img class="img-fluid" src="http://reservathor.test/storage/{{ $room->portrait }}" alt="Room Portrait - - - (Missing File)">
                </div>
                
                <div class="col">

                    <h5 class="card-title">User: <a href="{{ route('userrooms.index', $room->user->slug) }}" title="{{ $room->user->name }}'s room list">{{ $room->user->name }}</a></h5>

                    <h6 class="card-subtitle mb-2 text-muted">Type: {{ $room->type->name }}</h6>
                    <p class="card-text">{{ str_limit($room->description, 300) }}</p>
                    <h4> {{ $room->prize }}$ </h4>

                    @include('public.rooms.partials.buttons')

                    <button data-id-room="{{ $room->id }}" data-action="show" class="btn btn-primary btn-sm mr-2 float-right">View Room</button>
                </div>
            </div>
      </div>
    </div>
    @empty
      <p>There's no Rooms to show.</p>
    @endforelse

    <div class="d-flex justify-content-center">
        {{ $rooms->links() }}
    </div>