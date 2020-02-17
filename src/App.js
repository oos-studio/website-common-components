import React from 'react'
import FullScreenImageText from './components/FullScreenImageText'


function App() {
  const fullStyles = {
    container: {
    },
    image: {
    },
    overlay: {

    },
    text: {
      color: 'white',
      fontSize: 100,
      justifyContent: 'center',
      alignItems: 'center',
    }
  }


  const props = {
    text: 'Welcome',
    image: {
      image: 'https://picsum.photos/1920/1080',
      title: 'Picture'
    },
  }

  return (

    <div style={divStyles.container}>

      <FullScreenImageText styles={fullStyles} {...props} />

    </div>

  )
}

const divStyles = {
  container: {
  },
}

export default App
