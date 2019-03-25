
/* ==========================================
        [[[[[[[[[[VARIABLES]]]]]]]]]]
============================================= */

let name = $('#name');
let email = $('#email');
let gender = $('#gender');
let password = $('#password');
let passwordConfirm = $('#password-confirm');
let submit = $('#submit');
let terms = $('#terms');

let divErrors = $('#divErrors');




/* ==========================================
            [[[[[[[[[[DOM]]]]]]]]]]
============================================= */

$(function(){

    asociarEventos();
    validateAll();
});




/* ==========================================
        [[[[[[[[[[ASSOCIATION]]]]]]]]]]
============================================= */
function asociarEventos(){

    $(name).change(function(){
        validateName();
    });
    $(email).change(function(){
        validateEmail();
    });
    $(gender).change(function(){
        validateGender();
    });
    $(password).change(function(){
        validatePassword();
    });
    $(passwordConfirm).change(function(){
        validatePasswordConfirm();
    });
    $(terms).change(function(){
        validateTerms();
    });
}




/* ==========================================
        [[[[[[[[[[VALIDATION]]]]]]]]]]
============================================= */

function validateAll(){
    let esNombreValido = validateName();
    let esEmailValido = validateEmail();
    let esGenderValido = validateGender();
    let esPasswordValido = validatePassword();
    let esPasswordConfirmValido = validatePasswordConfirm();
    let esTermsValido = validateTerms();

    if(esNombreValido && esEmailValido && esGenderValido && esPasswordValido && esPasswordConfirmValido && esTermsValido){

        $('#errorsAlert').removeClass('show');
        $('#errorsAlert').addClass('fade');

        $("#submit").submit();

    }else{

        $('#errorsAlert').removeClass('fade');
        $('#errorsAlert').addClass('show');
    }
}




/* ==========================================
          [[[[[[[[[[SUBMIT]]]]]]]]]
============================================= */


function submitForm(){

    $(submit).addEventListener(function(event){

        event.preventDefault();

        $(submit).onClick(function(){

            validateAll();

        });
    });
}




/* ==========================================
        [[[[[[[[[[FUNCTIONS]]]]]]]]]]
============================================= */

function validateName(){

    let esCorrecto = false;
    let errorsName = [];
    
    $(divErrors).empty();

    if(!name.match(/^(.*[A_Za_z0_9áéíóúü]){3}/)){

        $(name).removeClass('is-valid');
        $(name).addClass('is-invalid');

        errorsName.push('El nombre ha de tener tres o más carácteres.');
        addErrorsToErrorsDiv(errorsName);

    } else {

        esCorrecto = true;

        $(name).removeClass('is-invalid');
        $(name).addClass('is-valid');
    }

    return esCorrecto;

}

function validateEmail(){

    let esCorrecto = false;
    let errorsEmail = [];

    $(divErrors).empty();

    if(!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                
        $(email).removeClass('is-valid');
        $(email).addClass('is-invalid');
                
        errorsEmail.push('Ha de introducir un email válido.');
        addErrorsToErrorsDiv(errorsEmail);

    } else {

        esCorrecto = true;

        $(email).removeClass('is-invalid');
        $(email).addClass('is-valid');
    }

    return esCorrecto;
        
    
}
function validateGender(){

    let esCorrecto = false;
    let errorsGender = [];

    $(divErrors).empty();

    if(!gender === ""){

        $(gender).removeClass('is-valid');
        $(gender).addClass('is-invalid');
                
        errorsGender.push('Debe seleccinar un género válido.');
        addErrorsToErrorsDiv(errorsGender);

    } else {

        esCorrecto = true;

        $(gender).removeClass('is-invalid');
        $(gender).addClass('is-valid');

    }

    return esCorrecto;
}

function validatePassword(){

    let esCorrecto = false;

    let errorsPassword = [];

    $(divErrors).empty();

    if(!password.length >= 8){
                
        $(password).removeClass('is-valid');
        $(password).addClass('is-invalid');
                
        errorsPassword.push('La password debe tener 8 o más caracteres.');
        addErrorsToErrorsDiv(errorsPassword);

    } else {

        esCorrecto = true;

        $(password).removeClass('is-invalid');
        $(password).addClass('is-valid');
    }

    return esCorrecto;
}

function validatePasswordConfirm(){

    let esCorrecto = false;

    let errorsPasswordConfirm = [];

    $(divErrors).empty();

    if(!passwordConfirm === password){
                
        $(passwordConfirm).removeClass('is-valid');
        $(passwordConfirm).addClass('is-invalid');
                
        errorsPasswordConfirm.push('Las passwords no coinciden.');
        addErrorsToErrorsDiv(errorsPasswordConfirm);

    } else {

        esCorrecto = true;

        $(passwordConfirm).removeClass('is-invalid');
        $(passwordConfirm).addClass('is-valid');
    }
    
    return esCorrecto;
}

function validateTerms(){
    let isChecked = false;

    let errorsTerms = [];

    $(divErrors).empty();

    if(!$(terms).prop("checked")){
                
        $(terms).removeClass('is-valid');
        $(terms).addClass('is-invalid');
                
        errorsTerms.push('Debe aceptar los términos y condiciones de uso.');
        addErrorsToErrorsDiv(errorsTerms);

    } else {

        isChecked = true;

        $(terms).removeClass('is-invalid');
        $(terms).addClass('is-valid');
    }

    return isChecked;
}




/* ==========================================
          [[[[[[[[[[ERRORS]]]]]]]]]]
============================================= */

function addErrorsToErrorsDiv(errors){
    errors.forEach(function(error){
        $(divErrors).appendChild(`${error}`);
    });
}