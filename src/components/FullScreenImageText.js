import React, { Component } from 'react'
import { Container } from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'

class FullScreenImageText extends Component {
  render() {
    const { styles, image, text } = this.props

    return (
      <Container style={styles.container}>
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
  container: {
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    position: 'relative',
    display: 'block',
    bottom: 0,
    marginLeft: -8,
  },
  image: {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
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
