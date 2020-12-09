import React from "react";

import { LobbyList } from "../LobbyList";
import { LobbyImage } from "../LobbyImage";
import {TodoContainer} from "../index";

export function LobbyContainer() {
  return (
    <div className="lobby">
      <LobbyImage />
      <LobbyList />
      <TodoContainer />
    </div>
  );
}
