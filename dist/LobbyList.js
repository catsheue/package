var _jsxFileName = "C:\\test-package\\src\\components\\LobbyList.js";
import React from "react";
import { useSelector } from "react-redux";
export function LobbyList() {
  const list = useSelector(state => state.lobby.list);
  return /*#__PURE__*/React.createElement("div", {
    className: "flex lobbylist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "category",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, list.map(item => {
    const {
      id,
      type
    } = item;
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 18
      }
    }, type);
  })), /*#__PURE__*/React.createElement("div", {
    className: "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, list.map(item => {
    const {
      id,
      name
    } = item;
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 18
      }
    }, name);
  })));
}