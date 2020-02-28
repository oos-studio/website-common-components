import React, { Component } from 'react'
import {Container, Col, NavLink, Media} from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'
import deepmerge from 'deepmerge'

class MegaMenu extends Component {

  getColumnStyle = index => {
    const { styles } = this.props
    let columnStyle = styles.defaultColumn
    if (styles.columns[index]) {
      if ('column' in styles.columns[index]) {
        columnStyle = deepmerge(styles.defaultColumn, styles.columns[index].column)
      }
    }
    return columnStyle
  }

  getLinkStyle = index => {
    const { styles } = this.props
    let linkStyle = styles.defaultLink
    if (styles.columns[index]) {
      if ('link' in styles.columns[index]) {
        linkStyle = deepmerge(styles.defaultLink, styles.columns[index].link)
      }
    }
    return linkStyle
  }

  getImageStyle = index => {
    const { styles } = this.props
    let imageStyle = styles.defaultImage
    if (styles.columns[index]) {
      if ('image' in styles.columns[index]) {
        imageStyle = deepmerge(styles.defaultImage, styles.columns[index].image)
      }
    }
    return imageStyle
  }

  getHeaderStyle = index => {
    const { styles } = this.props
    let headerStyle = styles.defaultHeader
    if (styles.columns[index]) {
      if ('header' in styles.columns[index]) {
        headerStyle = deepmerge(styles.defaultHeader, styles.columns[index].header)
      }
    }
    return headerStyle
  }

  renderHeader = (column, index) => {
    const headerStyle = this.getHeaderStyle(index)
    return column.heading.length > 0 ? <div style={headerStyle}>{column.heading}</div> : null
  }

  renderColumn = (column, index) => {
    const linkStyle = this.getLinkStyle(index)
    const imageStyle = this.getImageStyle(index)
    switch(column.type) {
      case 'links':
        return (
          <React.Fragment>
            {this.renderHeader(column, index)}
            {column.links.map(link => <NavLink href={link.url}  style={linkStyle}>{link.title}</NavLink>)}
          </React.Fragment>
        )
      case 'image':
        return (
          <React.Fragment>
            {this.renderHeader(column, index)}
            <Media object src={column.src} alt={column.title} style={imageStyle}/>
          </React.Fragment>
        )
      default:
        return (
          <React.Fragment>
            {this.renderHeader(column, index)}
            {column.render()}
          </React.Fragment>
        )
    }
  }

  render() {
    const { styles, columns, hasAside } = this.props
    return (
      <Container fluid style={{
        width: hasAside ? '60%' : '100%',
        float: hasAside ? 'right' : 'none',
        ...styles.container}}>
        {columns.map((column, index) => {
          const columnStyle = this.getColumnStyle(index)
          return (
            <Col key={index} style={{
              alignItems: hasAside ? 'flex-start' : 'center',
              ...columnStyle}}>
              {this.renderColumn(column, index)}
            </Col>
          )
        })}
      </Container>
    )
  }
}

const defaultStyles = {
  container: {
    height: '350px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
    zIndex: 1,
    backgroundColor: 'white',
  },
  defaultColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
  },
  defaultHeader: {
    fontSize: '18px',
  },
  defaultLink: {
    fontSize: '18px',
    color: 'tan',
  },
  defaultImage: {
    objectFit: 'cover',
  },
  columns: [],
}

MegaMenu.defaultProps = {
  columns: [],
}

export default mergeStyles(defaultStyles)(MegaMenu)
