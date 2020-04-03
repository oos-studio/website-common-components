import React, { Component } from 'react'
import { Footer, ContactForm, CardList, TileGrid, NavBar, NavBarMobile  } from './components/index'
import { Blurb, Section } from '../../components/index'
import withSizes from '../../utils/Sizes'
import './index.css'

class ATCHomepage extends Component {

  render() {
    const { getStyle, md } = this.props
    return (
      <React.Fragment>
      { window.innerWidth < 1160 ? <NavBarMobile /> : <NavBar /> }
    <div id='homeContainer' style={getStyle(styles.container)}>
        <img src={require('./assets/SampleHeader.png')} style={{width: '100vw', height: '100vh', objectFit: 'cover'}}/>
        <Section styles={getStyle(styles.collabSection)}>
          <Blurb content={blurbContent.collab} />
          <TileGrid />
        </Section>
        <Section styles={getStyle(styles.designSection)}>
          <Blurb content={blurbContent.design} />
          <CardList />
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
    container: {

      paddingLeft: 50,
      paddingRight: 50,
      paddingBottom: 50,
    },
  },
  designSection: {
    container: {
      backgroundColor: '#EDE8E4',
      paddingLeft: 50,
      paddingRight: 50,
      paddingBottom: 50,
    },
  },
  collabBlurb: {
    container: {
      marginTop: 50,
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
      marginTop: 50,
      marginBottom: 50,
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
