import React, { Component } from 'react'
import { Media } from 'reactstrap'
import withSizes from '../../../utils/Sizes'

class FooterInfo extends Component {
  render() {
    const { getStyle, xs } = this.props
    const styles = getStyle(_styles)

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
          440.937.5001 {xs ? <br /> : '| ' }<a style={{color: '#FCEBBE'}} href='https://www.oos-studio.com'>info@providencechurch.us</a>
          </div>
          <div style={styles.login}>
            <a style={{color: '#FCEBBE'}} href='https://www.oos-studio.com'>Providence Connect Login</a>
          </div>
        </div>
        </div>
        <div style={styles.divider} />
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

const _styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
    fontSize: 18,
    paddingRight: 50,
    color: '#F8F5EE',
  },
  topSection: {
    borderBottomWidth: 0,
    borderBottomStyle: 'solid',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 60,
  },
  logoWrapper: {
    marginRight: 'auto',
  },
  logo: {
    width: 250,
  },
  contact: {
    paddingLeft: 10,
    alignSelf: 'flex-end',
    paddingBottom: 15,
    whiteSpace: 'nowrap',
  },
  login: {
    marginTop: 25,
  },
  divider: {
    backgroundColor: '#F8F5EE',
    width: '100%',
    height: 2,
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
  md: {
    container: {
      paddingRight: 0,
      paddingTop: 35,
      paddingBottom: 35,
    },
    topSection: {
      flexDirection: 'column',
      paddingRight: 0,
      paddingBottom: 15,
    },
    logoWrapper: {
      marginRight: 0,
    },
    contact: {
      paddingLeft: 0,
      alignSelf: 'center',
      textAlign: 'center',
      marginTop: 50,
    },
    bottomSection: {
      marginTop: 30,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    info: {
      marginBottom: 50,
      textAlign: 'center',
    },
    social: {
      marginBottom: 10,
    },
    legal: {
      textAlign: 'center',
    }
  },
}

export default withSizes(FooterInfo)
