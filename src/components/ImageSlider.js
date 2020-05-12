import React, { Component } from 'react'
import mergeStyles from '../utils/StyleMerge'
import {Button, withSizes} from './index'

class ImageSlider extends Component {
  state = {
    items: [],
  }

  _sliderRef = React.createRef()

  componentDidMount() {
    const { data, settings, styles } = this.props
    const { getSliderRef } = this

    let items = data.map(d => {
      return <SliderItem data={d} width={styles.container.width / settings.itemsPerPage - settings.margin * 2} margin={settings.margin}/>
    })

    this.setState({
      items: items,
    })

   // getSliderRef().style.overflow = 'hidden'
  }

  getSliderRef = () => {
    return this._sliderRef
  }

  scrollNext = () => {
    const { settings } = this.props

    const offset = (settings.itemWidth + settings.margin * 2) * settings.itemsToScroll
    console.log(offset)

    this.getSliderRef().scrollLeft += offset
  }

  scrollPrev = () => {
    const { settings } = this.props

    const offset = (settings.itemWidth + settings.margin * 2) * settings.itemsToScroll
    console.log(offset)

    this.getSliderRef().scrollLeft -= offset
  }

  render() {
    const { styles, arrowImg, settings } = this.props
    const { items } = this.state
    const { scrollNext, scrollPrev } = this
    return(
      <React.Fragment>
        <Button onClick={() => scrollPrev()}>
          NEXT
        </Button>
        <div ref={r => this._sliderRef = r} style={styles.container}>
          {items}
        </div>
        <Button onClick={() => scrollNext()}>
          NEXT
        </Button>
      </React.Fragment>
    )
  }
}

function SliderItem(props) {
  const { data, width, margin } = props

  return (
    <div style={{...itemStyles.itemContainer, width: width, height: width, marginLeft: margin, marginRight: margin}}>
      <img style={itemStyles.itemImg} src={data.image.source} alt={'img'}/>
    </div>
  )
}

const itemStyles = {
  itemContainer: {
    flexGrow: 0,
    flexShrink: 0,
    flex: '0 0 auto',
    transition: 'all 0.5s',
    overflow: 'hidden',
    backgroundColor: 'blue',
  },
  itemImg: {
    height: '100%',
    objectFit: 'cover',
  },
}

ImageSlider.defaultProps = {

}

const defaultStyles = {
  container: {
    width: 1000,
    height: 400,
    paddingTop: 100,
    paddingBottom: 100,
    backgroundColor: 'tan',
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    alignItems: 'center',
    overflowY: 'hidden',
  },
}

export default mergeStyles(defaultStyles)(withSizes(ImageSlider))
