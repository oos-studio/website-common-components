import React, { Component } from 'react'
import { NavBar as NavBarComp} from '../../../components'
import deepmerge from 'deepmerge'
import MegaMenu from '../../../components/MegaMenu'

class NavBar extends Component {
  render() {
    const { isMobile } = this.props

    const activeStyles = isMobile ? deepmerge(styles, styles.mobile) : styles

    return (
      <NavBarComp items={data.navigation.items} brand={data.navigation.brand} styles={activeStyles} icon={data.navigation.dropdownIcon}/>
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
  },
  brand: {

  },
  brandImage: {

  },
  collapse: {

  },
  nav: {

  },
  navLink: {

  },
  dropdownItem: {

  },
  asideWrapper: {

  },
  asideHeader: {

  },
  asideBody: {

  },
  asideImage: {
  },
  megaMenu: {
  }
}

const megaMenuStyles = {
  container: {
    backgroundColor: '#EDE8E4',
    display: 'flex',
    alignItems: 'flex-start',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  markets: {
    container: {
      width: 150,
    },
  },
  services: {
    container: {
      width: 580,
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
        src: '',
      },
    },
    dropdownIcon:'',
    "items": [
      {
        "text": "ABOUT US",
        "url": "#/1",
        "type": "link"
      },
      {
        "text": "MARKETS",
        "url": "#",
        "type": "dropdown",
        render: () => <MegaMenu styles={deepmerge(megaMenuStyles, megaMenuStyles.markets)} columns={[
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
      },
      {
        "text": "SERVICES",
        "url": "#",
        "type": "dropdown",
        render: () => <MegaMenu styles={deepmerge(megaMenuStyles, megaMenuStyles.services)} columns={[
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
      },
      {
        "text": "SHOP",
        "url": "#/2",
        "type": "link"
      },
      {
        "text": "NEWS",
        "url": "#/3",
        "type": "link"
      },
      {
        "text": "CONTACT",
        "url": "#/4",
        "type": "link"
      },
    ],
  }
}

export default NavBar
