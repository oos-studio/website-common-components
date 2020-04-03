import React, {Component, useState} from 'react'
import {ImageCenteredText} from '../../../components'
import deepmerge from 'deepmerge'

class TileBody extends Component {
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
    const { img, url, txt } = this.props
    const { hovered } = this.state
    const { onHover } = this

    const styles = hovered ? deepmerge(bodyStyles, bodyStyles.hovered) : bodyStyles

    return (
      <a href={url} onMouseEnter={onHover} onMouseLeave={onHover}><ImageCenteredText styles={styles} image={{image: img, title: txt}} text={txt}/></a>
    )
  }
}

const bodyStyles = {
  container: {
    height: '100%',
    width: '100%',
    padding: 0,
    transition: 'transform 0.5s',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 45,
    fontFamily: 'acumin-pro-condensed, sans-serif',
    letterSpacing: 3,
    textTransform: 'uppercase',
    margin: 20,
    transition: 'color 0.25s',
    md: {
      fontSize: 35,
    }
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

export default TileBody
