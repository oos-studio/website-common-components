import React, { Component } from 'react'
import { Col, Row, Button, Container, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import mergeStyle from '../utils/StyleMerge'

class CardGrid extends Component {
  render() {
    const { styles, cards } = this.props

    const cardGrid = cards.map(card => {
      return(
          <Card style={styles.card}>
            <CardImg src={card.image.src} style={styles.image}/>
            <p style={styles.topic}>
              {card.topic}
            </p>
            <hr />
            <CardBody style={styles.body}>
              <CardTitle style={styles.title}>
                {card.title}
              </CardTitle>
              <CardSubtitle style={styles.subtitle}>
                {card.subtitle}
              </CardSubtitle>
              <CardText style={styles.text}>
                {card.text}
              </CardText>
              <a href={card.action.url}>
                <Button style={styles.action}>
                  {card.action.text}
                </Button>
              </a>
            </CardBody>
          </Card>
      )
    })

    return(
      <Container fluid style={styles.cardGrid}>
          {cardGrid}
      </Container>
    )
  }
}

const defaultStyles = {
  cardGrid: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    margin: '5%',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'tan',
    color: 'white',
    padding: 20,
    display: 'flex',
  },
  body: {
    paddingTop: 0,
  },
  image: {
  },
  topic: {
    textAlign: 'left',
    marginTop: '10%',
    fontSize: 33,
  },
  title: {
    fontSize: 25,
  },
  subtitle: {
    fontSize: 20,
  },
  text: {
    fontSize: 15,
    paddingTop: 10,
  },
  action: {
    backgroundColor: 'tan',
    borderColor: 'white',
    borderWidth: 2,
  },
}

CardGrid.defaultProps = {
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
      action: {
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
      action: {
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
      action: {
        text: 'Learn More',
        url: 'https://www.oos-studio.com',
      }
    },
  ],
  styles: defaultStyles,
}

export default mergeStyle(defaultStyles)(CardGrid)
