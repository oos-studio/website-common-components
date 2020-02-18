import React from 'react'
import { Navigation } from './components'
import { data } from './testData'

function App() {
  return (
    <div className="App">
      <Navigation items={data.navigation.items} brand={data.navigation.brand} styles={data.navigation.styles} />
    </div>
  )
}

export default App
