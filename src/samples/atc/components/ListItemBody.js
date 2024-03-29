import React, {Component, useState} from 'react'
import withSizes from '../../../utils/Sizes'
import Button from '../../../components/Button'

class ListItemBody extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hovered: false,
    }
  }
  hoverButton = () => {
    this.setState({
      hovered: true,
    })
  }
  leaveHoverButton = () => {
    this.setState({
      hovered: false,
    })

  }
  render() {
    const {
      text,
      title,
      styles,
      align,
      sm,
      getStyle,
      image,
      hoverImage,
      useRouter,
      history,
    } = this.props
    const { hoverButton, leaveHoverButton } = this
    const { hovered } = this.state

    const _align = sm ? 'left' : align

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
          <Button handleHover={hoverButton} leaveHover={leaveHoverButton} styles={getStyle(styles.button)}>
            Read More
            <img src={hovered ? hoverImage : image} alt='Read More' style={{
              height: 17,
              width: 17,
              marginLeft: 5,
              marginBottom: 2,
              filter: hovered ? 'filter: invert(19%) sepia(23%) saturate(4569%) hue-rotate(321deg) brightness(95%) contrast(85%)' : 'none',
            }}/>
          </Button>
        </div>
      </div>
    )
  }
}

export default withSizes(ListItemBody)
