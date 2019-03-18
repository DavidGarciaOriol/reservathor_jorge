$(function(){

    asociarEventos();

});

function asociarEventos(){
    $(name).change(function(){
        validateName();
    });
}

function validateAll(){
    validateName();
    validateEmail();
    validatePassword();
    validatePasswordConfirm()
}

var errors = [];
let name = $('#name');
let email = $('#email');
let password = $('#password');
let passwordConfirm = $('#password-confirm');
let submit = $('#submit');

let divErrors = $('#divErrors');

function submitForm(){

    $(submit).addEventListener(function(event){
        event.preventDefault();

        $(submit).onClick(function(){

            validateAll();

            if(!errors == 'undefined'){
                
            } else {

            }

        });
    });
}

function validateName(){

        let erroresName = []
    

            $(divErrors).empty();

            if(!name.match(/^(.*[A_Za_z0_9áéíóúü]){3}/)){

                $(name).removeClass('is-valid');
                $(name).addClass('is-invalid');

                erroresName.push('El nombre ha de tener tres o más carácteres.');
                addErrorsToErrorsDiv();

            } else {

                $(name).removeClass('is-invalid');
                $(name).addClass('is-valid');
            }
        return erroresName;

}

function validateEmail(){

    $(email).addEventListener(function(event){

        $(email).change(function(){

            $(divErrors).empty();

            if(!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                
                $(email).removeClass('is-valid');
                $(email).addClass('is-invalid');
                
                errors.push('El email no es válido.');
                addErrorsToErrorsDiv();
            } else {

                $(email).removeClass('is-invalid');
                $(email).addClass('is-valid');
            }
        });
    });
}

function validatePassword(){

    $(password).addEventListener(function(event){

        $(password).change(function(){

            $(divErrors).empty();

            if(!password.length >= 8){
                
                $(password).removeClass('is-valid');
                $(password).addClass('is-invalid');
                
                errors.push('La password debe 8 o más caracteres.');
                addErrorsToErrorsDiv();

            } else {

                $(password).removeClass('is-invalid');
                $(password).addClass('is-valid');
            }
        });
    });   
}

function validatePasswordConfirm(){

    $(passwordConfirm).addEventListener(function(event){

        $(passwordConfirm).change(function(){

            $(divErrors).empty();

            if(!passwordConfirm === password){
                
                $(passwordConfirm).removeClass('is-valid');
                $(passwordConfirm).addClass('is-invalid');
                
                errors.push('Las passwords no coinciden.');
                addErrorsToErrorsDiv();

            } else {

                $(passwordConfirm).removeClass('is-invalid');
                $(passwordConfirm).addClass('is-valid');
            }
        });
    });
}

function addErrorsToErrorsDiv(){
    $(divErrors).appendChild(`${errors}`);
}