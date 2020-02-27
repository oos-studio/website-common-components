import React, { Component } from 'react'
import ChurchIllustrationSky from './assets/ChurchIllustration_Sky.jpg'
import ChurchIllustration1 from './assets/ChurchIllustration_1.png'
import ChurchIllustration2 from './assets/ChurchIllustration_2.png'
import ChurchIllustration3 from './assets/ChurchIllustration_3.png'
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
  parallaxLayers: [
    {
      src: ChurchIllustration1,
      title: 'Church Illustration 1',
      x: [8, 2],
    },
    {
      src: ChurchIllustration2,
      title: 'Church Illustration 2',
      x: [10, 0],
    },
    {
      src: ChurchIllustration3,
      title: 'Church Illustration 3',
      x: [13, -3],
    }
  ],
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
