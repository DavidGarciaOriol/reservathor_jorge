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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/elements/elements.js":
/*!*******************************************!*\
  !*** ./resources/js/elements/elements.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  $('#formCreate').submit(function (event) {
    event.preventDefault();
    createRoomAjax();
  });
  $('#formEdit').submit(function (event) {
    event.preventDefault();
    editRoomAjax();
  });
  $('#theModal').on('show.bs.modal', function (event) {
    $('#theSpinner').addClass('theSpinner');
  });
  $('button[data-action="delete"]').click(function (event) {
    event.preventDefault();
    $('#sureDeleteButton').attr('data-id-room', $(event.target).attr('data-id-room'));
    showDeleteModal();
  });
  $('#sureDeleteButton').click(function (event) {
    event.preventDefault();
    deleteRoomAjax();
  });
  $('button[data-action="show"]').click(function (event) {
    event.preventDefault();
    showRoomAjax($(event.target));
  });
});

function createRoomAjax() {
  var createForm = $('#formCreate').serialize();
  showModal();
  axios.post('/rooms/createAjax', createForm).then(function (response) {
    showSuccessModal('Create'); // $('#formCreate').trigger('reset');

    document.getElementById('formCreate').reset();
  }).catch(function (error) {
    console.log(error);
    showErrorModal();
  }).then(function (response) {
    hideModal();
  });
}

function editRoomAjax() {
  var idRoomEdit = $('#editButton').attr('data-id-room');
  var editForm = $('#formEdit').serialize();
  showModal();
  axios.put("/rooms/".concat(idRoomEdit, "/edit/roomEdit"), editForm).then(function (response) {
    showSuccessModal('Edit');
  }).catch(function (error) {
    console.log(error);
    showErrorModal();
  }).then(function (response) {
    hideModal();
  });
}

function deleteRoomAjax() {
  var idRoom = $('#sureDeleteButton').attr('data-id-room');
  showModal();
  axios.delete("rooms/".concat(idRoom, "/roomDelete")).then(function (response) {
    showElementDeletedModal();
    var room = $("div[data-id-room='".concat(idRoom, "']"));
    room.hide(2000, function () {
      room.remove();
    });
  }).catch(function (error) {
    showErrorModal();
  }).then(function (response) {
    hideModal();
  });
}

function showRoomAjax(boton) {
  var idRoom = boton.attr('data-id-room');
  showModal();
  axios.get("rooms/".concat(idRoom, "/roomShow")).then(function (response) {
    $('#showModalBody').html(response.data);
    $('#showElementModal').modal('show');
  }).catch(function (error) {
    showErrorModal();
  }).then(function (response) {
    hideModal();
  });
}

function showModal() {
  $('#theModal').modal('show');
}

function hideModal() {
  $('#theSpinner').removeClass('theSpinner');
  $('#theModal').modal('hide');
}

function showSuccessModal(type) {
  $("#successModal".concat(type)).modal('show');
}

function showErrorModal() {
  $('#errorModal').modal('show');
}

function showDeleteModal() {
  $('#deleteModal').modal('show');
}

function showElementDeletedModal() {
  $('#elementDeletedModal').modal('show');
}

/***/ }),

/***/ 2:
/*!*************************************************!*\
  !*** multi ./resources/js/elements/elements.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nndavid/Sites/reservathorjorge/resources/js/elements/elements.js */"./resources/js/elements/elements.js");


/***/ })

/******/ });