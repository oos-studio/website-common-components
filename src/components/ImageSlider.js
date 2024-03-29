import React, { Component } from 'react'
import Slider from 'react-slick'
import {NavLink} from './index'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './commonCSS.css'
import mergeStyles from '../utils/StyleMerge'
import withSizes from '../utils/Sizes'

class ImageSlider extends Component {
  render() {
    const { styles, data, settings, sm, getStyle, history } = this.props

      return(
        <div style={getStyle(styles.container)}>
          <Slider arrows={!sm}{...settings}>
            {data.map((entry, index) => {
              const item = {
                url: entry.imageSliderItemUrl,
              }
              if(entry.isEntry || item.url !== null) {
                return <div key={index} className='sliderWrapper'><NavLink style={getStyle(styles.navLink)} history={history} useRouter={entry.isEntry} item={item}><img
                  src={entry.imageSliderItemImage[0].url} alt={'img'}/></NavLink></div>
              } else {
                return <div key={index} className='sliderWrapper'><div style={getStyle(styles.item)}><img
                  src={entry.imageSliderItemImage[0].url} alt={'img'}/></div></div>
              }
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
  navLink: {
    padding: 0,
  },
}

export default mergeStyles(defaultStyles)(withSizes(ImageSlider))
