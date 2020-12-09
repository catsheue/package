import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoList } from "../todo/TodoList";
import { AddTodo } from "../todo/AddTodo";
import { Footer } from "../todo/Footer";

export function TodoContainer() {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.visibilityFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.actions) {
      dispatch(window.actions.addTodo("miou", 3));
    }
  }, []);
  const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case "SHOW_ALL":
        return todos;
      case "SHOW_COMPLETED":
        return todos.filter((t) => t.completed);
      case "SHOW_ACTIVE":
        return todos.filter((t) => !t.completed);
      default:
        throw new Error("Unknown filter: " + filter);
    }
  };
  const filteredTodo = getVisibleTodos(todos, filter);
  return (
    <div className="todo">
      <AddTodo />
      <TodoList todos={filteredTodo} />
      <Footer />
    </div>
  );
}
