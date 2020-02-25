import React from 'react'
import ImageCenteredText from './components/ImageCenteredText'
import ProvidenceHomepage from "./samples/providence/ProvidenceHomepage"
import './App.css'


function App() {

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

  const props = {
    text: 'Welcome',
    image: {
      image: 'https://picsum.photos/1920/1080',
      title: 'Picture'
    },
  }

  return (

    <div style={divStyles.container}>
      <ProvidenceHomepage/>
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
    height: '100vh',
  },
}

export default App
