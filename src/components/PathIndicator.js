import React, { Component } from 'react'
import mergeStyles from '../utils/StyleMerge'
import {NavLink} from './index'

class PathIndicator extends Component {
  render() {
    const { styles, useRouter, history } = this.props

    let path = window.location.pathname
    path = path.substr(1, path.length - 1)
    path = path.split('/')

    let currentHref = ''
    let pathElements = path.map((p, index) => {
      currentHref += `/${p}`
      return (
        <React.Fragment key={index}>
          <NavLink style={styles.links} item={{url: currentHref}} history={history} useRouter={useRouter}>
            {p}
          </NavLink>
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
  links: {
    display: 'inline',
    padding: 0,
  },
}

export default mergeStyles(defaultStyles)(PathIndicator)
