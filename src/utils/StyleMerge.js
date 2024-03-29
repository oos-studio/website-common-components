import React from 'react'
import deepmerge from 'deepmerge'

const mergeStyles = defaultStyle => Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mergedStyles: this.props.styles ? deepmerge(defaultStyle, this.props.styles) : defaultStyle
      }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
      if(prevProps !== this.props)
        this.setState({
          mergedStyles: this.props.styles ? deepmerge(defaultStyle, this.props.styles) : defaultStyle
        })
    }

    render() {
      const { styles, ...rest } = this.props
      return <Component styles={this.state.mergedStyles} {...rest}/>
    }
  }
}

export default mergeStyles
