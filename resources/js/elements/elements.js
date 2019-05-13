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
        showRoomAjax($(event.target));
    })

    $('#profilenavbutton').click(function(event){
        event.preventDefault();
        showProfileAjax();
    });

    $('#passnavbutton').click(function(event){
        event.preventDefault();
        showPassAjax();
    });

    $('#favnavbutton').click(function(event){
        event.preventDefault();
        showFavAjax();
    })

    associateButtons(); 

    $('#searchInput').keyup(function(event){
        event.preventDefault();
        setTimeout(() => {
            searchAjax();
        }, 300);

        

    });
    
    $('#searchType').change(function(event){
        event.preventDefault();
        searchAjax();
    })

    $('#searchCheck').change(function(event){
        event.preventDefault();
        searchAjax();
    });

    $('#searchCheck2').change(function(event){
        event.preventDefault();
        searchAjax();
    })

});

function searchAjax(){

    let searchFormSerialized = $('#search_form').serialize();

    showModal();

    axios.post('/rooms/searchAjax', searchFormSerialized)
    .then(function(response){
        $('#theIndex').html(response.data);
    })
    .catch(function(error){
        console.log(error);
        showErrorModal();
    })
    .then(function(response){
        hideModal();
        
    })

}

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

function showRoomAjax(boton){

    let idRoom = (boton).attr('data-id-room');

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

function showProfileAjax(){

    showModal();

    axios.get(`pages/partials/showProfile` )
    .then(function(response){
        $('#profile_content').html(response.data);
        associateButtons();

    })
    .catch(function(error){
        console.log(error);
        showErrorModal();
    })
    .then(function(response){
        hideModal();
    });
}

function showPassAjax(){

    showModal();

    axios.get(`pages/partials/showPass` )
    .then(function(response){
        $('#profile_content').html(response.data);
        associateButtons();
    })
    .catch(function(error){
        console.log(error);
        showErrorModal();
    })
    .then(function(response){
        hideModal();
    });
}

function showFavAjax(){

    showModal();

    axios.get(`pages/partials/showFav` )
    .then(function(response){
        $('#profile_content').html(response.data);
        associateButtons();
    })
    .catch(function(error){
        console.log(error);
        showErrorModal();
    })
    .then(function(response){
        hideModal();
    });
}



function showInfoProfile(){
    alert('Estás en la configuración del Perfil');
}

function showInfoPass(){
    alert('Estás en la configuración de Contraseña');
}

function showInfoFav(){
    alert('Estás en la configuración de Favoritos');
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

function associateButtons(){

    $('#infoProfile').click(function(event){
        event.preventDefault();
        showInfoProfile();
    });

    $('#infoPass').click(function(event){
        event.preventDefault();
        showInfoPass();
    });

    $('#infoFav').click(function(event){
        event.preventDefault();
        showInfoFav();
    })
}