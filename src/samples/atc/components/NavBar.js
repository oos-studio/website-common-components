import React, { Component } from 'react'
import { NavBarAnimated as NavBarComp} from '../../../components'
import { Media, Form, Input, FormGroup} from 'reactstrap'
import DropdownSearch from '../components/DropdownSearch'
import deepmerge from 'deepmerge'
import MegaMenu from '../../../components/MegaMenu'
import '../index.css'
import withSizes from '../../../utils/Sizes'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
    }
  }
  render() {
    const { getStyle } = this.props
    return (
      <NavBarComp items={data.navigation.items} brand={data.navigation.brand} styles={getStyle(styles)} icon={data.navigation.dropdownIcon} useCustomMegaMenu={false} scrolledDropdownIcon={data.navigation.dropdownScrolledIcon} fixed={true} changeOnScroll={true}/>
    )
  }
}

const styles = {
  navbar: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: 150,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 65,
    paddingRight: 35,
    paddingTop: 30,
    paddingBottom: 30,
  },
  brand: {
    padding: 0,
    display: 'flex',
    alignItems: 'center',
  },
  brandImage: {
    small: {
      width: 73,
      height: 50,
    },
    large: {
      width: 376,
      height: 58,
    },
  },
  collapse: {
    flex: 2,
    borderWidth: 0,
    marginLeft: 0,
    paddingLeft: 0,
    marginBottom: 15,
    position: 'relative',
  },
  nav: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-evenly',
    height: 50,
    paddingTop: 5,
    borderLeftWidth: 0,
    paddingLeft: 0,
    maxWidth: 800,
  },
  itemBorder: {
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: '#E86956',
    width: '100%',
  },
  navItem: {
  display: 'flex',
  justifyContent: 'flex-start',
  paddingTop: 10,
},
  navLink: {
    color: '#FFFFFF',
    fontSize: 16,
    whiteSpace: 'nowrap',
    borderBottomWidth: 3,
    borderBottomStyle: 'solid',
    borderBottomColor: 'rgba(0,0,0,0)',
    transition: 'border-bottom-width 0.25s, border-bottom-color 0.25s, color 0.25s',
    hover: {
      color: '#E86956',
      borderBottomColor: '#E86956',
    },
    paddingLeft: 0,
    paddingRight: 0,
  },
  toggle: {
    display: 'flex',
  },
  dropdownItem: {
    color: '#FFFFFF',
    fontSize: 16,
    whiteSpace: 'nowrap',
    borderBottomWidth: 3,
    borderBottomStyle: 'solid',
    borderBottomColor: 'rgba(0,0,0,0)',
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 2,
    paddingTop: 10,
    transition: 'border-bottom-width 0.25s, border-bottom-color 0.25s, color 0.25s',
    hover: {
      color: '#E86956',
      borderBottomColor: '#E86956',
    },
  },
  dropdownIcon: {
    height: 12,
    width: 15,
    marginLeft: 7,
    marginTop: 5,
    alignSelf: 'center',
    transform: '',
    transition: 'transform 0.1s',
    hover: {
      transform: 'rotate(180deg)',
    },
  },
  imageItems: {
    display: 'flex',
    paddingTop: 10,
    paddingLeft: 10,
    marginLeft: 'auto',
  },
  divider: {
    width: 2,
    height: 30,
    position: 'absolute',
    left: 135,
    top: 17,
    opacity: 0,
    backgroundColor: '#FFFFFF',
  },
  search: {
    container: {
      width: 300,
      height: 50,
      backgroundColor: '#EDE8E4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      right: 130,
      marginTop: 10,
      paddingTop: 15,
    },
    form: {
      width: '90%',
    },
    formGroup: {

    },
    input: {
      backgroundColor: 'rgba(0,0,0,0)',
      borderWidth: 0,
      width: '100%',
    },
    shadow: {
      backgroundColor: '#E86956',
      width: 300,
      height: 50,
      position: 'absolute',
      top: 15,
      right: 125,
    },
  },
  scrolled: {
    navbar: {
      height: 65,
      paddingLeft: 35,
      paddingRight: 18,
      backgroundColor: 'rgba(57,57,57,0.9)',
      backdropFilter: 'blur(8px)',
      "-webkit-backdrop-filter": 'blur(8px)',
    },
    collapse: {
      flex: 30,
    },
    nav: {
      justifyContent: 'flex-start',
      paddingLeft: 40,
    },
    navLink: {
      marginRight: 40,
    },
    toggle: {
      marginRight: 40,
      paddingLeft: 0,
      paddingRight: 0,
    }
  },
}

