import React, { Component } from 'react'
import { Container } from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'
import withSizes from '../utils/Sizes'

class ImageCenteredText extends Component {
  render() {
    const { styles, image, text, getStyle } = this.props
    return (
      <Container fluid style={getStyle(styles.container)}>
        <img alt={image.title ? image.title : 'img'} src={image.image} style={getStyle(styles.image)}/>
        <div style={getStyle(styles.overlay)}>
          <div style={getStyle(styles.text)}>
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
    height: '100%',
    width: '100%',
    padding: 0,
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

export default mergeStyles(defaultStyles)(withSizes(ImageCenteredText))
