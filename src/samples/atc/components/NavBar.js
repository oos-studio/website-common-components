import React, { Component } from 'react'
import { NavBar as NavBarComp} from '../../../components'
import { Media, Form, Input, FormGroup} from 'reactstrap'
import deepmerge from 'deepmerge'
import MegaMenu from '../../../components/MegaMenu'
import '../index.css'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
    }
  }
  render() {
    const { isMobile } = this.props

    const activeStyles = isMobile ? deepmerge(styles, styles.mobile) : styles

    return (
      <NavBarComp items={data.navigation.items} brand={data.navigation.brand} styles={activeStyles} icon={data.navigation.dropdownIcon} useCustomMegaMenu={false} fixed={true} changeOnScroll={true}/>
    )
  }
}

const styles = {
  mmOpen: {
    navbar: {
    },
    nav: {
    },
    mmBackground: {

    },
  },
  mmBackground: {

  },
  navbar: {
    paddingBottom: 25,
    backgroundColor: 'rgba(0,0,0,0)',
    height: 150,
    paddingTop: 10,
    paddingLeft: 60,
  },
  brand: {

  },
  brandImage: {
  },
  collapse: {

  },
  nav: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  navLink: {
    color: '#FFFFFF',
    fontSize: 16,
    whiteSpace: 'nowrap',
    borderBottomColor: '#E86956',
    marginRight: 15,
    hover: {
      color: '#E86956',
    },
  },
  dropdownItem: {
    color: '#FFFFFF',
    fontSize: 16,
    whiteSpace: 'nowrap',
    borderBottomColor: '#E86956',
    marginRight: 15,
    hover: {
      color: '#E86956',
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
  mobile: {

  },
  scrolled: {
    navbar: {
      backgroundColor: '#000000',
      paddingTop: 35,
    },
    nav: {
      borderLeftWidth: 2,
      borderLeftStyle: 'solid',
      borderLeftColor: '#FFFFFF',
      marginLeft: 10,
      paddingLeft: 10,
    },
    brand: {
      marginLeft: 35,
    },
    brandImage: {

    },
    navItem: {
    },
    navLink: {
      hover: {
        color: '#FFFFFF',
      },
    },
    collapse:{

    },
    dropdownItem: {
      hover: {
        color: '#FFFFFF',
      },
    },
  },
}

const megaMenuStyles = {
  container: {
    backgroundColor: '#EDE8E4',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 20,
    marginTop: 10,
  },
  defaultColumn: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 0,
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
    },
    shadow: {
      backgroundColor: '#E86956',
      width: 150,
      height: 200,
      position: 'absolute',
      top: 15,
      left: 5,
    },
  },
  services: {
    container: {
      width: 500,
      height: 300,
      padding: 30,
    },
    columns: [],
    shadow: {
      backgroundColor: '#E86956',
      width: 500,
      height: 300,
      position: 'absolute',
      top: 15,
      left: 5,
    },
  },
  mobile: {

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
    dropdownIcon: require("../assets/DropdownCaret.png"),
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
            <div style={megaMenuStyles.markets.shadow}>

            </div>
            <MegaMenu styles={deepmerge(megaMenuStyles, megaMenuStyles.markets)} columns={[
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
            <div style={megaMenuStyles.services.shadow}>

            </div>
            <MegaMenu styles={deepmerge(megaMenuStyles, megaMenuStyles.services)} columns={[
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
        "url": '',
        "type": 'spacer',
        "maxWidth": '60%',
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

export default NavBar
