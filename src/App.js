import React from 'react'
import ProvidenceHomepage from "./samples/providence/ProvidenceHomepage"
import './App.css'

const fsIntroProps = { heightOffset: 20,
  text: 'Welcome to the full screen intro page. This style is just a placeholder. Make it whatever you want!',
  image: {
    title: 'img',
    url: 'https://picsum.photos/1000/700'
  },
}

function App() {
  return <ProvidenceHomepage/>

}

export default App
