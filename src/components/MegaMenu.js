import React, { Component } from 'react'
import {Container, Col, Media} from 'reactstrap'
import NavLink from './NavLink'
import mergeStyles from '../utils/StyleMerge'
import deepmerge from 'deepmerge'
import './commonCSS.css'
import gsap, { TweenLite, Power2, TimelineLite } from 'gsap'


class MegaMenu extends Component {
  state = {
    linkHover: false,
    activeColumn: null,
    activeLink: null,
    opacity: 0,
  }
  hoverLink = (index, colIndex) => {
    this.setState({
      linkHover: true,
      activeLink: index,
      activeColumn: colIndex,
    })
  }
  leaveHoverLink = (index, colIndex) => {
    this.setState({
      linkHover: false,
      activeLink: null,
      activeColumn: null,
    })
  }
  getColumnStyle = column => {
    const { styles } = this.props
    let columnStyle = styles.defaultColumn
    if ('styles' in column) {
      if ('column' in column.styles) {
        columnStyle = deepmerge(styles.defaultColumn, column.styles.column)
      }
    }
    return columnStyle
  }

  getLinkStyle = column => {
    const { styles } = this.props
    let linkStyle = styles.defaultLink
    if ('styles' in column) {
      if ('link' in column.styles) {
        linkStyle = deepmerge(styles.defaultLink, column.styles.link)
      }
    }
    return linkStyle
  }

  getImageStyle = column => {
    const { styles } = this.props
    let imageStyle = styles.defaultImage
    if ('styles' in column) {
      if ('image' in column.styles) {
        imageStyle = deepmerge(styles.defaultImage, column.styles.image)
      }
    }
    return imageStyle
  }

  getHeaderStyle = column => {
    const { styles } = this.props
    let headerStyle = styles.defaultHeader
    if ('styles' in column) {
      if ('header' in column.styles) {
        headerStyle = deepmerge(styles.defaultHeader, column.styles.header)
      }
    }
    return headerStyle
  }

  componentDidMount() {
    const { animationParams } = this.props
    TweenLite.to('.megaMenuContainer', 0.35, animationParams)
    TweenLite.to('.asideHeader', 0.35, animationParams)
    TweenLite.to('.asideBody', 0.35, animationParams)
  }

  renderHeader = (column, index) => {
    const headerStyle = this.getHeaderStyle(column)
    return column.heading.length > 0 ? <div style={headerStyle}>{column.heading}</div> : null
  }

  renderColumn = (column, index) => {
    const { linkHover, activeLink, activeColumn } = this.state
    const { hoverLink, leaveHoverLink } = this
    const { useRouter, history, onClickItem } = this.props

    const linkStyle = this.getLinkStyle(column)
    const imageStyle = this.getImageStyle(column)

    switch(column.type) {
      case 'links':
        return (
          <React.Fragment>
            {this.renderHeader(column, index)}
            {column.links.map((link, linkIndex) => <NavLink key={linkIndex} history={history} useRouter={link.useRouter !== undefined && link.useRouter !== null ? link.useRouter : useRouter} onClickItem={onClickItem} onMouseEnter={() => hoverLink(linkIndex, index)} onMouseLeave={() => leaveHoverLink(linkIndex, index)} item={{url: link.url}}  style={{
              ...linkStyle,
              color: activeLink === linkIndex && activeColumn === index && linkHover && linkStyle.hover ? linkStyle.hover.color : linkStyle.color,
            }}>{link.title}</NavLink>)}
          </React.Fragment>
        )
      case 'image':
        return (
          <React.Fragment>
            {this.renderHeader(column, index)}
            {column.overlayText ?
              <NavLink history={history} useRouter={column.useRouter !== undefined && column.useRouter !== null ? column.useRouter : useRouter} onClickItem={onClickItem} item={{url: column.url}}>
                <div style={imageStyle.overlay}>{column.overlayText}</div>
                <Media object src={column.src} alt={column.title} style={imageStyle}/>
              </NavLink>
              : <Media object src={column.src} alt={column.title} style={imageStyle}/>
            }

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
      <div className="megaMenuContainer" style={styles.container}>
        {columns.map((column, index) => {
          const columnStyle = this.getColumnStyle(column)
          return (
            <div key={index} style={{
              ...columnStyle}}>
              {this.renderColumn(column, index)}
            </div>
          )
        })}
      </div>
    )
  }
}

const defaultStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    opacity: 0,
  },
  defaultColumn: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  defaultHeader: {
    fontSize: 25,
  },
  defaultLink: {
    color: 'tan',
  },
  defaultImage: {
    objectFit: 'cover',
    overlay: {
      position: 'absolute',
      backgroundColor: 'rgba(0,0,0,0.5)',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  columns: [],
}

MegaMenu.defaultProps = {
  columns: [],
  useRouter: false,
  animationParams: { opacity: 1 },
}

export default mergeStyles(defaultStyles)(MegaMenu)
