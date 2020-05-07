import React, { Component } from 'react'
import './commonCSS.css'
class Paragraph extends Component {
  componentDidMount() {
    const { dropCap } = this.props
    if (dropCap) {
      document.getElementsByTagName('p')[0].classList.add('dropCap')
    }
  }
  render() {
    const { content } = this.props
    return (
      <div
        id="paragraph"
        dangerouslySetInnerHTML={{ __html: content.text }}
        style={styles.container}
      />
    )
  }
}

const styles = {
  container: {
    color: '#404144',
    marginTop: 25,
    lineHeight: 2,
  },
}

export default Paragraph
