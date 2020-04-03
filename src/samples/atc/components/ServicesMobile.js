import React, { Component } from 'react'
import {NavLink} from 'reactstrap'
import gsap, { TweenLite, Power2, TimelineLite } from 'gsap'

class ServicesMobile extends Component {
  state = {
    linkHover: false,
    activeLink: null,
    activeColumn: null,
  }
  hoverLink = (index, colIndex) => {
    this.setState({
      linkHover: true,
      activeLink: index,
      activeColumn: colIndex,
    })
  }
  leaveHoverLink = (index) => {
    this.setState({
      linkHover: false,
      activeLink: null,
      activeColumn: null,
    })
  }
  open = () => {
    const duration = 0.25
    const tl = gsap.timeline({ smoothChildTiming: true, defaults: {duration: duration, ease: Power2.easeOut}})

    tl.to('#servicesContainer', {height: 840, opacity: 1, paddingTop: 25, paddingBottom: 15}, 0)
  }
  close = () => {
    const duration = 0.25
    const tl = gsap.timeline({ smoothChildTiming: true, defaults: {duration: duration, ease: Power2.easeOut}})

    tl.to('#servicesContainer', {opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0}, 0)
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
    const { activeLink, linkHover, activeColumn } = this.state
    const { hoverLink, leaveHoverLink } = this

    return (
      <div id='servicesContainer' style={styles.services.container}>
        {servicesData.map((s, colIndex) => {
          return (
            <React.Fragment>
              <div style={styles.services.header}>
                {s.heading}
              </div>
              <div style={styles.services.sectionWrapper}>
                {s.links.map((l, index) => {
                  return (
                    <div style={styles.services.itemWrapper}>
                      <NavLink onMouseEnter={() => hoverLink(index, colIndex)} onMouseLeave={() => leaveHoverLink(index, colIndex)} style={{
                        ...styles.services.item,
                        color: activeColumn === colIndex && activeLink === index && linkHover &&  styles.services.item.hover ? styles.services.item.hover.color : styles.services.item.color,
                      }} href={l.url}>{l.title}</NavLink>
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
}

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


const styles = {
  services: {
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
      hover: {
        color: '#E86956',
      },
    },
  },
}

export default ServicesMobile
