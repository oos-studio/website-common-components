import React, { Component } from 'react'
import {NavLink} from 'reactstrap'
import gsap, { TweenLite, Power2, TimelineLite } from 'gsap'

class MarketsMobile extends Component {
  state = {
    linkHover: false,
    activeLink: null,
  }
  hoverLink = (index) => {
    this.setState({
      linkHover: true,
      activeLink: index,
    })
  }
  leaveHoverLink = (index) => {
    this.setState({
      linkHover: false,
      activeLink: null,
    })
  }
  open = () => {
    const duration = 0.25
    const tl = gsap.timeline({ smoothChildTiming: true, defaults: {duration: duration, ease: Power2.easeOut}})

    tl.to('#marketsContainer', {height: 280, opacity: 1, paddingTop: 25, paddingBottom: 15}, 0)
  }
  close = () => {
    const duration = 0.25
    const tl = gsap.timeline({ smoothChildTiming: true, defaults: {duration: duration, ease: Power2.easeOut}})

    tl.to('#marketsContainer', {opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0}, 0)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.display !== this.props.display) {
      if(this.props.display) {
        this.open()
      } else {
        this.close()
      }
    }
  }

  render() {
    const { activeLink, linkHover } = this.state
    const { hoverLink, leaveHoverLink } = this

    return (
      <div id='marketsContainer' style={styles.markets.container}>
        {marketsData.map((m, index) => {
          return (
            <div style={styles.markets.itemWrapper}>
              <NavLink onMouseEnter={() => hoverLink(index)} onMouseLeave={() => leaveHoverLink(index)} style={{
                ...styles.markets.item,
                color: activeLink === index && linkHover &&  styles.markets.item.hover ? styles.markets.item.hover.color : styles.markets.item.color,
              }} href={m.url}>{m.title}</NavLink>
            </div>
          )
        })}
      </div>
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

const styles = {
  markets: {
    container: {
      height: 0,
      opacity: 0,
      backgroundColor: '#562A31',
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 25,
      display: 'flex',
      flexDirection: 'column',
      marginLeft: -25,
      marginRight: -25,
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
      hover: {
        color: '#E86956',
      },
    },
  },
}

export default MarketsMobile
