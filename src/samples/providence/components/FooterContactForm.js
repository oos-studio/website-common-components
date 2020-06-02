import React, { Component } from 'react'
import { Form, FormGroup, Input } from 'reactstrap'
import { Button } from '../../../components/index'
import '../index.css'
import withSizes from '../../../utils/Sizes'

class FooterContactForm extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit() {
    console.log('test')
  }

  render() {
    const { getStyle } = this.props
    const styles = getStyle(_styles)
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          CONNECT WITH US
        </div>
       <Form style={styles.form}>
         <FormGroup style={styles.formGroup}>
           <div style={styles.formLabel}>NAME</div> <Input style={styles.input} type='text' name='name' id='name'/>
         </FormGroup>
         <FormGroup style={styles.formGroup}>
           <div style={styles.formLabel}>EMAIL</div><Input style={styles.input} type='email' name='email' id='email' />
         </FormGroup>
         <FormGroup style={styles.formGroup}>
           <div style={styles.formLabel}>MESSAGE</div><Input style={styles.textArea} type='textarea' name='message' id='message'/>
         </FormGroup>
       </Form>
      <Button onClick={this.onSubmit} styles={styles.button}>SUBMIT</Button>
      </div>
    )
  }
}

const _styles = {
  container: {
    marginTop: 10,
    marginLeft: 35,
  },
  header: {
    fontSize: 25,
    color: '#FDECBB',
    paddingLeft: 125,
    whiteSpace: 'nowrap',
    letterSpacing: 2.6,
    marginBottom: 20,
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
    height: 45,
    borderRadius: 0,
    backgroundColor: '#F8F5EE',
    color: '#6A5B5D',
    minWidth: 250,
  },
  formLabel: {
    fontSize: 20,
    minWidth: 100,
    marginRight: 25,
    textAlign: 'right',
    paddingTop: 10,
    letterSpacing: 2,
    color: '#F8F5EE',
  },
  textArea: {
    height: 138,
    paddingTop: 15,
    borderRadius: 0,
    backgroundColor: '#F8F5EE',
    color: '#6A5B5D',
    minWidth: 250,
  },
  button: {
    borderColor: '#F8F5EE',
    borderWidth: 2,
    backgroundColor: 'transparent',
    fontSize: 25,
    color: '#F8F5EE',
    borderRadius: 0,
    marginLeft: 125,
    letterSpacing: 2,
    hovered: {
      backgroundColor: 'transparent',
      color: '#CD7D43',
      borderColor: '#CD7D43',
    }
  },
  md: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 35,
      paddingBottom: 35,
      marginLeft: 0,
    },
    header: {
      paddingLeft: 0,
      fontSize: 30,
    },
    form: {
      width: '100%',
    },
    formGroup: {
      flexDirection: 'column',
      marginBottom: 10,
    },
    formLabel: {
      minWidth: 0,
      textAlign: 'left',
      marginRight: 0,
      marginBottom: 10,
    },
    input: {
    },
    textArea: {
      marginBottom: 30,
    },
    button: {
      marginLeft: 0,
      alignSelf: 'center',
      width: 215,
    },
  },
}

export default withSizes(FooterContactForm)
