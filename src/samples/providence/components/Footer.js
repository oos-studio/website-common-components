import React, { Component } from 'react'
import { Footer as FooterComponent } from '../../../components'
import { FooterInfo, FooterContactForm } from './index'

const socials = [
  {
    name: 'facebook',
    icon: require('../assets/Facebook.png'),
    url: 'https://www.facebook.com'
  },
  {
    name: 'instagram',
    icon: require('../assets/Instagram.png'),
    url: 'https://www.instagram.com'

  },
  {
    name: 'vimeo',
    icon: require('../assets/Vimeo.png'),
    url: 'https://www.vimeo.com'

  },
]

const columns = [
  {
    heading: '',
    render: () => {
      return (
      <FooterInfo socials={socials}/>
      )
    }
  },
  {
    heading: 'CONNECT WITH US',
    render: () => {
      return (
      <FooterContactForm />
      )
    }
  },
]

const styles = {
  container: {
    width: '100%',
    maxWidth: 1200,
    backgroundColor: '#6A5B5D',
    padding: 0,
  },
  limitWidth: {
    backgroundColor: '#6A5B5D',
    width: '100%',
    padding: 75,
    paddingLeft: 20,
    paddingRight: 20,
  },
  columns: [
    {
      column: {
      }
    },
    {
      column: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      },
      header: {
        fontSize: 25,
        color: '#FDECBB',
        paddingLeft: 125,
        whiteSpace: 'nowrap',
      }
    },
  ]
}

class Footer extends Component {
  render() {
    return (
      <div style={styles.limitWidth}>
        <FooterComponent columns={columns} styles={styles}/>
      </div>
    )
  }
}

export default Footer
