import React, { Component } from 'react'
import mergeStyle from '../utils/StyleMerge'
import { Container } from 'reactstrap'
import Header from './Header'
import List from './List'

class ListPage extends Component {
  render() {
    const {
      styles,
      header,
      list,
    } = this.props

    return (
      <div style={styles.page}>
        {typeof(header) === 'object' ? <Header {...header}/> : null}
        <div style={styles.contentSection}>
          <div style={styles.contentContainer}>
            <List {...list}/>
          </div>
        </div>
      </div>
    )
  }
}

const defaultStyles = {
  pageContainer: {
  },
  contentSection: {
    backgroundColor: 'white',
    position: 'relative',
    left: 0,
    right: 0,
  },
  contentContainer: {
    margin: 'auto',
    maxWidth: 650,
  }
}

export default mergeStyle(defaultStyles)(ListPage)
