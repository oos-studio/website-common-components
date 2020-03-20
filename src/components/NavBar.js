import React, { Component } from 'react'
import { Collapse, DropdownMenu, Media, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink,UncontrolledDropdown, DropdownToggle } from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'
import deepmerge from 'deepmerge'
import { TweenLite, Power2 } from 'gsap'
import '../App.css'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            megaMenu: null,
            megaMenuOpen: false,
            aside: null,
            activeNavIndex: null,
            navItemStyles: [],
            scrollY: window.pageYOffset,
            showScrolledNav: false,
            defaultNavImage: null,
            scrollNavImage: null,
            activeNavImage: null,
        }

        this.toggle = this.toggle.bind(this)
        this.renderNavigationItems = this.renderNavigationItems.bind(this)
        this.showMegaMenu = this.showMegaMenu.bind(this)
        this.hideMegaMenu = this.hideMegaMenu.bind(this)
        this.hoverNavItem = this.hoverNavItem.bind(this)
        this.leaveHoverNavItem = this.leaveHoverNavItem.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
        this.swapImage = this.swapImage.bind(this)

        this._navRefs = []
        this._brandRef = null
        this._navbarRef = null
        this._navRef = null
        this._spacerRef = null
    }

    componentWillMount() {
        const { items } = this.props
        const navItemStyles = []
        items.forEach(i => {
            navItemStyles.push({
                borderBottomWidth: 0,
                borderBottomStyle: '',
            })
        })

        this.setState({
            navItemStyles: navItemStyles,
        })
    }

    componentDidMount() {
        const { handleScroll } = this
        const { brand } = this.props

        window.addEventListener('scroll', handleScroll)

        this.setState({
            defaultNavImage: brand.image.src,
            scrollNavImage: brand.image.scrolled.src,
            activeNavImage: brand.image.src,
        })
    }

    componentWillUnmount() {
        const { handleScroll } = this

        window.removeEventListener('scroll', handleScroll)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.showScrolledNav !== this.state.showScrolledNav) {
            this.swapImage()
        }
    }

        swapImage() {
         const { defaultNavImage, scrollNavImage, activeNavImage, showScrolledNav } = this.state
            const { styles } = this.props
         const duration = 0.5

         if(showScrolledNav) {
             TweenLite.to('#navbar', duration, { height: 100, ease: Power2.easeInOut })

             //document.getElementById('navbarID').animate([{height: navbarHeight}, {height: 100}], {duration: duration, fill: 'forwards'})
             TweenLite.to('#navBrand', duration, { transform: 'translateX(-510px)', width: styles.brandImage.small.width, ease: Power2.easeOut }).then(() => {
                 this.setState({
                     activeNavImage: scrollNavImage
                 })
                 TweenLite.to('#navBrand', 0, { opacity: 0 })
                 TweenLite.to('#navBrand', 0, { transform: 'translateX(0px)' })
                 TweenLite.to('#navBrand', duration, { opacity: 1, ease: Power2.easeOut })
             })
             TweenLite.to('#navSpacer', duration, { width: '60%', ease: Power2.easeInOut })


             //this._brandRef.animate([{transform: 'translateX(0px)'}, {transform: 'translateX(-500px)'}], {duration: duration, fill: 'forwards'})
             //this._spacerRef.animate([{width: 0}, {width: '60%'}], {duration: duration, fill: 'forwards'})

             //this._brandRef.animate([{transform: 'translateX(-500px)'}, {transform: 'translateX(0px)'}], {duration: duration, fill: 'forwards'})

         } /*else {
             const navbarHeight = document.getElementById('navbarID').style.height

             document.getElementById('navbarID').animate([{height: navbarHeight}, {height: 150}], {duration: duration, fill: 'forwards'})

             this._spacerRef.animate([{width: '60%'}, {width: 0}], {duration: duration, fill: 'forwards'})

             this.setState({
                     activeNavImage: defaultNavImage
             })

             this._brandRef.animate([{transform: 'translateX(-500px)'}, {transform: 'translateX(0px)'}], {duration: duration, fill: 'forwards'})

         }*/



    }

    handleScroll = () => {
        const { changeOnScroll } = this.props

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        const scrollY = winScroll / height

        let showScrolledNav = false

        if(scrollY >= 0.2 && changeOnScroll) {
            showScrolledNav = true
        }

        this.setState({
            scrollY: scrollY,
            showScrolledNav: showScrolledNav,
        })
    }

    toggle() {
        const { open } = this.state
        this.setState({ open: !open })
    }

    async showMegaMenu(item, index) {
        const { useCustomMegaMenu } = this.props
        const { activeNavIndex } = this.state
        const { _navRefs } = this

        await this.hideMegaMenu(null, activeNavIndex)

        if(!useCustomMegaMenu) {
            _navRefs[index].toggle()
        }

        this.setState({
            aside: item.aside,
            megaMenu: item.render(),
            megaMenuOpen: true,
            activeNavIndex: index,
        })
    }

    hideMegaMenu(item, index){
        const { useCustomMegaMenu } = this.props
        const { activeNavIndex } = this.state
        const { _navRefs } = this

        if(!useCustomMegaMenu && activeNavIndex !== null) {
            _navRefs[index].toggle()
        }

        this.setState({
            megaMenu: null,
            aside: null,
            megaMenuOpen: false,
            activeNavIndex: null,
        })
    }

    hoverNavItem(item, index) {
        const { showMegaMenu } = this
        const { navItemStyles } = this.state

        let tmpStyles = navItemStyles
        tmpStyles[index].borderBottomStyle = 'solid'
        tmpStyles[index].borderBottomWidth = 2

        this.setState({
            navItemStyles: tmpStyles,
        })

        if (item.type === 'dropdown')
        {
            showMegaMenu(item, index)
        } else {
            this.setState({
                activeNavIndex: index,
            })
        }
    }

    leaveHoverNavItem(item, index) {
        const { hideMegaMenu } = this
        const { navItemStyles } = this.state

        let tmpStyles = navItemStyles
        tmpStyles[index].borderBottomStyle = '0'
        tmpStyles[index].borderBottomWidth = 0

        this.setState({
            navItemStyles: tmpStyles,
        })

        if (item.type === 'dropdown')
        {
            hideMegaMenu(item, index)
        } else {
            this.setState({
                activeNavIndex: null,
            })
        }
    }

    renderNavigationItems(item, index) {
        const { styles, icon, useCustomMegaMenu } = this.props
        const { hoverNavItem, leaveHoverNavItem, _navRefs } = this
        const { navItemStyles, activeNavIndex, showScrolledNav } = this.state

        const activeStyles = showScrolledNav ? deepmerge(styles, styles.scrolled) : styles

        let navItem = null

        switch(item.type) {
            case 'link':
                navItem = (
                  <NavItem
                    key={index}
                    style={activeStyles.navItem}
                    onMouseEnter={() => hoverNavItem(item, index)}
                    onMouseLeave={() => leaveHoverNavItem(item, index)}>
                      <NavLink
                        ref={_r => {_navRefs[index] = _r}}
                        href={item.url}
                        style={{
                            ...activeStyles.navLink,
                            color: activeNavIndex === index ? activeStyles.navLink.hover.color : activeStyles.navLink.color,
                            borderBottomStyle: item.image ? '' : navItemStyles[index].borderBottomStyle,
                            borderBottomWidth: item.image ? 0 : navItemStyles[index].borderBottomWidth,
                        }}>
                          {item.image ?
                              <Media object src={item.image} style={activeNavIndex === index ? deepmerge(item.imageStyles, item.imageStyles.hover) : item.imageStyles}/>
                            : item.text}
                      </NavLink>
                  </NavItem>)
                break
            case 'dropdown':
                navItem = (
                  <UncontrolledDropdown nav inNavbar
                    onMouseLeave={() => leaveHoverNavItem(item, index)}
                    ref={_r => {_navRefs[index] = _r}}
                    key={index}>
                    <DropdownToggle nav
                      style={{
                            ...activeStyles.dropdownItem,
                          color: activeNavIndex === index ? activeStyles.dropdownItem.hover.color : activeStyles.dropdownItem.color,
                            borderBottomStyle: item.image ? '' : navItemStyles[index].borderBottomStyle,
                            borderBottomWidth: item.image ? 0 : navItemStyles[index].borderBottomWidth,
                        }}
                      onMouseEnter={() => hoverNavItem(item, index)}>
                        {item.image ?
                            <Media object src={item.image} style={activeNavIndex === index ? deepmerge(item.imageStyles, item.imageStyles.hover) : item.imageStyles}/>
                            : item.text}
                        <Media object
                          style={{height: 7.5, width: 11.25, marginLeft: 5}}
                          src={icon} />
                    </DropdownToggle>
                    <DropdownMenu onMouseLeave={() => leaveHoverNavItem(item, index)}
                      style={{borderWidth: 0, backgroundColor: 'rgba(0,0,0,0)'}}>
                        {!useCustomMegaMenu && item.render()}
                    </DropdownMenu>
                </UncontrolledDropdown>)
                break
            case 'spacer':
                navItem = (
                  <div ref={r => this._spacerRef = r} id={'navSpacer'} /*style={{width: showScrolledNav ? item.maxWidth : 0, /*transition: 'all 1s'}}*/>
                  </div>
                )
                break
            default:
                navItem = item.render()
                break
        }
        return navItem
    }

    render() {
        const { open, aside, megaMenu, megaMenuOpen, showScrolledNav, activeNavImage} = this.state
        const { items, brand, styles, useCustomMegaMenu, fixed } = this.props
        const { toggle, renderNavigationItems } = this

        const activeStyles = showScrolledNav ? deepmerge(styles, styles.scrolled) : styles

        return(
          <div style={{
              position: fixed ? 'fixed' : 'absolute',
              ...activeStyles.container,
          }}>
              <div style={ megaMenuOpen ? deepmerge(activeStyles.mmBackground, activeStyles.mmOpen.mmBackground) : activeStyles.mmBackground} />
              <Navbar
                id='navbar'
                expand="md"
                color={megaMenuOpen ? activeStyles.mmOpen.navbar.backgroundColor : activeStyles.navbar.backgroundColor}
                style={ megaMenuOpen ? deepmerge(activeStyles.navbar, activeStyles.mmOpen.navbar) : activeStyles.navbar}>
                <NavbarBrand href="#" style={activeStyles.brand}>
                    <div ref={r => this._brandRef = r} id={'navBrand'}>
                        <img
                           src={activeNavImage}
                           alt={showScrolledNav ? brand.image.scrolled.title : brand.image.title}
                           style={activeStyles.brandImage} />
                    </div>
                    <NavbarText style={activeStyles.brandTitle}>
                        {brand.title}
                    </NavbarText>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} style={activeStyles.toggler} />
                <Collapse
                  navbar
                  isOpen={open}
                  style={activeStyles.collapse}>
                    <Nav id='navID' navbar style={megaMenuOpen ? deepmerge(activeStyles.nav, activeStyles.mmOpen.nav) : activeStyles.nav}>
                        {items.map((item, index) => renderNavigationItems(item, index))}
                    </Nav>
                </Collapse>
            </Navbar>
              <div style={activeStyles.megaMenu}>
                  {aside !== null && aside !== undefined &&
                    <React.Fragment>
                        <Media
                          style={activeStyles.asideImage}
                          object
                          src={aside.brand.image.src}
                          alt={aside.brand.image.title}/>
                        <div style={activeStyles.asideWrapper}>
                            <div style={activeStyles.asideHeader}>
                                {aside.header}
                            </div>
                            <div style={activeStyles.asideBody}>
                                {aside.text}
                            </div>
                        </div>
                    </React.Fragment>
                  }
                  {useCustomMegaMenu && megaMenu}
              </div>
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
        }
    },
    brandTitle: {},
    toggler: {},
    nav: {},
    navItem: {},
    navLink: {},
    dropdownMenuContainer: {},
    dropdownContainer: {},
    megaMenu: {
        padding: 0,
    },
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

NavBar.defaultProps = {
    items: [],
    brand: {},
    style: {
        navigation: {},
        navigationDropdown: {}
    },
    useCustomMegaMenu: true,
    fixed: false,
    changeOnScroll: false,
}

export default mergeStyles(defaultStyles)(NavBar)
