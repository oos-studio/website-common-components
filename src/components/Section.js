import React, { Component } from 'react'
import mergeStyles from '../utils/StyleMerge'
import deepmerge from 'deepmerge'

class Section extends Component {
  render() {
    const { children, styles, isMobile } = this.props

    const activeStyles = isMobile ? deepmerge(styles, styles.mobile) : styles
    console.log(activeStyles)
    return (
      <div style={activeStyles.container}>
        {children}
      </div>
    )
  }
}

const defaultStyles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobile: {

  },
}

Section.defaultProps = {
  children: null,
  isMobile: false,
}

export default mergeStyles(defaultStyles)(Section)
