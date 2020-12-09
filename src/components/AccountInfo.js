import React from "react";
import { useSelector, useDispatch } from "react-redux";


export function AccountInfo() {
  const name = useSelector((state) => state.account.name);
  const balance = useSelector((state) => state.account.balance);

  const dispatch = useDispatch();

  const fetchImage = async (url) => {
    try {
      const res = await fetch(url, {
        method: "GET",
      });
      const address = await res.json();
      dispatch({ type: "GET_ACCOUNT_IMAGE", address });
    } catch (err) {
      console.log("error");
    }
  };

  return (
    <>
      <ul>
        <li>name: {name}</li>
        <li>balance: {balance}</li>
      </ul>
      <button className="button" onClick={() => fetchImage("https://aws.random.cat/meow")}>
        Click
      </button>
    </>
  );
}
