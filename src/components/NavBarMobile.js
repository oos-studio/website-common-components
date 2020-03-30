import React, { Component } from 'react'
import { Collapse, Media, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink,UncontrolledDropdown, DropdownToggle, Container } from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'
import deepmerge from 'deepmerge'
import withSizes from '../utils/Sizes'
import '../App.css'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

class NavBarMobile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      activeDropdownIndex: null,
      touchscreen: false,
      scrollPosition: 0,
    }
  }

  componentDidMount() {
    document.body.style.overflow = 'scroll'

    window.addEventListener('touchend', () => {
      this.setState({
        touchscreen: true,
      })
    })
  }

  toggle = () => {
    const { open, touchscreen, scrollPosition } = this.state
    const { closeDropdownMenu } = this
    const body = document.querySelector('body')

    if(!open) {
      if(touchscreen) {
        this.setState({
          scrollPosition: window.pageYOffset
        })
        body.style.overflow = 'hidden'
        body.style.position = 'fixed'
        body.style.top = `-${scrollPosition}px`
        body.style.width = '100%'
      } else {
        disableBodyScroll(document.querySelector('#homeContainer'))
      }

    } else {
      closeDropdownMenu()
      if(touchscreen) {
        body.style.removeProperty('overflow');
        body.style.removeProperty('position');
        body.style.removeProperty('top');
        body.style.removeProperty('width');
        window.scrollTo(0, scrollPosition);
      } else {
        enableBodyScroll(document.querySelector('#homeContainer'))
      }
    }

    this.setState({
      open: !open
    })
  }

  toggleDropdownMenu = (index) => {
    const { activeDropdownIndex } = this.state
    const { closeDropdownMenu } = this

    if(index === activeDropdownIndex){
      closeDropdownMenu()
      return
    }

    this.setState({
      activeDropdownIndex: index,
    })
  }

  closeDropdownMenu = () => {
    this.setState({
      activeDropdownIndex: null,
    })
  }

  renderNavigationItems = (item, index) => {
    const { activeDropdownIndex } = this.state
    const { styles, icon, items } = this.props
    const { toggleDropdownMenu } = this
    let navItem = null

    switch(item.type) {
      case 'link':
        navItem = (
            <NavItem key={index} style={styles.navItem}>
              <NavLink href={item.url} style={{
                ...styles.navLink,
                borderBottomWidth: index === (items.length - 1) ? 0 : styles.dropdownItem.borderBottomWidth,
              }}>
                {item.text}
              </NavLink>
            </NavItem>
        )
          break
      case 'dropdown':
        navItem = (
          <UncontrolledDropdown style={styles.ucDropdown} nav inNavbar>
              <DropdownToggle style={styles.dropdownItem} onClick={() => toggleDropdownMenu(index)}>
                {item.text}
                <Media object src={icon} style={activeDropdownIndex === index ? deepmerge(styles.dropdownIcon, styles.dropdownIcon.click) : styles.dropdownIcon}/>
              </DropdownToggle>
              {activeDropdownIndex === index && item.render()}
            </UncontrolledDropdown>

      )
        break
      default:
        navItem = item.render()
        break
    }
    return navItem
  }

  render() {
    const { open } = this.state
    const { styles, brand, items, fixed, getStyle, openToggleIcon, closeToggleIcon } = this.props
    const { toggle, renderNavigationItems } = this

    return(
      <div id='container' style={{
        position: fixed ? 'sticky' : 'absolute',
        ...styles.container,
      }}>
        <Navbar id='navbar' style={styles.navbar}>
          <NavbarBrand style={styles.brand} href="/" className="mr-auto">
            <Media object src={brand.image.src} alt={brand.image.title} style={getStyle(styles.brandImage)}/>
            <NavbarText style={styles.brandTitle}>
              {brand.title ? brand.title : ''}
            </NavbarText>
          </NavbarBrand>
          <Media object style={getStyle(styles.toggler)} onClick={toggle} src={open ? closeToggleIcon : openToggleIcon}/>
          <Collapse id='collapse' isOpen={open} navbar style={{
            ...styles.collapse,
          }}>
            <Nav id='nav' navbar style={styles.nav}>
              {items.map((item, index) => renderNavigationItems(item, index))}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

const defaultStyles = {
  container: {
    zIndex: 99999,
    left: 0,
    right: 0,
    top: 0,
  },
  navbar: {

  },
  brand: {

  },
  brandImage: {

  },
  brandTitle: {

  },
  toggler: {

  },
  collapse: {

  },
  nav: {

  },
  navItem: {

  },
  navLink: {

  },
  dropdownItem: {

  },
  ucDropdown: {

  },
  dropdownIcon: {

  },
}

NavBarMobile.defaultProps = {

}

export default mergeStyles(defaultStyles)(withSizes(NavBarMobile))
