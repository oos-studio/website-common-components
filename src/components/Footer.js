import React, { Component} from 'react'
import { Col, Row, } from 'reactstrap'
import mergeStyle from '../utils/StyleMerge'

class Footer extends Component {
  render() {
    const { styles } = this.props

    const contacts = this.props.contacts.map(contact =>  {
      return (
        <Row style={styles.contacts}>
          <Col style={styles.contact}>{contact.text}</Col>
        </Row>
      )
    })

    const socials = this.props.socials.map(social => {
      return (
        <Col style={styles.social}>
          <a href={social.url}><img src={social.icon} alt={social.name}/></a>
        </Col>
      )
    })

    const legals = this.props.legals.map(legal => {
      return (
        <Col styles={styles.legal}>
          {legal.text}
        </Col>
      )
    })

    return (
      <div style={styles.footer}>
        <Row>
          <img src={this.props.logo.icon} alt="Logo" style={styles.logo}/>
        </Row>
        <Row style={styles.title}>
          {this.props.title}
        </Row>
        <Row style={styles.description}>
          {this.props.description}
        </Row>
        {contacts}
        <Row style={styles.socials}>
          {socials}
        </Row>
        <Row style={styles.legals}>
          {legals}
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
    backgroundColor: 'green',

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



export default mergeStyle(defaultStyles)(Footer)
