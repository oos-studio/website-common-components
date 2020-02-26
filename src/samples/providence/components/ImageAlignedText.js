import React, { Component } from 'react'
import { ImageAlignedText as ImageAlignedTextComponent } from '../../../components'
import { styles } from "../styles"


class ImageAlignedText extends Component {
  render() {
    return <ImageAlignedTextComponent styles={{button: styles.button}} {...this.props}/>
  }
}

export default ImageAlignedText
