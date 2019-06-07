import React, { useState } from "react"
import { useTrail, animated } from "react-spring"

import styled from "styled-components"

const SlidingText = ({
  toggleOnClick = false,
  style = "",
  textSize = 80,
  yShift = 20,
  children,
}) => {
  const [toggle, setToggle] = useState(true)

  const config = { mass: 20, tension: 2000, friction: 160 }

  const trail = useTrail(children.length, {
    config,
    opacity: toggle ? 1 : 0,
    y: toggle ? 0 : yShift,
    height: toggle ? textSize : 0,
    from: { opacity: 0, y: yShift, height: 0 },
  })

  //TODO FIX Probably shouldn't do this https://www.styled-components.com/docs/basics#passed-props
  const AnimatedText = styled(animated.div)`
    ${style}
  `

  return (
    <div
      onClick={() => toggleOnClick && setToggle(toggle => !toggle)}
      style={{ cursor: "pointer", userSelect: "none" }}
    >
      {trail.map(({ y, height, ...rest }, index) => (
        <AnimatedText
          key={children[index].props.children + index}
          className=""
          style={{
            ...rest,
            transform: y.interpolate(y => `translate3d(0, ${y}px, 0)`),
          }}
        >
          <animated.div style={{ height, overflow: "hidden" }}>
            {children[index]}
          </animated.div>
        </AnimatedText>
      ))}
    </div>
  )
}

export default SlidingText
