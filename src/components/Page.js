import React, {Component} from 'react'
import mergeStyles from '../utils/StyleMerge'
import Header from './Header'

class Page extends Component {
  render() {
    const { contactForm, footer, header, sections, styles, showContactForm, showFooter } = this.props
    return(
      <div style={styles.container}>
        {typeof(header) === 'object' ? <Header {...header}/> : null}
        {sections}
        {showContactForm && contactForm}
        {showFooter && footer}
      </div>
    )
  }
}

const defaultStyles = {
  container: {

  },
}

Page.defaultProps = {
  contactForm: null,
  footer: null,
  header: null,
  sections: [],
  showContactForm: true,
  showFooter: true,
}

export default mergeStyles(defaultStyles)(Page)
