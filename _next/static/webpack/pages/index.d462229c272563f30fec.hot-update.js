webpackHotUpdate_N_E("pages/index",{

/***/ "./src/data/pages/Index.hook.ts":
/*!**************************************!*\
  !*** ./src/data/pages/Index.hook.ts ***!
  \**************************************/
/*! exports provided: useIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIndexPage", function() { return useIndexPage; });
/* harmony import */ var data_services_ApiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! data/services/ApiService */ "./src/data/services/ApiService.ts");
/* harmony import */ var data_services_StorageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! data/services/StorageService */ "./src/data/services/StorageService.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _s = $RefreshSig$();





function createBaseUrl(url) {
  return "http://".concat(url).trim().replace(/\/*$/, '');
}

function useIndexPage() {
  _s();

  var timer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(0);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isConnected = _useState[0],
      setConnected = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(data_services_StorageService__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"].get('url', 'localhost:3002')),
      url = _useState2[0],
      setUrl = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(data_services_StorageService__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"].get('endpoint', '')),
      endpoint = _useState3[0],
      setEndpoint = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('GET'),
      method = _useState4[0],
      setMethod = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      bodyCode = _useState5[0],
      setBodyCode = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      responseCode = _useState6[0],
      setResponseCode = _useState6[1];

  var isValidBody = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    try {
      JSON.parse(bodyCode);
      return true;
    } catch (error) {
      return false;
    }
  }, [bodyCode]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    data_services_StorageService__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"].set('url', url);
    clearInterval(timer.current);
    checkConnection();
    timer.current = window.setInterval(checkConnection, 2500);
    return function () {
      clearInterval(timer.current);
    };
  }, [url]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    data_services_StorageService__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"].set('endpoint', endpoint);
  }, [endpoint]);

  function checkConnection() {
    data_services_ApiService__WEBPACK_IMPORTED_MODULE_0__["ApiService"].get(createBaseUrl(url), '!!/version').then(function () {
      setConnected(true);
    })["catch"](function () {
      setConnected(false);
    });
  }

  function onSend() {
    var baseUrl = createBaseUrl(url);

    if (!url || !endpoint) {
      return;
    }

    switch (method) {
      case 'GET':
        data_services_ApiService__WEBPACK_IMPORTED_MODULE_0__["ApiService"].get(baseUrl, endpoint).then(function (response) {
          return setResponseCode(JSON.stringify(response, null, 4));
        });
        break;

      case 'POST':
        data_services_ApiService__WEBPACK_IMPORTED_MODULE_0__["ApiService"].post(baseUrl, endpoint, JSON.parse(bodyCode)).then(function (response) {
          return setResponseCode(JSON.stringify(response, null, 4));
        });
        break;

      case 'PUT':
        data_services_ApiService__WEBPACK_IMPORTED_MODULE_0__["ApiService"].put(baseUrl, endpoint, JSON.parse(bodyCode)).then(function (response) {
          return setResponseCode(JSON.stringify(response, null, 4));
        });
        break;

      case 'DELETE':
        data_services_ApiService__WEBPACK_IMPORTED_MODULE_0__["ApiService"]["delete"](baseUrl, endpoint).then(function (response) {
          return setResponseCode(JSON.stringify(response, null, 4));
        });
        break;
    }
  }

  return {
    isConnected: isConnected,
    setConnected: setConnected,
    url: url,
    setUrl: setUrl,
    endpoint: endpoint,
    setEndpoint: setEndpoint,
    method: method,
    setMethod: setMethod,
    onSend: onSend,
    bodyCode: bodyCode,
    setBodyCode: setBodyCode,
    responseCode: responseCode,
    setResponseCode: setResponseCode,
    isValidBody: isValidBody
  };
}

_s(useIndexPage, "Pm543M4O0YUKIVa5lAzaNxkgN58=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RhdGEvcGFnZXMvSW5kZXguaG9vay50cyJdLCJuYW1lcyI6WyJjcmVhdGVCYXNlVXJsIiwidXJsIiwidHJpbSIsInJlcGxhY2UiLCJ1c2VJbmRleFBhZ2UiLCJ0aW1lciIsInVzZVJlZiIsInVzZVN0YXRlIiwiaXNDb25uZWN0ZWQiLCJzZXRDb25uZWN0ZWQiLCJMb2NhbFN0b3JhZ2VTZXJ2aWNlIiwiZ2V0Iiwic2V0VXJsIiwiZW5kcG9pbnQiLCJzZXRFbmRwb2ludCIsIm1ldGhvZCIsInNldE1ldGhvZCIsImJvZHlDb2RlIiwic2V0Qm9keUNvZGUiLCJyZXNwb25zZUNvZGUiLCJzZXRSZXNwb25zZUNvZGUiLCJpc1ZhbGlkQm9keSIsInVzZU1lbW8iLCJKU09OIiwicGFyc2UiLCJlcnJvciIsInVzZUVmZmVjdCIsInNldCIsImNsZWFySW50ZXJ2YWwiLCJjdXJyZW50IiwiY2hlY2tDb25uZWN0aW9uIiwid2luZG93Iiwic2V0SW50ZXJ2YWwiLCJBcGlTZXJ2aWNlIiwidGhlbiIsIm9uU2VuZCIsImJhc2VVcmwiLCJyZXNwb25zZSIsInN0cmluZ2lmeSIsInBvc3QiLCJwdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxHQUF2QixFQUE0QztBQUN4QyxTQUFPLGlCQUFVQSxHQUFWLEVBQWdCQyxJQUFoQixHQUF1QkMsT0FBdkIsQ0FBK0IsTUFBL0IsRUFBdUMsRUFBdkMsQ0FBUDtBQUNIOztBQUVNLFNBQVNDLFlBQVQsR0FBd0I7QUFBQTs7QUFDM0IsTUFBTUMsS0FBSyxHQUFHQyxvREFBTSxDQUFDLENBQUQsQ0FBcEI7O0FBRDJCLGtCQUVTQyxzREFBUSxDQUFDLEtBQUQsQ0FGakI7QUFBQSxNQUVwQkMsV0FGb0I7QUFBQSxNQUVQQyxZQUZPOztBQUFBLG1CQUdMRixzREFBUSxDQUMxQkcsZ0ZBQW1CLENBQUNDLEdBQXBCLENBQXdC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QUFYLENBQ0lKLE9BREosRUFFSXZCLFFBRkosRUFHSVUsSUFBSSxDQUFDQyxLQUFMLENBQVdQLFFBQVgsQ0FISixFQUlFaUIsSUFKRixDQUlPLFVBQUNHLFFBQUQ7QUFBQSxpQkFDSGpCLGVBQWUsQ0FBQ0csSUFBSSxDQUFDZSxTQUFMLENBQWVELFFBQWYsRUFBeUIsSUFBekIsRUFBK0IsQ0FBL0IsQ0FBRCxDQURaO0FBQUEsU0FKUDtBQU9BOztBQUNKLFdBQUssUUFBTDtBQUNJSiwyRUFBVSxVQUFWLENBQWtCRyxPQUFsQixFQUEyQnZCLFFBQTNCLEVBQXFDcUIsSUFBckMsQ0FBMEMsVUFBQ0csUUFBRDtBQUFBLGlCQUN0Q2pCLGVBQWUsQ0FBQ0csSUFBSSxDQUFDZSxTQUFMLENBQWVELFFBQWYsRUFBeUIsSUFBekIsRUFBK0IsQ0FBL0IsQ0FBRCxDQUR1QjtBQUFBLFNBQTFDO0FBR0E7QUE1QlI7QUE4Qkg7O0FBRUQsU0FBTztBQUNIN0IsZUFBVyxFQUFYQSxXQURHO0FBRUhDLGdCQUFZLEVBQVpBLFlBRkc7QUFHSFIsT0FBRyxFQUFIQSxHQUhHO0FBSUhXLFVBQU0sRUFBTkEsTUFKRztBQUtIQyxZQUFRLEVBQVJBLFFBTEc7QUFNSEMsZUFBVyxFQUFYQSxXQU5HO0FBT0hDLFVBQU0sRUFBTkEsTUFQRztBQVFIQyxhQUFTLEVBQVRBLFNBUkc7QUFTSG1CLFVBQU0sRUFBTkEsTUFURztBQVVIbEIsWUFBUSxFQUFSQSxRQVZHO0FBV0hDLGVBQVcsRUFBWEEsV0FYRztBQVlIQyxnQkFBWSxFQUFaQSxZQVpHO0FBYUhDLG1CQUFlLEVBQWZBLGVBYkc7QUFjSEMsZUFBVyxFQUFYQTtBQWRHLEdBQVA7QUFnQkg7O0dBbEdlakIsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNDYyMjI5YzI3MjU2M2YzMGZlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJ2RhdGEvc2VydmljZXMvQXBpU2VydmljZSc7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdkYXRhL3NlcnZpY2VzL1N0b3JhZ2VTZXJ2aWNlJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQmFzZVVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYGh0dHA6Ly8ke3VybH1gLnRyaW0oKS5yZXBsYWNlKC9cXC8qJC8sICcnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUluZGV4UGFnZSgpIHtcclxuICAgIGNvbnN0IHRpbWVyID0gdXNlUmVmKDApO1xyXG4gICAgY29uc3QgW2lzQ29ubmVjdGVkLCBzZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKFxyXG4gICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCd1cmwnLCAnbG9jYWxob3N0OjMwMDInKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IFtlbmRwb2ludCwgc2V0RW5kcG9pbnRdID0gdXNlU3RhdGUoXHJcbiAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2VuZHBvaW50JywgJycpXHJcbiAgICApO1xyXG4gICAgY29uc3QgW21ldGhvZCwgc2V0TWV0aG9kXSA9IHVzZVN0YXRlKCdHRVQnKTtcclxuICAgIGNvbnN0IFtib2R5Q29kZSwgc2V0Qm9keUNvZGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Jlc3BvbnNlQ29kZSwgc2V0UmVzcG9uc2VDb2RlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGlzVmFsaWRCb2R5ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgSlNPTi5wYXJzZShib2R5Q29kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbYm9keUNvZGVdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCd1cmwnLCB1cmwpO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIuY3VycmVudCk7XHJcbiAgICAgICAgY2hlY2tDb25uZWN0aW9uKCk7XHJcbiAgICAgICAgdGltZXIuY3VycmVudCA9IHdpbmRvdy5zZXRJbnRlcnZhbChjaGVja0Nvbm5lY3Rpb24sIDI1MDApO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIuY3VycmVudCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFt1cmxdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdlbmRwb2ludCcsIGVuZHBvaW50KTtcclxuICAgIH0sIFtlbmRwb2ludF0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrQ29ubmVjdGlvbigpIHtcclxuICAgICAgICBBcGlTZXJ2aWNlLmdldChjcmVhdGVCYXNlVXJsKHVybCksICchIS92ZXJzaW9uJylcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Q29ubmVjdGVkKHRydWUpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Q29ubmVjdGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25TZW5kKCkge1xyXG4gICAgICAgIGNvbnN0IGJhc2VVcmwgPSBjcmVhdGVCYXNlVXJsKHVybCk7XHJcbiAgICAgICAgaWYgKCF1cmwgfHwgIWVuZHBvaW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgICAgICAgICAgY2FzZSAnR0VUJzpcclxuICAgICAgICAgICAgICAgIEFwaVNlcnZpY2UuZ2V0KGJhc2VVcmwsIGVuZHBvaW50KS50aGVuKChyZXNwb25zZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzZXRSZXNwb25zZUNvZGUoSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UsIG51bGwsIDQpKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICAgICAgICAgIEFwaVNlcnZpY2UucG9zdChcclxuICAgICAgICAgICAgICAgICAgICBiYXNlVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZHBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgIEpTT04ucGFyc2UoYm9keUNvZGUpXHJcbiAgICAgICAgICAgICAgICApLnRoZW4oKHJlc3BvbnNlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlQ29kZShKU09OLnN0cmluZ2lmeShyZXNwb25zZSwgbnVsbCwgNCkpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1BVVCc6XHJcbiAgICAgICAgICAgICAgICBBcGlTZXJ2aWNlLnB1dChcclxuICAgICAgICAgICAgICAgICAgICBiYXNlVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZHBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgIEpTT04ucGFyc2UoYm9keUNvZGUpXHJcbiAgICAgICAgICAgICAgICApLnRoZW4oKHJlc3BvbnNlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlQ29kZShKU09OLnN0cmluZ2lmeShyZXNwb25zZSwgbnVsbCwgNCkpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0RFTEVURSc6XHJcbiAgICAgICAgICAgICAgICBBcGlTZXJ2aWNlLmRlbGV0ZShiYXNlVXJsLCBlbmRwb2ludCkudGhlbigocmVzcG9uc2UpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzcG9uc2VDb2RlKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLCBudWxsLCA0KSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpc0Nvbm5lY3RlZCxcclxuICAgICAgICBzZXRDb25uZWN0ZWQsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIHNldFVybCxcclxuICAgICAgICBlbmRwb2ludCxcclxuICAgICAgICBzZXRFbmRwb2ludCxcclxuICAgICAgICBtZXRob2QsXHJcbiAgICAgICAgc2V0TWV0aG9kLFxyXG4gICAgICAgIG9uU2VuZCxcclxuICAgICAgICBib2R5Q29kZSxcclxuICAgICAgICBzZXRCb2R5Q29kZSxcclxuICAgICAgICByZXNwb25zZUNvZGUsXHJcbiAgICAgICAgc2V0UmVzcG9uc2VDb2RlLFxyXG4gICAgICAgIGlzVmFsaWRCb2R5LFxyXG4gICAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9