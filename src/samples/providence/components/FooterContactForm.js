import React, { Component } from 'react'
import { Form, FormGroup, Input } from 'reactstrap'
import { Button } from '../../../components/index'

class FooterContactForm extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
    console.log('test')
  }

  render() {
    return (
      <div style={styles.container}>
       <Form style={styles.form}>
         <FormGroup>
          <Input style={styles.input} type='email' name='email' id='email' placeholder='Enter your email address...' />
         </FormGroup>
         <FormGroup>
           <Input style={styles.input} type='text' name='subject' id='subject' placeholder='Enter a subject...' />
         </FormGroup>
         <FormGroup>
          <Input style={styles.textArea} type='textarea' name='message' id='message' placeholder='Write your message here...' />
         </FormGroup>
       </Form>
        <Button onClick={this.onSubmit} styles={styles.button}>SUBMIT</Button>
      </div>
    )
  }
}

const styles = {
  container: {
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: 300,
  },
  input: {
    height: 60,
  },
  textArea: {
    height: 200,
    marginBottom: 100,
  },
  button: {
    borderColor: '#F8F5EE',
    borderWidth: 2,
    backgroundColor: 'transparent',
    fontSize: 25,
    color: '#F8F5EE',
    hovered: {
      backgroundColor: '#F8F5EE',
      color: '#6A5B5D',
      borderColor: '#6A5B5D',
    }
  },
}

export default FooterContactForm
