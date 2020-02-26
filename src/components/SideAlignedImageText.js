import React, { Component } from 'react'
import { Container, Media } from 'reactstrap'
import Button from './Button'
import mergeStyles from '../utils/StyleMerge'

class SideAlignedImageText extends Component {
  render() {
    const { styles, image, text, button, textAlign } = this.props
    const contentSide = textAlign === 'right' ? 'flex-end' : 'flex-start'

    return (
      <Container style={styles.container}>
        <Media object alt={image.title ? image.title : 'img'} src={image.image} style={styles.image}/>
        <div style={{
          justifyContent: contentSide,
          ...styles.overlay,
        }}>
          <div style={{
            float: textAlign,
            alignItems: contentSide,
            ...styles.subContainer,
          }}>
            <div style={{
              textAlign: textAlign,
              ...styles.textWrapper
            }}>
              {text}
            </div>
            {button.text.length > 0 &&
              <div style={styles.buttonWrapper}>
                <Button onClick={button.onClick} styles={{
                  ...styles.button
                }}>
                  {button.text}
                </Button>
              </div>
            }
          </div>
        </div>
      </Container>
    )
  }
}

const defaultStyles = {
  container: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  image: {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  subContainer: {
    height: '75%',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '2%',
  },
  textWrapper: {
    color: 'white',
    fontSize: 33,
    overflow: 'hidden',
  },
  buttonWrapper: {
    height: '10%',
    marginTop: '5%',
  },
  button: {
    color: 'white',
    hovered: {
      backgroundColor: 'white',
      color: 'grey',
      borderColor: 'grey',
    }
  },
}

SideAlignedImageText.defaultProps = {
  styles: defaultStyles,
  text: '',
  image: {
    image: '',
    title: '',
  },
  button: {
    text: '',
    onClick: null,
  },
  textAlign: 'left',
}

export default mergeStyles(defaultStyles)(SideAlignedImageText)
