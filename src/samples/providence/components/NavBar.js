import React, { Component } from 'react'
import { NavBar as NavBarComponent } from '../../../components/'
import MegaMenu from '../../../components/MegaMenu'

class NavBar extends Component {

  render() {
    return(
      <NavBarComponent items={data.navigation.items} brand={data.navigation.brand} styles={styles}/>
    )
  }
}

const data = {
  "navigation": {
    "brand": {
      url: '#/',
      image: {
        title: 'image title',
        src: "https://via.placeholder.com/50/EEEEEE/333333?Text=Brand"
      }
    },
    "items": [
      {
        "text": "Link",
        "url": "#/1",
        "type": "link"
      },
      {
        "text": "Link",
        "url": "#/2",
        "type": "link"
      },
      {
        "text": "Link",
        "url": "#/3",
        "type": "link"
      },
      {
        "text": "Ministries",
        "url": "#",
        "type": "dropdown",
        aside: {
          header: "Ministries",
          text: 'If you are searching for a home church or just beginning to consider the claims of Christ, we hope you\'ll join us this Sunday to sing, pray, and study the Bible.',
          brand: {
            url: '#/',
            image: {
              title: 'image title',
              src: "https://picsum.photos/100/200"
            }
          }
        },
        render: () => <MegaMenu styles={megaMenuStyles} hasAside={true} columns={[
          {
            heading: '',
            type: 'links',
            links: [
              {
                title: 'Worship',
                url: '#/A'
              },
              {
                title: "Workshops",
                url: "#/B"
              },
              {
                title: "Children",
                url: "#/C"
              },
              {
                title: "Small Groups",
                url: "#/D"
              },

            ]
          },
          {
            heading: '',
            type: 'links',
            links: [
          {
            title: 'Youth',
            url: '#/A'
          },
          {
            title: "Women",
            url: "#/B"
          },
          {
            title: "Men",
            url: "#/C"
          },
          {
            title: "Missions",
            url: "#/D"
          },]
          },
          {
            heading: '',
            type: 'image',
            src: 'https://picsum.photos/400/200',
            title: 'Image',
          }
        ]}/>
      },
      {
        "text": "Dropdown",
        "url": "#",
        "type": "dropdown",
        render: () => <MegaMenu styles={megaMenuStyles} columns={[
          {
            heading: 'Heading 1',
            type: 'links',
            links: [
              {
                title: 'Link A',
                url: '#/A'
              },
              {
                title: "Link B",
                url: "#/B"
              },
              {
                title: "Link C",
                url: "#/C"
              },
              {
                title: "Link D",
                url: "#/D"
              }
            ]
          },
          {
            heading: 'Image Heading',
            type: 'image',
            src: 'https://via.placeholder.com/150/EEEEEE/333333?Text=Brand',
            title: 'Image',
          }
        ]}/>
      }
    ],
  }
}

const styles = {
  asideHeader: {
    color: 'black',
  },
  asideBody: {
    color: 'black',
    float: 'left',
    height: '75%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '50%',
  },
  navbar: {
    backgroundColor: 'tan',
  }
}

const megaMenuStyles = {
  defaultLink: {
    color: 'black',
  },
}

export default NavBar
