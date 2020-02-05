import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import deepmerge from 'deepmerge'

class FullScreenIntro extends Component {
  constructor(props) {
    super(props);

    this.adjustedHeight = 100 - this.props.headerHeight
    this.mergedStyles = {}
  }

  render() {
    const { text, image, styles } = this.props

    this.mergedStyles = deepmerge(defaultStyles, styles)
    this.mergedStyles.fsIntro.height = this.adjustedHeight + 'vh'

    return(
      <Row style={this.mergedStyles.fsIntro}>
          <Col md={6} style={this.mergedStyles.text}>
            {text}
          </Col>
          <Col md={6} style={this.mergedStyles.imageCol}>
            <img src={image.image} alt="Intro" style={this.mergedStyles.image} />
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

export default FullScreenIntro