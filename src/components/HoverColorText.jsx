import React from "react"

const HoverColorText = ({ text }) => {
  const onHover = event => {
    event.target.style.color = `hsl(${Math.random() * 255}, ${Math.random() *
      20 +
      80}%, 92%)`
  }

  return (
    <span>
      {text.split(" ").map((word, i) => (
        <span key={word + i}>
          {word.split("").map((char, i) => (
            <span key={char + i} onMouseEnter={onHover} onTouchStart={onHover}>
              {char}
            </span>
          ))}{" "}
        </span>
      ))}
    </span>
  )
}

export default HoverColorText
