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

$(function () {
  validateAll();
});

function validateAll() {
  validateName();
  validateEmail();
  validatePassword();
  validatePasswordConfirm();
}

var errors = [];
var name = $('#name');
var email = $('#email');
var password = $('#password');
var passwordConfirm = $('#password-confirm');
var submit = $('#submit');
var divErrors = $('#divErrors');

function submitForm() {
  $(submit).addEventListener(function (event) {
    event.preventDefault();
    $(submit).onClick(function () {
      validateAll();

      if (!errors == 'undefined') {} else {}
    });
  });
}

function validateName() {
  $(name).addEventListener(function (event) {
    $(name).change(function () {
      $(divErrors).empty();

      if (!name.match(/^(.*[A_Za_z0_9áéíóúü]){3}/)) {
        $(name).removeClass('is-valid');
        $(name).addClass('is-invalid');
        errors.push('El nombre ha de tener tres o más carácteres.');
        addErrorsToErrorsDiv();
      } else {
        $(name).removeClass('is-invalid');
        $(name).addClass('is-valid');
      }
    });
  });
}

function validateEmail() {
  $(email).addEventListener(function (event) {
    $(email).change(function () {
      $(divErrors).empty();

      if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
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

function validatePassword() {
  $(password).addEventListener(function (event) {
    $(password).change(function () {
      $(divErrors).empty();

      if (!password.length >= 8) {
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

function validatePasswordConfirm() {
  $(passwordConfirm).addEventListener(function (event) {
    $(passwordConfirm).change(function () {
      $(divErrors).empty();

      if (!passwordConfirm === password) {
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

function addErrorsToErrorsDiv() {
  $(divErrors).appendChild("".concat(errors));
}

/***/ }),

/***/ 1:
/*!*******************************************************!*\
  !*** multi ./resources/js/validations/validations.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nndavid/Sites/reservathorjorge/resources/js/validations/validations.js */"./resources/js/validations/validations.js");


/***/ })

/******/ });