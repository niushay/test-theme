/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/core/js/custom/documentation/forms/recaptcha.js":
/*!**************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/forms/recaptcha.js ***!
  \**************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTFormsGoogleRecaptchaDemos = function () {\n  // Private functions\n  var example = function example(element) {\n    document.querySelector(\"#kt_form_submit_button\").addEventListener(\"click\", function (e) {\n      e.preventDefault();\n      grecaptcha.ready(function () {\n        if (grecaptcha.getResponse() === \"\") {\n          alert(\"Please validate the Google reCaptcha.\");\n        } else {\n          alert(\"Successful validation! Now you can submit this form to your server side processing.\");\n        }\n      });\n    });\n  };\n  return {\n    // Public Functions\n    init: function init(element) {\n      example();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsGoogleRecaptchaDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZm9ybXMvcmVjYXB0Y2hhLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0EsSUFBSUEsMkJBQTJCLEdBQUcsWUFBWTtFQUMxQztFQUNBLElBQUlDLE9BQU8sR0FBRyxTQUFWQSxPQUFPLENBQWFDLE9BQU8sRUFBRTtJQUM3QkMsUUFBUSxDQUFDQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVVDLENBQUMsRUFBRTtNQUNwRkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7TUFFbEJDLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDLFlBQVk7UUFDekIsSUFBSUQsVUFBVSxDQUFDRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUU7VUFDakNDLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQztRQUNsRCxDQUFDLE1BQU07VUFDSEEsS0FBSyxDQUFDLHFGQUFxRixDQUFDO1FBQ2hHO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELE9BQU87SUFDSDtJQUNBQyxJQUFJLEVBQUUsY0FBVVYsT0FBTyxFQUFFO01BQ3JCRCxPQUFPLEVBQUU7SUFDYjtFQUNKLENBQUM7QUFDTCxDQUFDLEVBQUU7O0FBRUg7QUFDQVksTUFBTSxDQUFDQyxrQkFBa0IsQ0FBQyxZQUFZO0VBQ2xDZCwyQkFBMkIsQ0FBQ1ksSUFBSSxFQUFFO0FBQ3RDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvY29yZS9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9mb3Jtcy9yZWNhcHRjaGEuanM/M2E0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtURm9ybXNHb29nbGVSZWNhcHRjaGFEZW1vcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZXhhbXBsZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrdF9mb3JtX3N1Ym1pdF9idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGdyZWNhcHRjaGEucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdyZWNhcHRjaGEuZ2V0UmVzcG9uc2UoKSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIHZhbGlkYXRlIHRoZSBHb29nbGUgcmVDYXB0Y2hhLlwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJTdWNjZXNzZnVsIHZhbGlkYXRpb24hIE5vdyB5b3UgY2FuIHN1Ym1pdCB0aGlzIGZvcm0gdG8geW91ciBzZXJ2ZXIgc2lkZSBwcm9jZXNzaW5nLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXhhbXBsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgS1RGb3Jtc0dvb2dsZVJlY2FwdGNoYURlbW9zLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEZvcm1zR29vZ2xlUmVjYXB0Y2hhRGVtb3MiLCJleGFtcGxlIiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJncmVjYXB0Y2hhIiwicmVhZHkiLCJnZXRSZXNwb25zZSIsImFsZXJ0IiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/forms/recaptcha.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/forms/recaptcha.js"]();
/******/ 	
/******/ })()
;