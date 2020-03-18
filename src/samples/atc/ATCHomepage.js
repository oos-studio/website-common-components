import React, { Component } from 'react'
import { Footer, ContactForm } from './components/index'
import { Blurb, Section } from '../../components/index'
import withResize from '../../utils/ResizeHandler'

class ATCHomepage extends Component {

  render() {
    const { isMobile } = this.props
    return (
      <div style={styles.container}>
        <Section styles={styles.collabSection} isMobile={isMobile}>
          <Blurb content={blurbContent.collab} styles={styles.collabBlurb} isMobile={isMobile}/>
        </Section>
        <Section styles={styles.designSection} isMobile={isMobile}>
          <Blurb content={blurbContent.design} styles={styles.designBlurb} isMobile={isMobile}/>
        </Section>
        <Section styles={styles.contact}>
          <ContactForm isMobile={isMobile} />
        </Section>
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
  collabSection: {

  },
  designSection: {
    container: {
      backgroundColor: '#EDE8E4',
    },
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
  contact: {
    container: {
    },
  },
}

export default withResize(800)(ATCHomepage)
