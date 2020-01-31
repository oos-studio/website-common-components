import React, { Component } from 'react'
import { Col, Container, Row, } from 'reactstrap'

class Footer extends Component {
  render() {
    const { reactQL } = this.props

    return (
      <Container>
        <Row>
          <Col>
            {reactQL.title}
          </Col>
          <Col>
            {reactQL.description}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Footer
