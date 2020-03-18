import React from 'react'

const withResize = triggerWidth => Component => {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        isMobile: false,
      }
    }

    updateDimensions() {
      if(window.innerWidth < triggerWidth) {
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
      return <Component isMobile={isMobile}/>
    }
  }

}

export default withResize
