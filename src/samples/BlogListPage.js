import React, { Component } from 'react'
import ListPage from '../components/ListPage'
import ImageRowItem from "../components/ImageRowItem"
import { Button } from 'reactstrap'

class BlogListPage extends Component {

  listItemBody = props => {
    const {
      date,
      title
    } = props
    const style = styles.listItemBody
    return (
      <div>
        <span style={style.date}>{date}</span>
        <div style={style.divider}/>
        <span style={style.title}>{title.toUpperCase()}</span>
        <div>
          <Button style={style.button}>READ</Button>
        </div>
      </div>
    )
  }

  render() {
    const {
      listItemBody
    } = this

    return (
      <div>
        <ListPage
          header={{
            title: 'My Awesome Header',
            subTitle: 'My Awesome Subtitle',
            backgroundAsset: {
              mimeType: 'video/x-m4v',
              url: 'https://s3.us-east-2.amazonaws.com/cdn.www.oos-studio.com/prod/Homepage_720.m4v'
            }
          }}
          list={{
            items: [
              {
                title: 'Six Question to Ask Before Your Next Website Project',
                imageUrl: 'https://s3.us-east-2.amazonaws.com/cdn.www.oos-studio.com/prod/colin_bw.jpg',
                date: '12/09/19'
              },
              {
                title: 'Six Question to Ask',
                imageUrl: 'https://s3.us-east-2.amazonaws.com/cdn.www.oos-studio.com/prod/colin_bw.jpg',
                date: '12/09/19'
              }
            ],
            renderItems: [
              props => <ImageRowItem styles={styles.imageRowItem} alignImage={'left'} {...props} renderBody={() => listItemBody(props)}/>,
              props => <ImageRowItem styles={styles.imageRowItem} alignImage={'right'} {...props} renderBody={() => listItemBody(props)}/>
            ]
          }}
        />
      </div>
    )
  }
}

const styles = {
  listItemBody: {
    date: {

    },
    divider: {
      height: 1,
      width: 100,
      backgroundColor: 'lightGrey',
      marginTop: 10,
      marginBottom: 10,
    },
    title: {
      fontSize: 24,
    },
    button: {

    }
  },
  imageRowItem: {
    imageColumn: {
      height: 250,
    },
  }
}

export default BlogListPage
