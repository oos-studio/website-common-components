import React, {Component} from 'react'
import {TileGrid as TileGridComp} from '../../../components/'
import TileBodyImage from './TileBodyImage'
import TileBodyIcon from './TileBodyIcon'

class TileGrid extends Component {
  render() {
    const { type } = this.props

    return (
      <TileGridComp styles={type === 'default' ? imageStyles : iconStyles} tiles={type === 'default' ? imageTiles : iconTiles}/>
    )
  }
}

const iconTiles = [
  {
    subtitle: 'Eu has saepe omnesque, no utamur convenire sadipscing nam. Nonumy menandri est id.',
    renderBody: () => {return (<TileBodyIcon img={require('../assets/RV.png')} txt={'RV'} url={'https://www.oos-studio.com'} />)}
  },
  {
    subtitle: 'Eu has saepe omnesque, no utamur convenire sadipscing nam. Nonumy menandri est id.',
    renderBody: () => {return (<TileBodyIcon img={require('../assets/Marine.png')} txt={'Marine'} url={'https://www.oos-studio.com'} />)}  },
  {
    subtitle: 'Eu has saepe omnesque, no utamur convenire sadipscing nam. Nonumy menandri est id.',
    renderBody: () => {return (<TileBodyIcon img={require('../assets/Trucks.png')} txt={'Trucks'} url={'https://www.oos-studio.com'} />)}  },
  {
    subtitle: 'Eu has saepe omnesque, no utamur convenire sadipscing nam. Nonumy menandri est id.',
    renderBody: () => {return (<TileBodyIcon img={require('../assets/Transit.png')} txt={'Transit'} url={'https://www.oos-studio.com'} />)}  },
  {
    subtitle: 'Eu has saepe omnesque, no utamur convenire sadipscing nam. Nonumy menandri est id.',
    renderBody: () => {return (<TileBodyIcon _styles={vanIconStyles} img={require('../assets/Vans.png')} txt={'Vans'} url={'https://www.oos-studio.com'} />)}  },
  {
    subtitle: 'Eu has saepe omnesque, no utamur convenire sadipscing nam. Nonumy menandri est id.',
    renderBody: () => {return (<TileBodyIcon _styles={trailerIconStyles} img={require('../assets/Trailers.png')} txt={'Trailers'} url={'https://www.oos-studio.com'} />)}  },
]

const imageTiles = [
  {
    subtitle: 'Eu has saepe omnesque, no utamur convenire sadipscing nam. Nonumy menandri est id.',
    renderBody: () => {return (<TileBodyImage img={'https://picsum.photos/800/800'} txt={'RV'} url={'https://www.oos-studio.com'} />)}
  },
  {
    subtitle: 'Eu has saepe omnesque, no utamur convenire sadipscing nam. Nonumy menandri est id.',
    renderBody: () => {return (<TileBodyImage img={'https://picsum.photos/800/800'} txt={'Marine'} url={'https://www.oos-studio.com'} />)}  },
  {
    subtitle: 'Eu has saepe omnesque, no utamur convenire sadipscing nam. Nonumy menandri est id.',
    renderBody: () => {return (<TileBodyImage img={'https://picsum.photos/800/800'} txt={'Trucks'} url={'https://www.oos-studio.com'} />)}  },
  {
    subtitle: 'Eu has saepe omnesque, no utamur convenire sadipscing nam. Nonumy menandri est id.',
    renderBody: () => {return (<TileBodyImage img={'https://picsum.photos/800/800'} txt={'Transit'} url={'https://www.oos-studio.com'} />)}  },
  {
    subtitle: 'Eu has saepe omnesque, no utamur convenire sadipscing nam. Nonumy menandri est id.',
    renderBody: () => {return (<TileBodyImage img={'https://picsum.photos/800/800'} txt={'Vans'} url={'https://www.oos-studio.com'} />)}  },
  {
    subtitle: 'Eu has saepe omnesque, no utamur convenire sadipscing nam. Nonumy menandri est id.',
    renderBody: () => {return (<TileBodyImage img={'https://picsum.photos/800/800'} txt={'Trailers'} url={'https://www.oos-studio.com'} />)}  },
]

const imageStyles = {
  container: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: '100%',
    maxWidth: 1200,
    display: 'grid',
    justifyItems: 'center',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridRowGap: 50,
    md: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    sm: {
      gridTemplateColumns: 'auto',
    },
  },
  tileWrapper: {
    width: 300,
    margin: 5,
    sm: {
      width: '100%',
    },
  },
  tileBodyWrapper: {
    backgroundColor: '#DCD3CB',
    color: '#FFFFFF',
    height: 300,
    width: 300,
    sm: {
      width: '100%',
      position: 'relative',
      paddingTop: '100%',
    },
  },
  tileSubtitle: {
    marginTop: 20,
    fontSize: 17,
    color: '#562A31',
  },
}

const iconStyles = {
  container: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: '100%',
    maxWidth: 1200,
    display: 'grid',
    justifyItems: 'center',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridRowGap: 50,
    md: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    sm: {
      gridTemplateColumns: 'auto',
    },
  },
  tileWrapper: {
    width: 300,
    margin: 5,
    sm: {
      width: '100%',
    },
  },
  tileBodyWrapper: {
    backgroundColor: '#DCD3CB',
    color: '#FFFFFF',
    height: 300,
    width: 300,
    sm: {
      width: '100%',
      position: 'relative',
      paddingTop: '100%',
    },
  },
  tileSubtitle: {
    marginTop: 20,
    fontSize: 17,
    color: '#562A31',
  },
}

const vanIconStyles = {
  container: {
    paddingTop: 38,
    sm: {
      paddingTop: 50,
      paddingBottom: 75,
    },
    xs: {
      paddingTop: 50,
      paddingBottom: 25,
    },
  }
}

const trailerIconStyles = {
  container: {
    paddingTop: 38,
    sm: {
      paddingTop: 50,
      paddingBottom: 75,
    },
    xs: {
      paddingTop: 50,
      paddingBottom: 25,
    },
  }
}

export default TileGrid
