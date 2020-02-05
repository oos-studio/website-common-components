import React, { Component} from 'react'
import { Media, Col, Container, Row, } from 'reactstrap'

class Footer extends Component {


  render() {
    const { title, description, logo, contacts, socials, legals, styles } = this.props

    const contactInfo = contacts.map(contact =>  {
      return (
        <Row style={styles.contacts}>
          <Col style={styles.contact}>{contact.text}</Col>
        </Row>
      )
    })

    const socialInfo = socials.map(social => {
      return (
        <Col style={styles.social}>
          <a href={social.url}><img src={social.icon} alt={social.name}/></a>
        </Col>
      )
    })

    const legalInfo = legals.map(legal => {
      return (
        <Col styles={styles.legal}>
          {legal.text}
        </Col>
      )
    })

    return (
          <div style={styles.footer}>
            <Row>
              <img src={logo.icon} alt="Logo" style={styles.logo}/>
            </Row>
            <Row style={styles.title}>
              {title}
            </Row>
            <Row style={styles.description}>
              {description}
            </Row>
            {contactInfo}
            <Row style={styles.socials}>
              {socialInfo}
            </Row>
            <Row style={styles.legals}>
              {legalInfo}
            </Row>
          </div>

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
