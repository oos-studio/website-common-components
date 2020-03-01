import React, { Component } from 'react'
import { FullScreenIntro as FullScreenIntroComponent } from '../../../components'

const props = {
  heightOffset: 221,
  text: 'Welcome to the full screen intro page. This style is just a placeholder. Make it whatever you want!',
  image: {
    title: 'img',
    url: 'https://picsum.photos/1000/700'
  },
}

class FullScreenIntro extends Component {
  render() {
    return <FullScreenIntroComponent {...props}/>
  }
}

export default FullScreenIntro
