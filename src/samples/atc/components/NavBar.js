import React, { Component } from 'react'
import { NavBarAnimated as NavBarComp} from '../../../components'
import { Media, Form, Input, FormGroup} from 'reactstrap'
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
      <NavBarComp items={data.navigation.items} brand={data.navigation.brand} styles={getStyle(styles)} icon={data.navigation.dropdownIcon} iconScrolled={data.navigation.dropdownIconScrolled} useCustomMegaMenu={false} fixed={true} changeOnScroll={true}/>
    )
  }
}

const styles = {
  xl: {
    nav: {
      minWidth: 650,
      maxWidth: 650,
    },
    imageItems: {
    //  minWidth: 175,
    //  maxWidth: 175,
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      marginRight: 30,
      borderRightWidth: 0,
      paddingRight: 0,
    },
    imageStyles: {
      marginLeft: 20,
    },
    scrolled: {
      navbar: {
        height: 75,
        backgroundColor: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(8px)',
        "-webkit-backdrop-filter": 'blur(8px)',
        paddingLeft: 30,
        paddingRight: 15,
      },
      brand: {
        marginRight: 15,
        borderRightWidth: 2,
        borderRightStyle: 'solid',
        borderRightColor: '#FFFFFF',
        paddingRight: 110,
      },
      collapse: {
        paddingTop: 5,
        marginLeft: -10,
      },
    }
  },
  lg: {
    navbar: {
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      borderRightWidth: 0,
      paddingRight: 0,
      marginRight: 25,
    },
    nav: {
      justifyContent: 'space-evenly',
    },
    navItem: {
      marginRight: 10,
    },
    dropdownIcon: {
      marginRight: 10,
    },
    scrolled: {
      navbar: {
        height: 75,
        backgroundColor: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(8px)',
        "-webkit-backdrop-filter": 'blur(8px)',
        paddingLeft: 30,
        paddingRight: 15,
      },
      brand: {
        marginRight: 15,
        borderRightWidth: 2,
        borderRightStyle: 'solid',
        borderRightColor: '#FFFFFF',
        paddingRight: 110,
      },
      collapse: {
        paddingTop: 5,
        marginLeft: -10,
      },
    }
  },
  navbar: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: 150,
    paddingLeft: 100,
    paddingRight: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
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
    borderWidth: 0,
    margin: 0,
    padding: 0,
    marginLeft: 0,
    justifyContent: 'space-between',
  },
  nav: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 0,
    borderLeftWidth: 0,
    flex: 1,
    maxWidth:700,
   // minWidth: 490,
  },
  navItem: {
    marginRight: 35,
  },
  navLink: {
    color: '#FFFFFF',
    fontSize: 16,
    whiteSpace: 'nowrap',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: 'rgba(0,0,0,0)',
    hover: {
      color: '#E86956',
      borderBottomColor: '#E86956',
    },
    padding: 0,
    margin: 0,
  },

  toggle: {
    display: 'flex',
  },
  dropdownItem: {
    color: '#FFFFFF',
    fontSize: 16,
    whiteSpace: 'nowrap',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: 'rgba(0,0,0,0)',
    padding: 0,
    hover: {
      color: '#E86956',
      borderBottomColor: '#E86956',
    },
  },
  dropdownIcon: {
    height: 12,
    width: 15,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 35,
    transform: '',
    transition: 'transform 0.1s',
    hover: {
      transform: 'rotate(180deg)',
    },
  },
  ucDropdown: {
  },
  imageItems: {
    minWidth: 100,
    maxWidth: 100,
    display: 'flex',
    justifyContent: 'space-evenly',
    position: 'relative',
  },
  imageStyles: {
    height: 25,
    width: 25,
    filter: '',
    hover: {
      filter: 'invert(62%) sepia(14%) saturate(3362%) hue-rotate(320deg) brightness(90%) contrast(104%)',
    },
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
      bottom: -60,
      right: 20,
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
      bottom: -65,
      right: 15,
    },
  },
  scrolled: {

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
  },
  markets: {
    container: {
      width: 150,
      height: 200,
      left: 0,
    },
    shadow: {
      backgroundColor: '#E86956',
      width: 150,
      height: 200,
      position: 'absolute',
      top: 10,
      left: 5,
    },
  },
  services: {
    container: {
      width: 500,
      height: 300,
      padding: 30,
      left: 0,
    },
    columns: [],
    shadow: {
      backgroundColor: '#E86956',
      width: 500,
      height: 300,
      position: 'absolute',
      top: 10,
      left: 5,
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
    dropdownIconScrolled: require('../assets/DropdownCaretScrolled.png'),
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
            <MegaMenu styles={deepmerge(dropdownMenuStyles, dropdownMenuStyles.markets)} columns={[
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
      },
      {
        "text": '',
        "url": "#",
        "type": "dropdown",
        align: 'right',
        image: require('../assets/Search.png'),
        render: () => {
          return (
            <React.Fragment>
              <div style={styles.search.shadow}>

              </div>
              <div style={styles.search.container}>
                <Form style={styles.search.form}>
                  <FormGroup style={styles.search.formGroup}>
                    <Input type='text' name='search' id='search' placeholder='Search' style={styles.search.input} />
                  </FormGroup>
                </Form>
              </div>
            </React.Fragment>
          )
        }
      },
    ],
  }
}

export default withSizes(NavBar)
