import React, { Component } from 'react'
import { FullScreenIntro as FullScreenIntroComponent } from '../../../components'

const props = {
  text: 'Welcome to the full screen intro page. This style is just a placeholder. Make it whatever you want!',
  image: {
    title: 'img',
    url: 'https://picsum.photos/1000/700'
  },
}

const styles = {
  container: {
    paddingTop: 221,
  }
}

class FullScreenIntro extends Component {
  render() {
    return <FullScreenIntroComponent styles={styles} {...props}/>
  }
}

export default FullScreenIntro
