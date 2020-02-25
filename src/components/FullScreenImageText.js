import React, { Component } from 'react'
import { Container } from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'

class FullScreenImageText extends Component {
  render() {
    const { styles, image, text, logo } = this.props

    return (
      <Container style={styles.container}>
        <img alt={image.title ? image.title : 'img'} src={image.image} style={styles.image}/>
        <div style={styles.overlay}>
          <div style={styles.bottom}>
          <div style={styles.text}>
          {text}
          </div>
          </div>
          <div style={styles.logoWrapper}>
            <img alt={logo.title} src={logo.image} style={styles.logo} />
          </div>
        </div>
      </Container>
    )
  }
}

const defaultStyles = {
  container: {
    height: '100%',
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
    backgroundColor: 'rgba(96, 151, 181, 0.75)',
    opacity: 1,
    width: '100%',
    height: '100%',
  },
  bottom: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: '30%',
    backgroundColor: 'rgb(96, 151, 181)',
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text: {
    width: '40%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    marginRight: '10%',
    objectFit: 'cover',
  },
  logoWrapper: {
    zIndex: 9999,
    position: 'absolute',
    width: '30%',
    height: '50%',
    bottom: '20%',
    left: '10%',

  },
  logo: {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    zIndex: 9999,
  },
}

FullScreenImageText.defaultProps = {
  text: '',
  image: {
    image: '',
    title: '',
  }
}

export default mergeStyles(defaultStyles)(FullScreenImageText)
