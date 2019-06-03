import React from "react"

const HoverColorText = ({ text }) => {
  return (
    <span>
      {text.split("").map(char => (
        <span>{char}</span>
      ))}
    </span>
  )
}

export default HoverColorText
