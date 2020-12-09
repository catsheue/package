import React from 'react'
import {useDispatch} from "react-redux";

export const Link = ({ active, children,  filter }) => {
  const dispatch = useDispatch();
return (
  <button
    onClick={() => dispatch({ type: "SET_VISIBILITY_FILTER", filter})}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
  )

}
