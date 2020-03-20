import React, { Component } from 'react'
import FooterDesktop from './FooterDesktop'
import FooterMobile from './FooterMobile'
import withSizes from '../../../utils/Sizes'

class Footer extends Component {
  render() {
    const { md } = this.props
    return (
       <React.Fragment>
         { md ? <FooterMobile /> : <FooterDesktop /> }
      </React.Fragment>
    )
  }
}

export default withSizes(Footer)
