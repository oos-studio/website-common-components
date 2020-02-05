import React, { Component } from 'react'
import { Collapse, Media, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink } from 'reactstrap'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            slide: 0,
            lastScrollY: 0,
            styles: {...this.props.defaultStyles, ...this.props.style.navigation}
        }
        this.toggle = this.toggle.bind(this)
        this.renderNavigationItems = this.renderNavigationItems.bind(this)
        console.log(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const { lastScrollY } = this.state; 
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            this.setState({ slide: '-80px' })
        } else {
            this.setState({ slide: '0px' });
        }
        this.setState({ lastScrollY: currentScrollY });
    }

    toggle() {
        const { open } = this.state
        this.setState({ open: !open })
    }

    renderNavigationItems(item, index) {
        const { styles } = this.state
        let navItem = null
        switch(item.type) {
            case 'link':
                navItem = (<NavItem key={index} style={styles.navItem}><NavLink href={item.url} style={styles.navLink}>{item.text}</NavLink></NavItem>)
                break
            case 'dropdown':
                break
            default:
                break
        }
        return navItem
    }

    render() {
        const { open, slide, styles } = this.state
        const { items, brand } = this.props
        const { toggle, renderNavigationItems } = this
        return(
            <Navbar expand="md" fixed='top' color='light' light style={Object.assign({}, {transform: `translate(0, ${slide})`, transition: 'transform 0.5s linear'}, styles.navbar)}>
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
    brandTitle: {
        marginLeft: '0.5em'
    },
    toggler: {},
    nav: {},
    navItem: {},
    navLink: {},
    dropdown: {}
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

export default Navigation