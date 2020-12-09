import React from "react";
import { useSelector } from "react-redux";

export function LobbyList() {
  const list = useSelector((state) => state.lobby.list);

  return (
    <div className="flex lobbylist">
      <div className="category">
        {list.map((item) => {
          const { id, type } = item;
          return <div key={id}>{type}</div>;
        })}
      </div>
      <div className="content">
        {list.map((item) => {
          const { id, name } = item;
          return <div key={id}>{name}</div>;
        })}
      </div>
    </div>
  );
}
