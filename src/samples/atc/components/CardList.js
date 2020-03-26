import React, {Component, useState} from 'react'
import ListPage from '../../../components/ListPage'
import withSizes from '../../../utils/Sizes'
import ImageRowItem from '../../../components/ImageRowItem'
import { ListItemBody } from './index'

class CardList extends Component {
  render() {
    const { getStyle } = this.props
    return (
        <ListPage
        styles={getStyle(styles.listPage)}
        list={{
          items: [
            {
              title: 'Design',
              imageUrl: require('../assets/Design.png'),
              text: 'Let our forward-thinking team assist you in designing customer, high-quality solutions for your electronic control needs.',
            },
            {
              title: 'Engineer',
              imageUrl: require('../assets/Engineer.png'),
              text: 'Our core values and commitment to excellence set us apart.',
            },
            {
              title: 'Manufacture',
              imageUrl: require('../assets/Manufacture.png'),
              text: 'High efficiency, controlled manufacturing environments allow us to build world-class dependable products.',
            },
            {
              title: 'Support Services',
              imageUrl: require('../assets/SupportServices.png'),
              text: 'We’re here to help.',
            },
          ],
          renderItems: [
            props => <ImageRowItem styles={getStyle(styles.imageRowItem)} alignImage={'right'} {...props} renderBody={xs => <ListItemBody {...props} align={'left'} xs={xs} styles={styles.listItemBody}/>}/>,
            props => <ImageRowItem styles={getStyle(styles.imageRowItem)} alignImage={'left'} {...props} renderBody={xs => <ListItemBody {...props} align={'left'} xs={xs} styles={styles.listItemBody} />}/>,
          ]
        }}/>
    )
  }
}

const styles = {
  listPage: {
    pageContainer: {
      maxWidth: 1200,
      width: '100%',
      backgroundColor: 'rgba(0,0,0,0)',
      display: 'flex',
      justifyContent: 'center',
    },
    contentContainer: {
      maxWidth: 1200,
      backgroundColor: 'rgba(0,0,0,0)',
      display: 'flex',
      justifyContent: 'center',
    },
    contentSection: {
      backgroundColor: 'rgba(0,0,0,0)',
      flex: 1,
    },
  },
  imageRowItem: {
    container: {
      backgroundColor: '#FFFFFF',
      flex: 1,
      marginBottom: 50,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#7D7773',
      height: 450,
    },
    imageColumn: {
      height: 450,
      padding: 0,
    },
    md: {
      container: {
        height: 550
      },
      imageColumn: {
        height: 550,
      },
    },
    sm: {
      container: {
        height: 500,
      },
      imageColumn: {
        height: 500,
      },
    },
    xs: {
      container: {
        height: 700,
        backgroundColor: 'blue',
      },
    }
  },
  listItemBody: {
    container: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      paddingLeft: 50,
      paddingRight: 50,
      paddingTop: 35,
      sm: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 25,
      },
      xs: {
        paddingTop: 25,
        backgroundColor: 'red',
        height: 450,
      }
    },
    title: {
      color: '#852D3D',
      fontSize: 45,
      fontWeight: 'bold',
      marginBottom: 35,
      md: {
        fontSize: 35,
      },
      sm: {
        marginBottom: 10,
      },
    },
    divider: {
      backgroundColor: '#7D7773',
      height: 1,
      width: '100%',
      marginBottom: 35,
      sm: {
        marginBottom: 20,
      },
    },
    text: {
      color: '#7D7773',
      fontSize: 25,
      sm: {
      }
    },
    button: {
      borderWidth: 0,
      color: '#E86956',
      fontSize: 30,
      fontStyle: 'italic',
      backgroundColor: '#FFFFFF',
      padding: 0,
      position: 'absolute',
      bottom: 35,
      hovered: {
        borderWidth: 0,
        backgroundColor: '#FFFFFF',
        color: '#E86956',
      },
      xs: {
        bottom: 0,
      }
    },
  },
}

export default withSizes(CardList)
