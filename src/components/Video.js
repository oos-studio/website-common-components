import React from 'react'

const Video = props => {
  const { autoplay, loop, source, type, styles } = props

  if(autoplay) {
    if(loop) {
      return (
        <video style={styles} controls autoPlay loop>
          <source src={source} type={type}/>
        </video>
      )
    } else {
      return (
        <video style={styles} controls autoPlay>
          <source src={source} type={type}/>
        </video>
      )
    }
  } else if(loop) {
    return (
      <video style={styles} controls loop>
        <source src={source} type={type}/>
      </video>
    )
  } else {
    return (
      <video style={styles} controls>
        <source src={source} type={type}/>
      </video>
    )
  }
}

export default Video
