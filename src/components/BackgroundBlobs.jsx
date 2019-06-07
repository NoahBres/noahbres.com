import React from "react"
import { useTrail, animated } from "react-spring"

import styled from "styled-components"

const Blob = styled(animated.div)`
  position: absolute;
  will-change: transform;
  border-radius: 50%;
  background: lightcoral;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  opacity: 0.6;

  user-select: none;
  pointer-events: none;
`

const BackgroundBlobs = ({ styling, blobs = 3 }) => {
  const filterId = "backgroundBlogFilter"

  const leadBlob = { tension: 1200, friction: 40 }
  const blob2 = { mass: 10, tension: 200, friction: 50 }
  const trans = (x, y) =>
    `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

  const [trail, set] = useTrail(blobs, () => ({
    xy: [0, 0],
    config: i => (i === 0 ? leadBlob : blob2),
  }))

  return (
    <div style={styling}>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id={filterId}>
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
          "/>
        </filter>
      </svg>
      <div
        style={{ width: "100%", height: "100%", filter: `url('#${filterId}')` }}
        onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}
      >
        {trail.map((props, index) => {
          const blobSize = Math.random() * 200 + 50

          return (
            <Blob
              key={index}
              style={{
                transform: props.xy.interpolate(trans),
                width: `${blobSize}px`,
                height: `${blobSize}px`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default BackgroundBlobs
