import React, { Component } from 'react'
import mergeStyles from '../utils/StyleMerge'
import deepmerge from 'deepmerge'
import { Parallax, withController } from 'react-scroll-parallax'
import NavLink from './index'

class FloatingParallax extends Component {
  constructor(props) {
    super(props)

    this.state = {
      windowWidth: window.innerWidth,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize)
    setTimeout(() => {
      console.log('mount')
      this.props.parallaxController.update()
    }, 100)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  renderLayer = (layer, index) => {
    const { styles, url, useRouter, history } = this.props

    return (
      <div
        key={index}
      style={styles.imageLayer}>
        <Parallax y={this.getY(layer)}>
          <NavLink item={{url: url}} useRouter={useRouter} history={history} style={styles.navLink}>
            <img
              src={layer.image}
              style={{
                position: 'relative',
                width: '100%',
                height: this.getFloatingContainerStyle().height,
                objectFit: 'cover',
              }}
            />
          </NavLink>
        </Parallax>
      </div>
    )
  }

  resize = () => {
    this.setState({
      windowWidth: window.innerWidth,
    })
  }

  getFloatingContainerStyle = () => {
    const { smallMax, styles } = this.props
    const { windowWidth } = this.state
    let floatingContainerStyle = styles.floatingContainer
    if (windowWidth <= smallMax) {
      floatingContainerStyle = deepmerge(floatingContainerStyle, styles.floatingContainerSmall)
    }
    return floatingContainerStyle
  }

  getFloatOffset = () => {
    const { smallMax, floatOffset, smallFloatOffset } = this.props
    const { windowWidth } = this.state
    if (windowWidth <= smallMax) {
      return smallFloatOffset
    }
    return floatOffset
  }

  getY = (layer = null) => {
    let { smallMax, y, smallY } = this.props
    if (layer) {
      y = layer.y
      smallY = layer.smallY ? layer.smallY : layer.y
    }
    const { windowWidth } = this.state
    if (windowWidth <= smallMax) {
      return smallY
    }
    return y
  }

  render() {
    const {
      styles,
      layers,
    } = this.props

    return (
      <div style={styles.container}>
        <Parallax y={this.getY()}>
          <div style={{
            ...this.getFloatingContainerStyle(),
            transform: `translateY(${this.getFloatOffset()}px)`,
          }}>
            {layers.map((layer, index) => {
              return this.renderLayer(layer, index)
            })}
          </div>
        </Parallax>
      </div>
    )
  }
}

FloatingParallax.defaultProps = {
  floatOffset: 75,
  smallFloatOffset: 30,
  y: [10, -10],
  smallY: [7, -7],
  layers: [],
  smallMax: 730,
}

const defaultStyles = {
  container: {
    position: 'relative',
    width: '100%',
    overflow: 'show',
    zIndex: 1000,
  },
  floatingContainer: {
    position: 'relative',
    height: 500,
    marginLeft: 75,
    marginRight: 75,
  },
  imageLayer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    maxWidth: 1200,
    marginLeft: '50%',
    transform: 'translateX(-50%)',
    overflow: 'hidden',
  },
  floatingContainerSmall: {
    height: 300,
    marginLeft: 30,
    marginRight: 30,
  }
}

export default mergeStyles(defaultStyles)(withController(FloatingParallax))
