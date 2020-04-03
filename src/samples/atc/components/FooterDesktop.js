import React, { Component } from 'react'
import { Media } from 'reactstrap'
import {Button, Footer as FooterComponent} from '../../../components'

const socials = [
  {
    name: 'facebook',
    icon: require('../assets/Facebook.png'),
    url: 'https://www.facebook.com'
  },
  {
    name: 'twitter',
    icon: require('../assets/Twitter.png'),
    url: 'https://www.twitter.com'
  },
  {
    name: 'instagram',
    icon: require('../assets/Instagram.png'),
    url: 'https://www.instagram.com'
  },
]

const columns = [
  {
    heading: 'Find Us',
    type: 'text',
    text: [
      '2905 LaVanture Place',
      'Elkhart, IN 46514',
    ],
  },
  {
    heading: 'Contact Us',
    type: 'links',
    links: [
      {
        title: 'Toll Free: 800.238.2687',
        url: '',
      },
      {
        title: 'Office: 574.262.1258',
        url: '',
      },
      {
        title: 'sales@atcomp.com',
        url: 'mailto:sales@atcomp.com',
      },
    ],
  },
  {
    heading: 'About Us',
    type: 'links',
    links: [
      {
        title: 'About Us',
        url: 'https://www.oos-studio.com',
      },
      {
        title: 'Terms & Conditions',
        url: 'https://www.oos-studio.com',
      },
      {
        title: 'Privacy Policy',
        url: 'https://www.oos-studio.com',
      },
    ],
  },
]

const styles = {
  container: {
    backgroundColor: '#562A31',
    height: 450,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems:  'center',
    padding: 75,
    paddingTop: 50,
    paddingBottom: 0,
  },
  topWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 1200,
    flex: 1.6,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: '#EDE8E4',
    width: '100%',
    maxWidth: 1200,
  },
  footerComp: {
    container: {
      flex: 3,
      backgroundColor: '#562A31',
      minWidth: 650,
    },
    defaultColumn: {
      margin: 0,
      padding: 0,
    },
    defaultHeader: {
      color: '#E86956',
      fontSize: 35,
      fontFamily: 'capitolina, serif',
      fontStyle: 'italic',
    },
    defaultText: {
      fontSize: 16,
      color: '#EDE8E4',
      marginBottom: 10,
    },
    defaultLink: {
      fontSize: 16,
      color: '#EDE8E4',
      marginBottom: 10,
      display: 'block',
    },
    columns: [
      {},
      {},
      {},
      {},
    ]
  },
  buttonWrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  button: {
    height: 80,
    width: 80,
    position: 'relative',
    borderWidth: 2,
    borderColor: '#EDE8E4',
    borderStyle: 'solid',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    filter: 'none',
    hovered: {
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: '#EDE8E4',
      filter: 'invert(57%) sepia(14%) saturate(4670%) hue-rotate(325deg) brightness(95%) contrast(91%)',
    },
  },
  buttonImg: {
    height: 45,
    width: 45,
    paddingBottom: 5,
},
  bottomWrapper: {
    width: '100%',
    maxWidth: 1200,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingTop: 15,
  },
  copyright: {
    color: '#EDE8E4',
    fontSize: 18,
    marginRight: 25,
    fontFamily: 'acumin-pro-condensed, sans-serif',
    letterSpacing: 1.25,
  },
  socialWrapper: {
    width: 200,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socials: {
    paddingLeft: 35,
  },
  socialImages: {
    height: 25,
    width: 25,
  },
}

class FooterDesktop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      intervalId: 0,
      hovered: false,
      activeIndex: null,
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.scrollStep = this.scrollStep.bind(this)
  }

  scrollStep() {
    const { intervalId } = this.state
    if (window.pageYOffset === 0) {
      clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - 35);
  }

  handleScroll() {
    const { scrollStep } = this
    let intervalId = setInterval(scrollStep, 0);
    this.setState({
      intervalId: intervalId ,
    })
  }
  hoverImg = (index=null) => {
    this.setState({
      hovered: true,
      activeIndex: index,
    })
  }
  leaveHoverImg = (index=null) => {
    this.setState({
      hovered: false,
      activeIndex: null,
    })
  }
  render() {
    const { handleScroll, hoverImg, leaveHoverImg } = this
    const { hovered, activeIndex } = this.state
    return (
      <div style={styles.container}>
        <div style={styles.topWrapper}>
          <FooterComponent columns={columns} styles={styles.footerComp}/>
          <div style={styles.buttonWrapper}>
            <Button onClick={handleScroll} styles={styles.button}>
              <Media object src={require('../assets/ScrollButton.png')} style={styles.buttonImg}/>
            </Button>
          </div>
        </div>
        <div style={styles.divider}>

        </div>
        <div style={styles.bottomWrapper}>
          <div style={styles.copyright}>
            Copyright 2020 American Technology Components, Inc.
          </div>
          <div style={styles.socialWrapper}>
            {socials.map((s, index) => {
              return(
                <div style={styles.socials}>
                  <a href={s.url}><Media onMouseEnter={() => hoverImg(index)} onMouseLeave={() => leaveHoverImg(index)} object src={s.icon} alt={s.name} style={{
                    ...styles.socialImages,
                    filter: hovered && activeIndex === index ? 'invert(57%) sepia(14%) saturate(4670%) hue-rotate(325deg) brightness(95%) contrast(91%)' : 'none',
                  }} /></a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default FooterDesktop
