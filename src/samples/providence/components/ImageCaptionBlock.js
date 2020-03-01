import React, { Component } from 'react'
import { ImageCaptionBlock as ImageCaptionBlockComponent } from '../../../components'

const styles = {
  text: {
    color: 'white',
    fontSize: 50,
  }
}


const props = {
  text: 'One sentence about small groups',
  image: {
    image: 'https://picsum.photos/1920/1080',
    title: 'Picture'
  },
  logo: {
    image: 'https://picsum.photos/500/500',
    title: 'Picture'
  }
}

class ImageCaptionBlock extends Component {
  render() {
    return <ImageCaptionBlockComponent styles={styles} {...props}/>
  }
}

export default ImageCaptionBlock
