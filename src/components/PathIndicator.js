import React, { Component } from 'react'
import mergeStyles from '../utils/StyleMerge'

class PathIndicator extends Component {
  render() {
    const { styles } = this.props

    let path = window.location.pathname
    path = path.substr(1, path.length - 1)
    path = path.split('/')

    let currentHref = ''
    let pathElements = path.map((p, index) => {
      currentHref += `/${p}`
      return (
        <React.Fragment key={index}>
          <a style={styles.links} href={currentHref}>
            {p}
          </a>
          {index !== path.length - 1 && ' > '}
        </React.Fragment>
      )
    })
    return (
      <div style={styles.container}>
        <div style={styles.content}>{pathElements}</div>
      </div>
    )
  }
}

const defaultStyles = {
  container: {
    fontWeight: 300,
    letterSpacing: 2,
    textTransform: 'uppercase',
    width: '100%',
  },
  links: {},
}

export default mergeStyles(defaultStyles)(PathIndicator)
