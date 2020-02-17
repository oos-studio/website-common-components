import React from 'react'
import SideAlignedImageText from './components/SideAlignedImageText'

const onClick = () => {
  console.log('button clicked')
}

function App() {

  const styles = {

  }

  const props = {
    text: 'Welcome to our church! Press the button below to sign up for our newsletter.',
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
      <div style={divStyles.side}>
      <SideAlignedImageText styles={styles} {...props} />
      </div>
    </div>

  )
}

const divStyles = {
  container: {
  },
  side: {
    width: '100%',
    height: '50vh',
  },
}

export default App
