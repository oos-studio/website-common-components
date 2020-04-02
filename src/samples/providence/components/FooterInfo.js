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
          <div>
          35295 Detroit Road, Avon, Ohio 44011
          <br />
          440.937.5001 | <a style={{color: '#FCEBBE'}} href='https://www.oos-studio.com'>info@providencechurch.us</a>
          </div>
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
    fontSize: 18,
   // paddingRight: 50,
    color: '#F8F5EE',
  },
  topSection: {
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 60,
  },
  logoWrapper: {
  },
  logo: {
    width: 250,
  },
  contact: {
    paddingLeft: 50,
    alignSelf: 'flex-end',
    paddingBottom: 15,
    whiteSpace: 'nowrap',
  },
  login: {
    marginTop: 25,
  },
  bottomSection: {
    marginTop: 60,
    flex: 1,
  },
  info: {
    marginBottom: 90,
  },
  social: {
    width: 150,
    height: 50,
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  legal: {
    fontSize: 22,
  },
}

export default FooterInfo
