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

/***/ "./resources/assets/core/js/custom/apps/projects/list/list.js":
/*!********************************************************************!*\
  !*** ./resources/assets/core/js/custom/apps/projects/list/list.js ***!
  \********************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTProjectList = function () {\n  var initChart = function initChart() {\n    // init chart\n    var element = document.getElementById(\"kt_project_list_chart\");\n    if (!element) {\n      return;\n    }\n    var config = {\n      type: 'doughnut',\n      data: {\n        datasets: [{\n          data: [30, 45, 25],\n          backgroundColor: ['#00A3FF', '#50CD89', '#E4E6EF']\n        }],\n        labels: ['Active', 'Completed', 'Yet to start']\n      },\n      options: {\n        chart: {\n          fontFamily: 'inherit'\n        },\n        borderWidth: 0,\n        cutout: '75%',\n        cutoutPercentage: 65,\n        responsive: true,\n        maintainAspectRatio: false,\n        title: {\n          display: false\n        },\n        animation: {\n          animateScale: true,\n          animateRotate: true\n        },\n        stroke: {\n          width: 0\n        },\n        tooltips: {\n          enabled: true,\n          intersect: false,\n          mode: 'nearest',\n          bodySpacing: 5,\n          yPadding: 10,\n          xPadding: 10,\n          caretPadding: 0,\n          displayColors: false,\n          backgroundColor: '#20D489',\n          titleFontColor: '#ffffff',\n          cornerRadius: 4,\n          footerSpacing: 0,\n          titleSpacing: 0\n        },\n        plugins: {\n          legend: {\n            display: false\n          }\n        }\n      }\n    };\n    var ctx = element.getContext('2d');\n    var myDoughnut = new Chart(ctx, config);\n  };\n\n  // Public methods\n  return {\n    init: function init() {\n      initChart();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTProjectList.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2FwcHMvcHJvamVjdHMvbGlzdC9saXN0LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0EsSUFBSUEsYUFBYSxHQUFHLFlBQVk7RUFDNUIsSUFBSUMsU0FBUyxHQUFHLFNBQVpBLFNBQVMsR0FBZTtJQUN4QjtJQUNBLElBQUlDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsdUJBQXVCLENBQUM7SUFFOUQsSUFBSSxDQUFDRixPQUFPLEVBQUU7TUFDVjtJQUNKO0lBRUEsSUFBSUcsTUFBTSxHQUFHO01BQ1RDLElBQUksRUFBRSxVQUFVO01BQ2hCQyxJQUFJLEVBQUU7UUFDRkMsUUFBUSxFQUFFLENBQUM7VUFDUEQsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7VUFDbEJFLGVBQWUsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztRQUNyRCxDQUFDLENBQUM7UUFDRkMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxjQUFjO01BQ2xELENBQUM7TUFDREMsT0FBTyxFQUFFO1FBQ0xDLEtBQUssRUFBRTtVQUNIQyxVQUFVLEVBQUU7UUFDaEIsQ0FBQztRQUNEQyxXQUFXLEVBQUUsQ0FBQztRQUNkQyxNQUFNLEVBQUUsS0FBSztRQUNiQyxnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCQyxVQUFVLEVBQUUsSUFBSTtRQUNoQkMsbUJBQW1CLEVBQUUsS0FBSztRQUMxQkMsS0FBSyxFQUFFO1VBQ0hDLE9BQU8sRUFBRTtRQUNiLENBQUM7UUFDREMsU0FBUyxFQUFFO1VBQ1BDLFlBQVksRUFBRSxJQUFJO1VBQ2xCQyxhQUFhLEVBQUU7UUFDbkIsQ0FBQztRQUNEQyxNQUFNLEVBQUU7VUFDSkMsS0FBSyxFQUFFO1FBQ1gsQ0FBQztRQUNEQyxRQUFRLEVBQUU7VUFDTkMsT0FBTyxFQUFFLElBQUk7VUFDYkMsU0FBUyxFQUFFLEtBQUs7VUFDaEJDLElBQUksRUFBRSxTQUFTO1VBQ2ZDLFdBQVcsRUFBRSxDQUFDO1VBQ2RDLFFBQVEsRUFBRSxFQUFFO1VBQ1pDLFFBQVEsRUFBRSxFQUFFO1VBQ1pDLFlBQVksRUFBRSxDQUFDO1VBQ2ZDLGFBQWEsRUFBRSxLQUFLO1VBQ3BCekIsZUFBZSxFQUFFLFNBQVM7VUFDMUIwQixjQUFjLEVBQUUsU0FBUztVQUN6QkMsWUFBWSxFQUFFLENBQUM7VUFDZkMsYUFBYSxFQUFFLENBQUM7VUFDaEJDLFlBQVksRUFBRTtRQUNsQixDQUFDO1FBQ0RDLE9BQU8sRUFBRTtVQUNMQyxNQUFNLEVBQUU7WUFDSnBCLE9BQU8sRUFBRTtVQUNiO1FBQ0o7TUFDSjtJQUNKLENBQUM7SUFFRCxJQUFJcUIsR0FBRyxHQUFHdkMsT0FBTyxDQUFDd0MsVUFBVSxDQUFDLElBQUksQ0FBQztJQUNsQyxJQUFJQyxVQUFVLEdBQUcsSUFBSUMsS0FBSyxDQUFDSCxHQUFHLEVBQUVwQyxNQUFNLENBQUM7RUFDM0MsQ0FBQzs7RUFFRDtFQUNBLE9BQU87SUFDSHdDLElBQUksRUFBRSxnQkFBWTtNQUNkNUMsU0FBUyxFQUFFO0lBQ2Y7RUFDSixDQUFDO0FBQ0wsQ0FBQyxFQUFFOztBQUVIO0FBQ0E2QyxNQUFNLENBQUNDLGtCQUFrQixDQUFDLFlBQVc7RUFDakMvQyxhQUFhLENBQUM2QyxJQUFJLEVBQUU7QUFDeEIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9jb3JlL2pzL2N1c3RvbS9hcHBzL3Byb2plY3RzL2xpc3QvbGlzdC5qcz81M2JlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RQcm9qZWN0TGlzdCA9IGZ1bmN0aW9uICgpIHsgICAgXHJcbiAgICB2YXIgaW5pdENoYXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGluaXQgY2hhcnRcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia3RfcHJvamVjdF9saXN0X2NoYXJ0XCIpO1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ2RvdWdobnV0JyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogWzMwLCA0NSwgMjVdLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogWycjMDBBM0ZGJywgJyM1MENEODknLCAnI0U0RTZFRiddXHJcbiAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgIGxhYmVsczogWydBY3RpdmUnLCAnQ29tcGxldGVkJywgJ1lldCB0byBzdGFydCddXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICBjdXRvdXQ6ICc3NSUnLFxyXG4gICAgICAgICAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogNjUsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVNjYWxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVSb3RhdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6ICduZWFyZXN0JyxcclxuICAgICAgICAgICAgICAgICAgICBib2R5U3BhY2luZzogNSxcclxuICAgICAgICAgICAgICAgICAgICB5UGFkZGluZzogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgeFBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmV0UGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Q29sb3JzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjBENDg5JyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZUZvbnRDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvcm5lclJhZGl1czogNCxcclxuICAgICAgICAgICAgICAgICAgICBmb290ZXJTcGFjaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlU3BhY2luZzogMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGN0eCA9IGVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB2YXIgbXlEb3VnaG51dCA9IG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHVibGljIG1ldGhvZHNcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbml0Q2hhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0oKTtcclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XHJcbiAgICBLVFByb2plY3RMaXN0LmluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJLVFByb2plY3RMaXN0IiwiaW5pdENoYXJ0IiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25maWciLCJ0eXBlIiwiZGF0YSIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwibGFiZWxzIiwib3B0aW9ucyIsImNoYXJ0IiwiZm9udEZhbWlseSIsImJvcmRlcldpZHRoIiwiY3V0b3V0IiwiY3V0b3V0UGVyY2VudGFnZSIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwidGl0bGUiLCJkaXNwbGF5IiwiYW5pbWF0aW9uIiwiYW5pbWF0ZVNjYWxlIiwiYW5pbWF0ZVJvdGF0ZSIsInN0cm9rZSIsIndpZHRoIiwidG9vbHRpcHMiLCJlbmFibGVkIiwiaW50ZXJzZWN0IiwibW9kZSIsImJvZHlTcGFjaW5nIiwieVBhZGRpbmciLCJ4UGFkZGluZyIsImNhcmV0UGFkZGluZyIsImRpc3BsYXlDb2xvcnMiLCJ0aXRsZUZvbnRDb2xvciIsImNvcm5lclJhZGl1cyIsImZvb3RlclNwYWNpbmciLCJ0aXRsZVNwYWNpbmciLCJwbHVnaW5zIiwibGVnZW5kIiwiY3R4IiwiZ2V0Q29udGV4dCIsIm15RG91Z2hudXQiLCJDaGFydCIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/apps/projects/list/list.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/apps/projects/list/list.js"]();
/******/ 	
/******/ })()
;