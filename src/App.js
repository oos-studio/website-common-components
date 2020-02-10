import React from 'react'
import Header from './components/Header'
import ListPage from './components/ListPage'

function App() {
  return (
    <div className="App">
      <ListPage
        header={() => <Header title={'My Awesome Header'} subTitle={'My Awesome Subtitle'}
                    backgroundAsset={{ mimeType: 'video/x-m4v', url: 'https://s3.us-east-2.amazonaws.com/cdn.www.oos-studio.com/prod/Homepage_720.m4v' }}/>}
        />
    </div>
  )
}

export default App
