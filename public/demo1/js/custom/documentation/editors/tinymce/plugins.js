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

/***/ "./resources/assets/core/js/custom/documentation/editors/tinymce/plugins.js":
/*!**********************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/editors/tinymce/plugins.js ***!
  \**********************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTFormsTinyMCEPlugins = function () {\n  // Private functions\n  var examplePlugins = function examplePlugins() {\n    tinymce.init({\n      selector: '#kt_docs_tinymce_plugins',\n      height: \"480\",\n      toolbar: 'advlist | autolink | link image | lists charmap | print preview',\n      plugins: 'advlist autolink link image lists charmap print preview'\n    });\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      examplePlugins();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsTinyMCEPlugins.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy90aW55bWNlL3BsdWdpbnMuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQSxJQUFJQSxxQkFBcUIsR0FBRyxZQUFXO0VBQ25DO0VBQ0EsSUFBSUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjLEdBQWM7SUFDNUJDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDO01BQ1RDLFFBQVEsRUFBRSwwQkFBMEI7TUFDcENDLE1BQU0sRUFBRyxLQUFLO01BQ2RDLE9BQU8sRUFBRSxpRUFBaUU7TUFDMUVDLE9BQU8sRUFBRztJQUNkLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRCxPQUFPO0lBQ0g7SUFDQUosSUFBSSxFQUFFLGdCQUFXO01BQ2JGLGNBQWMsRUFBRTtJQUNwQjtFQUNKLENBQUM7QUFDTCxDQUFDLEVBQUU7O0FBRUg7QUFDQU8sTUFBTSxDQUFDQyxrQkFBa0IsQ0FBQyxZQUFXO0VBQ2pDVCxxQkFBcUIsQ0FBQ0csSUFBSSxFQUFFO0FBQ2hDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvY29yZS9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9lZGl0b3JzL3RpbnltY2UvcGx1Z2lucy5qcz85ZGM4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RGb3Jtc1RpbnlNQ0VQbHVnaW5zID0gZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xyXG4gICAgdmFyIGV4YW1wbGVQbHVnaW5zID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGlueW1jZS5pbml0KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICcja3RfZG9jc190aW55bWNlX3BsdWdpbnMnLFxyXG4gICAgICAgICAgICBoZWlnaHQgOiBcIjQ4MFwiLFxyXG4gICAgICAgICAgICB0b29sYmFyOiAnYWR2bGlzdCB8IGF1dG9saW5rIHwgbGluayBpbWFnZSB8IGxpc3RzIGNoYXJtYXAgfCBwcmludCBwcmV2aWV3JyxcclxuICAgICAgICAgICAgcGx1Z2lucyA6ICdhZHZsaXN0IGF1dG9saW5rIGxpbmsgaW1hZ2UgbGlzdHMgY2hhcm1hcCBwcmludCBwcmV2aWV3J1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBleGFtcGxlUGx1Z2lucygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XHJcbiAgICBLVEZvcm1zVGlueU1DRVBsdWdpbnMuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktURm9ybXNUaW55TUNFUGx1Z2lucyIsImV4YW1wbGVQbHVnaW5zIiwidGlueW1jZSIsImluaXQiLCJzZWxlY3RvciIsImhlaWdodCIsInRvb2xiYXIiLCJwbHVnaW5zIiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/editors/tinymce/plugins.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/editors/tinymce/plugins.js"]();
/******/ 	
/******/ })()
;