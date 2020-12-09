var _jsxFileName = "C:\\test-package\\src\\components\\AppBarB.js";
import React from "react";
import { useSelector } from "react-redux";
export function AppBarB() {
  const linkList = useSelector(state => state.appBar.linkList);
  return /*#__PURE__*/React.createElement("ul", {
    className: "appbar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, linkList.map(item => {
    const {
      id
    } = item;
    return /*#__PURE__*/React.createElement("li", {
      key: id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }
    }, item.render( /*#__PURE__*/React.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 26
      }
    }, id)));
  }));
}