import React, { Component } from 'react'
import { Col, Row, Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import mergeStyle from '../utils/StyleMerge'

class CardGrid extends Component {
  render() {
    const { styles, cards } = this.props

    const cardGrid = cards.map(card => {
      return(
        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
          <Card style={styles.card}>
            <CardImg src={card.image.image} style={styles.image}/>
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
        </Col>
      )
    })

    return(
      <div style={styles.cardGrid}>
        <Row>
          {cardGrid}
        </Row>
      </div>
    )
  }
}

const defaultStyles = {
  cardGrid: {
  },
  card: {

  },
  body: {

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

  },
}

CardGrid.defaultProps = {
  cards: [],
  styles: defaultStyles,
}

export default mergeStyle(defaultStyles)(CardGrid)