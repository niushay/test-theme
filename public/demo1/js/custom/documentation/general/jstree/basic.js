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

/***/ "./resources/assets/core/js/custom/documentation/general/jstree/basic.js":
/*!*******************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/general/jstree/basic.js ***!
  \*******************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTJSTreeBasic = function () {\n  // Private functions\n  var exampleBasic = function exampleBasic() {\n    $('#kt_docs_jstree_basic').jstree({\n      \"core\": {\n        \"themes\": {\n          \"responsive\": false\n        }\n      },\n      \"types\": {\n        \"default\": {\n          \"icon\": \"fa fa-folder\"\n        },\n        \"file\": {\n          \"icon\": \"fa fa-file\"\n        }\n      },\n      \"plugins\": [\"types\"]\n    });\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBasic();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTJSTreeBasic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9qc3RyZWUvYmFzaWMuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQSxJQUFJQSxhQUFhLEdBQUcsWUFBVztFQUMzQjtFQUNBLElBQUlDLFlBQVksR0FBRyxTQUFmQSxZQUFZLEdBQWM7SUFDMUJDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDQyxNQUFNLENBQUM7TUFDOUIsTUFBTSxFQUFHO1FBQ0wsUUFBUSxFQUFHO1VBQ1AsWUFBWSxFQUFFO1FBQ2xCO01BQ0osQ0FBQztNQUNELE9BQU8sRUFBRztRQUNOLFNBQVMsRUFBRztVQUNSLE1BQU0sRUFBRztRQUNiLENBQUM7UUFDRCxNQUFNLEVBQUc7VUFDTCxNQUFNLEVBQUc7UUFDYjtNQUNKLENBQUM7TUFDRCxTQUFTLEVBQUUsQ0FBQyxPQUFPO0lBQ3ZCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRCxPQUFPO0lBQ0g7SUFDQUMsSUFBSSxFQUFFLGdCQUFXO01BQ2JILFlBQVksRUFBRTtJQUNsQjtFQUNKLENBQUM7QUFDTCxDQUFDLEVBQUU7O0FBRUg7QUFDQUksTUFBTSxDQUFDQyxrQkFBa0IsQ0FBQyxZQUFXO0VBQ2pDTixhQUFhLENBQUNJLElBQUksRUFBRTtBQUN4QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9qc3RyZWUvYmFzaWMuanM/ODNmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtUSlNUcmVlQmFzaWMgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZXhhbXBsZUJhc2ljID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnI2t0X2RvY3NfanN0cmVlX2Jhc2ljJykuanN0cmVlKHtcclxuICAgICAgICAgICAgXCJjb3JlXCIgOiB7XHJcbiAgICAgICAgICAgICAgICBcInRoZW1lc1wiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwicmVzcG9uc2l2ZVwiOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInR5cGVzXCIgOiB7XHJcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImljb25cIiA6IFwiZmEgZmEtZm9sZGVyXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcImZpbGVcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImljb25cIiA6IFwiZmEgZmEtZmlsZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwicGx1Z2luc1wiOiBbXCJ0eXBlc1wiXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlQmFzaWMoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgS1RKU1RyZWVCYXNpYy5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RKU1RyZWVCYXNpYyIsImV4YW1wbGVCYXNpYyIsIiQiLCJqc3RyZWUiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/general/jstree/basic.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/general/jstree/basic.js"]();
/******/ 	
/******/ })()
;