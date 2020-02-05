import React, { Component } from 'react'
import { Col, Row, Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import deepmerge from 'deepmerge'

class CardGrid extends Component {
  constructor(props) {
    super(props);

    this.mergedStyles = {}

  }

  render() {
    const { ...styles } = this.props
    const { cards } = this.props

    this.mergedStyles = deepmerge(defaultStyles, styles)
    console.log(this.mergedStyles)

    const cardGrid = cards.map(card => {
      return(
        <Col xl={4} lg={4} md={6} sm={12} xs={12}>
          <Card style={this.mergedStyles.card}>
            <CardImg src={card.image.image} style={this.mergedStyles.image}/>
            <p style={this.mergedStyles.topic}>
              {card.topic}
            </p>
            <hr />
            <CardBody style={this.mergedStyles.body}>
              <CardTitle style={this.mergedStyles.title}>
                {card.title}
              </CardTitle>
              <CardSubtitle style={this.mergedStyles.subtitle}>
                {card.subtitle}
              </CardSubtitle>
              <CardText style={this.mergedStyles.text}>
                {card.text}
              </CardText>
              <a href={card.action.url}>
                <Button style={this.mergedStyles.action}>
                  {card.action.text}
                </Button>
              </a>
            </CardBody>
          </Card>
        </Col>
      )
    })

    return(
      <div style={this.mergedStyles.cardGrid}>
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

export default CardGrid