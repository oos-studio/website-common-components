import React, { Component } from 'react'
import FullScreenIntroDesktop from './FullScreenIntroDesktop'
import FullScreenIntroMobile from './FullScreenIntroMobile'

class FullScreenIntro extends Component {
  state = {
    fsIntro: FullScreenIntroDesktop,
  }

  handleResize = () => {
    const { fsIntro } = this.state
    const { trigger } = this.props

    if (window.innerWidth < trigger && fsIntro !== FullScreenIntroMobile) {
      this.setState({
        fsIntro: FullScreenIntroMobile,
      })
    }
    if (window.innerWidth >= trigger && fsIntro !== FullScreenIntroDesktop) {
      this.setState({
        fsIntro: FullScreenIntroDesktop,
      })
    }
  }

  componentDidMount() {
    const { handleResize } = this
    const { trigger } = this.props

    if (window.innerWidth < trigger) {
      this.setState({
        fsIntro: FullScreenIntroMobile,
      })
    }

    window.addEventListener('resize', handleResize)
  }

  render() {
    const { fsIntro } = this.state
    const { text, image, slides } = this.props

    const FSIntroType = fsIntro

    const slider = slides.map((slide) => {
      return {
        imageSliderItemImage: [
          {
            url: slide.image[0].url,
          },
        ],
        imageSliderItemUrl: '',
        linkToPage: [],
      }
    })

    return (
      <FSIntroType
        text={text}
        image={image}
        slideshow={slider}
      />
    )
  }
}

export default FullScreenIntro
