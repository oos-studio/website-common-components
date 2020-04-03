import React, {Component} from 'react'
import {TileGrid as TileGridComp} from '../../../components/'
import TileBody from './TileBody'

class TileGrid extends Component {
  render() {
    return (
      <TileGridComp styles={styles} tiles={tiles}/>
    )
  }
}

const tiles = [
  {
    subtitle: 'Eu has saepe omnesque, no utamur convenire sadipscing nam. Nonumy menandri est id.',
    renderBody: () => {return (<TileBody img={'https://picsum.photos/800/800'} txt={'RV'} url={'https://www.oos-studio.com'} />)}
  },
  {
    subtitle: 'Eu has saepe omnesque, no utamur convenire sadipscing nam. Nonumy menandri est id.',
    renderBody: () => {return (<TileBody img={'https://picsum.photos/800/800'} txt={'Marine'} url={'https://www.oos-studio.com'} />)}  },
  {
    subtitle: 'Eu has saepe omnesque, no utamur convenire sadipscing nam. Nonumy menandri est id.',
    renderBody: () => {return (<TileBody img={'https://picsum.photos/800/800'} txt={'Trucks'} url={'https://www.oos-studio.com'} />)}  },
  {
    subtitle: 'Eu has saepe omnesque, no utamur convenire sadipscing nam. Nonumy menandri est id.',
    renderBody: () => {return (<TileBody img={'https://picsum.photos/800/800'} txt={'Transit'} url={'https://www.oos-studio.com'} />)}  },
  {
    subtitle: 'Eu has saepe omnesque, no utamur convenire sadipscing nam. Nonumy menandri est id.',
    renderBody: () => {return (<TileBody img={'https://picsum.photos/800/800'} txt={'Vans'} url={'https://www.oos-studio.com'} />)}  },
  {
    subtitle: 'Eu has saepe omnesque, no utamur convenire sadipscing nam. Nonumy menandri est id.',
    renderBody: () => {return (<TileBody img={'https://picsum.photos/800/800'} txt={'Trailers'} url={'https://www.oos-studio.com'} />)}  },
]

const styles = {
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
      width: 400,
    },
    xs: {
      width: 250,
    },
  },
  tileBodyWrapper: {
    backgroundColor: '#DCD3CB',
    color: '#FFFFFF',
    height: 300,
    width: 300,
    sm: {
     width: 400,
     height: 400,
    },
    xs: {
      width: 250,
      height: 250,
    }
  },
  tileSubtitle: {
    marginTop: 20,
    fontSize: 17,
    color: '#562A31',
  },
}

export default TileGrid
