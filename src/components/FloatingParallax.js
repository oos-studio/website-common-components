import React, { Component } from 'react'
import mergeStyles from '../utils/StyleMerge'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import { Parallax as ParallaxImage } from 'react-parallax'
import Text from '../samples/providence/assets/text.png'

class FloatingParallax extends Component {

  renderLayer = percentage => {
    const { styles, floatOffset } = this.props
    let parallaxTrans = floatOffset * percentage - floatOffset
    console.log(percentage)
    return (
      <div style={{
        ...styles.floatingContainer,
        transform: `translateY(${floatOffset - parallaxTrans}px)`,
      }}>
      </div>
    )
  }

  renderLayer = layer => {
    const { styles } = this.props
    return <ParallaxImage
      bgImage={layer.image}
      bgImageStyle={{
        objectFit: 'cover',
      }}
      strength={layer.strength}
      style={styles.imageLayer}
    >
      <div style={{height: styles.floatingContainer.height}}/>
    </ParallaxImage>
  }

  render() {
    const {
      y,
      floatOffset,
      styles,
      layers,
    } = this.props
    return (
      <div style={styles.container}>
        <Parallax y={y}>
          <div style={{
            ...styles.floatingContainer,
            transform: `translateY(${floatOffset}px)`,
          }}>
            {layers.map(layer => {
              return this.renderLayer(layer)
            })}
          </div>
        </Parallax>
      </div>
    )
  }
}

FloatingParallax.defaultProps = {
  floatingStrength: 200,
  floatOffset: 75,
  y: [10, -10],
  layers: []
}

const defaultStyles = {
  container: {
    position: 'relative',
    width: '100%',
    height: 500,
    overflow: 'show',
  },
  floatingContainer: {
    height: 500,
    marginLeft: 75,
    marginRight: 75,
  },
  imageLayer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  }
}

export default mergeStyles(defaultStyles)(FloatingParallax)
