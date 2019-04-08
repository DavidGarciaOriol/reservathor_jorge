$(function(){

    $('#formCreate').submit(function(event){
        event.preventDefault();
        createRoomAjax();
    });

    $('#theModal').on('show.bs.modal', function (event) {
        $('#theSpinner').addClass('theSpinner');
    });

    $('button[data-acction="delete"]').click(function(event){
        event.preventDefault();
        $('#sureDeleteButton').attr('data-id-room') = $(event.target).attr('data-id-room');
        showDeleteModal();
    });

});

function createRoomAjax(){

    let createForm = $('#formCreate').serialize();

    showModal()

    axios.post('/rooms/createAjax', createForm)
    .then(function(response){
        showSuccessModal('Create');
        createForm.submit();
    })
    .catch(function(error){
        showErrorModal();
    })
    .then(function(response){
        hideModal();
    })
}

function editRoomAjax(){
    let editForm = $('#formEdit').serialize();

    showModal();

    axios.put('/rooms/edit/editAjax', editForm)
    .then(function(response){
        showSuccessModal('Edit');
    })
    .catch(function(error){
        showErrorModal();
    })
    .then(function(response){
        hideModal();
    })
}

function deleteRoomAjax(){

    axios.delete('room/index/deleteAjax')
    .then(function(response){
        showElementDeletedModal();
    })

    .catch(function(error){
        showErrorModal();
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