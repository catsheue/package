var _jsxFileName = "C:\\test-package\\src\\components\\AccountImage.js";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Banner } from "./index";
export function AccountImage() {
  const image = useSelector(state => state.account.image);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch("https://aws.random.cat/meow", {
          method: "GET"
        });
        const address = await res.json();
        dispatch({
          type: "GET_ACCOUNT_IMAGE",
          address
        });
      } catch (err) {
        console.log("error");
      }
    };

    fetchImage();
    return () => {
      dispatch({
        type: "CLEAR_ACCOUNT_IMAGE"
      });
    };
  }, [dispatch]);
  return image && /*#__PURE__*/React.createElement(Banner, {
    image: image.file,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 19
    }
  });
}