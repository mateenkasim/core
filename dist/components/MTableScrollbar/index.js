'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
var _Box2 = _interopRequireDefault(require('@mui/material/Box'));
var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);
var _react = _interopRequireDefault(require('react'));
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          (0, _defineProperty2['default'])(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        )
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
  }
  return target;
}
var doubleStyle = {
  overflowX: 'auto',
  position: 'relative'
};
var singleStyle = _objectSpread(
  _objectSpread({}, doubleStyle),
  {},
  {
    '& ::-webkit-scrollbar': {
      WebkitAppearance: 'none'
    },
    '& ::-webkit-scrollbar:horizontal': {
      height: 8
    },
    '& ::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0, 0, 0, .3)',
      border: '2px solid white',
      borderRadius: 4
    }
  }
);
var ScrollBar = function ScrollBar(_ref) {
  var _double = _ref['double'],
    children = _ref.children;
  return /*#__PURE__*/ _react['default'].createElement(
    _Box2['default'],
    {
      sx: _double ? doubleStyle : singleStyle
    },
    children
  );
};
var _default = ScrollBar;
exports['default'] = _default;
