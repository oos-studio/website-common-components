import React, { Component } from 'react'
import FloatingParallax from "./components/FloatingParallax"
import Text from "./assets/text.png"

class ProvidenceHomepage extends Component {
  render() {
    return (
      <div>
        <div style={{height: 750}}/>
        <FloatingParallax/>
        <div style={{height: 750}}/>
      </div>
    )
  }
}

export default ProvidenceHomepage
