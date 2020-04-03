import React from 'react'
import deepmerge from 'deepmerge'

export const sizes = {
  xxs: 390,
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
}

export const getSizes = () => {
  const width = window.innerWidth

  return {
    xxs: width < sizes.xxs,
    xs: width < sizes.xs,
    sm: width < sizes.sm,
    md: width < sizes.md,
    lg: width < sizes.lg,
    xl: width >= sizes.lg,
  }
}

const withSizes = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.state = getSizes()
    }

    getStyle = style => {
      const { xxs, xs, sm, md, lg, xl } = this.state
      let newStyle = style

      if (xl && typeof  style.xl === 'object') {
        newStyle = deepmerge(newStyle, style.xl)
      }
      if (lg && typeof  style.lg === 'object') {
        newStyle = deepmerge(newStyle, style.lg)
      }
      if (md && typeof style.md === 'object') {
        newStyle = deepmerge(newStyle, style.md)
      }
      if (sm && typeof style.sm === 'object') {
        newStyle = deepmerge(newStyle, style.sm)
      }
      if (xs && typeof style.xs === 'object') {
        newStyle = deepmerge(newStyle, style.xs)
      }
      if (xxs && typeof style.xxs === 'object') {
        newStyle = deepmerge(newStyle, style.xxs)
      }

      return newStyle
    }

    updateDimensions = () => {
      this.setState(getSizes())
    }

    componentDidMount() {
      this.updateDimensions()
      window.addEventListener("resize", this.updateDimensions)
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions)
    }

    render() {
      return <Component getStyle={this.getStyle} {...this.props} {...this.state}/>
    }
  }

}

export default withSizes
