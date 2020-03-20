import React, { Component} from 'react'
import { Container, Col, Row, Media} from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'
import deepmerge from 'deepmerge'

class Footer extends Component {

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

  getTextStyle = index => {
    const { styles } = this.props
    let textStyle = styles.defaultText
    if(styles.columns[index]) {
      if('text' in styles.columns[index]) {
        textStyle = deepmerge(styles.defaultText, styles.columns[index].text)
      }
    }

    return textStyle
  }

  renderHeader = (column, index) => {
    const headerStyle = this.getHeaderStyle(index)
    if(column.heading.length) {
      return <div style={headerStyle}>{column.heading}</div>
    } else {
      return null
    }
  }

  renderColumn = (column, index) => {
    const linkStyle = this.getLinkStyle(index)
    const imageStyle = this.getImageStyle(index)
    const textStyle = this.getTextStyle(index)

    switch(column.type) {
      case 'text':
        return (
          <React.Fragment>
            {this.renderHeader(column, index)}
            {column.text.map(txt => <div style={textStyle}>{txt}</div>)}
          </React.Fragment>
        )
      case 'links':
        return (
          <React.Fragment>
            {this.renderHeader(column, index)}
            {column.links.map(link => <a href={link.url}  style={linkStyle}>{link.title}</a>)}
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
    const { styles, columns } = this.props
    return (
      <div style={styles.container}>
        <div style={styles.content}>
        {columns.map((column, index) => {
          const columnStyle = this.getColumnStyle(index)
          return (
            <Col key={index} style={columnStyle}>
              {this.renderColumn(column, index)}
            </Col>
          )
        })}
        </div>
      </div>
    )
  }
}

const defaultStyles = {
  container: {
    backgroundColor: 'tan',
    padding: 0,
  },
  content: {
    margin: 'auto',
    width: '100%',
    display: 'flex',
  },
  defaultColumn: {

  },
  defaultHeader: {

  },
  defaultLink: {
    fontSize: 18,
    color: 'grey',
  },
  defaultText: {
    fontSize: 18,
    color: 'grey',
  },
  defaultImage: {

  },
  columns: [],
}

Footer.defaultProps = {
  columns: [],
}



export default mergeStyles(defaultStyles)(Footer)
