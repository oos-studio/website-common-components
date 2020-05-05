import React, { Component } from 'react'
import { NavLink as RSNavLink, UncontrolledDropdown } from 'reactstrap'

class NavLink extends Component {
  _navLink = React.createRef()
  clickLink = (e) => {
    const { useRouter, onClickItem, item, history, hideDropDown } = this.props

    if(hideDropDown !== undefined) {
      hideDropDown()
    }

    if(useRouter && history) {
      e.preventDefault()
      console.log(item.url)
      history.push(item.url)
    }
    if(onClickItem) {
      onClickItem(e, item.url)
    }
  }
  toggle = () => {
    this._navLink.toggle()
  }
 render() {
    const { dropdown, onMouseEnter, onMouseLeave, style, item, children } = this.props
    const { clickLink } = this

    return dropdown ? (<UncontrolledDropdown style={style} ref={r => this._navLink = r} onMouseEnter={onMouseEnter} nav inNavbar onMouseLeave={onMouseLeave} onClick={clickLink}>{children}</UncontrolledDropdown>) : (<RSNavLink onClick={clickLink} href={item.url} style={style}>{children}</RSNavLink>)
 }
}

NavLink.defaultProps = {
  onClickItem: null,
  useRouter: false,
  item: null,
}

export default NavLink
