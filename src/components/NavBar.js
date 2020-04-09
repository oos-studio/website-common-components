import React, { Component } from 'react'
import { Collapse, Media, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink,UncontrolledDropdown, DropdownToggle, Container } from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'
import deepmerge from 'deepmerge'

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
        }

        this.toggle = this.toggle.bind(this)
        this.renderNavigationItems = this.renderNavigationItems.bind(this)
        this.showMegaMenu = this.showMegaMenu.bind(this)
        this.hideMegaMenu = this.hideMegaMenu.bind(this)

        this.menus = []
        this.dropdownCounter = 0
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.dropdownCounter = 0
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
        })
    }

    hideMegaMenu(){
        this.setState({
            megaMenu: null,
            aside: null,
            megaMenuOpen: false,
            navBorderWidth: [0,0,0],
            navBorderStyle: ['','',''],
        })
    }

    renderNavigationItems(item, index) {
        const { styles, icon } = this.props
        let navItem = null
        let key = 0

        switch(item.type) {
            case 'link':
                navItem = (<NavItem onMouseEnter={() => this.hideMegaMenu()} key={index} style={styles.navItem}><NavLink href={item.url} style={styles.navLink}>{item.text}</NavLink></NavItem>)
                break
            case 'dropdown':
                this.dropdownCounter++
                key = this.dropdownCounter
                this.menus.push({index: key, item: item})
                navItem = (<UncontrolledDropdown nav inNavbar >
                    <DropdownToggle style={{
                        borderBottomWidth: this.state.navBorderWidth[key],
                        borderBottomStyle: this.state.navBorderStyle[key],
                        ...styles.dropdownItem,
                    }} onMouseEnter={() => this.showMegaMenu(key)} nav>
                        {item.text}
                        <Media style={{height: 7.5, width: 11.25, marginLeft: 5}} object src={icon} />
                    </DropdownToggle>
                </UncontrolledDropdown>)
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
          <div style={styles.container}>
              <div style={ megaMenuOpen ? deepmerge(styles.mmBackground, styles.mmOpen.mmBackground) : styles.mmBackground} />
              <Navbar expand="md" color={megaMenuOpen ? styles.mmOpen.navbar.backgroundColor : styles.navbar.backgroundColor} style={ megaMenuOpen ? deepmerge(styles.navbar, styles.mmOpen.navbar) : styles.navbar}>
                  <NavbarBrand href="#" style={styles.brand}>
                      <Media object src={brand.image.src} alt={brand.image.title} style={styles.brandImage} />
                      <NavbarText style={styles.brandTitle}>{brand.title}</NavbarText>
                  </NavbarBrand>
                  <NavbarToggler onClick={toggle} style={styles.toggler} />
                  <Collapse isOpen={open} navbar style={styles.collapse}>
                      <Nav id='nav' navbar style={megaMenuOpen ? deepmerge(styles.nav, styles.mmOpen.nav) : styles.nav}>
                          <div style={megaMenuOpen ? deepmerge(styles.itemWrapper, styles.mmOpen.itemWrapper) : styles.itemWrapper}>
                              {items.map((item, index) => renderNavigationItems(item, index))}
                          </div>
                          <div style={styles.megaMenu} onMouseLeave={() => hideMegaMenu()}>
                              {aside !== null && aside !== undefined &&
                              <React.Fragment>
                                  <Media style={styles.asideImage} object src={aside.brand.image.src} alt={aside.brand.image.title}/>
                                  <div style={styles.asideWrapper}>
                                      <div style={styles.asideHeader}>{aside.header}</div>
                                      <div style={styles.asideBody}>{aside.text}</div>
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
    mmBackground: {},
    navbar: {},
    brand: {},
    brandImage: {},
    brandTitle: {},
    toggler: {},
    nav: {},
    itemWrapper: {},
    navItem: {},
    navLink: {},
    dropdownMenuContainer: {},
    dropdownContainer: {},
    megaMenu: {
        padding: 0,
    },
    asideWrapper: {},
    asideImage: {},
    asideHeader: {
        fontSize: 25,
    },
    asideBody: {
        fontSize: 18,
        color: 'tan',
        padding: 10,
    },
}

NavBar.defaultProps = {
    items: [],
    brand: {},
    style: {
        navigation: {},
        navigationDropdown: {}
    },
}

export default mergeStyles(defaultStyles)(NavBar)
