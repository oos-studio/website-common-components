import React, { Component } from 'react'
import mergeStyles from '../utils/StyleMerge'
import deepmerge from 'deepmerge'
import withSizes from '../utils/Sizes'

class Blurb extends Component {
	render() {
  		const { content, getStyle, styles } = this.props

    	return (
			<div style={getStyle(styles.container)}>
				<div style={getStyle(styles.title)}>
					{content.title}
				</div>
				<div style={getStyle(styles.text)}>
					{content.text}
				</div>
			</div>
    	)
  	}
}

const defaultStyles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 35,
		maxWidth: 1200,
		md: {
			padding: 15,
		},
	},
	title: {
		fontSize: 45,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 10,
		md: {
			fontSize: 35,
		},
	},
	text: {
		fontSize: 25,
		textAlign: 'center',
	},
}

Blurb.defaultProps = {
	content: {
		title: 'Sample Blurb Title',
		text: 'This is some sample blurb text.',
	},
	isMobile: false,
}

export default mergeStyles(defaultStyles)(withSizes(Blurb))
