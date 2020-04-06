import React, { Component } from 'react'
import { Blurb as BlurbComp } from '../../../components/index'

class Blurb extends Component {
  render() {
    return <BlurbComp styles={styles.blurb} {...this.props} />
  }
}

const styles = {
  blurb: {
    container: {
      marginTop: 50,
      marginBottom: 50,
    },
    title: {
      color: '#852D3D',
      fontWeight: 700,
    },
    text: {
      color: '#7D7773',
    },
  }
}

export default Blurb
