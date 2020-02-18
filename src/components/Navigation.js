import React, { Component } from 'react'
import { Collapse, Media, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink,UncontrolledDropdown, DropdownMenu, DropdownToggle } from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            isDropdownOpen: [],
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
                const subNav = item.items.map(i => {
                    switch(i.type) {
                        case 'link':
                            return (
                              i.content.map(c => {
                                  return (<NavLink style={styles.dropdownLink} href={c.url}>{c.title}</NavLink>)
                              }))
                        case 'image':
                            return (<Media object style={styles.dropdownImage} alt={i.content.title} src={i.content.image} />)
                        default:
                            return (<div style={styles.dropdownText}>{i.content}</div>)
                    }
                })
                navItem = (<UncontrolledDropdown style={styles.dropdownContainer} nav inNavbar>
                    <DropdownToggle nav caret>
                        {item.text}
                    </DropdownToggle>
                    <DropdownMenu right>
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
                    <Media object src={brand.image} alt={brand.title} style={styles.brandImage} />
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
    dropdownText: {},
    dropdownContainer: {},
    dropdownMenu: {},
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
