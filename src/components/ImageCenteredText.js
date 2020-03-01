import React, { Component } from 'react'
import { Container } from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'

class ImageCenteredText extends Component {
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
    position: 'relative',
    height: '50%',
    width: '50%',
  },
  image: {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    display: 'block',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: 1,
    width: '100%',
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {

  },
}

ImageCenteredText.defaultProps = {
  styles: defaultStyles,
  text: '',
  image: {
    image: '',
    title: '',
  }
}

export default mergeStyles(defaultStyles)(ImageCenteredText)
