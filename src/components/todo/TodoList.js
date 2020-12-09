import React from "react";
import { Todo } from "./Todo";
import { useDispatch } from "react-redux";

export const TodoList = ({ todos }) => {
  const dispatch = useDispatch();
  return (
    <ul>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          {...todo}
          onClick={() => dispatch({ type: "TOGGLE_TODO", id: index })}
        />
      ))}
    </ul>
  );
};
