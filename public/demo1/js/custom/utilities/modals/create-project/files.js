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

/***/ "./resources/assets/core/js/custom/utilities/modals/create-project/files.js":
/*!**********************************************************************************!*\
  !*** ./resources/assets/core/js/custom/utilities/modals/create-project/files.js ***!
  \**********************************************************************************/
/***/ ((module) => {

eval("\n\n// Class definition\nvar KTModalCreateProjectFiles = function () {\n  // Variables\n  var nextButton;\n  var previousButton;\n  var form;\n  var stepper;\n\n  // Private functions\n  var initForm = function initForm() {\n    // Project logo\n    // For more info about Dropzone plugin visit:  https://www.dropzonejs.com/#usage\n    var myDropzone = new Dropzone(\"#kt_modal_create_project_files_upload\", {\n      url: \"https://keenthemes.com/scripts/void.php\",\n      // Set the url for your upload script location\n      paramName: \"file\",\n      // The name that will be used to transfer the file\n      maxFiles: 10,\n      maxFilesize: 10,\n      // MB\n      addRemoveLinks: true,\n      accept: function accept(file, done) {\n        if (file.name == \"justinbieber.jpg\") {\n          done(\"Naha, you don't.\");\n        } else {\n          done();\n        }\n      }\n    });\n  };\n  var handleForm = function handleForm() {\n    nextButton.addEventListener('click', function (e) {\n      // Prevent default button action\n      e.preventDefault();\n\n      // Disable button to avoid multiple click \n      nextButton.disabled = true;\n\n      // Show loading indication\n      nextButton.setAttribute('data-kt-indicator', 'on');\n\n      // Simulate form submission\n      setTimeout(function () {\n        // Hide loading indication\n        nextButton.removeAttribute('data-kt-indicator');\n\n        // Enable button\n        nextButton.disabled = false;\n\n        // Go to next step\n        stepper.goNext();\n      }, 1500);\n    });\n    previousButton.addEventListener('click', function () {\n      stepper.goPrevious();\n    });\n  };\n  return {\n    // Public functions\n    init: function init() {\n      form = KTModalCreateProject.getForm();\n      stepper = KTModalCreateProject.getStepperObj();\n      nextButton = KTModalCreateProject.getStepper().querySelector('[data-kt-element=\"files-next\"]');\n      previousButton = KTModalCreateProject.getStepper().querySelector('[data-kt-element=\"files-previous\"]');\n      initForm();\n      handleForm();\n    }\n  };\n}();\n\n// Webpack support\nif ( true && typeof module.exports !== 'undefined') {\n  window.KTModalCreateProjectFiles = module.exports = KTModalCreateProjectFiles;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL3V0aWxpdGllcy9tb2RhbHMvY3JlYXRlLXByb2plY3QvZmlsZXMuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQSxJQUFJQSx5QkFBeUIsR0FBRyxZQUFZO0VBQzNDO0VBQ0EsSUFBSUMsVUFBVTtFQUNkLElBQUlDLGNBQWM7RUFDbEIsSUFBSUMsSUFBSTtFQUNSLElBQUlDLE9BQU87O0VBRVg7RUFDQSxJQUFJQyxRQUFRLEdBQUcsU0FBWEEsUUFBUSxHQUFjO0lBQ3pCO0lBQ0E7SUFDQSxJQUFJQyxVQUFVLEdBQUcsSUFBSUMsUUFBUSxDQUFDLHVDQUF1QyxFQUFFO01BQ3RFQyxHQUFHLEVBQUUseUNBQXlDO01BQUU7TUFDdkNDLFNBQVMsRUFBRSxNQUFNO01BQUU7TUFDbkJDLFFBQVEsRUFBRSxFQUFFO01BQ1pDLFdBQVcsRUFBRSxFQUFFO01BQUU7TUFDakJDLGNBQWMsRUFBRSxJQUFJO01BQ3BCQyxNQUFNLEVBQUUsZ0JBQVNDLElBQUksRUFBRUMsSUFBSSxFQUFFO1FBQ3pCLElBQUlELElBQUksQ0FBQ0UsSUFBSSxJQUFJLGtCQUFrQixFQUFFO1VBQ2pDRCxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDNUIsQ0FBQyxNQUFNO1VBQ0hBLElBQUksRUFBRTtRQUNWO01BQ0o7SUFDVixDQUFDLENBQUM7RUFDSCxDQUFDO0VBRUQsSUFBSUUsVUFBVSxHQUFHLFNBQWJBLFVBQVUsR0FBYztJQUMzQmhCLFVBQVUsQ0FBQ2lCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVQyxDQUFDLEVBQUU7TUFDakQ7TUFDQUEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7O01BRWxCO01BQ0FuQixVQUFVLENBQUNvQixRQUFRLEdBQUcsSUFBSTs7TUFFMUI7TUFDQXBCLFVBQVUsQ0FBQ3FCLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUM7O01BRWxEO01BQ0FDLFVBQVUsQ0FBQyxZQUFXO1FBQ3JCO1FBQ0F0QixVQUFVLENBQUN1QixlQUFlLENBQUMsbUJBQW1CLENBQUM7O1FBRS9DO1FBQ0F2QixVQUFVLENBQUNvQixRQUFRLEdBQUcsS0FBSzs7UUFFM0I7UUFDQWpCLE9BQU8sQ0FBQ3FCLE1BQU0sRUFBRTtNQUNqQixDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ1QsQ0FBQyxDQUFDO0lBRUZ2QixjQUFjLENBQUNnQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWTtNQUNwRGQsT0FBTyxDQUFDc0IsVUFBVSxFQUFFO0lBQ3JCLENBQUMsQ0FBQztFQUNILENBQUM7RUFFRCxPQUFPO0lBQ047SUFDQUMsSUFBSSxFQUFFLGdCQUFZO01BQ2pCeEIsSUFBSSxHQUFHeUIsb0JBQW9CLENBQUNDLE9BQU8sRUFBRTtNQUNyQ3pCLE9BQU8sR0FBR3dCLG9CQUFvQixDQUFDRSxhQUFhLEVBQUU7TUFDOUM3QixVQUFVLEdBQUcyQixvQkFBb0IsQ0FBQ0csVUFBVSxFQUFFLENBQUNDLGFBQWEsQ0FBQyxnQ0FBZ0MsQ0FBQztNQUM5RjlCLGNBQWMsR0FBRzBCLG9CQUFvQixDQUFDRyxVQUFVLEVBQUUsQ0FBQ0MsYUFBYSxDQUFDLG9DQUFvQyxDQUFDO01BRXRHM0IsUUFBUSxFQUFFO01BQ1ZZLFVBQVUsRUFBRTtJQUNiO0VBQ0QsQ0FBQztBQUNGLENBQUMsRUFBRTs7QUFFSDtBQUNBLElBQUksS0FBNkIsSUFBSSxPQUFPZ0IsTUFBTSxDQUFDQyxPQUFPLEtBQUssV0FBVyxFQUFFO0VBQzNFQyxNQUFNLENBQUNuQyx5QkFBeUIsR0FBR2lDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHbEMseUJBQXlCO0FBQzlFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9jb3JlL2pzL2N1c3RvbS91dGlsaXRpZXMvbW9kYWxzL2NyZWF0ZS1wcm9qZWN0L2ZpbGVzLmpzPzFjZTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVE1vZGFsQ3JlYXRlUHJvamVjdEZpbGVzID0gZnVuY3Rpb24gKCkge1xyXG5cdC8vIFZhcmlhYmxlc1xyXG5cdHZhciBuZXh0QnV0dG9uO1xyXG5cdHZhciBwcmV2aW91c0J1dHRvbjtcclxuXHR2YXIgZm9ybTtcclxuXHR2YXIgc3RlcHBlcjtcclxuXHJcblx0Ly8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuXHR2YXIgaW5pdEZvcm0gPSBmdW5jdGlvbigpIHtcclxuXHRcdC8vIFByb2plY3QgbG9nb1xyXG5cdFx0Ly8gRm9yIG1vcmUgaW5mbyBhYm91dCBEcm9wem9uZSBwbHVnaW4gdmlzaXQ6ICBodHRwczovL3d3dy5kcm9wem9uZWpzLmNvbS8jdXNhZ2VcclxuXHRcdHZhciBteURyb3B6b25lID0gbmV3IERyb3B6b25lKFwiI2t0X21vZGFsX2NyZWF0ZV9wcm9qZWN0X2ZpbGVzX3VwbG9hZFwiLCB7IFxyXG5cdFx0XHR1cmw6IFwiaHR0cHM6Ly9rZWVudGhlbWVzLmNvbS9zY3JpcHRzL3ZvaWQucGhwXCIsIC8vIFNldCB0aGUgdXJsIGZvciB5b3VyIHVwbG9hZCBzY3JpcHQgbG9jYXRpb25cclxuICAgICAgICAgICAgcGFyYW1OYW1lOiBcImZpbGVcIiwgLy8gVGhlIG5hbWUgdGhhdCB3aWxsIGJlIHVzZWQgdG8gdHJhbnNmZXIgdGhlIGZpbGVcclxuICAgICAgICAgICAgbWF4RmlsZXM6IDEwLFxyXG4gICAgICAgICAgICBtYXhGaWxlc2l6ZTogMTAsIC8vIE1CXHJcbiAgICAgICAgICAgIGFkZFJlbW92ZUxpbmtzOiB0cnVlLFxyXG4gICAgICAgICAgICBhY2NlcHQ6IGZ1bmN0aW9uKGZpbGUsIGRvbmUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxlLm5hbWUgPT0gXCJqdXN0aW5iaWViZXIuanBnXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKFwiTmFoYSwgeW91IGRvbid0LlwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblx0XHR9KTsgIFxyXG5cdH1cclxuXHJcblx0dmFyIGhhbmRsZUZvcm0gPSBmdW5jdGlvbigpIHtcclxuXHRcdG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHQvLyBQcmV2ZW50IGRlZmF1bHQgYnV0dG9uIGFjdGlvblxyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHQvLyBEaXNhYmxlIGJ1dHRvbiB0byBhdm9pZCBtdWx0aXBsZSBjbGljayBcclxuXHRcdFx0bmV4dEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0XHQvLyBTaG93IGxvYWRpbmcgaW5kaWNhdGlvblxyXG5cdFx0XHRuZXh0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InLCAnb24nKTtcclxuXHJcblx0XHRcdC8vIFNpbXVsYXRlIGZvcm0gc3VibWlzc2lvblxyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdC8vIEhpZGUgbG9hZGluZyBpbmRpY2F0aW9uXHJcblx0XHRcdFx0bmV4dEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJyk7XHJcblxyXG5cdFx0XHRcdC8vIEVuYWJsZSBidXR0b25cclxuXHRcdFx0XHRuZXh0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gR28gdG8gbmV4dCBzdGVwXHJcblx0XHRcdFx0c3RlcHBlci5nb05leHQoKTtcclxuXHRcdFx0fSwgMTUwMCk7IFx0XHRcclxuXHRcdH0pO1xyXG5cclxuXHRcdHByZXZpb3VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRzdGVwcGVyLmdvUHJldmlvdXMoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdC8vIFB1YmxpYyBmdW5jdGlvbnNcclxuXHRcdGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Zm9ybSA9IEtUTW9kYWxDcmVhdGVQcm9qZWN0LmdldEZvcm0oKTtcclxuXHRcdFx0c3RlcHBlciA9IEtUTW9kYWxDcmVhdGVQcm9qZWN0LmdldFN0ZXBwZXJPYmooKTtcclxuXHRcdFx0bmV4dEJ1dHRvbiA9IEtUTW9kYWxDcmVhdGVQcm9qZWN0LmdldFN0ZXBwZXIoKS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1lbGVtZW50PVwiZmlsZXMtbmV4dFwiXScpO1xyXG5cdFx0XHRwcmV2aW91c0J1dHRvbiA9IEtUTW9kYWxDcmVhdGVQcm9qZWN0LmdldFN0ZXBwZXIoKS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1lbGVtZW50PVwiZmlsZXMtcHJldmlvdXNcIl0nKTtcclxuXHJcblx0XHRcdGluaXRGb3JtKCk7XHJcblx0XHRcdGhhbmRsZUZvcm0oKTtcclxuXHRcdH1cclxuXHR9O1xyXG59KCk7XHJcblxyXG4vLyBXZWJwYWNrIHN1cHBvcnRcclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHR3aW5kb3cuS1RNb2RhbENyZWF0ZVByb2plY3RGaWxlcyA9IG1vZHVsZS5leHBvcnRzID0gS1RNb2RhbENyZWF0ZVByb2plY3RGaWxlcztcclxufVxyXG4iXSwibmFtZXMiOlsiS1RNb2RhbENyZWF0ZVByb2plY3RGaWxlcyIsIm5leHRCdXR0b24iLCJwcmV2aW91c0J1dHRvbiIsImZvcm0iLCJzdGVwcGVyIiwiaW5pdEZvcm0iLCJteURyb3B6b25lIiwiRHJvcHpvbmUiLCJ1cmwiLCJwYXJhbU5hbWUiLCJtYXhGaWxlcyIsIm1heEZpbGVzaXplIiwiYWRkUmVtb3ZlTGlua3MiLCJhY2NlcHQiLCJmaWxlIiwiZG9uZSIsIm5hbWUiLCJoYW5kbGVGb3JtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpc2FibGVkIiwic2V0QXR0cmlidXRlIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsImdvTmV4dCIsImdvUHJldmlvdXMiLCJpbml0IiwiS1RNb2RhbENyZWF0ZVByb2plY3QiLCJnZXRGb3JtIiwiZ2V0U3RlcHBlck9iaiIsImdldFN0ZXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwibW9kdWxlIiwiZXhwb3J0cyIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/utilities/modals/create-project/files.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/assets/core/js/custom/utilities/modals/create-project/files.js");
/******/ 	
/******/ })()
;