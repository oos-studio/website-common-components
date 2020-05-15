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
      renderAboveList,
      renderBelowList,
    } = this.props

    return (
      <div style={styles.pageContainer}>
        {typeof(header) === 'object' ? <Header {...header}/> : null}
        <div style={styles.contentSection}>
          <div style={styles.contentContainer}>
            {renderAboveList()}
            <List {...list}/>
            {renderBelowList()}
          </div>
        </div>
      </div>
    )
  }
}

ListPage.defaultProps = {
  renderAboveList: () => null,
  renderBelowList: () => null,
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
    width: '100%',
  }
}

export default mergeStyle(defaultStyles)(ListPage)
