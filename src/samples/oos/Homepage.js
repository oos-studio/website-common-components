import React, {Component} from 'react'
import { Header } from '../../components/index'

const scrollImg = 'https://s3.us-east-2.amazonaws.com/cdn.www.oos-studio.com/prod/scrollDownAnimation.png'

class Homepage extends Component {

  render() {
    return (
      <React.Fragment>
      <Header styles={styles} slideshow={slideshow} scrollImg={scrollImg}/>
      <div style={{height: 500}}/>
      </React.Fragment>
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
    image: {
      position: 'fixed',
      left: 0,
      right: 0,
    },
    titleLine: {
      fontSize: 35,
      lineHeight: 1.25,
      margin: 5,
      paddingRight: 10,
      paddingLeft: 10,
      display: 'inline-block',
      backdropFilter: 'blur(10px)',
      '-webkit-backdrop-filter': 'blur(10px)',
      backgroundColor: 'rgba(255,255,255,0.75)',
      borderRadius: 8,
      textTransform: 'uppercase',
      textAlign: 'left',
      fontFamily: 'capitolina, serif',
      fontWeight: 700,
      whiteSpace: 'nowrap',
      lg: {
        fontSize: 32,
      },
    },
    button: {
      backgroundColor: '#007589',
      color: 'white',
      borderRadius: 8,
      margin: 5,
      fontSize: 21,
      paddingTop: 3,
      paddingBottom: 5,
      paddingLeft: 20,
      paddingRight: 20,
      transition: 'background-color 0.35s ease-out',
      ':hover': {
        backgroundColor: '#005363',
      },
    },
    buttonWrapper: {
      marginTop: 50,
      sm: {
        position: 'absolute',
        bottom: 100,
        left: 0,
        right: 0,
        textAlign: 'center',
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
      width: '57.5%',
      left: 0,
      color: '#007589',
      paddingTop: '25.5vh',
      height: '100%',
      paddingLeft: '25%',
      paddingRight: 0,
      placeContent: 'start',
      display: 'block',
      textAlign: 'left',
      sm: {
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 100,
      }
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
    duration: 7000,
    transitionDuration: 500,
    infinite: true,
    arrows: false,
    indicators: false,
    splitWrappedLines: true,
  },
  slides: [
    {
      source: 'http://storage.googleapis.com/test.cdn.oos-software.com/logos/TFL_App_MockupPhoto@3x.png',
      title: 'oos Builds Custom Apps That People Love to Use.',
      button: {
        text: 'Watch Video',

      }
    },
    {
      source: 'https://s3.us-east-2.amazonaws.com/cdn.www.oos-studio.com/prod/DigitalTransformation_2.jpg',
      title: 'oos Solutions Make Smart Manufacturing Simple.',
      button: {
        text: 'Watch Video',
        onClick: () => console.log('clicked de button')
      }
    }
  ]
}

export default Homepage
