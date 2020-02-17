import React from 'react'
import FullScreenImageText from './components/FullScreenImageText'
import ImageCenteredText from './components/ImageCenteredText'
import SideAlignedImageText from './components/SideAlignedImageText'

const onClick = () => {
  console.log('button clicked')
}

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
  const thirdStyles = {
    container: {
      margin: '5%',
    },
    image: {
    },
    overlay: {
    },
    text: {
      color: 'white',
      fontSize: 25,
    }
  }
  const halfStyles = {
    container: {
      margin: '5%',
    },
    image: {
    },
    overlay: {
    },
    text: {
      color: 'white',
      fontSize: 50,
    }
  }

  const styles = {

  }

  const props = {
    text: 'Welcome',
    image: {
      image: 'https://picsum.photos/1920/1080',
      title: 'Picture'
    },
  }
  const props2 = {
    text: 'Welcome to our church! Press the button below to sign up for our newsletter. Welcome to our church! Press the button below to sign up for our newsletter. Welcome to our church! Press the button below to sign up for our newsletter. Welcome to our church! Press the button below to sign up for our newsletter.',
    image: {
      image: 'https://picsum.photos/1920/1080',
      title: 'Picture'
    },
    button: {
      text: 'Learn More',
      onClick: onClick,
    },
    textAlign: 'left',
  }
  return (

    <div style={divStyles.container}>
      <div style={divStyles.halves}>
        <ImageCenteredText styles={halfStyles} {...props} />
        <ImageCenteredText styles={halfStyles} {...props} />
      </div>
      <FullScreenImageText styles={fullStyles} {...props} />
      <div style={divStyles.halves}>
        <ImageCenteredText styles={halfStyles} {...props} />
        <ImageCenteredText styles={halfStyles} {...props} />
      </div>
      <div style={divStyles.thirds}>
        <ImageCenteredText styles={thirdStyles} {...props} />
        <ImageCenteredText styles={thirdStyles} {...props} />
        <ImageCenteredText styles={thirdStyles} {...props} />
      </div>
      <div style={divStyles.side}>
      <SideAlignedImageText styles={styles} {...props2} />
      </div>
    </div>

  )
}

const divStyles = {
  container: {
  },
  thirds: {
    margin: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'space-evenly',
  },
  halves: {
    margin: '5%',
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
  },
  side: {
    width: '100%',
    height: '50vh',
  },
}

export default App
