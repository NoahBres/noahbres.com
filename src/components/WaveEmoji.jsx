import React, { useState } from "react"

const WaveEmoji = ({ fontSize = "0.7em" }) => {
  const [isHovered, setHover] = useState(false)

  return (
    <span style={{ fontSize }} role="img" aria-label="Wave Emoji">
      👋
    </span>
  )
}

export default WaveEmoji
