import React, { Component } from 'react'
import mergeStyle from '../utils/StyleMerge'
import { Container } from 'reactstrap'

class ListItem extends Component {
  render() {
    const {
      index,
      item,
      render,
      styles
    } = this.props

    return (
      <div style={styles.container}>
        {render(item, index)}
      </div>
    )
  }
}

const defaultStyles = {
  container: {

  }
}

export default mergeStyle(defaultStyles)(ListItem)
