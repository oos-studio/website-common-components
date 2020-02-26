import React, { Component } from 'react'
import { Col, Row, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'
import Button from './Button'

class CardGrid extends Component {
  render() {
    const { styles, cards } = this.props

    const cardGrid = cards.map(card => {
      return(
        <Col md={3}>
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
              <a href={card.button.url}>
                {card.button.render ?
                  card.button.render() :
                  <Button styles={styles.button}>
                    {card.button.text}
                  </Button>
                }
              </a>
            </CardBody>
          </Card>
        </Col>
      )
    })

    return(
        <Row style={styles.container}>
          {cardGrid}
      </Row>
    )
  }
}

const defaultStyles = {
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  card: {
    backgroundColor: 'tan',
    color: 'white',
    height: '95%',
    padding: '5%',
    paddingBottom: '2%',
    display: 'flex',
    margin: '5%',
  },
  body: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  image: {
  },
  topic: {
    marginTop: '10%',
    fontSize: 33,
    textAlign: 'center',

  },
  title: {
    fontSize: 25,
  },
  subtitle: {
    fontSize: 20,
  },
  text: {
    fontSize: 15,
    paddingTop: '5%',
  },
  button: {
  },
}

CardGrid.defaultProps = {
  cards: [],
}

export default mergeStyles(defaultStyles)(CardGrid)
