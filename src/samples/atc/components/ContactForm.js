import React, { Component } from 'react'
import { Button } from '../../../components/index'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import withSizes from '../../../utils/Sizes'
import deepmerge from 'deepmerge'
import backgroundImg from '../assets/ContactForm.png'
import '../index.css'

class ContactForm extends Component {
  handleSubmit() {

  }

  render() {
    const { handleSubmit } = this
    const { getStyle } = this.props

    return (
      <div style={getStyle(styles.container)}>
        <div style={getStyle(styles.header)}>
          Contact Us
        </div>
        <Form style={getStyle(styles.formWrapper)}>
          <FormGroup style={getStyle(styles.formGroup)}>
            <Input type="text" name="name" id="name" placeholder="Name" style={getStyle(styles.formInput)}/>
          </FormGroup>
          <FormGroup style={getStyle(styles.formGroup)}>
            <Input type="email" name="email" id="email" placeholder="Email" style={getStyle(styles.formInput)}/>
          </FormGroup>
          <FormGroup style={getStyle(styles.formGroup)}>
            <Input type="text" name="phone" id="phone" placeholder="Phone" style={getStyle(styles.formInput)}/>
          </FormGroup>
          <FormGroup style={getStyle(styles.formGroup)}>
            <Input type="textarea" name="message" id="message" placeholder="Type something..." style={getStyle(styles.formMessage)} />
          </FormGroup>
          <Button styles={getStyle(styles.submit)} onClick={handleSubmit}>
            SUBMIT
          </Button>
        </Form>
      </div>
    )
  }
}

const styles = {
  container: {
    height: 600,
    width: '100%',
    backgroundImage: `url(${backgroundImg})`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 50,
    sm: {
      padding: 35,
    }
  },
  header: {
    fontSize: 60,
    color: '#FFFFFF',
    marginBottom: 25,
    fontFamily: 'capitolina, serif',
    fontWeight: 700,
    sm: {
      fontSize: 35,
    }
  },
  formWrapper: {
    minHeight: 0,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    sm: {
      width: '100%',
    },

  },
  formGroup: {
    sm: {
      width: '100%',
    },
  },
  formInput: {
    marginBottom: 38,
    height: 60,
    width: 381,
    backgroundColor: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(8px)',
    "-webkit-backdrop-filter": 'blur(8px)',
    color: '#FFFFFF',
    borderColor: '#EDE8E4',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 0,
    sm: {
      marginBottom: 15,
      height: 53,
      width: '100%',

    },
    xs: {
    },
  },
  formMessage: {
    height: 175,
    width: 381,
    marginBottom: 38,
    marginLeft: 38,
    paddingTop: 16,
    backgroundColor: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(8px)',
    "-webkit-backdrop-filter": 'blur(8px)',
    color: '#FFFFFF',
    borderColor: '#EDE8E4',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 0,
    sm: {
      marginBottom: 15,
      marginLeft: 0,
      height: 100,
      width: '100%',
    },
    xs: {
    },
  },
  submit: {
    marginLeft: 38,
    height: 60,
    backgroundColor: '#862C3C',
    borderWidth: 0,
    color: '#FFFFFF',
    width: 381,
    borderRadius: 0,
    fontFamily: 'acumin-pro-condensed, sans-serif',
    letterSpacing: 1.25,
    hovered: {
      backgroundColor: '#E86956',
      borderWidth: 0,
      color: '#FFFFFF',
    },
    sm: {
      height: 53,
      marginLeft: 0,
      width: '100%',
    },
    xs: {
    },
  },
}

export default withSizes(ContactForm)
