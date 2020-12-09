var _jsxFileName = "C:\\test-package\\src\\components\\todo\\Todo.js";
import React from "react";
export const Todo = ({
  onClick,
  completed,
  text
}) => /*#__PURE__*/React.createElement("li", {
  onClick: onClick,
  style: {
    textDecoration: completed ? 'line-through' : 'none'
  },
  __self: this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, text);