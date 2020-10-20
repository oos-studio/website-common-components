import React, { Component } from 'react'
import { Collapse, DropdownMenu, Media, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem,UncontrolledDropdown, DropdownToggle } from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'
import NavLink from '../components/NavLink'
import deepmerge from 'deepmerge'
import gsap, { TweenLite, Power2, TimelineLite } from 'gsap'
import './commonCSS.css'
import withSizes from '../utils/Sizes'

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
      openImageItem: null,
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

    if(props.navBarRef) {
      props.navBarRef(this)
    }
  }

  componentDidMount() {
    const { handleScroll, runAnimations } = this
    const { brand, useGradient } = this.props
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

    window.addEventListener('scroll', handleScroll)

    this.setState({
      defaultNavImage: brand.image.src,
      scrollNavImage: brand.image.scrolled.src,
      activeNavImage: brand.image.src,
    })

    if(useGradient) {
      document.getElementById('gradientOverlay').style.display = 'flex'
    }

    handleScroll()
  }

  componentWillUnmount() {
    const { handleScroll } = this

    window.removeEventListener('scroll', handleScroll)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { showScrolledNav } = this.state
    const { runAnimations } = this
    const { useGradient } = this.props

    const gradientOverlay = document.getElementById('gradientOverlay')

    if(gradientOverlay) {
      gradientOverlay.style.display = useGradient ? 'flex' : 'none'
    }

    if(prevState.showScrolledNav !== showScrolledNav) {
      runAnimations()
    }

    if(this.state.activeNavImage === this.state.scrollNavImage && !showScrolledNav) {
      runAnimations()
    }
  }

  runAnimations() {
    const { scrollNavImage, defaultNavImage, showScrolledNav } = this.state
    const { styles, useGradient } = this.props
    const duration = 0.25


    if(showScrolledNav) {
      if(useGradient) {
        document.getElementById('gradientOverlay').style.display = 'none'
      }
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
        TweenLite.to('#divider', duration, {opacity: 1,})
      })
    } else {
      if(useGradient) {
        document.getElementById('gradientOverlay').style.display = 'flex'
      }
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
    const { changeOnScroll, scrollTrigger } = this.props

    const winScroll = document.body.scrollTop || document.documentElement.scrollTop

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

    const scrollY = winScroll / height

    let showScrolled = false

    if(winScroll >= scrollTrigger && changeOnScroll) {
      showScrolled = true
    }

    this.setState({
      scrollY: scrollY,
      showScrolledNav: showScrolled,
    })
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

  hideDropdownMenu(item, index, didClick = false){
    const { activeNavIndex } = this.state
    const { _navRefs } = this

    if(didClick) {
      _navRefs[activeNavIndex].toggle()
    } else if(activeNavIndex !== null && _navRefs[index] !== undefined) {
      _navRefs[index].toggle()
    }

    this.setState({
      activeNavIndex: null,
    })
  }

  hideImageItem = () => {
    const { openImageItem } = this.state

    this._navRefs[openImageItem].toggle()

    this.setState({
      openImageItem: null,
    })
  }

  hoverNavItem(item, index) {
    const { showDropdownMenu } = this
    const { navItemStyles } = this.state

    let tmpStyles = navItemStyles

    if(index < tmpStyles.length) {
      tmpStyles[index].borderBottomStyle = 'solid'
      tmpStyles[index].borderBottomWidth = 2
    }
    this.setState({
      navItemStyles: tmpStyles,
    })

    if (item.type === 'dropdown' && !item.image)
    {
      showDropdownMenu(item, index)
    } else {
      this.setState({
        activeNavIndex: index,
        openImageItem: item.image ? index : null,
      })
    }
  }

  leaveHoverNavItem(item, index) {
    const { hideDropdownMenu } = this
    const { navItemStyles } = this.state

    let tmpStyles = navItemStyles

    if(index < tmpStyles.length) {
      tmpStyles[index].borderBottomStyle = 'none'
      tmpStyles[index].borderBottomWidth = 0
    }

    this.setState({
      navItemStyles: tmpStyles,
    })

    if (item.type === 'dropdown' && !item.image)
    {
      hideDropdownMenu(item, index)
    } else {
      this.setState({
        activeNavIndex: null,
      })
    }
  }

  clickDropdown = (index) => {
    const { hideDropdownMenu } = this

    hideDropdownMenu(null, index)
  }

  renderNavigationItems(item, index, renderImages) {
    const { styles, icon, scrolledDropdownIcon, xl, darkMode, history, useRouter, onClickItem } = this.props
    const { hoverNavItem, leaveHoverNavItem, _navRefs, clickDropdown, hideDropdownMenu } = this
    const { activeNavIndex, showScrolledNav } = this.state

    const _styles = showScrolledNav ? deepmerge(styles, styles.scrolled) : darkMode ? deepmerge(styles, styles.darkMode) : styles
    let _imageStyles
    if(item.imageStyles) {
       _imageStyles = darkMode && !showScrolledNav ? deepmerge(item.imageStyles, item.imageStyles.darkMode) : item.imageStyles
    }

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
                <Media object src={item.image} style={activeNavIndex === index ? deepmerge(_imageStyles, _imageStyles.hover) : _imageStyles}/>
                : item.text}
            </NavLink>
          </NavItem>)
        break
      case 'dropdown':
        navItem = (
            <NavLink dropdown
                     key={index}
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
                  <>
                  <Media onClick={() => hoverNavItem(item, index)} object src={item.image} style={activeNavIndex === index ? deepmerge(_imageStyles.lower, _imageStyles.hoverLower) : _imageStyles.lower}/>
                  <Media onClick={() => hoverNavItem(item, index)} object src={item.image} style={activeNavIndex === index ? deepmerge(_imageStyles.upper, _imageStyles.hoverUpper) : _imageStyles.upper}/>
                  </>
                  : item.text}
              </div>
              {!item.image &&
              <Media object
                     style={activeNavIndex === index ? deepmerge(_styles.dropdownIcon, _styles.dropdownIcon.hover) : _styles.dropdownIcon}
                     src={showScrolledNav ? scrolledDropdownIcon : icon} />}
            </DropdownToggle>
            <DropdownMenu id='ddMenu' onMouseLeave={() => leaveHoverNavItem(item, index)}
                          style={{borderWidth: 0, backgroundColor: 'rgba(0,0,0,0)'}}>
              {typeof(item.render) === 'function' ? item.render(hideDropdownMenu) : item.render}
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
    const { items, brand, styles, fixed, darkMode, darkModeImg } = this.props
    const { toggle, renderNavigationItems } = this

    const _styles = darkMode ? deepmerge(styles, styles.darkMode) : styles
    const navImage = darkMode && !showScrolledNav && darkModeImg ? darkModeImg : activeNavImage

    return(
      <div style={{
        position: fixed ? 'fixed' : 'absolute',
        ..._styles.container,
      }}>
        <div id={'gradientOverlay'} style={{...styles.gradient, opacity: showScrolledNav ? 0 : styles.gradient.opacity}}></div>
        <Navbar
          id='navbar'
          expand="md"
          color={_styles.navbar.backgroundColor}
          style={_styles.navbar}>
          <NavbarBrand href="/" style={_styles.brand}>
            <div id={'navBrand'}>
              <img
                src={navImage}
                alt={showScrolledNav ? brand.image.scrolled.title : brand.image.title}
                style={brandImageStyles} />
            </div>
          </NavbarBrand>
          <div id='divider' style={{
            display: showScrolledNav ? 'flex' : 'none',
            ..._styles.divider,
          }}>
          </div>
          <NavbarToggler onClick={toggle} style={_styles.toggler} />
          <Collapse
            id='collapse'
            navbar
            isOpen={open}
            style={_styles.collapse}>
            <Nav id='nav' navbar style={_styles.nav}>
              {items.map((item, index) => renderNavigationItems(item, index, false))}
            </Nav>
            <div id='imageItems' style={showScrolledNav ? deepmerge(_styles.imageItems, _styles.imageItems.scrolled) : _styles.imageItems}>
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
  navLink: {},
  dropdownMenuContainer: {},
  dropdownContainer: {},
  scrolled: {},
  gradient: {
    background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)',
    opacity: 0.5,
    position: 'absolute',
    display: 'none',
    top: 0,
    left: 0,
    height: '125%',
    width: '100%',
    zIndex: 0,
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
  scrollTrigger: 700,
  useGradient: false,
  transitionWaitTime: 250,
}

export default mergeStyles(defaultStyles)(withSizes(NavBarAnimated))
