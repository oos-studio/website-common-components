import React, { Component} from 'react'
import { Container, Col, Row} from 'reactstrap'
import mergeStyle from '../utils/StyleMerge'

class Footer extends Component {

  getColumnStyle = index => {
    const { styles } = this.props
    let columnStyle = styles.defaultColumn
    if (styles.columns[index]) {
      if ('column' in styles.columns[index]) {
        //columnStyle = mergeStyles(styles.defaultColumn, styles.columns[index].column)
      }
    }
    return columnStyle
  }

  renderColumn = (column, index) => {

  }

  render() {
    const { styles, columns } = this.props
    return (
      <Container style={styles.container}>
        {columns.map((column, index) => {
          const columnStyle = this.getColumnStyle(index)
          return (
            <Col key={index} style={columnStyle}>
              {this.renderColumn(column, index)}
            </Col>
          )
        })}
      </Container>
    )
  }
}

const defaultStyles = {
  defaultColumn: {

  },
}

Footer.defaultProps = {

}



export default mergeStyle(defaultStyles)(Footer)
