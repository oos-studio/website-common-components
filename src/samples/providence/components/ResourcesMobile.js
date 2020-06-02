import React, { Component } from 'react'
import {NavLink} from 'reactstrap'
import gsap, { TweenLite, Power2, TimelineLite } from 'gsap'
import { ImageCenteredText } from '../../../components/index'

class ResourcesMobile extends Component {
  open = () => {
    const duration = 0.25
    const tl = gsap.timeline({ smoothChildTiming: true, defaults: {duration: duration, ease: Power2.easeOut}})

    tl.to('#resourcesContainer', {display: 'flex',}, 0)
    tl.to('#resourcesContainer', {height: 'auto', paddingTop: 15,}, 0)
    tl.to('#resourcesContainer', {opacity: 1,}, 0)
  }
  close = () => {
    const duration = 0.25
    const tl = gsap.timeline({ smoothChildTiming: true, defaults: {duration: duration, ease: Power2.easeOut}})

    tl.to('#resourcesContainer', {display: 'none',}, duration)
    tl.to('#resourcesContainer', {opacity: 0,}, 0)
    tl.to('#resourcesContainer', {height: 0, paddingTop: 0,}, 0)
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
    return (
      <div id='resourcesContainer' style={styles.container}>
        {resourcesData.map((r, index) => {
          return (
            <div style={styles.imgWrapper}>
              <ImageCenteredText image={r.image} text={r.title} styles={styles.img} />
            </div>
          )
        })}
      </div>
    )
  }
}

const resourcesData = [
  {
    image: {
      image: 'https://picsum.photos/1920/1080'
    },
    title: 'Sermons',
  },
  {
    image: {
      image: 'https://picsum.photos/1920/1080'
    },
    title: 'Blog',
  },
]

const styles = {
  container: {
    display: 'none',
    flexDirection: 'column',
    width: '100%',
    height: 0,
    opacity: 0,
    paddingBottom: 0,
    paddingTop: 0,
    maxHeight: 400,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img: {
    container: {
      width: '100%',
      padding: 0,
      marginTop: 10,
    },
    image: {
      objectFit: 'cover',
      width: '100%',
      maxWidth: 500,
      height: 150,
    },
    text: {
      fontSize: 35,
      color: '#FFFFFF',

    },
  },
}

export default ResourcesMobile
