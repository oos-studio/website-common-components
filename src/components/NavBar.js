import React, { Component } from 'react'
import { Collapse, DropdownMenu, Media, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink,UncontrolledDropdown, DropdownToggle } from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'
import deepmerge from 'deepmerge'
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
        }

        this.toggle = this.toggle.bind(this)
        this.renderNavigationItems = this.renderNavigationItems.bind(this)
        this.showMegaMenu = this.showMegaMenu.bind(this)
        this.hideMegaMenu = this.hideMegaMenu.bind(this)
        this.hoverNavItem = this.hoverNavItem.bind(this)
        this.leaveHoverNavItem = this.leaveHoverNavItem.bind(this)
        this.handleScroll = this.handleScroll.bind(this)

        this._navRefs = []
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

        window.addEventListener('scroll', handleScroll)
    }

    componentWillUnmount() {
        const { handleScroll } = this

        window.removeEventListener('scroll', handleScroll)
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
                if(showScrolledNav) {
                   navItem = item.render()
                }
                break
            default:
                navItem = item.render()
                break
        }
        return navItem
    }

    render() {
        const { open, aside, megaMenu, megaMenuOpen, showScrolledNav} = this.state
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
                expand="md"
                color={megaMenuOpen ? activeStyles.mmOpen.navbar.backgroundColor : activeStyles.navbar.backgroundColor}
                style={ megaMenuOpen ? deepmerge(activeStyles.navbar, activeStyles.mmOpen.navbar) : activeStyles.navbar}>
                <NavbarBrand href="#" style={activeStyles.brand}>
                    <Media object
                           src={showScrolledNav ? brand.image.scrolled.src : brand.image.src}
                           alt={showScrolledNav ? brand.image.scrolled.title : brand.image.title}
                           style={activeStyles.brandImage} />
                    <NavbarText style={activeStyles.brandTitle}>
                        {brand.title}
                    </NavbarText>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} style={activeStyles.toggler} />
                <Collapse
                  navbar
                  isOpen={open}
                  style={activeStyles.collapse}>
                    <Nav navbar style={megaMenuOpen ? deepmerge(activeStyles.nav, activeStyles.mmOpen.nav) : activeStyles.nav}>
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
    brandImage: {},
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
