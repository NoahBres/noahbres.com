import React from "react"

import SlidingText from "../components/SlidingText"
import WaveEmoji from "../components/WaveEmoji"

const nameTextSize = 5

const nameStyle = `
  color: #ffd6d6;
  font-size: ${nameTextSize}em;
  font-weight: 800;
  text-transform: uppercase;
  height: ${nameTextSize * 16}px;
  line-height: ${nameTextSize * 16}px;
  will-change: transform, opacity;
  overflow: hidden;
`

const HeroText = () => {
  return (
    <SlidingText
      toggleOnClick={true}
      style={nameStyle}
      textSize={nameTextSize * 20}
      xShift={nameTextSize * 4}
    >
      <span style={{ display: "flex", alignItems: "center" }}>
        Hello <WaveEmoji style={{ marginLeft: "0.5em" }} />,
      </span>
      <span>I'm Noah Bresler</span>
    </SlidingText>
  )
}

export default HeroText
