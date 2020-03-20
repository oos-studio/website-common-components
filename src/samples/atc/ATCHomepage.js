import React, { Component } from 'react'
import { Footer, ContactForm } from './components/index'
import { Blurb, Section } from '../../components/index'

class ATCHomepage extends Component {

  render() {
    return (
      <div style={styles.container}>
        <Section styles={styles.collabSection}>
          <Blurb content={blurbContent.collab} styles={styles.collabBlurb}/>
        </Section>
        <Section styles={styles.designSection}>
          <Blurb content={blurbContent.design} styles={styles.designBlurb}/>
        </Section>
        <Section styles={styles.contact}>
          <ContactForm/>
        </Section>
        <Footer />
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

export default ATCHomepage
