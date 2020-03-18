import React, { Component } from 'react'
import { Footer } from './components/index'
import { Blurb } from '../../components/index'
import withResize from '../../utils/ResizeHandler'

class ATCHomepage extends Component {

  render() {
    const { isMobile } = this.props
    return (
      <div style={styles.container}>
        <Blurb content={blurbContent.collab} styles={styles.collabBlurb} isMobile={isMobile}/>
        <Blurb content={blurbContent.design} styles={styles.designBlurb} isMobile={isMobile}/>
        <Footer isMobile={isMobile}/>
      </div>
    )
  }
}

const blurbContent = {
  collab: {
    title: 'Collaborate. Innovate. Create.',
    text: 'Together, we will manufacture the perfect product to solve your unique needs.',
  },
  design: {
    title: 'Design. Engineer. Manufacture.',
    text: 'Our dynamic range of capabilities and services are fully customizable and executed to perfection.',
  },
}

const styles = {
  container: {

  },
  collabBlurb: {
    container: {
      height: 350,
    },
    title: {
      color: '#852D3D',
    },
    text: {
      color: '#7D7773',
    },
  },
  designBlurb: {
    container: {
      height: 350,
    },
    title: {
      color: '#852D3D',
    },
    text: {
      color: '#7D7773',
    },
  },
}

export default withResize(800)(ATCHomepage)
