import React, { Component } from 'react'
import { Collapse, DropdownMenu, Media, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, UncontrolledDropdown, DropdownToggle } from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'
import deepmerge from 'deepmerge'
import gsap, { TweenLite, Power2, TimelineLite } from 'gsap'
import './commonCSS.css'
import withSizes from '../utils/Sizes'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import NavLink from './NavLink'

class NavBarAnimated extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      activeNavIndex: null,
      navItemStyles: [],
      scrollY: window.pageYOffset,
      showScrolledNav: false,
      defaultNavImage: null,
      scrollNavImage: null,
      activeNavImage: null,
      brandImageStyles: null,
      isAnimating: false,
    }

    this.toggle = this.toggle.bind(this)
    this.renderNavigationItems = this.renderNavigationItems.bind(this)
    this.showDropdownMenu = this.showDropdownMenu.bind(this)
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this)
    this.hoverNavItem = this.hoverNavItem.bind(this)
    this.leaveHoverNavItem = this.leaveHoverNavItem.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.runAnimations = this.runAnimations.bind(this)

    this._navRefs = []
  }

  componentWillMount() {
    const { items, styles } = this.props
    const navItemStyles = []
    items.forEach(i => {
      navItemStyles.push({
        borderBottomWidth: 0,
        borderBottomStyle: '',
      })
    })

    this.setState({
      navItemStyles: navItemStyles,
      brandImageStyles: styles.brandImage.large
    })
  }

  componentDidMount() {
    const { handleScroll, runAnimations } = this
    const { brand } = this.props

    window.addEventListener('scroll', handleScroll)

    this.setState({
      defaultNavImage: brand.image.src,
      scrollNavImage: brand.image.scrolled.src,
      activeNavImage: brand.image.src,
    })

    handleScroll()

  }

  componentWillUnmount() {
    const { handleScroll } = this

    window.removeEventListener('scroll', handleScroll)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { showScrolledNav } = this.state
    const { runAnimations } = this

    if(prevState.showScrolledNav !== showScrolledNav) {
      runAnimations()
    }
  }

  runAnimations() {
    const { scrollNavImage, defaultNavImage, showScrolledNav } = this.state
    const { styles } = this.props
    const duration = 0.25


    if(showScrolledNav) {
      TweenLite.to('#navbar', duration, { height: styles.scrolled.navbar.height, backgroundColor: styles.scrolled.navbar.backgroundColor, ease: Power2.easeOut }).then(() => {
        TweenLite.to('#navBrand', duration, {
          transform: 'translateX(-510px)',
          width: styles.brandImage.small.width,
          ease: Power2.easeOut
        })
        // TweenLite.to('#item5', duration, {flex: 12, ease: Power2.easeOut})
        TweenLite.to('#collapse', duration, {...styles.scrolled.collapse}).then(() => {
          this.setState({
            activeNavImage: scrollNavImage,
            brandImageStyles: styles.brandImage.small
          })
          TweenLite.to('#navBrand', 0, {opacity: 0})
          TweenLite.to('#navBrand', 0, {transform: 'translateX(0px)'})
          TweenLite.to('#navBrand', duration, {opacity: 1, ease: Power2.easeOut})
        })
        TweenLite.to('#nav', 0, {...styles.scrolled.nav})
        TweenLite.to('#navbar', duration, {...styles.scrolled.navbar, ease: Power2.easeOut})
        TweenLite.to('#navSpacer', duration, {width: '60%', ease: Power2.easeOut})
        TweenLite.to('#divider', duration, {opacity: 1,})
      })
    } else {
      const tl = gsap.timeline({ smoothChildTiming: true, defaults: {duration: duration, ease: Power2.easeOut}})

      TweenLite.to('#divider', 0, {opacity: 0,})
      TweenLite.to('#nav', 0, {...styles.nav})
      TweenLite.to('#navbar', duration, { height: styles.navbar.height, ease: Power2.easeOut })
      TweenLite.to('#navBrand', duration,{opacity: 0}).then(() => {
        this.setState({
          activeNavImage: defaultNavImage,
          brandImageStyles: styles.brandImage.large
        })

        tl.to('#collapse',{...styles.collapse}, 0)
        tl.to('#navBrand', {transform: 'translateX(0px)', opacity: 1, }, duration / 3)
        tl.to('#navBrand', {width: styles.brandImage.large.width,}, 0)
        TweenLite.to('#navbar', duration, {...styles.navbar, backdropFilter: 'none', ease: Power2.easeOut})
      })
    }
  }

  handleScroll = () => {
    const { changeOnScroll } = this.props
    const { showScrolledNav } = this.state

    let showScrolled = false

    if(window.pageYOffset >= 300 && changeOnScroll) {
      showScrolled = true
    }

    if(showScrolledNav !== showScrolled) {
      this.setState({
        showScrolledNav: showScrolled,
      })
    }
  }

  toggle() {
    const { open } = this.state
    this.setState({ open: !open })
  }

  async showDropdownMenu(item, index) {
    const { activeNavIndex } = this.state
    const { _navRefs } = this

    await this.hideDropdownMenu(null, activeNavIndex)
    _navRefs[index].toggle()

    this.setState({
      activeNavIndex: index,
    })
  }

  hideDropdownMenu(item, index){
    const { activeNavIndex } = this.state
    const { _navRefs } = this

    if(activeNavIndex !== null && _navRefs[index] !== undefined) {
      _navRefs[index].toggle()
    }

    this.setState({
      activeNavIndex: null,
    })
  }

  hoverNavItem(item, index) {
    const { showDropdownMenu } = this
    const { navItemStyles } = this.state

    let tmpStyles = navItemStyles
    if(tmpStyles[index]) {
      tmpStyles[index].borderBottomStyle = 'solid'
      tmpStyles[index].borderBottomWidth = 2

      this.setState({
        navItemStyles: tmpStyles,
      })
    }
    if (item.type === 'dropdown' && !item.image)
    {
      showDropdownMenu(item, index)
    } else {
      this.setState({
        activeNavIndex: index,
      })
    }
  }

  leaveHoverNavItem(item, index) {
    const { hideDropdownMenu } = this
    const { navItemStyles } = this.state

    let tmpStyles = navItemStyles

    if(tmpStyles[index]) {
      tmpStyles[index].borderBottomStyle = '0'
      tmpStyles[index].borderBottomWidth = 0

      this.setState({
        navItemStyles: tmpStyles,
      })
    }

    if (item.type === 'dropdown' && !item.image)
    {
      hideDropdownMenu(item, index)
    } else {
      this.setState({
        activeNavIndex: null,
      })
    }
  }

  renderNavigationItems(item, index, renderImages) {
    const { styles, icon, scrolledDropdownIcon, xl, useRouter, onClickItem, history } = this.props
    const { hoverNavItem, leaveHoverNavItem, _navRefs, clickDropdown, clickLink, hideDropdownMenu } = this
    const { activeNavIndex, showScrolledNav } = this.state

    const _styles = showScrolledNav ? deepmerge(styles, styles.scrolled) : styles

    let navItem = null
    let id = `item${index}`

    if(item.image && !renderImages) {
      return
    }
    if(!item.image && renderImages) {
      return
    }

    switch(item.type) {
      case 'link':
        navItem = (
          <NavItem
            id={id}
            key={index}
            style={_styles.navItem}
            onMouseEnter={() => hoverNavItem(item, index)}
            onMouseLeave={() => leaveHoverNavItem(item, index)}>
            <NavLink
              href={item.url}
              item={item}
              onClickItem={onClickItem}
              useRouter={useRouter}
              history={history}
              style={{
                ..._styles.navLink,
                color: showScrolledNav ? _styles.navLink.color : (activeNavIndex === index ? _styles.navLink.hover.color : _styles.navLink.color),
                borderBottomColor: activeNavIndex === index && !item.image ? _styles.navLink.hover.borderBottomColor : _styles.navLink.borderBottomColor,
              }}>
              {item.image ?
                <Media object src={item.image} style={activeNavIndex === index ? deepmerge(item.imageStyles, item.imageStyles.hover) : item.imageStyles}/>
                : item.text}
            </NavLink>
          </NavItem>)
        break
      case 'dropdown':
        navItem = (

          <NavLink              dropdown
                                history={history}
                                item={item}
                                onMouseLeave={() => leaveHoverNavItem(item, index)}
                                ref={_r => {_navRefs[index] = _r}}
                                useRouter={useRouter}
                                hideDropDown={() => hideDropdownMenu(item, index)}
                                onClickItem={onClickItem}>
            <DropdownToggle style={_styles.toggle} nav onMouseEnter={() => hoverNavItem(item, index)}>
              <div style={{
                ..._styles.dropdownItem,
                color: showScrolledNav ? _styles.dropdownItem.color : (activeNavIndex === index ? _styles.dropdownItem.hover.color : _styles.dropdownItem.color),
                borderBottomColor: activeNavIndex === index && !item.image ? _styles.dropdownItem.hover.borderBottomColor : _styles.dropdownItem.borderBottomColor,
              }}>
                {item.image ?
                  <Media object src={item.image} style={activeNavIndex === index ? deepmerge(item.imageStyles, item.imageStyles.hover) : item.imageStyles}/>
                  : item.text}
              </div>
              {!item.image &&
              <Media object
                     style={activeNavIndex === index ? deepmerge(_styles.dropdownIcon, _styles.dropdownIcon.hover) : _styles.dropdownIcon}
                     src={showScrolledNav ? scrolledDropdownIcon : icon} />}
            </DropdownToggle>
            <DropdownMenu id='ddMenu' onMouseLeave={() => leaveHoverNavItem(item, index)}
                          style={{borderWidth: 0, backgroundColor: 'rgba(0,0,0,0)'}}>
              {typeof(item.render) === 'function' ? item.render() : item.render}
            </DropdownMenu>
          </NavLink>)
        break
      default:
        break
    }
    return navItem
  }

  render() {
    const { open, showScrolledNav, activeNavImage, brandImageStyles } = this.state
    const { items, brand, styles, fixed } = this.props
    const { toggle, renderNavigationItems } = this

    return(
      <div style={{
        position: fixed ? 'fixed' : 'absolute',
        ...styles.container,
      }}>
        <Navbar
          id='navbar'
          expand="md"
          color={styles.navbar.backgroundColor}
          style={styles.navbar}>
          <NavbarBrand href="#" style={styles.brand}>
            <div id={'navBrand'}>
              <img
                src={activeNavImage}
                alt={showScrolledNav ? brand.image.scrolled.title : brand.image.title}
                style={brandImageStyles} />
            </div>
          </NavbarBrand>
          <div id='divider' style={{
            display: showScrolledNav ? 'flex' : 'none',
            ...styles.divider,
          }}>
          </div>
          <NavbarToggler onClick={toggle} style={styles.toggler} />
          <Collapse
            id='collapse'
            navbar
            isOpen={open}
            style={styles.collapse}>
            <Nav id='nav' navbar style={styles.nav}>
              {items.map((item, index) => renderNavigationItems(item, index, false))}
            </Nav>
            <div id='imageItems' style={styles.imageItems}>
              {items.map((item, index) => renderNavigationItems(item, index, true))}
            </div>
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
  mmBackground: {},
  navbar: {},
  brand: {},
  brandImage: {
    small: {
      width: 'auto',
    },
    large: {
      width: 'auto',
    },
  },
  brandTitle: {},
  toggler: {},
  nav: {},
  navItem: {},
  navLink: {
    cursor: 'pointer',
  },
  dropdownMenuContainer: {},
  dropdownContainer: {},
  asideWrapper: {
    width: '20%',
    textAlign: 'center',
    position: 'absolute',
    zIndex: 9999,
    height: '60vh',
    top: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  asideImage: {
    float: 'left',
    display: 'inline',
  },
  asideHeader: {
    fontSize: 25,
    display: 'flex',
  },
  asideBody: {
    fontSize: 18,
    color: 'tan',
    padding: 10,
  },
  scrolled: {

  },
}

NavBarAnimated.defaultProps = {
  items: [],
  brand: {},
  style: {
    navigation: {},
    navigationDropdown: {}
  },
  fixed: false,
  changeOnScroll: false,
  useRouter: false,
}

export default mergeStyles(defaultStyles)(withSizes(NavBarAnimated))
