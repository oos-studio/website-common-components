import React, { Component } from 'react'
import mergeStyle from '../utils/StyleMerge'
import { Container, Navbar, NavbarToggler } from 'reactstrap'

class ListPage extends Component {
  render() {
    const {
      styles,
      header,
    } = this.props

    return (
      <Container style={styles.container}>
        {header()}
      </Container>
    )
  }
}

const defaultStyles = {
  container: {

  }
}

export default mergeStyle(defaultStyles)(ListPage)
