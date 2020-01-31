import React, { Component} from 'react'
import { Col, Container, Row, } from 'reactstrap'

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description, logo, contact, social, legal, styles } = this.props

    const contacts = contact.map(contact =>  {
      return (
        <Row style={styles.contacts}>
          <Col style={styles.contact}>{contact.name}</Col>
          <Col style={styles.contact}>{contact.text}</Col>
        </Row>
      )
    })

    const socials = social.map(social => {
      return (
        <Col style={styles.social}>
          <a href={social.url}><img src={social.icon}/></a>
        </Col>
      )
    })

    const legals = legal.map(legal => {
      return (
        <Col styles={styles.legal}>
          {legal.text}
        </Col>
      )
    })

    return (
          <Container style={styles.footer}>
            <Row style={styles.logo}>
              {logo.icon}
            </Row>
            <Row style={styles.title}>
              {title}
            </Row>
            <Row style={styles.description}>
              {description}
            </Row>
            {contacts}
            <Row style={styles.socials}>
              {socials}
            </Row>
            <Row style={styles.legals}>
              {legals}
            </Row>
          </Container>

    )
  }
}

const defaultStyles = {
  footer: {

  },
  logo: {

  },
  title: {

  },
  description: {

  },
  contacts: {

  },
  contact: {

  },
  socials: {

  },
  social: {

  },
  legals: {

  },
  legal: {

  }
}

Footer.defaultProps = {
  title: '',
  description: '',
  logo: {},
  contact: [],
  social: [],
  legal: [],
  styles: defaultStyles,
}



export default Footer
