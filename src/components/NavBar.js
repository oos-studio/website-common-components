import React, { Component } from 'react'
import { Collapse, Media, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, DropdownToggle, Container } from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'
import deepmerge from 'deepmerge'
import NavLink from './NavLink'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            megaMenu: null,
            aside: null,
            megaMenuOpen: false,
            navBorderWidth: [0,0,0],
            navBorderStyle: ['','',''],
            activeHoveredLink: null,
            activeHoveredDropdown: null,
        }

        this.toggle = this.toggle.bind(this)
        this.renderNavigationItems = this.renderNavigationItems.bind(this)
        this.showMegaMenu = this.showMegaMenu.bind(this)
        this.hideMegaMenu = this.hideMegaMenu.bind(this)

        this.menus = []
        this.dropdownCounter = 0

        if(props.navBarRef) {
            props.navBarRef(this)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.dropdownCounter = 0
    }

    componentDidMount() {
        this.unlisten = this.props.history?.listen((location, action) => {
            this.hideMegaMenu()
        })
    }

    componentWillUnmount() {
        if(this.unlisten) {
            this.unlisten()
        }
    }

    toggle() {
        const { open } = this.state
        this.setState({ open: !open })
    }

    async showMegaMenu(key) {
        await this.hideMegaMenu()
        const item = this.menus.filter(obj => {
            return obj.index === key
        })

        let borderWidth = [0,0,0]
        borderWidth[key] = 2

        let borderStyle = ['','','']
        borderStyle[key] = 'solid'

        this.dropdownCounter = 0

        this.setState({
            aside: item[0].item.aside,
            megaMenu: item[0].item.render(),
            megaMenuOpen: true,
            navBorderWidth: borderWidth,
            navBorderStyle: borderStyle,
            activeHoveredDropdown: key,
        })


    }
    unHoverLink = () => {
        this.setState({
            activeHoveredLink: null,
        })
    }
    hideMegaMenu(index = null){
        this.setState({
            megaMenu: null,
            activeHoveredLink: index,
            activeHoveredDropdown: null,
            aside: null,
            megaMenuOpen: false,
            navBorderWidth: [0,0,0],
            navBorderStyle: ['','',''],
        })

    }
    renderNavigationItems(item, index) {
        const { styles, icon, useRouter, onClickItem, history } = this.props
        const { activeHoveredLink, activeHoveredDropdown } = this.state

        let navItem = null
        let key = 0

        switch(item.type) {
            case 'link':
                navItem = (<NavItem key={index} onMouseEnter={() => this.hideMegaMenu(index)} onMouseLeave={() => this.unHoverLink()} key={index} style={styles.navItem}><NavLink history={history} useRouter={item.useRouter ? item.useRouter : false} onClickItem={onClickItem} item={item} href={item.url} style={{
                    ...styles.navLink,
                    color: activeHoveredLink === index ? styles.navLink.hovered.color : styles.navLink.color,
                }}>{item.text}</NavLink></NavItem>)
                break
            case 'dropdown':
                this.dropdownCounter++
                key = this.dropdownCounter
                this.menus.push({index: key, item: item})
                navItem = (<NavLink key={index} history={history} useRouter={useRouter} onClickItem={onClickItem} item={item} dropdown>
                    <DropdownToggle style={{
                        borderBottomWidth: this.state.navBorderWidth[key],
                        borderBottomStyle: this.state.navBorderStyle[key],
                        ...styles.dropdownItem,
                        color: activeHoveredDropdown === key ? styles.dropdownItem.hovered.color : styles.dropdownItem.color,
                    }} onMouseEnter={() => this.showMegaMenu(key)} onMouseLeave={() => this.unHoverLink()} nav>
                        {item.text}
                        <i
                          style={
                              activeHoveredDropdown === key
                                ? deepmerge(styles.dropdownArrow, styles.dropdownArrow.hovered)
                                : styles.dropdownArrow
                          } />
                    </DropdownToggle>
                </NavLink>)
                break
            default:
                break
        }

        return navItem
    }

    render() {
        const { open, aside, megaMenu, megaMenuOpen} = this.state
        const { items, brand, styles } = this.props
        const { toggle, renderNavigationItems, hideMegaMenu } = this

        return(
          <div style={styles.container} onMouseLeave={() => hideMegaMenu()}>
              <div className={'mmBackground'} style={ megaMenuOpen ? deepmerge(styles.mmBackground, styles.mmOpen.mmBackground) : styles.mmBackground} />
              <Navbar expand="md" color={megaMenuOpen ? styles.mmOpen.navbar.backgroundColor : styles.navbar.backgroundColor} style={ megaMenuOpen ? deepmerge(styles.navbar, styles.mmOpen.navbar) : styles.navbar}>
                  <NavbarBrand href="/" style={styles.brand}>
                      <Media object src={brand.image.src} alt={brand.image.title} style={styles.brandImage} />
                      <NavbarText style={styles.brandTitle}>{brand.title}</NavbarText>
                  </NavbarBrand>
                  <NavbarToggler onClick={toggle} style={styles.toggler} />
                  <Collapse isOpen={open} navbar style={styles.collapse}>
                      <Nav id='nav' navbar-expand-lg navbar style={megaMenuOpen ? deepmerge(styles.nav, styles.mmOpen.nav) : styles.nav}>
                          <div style={megaMenuOpen ? deepmerge(styles.itemWrapper, styles.mmOpen.itemWrapper) : styles.itemWrapper}>
                              {items.map((item, index) => renderNavigationItems(item, index))}
                          </div>
                          <div style={{
                              ...styles.megaMenu,
                          }}>
                              {aside !== null && aside !== undefined &&
                              <React.Fragment>
                                  <Media style={styles.asideImage} object src={aside.brand.image.src} alt={aside.brand.image.title}/>
                                  <div className={'asideContainer'} style={styles.asideWrapper}>
                                      <div className={'asideHeader'} style={styles.asideHeader}>{aside.header}</div>
                                      <div className={'asideBody'} style={styles.asideBody}>{aside.text}</div>
                                  </div>
                              </React.Fragment>
                              }
                              {megaMenu}
                          </div>
                      </Nav>
                  </Collapse>
              </Navbar>
          </div>
        )
    }
}

const defaultStyles = {
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
    },
    mmOpen:{
        nav:{},
        navbar: {},
        itemWrapper: {},
        mmBackground: {
        },
    },
    mmBackground: {
    },
    navbar: {},
    brand: {},
    brandImage: {},
    brandTitle: {},
    toggler: {},
    nav: {},
    itemWrapper: {},
    navItem: {},
    navLink: {
        hovered: {},
    },
    dropdownMenuContainer: {},
    dropdownContainer: {},
    megaMenu: {
        padding: 0,
    },
    asideWrapper: {
    },
    asideImage: {
    },
    asideHeader: {
        opacity: 0,
        fontSize: 25,
    },
    asideBody: {
        opacity: 0,
        fontSize: 18,
        color: 'tan',
        padding: 10,
    },
    dropdownArrow: {

        hovered: {
        },
    },
}

NavBar.defaultProps = {
    items: [],
    brand: {},
    style: {
        navigation: {},
        navigationDropdown: {}
    },
    useRouter: false,
}

export default mergeStyles(defaultStyles)(NavBar)
