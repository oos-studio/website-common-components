import React, { Component } from 'react'
import { NavBarMobile as NavBarComp } from '../../../components/'
import { NavLink } from 'reactstrap'
import deepmerge from 'deepmerge'
import '../index.css'
import gsap, {Power2} from 'gsap'
import MarketsMobile from '../../atc/components/MarketsMobile'
import ServicesMobile from '../../atc/components/ServicesMobile'

class NavBarMobile extends Component {
  toggleCollapse = (open) => {

    const duration = 0.25
    const tl = gsap.timeline({ smoothChildTiming: true, defaults: {duration: duration, ease: Power2.easeOut}})

    if(open) {
      document.getElementById('mobileCollapse').style.borderTopWidth = '5px'
      tl.to('#mobileCollapse', {
        height: 'calc(100vh - 65px)',
        paddingTop: 25,
        paddingBottom: 25,
        marginTop: 4,
      }, 0)
    } else {
      document.getElementById('mobileCollapse').style.borderTopWidth = '0px'
      tl.to('#mobileCollapse', {
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
      }, 0)
    }
  }
  render() {
    return(
      <NavBarComp items={data.navigation.items} brand={data.navigation.brand} styles={styles} icon={data.navigation.dropdownIcon} fixed={true} openToggleIcon={data.navigation.openToggleIcon} toggleCollapse={this.toggleCollapse} closeToggleIcon={data.navigation.closeToggleIcon}/>
    )
  }
}

const data = {
  "navigation": {
    "brand": {
      url: '#/',
      image: {
        title: 'Providence Logo',
        src: require('../assets/ProvidenceLogo.png'),
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
        menu: (d) => {return <MarketsMobile display={d}/>}
      },
      {
        "text": "SERVICES",
        "url": "#",
        "type": "dropdown",
        menu: (d) => {return <ServicesMobile display={d}/>}
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
    borderTopWidth: 0,
    borderTopStyle: 'solid',
    borderTopColor: '#E86956',
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    height: 0,
    width: '100%',
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
}

export default NavBarMobile
