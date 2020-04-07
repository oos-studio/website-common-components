import React, { Component } from 'react'
import { Container, Media, Col } from 'reactstrap'
import mergeStyle from '../utils/StyleMerge'

class FullScreenIntro extends Component {
  render() {
    const { styles, heightOffset, text, image } = this.props

    return(
      <Container fluid style={{
        ...styles.container,
        height: `calc(100vh - ${heightOffset}px`,
      }}>
        <Col style={styles.textWrapper}>
          {text}
        </Col>
        <Col style={styles.imageWrapper}>
          <Media object src={image.url} alt={image.title} style={styles.image} />
        </Col>
      </Container>
    )
  }
}

const defaultStyles = {
  container: {
    width: '100vw',
    position: 'relative',
    backgroundColor: 'rgb(255, 248, 230)',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  textWrapper: {
    fontSize: 55,
    height: '100%',
    width: '60%',
    marginTop: '2%',
    color: 'rgb(112, 86, 77)',
    position: 'absolute',
    overflow: 'hidden',
  },
  imageWrapper: {
    width: '50%',
    height: '100%',
    right: '5%',
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    "mask-image": 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
    "-webkit-mask-image": '-webkit-gradient(linear, left top, right bottom, from(rgba(0,0,0,0)), to(rgba(0,0,0,1)))'
},
}

FullScreenIntro.defaultProps = {
  text: '',
  image: {},
  heightOffset: 0,
}

export default mergeStyle(defaultStyles)(FullScreenIntro)

