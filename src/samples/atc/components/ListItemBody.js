import React, {Component} from 'react'
import withSizes from '../../../utils/Sizes'
import Button from '../../../components/Button'

class ListItemBody extends Component {
  render() {
    const {
      text,
      title,
      styles,
      align,
      xs,
      getStyle,
    } = this.props

    const _align = xs ? 'left' : align

    return (
      <div style={getStyle(styles.container)} align={_align}>
        <div style={getStyle(styles.title)}>
          {title}
        </div>
        <div style={getStyle(styles.divider)}/>
        <div style={getStyle(styles.text)}>
          {text}
        </div>
        <div>
          <Button styles={getStyle(styles.button)}>
            Read More >
          </Button>
        </div>
      </div>
    )
  }
}

export default withSizes(ListItemBody)
