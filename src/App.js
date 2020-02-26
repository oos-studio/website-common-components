import React from 'react'
import ProvidenceHomepage from "./samples/providence/ProvidenceHomepage"
import './App.css'


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
      fontSize: 50,

    }
  }


  const props = {
    text: 'One sentence about small groups',
    image: {
      image: 'https://picsum.photos/1920/1080',
      title: 'Picture'
    },
    logo: {
      image: 'https://picsum.photos/500/500',
      title: 'Picture'
    }
  }

  return <ProvidenceHomepage/>
}

export default App
