import React, { Component } from 'react'
import ImageSlider from './ImageSlider'
import mergeStyles from '../utils/StyleMerge'

class FullScreenIntroDesktop extends Component {
  render() {
    const { text, image, slideshow, styles } = this.props

    return (
      <React.Fragment>
        <div style={styles.backgroundColors}>
          <div style={styles.left} />
          <div style={styles.right}>
            <div style={styles.overlay}>
              <img alt={'overlay'} src={image} style={styles.overlay.img} />
            </div>
          </div>
        </div>
        <div style={styles.content}>
          <div style={styles.text}>{text}</div>
          <div style={styles.sliderWrapper}>
            <ImageSlider
              settings={settings}
              data={slideshow}
              styles={styles.imageSlider}
            />
          </div>
        </div>
      </React.Fragment>
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
  centerMode: false,
}

const defaultStyles = {
  backgroundColors: {
    height: 1000,
    width: '100vw',
    position: 'absolute',
    top: 0,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
  },
  left: {
    backgroundColor: '#F8F5EE',
    flex: 1,
    zIndex: -1,
  },
  right: {
    backgroundColor: '#FDEBBE',
    flex: 1,
    marginRight: -650,
    position: 'relative',
  },
  content: {
    height: 780,
    maxWidth: 1200,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 220,
    paddingLeft: 35,
  },
  text: {
    fontSize: 40,
    marginBottom: 40,
    maxWidth: 800,
  },
  slideshow: {
    backgroundColor: 'blue',
    width: 800,
    height: 400,
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    left: -500,
    right: 650,
    bottom: 0,
    overflow: 'hidden',
    zIndex: 9,
    marginLeft: 50,
    img: {
      width: '100%',
      minWidth: 950,
      height: 'auto',
    },
  },
  sliderWrapper: {
    width: 800,
  },
  imageSlider: {
    container: {
      backgroundColor: 'rgba(0,0,0,0)',
      padding: 0,
      paddingBottom: 75,
    },
  },
}

export default mergeStyles(defaultStyles)(FullScreenIntroDesktop)
