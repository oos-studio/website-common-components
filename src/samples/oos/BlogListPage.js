import React, { Component, useState } from 'react'
import ListPage from '../../components/ListPage'
import ImageRowItem from "../../components/ImageRowItem"
import { Button } from 'reactstrap'

function ListItemBody(props) {
  const {
    date,
    title,
    align,
    xs,
  } = props

  const _align = xs ? 'left' : align

  const [buttonHover, setButtonHover] = useState(false);

  const style = styles.listItemBody
  return (
    <div align={_align}>
      <span style={style.date}>{date}</span>
      <div style={style.divider}/>
      <div style={style.title}>
        <a style={style.title} href={'#'}>{title.toUpperCase()}</a>
      </div>
      <div>
        <Button
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
          style={
            buttonHover ? style.buttonHover : style.button
          }
        >
          READ
        </Button>
      </div>
    </div>
  )
}

class BlogListPage extends Component {

  render() {
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
          styles={styles}
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
              props => <ImageRowItem styles={styles.imageRowItem} alignImage={'left'} {...props} renderBody={xs => <ListItemBody {...props} align={'left'} xs={xs}/>}/>,
              props => <ImageRowItem styles={styles.imageRowItem} alignImage={'right'} {...props} renderBody={xs => <ListItemBody {...props} align={'right'} xs={xs}/>}/>
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
      color: '#777'
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
      color: '#336f81',
      marginBottom: 10,
    },
    button: {
      border: '1px solid #74e5d1',
      backgroundColor: 'transparent',
      color: '#777'
    },
    buttonHover: {
      border: '1px solid #74e5d1',
      backgroundColor: '#74e5d1',
      color: 'white',
    },
  },
  imageRowItem: {
    imageColumn: {
      height: 250,
    },
    image: {
      borderRadius: 4,
    }
  },
  contentContainer: {
    padding: 25,
  }
}

export default BlogListPage
