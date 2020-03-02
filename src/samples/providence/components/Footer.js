import React, { Component } from 'react'
import { Footer as FooterComponent } from '../../../components'
import { FooterInfo, FooterContactForm } from './index'

const socials = [
  {
    name: 'facebook',
    icon: 'http://picsum.photos/100/100',
    url: 'https://www.facebook.com'
  },
  {
    name: 'instagram',
    icon: 'http://picsum.photos/100/100',
    url: 'https://www.instagram.com'

  },
  {
    name: 'vimeo',
    icon: 'http://picsum.photos/100/100',
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
    heading: 'Contact Us',
    render: () => {
      return (
      <FooterContactForm />
      )
    }
  },
]

const styles = {
  container: {
    width: '100vw',
    height: 600,
    backgroundColor: '#6A5B5D',
    paddingTop: 50,
    paddingRight: 50,
  },
  columns: [
    {
      column: {
        flex: 2,
      }
    },
    {
      column: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      },
      header: {
        fontSize: 30,
        color: '#FDECBB',
        marginBottom: 125,
      }
    },
  ]
}

class Footer extends Component {
  render() {
    return (
      <FooterComponent columns={columns} styles={styles}/>
    )
  }
}

export default Footer
