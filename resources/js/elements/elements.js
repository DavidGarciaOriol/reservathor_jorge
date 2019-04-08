$(function(){

    $('#formCreate').submit(function(event){
        event.preventDefault();
        createRoomAjax();
    });

    $('#formEdit').submit(function(event){
        event.preventDefault();
        editRoomAjax();
    })

    $('#theModal').on('show.bs.modal', function (event) {
        $('#theSpinner').addClass('theSpinner');
    });

    $('button[data-action="delete"]').click(function(event){
        event.preventDefault();
        $('#sureDeleteButton').attr('data-id-room', $(event.target).attr('data-id-room'));
        showDeleteModal();
    });

    $('#sureDeleteButton').click(function(event){
        event.preventDefault();
        deleteRoomAjax();

    });

    $('button[data-action="show"]').click(function(event){
        event.preventDefault();
        showRoomAjax();
    })

});

function createRoomAjax(){

    let createForm = $('#formCreate').serialize();

    showModal();

    axios.post('/rooms/createAjax', createForm)
    .then(function(response){
        showSuccessModal('Create');
        // $('#formCreate').trigger('reset');
        document.getElementById('formCreate').reset();
    })
    .catch(function(error){
        console.log(error);
        showErrorModal();
    })
    .then(function(response){
        hideModal();
    })
}

function editRoomAjax(){

    let idRoomEdit = $('#editButton').attr('data-id-room');

    let editForm = $('#formEdit').serialize();

    showModal();

    axios.put(`/rooms/${idRoomEdit}/edit/roomEdit`, editForm)
    .then(function(response){
        showSuccessModal('Edit');
    })
    .catch(function(error){
        console.log(error);
        showErrorModal();
    })
    .then(function(response){
        hideModal();
    })
}

function deleteRoomAjax(){

    let idRoom = $('#sureDeleteButton').attr('data-id-room');

    showModal();

    axios.delete(`rooms/${idRoom}/roomDelete`)
    .then(function(response){
        showElementDeletedModal();
        let room = $(`div[data-id-room='${idRoom}']`);
        room.hide(2000, function(){
            room.remove();
        });
    })
    .catch(function(error){
        showErrorModal();
    })
    .then(function(response){
        hideModal();
    })

}

function showRoomAjax(){

    let idRoom = $('button[data-action="show"]').attr('data-id-room');
    
    showModal();

    axios.get(`rooms/${idRoom}/roomShow`)
    .then(function(response){
        
        $('#showModalBody').html(response.data);

        $('#showElementModal').modal('show');
        
    })
    .catch(function(error){
        showErrorModal()
    })
    .then(function(response){
        hideModal();
    });
}

function showModal(){
    $('#theModal').modal('show');
}

function hideModal(){
    $('#theSpinner').removeClass('theSpinner');
    $('#theModal').modal('hide');
}

function showSuccessModal(type){
    $(`#successModal${type}`).modal('show');
}

function showErrorModal(){
    $('#errorModal').modal('show');
}

function showDeleteModal(){
    $('#deleteModal').modal('show');
}

function showElementDeletedModal(){
    $('#elementDeletedModal').modal('show');
}