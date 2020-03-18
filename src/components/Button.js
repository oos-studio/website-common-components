import React, { Component } from 'react'
import { Button as BasicButton } from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'
import deepmerge from 'deepmerge'

class Button extends Component {
  constructor(props) {
    super(props)

    this.handleHover = this.handleHover.bind(this)
    this.state = {
      hovered: false,
    }
  }

  handleHover() {
    this.setState({
      hovered: !this.state.hovered,
    })
  }

  render() {
    const { styles, onClick } = this.props
    const { hovered } = this.state
    const { handleHover } = this.handleHover

    const activeStyles = hovered ? deepmerge(styles, styles.hovered) : styles

    return (
      <BasicButton onClick={onClick} onMouseEnter={handleHover} onMouseLeave={handleHover} style={activeStyles}>
        {this.props.children}
      </BasicButton>
    )
  }
}

const defaultStyles = {
  borderColor: 'white',
  borderWidth: 2,
  backgroundColor: 'transparent',
  fontSize: 20,
  hovered: {
    backgroundColor: 'white',
    color: 'tan',
    borderWidth: 2,
    borderColor: 'tan',
  },
  mobile: {
    hovered: {

    },
  },
}

Button.defaultProps = {

}

export default mergeStyles(defaultStyles)(Button)
