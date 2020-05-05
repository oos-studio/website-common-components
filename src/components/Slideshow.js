import React, {Component} from 'react'
import { Fade, Slide, Zoom } from 'react-slideshow-image'
import mergeStyles from '../utils/StyleMerge'
import withSizes from '../utils/Sizes'
import deepmerge from 'deepmerge'

class Slideshow extends Component {
  renderSlide = () => {
    const { slides, options, styles } = this.props
    const _styles = deepmerge(styles, slideStyles)

    return (
      <Slide {...options} className="slideshowWrapper">
        {slides.map((slide, index) => {
          return(
            <div key={index} style={_styles.slide}>
              <div style={_styles.imageWrapper}>
                {slide.source && <img src={slide.source} style={_styles.image} alt={`img${index}`}/>}
              </div>
              <div style={_styles.titleWrapper}>
                {slide.title.map((title, subIndex) => {
                  return (
                    <div key={subIndex} style={title.style}>{title.text}</div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </Slide>
    )
  }
  renderFade = () => {
    const { slides, options, styles } = this.props
    const _styles = deepmerge(styles, fadeStyles)

    return (
      <Fade {...options} className="slideshowWrapper">
        {slides.map((slide, index) => {
          return(
          <div key={index} style={_styles.slide}>
            <div style={_styles.imageWrapper}>
              <img src={slide.source} style={_styles.image} alt={`img${index}`}/>
            </div>
            <div style={_styles.titleWrapper}>
              {slide.title.map((title, subIndex) => {
                  return (
                    <div key={subIndex} style={title.style}>{title.text}</div>
                  )
              })}
            </div>
          </div>
          )
        })}
      </Fade>
    )
  }
  renderZoom = () => {

  }
  render() {
    const { styles, getStyle, type } = this.props
    const { renderSlide, renderFade, renderZoom } = this
    let slideshow = null

    switch(type) {
      case 'slide':
        slideshow = renderSlide()
        break
      case 'zoom':
        slideshow = renderZoom()
        break
      default:
        slideshow = renderFade()
        break
    }

    return (
      <div style={getStyle(styles.container)}>
        {slideshow}
      </div>
    )
  }
}

const fadeStyles = {

}

const slideStyles = {

}

const defaultStyles = {
  container: {
    width: '100%',
    height: '100%',
  },
  slide: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  imageWrapper: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  titleWrapper: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
}

export default mergeStyles(defaultStyles)(withSizes(Slideshow))
