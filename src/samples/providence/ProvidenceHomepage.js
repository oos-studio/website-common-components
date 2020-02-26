import React, { Component } from 'react'
import {
  FloatingParallax,
  Footer,
  ImageCaptionBlock,
  FullScreenIntro
} from "./components"

class ProvidenceHomepage extends Component {
  render() {
    return (
      <div>
        <FullScreenIntro/>
        <div style={{height: 750}}/>
        <FloatingParallax/>
        <ImageCaptionBlock/>
        <div style={{height: 750}}/>
        <Footer/>
      </div>
    )
  }
}

export default ProvidenceHomepage
