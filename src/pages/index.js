import React, { useRef } from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroText from "../components/HeroText"
import BackgroundBlobs from "../components/BackgroundBlobs"

const Header = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  z-index: -1;
`

const IndexPage = () => {
  const parallaxRef = useRef()

  return (
    <Layout>
      <SEO title="Noah Bresler" />
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0px",
          left: "0px",
          zIndex: "2",
        }}
      >
        <Parallax ref={parallaxRef} pages={2}>
          <ParallaxLayer offset={0} speed={0.5}>
            <Header>
              <HeroText />
            </Header>
          </ParallaxLayer>
        </Parallax>
      </div>
      <BackgroundBlobs
        styling={{
          width: "100%",
          height: "100%",
          background: "#21242d",
          position: "fixed",
          top: "0px",
          left: "0px",
          zIndex: "1",
        }}
        blobs={Math.floor(Math.random() * 3) + 3}
      />
    </Layout>
  )
}
export default IndexPage
