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
    // <Layout>
    <>
      <SEO title="Noah Bresler" />
      <Parallax ref={parallaxRef} pages={2}>
        <ParallaxLayer offset={0} speed={0.5}>
          <Header>
            <HeroText />
          </Header>
        </ParallaxLayer>
      </Parallax>
      <BackgroundBlobs
        styling={{
          width: "100%",
          height: "100%",
          zIndex: "0",
          background: "#21242d",
        }}
        blobs={3}
      />
    </>
  )
}
export default IndexPage
