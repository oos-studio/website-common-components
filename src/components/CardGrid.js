import React, { Component } from 'react'
import { Col, Row, Card, CardImg, CardBody } from 'reactstrap'
import mergeStyles from '../utils/StyleMerge'
import Button from './Button'
import renderHTML from 'react-render-html'

class CardGrid extends Component {
  state = {
    hoveredArrow: -1,
  }

  renderSubtitles = subtitle => {
    const { styles } = this.props

    return (
      <div style={styles.subtitle}>
        {subtitle}
      </div>
    )
  }

  onHoverArrow = (index) => {
    this.setState({
      hoveredArrow: index,
    })
  }

  leaveHoverArrow = () => {
    this.setState({
      hoveredArrow: -1,
    })
  }

  render() {
    const { styles, cards, useRouter, history, item } = this.props
    const { onHoverArrow, leaveHoverArrow } = this
    const { hoveredArrow } = this.state

    const cardGrid = cards.map((card, index) => {
      return(
        <Col key={index} sm={12} md={6} lg={4} style={styles.column}>
          <Card  style={styles.card}>
            <div onMouseEnter={() => onHoverArrow(index)}
                 onMouseLeave={() => leaveHoverArrow()}
                 onClick={() => card.onClick()} style={{
              ...styles.flippedText,
              height: card.isFlipped ? card.flippedHeight : 0,
              opacity: card.isFlipped ? 1 : 0,
            }}>
              <div
                style={{
                  ...styles.arrow,
                  borderColor: hoveredArrow === index ? styles.arrow.hovered.borderColor : styles.arrow.borderColor,
                }}

              />
              <div>{card.flippedText}</div>
            </div>
            <div style={styles.header}>
              {card.header}
            </div>
            <CardImg src={card.image.src} tag={card.image.tag} style={styles.image}/>
            <CardBody style={styles.body}>
              <div style={styles.title}>
                {card.title}
              </div>
              <hr style={styles.separator} />
              {card.subtitles ?
                <div style={styles.subtitles}>
                  {card.subtitles.map(subtitle => this.renderSubtitles(subtitle))}
                </div>
                : null
              }
              <div className={'card-text-wrapper'} style={styles.text}>
                {renderHTML(card.text)}
              </div>
              <div style={styles.footer}>
                {card.button.render ?
                  card.button.render() :
                  <Button useRouter={useRouter} history={history} item={item} styles={styles.button}>
                    {card.button.text}
                  </Button>
                }
              </div>
            </CardBody>
          </Card>
        </Col>
      )
    })

    return(
      <div style={styles.container}>
        <div style={styles.wrapper}>
          <Row style={styles.row}>
              {cardGrid}
          </Row>
        </div>
      </div>
    )
  }
}

const defaultStyles = {
  flippedText: {},
  container: {
  },
  wrapper: {
    maxWidth: 1200,
    margin: 'auto',
    paddingTop: 20,
    paddingBottom: 20,
  },
  row: {
    marginLeft: 40,
    marginRight: 40,
    justifyContent: 'center'
  },
  card: {
    backgroundColor: 'tan',
    color: 'white',
    height: '100%',
    borderRadius: 0,
    border: 'none',
  },
  column: {
    padding: 20,
  },
  header: {
    textAlign: 'center',
    padding: 20,
    fontSize: 21,
  },
  body: {
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: 40,
    paddingTop: 0,
    display: 'flex'
  },
  image: {
    borderRadius: 0,
  },
  title: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 24,
    textAlign: 'center',
  },
  separator: {
    margin: 0,
    borderColor: 'white',
    borderWidth: 0.5,
    marginBottom: 20,
  },
  subtitleRow: {
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    paddingBottom: 3,
  },
  subtitles: {
    paddingBottom: 17,
  },
  text: {
    fontSize: 16,
    textAlign: 'left',
    flexGrow: 1,
  },
  button: {
  },
  footer: {
    paddingTop: 20,
  }
}

CardGrid.defaultProps = {
  cards: [],
}

export default mergeStyles(defaultStyles)(CardGrid)
