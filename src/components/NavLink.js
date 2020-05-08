import React, { Component } from 'react'
import { NavLink as RSNavLink, UncontrolledDropdown } from 'reactstrap'

class NavLink extends Component {
  _navLink = React.createRef()
  clickLink = (e) => {
    const { useRouter, onClickItem, item, history, hideDropDown } = this.props

    e.stopPropagation()

    if(hideDropDown !== undefined) {
      hideDropDown()
    }

    if(useRouter && history) {
      e.preventDefault()
      const url = item.url[0] === '/' ? item.url : `/${item.url}`
      history.push(url)
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

    return dropdown ? (<UncontrolledDropdown style={style} ref={r => this._navLink = r} onMouseEnter={onMouseEnter} nav inNavbar onMouseLeave={onMouseLeave} onClick={clickLink}>{children}</UncontrolledDropdown>) : (<RSNavLink onClick={clickLink} href={item.url} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >{children}</RSNavLink>)
 }
}

NavLink.defaultProps = {
  onClickItem: null,
  useRouter: false,
  item: null,
}

export default NavLink
