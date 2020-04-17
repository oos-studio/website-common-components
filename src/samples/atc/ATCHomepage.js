import React, {Component} from 'react'
import {Page,  NavBar, NavBarMobile, TileGrid, CardList} from './components/index'
import {Blurb, Section} from '../../components/index'
import withSizes from '../../utils/Sizes'
import './index.css'

class ATCHomepage extends Component {

  getHomepageSections = () => {
    return [
      <Section styles={homepageStyles.collabSection}>
        <Blurb content={blurbContent.collab} styles={homepageStyles.collabSection.collabBlurb}/>
        <TileGrid type={'icon'}/>
      </Section>,
      <Section styles={homepageStyles.designSection}>
        <Blurb content={blurbContent.design} styles={homepageStyles.designSection.designBlurb}/>
        <CardList />
      </Section>
    ]
  }

  getHomepageHeader = () => {
    return {
      styles: homepageStyles.header,
      slideshow: {
        type: 'fade',
        options: {
          duration: 2500,
          transitionDuration: 500,
          infinite: true,
          indicators: false,
          arrows: false,
          onChange: (oldIndex, newIndex) => {
            console.log(`fade transition from ${oldIndex} to ${newIndex}`);
          }
        },
        slides: [
          {
            source: require('./assets/Header.png'),
            title: [
              {
                text: 'This is the first line',
                style: {
                },
              },
              {
                text: 'This is the second line',
                style: {
                },
              },
            ],
          },
          {
            source: require('./assets/Header2.png'),
            title: [
              {
                text: 'This is the first line',
                style: {
                },
              },
              {
                text: 'This is the second line',
                style: {
                },
              },
            ],
          },
          {
            source: require('./assets/Header3.png'),
            title: [
              {
                text: 'This is the first line',
                style: {
                },
              },
              {
                text: 'This is the second line',
                style: {
                },
              },
            ],
          },
        ]
      },
      scrollImg: require('./assets/HeaderScroll.png')
    }
  }


  render() {
    const { getHomepageSections, getHomepageHeader } = this

    return (
      <React.Fragment>
        { window.innerWidth < 1160 ? <NavBarMobile /> : <NavBar /> }
        <Page sections={getHomepageSections()} header={getHomepageHeader()}/>
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

const homepageStyles = {
  collabSection: {
    container: {
      backgroundColor: '#FFFFFF',
      paddingLeft: 50,
      paddingRight: 50,
      paddingBottom: 50,
    },
    collabBlurb: {
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
  },
  designSection: {
    container: {
      backgroundColor: '#EDE8E4',
      paddingLeft: 50,
      paddingRight: 50,
      paddingBottom: 50,
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
  },
  contact: {
    container: {
    },
  },
  header: {
    container: {
      height: '100vh',

    },
    fadeImages: {
      title: {
        fontFamily: 'capitolina, serif',
        fontWeight: 'bold',
      },
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
