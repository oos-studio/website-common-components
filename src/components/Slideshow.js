import React, {Component} from 'react'
import { Fade, Slide, Zoom } from 'react-slideshow-image'
import mergeStyles from '../utils/StyleMerge'
import withSizes from '../utils/Sizes'
import deepmerge from 'deepmerge'

class Slideshow extends Component {
  state = {
    titleLines: [],
  }

  splitWrappedLinesRef = React.createRef()

  componentDidMount() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  }

  onResize = () => {
    const lines = getLineBreaks(this.splitWrappedLinesRef.current.childNodes[0])

    this.setState({
      titleLines: lines
    })

    console.log(lines)
  }

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
                  return (
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
    const { titleLines } = this.state
    const _styles = deepmerge(styles, fadeStyles)

    return (
      <Fade {...options} className="slideshowWrapper">
        {slides.map((slide, index) => {
          return(
          <div key={index} style={_styles.slide}>
            <div style={_styles.imageWrapper}>
              {slide.source && <img src={slide.source} style={_styles.image} alt={`img${index}`}/>}
            </div>
            <div style={_styles.titleWrapper}>
              {options.splitWrappedLines ?
                <React.Fragment>
                  <span ref={this.splitWrappedLinesRef} className={'split-wrapped-lines'} style={{...getStyle(styles.titleLine), position: 'absolute', opacity: 0}}>{slide.title}</span>
                  {titleLines.map((line, subIndex) =>
                      <span key={subIndex} style={getStyle(styles.titleLine)}>{line}</span>
                  )}
                </React.Fragment>
                : slide.title.map((title, subIndex) => {
                  return (
                    <span key={subIndex} style={getStyle(title.style)}>{title.text}</span>
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

function getLineBreaks(node) {
  // we only deal with TextNodes
  if(!node || !node.parentNode || node.nodeType !== 3)
    return [];
  // our Range object form which we'll get the characters positions
  const range = document.createRange();
  // here we'll store all our lines
  const lines = [];
  // begin at the first char
  range.setStart(node, 0);
  // initial position
  let prevBottom = range.getBoundingClientRect().bottom;
  let str = node.textContent;
  let current = 1; // we already got index 0
  let lastFound = 0;
  let bottom = 0;
  // iterate over all characters
  while(current <= str.length) {
    // move our cursor
    range.setStart(node, current);
    if(current < str.length -1)
      range.setEnd(node, current+1);
    bottom = range.getBoundingClientRect().bottom;
    if(bottom > prevBottom) { // line break
      lines.push(
        str.substr(lastFound , current - lastFound) // text content
      );
      prevBottom = bottom;
      lastFound = current;
    }
    current++;
  }
  // push the last line
  lines.push(str.substr(lastFound));

  return lines;
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
