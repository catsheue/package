import React from "react";
import { useSelector } from "react-redux";

export function AppBarB() {
  const linkList = useSelector((state) => state.appBar.linkList);
  return (
    <ul className="appbar">
      {linkList.map((item) => {
        const { id } = item;
        return (
          <li key={id}>
            {item.render(<span>{id}</span>)}
          </li>
        );
      })}
    </ul>
  );
}
