import React, { Component } from 'react'
import { Button as BasicButton } from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'
import deepmerge from 'deepmerge'
import { NavLink } from './index'

class Button extends Component {
  constructor(props) {
    super(props)

    this.handleHover = this.handleHover.bind(this)
    this.state = {
      hovered: false,
    }
  }

 async handleHover() {
    const { handleHover, leaveHover } = this.props
    const { hovered } = this.state
    this.setState({
      hovered: !this.state.hovered,
    })

    if(handleHover && !hovered) {
      await handleHover()
    }
    if(leaveHover && hovered) {
      await leaveHover()
    }
  }

  render() {
    const { styles, onClick, history, useRouter, item } = this.props
    const { hovered } = this.state

    const activeStyles = hovered ? deepmerge(styles, styles.hovered) : styles

    return (
      <BasicButton onClick={onClick} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} style={activeStyles}>
        {item ? (<NavLink useRouter={useRouter} history={history} item={item} style={styles}>
            {this.props.children}
          </NavLink>)
          :
          this.props.children
        }
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
