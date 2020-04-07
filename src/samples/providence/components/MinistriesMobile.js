import React, { Component } from 'react'
import {NavLink} from 'reactstrap'
import gsap, { TweenLite, Power2, TimelineLite } from 'gsap'

class MinistriesMobile extends Component {
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

    tl.to('#ministriesContainer', {height: 400, opacity: 1, paddingTop: 25, paddingBottom: 15}, 0)
  }
  close = () => {
    const duration = 0.25
    const tl = gsap.timeline({ smoothChildTiming: true, defaults: {duration: duration, ease: Power2.easeOut}})

    tl.to('#ministriesContainer', {opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0}, 0)
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
      <div id='ministriesContainer' style={styles.container}>
          <div style={styles.linkWrapper}>
            {ministriesData.map((m, index) => {
              return (
                <div style={styles.link}>
                  <NavLink onMouseEnter={() => hoverLink(index)} onMouseLeave={() => leaveHoverLink(index)} style={{
                    ...styles.link,
                    color: activeLink === index && linkHover &&  styles.link.hover ? styles.link.hover.color : styles.link.color,
                  }} href={m.url}>{m.title}</NavLink>
                </div>
              )
            })}
          </div>
      </div>
    )
  }
}

const ministriesData = [
  {
    title: 'Worship',
    url: '#/A'
  },
  {
    title: "Workshops",
    url: "#/B"
  },
  {
    title: "Small Groups",
    url: "#/C"
  },
  {
    title: "Children",
    url: "#/D"
  },
  {
    title: "Youth",
    url: "#/C"
  },
  {
    title: "Women",
    url: "#/C"
  },
  {
    title: "Men",
    url: "#/D"
  },
  {
    title: "Missions",
    url: "#/C"
  },
]

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 0,
    opacity: 0,
  },
  linkWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingTop: 25,
    paddingBottom: 25,
  },
  link: {
    fontSize: 22,
    color: '#6A5B5D',
    hover: {
      color: '#D07D3C',
    }
  },
}

export default MinistriesMobile
