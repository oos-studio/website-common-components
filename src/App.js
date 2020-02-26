import React from 'react'
import { CardGrid } from './components/index'

function App() {
  const cardProps = {
    cards: [
      {
        image: {
          title: 'img1',
          src: 'https://picsum.photos/400/400',
        },
        topic: 'Topic 1',
        title: 'Title 1',
        subtitle: 'Subtitle 1',
        text: 'This is the text for the card...',
        button: {
          text: 'Learn More',
          url: 'https://www.oos-studio.com',
        }
      },
      {
        image: {
          title: 'img2',
          src: 'https://picsum.photos/400/400',
        },
        topic: 'Topic 2',
        title: 'Title 2',
        subtitle: 'Subtitle 2',
        text: 'This is the text for the card...',
        button: {
          text: 'Learn More',
          url: 'https://www.oos-studio.com',
        }
      },
      {
        image: {
          title: 'img3',
          src: 'https://picsum.photos/400/400',
        },
        topic: 'Topic 3',
        title: 'Title 3',
        subtitle: 'Subtitle 3',
        text: 'This is the text for the card...',
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
