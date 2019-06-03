import React, { useState } from "react"
import { useSpring, animated } from "react-spring"

const WaveEmoji = ({ fontSize = "0.7em", style }) => {
  const [isHovered, setHover] = useState(false)

  const config = { mass: 5, tension: 100, friction: 1 }
  const { rotate } = useSpring({ rotate: isHovered ? 80 : 0, config })

  return (
    <animated.span
      role="img"
      aria-label="Wave Emoji"
      onMouseEnter={() => setHover(i => true)}
      onMouseLeave={() => setHover(i => false)}
      onTouchStart={() => setHover(i => !i)}
      style={{
        fontSize,
        transform: rotate.interpolate(r => `rotate(${r}deg)`),
        ...style,
      }}
    >
      👋
    </animated.span>
  )
}

export default WaveEmoji
