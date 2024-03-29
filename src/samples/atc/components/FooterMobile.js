import React, { Component } from 'react'
import {Button, Footer as FooterComponent} from '../../../components'
import {Media} from 'reactstrap'
import withSizes from '../../../utils/Sizes'

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
    //height: 900,
    /*md: {
      height: 450,
    },
    sm: {
      height: 450,
    },
    xs: {
      height: 800,
    }*/
  },
  widthRestrict: {
    minWidth: 275,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems:  'center',
    justifyContent: 'space-between',
    padding: 50,
    md: {
      paddingTop: 25,
    }
  },
  footerComp: {
    container: {
      display: 'flex',
      backgroundColor: '#562A31',
    },
    content: {
      flex: 1,
      display: 'flex',
      width: 'auto',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    },
    defaultColumn: {
      whiteSpace: 'nowrap',
      margin: 10,
      marginBottom: 30,
      marginLeft: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    defaultHeader: {
      color: '#E86956',
      fontSize: 24,
      paddingBottom: 10,
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
    ],
    xs: {
      defaultColumn: {
        marginBottom: 10,
      }
    }
  },
  iconWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    xs: {
      paddingTop: 20,
      paddingBottom: 35,
    },
    md: {
      paddingTop: 30,
      paddingBottom: 55,
    }
  },
  divider: {
    height: 1,
    backgroundColor: '#EDE8E4',
    width: '100%',
    xs: {
      marginBottom: 35,
    },
    md: {
      marginBottom: 55,
    },
  },
  socials: {
    width: 32,
    height: 32,
  },
  button: {
    height: 35,
    width: 35,
    position: 'relative',
    borderWidth: 2,
    borderColor: '#EDE8E4',
    borderStyle: 'solid',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    filter: 'none',
    alignItems: 'center',
    hovered: {
      backgroundColor: 'rgba(0,0,0,0)',
      borderColor: '#EDE8E4',
      filter: 'invert(57%) sepia(14%) saturate(4670%) hue-rotate(325deg) brightness(95%) contrast(91%)',
    },
  },
  buttonImg: {
    height: 15,
    width: 15,
  },
  copyright: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    color: '#EDE8E4',
    fontSize: 18,
    fontWeight: 600,
    fontFamily: 'acumin-pro-condensed, sans-serif',
    letterSpacing: 1.25,
  },
}

class FooterMobile extends Component {
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
    const { getStyle } = this.props
    return (
      <div style={getStyle(styles.container)}>
        <div style={getStyle(styles.widthRestrict)}>
          <FooterComponent columns={columns} styles={getStyle(styles.footerComp)}/>
          <div style={getStyle(styles.iconWrapper)}>
              {socials.map((s, index) => {
                return(
                  <React.Fragment>
                    <a href={s.url}><Media onMouseEnter={() => hoverImg(index)} onMouseLeave={() => leaveHoverImg(index)} object src={s.icon} alt={s.name} style={{
                      ...getStyle(styles.socials),
                      filter: hovered && activeIndex === index ? 'invert(57%) sepia(14%) saturate(4670%) hue-rotate(325deg) brightness(95%) contrast(91%)' : 'none',
                    }}/></a>
                  </React.Fragment>
                )
              })}
              <Button onClick={handleScroll} styles={getStyle(styles.button)}>
                <Media style={getStyle(styles.buttonImg)} object src={require('../assets/ScrollButton.png')} alt={'scroll'}/>
              </Button>
          </div>
          <div style={getStyle(styles.divider)}>

          </div>
          <div style={getStyle(styles.copyright)}>
              Copyright 2020 American Technology Components, Inc.
          </div>
        </div>
      </div>
    )
  }
}

export default withSizes(FooterMobile)
