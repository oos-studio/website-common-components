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
        render: () => <MegaMenu hasAside={true} styles={newStyles} columns={[
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
                <div style={newStyles.timeColumn}>
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
        render: () => <MegaMenu styles={ministriesStyles} hasAside={true} columns={[
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
        render: () => <MegaMenu styles={resourcesStyles} hasAside={true} columns={[
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
      height: '221px',
      paddingTop: '56px',
      zIndex: 2,
      backgroundColor: 'white',
    },
    brand: {
      opacity: 0,
      marginLeft: '81px',
      position: 'absolute',
    },
    dropdownItem: {
      height: '39px',
      padding: '0px',
      margin: '0px',
      fontSize: '25px',
      color: '#6A5B5D',
      borderBottomColor: '#CD7D43',
      borderBottomWidth: '2px',
      borderBottomStyle: 'solid',

    },
  },
  navbar: {
    height: '221px',
    paddingTop: '56px',
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0)',
  },

  brand: {
    marginLeft: '81px',
    position: 'absolute',

  },
  brandImage: {
    objectFit: 'cover',
    //width: '467px',
    height: '165px',
    top: '56px',
    left: '81px',
  },
  nav: {
    top: '120px',
    height: '39px',
    flex: 1,
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  collapse: {

    marginLeft: '525px',
    marginRight: '50px',
  },
  navItem: {
  },
  navLink: {
    height: '39px',
    padding: '0px',
    margin: '0px',
    fontSize: '25px',
    color: '#6A5B5D',

  },
  dropdownItem: {
    height: '39px',
    padding: '0px',
    margin: '0px',
    fontSize: '25px',
    color: '#6A5B5D',
  },
  asideWrapper: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: '90px',
    paddingLeft: '215px',
  },
  asideTextWrapper: {

  },
  asideHeader: {
    color: '#6A5B5D',
    fontSize: '28px',
    margin: 0,
    padding: 0,
   // marginRight: '80px',
    paddingBottom: '10px',
    borderBottomWidth: '2px',
    borderBottomColor: '#6A5B5D',
    borderBottomStyle: 'solid',
    width: '200px',
  },
  asideBody: {
    color: '#6A5B5D',
    fontSize: '15px',
    //marginRight: '150px',
    marginTop: '25px',
    lineHeight: 2,
    width: '200px',

  },
  asideImage: {
    position: 'absolute',
    top: '57px',
    left: '99px',
    height: '157px',
    width: '115px',
  },
  megaMenu: {
    display: 'flex',
    position: 'absolute',
    top: 0,
  }
}

const newStyles = {
  defaultLink: {
    color: '#6A5B5D',
  },

  container: {
    height: '600px',
    margin: 0,
    flex: 4,
    overflowX: 'hidden',
    paddingBottom: '50px',
    paddingTop: '225px',
    paddingLeft: '110px',
    justifyContent: 'space-evenly',
  },
  defaultHeader: {
    fontSize: '30px',
    color: '#6A5B5D',
  },
  defaultColumn: {
    flex: 1,
   // padding: '10px',
    justifyContent: 'space-between',
  },
  timeColumn: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '25px',
    color: '#6A5B5D',
    marginRight: '25px',
    marginTop: '25px',
  },
  columns: [
    {
      column: {
        flex: 1,
      }
    },
    {
      column: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        textAlign: 'right',
      },
      header: {
        borderBottomWidth: '2px',
        borderBottomColor: '#6A5B5D',
        borderBottomStyle: 'solid',
        marginLeft: '100px',
        marginRight: '25px',
        paddingBottom: '20px',
      },
    },
    {
      column: {
        flex: 2,
        justifyContent: 'center',
      },
    }
  ]
}

const ministriesStyles = {
  defaultLink: {
    color: '#6A5B5D',
  },

  container: {
    height: '600px',
    margin: 0,
    flex: 4,
    overflowX: 'hidden',
    paddingBottom: '50px',
    paddingTop: '225px',
    justifyContent: 'space-evenly',
    paddingLeft: '110px',
  },
  defaultHeader: {
    fontSize: '30px',
    color: '#6A5B5D',
  },
  defaultColumn: {
    flex: 1,
    // padding: '10px',
    justifyContent: 'space-between',
  },
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

const resourcesStyles = {
  defaultLink: {
    color: '#6A5B5D',
  },

  container: {
    height: '600px',
    margin: 0,
    flex: 4,
    overflowX: 'hidden',
    paddingBottom: '50px',
    paddingTop: '225px',
    justifyContent: 'space-evenly',
    paddingLeft: '110px',
  },
  defaultHeader: {
    fontSize: '30px',
    color: '#6A5B5D',
  },
  defaultColumn: {
    flex: 1,
    // padding: '10px',
    justifyContent: 'space-between',
  },
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
