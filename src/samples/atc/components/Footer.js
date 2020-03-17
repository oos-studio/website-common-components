import React, { Component } from 'react'
import FooterDesktop from './FooterDesktop'
import FooterMobile from './FooterMobile'

class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isMobile: false,
    }
  }

  updateDimensions() {
    if(window.innerWidth < 875) {
      this.setState({
        isMobile: true
      })
    } else {
      this.setState({
        isMobile: false,
      })
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    const { isMobile } = this.state
    return (
       <React.Fragment>
         { isMobile ? <FooterMobile /> : <FooterDesktop /> }
      </React.Fragment>
    )
  }
}

export default Footer
