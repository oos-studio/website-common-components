import React, { Component } from 'react'
import { Container, Button } from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'

class SideAlignedImageText extends Component {
  render() {
    const { styles, image, text, button, textAlign } = this.props
    const justify = textAlign === 'right' ? 'flex-end' : 'flex-start'

    return (
      <Container style={styles.container}>
        <img alt={image.title ? image.title : 'img'} src={image.image} style={styles.image}/>
        <div style={{
          justifyContent: justify,
          ...styles.overlay,
        }}>
          <div style={{
            float: textAlign,
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
                <Button onClick={button.onClick} style={{
                  float: textAlign,
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
    opacity: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  subContainer: {
    height: '75%',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '2%',
    padding: '1%',
  },
  textWrapper: {
    color: 'white',
    fontSize: 33,
    overflow: 'hidden scroll',
  },
  buttonWrapper: {
    height: '10%',
    marginTop: '5%',
  },
  button: {
    height: '100%',
    fontSize: 25,
    backgroundColor: 'white',
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
