import React, { Component } from 'react'
import { Collapse, Media, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink,UncontrolledDropdown, DropdownMenu, DropdownToggle } from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
        this.toggle = this.toggle.bind(this)
        this.renderNavigationItems = this.renderNavigationItems.bind(this)
        this.showMegaMenu = this.showMegaMenu.bind(this)

        this.menus = []
    }

    toggle() {
        const { open } = this.state
        this.setState({ open: !open })
    }

    showMegaMenu(index) {
        this.menus[index].render()
    }

    renderNavigationItems(item, index) {
        const { styles } = this.props
        let navItem = null

        switch(item.type) {
            case 'link':
                navItem = (<NavItem key={index} style={styles.navItem}><NavLink href={item.url} style={styles.navLink}>{item.text}</NavLink></NavItem>)
                break
            case 'dropdown':
                this.menus.push(item)
                navItem = (<UncontrolledDropdown style={styles.dropdownContainer} nav inNavbar>
                    <DropdownToggle onClick={index => this.showMegaMenu(index)} nav>
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
        const { open } = this.state
        const { items, brand, styles } = this.props
        const { toggle, renderNavigationItems } = this

        return(
          <React.Fragment>
            <Navbar expand="md" fixed='top' color='light' light style={styles.navbar}>
                <NavbarBrand href="#" style={styles.brand}>
                    <Media object src={brand.image.src} alt={brand.image.title} style={styles.brandImage} />
                    <NavbarText style={styles.brandTitle}>{brand.title}</NavbarText>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} style={styles.toggler} />
                <Collapse isOpen={open} navbar>
                    <Nav navbar className={'ml-auto'} style={styles.nav}>
                        {items.map((item, index) => renderNavigationItems(item, index))}
                    </Nav>
                </Collapse>
            </Navbar>
          </React.Fragment>
        )
    }
}

const defaultStyles = {
    navbar: {},
    brand: {},
    brandImage: {},
    brandTitle: {},
    toggler: {},
    nav: {},
    navItem: {},
    navLink: {},
    dropdownMenuContainer: {
    },
    dropdownContainer: {
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
