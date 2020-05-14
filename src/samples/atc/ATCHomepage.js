import React, {Component} from 'react'
import {Page,  NavBar, NavBarMobile, TileGrid, CardList} from './components/index'
import {Blurb, Section} from '../../components/index'
import withSizes from '../../utils/Sizes'
import './index.css'
import ImageSlider from '../../components/ImageSlider'

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
      <div style={{backgroundColor: 'green', height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
      <ImageSlider data={sliderData} styles={sliderStyles} arrowImg={require('./assets/ScrollButton.png')}/>
      </div>
    )
  }
}
let sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  centerMode: false,
}
const sliderStyles = {
  container: {

  },
}
const sliderData = [
  {
    image: {
      source: 'https://picsum.photos/1920/1081',
    },
  },
  {
    image: {
      source: 'https://picsum.photos/1920/1082',
    },
  },
  {
    image: {
      source: 'https://picsum.photos/1920/1083',
    },
  },
  {
    image: {
      source: 'https://picsum.photos/1920/1084',
    },
  },
  {
    image: {
      source: 'https://picsum.photos/1920/1085',
    },
  },
  {
    image: {
      source: 'https://picsum.photos/1920/1086',
    },
  },
]


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
      backgroundColor: 'blue',
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
