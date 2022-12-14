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

/***/ "./resources/assets/core/js/custom/documentation/charts/flotcharts/pie.js":
/*!********************************************************************************!*\
  !*** ./resources/assets/core/js/custom/documentation/charts/flotcharts/pie.js ***!
  \********************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTFlotDemoPie = function () {\n  // Private functions\n  var examplePie = function examplePie() {\n    var data = [{\n      label: \"CSS\",\n      data: 10,\n      color: KTUtil.getCssVariableValue('--kt-active-primary')\n    }, {\n      label: \"HTML5\",\n      data: 40,\n      color: KTUtil.getCssVariableValue('--kt-active-success')\n    }, {\n      label: \"PHP\",\n      data: 30,\n      color: KTUtil.getCssVariableValue('--kt-active-danger')\n    }, {\n      label: \"Angular\",\n      data: 20,\n      color: KTUtil.getCssVariableValue('--kt-active-warning')\n    }];\n    $.plot($(\"#kt_docs_flot_pie\"), data, {\n      series: {\n        pie: {\n          show: true\n        }\n      }\n    });\n  };\n  return {\n    // Public Functions\n    init: function init() {\n      examplePie();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTFlotDemoPie.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vY2hhcnRzL2Zsb3RjaGFydHMvcGllLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0EsSUFBSUEsYUFBYSxHQUFHLFlBQVk7RUFDNUI7RUFDQSxJQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBVSxHQUFlO0lBQ3pCLElBQUlDLElBQUksR0FBRyxDQUNQO01BQUVDLEtBQUssRUFBRSxLQUFLO01BQUVELElBQUksRUFBRSxFQUFFO01BQUVFLEtBQUssRUFBRUMsTUFBTSxDQUFDQyxtQkFBbUIsQ0FBQyxxQkFBcUI7SUFBRSxDQUFDLEVBQ3BGO01BQUVILEtBQUssRUFBRSxPQUFPO01BQUVELElBQUksRUFBRSxFQUFFO01BQUVFLEtBQUssRUFBRUMsTUFBTSxDQUFDQyxtQkFBbUIsQ0FBQyxxQkFBcUI7SUFBRSxDQUFDLEVBQ3RGO01BQUVILEtBQUssRUFBRSxLQUFLO01BQUVELElBQUksRUFBRSxFQUFFO01BQUVFLEtBQUssRUFBRUMsTUFBTSxDQUFDQyxtQkFBbUIsQ0FBQyxvQkFBb0I7SUFBRSxDQUFDLEVBQ25GO01BQUVILEtBQUssRUFBRSxTQUFTO01BQUVELElBQUksRUFBRSxFQUFFO01BQUVFLEtBQUssRUFBRUMsTUFBTSxDQUFDQyxtQkFBbUIsQ0FBQyxxQkFBcUI7SUFBRSxDQUFDLENBQzNGO0lBRURDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRCxDQUFDLENBQUMsbUJBQW1CLENBQUMsRUFBRUwsSUFBSSxFQUFFO01BQ2pDTyxNQUFNLEVBQUU7UUFDSkMsR0FBRyxFQUFFO1VBQ0RDLElBQUksRUFBRTtRQUNWO01BQ0o7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsT0FBTztJQUNIO0lBQ0FDLElBQUksRUFBRSxnQkFBWTtNQUNkWCxVQUFVLEVBQUU7SUFDaEI7RUFDSixDQUFDO0FBQ0wsQ0FBQyxFQUFFOztBQUVIO0FBQ0FJLE1BQU0sQ0FBQ1Esa0JBQWtCLENBQUMsWUFBWTtFQUNsQ2IsYUFBYSxDQUFDWSxJQUFJLEVBQUU7QUFDeEIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9jb3JlL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9mbG90Y2hhcnRzL3BpZS5qcz9iZGQ1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RGbG90RGVtb1BpZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZXhhbXBsZVBpZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IFtcclxuICAgICAgICAgICAgeyBsYWJlbDogXCJDU1NcIiwgZGF0YTogMTAsIGNvbG9yOiBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1rdC1hY3RpdmUtcHJpbWFyeScpIH0sXHJcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiSFRNTDVcIiwgZGF0YTogNDAsIGNvbG9yOiBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1rdC1hY3RpdmUtc3VjY2VzcycpIH0sXHJcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiUEhQXCIsIGRhdGE6IDMwLCBjb2xvcjogS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0ta3QtYWN0aXZlLWRhbmdlcicpIH0sXHJcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiQW5ndWxhclwiLCBkYXRhOiAyMCwgY29sb3I6IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWt0LWFjdGl2ZS13YXJuaW5nJykgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgICQucGxvdCgkKFwiI2t0X2RvY3NfZmxvdF9waWVcIiksIGRhdGEsIHtcclxuICAgICAgICAgICAgc2VyaWVzOiB7XHJcbiAgICAgICAgICAgICAgICBwaWU6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGV4YW1wbGVQaWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcclxuICAgIEtURmxvdERlbW9QaWUuaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIktURmxvdERlbW9QaWUiLCJleGFtcGxlUGllIiwiZGF0YSIsImxhYmVsIiwiY29sb3IiLCJLVFV0aWwiLCJnZXRDc3NWYXJpYWJsZVZhbHVlIiwiJCIsInBsb3QiLCJzZXJpZXMiLCJwaWUiLCJzaG93IiwiaW5pdCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/documentation/charts/flotcharts/pie.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/documentation/charts/flotcharts/pie.js"]();
/******/ 	
/******/ })()
;