import React, { Component } from 'react'
import mergeStyle from '../utils/StyleMerge'
import { Row, Col, Container } from 'reactstrap'

class ImageRowItem extends Component {
  imageColumn = () => {
    const {
      styles,
      imageUrl,
    } = this.props

    return (
      <Col style={styles.imageColumn} xs={'12'} sm={'auto'} md={'auto'}>
        <img style={styles.image} src={imageUrl} alt={''}/>
      </Col>
    )
  }

  bodyColumn = () => {
    const {
      styles,
      renderBody,
    } = this.props

    return <Col style={styles.bodyColumn} >{renderBody()}</Col>
  }

  render() {
    const {
      styles,
      alignImage,
    } = this.props
    const {
      bodyColumn,
      imageColumn
    } = this

    return (
      <Container style={styles.container}>
        <Row style={styles.row}>
          {alignImage === 'right' ?
            bodyColumn() :
            imageColumn()
          }
          {alignImage === 'right' ?
            imageColumn() :
            bodyColumn()
          }
        </Row>
      </Container>
    )
  }
}

const defaultStyles = {
  container: {
  },
  row: {

  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  imageColumn: {
    width: '48%',
    height: 200,
    padding: 10,
  },
  bodyColumn: {
    padding: 10,
  },
}

ImageRowItem.defaultProps = {
  alignImage: 'left',
  renderBody: () => {},
}

export default mergeStyle(defaultStyles)(ImageRowItem)
