import React, {Component} from 'react'
import { Header } from '../../components/index'

const scrollImg = 'https://s3.us-east-2.amazonaws.com/cdn.www.oos-studio.com/prod/scrollDownAnimation.png'

class Homepage extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  }

  onResize = () => {

  }

  render() {
    return (
      <Header styles={styles} slideshow={slideshow} scrollImg={scrollImg}/>
    )
  }
}

const styles = {

  container: {
    height: '100vh'
  },
  fadeImages: {
    title: {
      fontFamily: 'capitolina, serif',
      fontWeight: 'bold',
    },
  },
  slideshow: {
    titleLine: {
      fontSize: 36,
      lineHeight: 1.25,
      marginTop: 5,
      marginBottom: 5,
      paddingRight: 10,
      paddingLeft: 10,
      display: 'inline-block',
      backdropFilter: 'blur(10px)',
      '-webkit-backdrop-filter': 'blur(10px)',
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderRadius: 7.5,
      textTransform: 'uppercase',
      textAlign: 'left',
      fontFamily: 'capitolina, serif',
      fontWeight: 700,
      md: {
        fontSize: 32,
      },
    },
    container: {
      height: '100%',
      width: '100%',
    },
    slider: {
      slider: {
        height: '100%',
      },
    },
    titleWrapper: {
      width: '60%',
      //backgroundColor: 'green',
      left: 0,
      color: 'red',
      paddingTop: 100,
      paddingLeft: '20%',
      placeContent: 'start',
      display: 'block',
      textAlign: 'left',
    },
  },
  scroll: {
    bottom: 5,
  },
  md: {
    fadeImages: {
      title: {
        fontSize: 40,
        padding: 10,
        paddingLeft: 35,
        paddingRight: 35,
      },
    },
  },
}

const slideshow = {
  options: {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    arrows: false,
    indicators: false,
    splitWrappedLines: true,
  },
  slides: [
    {
      source: 'https://s3.us-east-2.amazonaws.com/cdn.www.oos-studio.com/prod/DigitalTransformation_2.jpg',
      title: 'oos Builds Custom Apps That People Love to Use.',
    },
  ]
}

export default Homepage
