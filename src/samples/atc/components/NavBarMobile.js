import React, { Component } from 'react'
import { NavBarMobile as NavBarComp } from '../../../components/'
import { NavLink } from 'reactstrap'
import deepmerge from 'deepmerge'
import '../index.css'

class NavBarMobile extends Component {

  componentWillMount() {

  }

  render() {
    return(
      <NavBarComp items={data.navigation.items} brand={data.navigation.brand} styles={styles} icon={data.navigation.dropdownIcon} fixed={true} openToggleIcon={data.navigation.openToggleIcon} closeToggleIcon={data.navigation.closeToggleIcon}/>
    )
  }
}

const marketsData = [
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

const servicesData = [
  {
    heading: 'DESIGN',
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
  }
]

const data = {
  "navigation": {
    "brand": {
      url: '#/',
      image: {
        title: 'ATC Logo',
        src: require('../assets/ATCLogo_mobile.png'),
      },
    },
    dropdownIcon: require('../assets/DropdownCaret.png'),
    openToggleIcon: require('../assets/toggleOpen.png'),
    closeToggleIcon: require('../assets/toggleClose.png'),
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
        render: () => {
          return (
            <div style={styles.markets.container}>
              {marketsData.map(m => {
                return (
                  <div style={styles.markets.itemWrapper}>
                    <NavLink style={styles.markets.item} href={m.url}>{m.title}</NavLink>
                  </div>
                )
              })}
            </div>
          )
        }
      },
      {
        "text": "SERVICES",
        "url": "#",
        "type": "dropdown",
        render: () => {
          return (
            <div style={styles.services.container}>
              {servicesData.map(s => {
                return (
                  <React.Fragment>
                    <div style={styles.services.header}>
                      {s.heading}
                    </div>
                    <div style={styles.services.sectionWrapper}>
                      {s.links.map(l => {
                        return (
                          <div style={styles.services.itemWrapper}>
                            <NavLink style={styles.services.item} href={l.url}>{l.title}</NavLink>
                          </div>
                        )
                      })}
                    </div>
                  </React.Fragment>
                )
              })}
            </div>
          )
        }
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
    ],
  }
}

const styles = {
  container: {
    backgroundColor: 'rgba(57,57,57,0.9)',
    backdropFilter: 'blur(8px)',
    "-webkit-backdrop-filter": 'blur(8px)',
    minWidth: 320,
    height: 65,
  },
  navbar: {
    padding: 0,
    overflow: 'scroll',
  },
  brand: {
  },
  brandImage: {
    marginLeft: 30,
    marginTop: 3,
    width: 300,
    height: 48,
    xxs: {
      width: 245,
      height: 37,
      marginLeft: 15,
    }
  },
  toggler: {
    height: 25,
    width: 25,
    marginRight: 30,
    xxs: {
      marginRight: 15,
    },
  },
  collapse: {
    overflow: 'scroll',
    backgroundColor: '#EDE8E4',
    borderTopWidth: 5,
    borderTopStyle: 'solid',
    borderTopColor: '#E86956',
    paddingTop: 25,
    paddingBottom: 25,
    marginTop: 4,
    height: 'calc(100vh - 65px)',
  },
  nav: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  navItem: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 5,
    paddingRight: 25,
    paddingLeft: 25,
  },
  navLink: {
    width: '100%',
    color: '#852D3D',
    fontSize: 22,
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: '#7D777341',
  },
  dropdownItem: {
    width: '100%',
    color: '#852D3D',
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 22,
    alignItems: 'center',
    paddingLeft: 0,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: '#7D777341',
  },
  ucDropdown: {
    paddingRight: 25,
    paddingLeft: 25,
    width: '100%',
    marginBottom: 5,
  },
  dropdownIcon: {
    height: 15,
    width: 15,
    transform: 'none',
    transition: 'all 0.25s',
    click: {
      transform: 'rotate(180deg)',
    },
  },
  dropdownMenu: {

  },
  markets: {
    container: {
      backgroundColor: '#562A31',
      paddingTop: 25,
      paddingBottom: 15,
      paddingLeft: 25,
      display: 'flex',
      flexDirection: 'column',
      marginLeft: -25,
      marginRight: -25,
      transition: 'height 2s',
    },
    itemWrapper: {
      paddingBottom: 10,
    },
    item: {
      padding: 0,
      margin: 0,
      display: 'inline-block',
      fontSize: 20,
      color: '#EDE8E4',
    },
  },
  services: {
    container: {
      backgroundColor: '#562A31',
      paddingTop: 25,
      paddingBottom: 15,
      paddingLeft: 25,
      display: 'flex',
      flexDirection: 'column',
      marginLeft: -25,
      marginRight: -25,
    },
    sectionWrapper: {
      paddingBottom: 10,
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      fontSize: 22,
      color: '#E86956',
      paddingBottom: 10,
    },
    itemWrapper: {
      paddingBottom: 10,
      display: 'inline-block',
    },
    item: {
      padding: 0,
      margin: 0,
      display: 'inline-block',
      fontSize: 20,
      color: '#EDE8E4',
    },
  },
}

export default NavBarMobile
