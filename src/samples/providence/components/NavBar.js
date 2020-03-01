import React, { Component } from 'react'
import { NavBar as NavBarComponent } from '../../../components/'
import MegaMenu from '../../../components/MegaMenu'
import deepmerge from 'deepmerge'

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
        title: 'Providence Logo',
        src: require("../assets/ProvidenceLogo.png"),
      }
    },
    "items": [

      {
        "text": "I'm New",
        "url": "#",
        "type": "dropdown",
        aside: {
          header: "I'm New",
          text: 'If you are searching for a home church or just beginning to consider the claims of Christ, we hope you\'ll join us this Sunday to sing, pray, and study the Bible.',
          brand: {
            url: '#/',
            image: {
              title: 'image title',
              src: require("../assets/Logo_Cross.png")
            }
          }
        },
        render: () => <MegaMenu hasAside={true} styles={deepmerge(megaMenuStyles, newColumns)} columns={[
          {
            heading: '',
            type: 'links',
            links: [
              {
                title: 'Beliefs',
                url: '#/A'
              },
              {
                title: "Values",
                url: "#/B"
              },
              {
                title: "Leadership",
                url: "#/C"
              },
              {
                title: "Next Steps",
                url: "#/D"
              },
              {
                title: "History",
                url: "#/D"
              },
            ]
          },
          {
            heading: 'Service Times & Location',
            type: 'text',
            render: () => {
              return (
                <div style={newColumns.timeColumn}>
                  <div>
                    9 a.m. Workshops (Fall - Spring)
                  </div>
                  <div>
                    10 a.m. Worship
                  </div>
                </div>
              )
            }
          },
          {
            heading: '',
            type: 'image',
            src: 'https://picsum.photos/400/200',
            title: 'Image',
          },
        ]}/>
      },
      {
        "text": "Ministries",
        "url": "#",
        "type": "dropdown",
        aside: {
          header: "Ministries",
          text: 'Our groups and ministries are places where we study God\'s word, grow in relationships with others, and apply what we learn to real life',
          brand: {
            url: '#/',
            image: {
              title: 'image title',
              src: require("../assets/Logo_Cross.png")
            }
          }
        },
        render: () => <MegaMenu styles={deepmerge(megaMenuStyles, ministriesColumns)} hasAside={true} columns={[
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
                title: "Small Groups",
                url: "#/C"
              },
              {
                title: "Children",
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
        "text": "Resources",
        "url": "#",
        "type": "dropdown",
        aside: {
          header: "Resources",
          text: 'Learn at Providence through one of our courses or by taking advantage of our online sermons and other resources.',
          brand: {
            url: '#/',
            image: {
              title: 'image title',
              src: require("../assets/Logo_Cross.png")
            }
          }
        },
        render: () => <MegaMenu styles={deepmerge(megaMenuStyles, resourcesColumns)} hasAside={true} columns={[
          {
            heading: '',
            type: 'image',
            src: 'https://picsum.photos/400/200',
            title: 'Image',
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
        "text": "Calendar",
        "url": "#/1",
        "type": "link"
      },
      {
        "text": "Giving",
        "url": "#/2",
        "type": "link"
      },
    ],
  }
}

const styles = {
  mmOpen: {
    navbar: {
      backgroundColor: 'white',
    },
    brand: {
      opacity: 0,
    },
    dropdownItem: {
      paddingBottom: 10,
      borderBottomStyle: 'solid',
      borderBottomWidth: 2,
      borderBottomColor: '#CD7D43',
    },
    mmBackground: {
      opacity: 1,
      backgroundColor: 'white',
      height: 450,
    },
  },
  mmBackground: {
    opacity: 0,
    position: 'absolute',
    top: 0,
    width: '100vw',
    zIndex: 3,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  navbar: {
    backgroundColor: 'rgb(254,248,232)',
    padding: 0,
    paddingTop: 56,
    paddingLeft: 81,
    height: 221,
    zIndex: 4,
  },
  brand: {
    padding: 0,
    margin: 0,
  },
  brandImage: {
  },
  collapse: {
    fontSize: 25,
    margin: 0,
  },
  nav: {
    justifyContent: 'space-evenly',
    flex: 1,
  },
  navLink: {
    padding: 0,
    color: '#6A5B5D',
  },
  dropdownItem: {
    padding: 0,
    color: '#6A5B5D',
  },
  asideWrapper: {
    fontSize: 25,
    position: 'absolute',
    left: 214,
    width: 230,
    height: 500,
    overflowY: 'hidden',
    padding: 0,
    paddingTop: 120,
    zIndex: 5,
  },
  asideHeader: {
    padding: 0,
    marginLeft: 30,
    width: 125,
    color: '#6A5B5D',
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#6A5B5D',
  },
  asideBody: {
    marginTop: 15,
    paddingLeft: 35,
    lineHeight: 2,
    color: '#6A5B5D',
    fontStyle: 'italic',
    textAlign: 'left',
  },
  asideImage: {
    position: 'absolute',
    top: 57,
    left: 99,
    height: 157,
    width: 115,
    zIndex: 5,
  },
  megaMenu: {
    display: 'flex',
  }
}

const megaMenuStyles = {
  container: {
    padding: 0,
    margin: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 350,
    zIndex: 4,
    overflowX: 'scroll',
    marginLeft: 435,
  },
  defaultColumn:{
    width: 'auto',
    padding: 0,
    margin: 0,
    fontSize: 15,
    wordWrap: 'break-word',
    color: '#6A5B5D',
    marginRight: 10,
    flexWrap: 'wrap',
  },
  defaultLink: {
    color: '#6A5B5D',
    height: 50,
  },
}

const newColumns = {
  timeColumn: {
    fontSize: 22,
    textAlign: 'center',
  },
  columns: [
    {
      column: {
        alignItems: 'flex-end',
      },
      link: {
        width: 150,
        fontSize: 22,
      },
    },
    {
      column: {
        alignItems: 'center',
      },
      header: {
        fontSize: 25,
        borderBottomStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#6A5B5D',
        marginBottom: 25,
      },
    },
    {
      column: {
        alignItems: 'center',
      },
      image: {
        width: 400,
        height: 200,
      }
    }
  ]
}
const ministriesColumns = {
  columns: [
    {
      column: {
        alignItems: 'flex-end',
        marginRight: 0,
      },
      link: {
        width: 155,
        fontSize: 22,
      },
    },
    {
      column: {
        alignItems: 'center',
        marginRight: 0,
      },
      link: {
        width: 130,
        fontSize: 22,
      },
    },
    {
      column: {
        alignItems: 'center',
        marginRight: 0,
      },
      image: {
        width: 400,
        height: 200,
      }
    }
  ]
}
const resourcesColumns = {
  columns: [
    {
      column: {
        alignItems: 'flex-end',
        marginRight: 0,
      },
      image: {
        width: 400,
        height: 200,
      },
    },
    {
      column: {
        alignItems: 'center',
        marginRight: 0,
      },
      image: {
        width: 400,
        height: 200,
      },
    },
  ]
}

export default NavBar
