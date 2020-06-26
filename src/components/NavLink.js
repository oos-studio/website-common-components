import React, { Component } from 'react'
import { NavLink as RSNavLink, UncontrolledDropdown } from 'reactstrap'

class NavLink extends Component {
  _navLink = React.createRef()
  clickLink = (e) => {
    const { useRouter, onClickItem, item, history, hideDropDown, append } = this.props

    e.stopPropagation()

    if(hideDropDown !== undefined) {
      hideDropDown()
    }

    if(useRouter && history) {
      e.preventDefault()
      let url
      if(item.url) {
        url = item.url[0] === '/' || !append ? item.url : `/${item.url}`
        history.push(url)
      }
    }
    if(onClickItem) {
      onClickItem(e, item.url)
    }
  }
  toggle = () => {
    this._navLink.toggle()
  }
 render() {
    const { dropdown, onMouseEnter, onMouseLeave, style, item, children, useRouter } = this.props
    const { clickLink } = this

   return dropdown ? (<UncontrolledDropdown style={style} ref={r => this._navLink = r} onMouseEnter={onMouseEnter} nav inNavbar onMouseLeave={onMouseLeave} onClick={clickLink}>{children}</UncontrolledDropdown>) : useRouter ? (<RSNavLink onClick={clickLink} href={item.url} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >{children}</RSNavLink>) : (<a href={item.url} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{children}</a>)
 }
}

NavLink.defaultProps = {
  onClickItem: null,
  useRouter: false,
  item: null,
  append: true,
}

export default NavLink
