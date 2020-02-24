import React from 'react'
import { NavBar } from './components'
import { data } from './testData'

function App() {
  return (
    <div className="App">
      <NavBar items={data.navigation.items} brand={data.navigation.brand} styles={data.navigation.styles} />
    </div>
  )
}

export default App