const dropdownMenuStyles = {
  container: {
    backgroundColor: '#EDE8E4',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 5,
    padding: 20,
  },
  defaultColumn: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 0,
  },
  keepFocus: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: '100%',
    height: 10,
    position: 'absolute',
    top: -5,
    left: 0,
  },
  defaultHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#852D3D',
    marginBottom: 10,
    width: '100%',
    borderBottomStyle: 'solid',
    borderBottomColor: '#7D7773',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  defaultLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#562A31',
    padding: 2,
    hover: {
      color: '#E86956',
    }
  },
  markets: {
    container: {
      width: 150,
      height: 200,
      left: 7,
    },
    shadow: {
      backgroundColor: '#E86956',
      width: 150,
      height: 200,
      position: 'absolute',
      top: 10,
      left: 12,
    },
  },
  services: {
    container: {
      width: 500,
      height: 300,
      padding: 30,
      left: 7,
    },
    columns: [],
    shadow: {
      backgroundColor: '#E86956',
      width: 500,
      height: 300,
      position: 'absolute',
      top: 10,
      left: 12,
    },
  },
}

const data = {
  "navigation": {
    "brand": {
      url: '#/',
      image: {
        title: 'ATC Logo',
        src: require('../assets/ATCLogo.png'),
        scrolled: {
          title: 'ATC Logo Small',
          src: require('../assets/ATCLogo_Small.png')
        },
      },
    },
    dropdownIcon: require('../assets/DropdownCaret.png'),
    dropdownScrolledIcon: require('../assets/DropdownCaretScrolled.png'),
    "items": [
      {
        "text": "ABOUT US",
        "url": "#/1",
        "type": "link",
      },
      {
        "text": "MARKETS",
        "url": "#",
        "type": "dropdown",
        align: 'left',
        render: () => {return (
          <React.Fragment>
            <div style={dropdownMenuStyles.keepFocus}>

            </div>
            <div style={dropdownMenuStyles.markets.shadow}>

            </div>
            <MegaMenu id='megamenu' styles={deepmerge(dropdownMenuStyles, dropdownMenuStyles.markets)} columns={[
          {
            heading: '',
            type: 'links',
            links: [
              {
                title: 'RV',
                url: '#/A'
              },
              {
                title: "Marine",
                url: "#/B"
              },
              {
                title: "Trucks",
                url: "#/C"
              },
              {
                title: "Transit",
                url: "#/D"
              },
              {
                title: "Vans",
                url: "#/C"
              },
              {
                title: "Trailers",
                url: "#/D"
              },
            ]
          },
        ]}/>
          </React.Fragment>
        )}
      },
      {
        "text": "SERVICES",
        "url": "#",
        "type": "dropdown",
        align: 'left',
        render: () => { return (
          <React.Fragment>
            <div style={dropdownMenuStyles.keepFocus}>

            </div>
            <div style={dropdownMenuStyles.services.shadow}>

            </div>
            <MegaMenu styles={deepmerge(dropdownMenuStyles, dropdownMenuStyles.services)} columns={[
            {
              heading: 'DESIGN',
              type: 'links',
              links: [
                {
                  title: 'Solum',
                  url: '#/A'
                },
                {
                  title: "Impedit",
                  url: "#/B"
                },
                {
                  title: "Vix Dec",
                  url: "#/C"
                },
              ]
            },
            {
              heading: 'ENGINEERING',
              type: 'links',
              links: [
                {
                  title: 'Scaevola',
                  url: '#/A'
                },
                {
                  title: "Imperdiet",
                  url: "#/B"
                },
                {
                  title: "Laboramus",
                  url: "#/C"
                },
                {
                  title: "Transit",
                  url: "#/D"
                },
                {
                  title: "Vans",
                  url: "#/C"
                },
                {
                  title: "Trailers",
                  url: "#/D"
                },
                {
                  title: "Trailers",
                  url: "#/E"
                },
              ]
            },
            {
              heading: 'MANUFACTURING',
              type: 'links',
              links: [
                {
                  title: 'Solum',
                  url: '#/A'
                },
                {
                  title: "Impedit",
                  url: "#/B"
                },
                {
                  title: "Vix Dec",
                  url: "#/C"
                },
                {
                  title: "Transit",
                  url: "#/D"
                },
                {
                  title: "Vans",
                  url: "#/C"
                },
                {
                  title: "Trailers",
                  url: "#/D"
                },
              ]
            },
          ]}/>
          </React.Fragment>
)}
      },
      {
        "text": "SHOP",
        "url": "#/2",
        "type": "link",
      },
      {
        "text": "NEWS",
        "url": "#/3",
        "type": "link",
      },
      {
        "text": "CONTACT",
        "url": "#/4",
        "type": "link",
      },
      {
        "text": '',
        "url": "#/TEST",
        "type": 'link',
        image: require('../assets/ShoppingCart.png'),
        imageStyles: {
          height: 25,
          width: 25,
          filter: '',
          hover: {
            filter: 'invert(62%) sepia(14%) saturate(3362%) hue-rotate(320deg) brightness(90%) contrast(104%)',
          },
        },
      },
      {
        "text": '',
        "url": "#",
        "type": "dropdown",
        align: 'right',
        image: require('../assets/Search.png'),
        imageStyles: {
          height: 25,
          width: 25,
          filter: '',
          hover: {
            filter: 'invert(62%) sepia(14%) saturate(3362%) hue-rotate(320deg) brightness(90%) contrast(104%)',
          },
        },
        render: <DropdownSearch styles={styles} />
      },
    ],
  }
}

export default withSizes(NavBar)
