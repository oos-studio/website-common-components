import React, { Component } from 'react'
import { Container  } from 'reactstrap'
import mergeStyle from '../utils/StyleMerge'
import withSizes from '../utils/Sizes'
import Slideshow from './Slideshow'

class Header extends Component {
  render() {
    const {
      styles,
      title,
      subTitle,
      titleImageUrl,
      backgroundAsset,
      video,
      getStyle,
      slideshow,
      scrollImg,
      useGradient,
    } = this.props

    if (!styles.backgroundAsset.height) {
      styles.backgroundAsset.height = styles.container.height
    }

    return (
      <Container fluid style={styles.container}>
        {!slideshow &&
          <div style={getStyle(styles.text)}>
            {titleImageUrl && titleImageUrl !== '' ?
              <img style={styles.titleImage} src={titleImageUrl} alt={''}/>
              :
              Array.isArray(title) ?
                title.map(t => {
                  return (<span style={getStyle(styles.title)}>{t}</span>)
                })
                :
                <span style={getStyle(styles.title)}>{title}</span>
            }
            <div style={styles.subTitle}>
              <span>{subTitle}</span>
            </div>
          </div>
        }
        {!slideshow && backgroundAsset && backgroundAsset !== {} ?
          backgroundAsset.mimeType && backgroundAsset.mimeType.split('/')[0] === 'video' ?
            <video style={styles.backgroundAsset} {...video}>
              <source src={backgroundAsset.url} type={backgroundAsset.mimeType}/>
            </video>
          : backgroundAsset.mimeType && backgroundAsset.mimeType.split('/')[0] === 'image' ?
            <img style={styles.backgroundAsset} src={backgroundAsset.url} alt={''}/>
          : null
        : null}
        {
          slideshow && slideshow !== {} ?
            <div style={styles.slideshow}>
              <Slideshow {...slideshow} />
            </div>
            :
            null
        }
        {useGradient && <div style={styles.gradient}></div>}
        {scrollImg !== undefined && <img style={styles.scroll} src={scrollImg} alt={'scrollImg'} />}
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
    padding: 0,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  slideshow: {
    height: '100%',
    width: '100%',
  },
  text: {
  },
  title: {
    zIndex: 10000,
  },
  subTitle: {
    marginTop: 5,
    fontSize: 12,
  },
  titleImage: {

  },
  fadeImages: {

  },
  gradient: {
    background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 50%)',
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 10000,
  },
  scroll: {
    height: 75,
    width: 75,
    position: 'absolute',
    zIndex: 1,
    bottom: 35,
    left: (0.5 * window.clientWidth) - 37,
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
  },
  useGradient: true,
}

export default mergeStyle(defaultStyles)(withSizes(Header))
