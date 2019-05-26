/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/validations/validations.js":
/*!*************************************************!*\
  !*** ./resources/js/validations/validations.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* ==========================================
        [[[[[[[[[[VARIABLES]]]]]]]]]]
============================================= */
var name = $('#name');
var email = $('#email');
var gender = $('#gender');
var password = $('#password');
var passwordConfirm = $('#password-confirm');
var submit = $('#submit');
var terms = $('#terms');
var divErrorsName = $('#divErrorsName');
var divErrorsEmail = $('#divErrorsEmail');
var divErrorsGender = $('#divErrorsGender');
var divErrorsPassword = $('#divErrorsPassword');
var divErrorsPasswordConfirm = $('#divErrorsPasswordCOnfirm');
var divErrorsTerms = $('#ivErrorsTerms');
/* ==========================================
            [[[[[[[[[[DOM]]]]]]]]]]
============================================= */

$(function () {
  asociarEventos();
  validateAll();
});
/* ==========================================
        [[[[[[[[[[ASSOCIATION]]]]]]]]]]
============================================= */

function asociarEventos() {
  $(name).change(function () {
    validateName();
  });
  $(email).change(function () {
    validateEmail();
  });
  $(gender).change(function () {
    validateGender();
  });
  $(password).change(function () {
    validatePassword();
  });
  $(passwordConfirm).change(function () {
    validatePasswordConfirm();
  });
  $(terms).change(function () {
    validateTerms();
  });
}
/* ==========================================
        [[[[[[[[[[VALIDATION]]]]]]]]]]
============================================= */


function validateAll() {
  var esNombreValido = validateName();
  var esEmailValido = validateEmail();
  var esGenderValido = validateGender();
  var esPasswordValido = validatePassword();
  var esPasswordConfirmValido = validatePasswordConfirm();
  var esTermsValido = validateTerms();

  if (esNombreValido && esEmailValido && esGenderValido && esPasswordValido && esPasswordConfirmValido && esTermsValido) {
    $('#errorsAlert').removeClass('show');
    $('#errorsAlert').addClass('fade');
    $("#submit").submit();
  } else {
    $('#errorsAlert').removeClass('fade');
    $('#errorsAlert').addClass('show');
  }
}
/* ==========================================
          [[[[[[[[[[SUBMIT]]]]]]]]]
============================================= */


function submitForm() {
  $(submit).addEventListener(function (event) {
    event.preventDefault();
    $(submit).onClick(function () {
      validateAll();
    });
  });
}
/* ==========================================
        [[[[[[[[[[FUNCTIONS]]]]]]]]]]
============================================= */


function validateName() {
  var esCorrecto = false;
  var errorsName = [];
  $(divErrorsName).empty();
  var regex = /^[A-Za-z0-9áéíóúü]{3,}$/g;

  if (!regex.test(name.val())) {
    $(name).removeClass('is-valid');
    $(name).addClass('is-invalid');
    errorsName.push('El nombre ha de tener tres o más carácteres.');
    addErrorsToErrorsDiv('Name', errorsName);
  } else {
    esCorrecto = true;
    $(name).removeClass('is-invalid');
    $(name).addClass('is-valid');
  }

  return esCorrecto;
}

function validateEmail() {
  var esCorrecto = false;
  var errorsEmail = [];
  $(divErrorsEmail).empty();
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regex.test(email.val())) {
    $(email).removeClass('is-valid');
    $(email).addClass('is-invalid');
    errorsEmail.push('Ha de introducir un email válido.');
    addErrorsToErrorsDiv('Email', errorsEmail);
  } else {
    esCorrecto = true;
    $(email).removeClass('is-invalid');
    $(email).addClass('is-valid');
  }

  return esCorrecto;
}

function validateGender() {
  var esCorrecto = false;
  var errorsGender = [];
  $(divErrors).empty();

  if (gender.val() === "") {
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

function validatePassword() {
  var esCorrecto = false;
  var errorsPassword = [];
  $(divErrors).empty();

  if (!password.val().length >= 8) {
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

function validatePasswordConfirm() {
  var esCorrecto = false;
  var errorsPasswordConfirm = [];
  $(divErrors).empty();

  if (!passwordConfirm.val() === password.val()) {
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

function validateTerms() {
  var isChecked = false;
  var errorsTerms = [];
  $(divErrors).empty();

  if (!$(terms).is(":checked")) {
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


function addErrorsToErrorsDiv(type, errors) {
  errors.forEach(function (error) {
    divErrors.appendChild("".concat(error));
  });
}

/***/ }),

/***/ 1:
/*!*******************************************************!*\
  !*** multi ./resources/js/validations/validations.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nndavid/Sites/reservathor_jorge/resources/js/validations/validations.js */"./resources/js/validations/validations.js");


/***/ })

/******/ });