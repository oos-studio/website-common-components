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

    },
    brand: {
      opacity: 0,
    },
    dropdownItem: {
    },
    mmBackground: {
      opacity: 1,
      backgroundColor: 'white',
      height: 521,
    },
  },
  mmBackground: {
    opacity: 0,
    position: 'absolute',
    top: 0,
    width: '100vw',
    zIndex: 0,
  },
  navbar: {
    backgroundColor: 'rgba(0,0,0,0)',
    padding: 0,
    paddingTop: 56,
    paddingLeft: 81,
    height: 221,
    zIndex: 1,
  },
  brand: {
    padding: 0,
    margin: 0,
  },
  brandImage: {
  },
  collapse: {
    fontSize: 18,
    margin: 0,
  },
  nav: {
    justifyContent: 'space-evenly',
    flex: 1,
  },
  navLink: {
    padding: 0,
  },
  dropdownItem: {
    padding: 0,
  },
  asideWrapper: {
    fontSize: 25,
    position: 'absolute',
    left: 214,
    width: 230,
    height: 341,
    padding: 0,
    paddingTop: 120,
    zIndex: 3,
  },
  asideHeader: {
    padding: 0,
    marginLeft: 30,
    width: 200,
  },
  asideBody: {
  },
  asideImage: {
    position: 'absolute',
    top: 57,
    left: 99,
    height: 157,
    width: 115,
    zIndex: 3,
  },
  megaMenu: {
    display: 'flex',
    marginLeft: 450,
  }
}

const megaMenuStyles = {
  container: {
    padding: 0,
    margin: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 300,
    zIndex: 2,
    overflowX: 'scroll',
  },
  defaultColumn:{
    padding: 0,
    margin: 0,
    fontSize: 15,
    height: '100%',
    wordWrap: 'break-word',
  },
}

const newColumns = {
  timeColumn: {

  },
  columns: [
    {
      column: {
        alignItems: 'flex-end',
      }
    },
    {
      column: {
        alignItems: 'flex-end',
      },
      header: {

      },
    },
    {
      column: {
      },
    }
  ]
}
const ministriesColumns = {
  columns: [
    {
      column: {
        flex: 1,
      }
    },
    {
      column: {
        flex: 1,
      },
    },
    {
      column: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
      },
    }
  ]
}
const resourcesColumns = {
  columns: [
    {
      column: {
        alignItems: 'flex-start',
      }
    },
    {
      column: {
        alignItems: 'flex-start',
      },
    },
  ]
}

export default NavBar
