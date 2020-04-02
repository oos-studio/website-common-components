import React, { Component } from 'react'
import { Footer as FooterComponent } from '../../../components'
import { FooterInfo, FooterContactForm } from './index'
import withSizes from '../../../utils/Sizes'

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
    heading: '',
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
  },
  limitWidth: {
    backgroundColor: '#6A5B5D',
    width: '100%',
    paddingTop: 75,
    paddingBottom: 75,
    paddingLeft: 20,
    paddingRight: 20,
    md: {
      paddingTop: 0,
      paddingBottom: 0
    },
  },
  content: {
    display: 'flex',
  },
  columns: [
    {
      column: {
       flex: 2,
      }
    },
    {
      column: {
        flex: 1.4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      },
    },
  ],
  md: {
    content: {
      flexDirection: 'column-reverse',
    },
  },
}

class Footer extends Component {
  render() {
    const { getStyle } = this.props
    return (
      <div style={getStyle(styles.limitWidth)}>
        <FooterComponent columns={columns} styles={getStyle(styles)}/>
      </div>
    )
  }
}

export default withSizes(Footer)
