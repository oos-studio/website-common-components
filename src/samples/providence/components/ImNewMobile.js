import React, { Component } from 'react'
import {NavLink} from 'reactstrap'
import gsap, { TweenLite, Power2, TimelineLite } from 'gsap'

class ImNewMobile extends Component {
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

    tl.to('#imNewContainer', {display: 'flex',}, 0)
    tl.to('#imNewContainer', {height: 'auto', paddingTop: 25,}, 0)
    tl.to('#imNewContainer', {opacity: 1,}, duration)
  }
  close = () => {
    const duration = 0.25
    const tl = gsap.timeline({ smoothChildTiming: true, defaults: {duration: duration, ease: Power2.easeOut}})

    tl.to('#imNewContainer', {opacity: 0,}, 0)
    tl.to('#imNewContainer', {height: 0, paddingTop: 0,}, duration / 2)
    tl.to('#imNewContainer', {display: 'none',}, duration / 2)
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
      <div id='imNewContainer' style={styles.container}>
        <div style={styles.linkWrapper}>
        {imNewData.map((i, index) => {
          return (
            <div style={styles.link}>
              <NavLink onMouseEnter={() => hoverLink(index)} onMouseLeave={() => leaveHoverLink(index)} style={{
                ...styles.link,
                color: activeLink === index && linkHover &&  styles.link.hover ? styles.link.hover.color : styles.link.color,
              }} href={i.url}>{i.title}</NavLink>
            </div>
          )
        })}
        </div>
        <div id='timeWrapper' style={styles.timeWrapper}>
          <div style={styles.timeWrapper.header}>
            SERVICE TIMES & LOCATION
          </div>
          <div style={styles.timeWrapper.divider}>

          </div>
          <div style={styles.timeWrapper.info}>
            <div><b>9 a.m. Workshops</b> (Fall - Spring)</div>
          </div>
          <div style={styles.timeWrapper.info}>
            <div><b>10 & 11:30 a.m. Worship</b></div>
          </div>
        </div>
        <div style={styles.mapWrapper}>
        </div>
      </div>
    )
  }
}

const imNewData = [
  {
    title: 'Beliefs',
    url: '#/A'
  },
  {
    title: "Values",
    url: "#/B"
  },
  {
    title: "Leadership",
    url: "#/C"
  },
  {
    title: "Next Steps",
    url: "#/D"
  },
  {
    title: "History",
    url: "#/C"
  },
]

const styles = {
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 0,
    opacity: 0,
    paddingTop: 0,
    paddingBottom: 0,
    display: 'none',
  },
  linkWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingBottom: 25,
    maxHeight: 200,
  },
  link: {
    fontSize: 22,
    color: '#6A5B5D',
    hover: {
      color: '#D07D3C',
    }
  },
  timeWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 25,
    header: {
      textAlign: 'center',
      whiteSpace: 'nowrap',
      color: '#6A5B5D',
      fontSize: 20,
      marginBottom: 25,
    },
    divider: {
      height: 1,
      backgroundColor: '#6A5B5D',
      width: '100%',
      marginBottom: 25,
      opacity: 0.5,
    },
    info: {
      marginBottom: 10,
      textAlign: 'center',
      color: '#6A5B5D',
      fontSize: 16,
    },
  },
  mapWrapper: {
    width: '100%',
    map: {
      container: {
        backgroundColor: 'blue',
        marginLeft: -25,
        marginRight: -25,
      },
    },
  },
}

export default ImNewMobile
