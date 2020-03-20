import React, { Component } from 'react'
import { Container, Row  } from 'reactstrap'
import mergeStyle from '../utils/StyleMerge'

class Header extends Component {
  render() {
    const {
      styles,
      title,
      subTitle,
      titleImageUrl,
      backgroundAsset,
      video
    } = this.props

    if (!styles.backgroundAsset.height) {
      styles.backgroundAsset.height = styles.container.height
    }

    return (
      <Container style={styles.container}>
        <div style={styles.text}>
          { titleImageUrl && titleImageUrl !== '' ?
            <img style={styles.titleImage} src={titleImageUrl} alt={''}/>
            : <span style={styles.title}>{title}</span>
          }
          <div style={styles.subTitle}>
            <span>{subTitle}</span>
          </div>
        </div>
        { backgroundAsset && backgroundAsset !== {} ?
          backgroundAsset.mimeType && backgroundAsset.mimeType.split('/')[0] === 'video' ?
            <video style={styles.backgroundAsset} {...video}>
              <source src={backgroundAsset.url} type={backgroundAsset.mimeType}/>
            </video>
          : backgroundAsset.mimeType && backgroundAsset.mimeType.split('/')[0] === 'image' ?
            <img style={styles.backgroundAsset} src={backgroundAsset.url} alt={''}/>
          : null
        : null}
      </Container>
    )
  }
}

const defaultStyles = {
  container: {
    width: '100%',
    height: 315,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 500,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundAsset: {
    position: 'fixed',
    width: '100%',
    zIndex: -10000,
    objectFit: 'cover',
    top: 0,
    left: 0,
    right: 0,
  },
  text: {
  },
  title: {

  },
  subTitle: {
    marginTop: 5,
    fontSize: 12,
  },
  titleImage: {

  },
}

Header.defaultProps = {
  title: '',
  subTitle: '',
  backgroundAsset: {},
  titleImageUrl: '',
  video: {
    loop: true,
    muted: true,
    playsInline: true,
    autoPlay: true,
    poser: '',
  }
}

export default mergeStyle(defaultStyles)(Header)
