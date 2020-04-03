import React, {Component} from 'react'
import {Form, FormGroup, Input} from 'reactstrap'

class DropdownSearch extends Component {
  componentDidUpdate() {
    setTimeout(() => {
      document.getElementById('ddSearch').focus()
    }, 0)
  }

  render() {
    const { styles } = this.props
    return(
      <React.Fragment>
        <div style={styles.search.shadow}>

        </div>
        <div style={styles.search.container}>
          <Form style={styles.search.form}>
            <FormGroup style={styles.search.formGroup}>
              <Input type='text' name='search' id='ddSearch' placeholder='Search' style={styles.search.input}/>
            </FormGroup>
          </Form>
        </div>
      </React.Fragment>
    )
  }
}
export default DropdownSearch
