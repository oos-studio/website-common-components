import React, { Component } from 'react'
import mergeStyle from '../utils/StyleMerge'
import { Row, Col, Container } from 'reactstrap'
import deepmerge from 'deepmerge'

class ImageRowItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      xs: window.innerWidth < 576,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }

  resize = () => {
    const { xs } = this.state

    if (!xs && window.innerWidth < 576) {
      this.setState({
        xs: true
      })
    } else if (xs && window.innerWidth >= 768) {
      this.setState({
        xs: false
      })
    }
  }

  imageColumn = () => {
    const {
      styles,
      imageUrl,
    } = this.props
    const { xs } = this.state

    let imageStyle = styles.image
    let imageColStyle = styles.imageColumn
    if (xs) {
      imageStyle = deepmerge(imageStyle, styles.imageXS)
      imageColStyle = deepmerge(imageColStyle, styles.imageColumnXS)
    }

    return (
      <Col style={imageColStyle} xs={'12'} sm={'auto'} md={'auto'}>
        <img style={imageStyle} src={imageUrl} alt={''}/>
      </Col>
    )
  }

  bodyColumn = () => {
    const {
      styles,
      renderBody,
    } = this.props

    return <Col style={styles.bodyColumn} >{renderBody(this.state.xs)}</Col>
  }

  render() {
    const {
      styles,
      alignImage,
    } = this.props
    const { xs } = this.state
    const {
      bodyColumn,
      imageColumn
    } = this

    const _alignImage = xs ? 'left' : alignImage

    return (
      <Container style={styles.container}>
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
    objectFit: 'cover'
  },
  imageXS: {
    height: 'auto',
    maxHeight: 300,
  },
  imageColumn: {
    width: '48%',
    height: 200,
    padding: 10,
  },
  imageColumnXS: {
    height: 'auto',
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
