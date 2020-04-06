import React, {Component} from 'react'
import CrossfadeImage from 'react-crossfade-image'
import '../App.css'

class FadeImages extends Component {
  state = {
    activeImage: 0,
  }
  componentDidMount() {
    const { duration } = this.props
    const { changeImage } = this
   setInterval(() => {
      changeImage()
    }, duration)
  }
  changeImage = () => {
    const { slides } = this.props
    const { activeImage } = this.state

    const newActive = activeImage === slides.length - 1 ? 0 : activeImage + 1

    this.setState({
      activeImage: newActive,
    })
  }
  render() {
    const { slides, transitionDuration } = this.props
    const { activeImage } = this.state

    return(
      <div id='container' style={styles.container}>
        <div style={styles.content}>
          <div style={styles.titleWrapper}>
          {Array.isArray(slides[activeImage].title) ?
              slides[activeImage].title.map(t => {
                return (
                  <div style={styles.title}>
                    {t}
                  </div>
                )
              })
            :
            <div style={styles.title}>
              {slides[activeImage].title}
            </div>
          }
          </div>
        </div>
        <CrossfadeImage style={styles.img} src={slides[activeImage].source} duration={transitionDuration}/>
      </div>
    )
  }
}

const styles = {
  container: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  img: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  content: {
    zIndex: 10000,
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
    color: 'white',
  }
}

export default FadeImages
