import React, { Component } from 'react'
import { Container } from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'

class FullScreenImageText extends Component {
  render() {
    const { styles, image, text } = this.props

    return (
      <Container style={styles.main}>
        <img alt={image.title ? image.title : 'img'} src={image.image} style={styles.image}/>
        <div style={styles.overlay}>
          <div style={styles.text}>
          {text}
          </div>
        </div>
      </Container>
    )
  }
}

const defaultStyles = {
  main: {
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'relative',
  },
  image: {
    height: '100vh',
    width: '100vw',
    padding: 0,
    margin: 0,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: 1,
    width: '100%',
    height: '100%',
  },
  text: {

  },
}

FullScreenImageText.defaultProps = {
  styles: defaultStyles,
  text: '',
  image: {
    image: '',
    title: '',
  }
}

export default mergeStyles(defaultStyles)(FullScreenImageText)
