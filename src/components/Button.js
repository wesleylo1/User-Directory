import React from "react"

function Button({ onClick, value }) {
  return <button onClick={(event) => onClick(event)}>{value}</button>
}

export default Button
