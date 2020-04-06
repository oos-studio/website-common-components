import React, {Component} from 'react'
import {Page as PageComp} from '../../../components/index'
import Footer from './Footer'
import ContactForm from './ContactForm'

class Page extends Component {
  render() {
    return (
      <PageComp styles={styles} footer={<Footer/>} contactForm={<ContactForm/>} {...this.props} />
    )
  }
}

const styles = {
  container: {
  },
}

export default Page
