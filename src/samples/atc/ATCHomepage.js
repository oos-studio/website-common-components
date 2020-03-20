import React, { Component } from 'react'
import { Footer, ContactForm } from './components/index'
import { Blurb, Section } from '../../components/index'
import withSizes from '../../utils/Sizes'

class ATCHomepage extends Component {

  render() {
    const { getStyle } = this.props
    return (
      <div style={getStyle(styles.container)}>
        <Section styles={getStyle(styles.collabSection)}>
          <Blurb content={blurbContent.collab} styles={getStyle(styles.collabBlurb)}/>
        </Section>
        <Section styles={getStyle(styles.designSection)}>
          <Blurb content={blurbContent.design} styles={getStyle(styles.designBlurb)}/>
        </Section>
        <Section styles={getStyle(styles.contact)}>
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

export default withSizes(ATCHomepage)
