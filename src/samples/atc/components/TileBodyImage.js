import React, {Component, useState} from 'react'
import {ImageCenteredText} from '../../../components'
import deepmerge from 'deepmerge'
import withSizes from '../../../utils/Sizes'

class TileBodyImage extends Component {
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
    const { img, url, txt, getStyle } = this.props
    const { hovered } = this.state
    const { onHover } = this

    const styles = hovered ? deepmerge(bodyStyles, bodyStyles.hovered) : bodyStyles

    return (
      <a href={url} onMouseEnter={onHover} onMouseLeave={onHover}><ImageCenteredText styles={getStyle(styles)} image={{image: img, title: txt}} text={txt}/></a>
    )
  }
}

const bodyStyles = {
  container: {
    height: '100%',
    width: '100%',
    padding: 0,
    transition: 'transform 0.5s',
    sm: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  },
  text: {
    color: '#FFFFFF',
    fontSize: 45,
    margin: 20,
    transition: 'color 0.25s',
  },
  overlay: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    transition: 'background-color 0.25s',
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

export default withSizes(TileBodyImage)
