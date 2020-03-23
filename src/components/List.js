import React, { Component } from 'react'
import mergeStyle from '../utils/StyleMerge'
import { Container } from 'reactstrap'
import ListItem from './ListItem'

class List extends Component {
  render() {
    const {
      items,
      styles,
      renderItems,
    } = this.props

    const totalRenderItems = renderItems.length
    let renderIndex = 0

    return (
      <div style={styles.container}>
        {items.map((item, index) => {
          if (renderIndex >= totalRenderItems) {
            renderIndex = 0
          }
          const listItem = <ListItem style={styles.listItem} key={index} index={index} item={item} render={renderItems[renderIndex]}/>
          renderIndex++
          return listItem
        })}
      </div>
    )
  }
}

const defaultStyles = {
  container: {

  },
  listItem: {
    container: {

    }
  }
}

export default mergeStyle(defaultStyles)(List)
