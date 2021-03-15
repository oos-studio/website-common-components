import React from 'react'

const Video = props => {
  const { controls, autoplay, loop, source, type, styles } = props
  const _autoplay = autoplay === "true"
  const _loop = loop === "true"
  const _controls = controls === "true"

  if(_autoplay) {
    if(_loop) {
      if(_controls) {
        return (
          <video muted autoPlay loop controls style={styles}>
            <source src={source} type={type} />
          </video>
        )
      } else {
        return (
          <video muted autoPlay loop style={styles}>
            <source src={source} type={type} />
          </video>
        )
      }
    } else if (_controls) {
      return (
        <video muted autoPlay controls style={styles}>
          <source src={source} type={type}/>
        </video>
      )
    } else {
      return (
        <video muted autoPlay style={styles}>
          <source src={source} type={type} />
        </video>
      )
    }
  } else if(_loop) {
    if(_controls) {
      return (
        <video muted loop controls style={styles}>
          <source src={source} type={type} />
        </video>
      )
    } else {
      return (
        <video muted loop style={styles}>
          <source src={source} type={type} />
        </video>
      )
    }
  } else if (_controls) {
    return (
      <video muted controls style={styles}>
        <source src={source} type={type} />
      </video>
    )
  } else {
    return (
      <video muted style={styles}>
        <source src={source} type={type} />
      </video>
    )
  }
}

export default Video
