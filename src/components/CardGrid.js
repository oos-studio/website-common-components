import React, { Component} from 'react'
import {
  Col, Container, Row, Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText
} from 'reactstrap'

class CardGrid extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { ...styles } = this.props
    const { cards } = this.props

    const cardGrid = cards.map(card => {
      return(
        <Col>
        <Card style={styles.card}>
          <CardImg src={card.image.icon} style={styles.image}/>
          <p style={styles.topic}>
            {card.topic}
          </p>
          <hr />
          <CardBody>
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
        </Col>
      )
    })

    return(
      <Container style={styles.cardGrid}>
        <Row>
          {cardGrid}
        </Row>
    </Container>
    )
  }
}

const defaultStyles = {
  cardGrid: {

  },
  card: {

  },
  image: {

  },
  topic: {

  },
  title: {

  },
  subtitle: {

  },
  text: {

  },
  action: {

  }
}

CardGrid.defaultProps = {
  cards: [],
  styles: defaultStyles,
}

export default CardGrid