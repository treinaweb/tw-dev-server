webpackHotUpdate_N_E(1,{

/***/ "./src/ui/components/inputs/CodeEditor/CodeEditor.tsx":
/*!************************************************************!*\
  !*** ./src/ui/components/inputs/CodeEditor/CodeEditor.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-ace */ "./node_modules/react-ace/lib/index.js");
/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_ace__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ace_builds_webpack_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ace-builds/webpack-resolver */ "./node_modules/ace-builds/webpack-resolver.js");
/* harmony import */ var ace_builds_webpack_resolver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ace_builds_webpack_resolver__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ace_builds_src_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ace-builds/src-noconflict/mode-json */ "./node_modules/ace-builds/src-noconflict/mode-json.js");
/* harmony import */ var ace_builds_src_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ace_builds_src_noconflict_theme_dracula__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ace-builds/src-noconflict/theme-dracula */ "./node_modules/ace-builds/src-noconflict/theme-dracula.js");
/* harmony import */ var ace_builds_src_noconflict_theme_dracula__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_theme_dracula__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.js");
/* harmony import */ var _CodeEditor_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CodeEditor.style */ "./src/ui/components/inputs/CodeEditor/CodeEditor.style.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");




var _jsxFileName = "E:\\Users\\felip\\Desktop\\TreinaWeb\\Projetos\\tw-dev-server\\src\\ui\\components\\inputs\\CodeEditor\\CodeEditor.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var isBrowser = true;
var defaultEditorProps = {
  $blockScrolling: true
};
var defaultOptions = {
  minLines: 10,
  maxLines: 20,
  cursorStyle: 'smooth',
  showPrintMargin: false
};
var defaultProps = {
  fontSize: 16,
  width: '100%',
  height: '130px'
};

var CodeEditor = function CodeEditor(props) {
  _s();

  var componentRoot = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var canCopy = props.canCopy || false;
  var aceProps = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    var ace = props.ace || {};

    var setOptions = _objectSpread(_objectSpread({}, defaultOptions), ace.setOptions || {});

    var editorProps = _objectSpread(_objectSpread({}, defaultEditorProps), ace.editorProps || {});

    return _objectSpread(_objectSpread(_objectSpread({}, defaultProps), ace), {}, {
      editorProps: editorProps,
      setOptions: setOptions
    });
  }, [props.ace]);

  function copyToClipboard() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var rootElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
    var el = document.createElement('textarea');
    el.value = str;
    el.innerText = str;
    rootElement.appendChild(el); // el.focus();

    el.select();
    document.execCommand('copy');
    rootElement.removeChild(el);
  }

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_CodeEditor_style__WEBPACK_IMPORTED_MODULE_9__["CodeEditorContainer"], {
    ref: componentRoot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    },
    __self: _this
  }, isBrowser && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_ace__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    mode: 'json',
    theme: 'dracula',
    value: props.value
  }, aceProps, {
    onChange: props.onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    },
    __self: _this
  })), canCopy && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
    title: 'Copy',
    PopperProps: {
      container: componentRoot.current
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_CodeEditor_style__WEBPACK_IMPORTED_MODULE_9__["CopyButton"], {
    onClick: function onClick() {
      return copyToClipboard(props.value, componentRoot.current);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("i", {
    className: "fas fa-copy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    },
    __self: _this
  }))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_CodeEditor_style__WEBPACK_IMPORTED_MODULE_9__["LanguageLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    },
    __self: _this
  }, "JSON"));
};

_s(CodeEditor, "b0kp+KbKXTE8DHRL8vCFiRPCm2Y=");

_c = CodeEditor;
/* harmony default export */ __webpack_exports__["default"] = (CodeEditor);

var _c;

