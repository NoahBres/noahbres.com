import React from "react"

import SlidingText from "../components/SlidingText"
import WaveEmoji from "../components/WaveEmoji"
import HoverColorText from "../components/HoverColorText"

const nameTextSize = 5

const nameStyle = `
  color: hsl(0, 100%, 92%);
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
    <div style={{ padding: "1em" }}>
      <SlidingText
        toggleOnClick={true}
        style={nameStyle}
        textSize={nameTextSize * 20}
        xShift={nameTextSize * 4}
      >
        <span style={{ display: "flex", alignItems: "center" }}>
          <HoverColorText text="Hello" />
          <WaveEmoji style={{ marginLeft: "0.5em" }} />,
        </span>
        {/* <span>I'm Noah Bresler</span> */}
        <HoverColorText text="I'm Noah Bresler" />
      </SlidingText>
    </div>
  )
}

export default HeroText
