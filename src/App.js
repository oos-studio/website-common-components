import React from 'react'
import { Footer } from './components'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function App() {
  const footerProps = {
    columns: [
      {
        heading: '',
        type: 'image',
        src: 'https://picsum.photos/200/200',
        title: 'Image',
      },
      {
      heading: 'Contact Us',
      type: 'links',
      links: [
        {
          title: 'Email | jordan@oos-studio.com',
          url: '#/A'
        },
        {
          title: "Phone | 919-600-4862",
          url: "#/B"
        },
        {
          title: 'Email | jordan@oos-studio.com',
          url: '#/A'
        },
        {
          title: "Phone | 919-600-4862",
          url: "#/B"
        },
      ]
    },
      {
        heading: 'Address',
        type: 'text',
        text: [
            '815 Frost Rd \n #503 \n Streetsboro, OH 44241'
        ]
      },
      {
        heading: 'Contact Form',
        render: () => {
          return (
          <Form style={styles.form}>
            <FormGroup style={styles.formGroup}>
              <Input type='email' placeholder='Enter your email address' />
            </FormGroup>
            <FormGroup style={styles.formGroup}>
              <Input type='text' placeholder='Subject' />
            </FormGroup>
            <FormGroup style={styles.formGroup}>
              <Input type='textarea' placeholder='Enter your message here' />
            </FormGroup>
          </Form>
          )
        }
      },
      ],
  }

  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    formGroup: {
      width: '100%',
      margin: 5,
    }
  }
  return (
    <Footer columns={footerProps.columns}/>
  )
}

export default App
