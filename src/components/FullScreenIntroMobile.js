import React, { Component } from 'react'
import ImageSlider from './ImageSlider'
import withSizes from '../utils/Sizes'
import mergeStyles from '../utils/StyleMerge'

class FullScreenIntroMobile extends Component {
  render() {
    const { text, image, slideshow, getStyle, styles } = this.props

    return (
      <div style={styles.container}>
        <div style={getStyle(styles.text)}>{text}</div>
        <div style={styles.overlayWrapper}>
          <div style={styles.overlay}>
            <img alt={'overlay'} src={image} style={styles.overlay.img} />
          </div>
        </div>
        <div style={styles.sliderWrapper}>
          <ImageSlider
            settings={settings}
            data={slideshow}
            styles={getStyle(styles.imageSlider)}
          />
        </div>
      </div>
    )
  }
}

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  centerMode: true,
}

const defaultStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 100,
    overflow: 'hidden',
  },
  text: {
    backgroundColor: '#F8F5EE',
    flex: 3,
    minHeight: 350,
    fontSize: 35,
    padding: 35,
    paddingRight: 125,
    sm: {
      fontSize: 30,
    },
    xxs: {
      fontSize: 22,
    },
  },
  overlayWrapper: {
    backgroundColor: '#FDEBBE',
    height: 150,
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    right: -250,
    img: {
      height: 550,
    },
  },
  sliderWrapper: {
    width: '100%',
  },
  imageSlider: {
    container: {
      backgroundColor: '#6A5B5D',
      padding: 0,
      paddingBottom: 0,
      paddingTop: 25,
    },
  },
}

export default mergeStyles(defaultStyles)(withSizes(FullScreenIntroMobile))
