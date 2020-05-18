import React, { Component } from 'react'
import Slider from 'react-slick'
import {NavLink} from './index'
import './commonCSS.css'
import mergeStyles from '../utils/StyleMerge'
import withSizes from '../utils/Sizes'

class ImageSlider extends Component {
  render() {
    const { styles, data, settings, sm, getStyle, history } = this.props

      return(
        <div style={getStyle(styles.container)}>
          <Slider arrows={!sm}{...settings}>
            {data.map((entry) => {
              const useRouter = entry.linkToPage.length > 0
              const item = {
                url: entry.linkToPage[0] ? entry.linkToPage[0].url : entry.imageSliderItemUrl,
              }
              if(entry.imageSliderItemUrl !== null || entry.linkToPage.length > 0) {
                return <div className='sliderWrapper'><NavLink style={styles} history={history} useRouter={useRouter} item={item}><img
                  src={entry.imageSliderItemImage.url} alt={'img'}/></NavLink></div>
              } else {
                return <div className='sliderWrapper'><img
                  src={entry.imageSliderItemImage.url} alt={'img'}/></div>
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
}

export default mergeStyles(defaultStyles)(withSizes(ImageSlider))
