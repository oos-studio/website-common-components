import React, { Component } from 'react'
import mergeStyles from '../utils/StyleMerge'
import withSizes from '../utils/Sizes'

class ImageCaptionBlock extends Component {
  render() {
    const { getStyle, styles, image, text, logo } = this.props
    console.log(styles)


    return (
      <div style={getStyle(styles.container)}>
        <div style={getStyle(styles.imageWrapper)}>
          <img alt={'img'} src={image.image} style={getStyle(styles.image)} />
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
  },
  image: {
    width: '100%',
    minHeight: 375,
    objectFit: 'cover',
  },
  bottomWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: 1200,
    marginLeft: 35,
    marginRight: 35,
    paddingTop: 0,
  },
  logoWrapper: {
    width: 400,
    position: 'relative',
    sm: {
      width: 250,
    },
    xs: {
      width: 50,
    },
  },
  logo: {
    position: 'absolute',
    top: -275,
    width: 400,
    height: 400,
    sm: {
      width: 250,
      height: 250,
      top: -175,
    },
    xs: {
      width: 200,
      height: 200,
      top: -150,
    },

  },
  text: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 45,
    textAlign: 'right',
    color: '#F8F5EE',
    paddingTop: 25,
    paddingBottom: 25,
    sm: {
      fontSize: 40,
      paddingTop: 25,
    },
    xs: {
      fontSize: 30,
      paddingTop: 50,
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
