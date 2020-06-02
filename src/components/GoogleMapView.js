import React, {Component, createRef} from 'react'
import mergeStyles from '../utils/StyleMerge'
import withSizes from '../utils/Sizes'

class GoogleMapView extends Component {
    render() {
      const { getStyle, styles } = this.props
      return(
        <div id='googleMap' style={getStyle(styles.container)}>
          MAP
        </div>
      )
    }
}

const defaultStyles = {
  container: {
    height: 300,
  }
}

GoogleMapView.defaultProps = {

}

export default mergeStyles(defaultStyles)(withSizes(GoogleMapView))
