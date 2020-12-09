var _jsxFileName = "C:\\test-package\\src\\components\\todo\\Link.js";
import React from 'react';
import { useDispatch } from "react-redux";
export const Link = ({
  active,
  children,
  filter
}) => {
  const dispatch = useDispatch();
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => dispatch({
      type: "SET_VISIBILITY_FILTER",
      filter
    }),
    disabled: active,
    style: {
      marginLeft: '4px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, children);
};