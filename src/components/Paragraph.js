import React, { Component } from 'react'
import mergeStyles from '../utils/StyleMerge'
import withSizes from '../utils/Sizes'

class Paragraph extends Component {
  componentDidMount() {
    const { dropCap } = this.props
    const elements = document.getElementsByTagName('p')

    if (dropCap && elements[0]) {
      elements[0].classList.add('dropCap')
    }
  }
  render() {
    const { content, styles } = this.props
    return (
      <div
        id="paragraph"
        dangerouslySetInnerHTML={{ __html: content.text }}
        style={styles.container}
      />
    )
  }
}

const defaultStyles = {
  container: {
    marginTop: 25,
    lineHeight: 2,
  },
}

export default mergeStyles(defaultStyles)(withSizes(Paragraph))
