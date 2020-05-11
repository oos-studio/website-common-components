import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './commonCSS.css'
import mergeStyles from '../utils/StyleMerge'
import {withSizes} from './index'

class ImageSlider extends Component {
  _sliderRef = React.createRef()

  getSliderRef = () => {
    return this._sliderRef
  }

  onClickPrev = () => {
    const { getSliderRef } = this
    getSliderRef().slickPrev()
  }

  onClickNext = () => {
    const { getSliderRef } = this
    getSliderRef().slickNext()
  }

  render() {
    const { styles, data, settings, arrowImg, rotateArrow, sm, md } = this.props
    const { onClickPrev, onClickNext } = this

    const prevTransform = rotateArrow ? 'rotate(-90deg)' : 'none'
    const nextTransform = rotateArrow ? 'rotate(90deg)' : 'none'

    let _settings = settings
    _settings.slidesToShow = 3
    _settings.dots = false

    if(sm) {
      _settings.slidesToShow = 1
      _settings.dots = true
    } else if(md) {
      _settings.slidesToShow = 2
    }

    return(
      <div style={styles.container}>
        {!sm && <div style={styles.arrowWrapper}><img onClick={() => onClickPrev()} style={{...styles.arrowImg, transform: prevTransform}} src={arrowImg} alt={'img'} /></div>}
        <div style={styles.sliderWrapper}>
          <Slider ref={r => this._sliderRef = r} {..._settings}>
            {data.map((entry) => {
              return <img style={styles.image} src={entry.image.source} alt={'img'} />
            })}
          </Slider>
        </div>
        {!sm && <div style={styles.arrowWrapper}><img onClick={() => onClickNext()} style={{...styles.arrowImg, transform: nextTransform}} src={arrowImg} alt={'img'} /></div>}
      </div>
    )
  }
}

ImageSlider.defaultProps = {
  rotateArrow: true,
  arrowImg: '',
  settings: {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
  },
}

const defaultStyles = {
  container: {
    backgroundColor: 'tan',
    width: '100%',
    maxWidth: 1200,
   // margin: 100,
    height: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderWrapper: {
    height: '100%',
    width: '75%',
  },
  image: {
    height: '400 !important',
    width: '400 !important',
  },
  arrowWrapper: {
    marginRight: 50,
    marginLeft: 50,
    cursor: 'pointer',
  },
  arrowImg: {
    width: 75,
    height: 75,
  },
}

export default mergeStyles(defaultStyles)(withSizes(ImageSlider))
