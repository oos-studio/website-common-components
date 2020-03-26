import React, { Component } from 'react'
import { Collapse, DropdownMenu, Media, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink,UncontrolledDropdown, DropdownToggle } from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'
import deepmerge from 'deepmerge'
import gsap, { TweenLite, Power2, TimelineLite } from 'gsap'
import '../App.css'
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
      activeImgNavIndex: null,
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
    this._imgNavRefs = []
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
       TweenLite.to('#collapse', duration, {...styles.scrolled.collapse}).then(() => {
         this.setState({
           activeNavImage: scrollNavImage,
           brandImageStyles: styles.brandImage.small
         })
         TweenLite.to('#navBrand', 0, {opacity: 0})
         TweenLite.to('#navBrand', 0, {transform: 'translateX(0px)'})
         TweenLite.to('#navBrand', duration, {opacity: 1, ...styles.scrolled.brand, ease: Power2.easeOut})
         TweenLite.to('#imageItem', duration, {...styles.scrolled.imageItems, ease: Power2.easeOut})
         TweenLite.to('#nav', duration, {opacity: 1, ...styles.scrolled.nav, ease: Power2.easeOut})
       })

       TweenLite.to('#navbar', duration, {...styles.scrolled.navbar, ease: Power2.easeOut})
     })
    } else {

      TweenLite.to('#navbar', duration, { height: styles.navbar.height, ease: Power2.easeOut })
      TweenLite.to('#navBrand', duration,{opacity: 0,}).then(() => {
          this.setState({
            activeNavImage: defaultNavImage,
            brandImageStyles: styles.brandImage.large
          })

        TweenLite.to('#navBrand', duration, {transform: 'translateX(0px)', opacity: 1})
        TweenLite.to('#navBrand', duration, {width: styles.brandImage.large.width, ...styles.brand})
        TweenLite.to('#navbar', duration, {...styles.navbar, ease: Power2.easeOut})
        TweenLite.to('#imageItem', duration, {...styles.imageItems, ease: Power2.easeOut})
        TweenLite.to('#nav', duration, {opacity: 1, ...styles.nav, ease: Power2.easeOut})
      })
    }
  }

  handleScroll = () => {
    const { changeOnScroll } = this.props

    const winScroll = document.body.scrollTop || document.documentElement.scrollTop

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

    const scrollY = winScroll / height

    let showScrolled = false

    if(scrollY >= 0.2 && changeOnScroll) {
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

  hideDropdownMenu(item, index){
    const { activeNavIndex } = this.state
    const { _navRefs } = this

    if(activeNavIndex !== null && _navRefs[index].toggle !== undefined) {
      _navRefs[index].toggle()
    }

    this.setState({
      activeNavIndex: null,
    })
  }

  hoverNavItem(item, index) {
    const { showDropdownMenu } = this
    const { navItemStyles } = this.state

    if(!item.image && item.type === 'dropdown') {
      this.setState({
        activeImgNavIndex: null,
      })
    }

    let tmpStyles = navItemStyles
    tmpStyles[index].borderBottomStyle = 'solid'
    tmpStyles[index].borderBottomWidth = 2

    this.setState({
      navItemStyles: tmpStyles,
    })

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
    tmpStyles[index].borderBottomStyle = '0'
    tmpStyles[index].borderBottomWidth = 0

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

  renderImageNavItems = (item, index) => {
    const { activeNavIndex, activeImgNavIndex } = this.state
    const { styles } = this.props
    const { hoverNavItem, leaveHoverNavItem } = this
    return (
      item.image ?
        <React.Fragment>
        <Media
          onMouseEnter={() => hoverNavItem(item, index)}
          onMouseLeave={() => leaveHoverNavItem(item, index)}
          onClick={() => {
            if(item.type === 'dropdown') {
              if(activeImgNavIndex === index) {
                this.setState({
                  activeImgNavIndex: null,
                })
                return
              }
              this.setState({
                activeImgNavIndex: index,
              })
            }
          }}
          object
          src={item.image}
          style={activeNavIndex === index ? deepmerge(styles.imageStyles, styles.imageStyles.hover) : styles.imageStyles}/>
          {item.type === 'dropdown' ? activeImgNavIndex && item.render() : null}
        </React.Fragment>
          : null
    )
  }

  renderNavigationItems(item, index) {
    const { styles, icon, iconScrolled } = this.props
    const { hoverNavItem, leaveHoverNavItem, _navRefs, clickDropdown } = this
    const { activeNavIndex, showScrolledNav } = this.state

    let navItem = null
    let id = `item${index}`

    switch(item.type) {
      case 'link':
        item.image ? navItem = null :
        navItem = (
          <NavItem
            id={id}
            key={index}
            style={styles.navItem}
            onMouseEnter={() => hoverNavItem(item, index)}
            onMouseLeave={() => leaveHoverNavItem(item, index)}>
            <NavLink
              ref={_r => {_navRefs[index] = _r}}
              href={item.url}
              style={{
                ...styles.navLink,
                color: showScrolledNav ? styles.navLink.color : (activeNavIndex === index ? styles.navLink.hover.color : styles.navLink.color),
                borderBottomColor: activeNavIndex === index ? styles.navLink.hover.borderBottomColor : styles.navLink.borderBottomColor,
                transition: 'border-bottom-color 0.25s, color 0.15s',
              }}>
              {item.text}
            </NavLink>
          </NavItem>)
        break
      case 'dropdown':
        item.image ? navItem = null :
        navItem = (
          <UncontrolledDropdown nav inNavbar
                                style={styles.ucDropdown}
                                onMouseLeave={() => leaveHoverNavItem(item, index)}
                                ref={_r => {_navRefs[index] = _r}}
                                key={index}
                                onClick={() => clickDropdown(index)}>
            <div style={styles.toggle} onMouseEnter={() => hoverNavItem(item, index)}>
              <div
                style={{
                ...styles.dropdownItem,
                color: showScrolledNav ? styles.dropdownItem.color : (activeNavIndex === index ? styles.dropdownItem.hover.color : styles.dropdownItem.color),
                borderBottomColor: activeNavIndex === index ? styles.dropdownItem.hover.borderBottomColor : styles.dropdownItem.borderBottomColor,
                  transition: 'border-bottom-color 0.25s, color 0.15s',
              }}>
                {item.text}
              </div>
              <Media object
                     style={activeNavIndex === index ? deepmerge(styles.dropdownIcon, styles.dropdownIcon.hover) : styles.dropdownIcon}
                     src={showScrolledNav ? iconScrolled : icon} />
            </div>
            <DropdownMenu onMouseLeave={() => leaveHoverNavItem(item, index)}
                          style={{borderWidth: 0, backgroundColor: 'rgba(0,0,0,0)'}}>
              {item.render()}
            </DropdownMenu>
          </UncontrolledDropdown>)
        break
      default:
        break
    }
    return navItem
  }

  render() {
    const { open, showScrolledNav, activeNavImage, brandImageStyles, activeNavIndex } = this.state
    const { items, brand, styles, fixed } = this.props
    const { toggle, renderNavigationItems, renderImageNavItems } = this
    const { lg } = this.props

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
          <NavbarBrand id={'navBrand'} href="#" style={styles.brand}>
              <img
                src={activeNavImage}
                alt={showScrolledNav ? brand.image.scrolled.title : brand.image.title}
                style={brandImageStyles} />
            <NavbarText style={styles.brandTitle}>
              {brand.title}
            </NavbarText>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} style={styles.toggler} />
          <Collapse
            id='collapse'
            navbar
            isOpen={open}
            style={styles.collapse}>
            <Nav id='nav' navbar style={styles.nav}>
              {items.map((item, index) => renderNavigationItems(item, index))}
            </Nav>
             <div id='imageItem' style={styles.imageItems}>
               {items.map((item, index) => renderImageNavItems(item, index))}
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
      width: 100,
    },
    large: {
      width: 400,
    },
  },
  brandTitle: {},
  toggler: {},
  nav: {},
  navItem: {},
  navLink: {},
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
}

export default mergeStyles(defaultStyles)(withSizes(NavBarAnimated))
