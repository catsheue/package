var _jsxFileName = "C:\\test-package\\src\\components\\AccountInfo.js";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
export function AccountInfo() {
  const name = useSelector(state => state.account.name);
  const balance = useSelector(state => state.account.balance);
  const dispatch = useDispatch();

  const fetchImage = async url => {
    try {
      const res = await fetch(url, {
        method: "GET"
      });
      const address = await res.json();
      dispatch({
        type: "GET_ACCOUNT_IMAGE",
        address
      });
    } catch (err) {
      console.log("error");
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "name: ", name), /*#__PURE__*/React.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "balance: ", balance)), /*#__PURE__*/React.createElement("button", {
    className: "button",
    onClick: () => fetchImage("https://aws.random.cat/meow"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "Click"));
}