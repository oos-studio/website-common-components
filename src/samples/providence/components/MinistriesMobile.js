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

    tl.to('#ministriesContainer', {display: 'flex',}, 0)
    tl.to('#ministriesContainer', {height: 'auto', paddingTop: 25,}, 0)
    tl.to('#ministriesContainer', {opacity: 1,}, duration)

  }
  close = () => {
    const duration = 0.25
    const tl = gsap.timeline({ smoothChildTiming: true, defaults: {duration: duration, ease: Power2.easeOut}})

    tl.to('#ministriesContainer', {opacity: 0,}, 0)
    tl.to('#ministriesContainer', {height: 0, paddingTop: 0, marginBottom: 0}, duration / 3)
    tl.to('#ministriesContainer', {display: 'none',}, duration)
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
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 0,
    opacity: 0,
    maxHeight: 250,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
  },
  linkWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  link: {
    fontSize: 20,
    color: '#6A5B5D',
    hover: {
      color: '#D07D3C',
    }
  },
}

export default MinistriesMobile
