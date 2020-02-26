import React, { Component } from 'react'
import FloatingParallaxComponent from "../../../components/FloatingParallax"
import WhoIsJesus from '../assets/WhoIsJesus.jpg'
import WhoIsJesusType from '../assets/WhoIsJesus_Type.png'

const layers = [
  {
    image: WhoIsJesus,
    y: [-10, 10],
    smallY: [-7, 7],
  },
  {
    image: WhoIsJesusType,
    y: [4, -4],
    smallY: [3, -3],
  }
]

const styles = {
  container: {
    backgroundColor: '#6A5B5D'
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
