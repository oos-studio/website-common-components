import React, { Component } from 'react'
import {
  FloatingParallax,
  Footer,
  ImageCaptionBlock,
  NavBar,
} from "./components"

class ProvidenceHomepage extends Component {
  render() {
    return (
      <div>
        <div style={styles.background}>
        <div style={styles.backgroundLeft}></div>
        <div style={styles.backgroundRight}></div>
        </div>
        <NavBar />
        <div style={{height: 750}}/>
        <FloatingParallax/>
        <ImageCaptionBlock/>
        <div style={{height: 750}}/>
        <Footer/>
      </div>
    )
  }
}

const styles={
  background: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    zIndex: -1,
    position: 'absolute',
  },
  backgroundLeft: {
    flex: 3,
    backgroundColor: '#F8F5EE',
  },
  backgroundRight: {
    flex: 1,
    backgroundColor: '#FDEBBE',
  },
}

export default ProvidenceHomepage
