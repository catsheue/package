import React from "react";
import { AccountInfo } from "../AccountInfo";
import { AccountImage } from "../AccountImage";

export function AccountInfoContainer() {
  return (
    <div className="account">
      <AccountImage />
      <AccountInfo />
    </div>
  );
}
