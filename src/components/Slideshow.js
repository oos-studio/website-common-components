import React, {Component} from 'react'
import { Fade, Slide, Zoom } from 'react-slideshow-image'
import mergeStyles from '../utils/StyleMerge'
import withSizes from '../utils/Sizes'
import deepmerge from 'deepmerge'
import SplitWrappedLines from './SplitWrappedLines'
import Radium from 'radium'
import Reveal from 'react-reveal'
import './animations.css'

class Slideshow extends Component {
  renderSlide = () => {
    const { slides, options, styles, getStyle } = this.props
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
                  return ( index === 0 ? (
                    <Reveal effect="fadeInUp-Header" duration={1000}>
                      <div key={subIndex} style={getStyle(title.style)}>{title.text}</div>
                    </Reveal>
                    ) :
                      <div key={subIndex} style={getStyle(title.style)}>{title.text}</div>
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
    const { slides, options, styles, getStyle } = this.props
    const _styles = deepmerge(styles, fadeStyles)

    return (
      <Fade {...options} className="slideshowWrapper">
        {slides.map((slide, index) => {
          return(
          <div key={index} style={getStyle(_styles.slide)}>
            <div style={getStyle(_styles.imageWrapper)}>
              {slide.source && <img src={slide.source} style={getStyle(_styles.image)} alt={`img${index}`}/>}
            </div>
            <div style={getStyle(_styles.titleWrapper)}>
              {options.splitWrappedLines ?
                <SplitWrappedLines text={slide.title} styles={{ line: styles.titleLine }} />
                : slide.title.map((title, subIndex) => {
                  return (( index === 0 ? (
                        <Reveal effect="fadeInUp-Header" duration={1000}>
                          <span key={subIndex} style={getStyle(title.style)}>{title.text}</span>
                        </Reveal>
                      ) :
                      <span key={subIndex} style={getStyle(title.style)}>{title.text}</span>
                  ))
              })}
              {
                slide.button ?
                  <div style={getStyle(styles.buttonWrapper)}>
                    <div onClick={slide.button.onClick} key={`button-${index}`} style={getStyle(styles.button)}>{slide.button.text}</div>
                  </div>
                  : null
              }
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
  button: {
    display: 'inline-block',
    cursor: 'pointer',
  },
  buttonWrapper: {
  },
  titleLine: {

  },
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

export default mergeStyles(defaultStyles)(withSizes(Radium(Slideshow)))
