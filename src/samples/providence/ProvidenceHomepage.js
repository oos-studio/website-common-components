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
  ImageAlignedText,
  HomeFeed,
  NavBar,
  NavBarMobile,
} from "./components"
import './fonts/fonts.css'

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
    text: 'LEARN MORE',
  },
}

class ProvidenceHomepage extends Component {
  state = {
    mobileNav: false,
  }
  componentDidMount() {
    const { renderMobileNav } = this
    window.addEventListener('resize', renderMobileNav)
  }
  renderMobileNav = () => {
    if(window.innerWidth >= 1160) {
      this.setState({mobileNav: false,})
    } else {
      this.setState({mobileNav: true,})
    }
  }
  render() {
    const { mobileNav } = this.state
    return (
      <React.Fragment>
        <div style={styles.container}>
          { mobileNav ? <NavBarMobile /> : <NavBar /> }
          <FullScreenIntro/>
          <FloatingParallax/>
          <ImageAlignedText {...churchIllustrationProps}/>
          <ImageCaptionBlock/>
          <ImageAlignedText/>
          <HomeFeed/>
          <Footer/>
        </div>
      </React.Fragment>
    )
  }
}

const styles = {
  container: {
    fontFamily: 'Neutraface 2 Text',
  }
}

export default ProvidenceHomepage
