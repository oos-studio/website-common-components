import React, { Component } from 'react'
import mergeStyle from '../utils/StyleMerge'
import { Row, Col, Container } from 'reactstrap'
import withSizes from '../utils/Sizes'
import deepmerge from 'deepmerge'

class ImageRowItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      overImage: false,
    }
  }

  onMouseOver = () => {
    this.setState({
      overImage: true,
    })
  }

  onMouseLeave = () => {
    this.setState({
      overImage: false,
    })
  }

  imageColumn = () => {
    const {
      styles,
      imageUrl,
      getStyle,
      stack,
      imageProps,
      imageHoverStyles,
      imageWrapperHoverStyles,
    } = this.props
    const { overImage } = this.state

    let xs = 'auto'
    let sm = 'auto'
    let md = 'auto'

    switch(stack) {
      case 'xs':
        xs = '12'
        break
      case 'sm':
        sm = '12'
        xs = '12'
        break
      case 'md':
        md = '12'
        sm = '12'
        xs = '12'
        break
      default:
        xs = '12'
        break
    }

    const imageStyles = overImage ? imageHoverStyles : {}
    const imageWrapperStyles = overImage ? imageWrapperHoverStyles : {}

    const image = {
      ...styles.image,
      ...imageStyles,
    }
    const imageWrapper = {
      ...styles.imageWrapper,
      ...imageWrapperStyles,
    }

    return (
      <Col style={getStyle(styles.imageColumn)} xs={xs} sm={sm} md={md}>
        <div style={getStyle(imageWrapper)}>
          <img {...imageProps} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave} style={getStyle(image)} src={imageUrl} alt={''}/>
        </div>
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
      sm,
      xs,
      md,
      stack,
    } = this.props
    const {
      bodyColumn,
      imageColumn
    } = this

    let _alignImage = ''

    switch(stack) {
      case 'xs':
        _alignImage = xs ? 'left' : alignImage
        break
      case 'sm':
        _alignImage = sm ? 'left' : alignImage
        break
      case 'md':
        _alignImage = md ? 'left' : alignImage
        break
      default:
        _alignImage = xs ? 'left' : alignImage
        break
    }

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
    //transform: 'scale(1.15)',
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
  imageWrapper: {
    overflow: 'hidden',
    height: '100%',
  },
  bodyColumn: {
    padding: 10,
  },
}

ImageRowItem.defaultProps = {
  alignImage: 'left',
  renderBody: () => {},
  imageHoverStyles: {},
  imageWrapperStyles: {},
}

export default mergeStyle(defaultStyles)(withSizes(ImageRowItem))
