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

/***/ "./resources/assets/core/js/custom/utilities/modals/create-project/team.js":
/*!*********************************************************************************!*\
  !*** ./resources/assets/core/js/custom/utilities/modals/create-project/team.js ***!
  \*********************************************************************************/
/***/ ((module) => {

eval("\n\n// Class definition\nvar KTModalCreateProjectTeam = function () {\n  // Variables\n  var nextButton;\n  var previousButton;\n  var form;\n  var stepper;\n\n  // Private functions\n  var handleForm = function handleForm() {\n    nextButton.addEventListener('click', function (e) {\n      // Prevent default button action\n      e.preventDefault();\n\n      // Disable button to avoid multiple click \n      nextButton.disabled = true;\n\n      // Show loading indication\n      nextButton.setAttribute('data-kt-indicator', 'on');\n\n      // Simulate form submission\n      setTimeout(function () {\n        // Enable button\n        nextButton.disabled = false;\n\n        // Simulate form submission\n        nextButton.removeAttribute('data-kt-indicator');\n\n        // Go to next step\n        stepper.goNext();\n      }, 1500);\n    });\n    previousButton.addEventListener('click', function () {\n      stepper.goPrevious();\n    });\n  };\n  return {\n    // Public functions\n    init: function init() {\n      form = KTModalCreateProject.getForm();\n      stepper = KTModalCreateProject.getStepperObj();\n      nextButton = KTModalCreateProject.getStepper().querySelector('[data-kt-element=\"team-next\"]');\n      previousButton = KTModalCreateProject.getStepper().querySelector('[data-kt-element=\"team-previous\"]');\n      handleForm();\n    }\n  };\n}();\n\n// Webpack support\nif ( true && typeof module.exports !== 'undefined') {\n  window.KTModalCreateProjectTeam = module.exports = KTModalCreateProjectTeam;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL3V0aWxpdGllcy9tb2RhbHMvY3JlYXRlLXByb2plY3QvdGVhbS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBLElBQUlBLHdCQUF3QixHQUFHLFlBQVk7RUFDMUM7RUFDQSxJQUFJQyxVQUFVO0VBQ2QsSUFBSUMsY0FBYztFQUNsQixJQUFJQyxJQUFJO0VBQ1IsSUFBSUMsT0FBTzs7RUFFWDtFQUNBLElBQUlDLFVBQVUsR0FBRyxTQUFiQSxVQUFVLEdBQWM7SUFDM0JKLFVBQVUsQ0FBQ0ssZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVVDLENBQUMsRUFBRTtNQUNqRDtNQUNBQSxDQUFDLENBQUNDLGNBQWMsRUFBRTs7TUFFbEI7TUFDQVAsVUFBVSxDQUFDUSxRQUFRLEdBQUcsSUFBSTs7TUFFMUI7TUFDQVIsVUFBVSxDQUFDUyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDOztNQUVsRDtNQUNBQyxVQUFVLENBQUMsWUFBVztRQUNyQjtRQUNBVixVQUFVLENBQUNRLFFBQVEsR0FBRyxLQUFLOztRQUUzQjtRQUNBUixVQUFVLENBQUNXLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQzs7UUFFL0M7UUFDQVIsT0FBTyxDQUFDUyxNQUFNLEVBQUU7TUFDakIsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUNULENBQUMsQ0FBQztJQUVGWCxjQUFjLENBQUNJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO01BQ3BERixPQUFPLENBQUNVLFVBQVUsRUFBRTtJQUNyQixDQUFDLENBQUM7RUFDSCxDQUFDO0VBRUQsT0FBTztJQUNOO0lBQ0FDLElBQUksRUFBRSxnQkFBWTtNQUNqQlosSUFBSSxHQUFHYSxvQkFBb0IsQ0FBQ0MsT0FBTyxFQUFFO01BQ3JDYixPQUFPLEdBQUdZLG9CQUFvQixDQUFDRSxhQUFhLEVBQUU7TUFDOUNqQixVQUFVLEdBQUdlLG9CQUFvQixDQUFDRyxVQUFVLEVBQUUsQ0FBQ0MsYUFBYSxDQUFDLCtCQUErQixDQUFDO01BQzdGbEIsY0FBYyxHQUFHYyxvQkFBb0IsQ0FBQ0csVUFBVSxFQUFFLENBQUNDLGFBQWEsQ0FBQyxtQ0FBbUMsQ0FBQztNQUVyR2YsVUFBVSxFQUFFO0lBQ2I7RUFDRCxDQUFDO0FBQ0YsQ0FBQyxFQUFFOztBQUVIO0FBQ0EsSUFBSSxLQUE2QixJQUFJLE9BQU9nQixNQUFNLENBQUNDLE9BQU8sS0FBSyxXQUFXLEVBQUU7RUFDM0VDLE1BQU0sQ0FBQ3ZCLHdCQUF3QixHQUFHcUIsTUFBTSxDQUFDQyxPQUFPLEdBQUd0Qix3QkFBd0I7QUFDNUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL3V0aWxpdGllcy9tb2RhbHMvY3JlYXRlLXByb2plY3QvdGVhbS5qcz80N2M4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RNb2RhbENyZWF0ZVByb2plY3RUZWFtID0gZnVuY3Rpb24gKCkge1xyXG5cdC8vIFZhcmlhYmxlc1xyXG5cdHZhciBuZXh0QnV0dG9uO1xyXG5cdHZhciBwcmV2aW91c0J1dHRvbjtcclxuXHR2YXIgZm9ybTtcclxuXHR2YXIgc3RlcHBlcjtcclxuXHJcblx0Ly8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuXHR2YXIgaGFuZGxlRm9ybSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0bmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdC8vIFByZXZlbnQgZGVmYXVsdCBidXR0b24gYWN0aW9uXHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdC8vIERpc2FibGUgYnV0dG9uIHRvIGF2b2lkIG11bHRpcGxlIGNsaWNrIFxyXG5cdFx0XHRuZXh0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdC8vIFNob3cgbG9hZGluZyBpbmRpY2F0aW9uXHJcblx0XHRcdG5leHRCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicsICdvbicpO1xyXG5cclxuXHRcdFx0Ly8gU2ltdWxhdGUgZm9ybSBzdWJtaXNzaW9uXHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Ly8gRW5hYmxlIGJ1dHRvblxyXG5cdFx0XHRcdG5leHRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyBTaW11bGF0ZSBmb3JtIHN1Ym1pc3Npb25cclxuXHRcdFx0XHRuZXh0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyBHbyB0byBuZXh0IHN0ZXBcclxuXHRcdFx0XHRzdGVwcGVyLmdvTmV4dCgpO1xyXG5cdFx0XHR9LCAxNTAwKTsgXHRcdFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cHJldmlvdXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHN0ZXBwZXIuZ29QcmV2aW91cygpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Ly8gUHVibGljIGZ1bmN0aW9uc1xyXG5cdFx0aW5pdDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRmb3JtID0gS1RNb2RhbENyZWF0ZVByb2plY3QuZ2V0Rm9ybSgpO1xyXG5cdFx0XHRzdGVwcGVyID0gS1RNb2RhbENyZWF0ZVByb2plY3QuZ2V0U3RlcHBlck9iaigpO1xyXG5cdFx0XHRuZXh0QnV0dG9uID0gS1RNb2RhbENyZWF0ZVByb2plY3QuZ2V0U3RlcHBlcigpLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LWVsZW1lbnQ9XCJ0ZWFtLW5leHRcIl0nKTtcclxuXHRcdFx0cHJldmlvdXNCdXR0b24gPSBLVE1vZGFsQ3JlYXRlUHJvamVjdC5nZXRTdGVwcGVyKCkucXVlcnlTZWxlY3RvcignW2RhdGEta3QtZWxlbWVudD1cInRlYW0tcHJldmlvdXNcIl0nKTtcclxuXHJcblx0XHRcdGhhbmRsZUZvcm0oKTtcclxuXHRcdH1cclxuXHR9O1xyXG59KCk7XHJcblxyXG4vLyBXZWJwYWNrIHN1cHBvcnRcclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHR3aW5kb3cuS1RNb2RhbENyZWF0ZVByb2plY3RUZWFtID0gbW9kdWxlLmV4cG9ydHMgPSBLVE1vZGFsQ3JlYXRlUHJvamVjdFRlYW07XHJcbn0iXSwibmFtZXMiOlsiS1RNb2RhbENyZWF0ZVByb2plY3RUZWFtIiwibmV4dEJ1dHRvbiIsInByZXZpb3VzQnV0dG9uIiwiZm9ybSIsInN0ZXBwZXIiLCJoYW5kbGVGb3JtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpc2FibGVkIiwic2V0QXR0cmlidXRlIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsImdvTmV4dCIsImdvUHJldmlvdXMiLCJpbml0IiwiS1RNb2RhbENyZWF0ZVByb2plY3QiLCJnZXRGb3JtIiwiZ2V0U3RlcHBlck9iaiIsImdldFN0ZXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwibW9kdWxlIiwiZXhwb3J0cyIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/utilities/modals/create-project/team.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/core/js/custom/utilities/modals/create-project/team.js");
/******/ 	
/******/ })()
;