import React from 'react'
import { CardGrid } from './components/index'
import { Button } from 'reactstrap'
function App() {
  const cardProps = {
    cards: [
      {
        header: 'BLOG',
        image: {
          title: 'img1',
          src: 'https://picsum.photos/400/400',
        },
        title: 'Title 1',
        subtitles: ['Austin Shaw | December 29, 2019'],
        text: 'As we approach the start of the New Year, it forces us to think about things like time, aging, and change.',
        button: {
          text: 'Learn More',
          url: 'https://www.oos-studio.com',
        }
      },
      {
        header: 'INSTAGRAM',
        image: {
          title: 'img2',
          src: 'https://picsum.photos/400/400',
        },
        title: 'Title 2',
        text: '<b>providencechurch</b> This first Sunday of 2020 we’ll begin a sermon series on the story of Joseph. We’ll study how God’s guiding hand of providence works through…',
        button: {
          text: 'Learn More',
          url: 'https://www.oos-studio.com',
        }
      },
      {
        header: 'SERMONS',
        image: {
          title: 'img3',
          src: 'https://picsum.photos/400/400',
        },
        title: 'Title 3',
        subtitles: ['Austin Shaw | December 29, 2019', 'JOSHUA 3-4'],
        text: 'As we approach the start of the New Year, it forces us to think about things like time, aging, and change.',
        button: {
          text: '',
          url: 'https://www.oos-studio.com',
          render: () => {
            return (<div>Learn More</div>)
          }
        }
      },
    ],
  }
  return (
    <CardGrid cards={cardProps.cards} />
  )
}

export default App
