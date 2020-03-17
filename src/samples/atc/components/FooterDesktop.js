import React, { Component } from 'react'
import { Media } from 'reactstrap'
import {Button, Footer as FooterComponent} from '../../../components'

const socials = [
  {
    name: 'facebook',
    icon: 'http://picsum.photos/100/100',
    url: 'https://www.facebook.com'
  },
  {
    name: 'twitter',
    icon: 'http://picsum.photos/100/100',
    url: 'https://www.twitter.com'
  },
  {
    name: 'instagram',
    icon: 'http://picsum.photos/100/100',
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
    height: 600,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems:  'center',
    padding: 30,
    paddingTop: 100,
  },
  topWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 1200,
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderBottomColor: '#EDE8E4',
    flex: 1.6,
  },
  footerComp: {
    container: {
      flex: 3,
      backgroundColor: '#562A31',
    },
    defaultColumn: {
      margin: 0,
      padding: 0,
    },
    defaultHeader: {
      color: '#E86956',
      fontSize: 42,
    },
    defaultText: {
      fontSize: 20,
      color: '#EDE8E4',
      marginBottom: 10,
    },
    defaultLink: {
      fontSize: 20,
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
    height: 100,
    width: 100,
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    borderWidth: 0,
    backgroundColor: '#562A31',
    hovered: {
      backgroundColor: 'rgba(255,255,255,0)',
      borderWidth: 0,
      color: 'white',
    },
  },
  buttonImg: {
    width: 85,
    height: 85,
  },
  bottomWrapper: {
    width: '100%',
    maxWidth: 1200,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  copyright: {
    color: '#EDE8E4',
    fontSize: 25,
  },
  socialWrapper: {
    width: 200,
    height: 50,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  socials: {
    height: 50,
    width: 50,
  },
}

class FooterDesktop extends Component {
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
        <div style={styles.topWrapper}>
          <FooterComponent columns={columns} styles={styles.footerComp}/>
          <div style={styles.buttonWrapper}>
            <Button onClick={handleScroll} styles={styles.button}>
              <Media object src={require('../assets/Scroll_Button.png')} alt={'scroll'}/>
            </Button>
          </div>
        </div>
        <div style={styles.bottomWrapper}>
          <div style={styles.copyright}>
            Copyright 2020 American Technology Components, Inc.
          </div>
          <div style={styles.socialWrapper}>
            {socials.map(s => {
              return(
                <React.Fragment>
                  <a href={s.url}><Media object src={s.icon} alt={s.name} style={styles.socials} /></a>
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default FooterDesktop
