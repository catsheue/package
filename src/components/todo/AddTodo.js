import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
export const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <form
        className="flex"
        onSubmit={(e) => {
          const id = nanoid();
          e.preventDefault();
          dispatch({ type: "ADD_TODO", text: input, id });
          setInput("");
        }}
      >
        <input
          className="todo__input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
