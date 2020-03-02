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
            megaMenuIndex: null,
        }
        this.toggle = this.toggle.bind(this)
        this.renderNavigationItems = this.renderNavigationItems.bind(this)
        this.showMegaMenu = this.showMegaMenu.bind(this)
        this.hideMegaMenu = this.hideMegaMenu.bind(this)

        this.menus = []
        this.dropdownCounter = 0
    }

    componentDidMount() {
       // this.showMegaMenu(1)
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
        this.dropdownCounter = 0
        this.setState({
            aside: item[0].item.aside,
            megaMenu: item[0].item.render(),
            megaMenuOpen: true,
            megaMenuIndex: key,
        })
    }

    hideMegaMenu(){
        this.setState({
            megaMenu: null,
            aside: null,
            megaMenuOpen: false,
        })
    }
    renderNavigationItems(item, index) {
        const { styles } = this.props
        const { megaMenuOpen, megaMenuIndex } = this.state
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
                    <DropdownToggle style={megaMenuOpen && megaMenuIndex === key ? deepmerge(styles.dropdownItem, styles.mmOpen.dropdownItem) : styles.dropdownItem} onMouseEnter={() => this.showMegaMenu(key)} nav>
                        {item.text}
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
          <React.Fragment>
              <div style={ megaMenuOpen ? deepmerge(styles.mmBackground, styles.mmOpen.mmBackground) : styles.mmBackground} />
            <Navbar expand="md" color={megaMenuOpen ? styles.mmOpen.navbar.backgroundColor : styles.navbar.backgroundColor} style={ megaMenuOpen ? deepmerge(styles.navbar, styles.mmOpen.navbar) : styles.navbar}>
                <NavbarBrand href="#" style={megaMenuOpen ? deepmerge(styles.brand, styles.mmOpen.brand) : styles.brand}>
                    <Media object src={brand.image.src} alt={brand.image.title} style={styles.brandImage} />
                    <NavbarText style={styles.brandTitle}>{brand.title}</NavbarText>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} style={styles.toggler} />
                <Collapse isOpen={open} navbar style={styles.collapse}>
                    <Nav navbar style={megaMenuOpen ? deepmerge(styles.nav, styles.mmOpen.nav) : styles.nav}>
                        {items.map((item, index) => renderNavigationItems(item, index))}
                    </Nav>
                </Collapse>
            </Navbar>
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
          </React.Fragment>
        )
    }
}

const defaultStyles = {
    mmBackground: {},
    navbar: {
    },
    brand: {},
    brandImage: {},
    brandTitle: {},
    toggler: {},
    nav: {
    },
    navItem: {},
    navLink: {},
    dropdownMenuContainer: {
    },
    dropdownContainer: {
    },
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