import React, { Component } from 'react'
import {Footer, ContactForm, NavBar, NavBarMobile} from './components/index'
import { Blurb, Section } from '../../components/index'
import withSizes from '../../utils/Sizes'

class ATCHomepage extends Component {

  render() {
    const { getStyle, md } = this.props
    return (
      <React.Fragment>
      { md ? <NavBarMobile /> : <NavBar /> }
    <div id='homeContainer' style={getStyle(styles.container)}>
        <img src={require('./assets/SampleHeader.png')} style={{width: '100vw', height: '100vh', objectFit: 'cover'}}/>
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
      </React.Fragment>
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
