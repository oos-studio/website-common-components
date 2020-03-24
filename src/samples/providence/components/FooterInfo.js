import React, { Component } from 'react'
import { Media } from 'reactstrap'

class FooterInfo extends Component {
  render() {
    const { socials } = this.props
    return (
      <div style={styles.container}>
        <div style={styles.topSection}>
        <div style={styles.logoWrapper}>
          <Media object src={require('../assets/Footer_Logo.png')} style={styles.logo} />
        </div>
        <div style={styles.contact}>
          35295 Detroit Road, Avon, Ohio 44011
          <br />
          440.937.5001 | <a style={{color: '#FCEBBE'}} href='https://www.oos-studio.com'>info@providencechurch.us</a>
          <div style={styles.login}>
            <a style={{color: '#FCEBBE'}} href='https://www.oos-studio.com'>Providence Connect Login</a>
          </div>
        </div>
        </div>
        <div style={styles.bottomSection}>
        <div style={styles.info}>
          Providence Church is a member of the <a style={{color: '#FCEBBE'}} href='https://www.efca.org'>Evangelical Free Church in America</a>
        </div>
        <div style={styles.social}>
          {socials.map(s => {
            return(
              <React.Fragment>
                <a href={s.url}><Media object src={s.icon} alt={s.name} style={{width: 30, height: 30}} /></a>
              </React.Fragment>
            )
          })}
        </div>
        <div style={styles.legal}>
          COPYRIGHT 2020 PROVIDENCE CHURCH
        </div>
      </div>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
    fontSize: 16,
    paddingRight: 50,
    color: '#F8F5EE',
  },
  topSection: {
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    display: 'flex',
    paddingBottom: 50,
  },
  logoWrapper: {
  },
  logo: {
    width: 250,
  },
  contact: {
    paddingLeft: 50,
  },
  login: {
    marginTop: 25,
  },
  bottomSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  info: {
  },
  social: {
    width: 200,
    height: 50,
    display: 'flex',
    justifyContent: 'space-between',
  },
  legal: {
    fontSize: 22,
  },
}

export default FooterInfo
