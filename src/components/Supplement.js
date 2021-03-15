import React, { Component } from 'react'
import deepmerge from 'deepmerge'
import mergeStyles from '../utils/StyleMerge'
import Video from './Video'

class Supplement extends Component {
  getDynamicStyles = () => {
    const { float, styles } = this.props
    let newStyles = {}
    switch (float) {
      case 'left':
        newStyles = {
          container: {
            float: 'left',
            marginTop: 0,
            paddingTop: 40,
            marginBottom: 10,
            marginLeft: 0,
            marginRight: 50,
          },
          content: {
            quote: {
              maxWidth: 500,
            },
            imgWrapper: {
              maxWidth: 500,
            },
          },
        }
        break
      case 'right':
        newStyles = {
          container: {
            float: 'right',
            marginTop: 0,
            paddingTop: 40,
            marginBottom: 10,
            marginLeft: 50,
            marginRight: 0,
          },
          content: {
            quote: {
              maxWidth: 500,
            },
            imgWrapper: {
              maxWidth: 500,
            },
          },
        }
        break
      default:
        newStyles = {
          container: {
            float: 'none',
            marginTop: 25,
            paddingTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
          },
          content: {
            quote: {
              maxWidth: 'none',
            },
            img: {
              maxWidth: 'none',
            },
          },
        }
        break
    }

    return deepmerge(styles, newStyles)
  }
  renderContent = () => {
    const { type, content } = this.props
    const { getDynamicStyles } = this

    const _styles = getDynamicStyles()

    if (type === 'asset') {
      return (
        <div style={_styles.content.imgWrapper}>
          {content.asset[0].mimeType.includes('image/') && <img
            style={_styles.content.img}
            src={content.asset[0].url}
            alt="img"
          />}
          {content.asset[0].mimeType.includes('video/') && (
            <Video
              styles={_styles.content.img}
              source={content.asset[0].url}
              type={content.asset[0].mimeType}
              autoplay={content.autoplay}
              loop={content.loop}/>
              )}
          <div style={_styles.content.imgCaption}>
            {content.caption !== null &&
              content.caption !== undefined &&
              content.caption}
          </div>
        </div>
      )
    } else {
      return <div style={_styles.content.quote}>{content}</div>
    }
  }
  render() {
    const { renderContent, getDynamicStyles } = this
    const _styles = getDynamicStyles()

    return (
      <div style={_styles.container}>
        <div style={_styles.content}>{renderContent()}</div>
      </div>
    )
  }
}

const defaultStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    imgWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    imgCaption: {
      marginTop: 15,
      fontWeight: 600,
    },
    quote: {
      fontSize: 45,
      maxWidth: 350,
      fontStyle: 'italic',
      textAlign: 'left',
    },
  },
}

export default mergeStyles(defaultStyles)(Supplement)
