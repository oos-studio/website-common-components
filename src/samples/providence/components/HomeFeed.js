import React, { Component } from 'react'
import { CardGrid } from '../../../components'
import { styles as globalStyles } from '../styles'

const props = {
  cards: [
    {
      header: 'BLOG',
      image: {
        title: 'img1',
        src: 'https://picsum.photos/400/400',
      },
      title: 'He Who Changest Not',
      subtitles: ['Austin Shaw | December 29, 2019'],
      text: 'As we approach the start of the New Year, it forces us to think about things like time, aging, and change.',
      button: {
        text: 'READ MORE',
        url: 'https://www.oos-studio.com',
      }
    },
    {
      header: 'INSTAGRAM',
      image: {
        title: 'img2',
        src: 'https://picsum.photos/400/400',
      },
      title: '@ProvidenceChurch',
      text: '<b>providencechurch</b> This first Sunday of 2020 we’ll begin a sermon series on the story of Joseph. We’ll study how God’s guiding hand of providence works through…',
      button: {
        text: 'READ MORE',
        url: 'https://www.oos-studio.com',
      }
    },
    {
      header: 'SERMONS',
      image: {
        title: 'img3',
        src: 'https://picsum.photos/400/400',
      },
      title: 'Fear In the New Year',
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

const styles = {
  container: {
    backgroundColor: '#F8F5EE',
    paddingBottom: 30,
  },
  card: {
    backgroundColor: 'white',
    color: '#6A5B5D',
    paddingBottom: 30,
  },
  separator: {
    borderColor: '#6A5B5D'
  },
  header: {
    color: '#D07D3C',
    letterSpacing: 3.4
  },
}

class HomeFeed extends Component {
  render() {
    return (
      <CardGrid styles={{button: globalStyles.button, ...styles}} {...props}/>
    )
  }
}

export default HomeFeed
