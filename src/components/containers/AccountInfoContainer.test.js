import React, { FunctionComponent } from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { AccountInfoContainer } from "./AccountInfoContainer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it("click button to show the image", async () => {
  const { findByRole } = render(<AccountInfoContainer />);

  expect(findByRole("img")).toBeInTheDocument();
  userEvent.click(screen.getByText("Click"));
  const imgSec = await screen.findByRole("img");
  expect(imgSec).toBeInTheDocument();
});
