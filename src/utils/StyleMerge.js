import React from 'react'
import deepmerge from 'deepmerge'

const mergeStyles = defaultStyle => Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      if (props.styles) {
        this.state = {
          mergedStyles: deepmerge(defaultStyle, props.styles)
        }
      } else {
        this.state = {
          mergedStyles: defaultStyle
        }
      }
    }
    render() {
      const { styles, ...rest } = this.props
      return <Component styles={this.state.mergedStyles} {...rest}/>
    }
  }
}

export default mergeStyles
