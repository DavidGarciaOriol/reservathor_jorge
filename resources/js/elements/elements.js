$(function(){

    $('#formCreate').submit(function(event){
        event.preventDefault();
        createRoomAjax();
    });

});

function createRoomAjax(){

    let createForm = $('#formCreate').serialize();
    
    axios.post('/rooms/createAjax', createForm)
    .then(function(response){
        alert('TODO CORRECTO EN LA PETICIÓN POR AXIOS.');
    })
    .catch(function(error){
        alert('ERROR EN LA PETICIÓN POR AXIOS.');
    })
}



