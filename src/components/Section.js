import React, { Component } from 'react'
import mergeStyles from '../utils/StyleMerge'
import withSizes from '../utils/Sizes'

class Section extends Component {
  render() {
    const { children, styles, getStyle } = this.props

    return (
      <div style={getStyle(styles.container)}>
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
    xs: {

    },
    sm: {

    },
    md: {

    },
    lg: {

    },
    xl: {

    },
  },
}

Section.defaultProps = {
  children: null,
  isMobile: false,
}

export default mergeStyles(defaultStyles)(withSizes(Section))
