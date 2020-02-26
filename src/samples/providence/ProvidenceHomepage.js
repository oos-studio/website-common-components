import React, { Component } from 'react'
import ChurchIllustrationSky from './assets/ChurchIllustration_Sky.jpg'
import ChurchIllustration from './assets/ChurchIllustration.png'
import {
  FloatingParallax,
  Footer,
  ImageCaptionBlock,
  FullScreenIntro,
  ImageAlignedText
} from "./components"

const churchIllustrationProps = {
  text: 'One sentence describing worship at Providence and the aim of what we do being to God\'s glory.',
  image: {
    src: ChurchIllustrationSky,
    title: 'Church Illustration Sky'
  },
  parallaxImage: {
    src: ChurchIllustration,
    title: 'Church Illustration',
    x: [10, 0],
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
