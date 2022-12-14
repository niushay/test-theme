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

/***/ "./resources/assets/core/js/custom/documentation/general/draggable/multiple-containers.js":
/*!************************************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/general/draggable/multiple-containers.js ***!
  \************************************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTDraggableMultiple = function () {\n  // Private functions\n  var exampleMultiple = function exampleMultiple() {\n    var containers = document.querySelectorAll('.draggable-zone');\n    if (containers.length === 0) {\n      return false;\n    }\n    var swappable = new Sortable[\"default\"](containers, {\n      draggable: '.draggable',\n      handle: '.draggable .draggable-handle',\n      mirror: {\n        //appendTo: selector,\n        appendTo: 'body',\n        constrainDimensions: true\n      }\n    });\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      exampleMultiple();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTDraggableMultiple.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9kcmFnZ2FibGUvbXVsdGlwbGUtY29udGFpbmVycy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBLElBQUlBLG1CQUFtQixHQUFHLFlBQVc7RUFDakM7RUFDQSxJQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWUsR0FBYztJQUM3QixJQUFJQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUM7SUFFN0QsSUFBSUYsVUFBVSxDQUFDRyxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQ3pCLE9BQU8sS0FBSztJQUNoQjtJQUVBLElBQUlDLFNBQVMsR0FBRyxJQUFJQyxRQUFRLFdBQVEsQ0FBQ0wsVUFBVSxFQUFFO01BQzdDTSxTQUFTLEVBQUUsWUFBWTtNQUN2QkMsTUFBTSxFQUFFLDhCQUE4QjtNQUN0Q0MsTUFBTSxFQUFFO1FBQ0o7UUFDQUMsUUFBUSxFQUFFLE1BQU07UUFDaEJDLG1CQUFtQixFQUFFO01BQ3pCO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELE9BQU87SUFDSDtJQUNBQyxJQUFJLEVBQUUsZ0JBQVc7TUFDYlosZUFBZSxFQUFFO0lBQ3JCO0VBQ0osQ0FBQztBQUNMLENBQUMsRUFBRTs7QUFFSDtBQUNBYSxNQUFNLENBQUNDLGtCQUFrQixDQUFDLFlBQVc7RUFDakNmLG1CQUFtQixDQUFDYSxJQUFJLEVBQUU7QUFDOUIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9jb3JlL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvZHJhZ2dhYmxlL211bHRpcGxlLWNvbnRhaW5lcnMuanM/MWYyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtURHJhZ2dhYmxlTXVsdGlwbGUgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZXhhbXBsZU11bHRpcGxlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhZ2dhYmxlLXpvbmUnKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRhaW5lcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzd2FwcGFibGUgPSBuZXcgU29ydGFibGUuZGVmYXVsdChjb250YWluZXJzLCB7XHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogJy5kcmFnZ2FibGUnLFxyXG4gICAgICAgICAgICBoYW5kbGU6ICcuZHJhZ2dhYmxlIC5kcmFnZ2FibGUtaGFuZGxlJyxcclxuICAgICAgICAgICAgbWlycm9yOiB7XHJcbiAgICAgICAgICAgICAgICAvL2FwcGVuZFRvOiBzZWxlY3RvcixcclxuICAgICAgICAgICAgICAgIGFwcGVuZFRvOiAnYm9keScsXHJcbiAgICAgICAgICAgICAgICBjb25zdHJhaW5EaW1lbnNpb25zOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZXhhbXBsZU11bHRpcGxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcclxuICAgIEtURHJhZ2dhYmxlTXVsdGlwbGUuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktURHJhZ2dhYmxlTXVsdGlwbGUiLCJleGFtcGxlTXVsdGlwbGUiLCJjb250YWluZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwic3dhcHBhYmxlIiwiU29ydGFibGUiLCJkcmFnZ2FibGUiLCJoYW5kbGUiLCJtaXJyb3IiLCJhcHBlbmRUbyIsImNvbnN0cmFpbkRpbWVuc2lvbnMiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/general/draggable/multiple-containers.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/general/draggable/multiple-containers.js"]();
/******/ 	
/******/ })()
;