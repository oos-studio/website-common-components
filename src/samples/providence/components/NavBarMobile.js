import React, { Component } from 'react'
import { NavBarMobile as NavBarComp } from '../../../components/'
import { NavLink } from 'reactstrap'
import deepmerge from 'deepmerge'
import '../index.css'
import gsap, {Power2} from 'gsap'
import MarketsMobile from '../../atc/components/MarketsMobile'
import ServicesMobile from '../../atc/components/ServicesMobile'
import ImNewMobile from './ImNewMobile'
import MinistriesMobile from './MinistriesMobile'
import ResourcesMobile from './ResourcesMobile'

class NavBarMobile extends Component {
  toggleCollapse = (open) => {

    const duration = 0.25
    const tl = gsap.timeline({ smoothChildTiming: true, defaults: {duration: duration, ease: Power2.easeOut}})

    if(open) {
      tl.to('#mobileCollapse', {
        height: 'auto',
      }, 0)
    } else {
      tl.to('#mobileCollapse', {
        height: 0,
      }, 0)
    }
  }
  render() {
    return(
      <NavBarComp items={data.navigation.items} brand={data.navigation.brand} styles={styles} icon={data.navigation.dropdownIcon} fixed={false} openToggleIcon={data.navigation.openToggleIcon} toggleCollapse={this.toggleCollapse} closeToggleIcon={data.navigation.closeToggleIcon} lockBodyScroll={false}/>
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
        "text": "I'm New",
        "url": "#",
        "type": "dropdown",
        menu: (d) => {return <ImNewMobile display={d}/>}
      },
      {
        "text": "Ministries",
        "url": "#",
        "type": "dropdown",
        menu: (d) => {return <MinistriesMobile display={d}/>}
      },
      {
        "text": "Resources",
        "url": "#",
        "type": "dropdown",
        menu: (d) => {return <ResourcesMobile display={d}/>}
      },
      {
        "text": "Calendar",
        "url": "#/3",
        "type": "link",
      },
      {
        "text": "Giving",
        "url": "#/4",
        "type": "link",
      },
    ],
  }
}

const styles = {
  container: {
    backgroundColor: '#FFFFFF',
    backdropFilter: 'blur(8px)',
    "-webkit-backdrop-filter": 'blur(8px)',
    minWidth: 320,
    height: 90,
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
    width: 200,
    height: 'auto',
  },
  toggler: {
    height: 25,
    width: 25,
    marginRight: 30,
  },
  collapse: {
    overflow: 'scroll',
    backgroundColor: '#FFFFFF',
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
    marginBottom: 10,
    paddingRight: 25,
    paddingLeft: 25,
  },
  navLink: {
    width: '100%',
    color: '#6A5B5D',
    fontSize: 22,
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: '#6A5B5D',
  },
  dropdownItem: {
    width: '100%',
    color: '#6A5B5D',
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 22,
    alignItems: 'center',
    paddingLeft: 0,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: '#6A5B5D',
  },
  ucDropdown: {
    paddingRight: 25,
    paddingLeft: 25,
    width: '100%',
    marginBottom: 10,
  },
  dropdownIcon: {
    height: 'auto',
    width: 20,
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
