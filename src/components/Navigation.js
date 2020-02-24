import React, { Component } from 'react'
import { Collapse, Media, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink,UncontrolledDropdown, DropdownMenu, DropdownToggle } from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
        this.toggle = this.toggle.bind(this)
        this.renderNavigationItems = this.renderNavigationItems.bind(this)
    }

    toggle() {
        const { open } = this.state
        this.setState({ open: !open })
    }

    renderNavigationItems(item, index) {
        const { styles } = this.props
        let navItem = null

        switch(item.type) {
            case 'link':
                navItem = (<NavItem key={index} style={styles.navItem}><NavLink href={item.url} style={styles.navLink}>{item.text}</NavLink></NavItem>)
                break
            case 'dropdown':
                const subNav = item.render()
                navItem = (<UncontrolledDropdown style={styles.dropdownContainer} nav inNavbar>
                    <DropdownToggle nav caret>
                        {item.text}
                    </DropdownToggle>
                    <DropdownMenu right style={{
                        //width: this.state.open ? '100%' : '50vw',
                       // height: this.state.open ? '100%' : '30vh',
                        ...styles.dropdownMenuContainer}}>
                        <div style={styles.dropdownMenu}>
                            {subNav}
                        </div>
                    </DropdownMenu>
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
    dropdownLink: {},
    navLink: {},
    dropdown: {},
    dropdownImage: {},
    dropdownHeader: {},
    dropdownContainer: {},
    dropdownMenuContainer: {
        padding: 10,
        width: '50vw',
        height: '30vh',
    },
    dropdownMenu: {
        backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        justifyContent: 'space-evenly',

    },
    dropdownSection: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'blue',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
}

Navigation.defaultProps = {
    items: [],
    brand: {},
    style: {
        navigation: {},
        navigationDropdown: {}
    },
    defaultStyles: defaultStyles
}

export default mergeStyles(defaultStyles)(Navigation)
