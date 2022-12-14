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

/***/ "./resources/assets/core/js/custom/documentation/editors/ckeditor/inline.js":
/*!**********************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/editors/ckeditor/inline.js ***!
  \**********************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTFormsCKEditorInline = function () {\n  // Private functions\n  var exampleInline = function exampleInline() {\n    InlineEditor.create(document.querySelector('#kt_docs_ckeditor_inline')).then(function (editor) {\n      console.log(editor);\n    })[\"catch\"](function (error) {\n      console.error(error);\n    });\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      exampleInline();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsCKEditorInline.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy9ja2VkaXRvci9pbmxpbmUuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQSxJQUFJQSxxQkFBcUIsR0FBRyxZQUFZO0VBQ3BDO0VBQ0EsSUFBSUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFhLEdBQWU7SUFDNUJDLFlBQVksQ0FDUEMsTUFBTSxDQUFDQyxRQUFRLENBQUNDLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQzFEQyxJQUFJLENBQUMsVUFBQUMsTUFBTSxFQUFJO01BQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUM7SUFDdkIsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFBRyxLQUFLLEVBQUk7TUFDWkYsT0FBTyxDQUFDRSxLQUFLLENBQUNBLEtBQUssQ0FBQztJQUN4QixDQUFDLENBQUM7RUFDVixDQUFDO0VBRUQsT0FBTztJQUNIO0lBQ0FDLElBQUksRUFBRSxnQkFBWTtNQUNkVixhQUFhLEVBQUU7SUFDbkI7RUFDSixDQUFDO0FBQ0wsQ0FBQyxFQUFFOztBQUVIO0FBQ0FXLE1BQU0sQ0FBQ0Msa0JBQWtCLENBQUMsWUFBWTtFQUNsQ2IscUJBQXFCLENBQUNXLElBQUksRUFBRTtBQUNoQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy9ja2VkaXRvci9pbmxpbmUuanM/MzEyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtURm9ybXNDS0VkaXRvcklubGluZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZXhhbXBsZUlubGluZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBJbmxpbmVFZGl0b3JcclxuICAgICAgICAgICAgLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfZG9jc19ja2VkaXRvcl9pbmxpbmUnKSlcclxuICAgICAgICAgICAgLnRoZW4oZWRpdG9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVkaXRvcik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlSW5saW5lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XHJcbiAgICBLVEZvcm1zQ0tFZGl0b3JJbmxpbmUuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktURm9ybXNDS0VkaXRvcklubGluZSIsImV4YW1wbGVJbmxpbmUiLCJJbmxpbmVFZGl0b3IiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aGVuIiwiZWRpdG9yIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/editors/ckeditor/inline.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/editors/ckeditor/inline.js"]();
/******/ 	
/******/ })()
;