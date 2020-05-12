import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './commonCSS.css'
import mergeStyles from '../utils/StyleMerge'
import withSizes from '../utils/Sizes'

class ImageSlider extends Component {
  render() {
    const { styles, data, settings, sm, md } = this.props

    let _settings = settings
    _settings.slidesToShow = 3
    _settings.slidesToScroll = 3
    _settings.dots = false
    _settings.swipe = true

    if(sm) {
      _settings.slidesToShow = 1
      _settings.slidesToScroll = 1
      _settings.dots = true
    } else if(md) {
      _settings.slidesToShow = 2
      _settings.slidesToScroll = 2
    }

    if(sm) {
      _settings.swipe = true
    }

    return(
      <div style={styles.container}>
          <Slider arrows={!sm}{..._settings}>
            {data.map((entry) => {
              return <div className='sliderWrapper'><img src={entry.image.source} alt={'img'} /></div>
            })}
          </Slider>
      </div>
    )
  }
}

ImageSlider.defaultProps = {
  settings: {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    centerMode: false,
  },
}

const defaultStyles = {
  container: {
    width: '100%',
    maxWidth: 1200,
    backgroundColor: 'tan',
    display: 'flex',
    alignItems: 'center',
    padding: 100,
    overflow: 'hidden',
  },
}

export default mergeStyles(defaultStyles)(withSizes(ImageSlider))
