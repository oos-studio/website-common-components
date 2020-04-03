import React, { Component } from 'react'
import { ImageCaptionBlock as ImageCaptionBlockComponent } from '../../../components'
import withSizes from '../../../utils/Sizes'

const styles = {
  container: {
    height: 650,
  },
  text: {
    color: '#F8F5EE',
    fontSize: 40,
    marginRight: 0,
    marginLeft: 650,
  },
  overlay: {
    backgroundColor: 'rgba(101,163,176,0.75)'
  },
  bottom: {
    backgroundColor: '#65A3BE',
    padding: 25,
    height: 300,
    alignItems: 'flex-start',
  },
  logoWrapper: {
    height: 400,
    width: 400,
    bottom: 175,
    float: 'left',
    marginLeft: 150,
  },
  logo: {
    width: 400,
    height: 400,
  },
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
