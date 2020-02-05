import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import mergeStyle from '../utils/StyleMerge'

class FullScreenIntro extends Component {
  render() {
    const { styles } = this.props

    styles.fsIntro.height = 100 - this.props.headerHeight

    return(
      <Row style={this.styles.fsIntro}>
        <Col md={6} style={this.styles.text}>
          {this.props.text}
        </Col>
        <Col md={6} style={this.styles.imageCol}>
          <img src={this.props.image.image} alt="Intro" style={this.styles.image} />
        </Col>
      </Row>
    )
  }
}

const defaultStyles = {
  fsIntro: {

  },
  text: {

  },
  image: {

  },
  imageCol: {

  },
}

FullScreenIntro.defaultProps = {
  headerHeight: 0,
  text: '',
  image: '',
  styles: defaultStyles,
  adjustedHeight: 0
}

export default mergeStyle(defaultStyles)(FullScreenIntro)

