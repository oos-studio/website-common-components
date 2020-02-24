import React from 'react'
import BlogListPage from "./samples/BlogListPage"
import { Footer } from './components'

function App() {
  const footerProps = {
    title: 'oos',
    description: `Pete is a loser and doesn't want to talk to us`
  }
  return (
    <div className="App">
      <BlogListPage/>
    </div>
  )
}

export default App
