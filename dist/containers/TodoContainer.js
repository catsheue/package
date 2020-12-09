var _jsxFileName = "C:\\test-package\\src\\components\\containers\\TodoContainer.js";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoList } from "../todo/TodoList";
import { AddTodo } from "../todo/AddTodo";
import { Footer } from "../todo/Footer";
export function TodoContainer() {
  const todos = useSelector(state => state.todos);
  const filter = useSelector(state => state.visibilityFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(window.actions.addTodo("miou", 3));
  }, []);

  const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case "SHOW_ALL":
        return todos;

      case "SHOW_COMPLETED":
        return todos.filter(t => t.completed);

      case "SHOW_ACTIVE":
        return todos.filter(t => !t.completed);

      default:
        throw new Error("Unknown filter: " + filter);
    }
  };

  const filteredTodo = getVisibleTodos(todos, filter);
  return /*#__PURE__*/React.createElement("div", {
    className: "todo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement(AddTodo, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), /*#__PURE__*/React.createElement(TodoList, {
    todos: filteredTodo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), /*#__PURE__*/React.createElement(Footer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }));
}