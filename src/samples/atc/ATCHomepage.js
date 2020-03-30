import React, {Component} from 'react'
import {Page} from './components/index'
import {Blurb, Section} from '../../components/index'
import withSizes from '../../utils/Sizes'

class ATCHomepage extends Component {

  getHomepageSections = () => {
    return [
      <Section styles={homepageStyles.collabSection}>
        <Blurb content={blurbContent.collab} styles={homepageStyles.collabSection.collabBlurb}/>
      </Section>,
      <Section styles={homepageStyles.designSection}>
        <Blurb content={blurbContent.design} styles={homepageStyles.designSection.designBlurb}/>
      </Section>
    ]
  }

  getHomepageHeader = () => {
    return {
      styles: homepageStyles.header,
      title: [
        'Designing Innovative Solutions',
        'Delivering Product Perfection',
      ],
      backgroundAsset: {
        url: require('./assets/Header.png'),
        mimeType: 'image',
      },
    }
  }


  render() {
    const { getHomepageSections, getHomepageHeader } = this

    return (
      <Page sections={getHomepageSections()} header={getHomepageHeader()}/>
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

const homepageStyles = {
  collabSection: {
    container:  {
      backgroundColor: '#FFFFFF',
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
  },
  designSection: {
    container: {
      backgroundColor: '#EDE8E4',
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
  },
  contact: {
    container: {
    },
  },
  header: {
    container: {
      height: '100vh',
    },
    text: {
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      fontSize: 60,
      marginTop: 25,
      md: {
        fontSize: 45,
      },
    },
    backgroundAsset: {
      height: '100%',
    },
  },
}

export default withSizes(ATCHomepage)
