import React, { Component } from 'react'
import Paragraph from './Paragraph'
import Supplement from './Supplement'
import withSizes from '../utils/Sizes'
import mergeStyles from '../utils/StyleMerge'

class Article extends Component {
  addTagClass = (text, tag, _class) => {
    let tmpText = text

    tmpText = tmpText.replace(`<${tag}`, `<${tag} class='${_class}'`)

    return tmpText
  }
  buildArticle = () => {
    const { md, data, styles } = this.props
    const { addTagClass } = this
    return data.newsPostBody.map((b) => {
      let section = null

      if (b.typeHandle === 'text') {
        let tmpContent = b

        tmpContent.text = addTagClass(tmpContent.text, 'ol', 'articleOl')
        tmpContent.text = addTagClass(tmpContent.text, 'ul', 'articleUl')
        tmpContent.text = addTagClass(tmpContent.text, 'a', 'articleAnchor')

        section = <Paragraph styles={styles.paragraph} dropCap={data.dropCap} content={tmpContent} />
      } else {
        let content = b.typeHandle === 'quote' ? b.text : b
        section = (
          <Supplement
            content={content}
            float={md ? 'center' : b.position}
            type={b.typeHandle}
            styles={styles.supplement}
          />
        )
      }

      return section
    })
  }
  render() {
    const { buildArticle } = this
    const { styles } = this.props
    return (
      <div style={styles.container}>
        <div style={styles.content}>{buildArticle()}</div>
      </div>
    )
  }
}

const defaultStyles = {
  container: {
    margin: 100,
    marginTop: 0,
    marginLeft: 50,
    marginRight: 50,
    paddingTop: 25,
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: '#000000',
    display: 'flex',
    justifyContent: 'center',
    maxWidth: 1200,
  },
  content: {},
  supplement: {},
  paragraph: {},
}

export default withSizes(mergeStyles(defaultStyles)(Article))
