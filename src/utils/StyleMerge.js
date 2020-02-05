import React from 'react'
import deepmerge from 'deepmerge'

const mergeStyles = defaultStyle => Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mergedStyles: deepmerge(defaultStyle, this.props.styles)
      }
    }
    render() {
      const { styles, ...rest } = this.props
      return <Component styles={this.state.mergedStyles} {...rest}/>
    }
  }
}

export default mergeStyles
