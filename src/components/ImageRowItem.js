import React, { Component } from 'react'
import mergeStyle from '../utils/StyleMerge'
import { Row, Col, Container } from 'reactstrap'
import withSizes from '../utils/Sizes'
import deepmerge from 'deepmerge'

class ImageRowItem extends Component {
  constructor(props) {
    super(props)
  }

  imageColumn = () => {
    const {
      styles,
      imageUrl,
      getStyle,
    } = this.props

    return (
      <Col style={getStyle(styles.imageColumn)} xs={'12'} sm={'auto'} md={'auto'}>
        <img style={getStyle(styles.image)} src={imageUrl} alt={''}/>
      </Col>
    )
  }

  bodyColumn = () => {
    const {
      styles,
      renderBody,
    } = this.props

    return <Col style={styles.bodyColumn} >{renderBody(this.props.xs)}</Col>
  }

  render() {
    const {
      styles,
      alignImage,
    } = this.props
    const { xs } = this.props
    const {
      bodyColumn,
      imageColumn
    } = this

    const _alignImage = xs ? 'left' : alignImage

    return (
      <Container fluid style={styles.container}>
        <Row style={styles.row}>
          {_alignImage === 'right' ?
            bodyColumn():
            imageColumn()
          }
          {_alignImage === 'right' ?
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
    objectFit: 'cover',
    xs: {
      height: 'auto',
      maxHeight: 300,
    }
  },
  imageColumn: {
    width: '48%',
    height: 200,
    padding: 10,
    xs: {
      height: 'auto',
    }
  },
  bodyColumn: {
    padding: 10,
  },
}

ImageRowItem.defaultProps = {
  alignImage: 'left',
  renderBody: () => {},
}

export default mergeStyle(defaultStyles)(withSizes(ImageRowItem))
