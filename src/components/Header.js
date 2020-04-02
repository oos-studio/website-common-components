import React, { Component } from 'react'
import { Container  } from 'reactstrap'
import mergeStyle from '../utils/StyleMerge'
import withSizes from '../utils/Sizes'
import Slider from 'react-animated-slider'
import '../styles/slider.css'

class Header extends Component {
  state = {
    intervalId: 0,
  }
  scrollStep = () => {
    const { intervalId } = this.state
    if (window.pageYOffset >= window.innerHeight) {
      clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset + 15);
  }
  handleHeaderScroll = () => {
    const { scrollStep } = this
    let intervalId = setInterval(scrollStep, 0);
    this.setState({
      intervalId: intervalId ,
    })
  }
  render() {
    const {
      styles,
      title,
      subTitle,
      titleImageUrl,
      backgroundAsset,
      video,
      getStyle,
      slides,
      sliderAutoPlayDuration,
    } = this.props
    const {
      handleHeaderScroll,
    } = this

    if (!styles.backgroundAsset.height) {
      styles.backgroundAsset.height = styles.container.height
    }

    return (
      <Container fluid style={styles.container}>
        {!slides &&
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
        {!slides && backgroundAsset && backgroundAsset !== {} ?
          backgroundAsset.mimeType && backgroundAsset.mimeType.split('/')[0] === 'video' ?
            <video style={styles.backgroundAsset} {...video}>
              <source src={backgroundAsset.url} type={backgroundAsset.mimeType}/>
            </video>
          : backgroundAsset.mimeType && backgroundAsset.mimeType.split('/')[0] === 'image' ?
            <img style={styles.backgroundAsset} src={backgroundAsset.url} alt={''}/>
          : null
        : null}
        {
          slides && slides !== {} ?
            <div style={styles.slideshow.container}>
              <Slider duration={500} touchDisabled={true} autoplay={sliderAutoPlayDuration}>
                {slides.map((item, index) => (
                  <div
                    key={index}
                    className="wrapper"
                    style={{ background:  `url(${item.source}) no-repeat center center`, backgroundSize: 'cover',   boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    <div className="center">
                      {Array.isArray(item.title) ?
                        item.title.map(t => {
                          return(<div>{t}</div>)
                        })
                        :
                        <div>{item.title}</div>
                      }
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            :
            null
        }
        <a href='#'><img onClick={handleHeaderScroll} style={styles.scroll} src={require('../samples/atc/assets/HeaderScroll.png')}/></a>
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

  },
  text: {
  },
  title: {
    backgroundColor: 'blue',
    zIndex: 10000,
  },
  subTitle: {
    marginTop: 5,
    fontSize: 12,
  },
  titleImage: {

  },
  scroll: {
    height: 75,
    width: 100,
    position: 'absolute',
    zIndex: 1,
    bottom: 25,
    left: 'calc(50% - 75px)',
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

export default mergeStyle(defaultStyles)(withSizes(Header))
