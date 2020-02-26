import React, { Component } from 'react'
import ChurchIllustrationSky from './assets/ChurchIllustration_Sky.jpg'
import {
  FloatingParallax,
  Footer,
  ImageCaptionBlock,
  FullScreenIntro,
  ImageAlignedText
} from "./components"

const churchIllustrationProps = {
  text: 'Welcome to our church! Press the button below to sign up for our newsletter.',
  image: {
    image: ChurchIllustrationSky,
    title: 'Picture'
  },
  button: {
    text: 'Learn More',
  },
}

class ProvidenceHomepage extends Component {
  render() {
    return (
      <div>
        <div style={{height: 150}}/>
        <FullScreenIntro/>
        <FloatingParallax/>
        <ImageAlignedText {...churchIllustrationProps}/>
        <ImageCaptionBlock/>
        <ImageAlignedText/>
        <Footer/>
      </div>
    )
  }
}

export default ProvidenceHomepage
