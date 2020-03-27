import React, {Component} from 'react'
import mergeStyles from '../utils/StyleMerge'
import withSizes from '../utils/Sizes'

class TileGrid extends Component {
  render() {
    const { tiles, styles, getStyle } = this.props
    return (
      <div style={getStyle(styles.container)}>
        {tiles.map(t => {
          return (
            <div style={getStyle(styles.tileWrapper)}>
              <div style={getStyle(styles.tileBodyWrapper)}>
                {t.renderBody()}
              </div>
              <div style={getStyle(styles.tileSubtitle)}>
                {t.subtitle}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

const defaultStyles = {
  container: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: '100%',
    display: 'grid',
  },
  tileWrapper: {
    backgroundColor: 'white',
  },
  tileBodyWrapper: {
  },
  tileSubtitle: {
  },
}

TileGrid.defaultProps = {
  tiles: [],
  renderBody: () => {},
}

export default mergeStyles(defaultStyles)(withSizes(TileGrid))
