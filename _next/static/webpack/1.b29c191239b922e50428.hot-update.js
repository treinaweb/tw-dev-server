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

  return (//@ts-ignore
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_CodeEditor_style__WEBPACK_IMPORTED_MODULE_9__["CodeEditorContainer"], {
      ref: componentRoot,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
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
        lineNumber: 79,
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
        lineNumber: 88,
        columnNumber: 17
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_CodeEditor_style__WEBPACK_IMPORTED_MODULE_9__["CopyButton"], {
      onClick: function onClick() {
        return copyToClipboard(props.value, componentRoot.current);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("i", {
      className: "fas fa-copy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 25
      },
      __self: _this
    }))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_CodeEditor_style__WEBPACK_IMPORTED_MODULE_9__["LanguageLabel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      },
      __self: _this
    }, "JSON"))
  );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VpL2NvbXBvbmVudHMvaW5wdXRzL0NvZGVFZGl0b3IvQ29kZUVkaXRvci50c3giXSwibmFtZXMiOlsiaXNCcm93c2VyIiwiZGVmYXVsdEVkaXRvclByb3BzIiwiJGJsb2NrU2Nyb2xsaW5nIiwiZGVmYXVsdE9wdGlvbnMiLCJtaW5MaW5lcyIsIm1heExpbmVzIiwiY3Vyc29yU3R5bGUiLCJzaG93UHJpbnRNYXJnaW4iLCJkZWZhdWx0UHJvcHMiLCJmb250U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiQ29kZUVkaXRvciIsInByb3BzIiwiY29tcG9uZW50Um9vdCIsInVzZVJlZiIsImNhbkNvcHkiLCJhY2VQcm9wcyIsInVzZU1lbW8iLCJhY2UiLCJzZXRPcHRpb25zIiwiZWRpdG9yUHJvcHMiLCJjb3B5VG9DbGlwYm9hcmQiLCJzdHIiLCJyb290RWxlbWVudCIsImRvY3VtZW50IiwiYm9keSIsImVsIiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3QiLCJleGVjQ29tbWFuZCIsInJlbW92ZUNoaWxkIiwib25DaGFuZ2UiLCJjb250YWluZXIiLCJjdXJyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsU0FBUyxPQUFmO0FBY0EsSUFBTUMsa0JBQWdDLEdBQUc7QUFDckNDLGlCQUFlLEVBQUU7QUFEb0IsQ0FBekM7QUFJQSxJQUFNQyxjQUEyQixHQUFHO0FBQ2hDQyxVQUFRLEVBQUUsRUFEc0I7QUFFaENDLFVBQVEsRUFBRSxFQUZzQjtBQUdoQ0MsYUFBVyxFQUFFLFFBSG1CO0FBSWhDQyxpQkFBZSxFQUFFO0FBSmUsQ0FBcEM7QUFPQSxJQUFNQyxZQUE2QixHQUFHO0FBQ2xDQyxVQUFRLEVBQUUsRUFEd0I7QUFFbENDLE9BQUssRUFBRSxNQUYyQjtBQUdsQ0MsUUFBTSxFQUFFO0FBSDBCLENBQXRDOztBQU1BLElBQU1DLFVBQXFDLEdBQUcsU0FBeENBLFVBQXdDLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUNyRCxNQUFNQyxhQUFhLEdBQUdDLG9EQUFNLEVBQTVCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHSCxLQUFLLENBQUNHLE9BQU4sSUFBaUIsS0FBakM7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLHFEQUFPLENBQUMsWUFBTTtBQUMzQixRQUFNQyxHQUFHLEdBQUdOLEtBQUssQ0FBQ00sR0FBTixJQUFhLEVBQXpCOztBQUNBLFFBQU1DLFVBQVUsbUNBQVFqQixjQUFSLEdBQTRCZ0IsR0FBRyxDQUFDQyxVQUFKLElBQWtCLEVBQTlDLENBQWhCOztBQUNBLFFBQU1DLFdBQVcsbUNBQ1ZwQixrQkFEVSxHQUVUa0IsR0FBRyxDQUFDRSxXQUFKLElBQW1CLEVBRlYsQ0FBakI7O0FBSUEseURBQVliLFlBQVosR0FBNkJXLEdBQTdCO0FBQWtDRSxpQkFBVyxFQUFYQSxXQUFsQztBQUErQ0QsZ0JBQVUsRUFBVkE7QUFBL0M7QUFDSCxHQVJ1QixFQVFyQixDQUFDUCxLQUFLLENBQUNNLEdBQVAsQ0FScUIsQ0FBeEI7O0FBVUEsV0FBU0csZUFBVCxHQUdFO0FBQUEsUUFGRUMsR0FFRix1RUFGUSxFQUVSO0FBQUEsUUFERUMsV0FDRix1RUFENkJDLFFBQVEsQ0FBQ0MsSUFDdEM7QUFDRSxRQUFNQyxFQUFFLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixVQUF2QixDQUFYO0FBQ0FELE1BQUUsQ0FBQ0UsS0FBSCxHQUFXTixHQUFYO0FBQ0FJLE1BQUUsQ0FBQ0csU0FBSCxHQUFlUCxHQUFmO0FBQ0FDLGVBQVcsQ0FBQ08sV0FBWixDQUF3QkosRUFBeEIsRUFKRixDQUtFOztBQUNBQSxNQUFFLENBQUNLLE1BQUg7QUFDQVAsWUFBUSxDQUFDUSxXQUFULENBQXFCLE1BQXJCO0FBQ0FULGVBQVcsQ0FBQ1UsV0FBWixDQUF3QlAsRUFBeEI7QUFDSDs7QUFFRCxTQUNJO0FBQ0EsZ0VBQUMscUVBQUQ7QUFBcUIsU0FBRyxFQUFFYixhQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tkLFNBQVMsSUFDTiw0REFBQyxnREFBRDtBQUNJLFVBQUksRUFBRSxNQURWO0FBRUksV0FBSyxFQUFFLFNBRlg7QUFHSSxXQUFLLEVBQUVhLEtBQUssQ0FBQ2dCO0FBSGpCLE9BSVFaLFFBSlI7QUFLSSxjQUFRLEVBQUVKLEtBQUssQ0FBQ3NCLFFBTHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FGUixFQVVLbkIsT0FBTyxJQUNKLDREQUFDLHlEQUFEO0FBQ0ksV0FBSyxFQUFFLE1BRFg7QUFFSSxpQkFBVyxFQUFFO0FBQUVvQixpQkFBUyxFQUFFdEIsYUFBYSxDQUFDdUI7QUFBM0IsT0FGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlJLDREQUFDLDREQUFEO0FBQ0ksYUFBTyxFQUFFO0FBQUEsZUFDTGYsZUFBZSxDQUFDVCxLQUFLLENBQUNnQixLQUFQLEVBQWNmLGFBQWEsQ0FBQ3VCLE9BQTVCLENBRFY7QUFBQSxPQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLSTtBQUFHLGVBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMSixDQUpKLENBWFIsRUF3QkksNERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhCSjtBQUZKO0FBNkJILENBeEREOztHQUFNekIsVTs7S0FBQUEsVTtBQTBEU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMS5iMjljMTkxMjM5YjkyMmU1MDQyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFjZUVkaXRvciwge1xyXG4gICAgSUFjZUVkaXRvclByb3BzLFxyXG4gICAgSUFjZU9wdGlvbnMsXHJcbiAgICBJRWRpdG9yUHJvcHMsXHJcbn0gZnJvbSAncmVhY3QtYWNlJztcclxuaW1wb3J0ICdhY2UtYnVpbGRzL3dlYnBhY2stcmVzb2x2ZXInO1xyXG5pbXBvcnQgJ2FjZS1idWlsZHMvc3JjLW5vY29uZmxpY3QvbW9kZS1qc29uJztcclxuaW1wb3J0ICdhY2UtYnVpbGRzL3NyYy1ub2NvbmZsaWN0L3RoZW1lLWRyYWN1bGEnO1xyXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gICAgQ29kZUVkaXRvckNvbnRhaW5lcixcclxuICAgIENvcHlCdXR0b24sXHJcbiAgICBMYW5ndWFnZUxhYmVsLFxyXG59IGZyb20gJy4vQ29kZUVkaXRvci5zdHlsZSc7XHJcblxyXG5jb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29kZUVkaXRvclByb3BzIHtcclxuICAgIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gICAgZWRpdG9ySWQ6IHN0cmluZztcclxuICAgIHZhbHVlPzogc3RyaW5nO1xyXG4gICAgYWNlPzoge1xyXG4gICAgICAgIHNldE9wdGlvbnM/OiBJQWNlT3B0aW9ucztcclxuICAgICAgICBlZGl0b3JQcm9wcz86IElFZGl0b3JQcm9wcztcclxuICAgIH07XHJcbiAgICBvbkNoYW5nZT86IChjb2RlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBjYW5Db3B5PzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdEVkaXRvclByb3BzOiBJRWRpdG9yUHJvcHMgPSB7XHJcbiAgICAkYmxvY2tTY3JvbGxpbmc6IHRydWUsXHJcbn07XHJcblxyXG5jb25zdCBkZWZhdWx0T3B0aW9uczogSUFjZU9wdGlvbnMgPSB7XHJcbiAgICBtaW5MaW5lczogMTAsXHJcbiAgICBtYXhMaW5lczogMjAsXHJcbiAgICBjdXJzb3JTdHlsZTogJ3Ntb290aCcsXHJcbiAgICBzaG93UHJpbnRNYXJnaW46IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdFByb3BzOiBJQWNlRWRpdG9yUHJvcHMgPSB7XHJcbiAgICBmb250U2l6ZTogMTYsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTMwcHgnLFxyXG59O1xyXG5cclxuY29uc3QgQ29kZUVkaXRvcjogUmVhY3QuRkM8Q29kZUVkaXRvclByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgY29tcG9uZW50Um9vdCA9IHVzZVJlZjxIVE1MRWxlbWVudD4oKTtcclxuICAgIGNvbnN0IGNhbkNvcHkgPSBwcm9wcy5jYW5Db3B5IHx8IGZhbHNlO1xyXG4gICAgY29uc3QgYWNlUHJvcHMgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICBjb25zdCBhY2UgPSBwcm9wcy5hY2UgfHwge307XHJcbiAgICAgICAgY29uc3Qgc2V0T3B0aW9ucyA9IHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLihhY2Uuc2V0T3B0aW9ucyB8fCB7fSkgfTtcclxuICAgICAgICBjb25zdCBlZGl0b3JQcm9wcyA9IHtcclxuICAgICAgICAgICAgLi4uZGVmYXVsdEVkaXRvclByb3BzLFxyXG4gICAgICAgICAgICAuLi4oYWNlLmVkaXRvclByb3BzIHx8IHt9KSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB7IC4uLmRlZmF1bHRQcm9wcywgLi4uYWNlLCBlZGl0b3JQcm9wcywgc2V0T3B0aW9ucyB9O1xyXG4gICAgfSwgW3Byb3BzLmFjZV0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNvcHlUb0NsaXBib2FyZChcclxuICAgICAgICBzdHIgPSAnJyxcclxuICAgICAgICByb290RWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5XHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgZWwudmFsdWUgPSBzdHI7XHJcbiAgICAgICAgZWwuaW5uZXJUZXh0ID0gc3RyO1xyXG4gICAgICAgIHJvb3RFbGVtZW50LmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgICAvLyBlbC5mb2N1cygpO1xyXG4gICAgICAgIGVsLnNlbGVjdCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICAgICAgcm9vdEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgPENvZGVFZGl0b3JDb250YWluZXIgcmVmPXtjb21wb25lbnRSb290fT5cclxuICAgICAgICAgICAge2lzQnJvd3NlciAmJiAoXHJcbiAgICAgICAgICAgICAgICA8QWNlRWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZT17J2pzb24nfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lPXsnZHJhY3VsYSd9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5hY2VQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Y2FuQ29weSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnQ29weSd9XHJcbiAgICAgICAgICAgICAgICAgICAgUG9wcGVyUHJvcHM9e3sgY29udGFpbmVyOiBjb21wb25lbnRSb290LmN1cnJlbnQgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Q29weUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29weVRvQ2xpcGJvYXJkKHByb3BzLnZhbHVlLCBjb21wb25lbnRSb290LmN1cnJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jb3B5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvcHlCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxMYW5ndWFnZUxhYmVsPkpTT048L0xhbmd1YWdlTGFiZWw+XHJcbiAgICAgICAgPC9Db2RlRWRpdG9yQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvZGVFZGl0b3I7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=