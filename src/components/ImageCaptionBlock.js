import React, { Component } from 'react'
import mergeStyles from '../utils/StyleMerge'
import withSizes from '../utils/Sizes'

class ImageCaptionBlock extends Component {
  render() {
    const { getStyle, styles, image, text, logo } = this.props

    return (
      <div style={getStyle(styles.container)}>
        <img alt={image.title ? image.title : 'img'} src={image.image} style={getStyle(styles.image)}/>
        <div style={getStyle(styles.overlay)}>
          <div style={getStyle(styles.bottom)}>
            <div style={getStyle(styles.logoWrapper)}>
              <img alt={logo.title} src={logo.image} style={getStyle(styles.logo)} />
            </div>
            <div style={getStyle(styles.text)}>
              {text}
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
    height: 700,
    md: {
      height: 500,
    },
  },
  image: {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    width: '100%',
    height: '100%',
  },
  bottom: {
    position: 'absolute',
    backgroundColor: 'tan',
    width: '100%',
    bottom: 0,
    height: '40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 75,
    paddingRight: 75,
    paddingTop: 25,
    paddingBottom: 25,
    sm: {
      paddingLeft: 25,
      paddingRight: 25,
    },
  },
  text: {
    fontSize: 45,
    maxWidth: 800,
    textAlign: 'right',
    md: {
      fontSize: 25,
      maxWidth: 400,
    },
    sm: {
      fontSize: 20,
    },
  },
  logoWrapper: {
    height: 400,
    width: 400,
    alignSelf: 'flex-end',
    marginBottom: 150,
    md: {
      height: 250,
      width: 250,
      marginBottom: 100,
    },
    sm: {
      height: 150,
      width: 150,
      marginBottom: 125,
    },
  },
  logo: {
    height: 400,
    width: 400,
    md: {
      height: 250,
      width: 250,
    },
    sm: {
      height: 150,
      width: 150,
    },
  },
}

ImageCaptionBlock.defaultProps = {
  text: '',
  image: {
    image: '',
    title: '',
  }
}

export default mergeStyles(defaultStyles)(withSizes(ImageCaptionBlock))