$RefreshReg$(_c, "CodeEditor");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXRzL0NvZGVFZGl0b3IvQ29kZUVkaXRvci50c3giXSwibmFtZXMiOlsiaXNCcm93c2VyIiwiZGVmYXVsdEVkaXRvclByb3BzIiwiJGJsb2NrU2Nyb2xsaW5nIiwiZGVmYXVsdE9wdGlvbnMiLCJtaW5MaW5lcyIsIm1heExpbmVzIiwiY3Vyc29yU3R5bGUiLCJzaG93UHJpbnRNYXJnaW4iLCJkZWZhdWx0UHJvcHMiLCJmb250U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiQ29kZUVkaXRvciIsInByb3BzIiwiY29tcG9uZW50Um9vdCIsInVzZVJlZiIsImNhbkNvcHkiLCJhY2VQcm9wcyIsInVzZU1lbW8iLCJhY2UiLCJzZXRPcHRpb25zIiwiZWRpdG9yUHJvcHMiLCJjb3B5VG9DbGlwYm9hcmQiLCJzdHIiLCJyb290RWxlbWVudCIsImRvY3VtZW50IiwiYm9keSIsImVsIiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInJlbW92ZUNoaWxkIiwib25DaGFuZ2UiLCJjb250YWluZXIiLCJjdXJyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsU0FBUyxPQUFmO0FBY0EsSUFBTUMsa0JBQWdDLEdBQUc7QUFDckNDLGlCQUFlLEVBQUU7QUFEb0IsQ0FBekM7QUFJQSxJQUFNQyxjQUEyQixHQUFHO0FBQ2hDQyxVQUFRLEVBQUUsRUFEc0I7QUFFaENDLFVBQVEsRUFBRSxFQUZzQjtBQUdoQ0MsYUFBVyxFQUFFLFFBSG1CO0FBSWhDQyxpQkFBZSxFQUFFO0FBSmUsQ0FBcEM7QUFPQSxJQUFNQyxZQUE2QixHQUFHO0FBQ2xDQyxVQUFRLEVBQUUsRUFEd0I7QUFFbENDLE9BQUssRUFBRSxNQUYyQjtBQUdsQ0MsUUFBTSxFQUFFO0FBSDBCLENBQXRDOztBQU1BLElBQU1DLFVBQXFDLEdBQUcsU0FBeENBLFVBQXdDLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUNyRCxNQUFNQyxhQUFhLEdBQUdDLG9EQUFNLEVBQTVCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHSCxLQUFLLENBQUNHLE9BQU4sSUFBaUIsS0FBakM7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLHFEQUFPLENBQUMsWUFBTTtBQUMzQixRQUFNQyxHQUFHLEdBQUdOLEtBQUssQ0FBQ00sR0FBTixJQUFhLEVBQXpCOztBQUNBLFFBQU1DLFVBQVUsbUNBQVFqQixjQUFSLEdBQTRCZ0IsR0FBRyxDQUFDQyxVQUFKLElBQWtCLEVBQTlDLENBQWhCOztBQUNBLFFBQU1DLFdBQVcsbUNBQ1ZwQixrQkFEVSxHQUVUa0IsR0FBRyxDQUFDRSxXQUFKLElBQW1CLEVBRlYsQ0FBakI7O0FBSUEseURBQVliLFlBQVosR0FBNkJXLEdBQTdCO0FBQWtDRSxpQkFBVyxFQUFYQSxXQUFsQztBQUErQ0QsZ0JBQVUsRUFBVkE7QUFBL0M7QUFDSCxHQVJ1QixFQVFyQixDQUFDUCxLQUFLLENBQUNNLEdBQVAsQ0FScUIsQ0FBeEI7O0FBVUEsV0FBU0csZUFBVCxHQUdFO0FBQUEsUUFGRUMsR0FFRix1RUFGUSxFQUVSO0FBQUEsUUFERUMsV0FDRix1RUFENkJDLFFBQVEsQ0FBQ0MsSUFDdEM7QUFDRSxRQUFNQyxFQUFFLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixVQUF2QixDQUFYO0FBQ0FELE1BQUUsQ0FBQ0UsS0FBSCxHQUFXTixHQUFYO0FBQ0FJLE1BQUUsQ0FBQ0csU0FBSCxHQUFlUCxHQUFmO0FBQ0FDLGVBQVcsQ0FBQ08sV0FBWixDQUF3QkosRUFBeEIsRUFKRixDQUtFOztBQUNBQSxNQUFFLENBQUNLLE1BQUg7QUFDQVAsWUFBUSxDQUFDUSxXQUFULENBQXFCLE1BQXJCO0FBQ0FULGVBQVcsQ0FBQ1UsV0FBWixDQUF3QlAsRUFBeEI7QUFDSDs7QUFFRCxTQUNJLDREQUFDLHFFQUFEO0FBQXFCLE9BQUcsRUFBRWIsYUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLZCxTQUFTLElBQ04sNERBQUMsZ0RBQUQ7QUFDSSxRQUFJLEVBQUUsTUFEVjtBQUVJLFNBQUssRUFBRSxTQUZYO0FBR0ksU0FBSyxFQUFFYSxLQUFLLENBQUNnQjtBQUhqQixLQUlRWixRQUpSO0FBS0ksWUFBUSxFQUFFSixLQUFLLENBQUNzQixRQUxwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRlIsRUFVS25CLE9BQU8sSUFDSiw0REFBQyx5REFBRDtBQUNJLFNBQUssRUFBRSxNQURYO0FBRUksZUFBVyxFQUFFO0FBQUVvQixlQUFTLEVBQUV0QixhQUFhLENBQUN1QjtBQUEzQixLQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUksNERBQUMsNERBQUQ7QUFDSSxXQUFPLEVBQUU7QUFBQSxhQUNMZixlQUFlLENBQUNULEtBQUssQ0FBQ2dCLEtBQVAsRUFBY2YsYUFBYSxDQUFDdUIsT0FBNUIsQ0FEVjtBQUFBLEtBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtJO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLENBSkosQ0FYUixFQXdCSSw0REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJKLENBREo7QUE0QkgsQ0F2REQ7O0dBQU16QixVOztLQUFBQSxVO0FBeURTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8xLmYzNzdmZDU2MWY5NThjMjI5YWU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQWNlRWRpdG9yLCB7XHJcbiAgICBJQWNlRWRpdG9yUHJvcHMsXHJcbiAgICBJQWNlT3B0aW9ucyxcclxuICAgIElFZGl0b3JQcm9wcyxcclxufSBmcm9tICdyZWFjdC1hY2UnO1xyXG5pbXBvcnQgJ2FjZS1idWlsZHMvd2VicGFjay1yZXNvbHZlcic7XHJcbmltcG9ydCAnYWNlLWJ1aWxkcy9zcmMtbm9jb25mbGljdC9tb2RlLWpzb24nO1xyXG5pbXBvcnQgJ2FjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvdGhlbWUtZHJhY3VsYSc7XHJcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgICBDb2RlRWRpdG9yQ29udGFpbmVyLFxyXG4gICAgQ29weUJ1dHRvbixcclxuICAgIExhbmd1YWdlTGFiZWwsXHJcbn0gZnJvbSAnLi9Db2RlRWRpdG9yLnN0eWxlJztcclxuXHJcbmNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2RlRWRpdG9yUHJvcHMge1xyXG4gICAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgICBlZGl0b3JJZDogc3RyaW5nO1xyXG4gICAgdmFsdWU/OiBzdHJpbmc7XHJcbiAgICBhY2U/OiB7XHJcbiAgICAgICAgc2V0T3B0aW9ucz86IElBY2VPcHRpb25zO1xyXG4gICAgICAgIGVkaXRvclByb3BzPzogSUVkaXRvclByb3BzO1xyXG4gICAgfTtcclxuICAgIG9uQ2hhbmdlPzogKGNvZGU6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIGNhbkNvcHk/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0RWRpdG9yUHJvcHM6IElFZGl0b3JQcm9wcyA9IHtcclxuICAgICRibG9ja1Njcm9sbGluZzogdHJ1ZSxcclxufTtcclxuXHJcbmNvbnN0IGRlZmF1bHRPcHRpb25zOiBJQWNlT3B0aW9ucyA9IHtcclxuICAgIG1pbkxpbmVzOiAxMCxcclxuICAgIG1heExpbmVzOiAyMCxcclxuICAgIGN1cnNvclN0eWxlOiAnc21vb3RoJyxcclxuICAgIHNob3dQcmludE1hcmdpbjogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBkZWZhdWx0UHJvcHM6IElBY2VFZGl0b3JQcm9wcyA9IHtcclxuICAgIGZvbnRTaXplOiAxNixcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMzBweCcsXHJcbn07XHJcblxyXG5jb25zdCBDb2RlRWRpdG9yOiBSZWFjdC5GQzxDb2RlRWRpdG9yUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBjb21wb25lbnRSb290ID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gICAgY29uc3QgY2FuQ29weSA9IHByb3BzLmNhbkNvcHkgfHwgZmFsc2U7XHJcbiAgICBjb25zdCBhY2VQcm9wcyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjZSA9IHByb3BzLmFjZSB8fCB7fTtcclxuICAgICAgICBjb25zdCBzZXRPcHRpb25zID0geyAuLi5kZWZhdWx0T3B0aW9ucywgLi4uKGFjZS5zZXRPcHRpb25zIHx8IHt9KSB9O1xyXG4gICAgICAgIGNvbnN0IGVkaXRvclByb3BzID0ge1xyXG4gICAgICAgICAgICAuLi5kZWZhdWx0RWRpdG9yUHJvcHMsXHJcbiAgICAgICAgICAgIC4uLihhY2UuZWRpdG9yUHJvcHMgfHwge30pLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uZGVmYXVsdFByb3BzLCAuLi5hY2UsIGVkaXRvclByb3BzLCBzZXRPcHRpb25zIH07XHJcbiAgICB9LCBbcHJvcHMuYWNlXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gY29weVRvQ2xpcGJvYXJkKFxyXG4gICAgICAgIHN0ciA9ICcnLFxyXG4gICAgICAgIHJvb3RFbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmJvZHlcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgICBlbC52YWx1ZSA9IHN0cjtcclxuICAgICAgICBlbC5pbm5lclRleHQgPSBzdHI7XHJcbiAgICAgICAgcm9vdEVsZW1lbnQuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICAgIC8vIGVsLmZvY3VzKCk7XHJcbiAgICAgICAgZWwuc2VsZWN0KCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcclxuICAgICAgICByb290RWxlbWVudC5yZW1vdmVDaGlsZChlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29kZUVkaXRvckNvbnRhaW5lciByZWY9e2NvbXBvbmVudFJvb3R9PlxyXG4gICAgICAgICAgICB7aXNCcm93c2VyICYmIChcclxuICAgICAgICAgICAgICAgIDxBY2VFZGl0b3JcclxuICAgICAgICAgICAgICAgICAgICBtb2RlPXsnanNvbid9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbWU9eydkcmFjdWxhJ31cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmFjZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtjYW5Db3B5ICYmIChcclxuICAgICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydDb3B5J31cclxuICAgICAgICAgICAgICAgICAgICBQb3BwZXJQcm9wcz17eyBjb250YWluZXI6IGNvbXBvbmVudFJvb3QuY3VycmVudCB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb3B5QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3B5VG9DbGlwYm9hcmQocHJvcHMudmFsdWUsIGNvbXBvbmVudFJvb3QuY3VycmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNvcHlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29weUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPExhbmd1YWdlTGFiZWw+SlNPTjwvTGFuZ3VhZ2VMYWJlbD5cclxuICAgICAgICA8L0NvZGVFZGl0b3JDb250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29kZUVkaXRvcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==