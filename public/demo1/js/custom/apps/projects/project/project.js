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

/***/ "./resources/assets/core/js/custom/apps/projects/project/project.js":
/*!**************************************************************************!*\
  !*** ./resources/assets/core/js/custom/apps/projects/project/project.js ***!
  \**************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTProjectOverview = function () {\n  // Colors\n  var primary = KTUtil.getCssVariableValue('--kt-primary');\n  var lightPrimary = KTUtil.getCssVariableValue('--kt-primary-light');\n  var success = KTUtil.getCssVariableValue('--kt-success');\n  var lightSuccess = KTUtil.getCssVariableValue('--kt-success-light');\n  var gray200 = KTUtil.getCssVariableValue('--kt-gray-200');\n  var gray500 = KTUtil.getCssVariableValue('--kt-gray-500');\n\n  // Private functions\n  var initChart = function initChart() {\n    // init chart\n    var element = document.getElementById(\"project_overview_chart\");\n    if (!element) {\n      return;\n    }\n    var config = {\n      type: 'doughnut',\n      data: {\n        datasets: [{\n          data: [30, 45, 25],\n          backgroundColor: ['#00A3FF', '#50CD89', '#E4E6EF']\n        }],\n        labels: ['Active', 'Completed', 'Yet to start']\n      },\n      options: {\n        chart: {\n          fontFamily: 'inherit'\n        },\n        cutoutPercentage: 75,\n        responsive: true,\n        maintainAspectRatio: false,\n        cutout: '75%',\n        title: {\n          display: false\n        },\n        animation: {\n          animateScale: true,\n          animateRotate: true\n        },\n        tooltips: {\n          enabled: true,\n          intersect: false,\n          mode: 'nearest',\n          bodySpacing: 5,\n          yPadding: 10,\n          xPadding: 10,\n          caretPadding: 0,\n          displayColors: false,\n          backgroundColor: '#20D489',\n          titleFontColor: '#ffffff',\n          cornerRadius: 4,\n          footerSpacing: 0,\n          titleSpacing: 0\n        },\n        plugins: {\n          legend: {\n            display: false\n          }\n        }\n      }\n    };\n    var ctx = element.getContext('2d');\n    var myDoughnut = new Chart(ctx, config);\n  };\n  var initGraph = function initGraph() {\n    var element = document.getElementById(\"kt_project_overview_graph\");\n    var height = parseInt(KTUtil.css(element, 'height'));\n    if (!element) {\n      return;\n    }\n    var options = {\n      series: [{\n        name: 'Incomplete',\n        data: [70, 70, 80, 80, 75, 75, 75]\n      }, {\n        name: 'Complete',\n        data: [55, 55, 60, 60, 55, 55, 60]\n      }],\n      chart: {\n        type: 'area',\n        height: height,\n        toolbar: {\n          show: false\n        }\n      },\n      plotOptions: {},\n      legend: {\n        show: false\n      },\n      dataLabels: {\n        enabled: false\n      },\n      fill: {\n        type: 'solid',\n        opacity: 1\n      },\n      stroke: {\n        curve: 'smooth',\n        show: true,\n        width: 3,\n        colors: [primary, success]\n      },\n      xaxis: {\n        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],\n        axisBorder: {\n          show: false\n        },\n        axisTicks: {\n          show: false\n        },\n        labels: {\n          style: {\n            colors: gray500,\n            fontSize: '12px'\n          }\n        },\n        crosshairs: {\n          position: 'front',\n          stroke: {\n            color: primary,\n            width: 1,\n            dashArray: 3\n          }\n        },\n        tooltip: {\n          enabled: true,\n          formatter: undefined,\n          offsetY: 0,\n          style: {\n            fontSize: '12px'\n          }\n        }\n      },\n      yaxis: {\n        labels: {\n          style: {\n            colors: gray500,\n            fontSize: '12px'\n          }\n        }\n      },\n      states: {\n        normal: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        hover: {\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        },\n        active: {\n          allowMultipleDataPointsSelection: false,\n          filter: {\n            type: 'none',\n            value: 0\n          }\n        }\n      },\n      tooltip: {\n        style: {\n          fontSize: '12px'\n        },\n        y: {\n          formatter: function formatter(val) {\n            return val + \" tasks\";\n          }\n        }\n      },\n      colors: [lightPrimary, lightSuccess],\n      grid: {\n        borderColor: gray200,\n        strokeDashArray: 4,\n        yaxis: {\n          lines: {\n            show: true\n          }\n        }\n      },\n      markers: {\n        //size: 5,\n        colors: [lightPrimary, lightSuccess],\n        strokeColor: [primary, success],\n        strokeWidth: 3\n      }\n    };\n    var chart = new ApexCharts(element, options);\n    chart.render();\n  };\n  var initTable = function initTable() {\n    var table = document.querySelector('#kt_profile_overview_table');\n    if (!table) {\n      return;\n    }\n\n    // Set date data order\n    var tableRows = table.querySelectorAll('tbody tr');\n    tableRows.forEach(function (row) {\n      var dateRow = row.querySelectorAll('td');\n      var realDate = moment(dateRow[1].innerHTML, \"MMM D, YYYY\").format();\n      dateRow[1].setAttribute('data-order', realDate);\n    });\n\n    // Init datatable --- more info on datatables: https://datatables.net/manual/\n    var datatable = $(table).DataTable({\n      \"info\": false,\n      'order': []\n    });\n\n    // Filter dropdown elements\n    var filterOrders = document.getElementById('kt_filter_orders');\n    var filterYear = document.getElementById('kt_filter_year');\n\n    // Filter by order status --- official docs reference: https://datatables.net/reference/api/search()\n    filterOrders.addEventListener('change', function (e) {\n      datatable.column(3).search(e.target.value).draw();\n    });\n\n    // Filter by date --- official docs reference: https://momentjs.com/docs/\n    var minDate;\n    var maxDate;\n    filterYear.addEventListener('change', function (e) {\n      var value = e.target.value;\n      switch (value) {\n        case 'thisyear':\n          {\n            minDate = moment().startOf('year').format();\n            maxDate = moment().endOf('year').format();\n            datatable.draw();\n            break;\n          }\n        case 'thismonth':\n          {\n            minDate = moment().startOf('month').format();\n            maxDate = moment().endOf('month').format();\n            datatable.draw();\n            break;\n          }\n        case 'lastmonth':\n          {\n            minDate = moment().subtract(1, 'months').startOf('month').format();\n            maxDate = moment().subtract(1, 'months').endOf('month').format();\n            datatable.draw();\n            break;\n          }\n        case 'last90days':\n          {\n            minDate = moment().subtract(30, 'days').format();\n            maxDate = moment().format();\n            datatable.draw();\n            break;\n          }\n        default:\n          {\n            minDate = moment().subtract(100, 'years').startOf('month').format();\n            maxDate = moment().add(1, 'months').endOf('month').format();\n            datatable.draw();\n            break;\n          }\n      }\n    });\n\n    // Date range filter --- offical docs reference: https://datatables.net/examples/plug-ins/range_filtering.html\n    $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {\n      var min = minDate;\n      var max = maxDate;\n      var date = parseFloat(moment(data[1]).format()) || 0; // use data for the age column\n\n      if (isNaN(min) && isNaN(max) || isNaN(min) && date <= max || min <= date && isNaN(max) || min <= date && date <= max) {\n        return true;\n      }\n      return false;\n    });\n\n    // Search --- official docs reference: https://datatables.net/reference/api/search()\n    var filterSearch = document.getElementById('kt_filter_search');\n    filterSearch.addEventListener('keyup', function (e) {\n      datatable.search(e.target.value).draw();\n    });\n  };\n\n  // Public methods\n  return {\n    init: function init() {\n      initChart();\n      initGraph();\n      initTable();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTProjectOverview.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2FwcHMvcHJvamVjdHMvcHJvamVjdC9wcm9qZWN0LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0EsSUFBSUEsaUJBQWlCLEdBQUcsWUFBWTtFQUNoQztFQUNBLElBQUlDLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUM7RUFDeEQsSUFBSUMsWUFBWSxHQUFHRixNQUFNLENBQUNDLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDO0VBQ25FLElBQUlFLE9BQU8sR0FBR0gsTUFBTSxDQUFDQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUM7RUFDeEQsSUFBSUcsWUFBWSxHQUFHSixNQUFNLENBQUNDLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDO0VBQ25FLElBQUlJLE9BQU8sR0FBR0wsTUFBTSxDQUFDQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUM7RUFDekQsSUFBSUssT0FBTyxHQUFHTixNQUFNLENBQUNDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQzs7RUFFekQ7RUFDQSxJQUFJTSxTQUFTLEdBQUcsU0FBWkEsU0FBUyxHQUFlO0lBQ3hCO0lBQ0EsSUFBSUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQztJQUUvRCxJQUFJLENBQUNGLE9BQU8sRUFBRTtNQUNWO0lBQ0o7SUFFQSxJQUFJRyxNQUFNLEdBQUc7TUFDVEMsSUFBSSxFQUFFLFVBQVU7TUFDaEJDLElBQUksRUFBRTtRQUNGQyxRQUFRLEVBQUUsQ0FBQztVQUNQRCxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztVQUNsQkUsZUFBZSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO1FBQ3JELENBQUMsQ0FBQztRQUNGQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLGNBQWM7TUFDbEQsQ0FBQztNQUNEQyxPQUFPLEVBQUU7UUFD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QUMsRUFBRTs7QUFHSDtBQUNBakcsTUFBTSxDQUFDNEksa0JBQWtCLENBQUMsWUFBVztFQUNqQzlJLGlCQUFpQixDQUFDNkksSUFBSSxFQUFFO0FBQzVCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvY29yZS9qcy9jdXN0b20vYXBwcy9wcm9qZWN0cy9wcm9qZWN0L3Byb2plY3QuanM/ODFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtUUHJvamVjdE92ZXJ2aWV3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gQ29sb3JzXHJcbiAgICB2YXIgcHJpbWFyeSA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWt0LXByaW1hcnknKTtcclxuICAgIHZhciBsaWdodFByaW1hcnkgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1rdC1wcmltYXJ5LWxpZ2h0Jyk7XHJcbiAgICB2YXIgc3VjY2VzcyA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWt0LXN1Y2Nlc3MnKTtcclxuICAgIHZhciBsaWdodFN1Y2Nlc3MgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1rdC1zdWNjZXNzLWxpZ2h0Jyk7XHJcbiAgICB2YXIgZ3JheTIwMCA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWt0LWdyYXktMjAwJyk7XHJcbiAgICB2YXIgZ3JheTUwMCA9IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWt0LWdyYXktNTAwJyk7XHJcblxyXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcclxuICAgIHZhciBpbml0Q2hhcnQgPSBmdW5jdGlvbiAoKSB7ICAgICAgICBcclxuICAgICAgICAvLyBpbml0IGNoYXJ0XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3Rfb3ZlcnZpZXdfY2hhcnRcIik7XHJcblxyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgICAgICB0eXBlOiAnZG91Z2hudXQnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbMzAsIDQ1LCAyNV0sXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbJyMwMEEzRkYnLCAnIzUwQ0Q4OScsICcjRTRFNkVGJ11cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbJ0FjdGl2ZScsICdDb21wbGV0ZWQnLCAnWWV0IHRvIHN0YXJ0J11cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjdXRvdXRQZXJjZW50YWdlOiA3NSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGN1dG91dDogJzc1JScsXHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZVNjYWxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVSb3RhdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0b29sdGlwczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAnbmVhcmVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keVNwYWNpbmc6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgeVBhZGRpbmc6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHhQYWRkaW5nOiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBjYXJldFBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUNvbG9yczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzIwRDQ4OScsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVGb250Q29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICAgICAgICAgICAgICBjb3JuZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyU3BhY2luZzogMCxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZVNwYWNpbmc6IDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGN0eCA9IGVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB2YXIgbXlEb3VnaG51dCA9IG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGluaXRHcmFwaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia3RfcHJvamVjdF9vdmVydmlld19ncmFwaFwiKTtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQoS1RVdGlsLmNzcyhlbGVtZW50LCAnaGVpZ2h0JykpO1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdJbmNvbXBsZXRlJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFs3MCwgNzAsIDgwLCA4MCwgNzUsIDc1LCA3NV1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0NvbXBsZXRlJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFs1NSwgNTUsIDYwLCA2MCwgNTUsIDU1LCA2MF1cclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXJlYScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbG90T3B0aW9uczoge1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaWxsOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnc29saWQnLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgIGN1cnZlOiAnc21vb3RoJyxcclxuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMyxcclxuICAgICAgICAgICAgICAgIGNvbG9yczogW3ByaW1hcnksIHN1Y2Nlc3NdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZyddLFxyXG4gICAgICAgICAgICAgICAgYXhpc0JvcmRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGF4aXNUaWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBncmF5NTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNyb3NzaGFpcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Zyb250JyxcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHByaW1hcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXNoQXJyYXk6IDNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WTogMCxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzOiBncmF5NTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdGVzOiB7XHJcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGVEYXRhUG9pbnRzU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbCArIFwiIHRhc2tzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbG9yczogW2xpZ2h0UHJpbWFyeSwgbGlnaHRTdWNjZXNzXSxcclxuICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGdyYXkyMDAsXHJcbiAgICAgICAgICAgICAgICBzdHJva2VEYXNoQXJyYXk6IDQsXHJcbiAgICAgICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1hcmtlcnM6IHtcclxuICAgICAgICAgICAgICAgIC8vc2l6ZTogNSxcclxuICAgICAgICAgICAgICAgIGNvbG9yczogW2xpZ2h0UHJpbWFyeSwgbGlnaHRTdWNjZXNzXSxcclxuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBbcHJpbWFyeSwgc3VjY2Vzc10sXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gbmV3IEFwZXhDaGFydHMoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgY2hhcnQucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGluaXRUYWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfcHJvZmlsZV9vdmVydmlld190YWJsZScpO1xyXG5cclxuICAgICAgICBpZiAoIXRhYmxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNldCBkYXRlIGRhdGEgb3JkZXJcclxuICAgICAgICBjb25zdCB0YWJsZVJvd3MgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0cicpO1xyXG5cclxuICAgICAgICB0YWJsZVJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlUm93ID0gcm93LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWxEYXRlID0gbW9tZW50KGRhdGVSb3dbMV0uaW5uZXJIVE1MLCBcIk1NTSBELCBZWVlZXCIpLmZvcm1hdCgpO1xyXG4gICAgICAgICAgICBkYXRlUm93WzFdLnNldEF0dHJpYnV0ZSgnZGF0YS1vcmRlcicsIHJlYWxEYXRlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5pdCBkYXRhdGFibGUgLS0tIG1vcmUgaW5mbyBvbiBkYXRhdGFibGVzOiBodHRwczovL2RhdGF0YWJsZXMubmV0L21hbnVhbC9cclxuICAgICAgICBjb25zdCBkYXRhdGFibGUgPSAkKHRhYmxlKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBcImluZm9cIjogZmFsc2UsXHJcbiAgICAgICAgICAgICdvcmRlcic6IFtdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEZpbHRlciBkcm9wZG93biBlbGVtZW50c1xyXG4gICAgICAgIGNvbnN0IGZpbHRlck9yZGVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9maWx0ZXJfb3JkZXJzJyk7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyWWVhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9maWx0ZXJfeWVhcicpO1xyXG5cclxuICAgICAgICAvLyBGaWx0ZXIgYnkgb3JkZXIgc3RhdHVzIC0tLSBvZmZpY2lhbCBkb2NzIHJlZmVyZW5jZTogaHR0cHM6Ly9kYXRhdGFibGVzLm5ldC9yZWZlcmVuY2UvYXBpL3NlYXJjaCgpXHJcbiAgICAgICAgZmlsdGVyT3JkZXJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGRhdGF0YWJsZS5jb2x1bW4oMykuc2VhcmNoKGUudGFyZ2V0LnZhbHVlKS5kcmF3KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEZpbHRlciBieSBkYXRlIC0tLSBvZmZpY2lhbCBkb2NzIHJlZmVyZW5jZTogaHR0cHM6Ly9tb21lbnRqcy5jb20vZG9jcy9cclxuICAgICAgICB2YXIgbWluRGF0ZTtcclxuICAgICAgICB2YXIgbWF4RGF0ZTtcclxuXHJcbiAgICAgICAgZmlsdGVyWWVhci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd0aGlzeWVhcic6IHtcclxuICAgICAgICAgICAgICAgICAgICBtaW5EYXRlID0gbW9tZW50KCkuc3RhcnRPZigneWVhcicpLmZvcm1hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heERhdGUgPSBtb21lbnQoKS5lbmRPZigneWVhcicpLmZvcm1hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGF0YWJsZS5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlICd0aGlzbW9udGgnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluRGF0ZSA9IG1vbWVudCgpLnN0YXJ0T2YoJ21vbnRoJykuZm9ybWF0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4RGF0ZSA9IG1vbWVudCgpLmVuZE9mKCdtb250aCcpLmZvcm1hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGF0YWJsZS5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlICdsYXN0bW9udGgnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluRGF0ZSA9IG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aHMnKS5zdGFydE9mKCdtb250aCcpLmZvcm1hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heERhdGUgPSBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnbW9udGhzJykuZW5kT2YoJ21vbnRoJykuZm9ybWF0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YXRhYmxlLmRyYXcoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2xhc3Q5MGRheXMnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluRGF0ZSA9IG1vbWVudCgpLnN1YnRyYWN0KDMwLCAnZGF5cycpLmZvcm1hdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heERhdGUgPSBtb21lbnQoKS5mb3JtYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhdGFibGUuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbkRhdGUgPSBtb21lbnQoKS5zdWJ0cmFjdCgxMDAsICd5ZWFycycpLnN0YXJ0T2YoJ21vbnRoJykuZm9ybWF0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4RGF0ZSA9IG1vbWVudCgpLmFkZCgxLCAnbW9udGhzJykuZW5kT2YoJ21vbnRoJykuZm9ybWF0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YXRhYmxlLmRyYXcoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBEYXRlIHJhbmdlIGZpbHRlciAtLS0gb2ZmaWNhbCBkb2NzIHJlZmVyZW5jZTogaHR0cHM6Ly9kYXRhdGFibGVzLm5ldC9leGFtcGxlcy9wbHVnLWlucy9yYW5nZV9maWx0ZXJpbmcuaHRtbFxyXG4gICAgICAgICQuZm4uZGF0YVRhYmxlLmV4dC5zZWFyY2gucHVzaChcclxuICAgICAgICAgICAgZnVuY3Rpb24gKHNldHRpbmdzLCBkYXRhLCBkYXRhSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtaW4gPSBtaW5EYXRlO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1heCA9IG1heERhdGU7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IHBhcnNlRmxvYXQobW9tZW50KGRhdGFbMV0pLmZvcm1hdCgpKSB8fCAwOyAvLyB1c2UgZGF0YSBmb3IgdGhlIGFnZSBjb2x1bW5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoKGlzTmFOKG1pbikgJiYgaXNOYU4obWF4KSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoaXNOYU4obWluKSAmJiBkYXRlIDw9IG1heCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAobWluIDw9IGRhdGUgJiYgaXNOYU4obWF4KSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAobWluIDw9IGRhdGUgJiYgZGF0ZSA8PSBtYXgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBTZWFyY2ggLS0tIG9mZmljaWFsIGRvY3MgcmVmZXJlbmNlOiBodHRwczovL2RhdGF0YWJsZXMubmV0L3JlZmVyZW5jZS9hcGkvc2VhcmNoKClcclxuICAgICAgICB2YXIgZmlsdGVyU2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2ZpbHRlcl9zZWFyY2gnKTtcclxuICAgICAgICBmaWx0ZXJTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBkYXRhdGFibGUuc2VhcmNoKGUudGFyZ2V0LnZhbHVlKS5kcmF3KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHVibGljIG1ldGhvZHNcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpbml0Q2hhcnQoKTtcclxuICAgICAgICAgICAgaW5pdEdyYXBoKCk7XHJcbiAgICAgICAgICAgIGluaXRUYWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSgpO1xyXG5cclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XHJcbiAgICBLVFByb2plY3RPdmVydmlldy5pbml0KCk7XHJcbn0pOyJdLCJuYW1lcyI6WyJLVFByb2plY3RPdmVydmlldyIsInByaW1hcnkiLCJLVFV0aWwiLCJnZXRDc3NWYXJpYWJsZVZhbHVlIiwibGlnaHRQcmltYXJ5Iiwic3VjY2VzcyIsImxpZ2h0U3VjY2VzcyIsImdyYXkyMDAiLCJncmF5NTAwIiwiaW5pdENoYXJ0IiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25maWciLCJ0eXBlIiwiZGF0YSIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwibGFiZWxzIiwib3B0aW9ucyIsImNoYXJ0IiwiZm9udEZhbWlseSIsImN1dG91dFBlcmNlbnRhZ2UiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsImN1dG91dCIsInRpdGxlIiwiZGlzcGxheSIsImFuaW1hdGlvbiIsImFuaW1hdGVTY2FsZSIsImFuaW1hdGVSb3RhdGUiLCJ0b29sdGlwcyIsImVuYWJsZWQiLCJpbnRlcnNlY3QiLCJtb2RlIiwiYm9keVNwYWNpbmciLCJ5UGFkZGluZyIsInhQYWRkaW5nIiwiY2FyZXRQYWRkaW5nIiwiZGlzcGxheUNvbG9ycyIsInRpdGxlRm9udENvbG9yIiwiY29ybmVyUmFkaXVzIiwiZm9vdGVyU3BhY2luZyIsInRpdGxlU3BhY2luZyIsInBsdWdpbnMiLCJsZWdlbmQiLCJjdHgiLCJnZXRDb250ZXh0IiwibXlEb3VnaG51dCIsIkNoYXJ0IiwiaW5pdEdyYXBoIiwiaGVpZ2h0IiwicGFyc2VJbnQiLCJjc3MiLCJzZXJpZXMiLCJuYW1lIiwidG9vbGJhciIsInNob3ciLCJwbG90T3B0aW9ucyIsImRhdGFMYWJlbHMiLCJmaWxsIiwib3BhY2l0eSIsInN0cm9rZSIsImN1cnZlIiwid2lkdGgiLCJjb2xvcnMiLCJ4YXhpcyIsImNhdGVnb3JpZXMiLCJheGlzQm9yZGVyIiwiYXhpc1RpY2tzIiwic3R5bGUiLCJmb250U2l6ZSIsImNyb3NzaGFpcnMiLCJwb3NpdGlvbiIsImNvbG9yIiwiZGFzaEFycmF5IiwidG9vbHRpcCIsImZvcm1hdHRlciIsInVuZGVmaW5lZCIsIm9mZnNldFkiLCJ5YXhpcyIsInN0YXRlcyIsIm5vcm1hbCIsImZpbHRlciIsInZhbHVlIiwiaG92ZXIiLCJhY3RpdmUiLCJhbGxvd011bHRpcGxlRGF0YVBvaW50c1NlbGVjdGlvbiIsInkiLCJ2YWwiLCJncmlkIiwiYm9yZGVyQ29sb3IiLCJzdHJva2VEYXNoQXJyYXkiLCJsaW5lcyIsIm1hcmtlcnMiLCJzdHJva2VDb2xvciIsInN0cm9rZVdpZHRoIiwiQXBleENoYXJ0cyIsInJlbmRlciIsImluaXRUYWJsZSIsInRhYmxlIiwicXVlcnlTZWxlY3RvciIsInRhYmxlUm93cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicm93IiwiZGF0ZVJvdyIsInJlYWxEYXRlIiwibW9tZW50IiwiaW5uZXJIVE1MIiwiZm9ybWF0Iiwic2V0QXR0cmlidXRlIiwiZGF0YXRhYmxlIiwiJCIsIkRhdGFUYWJsZSIsImZpbHRlck9yZGVycyIsImZpbHRlclllYXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbHVtbiIsInNlYXJjaCIsInRhcmdldCIsImRyYXciLCJtaW5EYXRlIiwibWF4RGF0ZSIsInN0YXJ0T2YiLCJlbmRPZiIsInN1YnRyYWN0IiwiYWRkIiwiZm4iLCJkYXRhVGFibGUiLCJleHQiLCJwdXNoIiwic2V0dGluZ3MiLCJkYXRhSW5kZXgiLCJtaW4iLCJtYXgiLCJkYXRlIiwicGFyc2VGbG9hdCIsImlzTmFOIiwiZmlsdGVyU2VhcmNoIiwiaW5pdCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/apps/projects/project/project.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/apps/projects/project/project.js"]();
/******/ 	
/******/ })()
;