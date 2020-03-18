import React, { Component } from 'react'
import FooterDesktop from './FooterDesktop'
import FooterMobile from './FooterMobile'

class Footer extends Component {
  render() {
    const { isMobile } = this.props
    return (
       <React.Fragment>
         { isMobile ? <FooterMobile /> : <FooterDesktop /> }
      </React.Fragment>
    )
  }
}

export default Footer
