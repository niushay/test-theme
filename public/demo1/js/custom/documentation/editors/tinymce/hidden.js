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

/***/ "./resources/assets/core/js/custom/documentation/editors/tinymce/hidden.js":
/*!*********************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/editors/tinymce/hidden.js ***!
  \*********************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTFormsTinyMCEHidden = function () {\n  // Private functions\n  var exampleHidden = function exampleHidden() {\n    tinymce.init({\n      selector: '#kt_docs_tinymce_hidden',\n      menubar: false,\n      height: \"480\",\n      toolbar: ['styleselect fontselect fontsizeselect', 'undo redo | cut copy paste | bold italic | link image | alignleft aligncenter alignright alignjustify', 'bullist numlist | outdent indent | blockquote subscript superscript | advlist | autolink | lists charmap | print preview |  code'],\n      plugins: 'advlist autolink link image lists charmap print preview code'\n    });\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      exampleHidden();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsTinyMCEHidden.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy90aW55bWNlL2hpZGRlbi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBLElBQUlBLG9CQUFvQixHQUFHLFlBQVc7RUFDbEM7RUFDQSxJQUFJQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWEsR0FBYztJQUMzQkMsT0FBTyxDQUFDQyxJQUFJLENBQUM7TUFDVEMsUUFBUSxFQUFFLHlCQUF5QjtNQUNuQ0MsT0FBTyxFQUFFLEtBQUs7TUFDZEMsTUFBTSxFQUFHLEtBQUs7TUFDZEMsT0FBTyxFQUFFLENBQUMsdUNBQXVDLEVBQzdDLHVHQUF1RyxFQUN2RyxrSUFBa0ksQ0FBQztNQUN2SUMsT0FBTyxFQUFHO0lBQ2QsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELE9BQU87SUFDSDtJQUNBTCxJQUFJLEVBQUUsZ0JBQVc7TUFDYkYsYUFBYSxFQUFFO0lBQ25CO0VBQ0osQ0FBQztBQUNMLENBQUMsRUFBRTs7QUFFSDtBQUNBUSxNQUFNLENBQUNDLGtCQUFrQixDQUFDLFlBQVc7RUFDakNWLG9CQUFvQixDQUFDRyxJQUFJLEVBQUU7QUFDL0IsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9jb3JlL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2VkaXRvcnMvdGlueW1jZS9oaWRkZW4uanM/NDhlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtURm9ybXNUaW55TUNFSGlkZGVuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgdmFyIGV4YW1wbGVIaWRkZW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aW55bWNlLmluaXQoe1xyXG4gICAgICAgICAgICBzZWxlY3RvcjogJyNrdF9kb2NzX3RpbnltY2VfaGlkZGVuJyxcclxuICAgICAgICAgICAgbWVudWJhcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGhlaWdodCA6IFwiNDgwXCIsXHJcbiAgICAgICAgICAgIHRvb2xiYXI6IFsnc3R5bGVzZWxlY3QgZm9udHNlbGVjdCBmb250c2l6ZXNlbGVjdCcsXHJcbiAgICAgICAgICAgICAgICAndW5kbyByZWRvIHwgY3V0IGNvcHkgcGFzdGUgfCBib2xkIGl0YWxpYyB8IGxpbmsgaW1hZ2UgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnknLFxyXG4gICAgICAgICAgICAgICAgJ2J1bGxpc3QgbnVtbGlzdCB8IG91dGRlbnQgaW5kZW50IHwgYmxvY2txdW90ZSBzdWJzY3JpcHQgc3VwZXJzY3JpcHQgfCBhZHZsaXN0IHwgYXV0b2xpbmsgfCBsaXN0cyBjaGFybWFwIHwgcHJpbnQgcHJldmlldyB8ICBjb2RlJ10sXHJcbiAgICAgICAgICAgIHBsdWdpbnMgOiAnYWR2bGlzdCBhdXRvbGluayBsaW5rIGltYWdlIGxpc3RzIGNoYXJtYXAgcHJpbnQgcHJldmlldyBjb2RlJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlSGlkZGVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtURm9ybXNUaW55TUNFSGlkZGVuLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEZvcm1zVGlueU1DRUhpZGRlbiIsImV4YW1wbGVIaWRkZW4iLCJ0aW55bWNlIiwiaW5pdCIsInNlbGVjdG9yIiwibWVudWJhciIsImhlaWdodCIsInRvb2xiYXIiLCJwbHVnaW5zIiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/editors/tinymce/hidden.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/editors/tinymce/hidden.js"]();
/******/ 	
/******/ })()
;