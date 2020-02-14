import React from 'react'
import FullScreenImageText from './components/FullScreenImageText'

function App() {
  const styles = {
    main: {

    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'white',
    }
  }
  const props = {
    text: 'HELLO',
    image: {
      image: 'https://picsum.photos/1920/1080',
      title: 'Picture'
    },
  }
  return (
    <React.Fragment>
      <FullScreenImageText styles={styles} {...props} />
      <FullScreenImageText styles={styles} {...props} />
    </React.Fragment>
)
}

export default App
