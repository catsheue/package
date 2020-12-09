var _jsxFileName = "C:\\test-package\\src\\components\\todo\\TodoList.js";
import React from 'react';
import { Todo } from './Todo';
import { useDispatch } from "react-redux";
export const TodoList = ({
  todos
}) => {
  const dispatch = useDispatch();
  return /*#__PURE__*/React.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, todos.map((todo, index) => /*#__PURE__*/React.createElement(Todo, Object.assign({
    key: index
  }, todo, {
    onClick: () => dispatch({
      type: "TOGGLE_TODO",
      id: index
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }))));
};