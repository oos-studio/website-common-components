import React, { Component } from 'react'
import FloatingParallaxComponent from "../../../components/FloatingParallax"
import Text from "../assets/text.png"

const layers = [
  {
    image: 'https://picsum.photos/1920/1080',
    strength: 150,
  },
  {
    image: Text,
    strength: 100,
  }
]

const styles = {
  container: {
    backgroundColor: 'grey'
  }
}

class FloatingParallax extends Component {
  render() {
    return (
      <FloatingParallaxComponent
        layers={layers}
        styles={styles}
      />
    )
  }
}

export default FloatingParallax
