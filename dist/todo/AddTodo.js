var _jsxFileName = "C:\\test-package\\src\\components\\todo\\AddTodo.js";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
export const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  return /*#__PURE__*/React.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      const id = nanoid();
      e.preventDefault();
      dispatch({
        type: "ADD_TODO",
        text: input,
        id
      });
      setInput("");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "todo__input",
    value: input,
    onChange: e => setInput(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "Add")));
};