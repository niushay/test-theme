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

/***/ "./resources/assets/core/js/custom/documentation/editors/quill/basic.js":
/*!******************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/editors/quill/basic.js ***!
  \******************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTFormsQuillBasic = function () {\n  // Private functions\n  var exampleBasic = function exampleBasic() {\n    var quill = new Quill('#kt_docs_quill_basic', {\n      modules: {\n        toolbar: [[{\n          header: [1, 2, false]\n        }], ['bold', 'italic', 'underline'], ['image', 'code-block']]\n      },\n      placeholder: 'Type your text here...',\n      theme: 'snow' // or 'bubble'\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBasic();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsQuillBasic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy9xdWlsbC9iYXNpYy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBLElBQUlBLGlCQUFpQixHQUFHLFlBQVc7RUFDL0I7RUFDQSxJQUFJQyxZQUFZLEdBQUcsU0FBZkEsWUFBWSxHQUFjO0lBQzFCLElBQUlDLEtBQUssR0FBRyxJQUFJQyxLQUFLLENBQUMsc0JBQXNCLEVBQUU7TUFDMUNDLE9BQU8sRUFBRTtRQUNMQyxPQUFPLEVBQUUsQ0FDTCxDQUFDO1VBQ0dDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSztRQUN4QixDQUFDLENBQUMsRUFDRixDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLEVBQy9CLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQztNQUUvQixDQUFDO01BQ0RDLFdBQVcsRUFBRSx3QkFBd0I7TUFDckNDLEtBQUssRUFBRSxNQUFNLENBQUM7SUFDbEIsQ0FBQyxDQUFDO0VBQ04sQ0FBQzs7RUFFRCxPQUFPO0lBQ0g7SUFDQUMsSUFBSSxFQUFFLGdCQUFXO01BQ2JSLFlBQVksRUFBRTtJQUNsQjtFQUNKLENBQUM7QUFDTCxDQUFDLEVBQUU7O0FBRUg7QUFDQVMsTUFBTSxDQUFDQyxrQkFBa0IsQ0FBQyxZQUFXO0VBQ2pDWCxpQkFBaUIsQ0FBQ1MsSUFBSSxFQUFFO0FBQzVCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvY29yZS9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9lZGl0b3JzL3F1aWxsL2Jhc2ljLmpzP2YyYWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVEZvcm1zUXVpbGxCYXNpYyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBleGFtcGxlQmFzaWMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgcXVpbGwgPSBuZXcgUXVpbGwoJyNrdF9kb2NzX3F1aWxsX2Jhc2ljJywge1xyXG4gICAgICAgICAgICBtb2R1bGVzOiB7XHJcbiAgICAgICAgICAgICAgICB0b29sYmFyOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBbMSwgMiwgZmFsc2VdXHJcbiAgICAgICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnXSxcclxuICAgICAgICAgICAgICAgICAgICBbJ2ltYWdlJywgJ2NvZGUtYmxvY2snXVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1R5cGUgeW91ciB0ZXh0IGhlcmUuLi4nLFxyXG4gICAgICAgICAgICB0aGVtZTogJ3Nub3cnIC8vIG9yICdidWJibGUnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGV4YW1wbGVCYXNpYygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XHJcbiAgICBLVEZvcm1zUXVpbGxCYXNpYy5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RGb3Jtc1F1aWxsQmFzaWMiLCJleGFtcGxlQmFzaWMiLCJxdWlsbCIsIlF1aWxsIiwibW9kdWxlcyIsInRvb2xiYXIiLCJoZWFkZXIiLCJwbGFjZWhvbGRlciIsInRoZW1lIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/editors/quill/basic.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/editors/quill/basic.js"]();
/******/ 	
/******/ })()
;