import React, { Component } from 'react'
import { NavLink as RSNavLink, UncontrolledDropdown } from 'reactstrap'

class NavLink extends Component {
  _navLink = React.createRef()
  clickLink = (e) => {
    const {
      useRouter,
      onClickItem,
      item,
      history,
      hideDropDown,
      append,
      nativeNavigation,
    } = this.props

    e.stopPropagation()

    if (window.ReactNativeWebView && nativeNavigation && window.isNativeApp) {
      e.preventDefault()
      window.ReactNativeWebView.postMessage(item.url)
      return
    }

    if (hideDropDown !== undefined) {
      hideDropDown()
    }

    if (useRouter && history) {
      e.preventDefault()
      let url
      if (item.url) {
        url = item.url[0] === '/' || !append ? item.url : `/${item.url}`
        history.push(url)
      }
    }
    if (onClickItem) {
      onClickItem(e, item.url)
    }
  }
  toggle = () => {
    this._navLink.toggle()
  }
  render() {
    const {
      dropdown,
      onMouseEnter,
      onMouseLeave,
      style,
      item,
      children,
      useRouter,
      useNavLinkClass,
      useTouchEnd,
    } = this.props
    const { clickLink } = this

    return dropdown ? (
      <UncontrolledDropdown
        style={{ paddingLeft: 0, paddingRight: 0, ...style }}
        ref={(r) => (this._navLink = r)}
        onMouseEnter={onMouseEnter}
        nav
        inNavbar
        onMouseLeave={onMouseLeave}
        onTouchEnd={useTouchEnd ? clickLink : null}
        onClick={clickLink}>
        {children}
      </UncontrolledDropdown>
    ) : useRouter ? (
      <RSNavLink
        onClick={clickLink}
        onTouchEnd={useTouchEnd ? clickLink : null}
        href={item.url}
        style={{ paddingLeft: 0, paddingRight: 0, ...style }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
        {children}
      </RSNavLink>
    ) : (
      <a
        href={item.url}
        target={"_blank"}
        className={useNavLinkClass ? "nav-link" : ""}
        style={{ paddingLeft: 0, paddingRight: 0, ...style }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
        {children}
      </a>
    )
  }
}

NavLink.defaultProps = {
  onClickItem: null,
  useRouter: false,
  item: null,
  append: true,
  nativeNavigation: true,
  useNavLinkClass: false,
  useTouchEnd: true,
}

export default NavLink
