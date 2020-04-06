import React, {Component} from 'react'
import deepmerge from 'deepmerge'
import withSizes from '../../../utils/Sizes'

class TileBodyIcon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hovered: false,
    }
  }
  onHover = () => {
    const { hovered } = this.state
    this.setState({
      hovered: !hovered
    })
  }
  render() {
    const { img, url, txt, _styles, getStyle } = this.props
    const { hovered } = this.state
    const { onHover } = this

    let styles = hovered ? deepmerge(bodyStyles, bodyStyles.hovered) : bodyStyles
    styles = _styles ? deepmerge(styles, getStyle(_styles)) : styles

    return (
      <a href={url} style={getStyle(styles.container)} onMouseEnter={onHover} onMouseLeave={onHover}>
        <div style={getStyle(styles.imageWrapper)}>
          <img src={img} alt={txt} style={getStyle(styles.image)}/>
        </div>
        <div style={getStyle(styles.text)}>
          {txt}
        </div>
      </a>
    )
  }
}

const bodyStyles = {
  container: {
    height: '100%',
    width: '100%',
    padding: 0,
    transition: 'transform 0.5s',
    backgroundColor: '#DCD3CB',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
    textDecoration: 'none',
    sm: {
      paddingTop: 20,
      justifyContent: 'space-around',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  },
  text: {
    color: '#7D7773',
    fontSize: 45,
    textAlign: 'center',
    fontFamily: 'acumin-pro-condensed, sans-serif',
    letterSpacing: 3,
    textTransform: 'uppercase',
    margin: 20,
    transition: 'color 0.25s',
    sm: {
      fontSize: 75,
    },
    xs: {
      fontSize: 45,
    },
  },
  overlay: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    transition: 'background-color 0.25s',
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
   // height: '65%',
    width: '65%',
  },
  hovered: {
    container: {
      transform: 'scale(1.05)',
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
  },
}

export default withSizes(TileBodyIcon)
