import React, { Component } from 'react'
import mergeStyles from '../utils/StyleMerge'
import withSizes from '../utils/Sizes'

class ImageCaptionBlock extends Component {
  render() {
    const { getStyle, styles, image, text, logo } = this.props
    console.log(styles)

    const imageWrapperStyles = {
      ...styles.imageWrapper,
      backgroundImage: `url(${image.image})`,
    }

    return (
      <div style={getStyle(styles.container)}>
        <div style={getStyle(imageWrapperStyles)}>
          <div style={getStyle(styles.imageOverlay)} />
        </div>
        <div style={getStyle(styles.bottomWrapper)}>
          <div style={getStyle(styles.logoWrapper)}>
            <img alt={'logo'} src={logo.image} style={getStyle(styles.logo)} />
          </div>
          <div style={getStyle(styles.text)}>
            {text}
          </div>
        </div>
      </div>
    )
  }
}

const defaultStyles = {
  container: {
    backgroundColor: '#65A3BE',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  imageWrapper: {
    minHeight: 375,
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    background: '#65A3BE 0% 0% no-repeat',
    mixBlendMode: 'color',
  },
  image: {
    width: '100%',
    minHeight: 375,
    objectFit: 'cover',
  },
  bottomWrapper: {
    // display: 'flex',
    // justifyContent: 'space-between',
    overflow: 'visible',
    maxWidth: 1200,
  },
  logoWrapper: {
    float: 'left',
    width: 400,
    height: 120,
    position: 'relative',
    sm: {
      width: 250,
      height: 80,
    },
    xs: {
      width: 200,
      height: 30,
    },
  },
  logo: {
    marginTop: -285,
    width: 400,
    height: 400,
    sm: {
      marginTop: -175,
      width: 250,
      height: 250,
    },
    xs: {
      width: 200,
      height: 200,
    },
    position: 'absolute',
  },
  text: {
    fontSize: 45,
    textAlign: 'right',
    color: '#F8F5EE',
    paddingTop: 25,
    paddingBottom: 25,
    sm: {
      fontSize: 40,
     // paddingTop: 25,
    },
    xs: {
      fontSize: 30,
     // paddingTop: 50,
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
