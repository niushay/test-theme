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

/***/ "./resources/assets/core/js/custom/documentation/editors/ckeditor/balloon-block.js":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/editors/ckeditor/balloon-block.js ***!
  \*****************************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTFormsCKEditorBalloonBlock = function () {\n  // Private functions\n  var exampleBalloonBlock = function exampleBalloonBlock() {\n    BalloonEditor.create(document.querySelector('#kt_docs_ckeditor_balloon_block')).then(function (editor) {\n      console.log(editor);\n    })[\"catch\"](function (error) {\n      console.error(error);\n    });\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBalloonBlock();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsCKEditorBalloonBlock.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy9ja2VkaXRvci9iYWxsb29uLWJsb2NrLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0EsSUFBSUEsMkJBQTJCLEdBQUcsWUFBWTtFQUMxQztFQUNBLElBQUlDLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUIsR0FBZTtJQUNsQ0MsYUFBYSxDQUNSQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FDakVDLElBQUksQ0FBQyxVQUFBQyxNQUFNLEVBQUk7TUFDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU0sQ0FBQztJQUN2QixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUFHLEtBQUssRUFBSTtNQUNaRixPQUFPLENBQUNFLEtBQUssQ0FBQ0EsS0FBSyxDQUFDO0lBQ3hCLENBQUMsQ0FBQztFQUNWLENBQUM7RUFFRCxPQUFPO0lBQ0g7SUFDQUMsSUFBSSxFQUFFLGdCQUFZO01BQ2RWLG1CQUFtQixFQUFFO0lBQ3pCO0VBQ0osQ0FBQztBQUNMLENBQUMsRUFBRTs7QUFFSDtBQUNBVyxNQUFNLENBQUNDLGtCQUFrQixDQUFDLFlBQVk7RUFDbENiLDJCQUEyQixDQUFDVyxJQUFJLEVBQUU7QUFDdEMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9jb3JlL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2VkaXRvcnMvY2tlZGl0b3IvYmFsbG9vbi1ibG9jay5qcz8zOTU5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RGb3Jtc0NLRWRpdG9yQmFsbG9vbkJsb2NrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBleGFtcGxlQmFsbG9vbkJsb2NrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIEJhbGxvb25FZGl0b3JcclxuICAgICAgICAgICAgLmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfZG9jc19ja2VkaXRvcl9iYWxsb29uX2Jsb2NrJykpXHJcbiAgICAgICAgICAgIC50aGVuKGVkaXRvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlZGl0b3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZXhhbXBsZUJhbGxvb25CbG9jaygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xyXG4gICAgS1RGb3Jtc0NLRWRpdG9yQmFsbG9vbkJsb2NrLmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVEZvcm1zQ0tFZGl0b3JCYWxsb29uQmxvY2siLCJleGFtcGxlQmFsbG9vbkJsb2NrIiwiQmFsbG9vbkVkaXRvciIsImNyZWF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRoZW4iLCJlZGl0b3IiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/editors/ckeditor/balloon-block.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/editors/ckeditor/balloon-block.js"]();
/******/ 	
/******/ })()
;