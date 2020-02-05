import React, { Component } from 'react'

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

    return (
      <div style={styles.wrapper}>
        { backgroundAsset ?
          backgroundAsset.mimeType.split('/')[0] === 'video' ?
            <video style={styles.backgroundAsset} {...video}>
              <source src={backgroundAsset.url} type={backgroundAsset.mimeType}/>
            </video>
            : backgroundAsset.mimeType.split('/')[0] === 'image' ?
            <img style={styles.backgroundAsset} src={backgroundAsset.url} alt={''}/>
            : null
        : null}
          <div style={styles.text}>
            { titleImageUrl && titleImageUrl !== '' ?
              <img style={styles.titleImage} src={titleImageUrl} alt={''}/>
              : <span>{title}</span>
            }
            <span style={styles.title}>{title}</span>
            <div style={styles.subTitle}>
              <span>{subTitle}</span>
            </div>
          </div>
      </div>
    )
  }
}

const defaultStyles = {
  wrapper: {
    width: '100%',
    height: 500,
  },
  backgroundAsset: {
    objectFit: 'cover',
    zIndex: -5,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  title: {

  },
  subTitle: {

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

export default Header
