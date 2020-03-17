import React, { Component } from 'react'
import { Footer as FooterComponent } from '../../../components'

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
  wrapper: {
    backgroundColor: '#562A31',
    height: 600,
  },
  footerComp: {
    container: {
      maxWidth: 1200,
      backgroundColor: '#562A31',
      height: '100%',
      paddingTop: 75,
      paddingBottom: 75,
      paddingLeft: 100,
      paddingRight: 100,
    },
    content: {
      display: 'block',
    },
    defaultColumn: {
      margin: 10,
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
    ]
  },
  copyright: {

  },
  social: {

  },
}

class FooterMobile extends Component {

  render() {
    return (
      <div style={styles.wrapper}>
        <FooterComponent columns={columns} styles={styles.footerComp}/>
      </div>
    )
  }
}

export default FooterMobile
