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
  bottomWrapper: {
    marginLeft: 75,
    marginRight: 75,
    sm: {
      marginLeft: 30,
      marginRight: 30,
    },
  }

}


const props = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
