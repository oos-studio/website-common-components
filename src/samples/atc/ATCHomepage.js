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
      slides: [
          {
            source: require('./assets/Header.png'),
            title: [
              'This is the first line',
              'This is the second line',
            ],
          },
          {
            source: require('./assets/Header2.png'),
            title: 'Slide 2 Title',
          },
          {
            source: require('./assets/Header3.png'),
            title: 'Slide 3 Title',

          },
      ],
      sliderAutoPlayDuration: 3000,
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
    slideshow: {
      container: {
        height: '100%',
        width: '100%',
      },
      slider: {
        slider: {
          height: '100%',
        },
      },
    },
  },
}

export default withSizes(ATCHomepage)
