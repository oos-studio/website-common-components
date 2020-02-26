import React from 'react'
import ProvidenceHomepage from "./samples/providence/ProvidenceHomepage"
import './App.css'

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
  textAlign: 'right',
}

function App() {
  return <ProvidenceHomepage/>
}

export default App
