import React, { Component } from 'react'
import { Button as BasicButton } from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'

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
    const { styles } = this.props
    const activeStyles = this.state.hovered ? styles.hovered : styles

    return (
      <BasicButton onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} style={activeStyles}>
        {this.props.children}
      </BasicButton>
    )
  }
}

const defaultStyles = {
  borderColor: 'white',
  borderWidth: 2,
  backgroundColor: 'rgba(0,0,0,0)',
  hovered: {
   // backgroundColor: 'white',
    color: 'tan',
    borderWidth: 2,
    borderColor: 'tan',
  }
}

Button.defaultProps = {

}

export default mergeStyles(defaultStyles)(Button)
