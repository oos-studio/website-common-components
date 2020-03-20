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
    const { isMobile } = this.props
    const { handleSubmit } = this

    const activeStyles = isMobile ? deepmerge(styles, styles.mobile) : styles

    return (
      <div style={activeStyles.container}>
        <div style={activeStyles.header}>
          Contact Us
        </div>
        <Form style={activeStyles.formWrapper}>
          <FormGroup>
            <Input type="text" name="name" id="name" placeholder="Name" style={activeStyles.formInput}/>
          </FormGroup>
          <FormGroup>
            <Input type="email" name="email" id="email" placeholder="Email" style={activeStyles.formInput}/>
          </FormGroup>
          <FormGroup>
            <Input type="text" name="phone" id="phone" placeholder="Phone" style={activeStyles.formInput}/>
          </FormGroup>
          <FormGroup>
            <Input type="textarea" name="message" id="message" placeholder="Type something..." style={activeStyles.formMessage} />
          </FormGroup>
          <Button styles={activeStyles.submit} onClick={handleSubmit}>
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
  },
  header: {
    fontSize: 60,
    color: '#FFFFFF',
    marginBottom: 25,
  },
  formWrapper: {
    minHeight: 0,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
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
  },
  submit: {
    marginLeft: 38,
    height: 60,
    backgroundColor: '#862C3C',
    borderWidth: 0,
    color: '#FFFFFF',
    width: 381,
    borderRadius: 0,
    hovered: {
      backgroundColor: '#E86956',
      borderWidth: 0,
      color: '#FFFFFF',
    }
  },
  mobile: {
    container: {
      padding: 35,
    },
    header: {
      fontSize: 35,
    },
    formInput: {
      marginBottom: 15,
      height: 53,
      width: 300,
    },
    formMessage: {
      marginBottom: 15,
      marginLeft: 0,
      height: 100,
      width: 300,
    },
    submit: {
      height: 53,
      width: 300,
      marginLeft: 0,
    },
  },
}

export default withSizes(ContactForm)
