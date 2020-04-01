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
              text: 'High efficiency, controlled manufacturing environments allow us to build world-class dependable products.High efficiency, controlled manufacturing environments allow us to build world-class dependable productsHigh efficiency, controlled manufacturing environments allow us to build world-class dependable productsHigh efficiency, controlled manufacturing environments allow us to build world-class dependable productsHigh efficiency, controlled manufacturing environments allow us to build world-class dependable products',
            },
            {
              title: 'Support Services',
              imageUrl: require('../assets/SupportServices.png'),
              text: 'We’re here to help.',
            },
          ],
          renderItems: [
            props => <ImageRowItem styles={getStyle(styles.imageRowItem)} stack={'sm'} alignImage={'right'} {...props} renderBody={xs => <ListItemBody {...props} image={require('../assets/ReadMore.png')} hoverImage={require('../assets/ReadMore_hover.png')} align={'left'} styles={styles.listItemBody}/>}/>,
            props => <ImageRowItem styles={getStyle(styles.imageRowItem)} stack={'sm'} alignImage={'left'} {...props} renderBody={xs => <ListItemBody {...props} image={require('../assets/ReadMore.png')} hoverImage={require('../assets/ReadMore_hover.png')} align={'left'} styles={styles.listItemBody} />}/>,
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
      minHeight: 450,
    },
    imageColumn: {
      minHeight: 450,
      maxHeight: 'none',
      height: 'auto',
      padding: 0,
    //  paddingBottom: 2,
      width: '50%',
      xs: {
        height: 300,
      },
    },
    md: {
      container: {
        minHeight: 550
      },
      imageColumn: {
        minHeight: 550,
      },
    },
    sm: {
      container: {
        minHeight: 0,
        maxHeight: 'none',
        height: 'auto',
      },
      imageColumn: {
        minHeight: 250,
      },
      image: {
        height: 250,
      },
      row: {
        height: '100%',
      },
      bodyColumn: {
        minHeight: 'none',
        height: 'auto',
      },
    },
    xs: {
      imageColumn: {
        minHeight: 300,
      },
      image: {
        height: 200,
      },
      row: {
        height: '100%',
      },
    },
    image: {
      xs: {
        height: 300,
      },
    },
  },
  listItemBody: {
    container: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      paddingLeft: 32,
      paddingRight: 32,
      paddingTop: 35,
      paddingBottom: 75,
      sm: {
        paddingLeft: 20,
        paddingRight: 25,
        paddingTop: 10,
       // justifyContent: 'space-between',
        paddingBottom: 10,
      },
      xs: {
      }
    },
    title: {
      color: '#852D3D',
      fontSize: 45,
      fontWeight: 'bold',
      marginBottom: 35,
      md: {
      },
      sm: {
        fontSize: 35,
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
      transition: 'none',
      hovered: {
        borderWidth: 0,
        backgroundColor: '#FFFFFF',
        color: '#852D3D',
      },
      sm: {
        position: 'static',
        marginTop: 10,
      },
    },
  },
}

export default withSizes(CardList)
