import React, { Component } from 'react'
import { ImageCaptionBlock as ImageCaptionBlockComponent } from '../../../components'
import withSizes from '../../../utils/Sizes'

const styles = {
  // container: {
  //   overflowY: 'hidden',
  //   width: '100%',
  // },
  // overlay: {
  //   backgroundColor: 'rgba(101,163,176,0.75)'
  // },
  // bottom: {
  //   backgroundColor: '#65A3BE',
  //   color: '#F8F5EE',
  // },
}


const props = {
  text: 'One sentence about the importance of small groups at Providence.',
  image: {
    image: require('../assets/SmallGroupsBackground.png'),
    title: 'Picture'
  },
  logo: {
    image: require('../assets/FollowingChrist.png'),
    title: 'Picture'
  }
}

class ImageCaptionBlock extends Component {
  render() {
    const { getStyle } = this.props
    return <ImageCaptionBlockComponent styles={getStyle(styles)} {...props}/>
  }
}

export default withSizes(ImageCaptionBlock)
