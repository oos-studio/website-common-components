import React, { Component } from 'react'
import {Button, Footer as FooterComponent} from '../../../components'
import {Media} from 'reactstrap'

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
    type: 'text',
    text: [
      'Toll Free: 800.238.2687',
      'Office: 574.262.1258',
      'sales@atcomp.com',
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
    height: 900,
  },
  widthRestrict: {
    maxWidth: 800,
    minWidth: 275,
    height: 900,
    display: 'flex',
    flexDirection: 'column',
    alignItems:  'flex-start',
    padding: 55,
  },
  footerComp: {
    container: {
      backgroundColor: '#562A31',
    },
    content: {
      flex: 1,
      display: 'flex',
      width: 'auto',
      backgroundColor: 'blue',
      flexWrap: 'wrap',
    },
    defaultColumn: {
      margin: 0,
      marginBottom: 30,
      padding: 0,
    },
    defaultHeader: {
      color: '#E86956',
      fontSize: 35,
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
  iconWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderBottomColor: '#EDE8E4',
    marginTop: 35,
    padding: 0,
    paddingBottom: 50,
  },
  socials: {
    width: 35,
    height: 35,
  },
  button: {
    height: 35,
    width: 35,
    position: 'relative',
    borderWidth: 0,
    borderStyle: 'solid',
    borderRadius: '50%',
    hovered: {
      backgroundColor: 'rgba(255,255,255,0)',
      borderWidth: 0,
      color: 'white',
    },
  },
  buttonImg: {
    width: 35,
    height: 35,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  copyright: {
    color: '#EDE8E4',
    fontSize: 20,
    marginTop: 50,
  },
}

class FooterMobile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      intervalId: 0
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

  render() {
    const { handleScroll } = this
    return (
      <div style={styles.container}>
        <div style={styles.widthRestrict}>
          <FooterComponent columns={columns} styles={styles.footerComp}/>
          <div style={styles.iconWrapper}>
              {socials.map(s => {
                return(
                  <React.Fragment>
                    <a href={s.url}><Media object src={s.icon} alt={s.name} style={styles.socials} /></a>
                  </React.Fragment>
                )
              })}
              <Button onClick={handleScroll} styles={styles.button}>
                <Media style={styles.buttonImg} object src={require('../assets/ScrollButton.png')} alt={'scroll'}/>
              </Button>
          </div>
          <div style={styles.copyright}>
              Copyright 2020 American Technology Components, Inc.
          </div>
        </div>
      </div>
    )
  }
}

export default FooterMobile
