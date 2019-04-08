@auth
@can('touch', $room)
<a id="editButton" href="/rooms/{{ $room->id }}/edit" class="btn btn-warning btn-sm mr-2 float-right">Edit</a>
<!--<form action="/rooms/{{ $room->id }}" method="post" class="mr-2 float-right">
    @csrf
    @method('delete')-->
    <button id="delete{{ $room->id }}" data-action="delete" data-id-room="{{ $room->id }}" type="button" class="btn btn-danger btn-sm">Delete</button>
<!--</form>-->
@endcan
@endauth
