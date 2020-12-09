var _jsxFileName = "C:\\test-package\\src\\components\\LobbyImage.js";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Banner } from "./index";
export function LobbyImage() {
  const image = useSelector(state => state.lobby.image);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random", {
          method: "GET"
        });
        const address = await res.json();
        dispatch({
          type: "GET_LOBBY_IMAGE",
          address
        });
      } catch (err) {
        console.log("error");
      }
    };

    fetchImage();
    return () => {
      dispatch({
        type: "CLEAR_LOBBY_IMAGE"
      });
    };
  }, [dispatch]);
  return image && /*#__PURE__*/React.createElement(Banner, {
    image: image.message,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 19
    }
  });
}