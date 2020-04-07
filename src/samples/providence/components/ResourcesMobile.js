import React, { Component } from 'react'
import {NavLink} from 'reactstrap'
import gsap, { TweenLite, Power2, TimelineLite } from 'gsap'
import { ImageCenteredText } from '../../../components/index'

class ResourcesMobile extends Component {
  open = () => {
    const duration = 0.25
    const tl = gsap.timeline({ smoothChildTiming: true, defaults: {duration: duration, ease: Power2.easeOut}})

    tl.to('#resourcesContainer', {height: 400, opacity: 1, paddingTop: 25, paddingBottom: 15}, 0)
  }
  close = () => {
    const duration = 0.25
    const tl = gsap.timeline({ smoothChildTiming: true, defaults: {duration: duration, ease: Power2.easeOut}})

    tl.to('#resourcesContainer', {opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0}, 0)
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
              <ImageCenteredText text={r.title} image={r.image} styles={styles.item}/>
          )
        })}
      </div>
    )
  }
}

const resourcesData = [
  {
    image: {
      image: 'https://picsum.photos/200'
    },
    title: 'Sermons',
  },
  {
    image: {
      image: 'https://picsum.photos/200'
    },
    title: 'Blog',
  },
]

const styles = {
  container: {
    width: '100%',
    height: 0,
    opacity: 0,
    paddingBottom: 25,
  },
  item: {
    container: {
      marginTop: 15,
      width: '100%',
      height: '100%',
      padding: 0,
    },
    text: {
      color: '#6A5B5D',
      fontSize: 45,
    }
  },
}

export default ResourcesMobile
