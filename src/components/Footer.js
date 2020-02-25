import React, { Component} from 'react'
import { Container, Col, Row, Media} from 'reactstrap'
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

  getHeaderStyle = index => {
    const { styles } = this.props
    let headerStyle = styles.defaultHeader
    if (styles.columns[index]) {
      if ('header' in styles.columns[index]) {
        //headerStyle = mergeStyles(styles.defaultHeader, styles.columns[index].header)
      }
    }
    return headerStyle
  }

  getLinkStyle = index => {
    const { styles } = this.props
    let linkStyle = styles.defaultLink
    if (styles.columns[index]) {
      if ('link' in styles.columns[index]) {
        //linkStyle = mergeStyles(styles.defaultLink, styles.columns[index].link)
      }
    }
    return linkStyle
  }

  getImageStyle = index => {
    const { styles } = this.props
    let imageStyle = styles.defaultImage
    if (styles.columns[index]) {
      if ('image' in styles.columns[index]) {
        //imageStyle = mergeStyles(styles.defaultImage, styles.columns[index].image)
      }
    }
    return imageStyle
  }

  getTextStyle = index => {
    const { styles } = this.props
    let textStyle = styles.defaultText
    if(styles.columns[index]) {
      if('text' in styles.columns[index]) {
        //textStyle = mergeStyles(styles.defaultText, styles.columns[index].text)
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
  container: {
    backgroundColor: 'tan',
    width: '100vw',
    display: 'flex',
  },
  defaultColumn: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '20%',
    margin: '2%',
    marginRight: '5%',
    marginLeft: '5%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  defaultHeader: {
    position: 'absolute',
    top: 0,
    fontSize: 25,
    marginBottom: '20%',
    color: 'white',
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



export default mergeStyle(defaultStyles)(Footer)
