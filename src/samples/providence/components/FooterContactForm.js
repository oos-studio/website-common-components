import React, { Component } from 'react'
import { Form, FormGroup, Input } from 'reactstrap'
import { Button } from '../../../components/index'
import '../index.css'

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
         <FormGroup style={styles.formGroup}>
           <div style={styles.formLabel}>NAME</div> <Input style={styles.input} type='text' name='name' id='name' placeholder="Enter your name..."/>
         </FormGroup>
         <FormGroup style={styles.formGroup}>
           <div style={styles.formLabel}>EMAIL</div><Input style={styles.input} type='email' name='email' id='email' placeholder="Enter your email..." />
         </FormGroup>
         <FormGroup style={styles.formGroup}>
           <div style={styles.formLabel}>MESSAGE</div><Input style={styles.textArea} type='textarea' name='message' id='message' placeholder="Write your message here..."/>
         </FormGroup>
       </Form>
        <Button onClick={this.onSubmit} styles={styles.button}>SUBMIT</Button>
      </div>
    )
  }
}

const styles = {
  container: {
    marginTop: 10,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  formGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  input: {
    height: 60,
    borderRadius: 0,
    backgroundColor: '#F8F5EE',
    color: '#6A5B5D',
  },
  formLabel: {
    fontSize: 20,
    minWidth: 100,
    marginRight: 25,
    textAlign: 'right',
    paddingTop: 15,
    color: '#F8F5EE',
  },
  textArea: {
    height: 185,
    paddingTop: 15,
    borderRadius: 0,
    backgroundColor: '#F8F5EE',
    color: '#6A5B5D',
  },
  button: {
    borderColor: '#F8F5EE',
    borderWidth: 2,
    backgroundColor: 'transparent',
    fontSize: 25,
    color: '#F8F5EE',
    borderRadius: 0,
    marginLeft: 125,
    hovered: {
      backgroundColor: '#F8F5EE',
      color: '#6A5B5D',
      borderColor: '#6A5B5D',
    }
  },
}

export default FooterContactForm
