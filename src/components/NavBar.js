import React, { Component } from 'react'
import { Collapse, Media, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink,UncontrolledDropdown, DropdownMenu, DropdownToggle, Container } from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            megaMenu: null,
            aside: null,
            megaMenuOpen: false,
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

    showMegaMenu(key) {
        if(this.state.megaMenuOpen) {
            this.hideMegaMenu(key)
        }
        const item = this.menus.filter(obj => {
            return obj.index === key
        })
        this.setState({
            aside: item[0].item.aside,
            megaMenu: item[0].item.render(),
            megaMenuOpen: true,
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
                navItem = (<UncontrolledDropdown nav inNavbar>
                    <DropdownToggle onMouseEnter={() => this.showMegaMenu(key)} nav>
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
            <Navbar expand="md" fixed='top' color={megaMenuOpen ? styles.navbarMMOpen.backgroundColor : styles.navbar.backgroundColor} light style={styles.navbar}>
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
              <Container fluid style={styles.megaMenu} onMouseLeave={() => hideMegaMenu()}>
                  {aside !== null && aside !== undefined &&
                  <div style={styles.asideWrapper}>
                      <div style={styles.asideImageWrapper}>
                    <Media style={styles.asideImage} object src={aside.brand.image.src} alt={aside.brand.image.title}/>
                      </div>
                      <div style={styles.asideTextWrapper}>
                    <div style={styles.asideHeader}>{aside.header}</div>
                    <div style={styles.asideBody}>{aside.text}</div>
                      </div>
                  </div>
                   }
                  {megaMenu}
              </Container>
          </React.Fragment>
        )
    }
}

const defaultStyles = {
    navbar: {
        fontSize: 25,
        height: '110px',
    },
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
        height: '413px',
        width: '40%',
        position: 'absolute',
        paddingLeft: '20px',
        top: 0,
        zIndex: 10000,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    asideImage: {

    },
    asideImageWrapper: {

    },
    asideTextWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: '20px',
    },
    asideHeader: {
        fontSize: 25,
        margin: '20px',
        marginTop: '15px',
        color: 'grey',
    },
    asideBody: {
        fontSize: 22,
        color: 'tan',
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
