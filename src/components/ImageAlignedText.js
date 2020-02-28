import React, { Component } from 'react'
import { Media } from 'reactstrap'
import Button from './Button'
import mergeStyles from '../utils/StyleMerge'
import { Parallax } from 'react-scroll-parallax'

class ImageAlignedText extends Component {
  constructor(props) {
    super(props)

    this.state = {
      windowWidth: window.innerWidth,
    }
  }

  renderLayer = layer => {
    const { styles } = this.props
    return (
      <div style={styles.parallaxContainer}>
        <Parallax x={this.getX(layer)}>
          <img
            alt={layer.title ? layer.title : 'img'}
            src={layer.src}
            style={styles.parallaxImage}
          />
        </Parallax>
      </div>
    )
  }

  getX = layer => {
    const { smallMax } = this.props
    const { x, smallX } = layer
    const { windowWidth } = this.state
    if (windowWidth <= smallMax) {
      return smallX ? smallX : x
    }
    return x
  }

  render() {
    const { styles, image, text, button, textAlign, parallaxLayers } = this.props
    const contentSide = textAlign === 'right' ? 'flex-end' : 'flex-start'

    console.log(styles)
    return (
      <div style={styles.container}>
        <Media object alt={image.title ? image.title : 'img'} src={image.src} style={styles.image}/>
        {parallaxLayers.map(layer => this.renderLayer(layer))}
        <div style={styles.content}>
        <div style={{
          justifyContent: contentSide,
          ...styles.overlay,
        }}>
          <div style={{
            float: textAlign,
            alignItems: contentSide,
            ...styles.subContainer,
          }}>
            <div style={{
              textAlign: textAlign,
              ...styles.textWrapper
            }}>
              {text}
            </div>
            {button.text.length > 0 &&
              <div style={styles.buttonWrapper}>
                <Button onClick={button.onClick} styles={styles.button}>
                  {button.text}
                </Button>
              </div>
            }
          </div>
        </div>
        </div>
      </div>
    )
  }
}

const defaultStyles = {
  container: {
    position: 'relative',
    height: 675,
  },
  content: {
    marginLeft: 75,
    marginRight: 75,
    paddingTop: 125,
  },
  image: {
    position: 'absolute',
    objectFit: 'cover',
    height: '100%',
    width: '100%',
  },
  parallaxContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '90%',
    overflow: 'hidden'
  },
  parallaxImage: {
    position: 'relative',
    height: '100%',
    width: '100%'
  },
  overlay: {
    position: 'relative',
    maxWidth: 1200,
    margin: 'auto',
  },
  subContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textWrapper: {
    width: '66%',
    color: 'white',
    fontSize: 52,
    overflow: 'hidden',
  },
  buttonWrapper: {
    marginTop: 30,
  },
  button: {
    color: 'white',
    hovered: {
      backgroundColor: 'white',
      color: 'grey',
      borderColor: 'grey',
    }
  },
}

ImageAlignedText.defaultProps = {
  text: '',
  image: {
    src: '',
    title: '',
  },
  parallaxLayers: [],
  button: {
    text: '',
    onClick: null,
  },
  textAlign: 'left',
}

export default mergeStyles(defaultStyles)(ImageAlignedText)
