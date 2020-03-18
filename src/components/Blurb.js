import React, { Component } from 'react'
import mergeStyles from '../utils/StyleMerge'
import deepmerge from 'deepmerge'

class Blurb extends Component {
	render() {
  		const { content, styles, isMobile } = this.props

		const activeStyles = isMobile ? deepmerge(styles, styles.mobile) : styles

    	return (
			<div style={activeStyles.container}>
				<div style={activeStyles.title}>
					{content.title}
				</div>
				<div style={activeStyles.text}>
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
	},
	title: {
		fontSize: 45,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 10,
	},
	text: {
		fontSize: 25,
		textAlign: 'center',
	},
	mobile: {
		container: {
			padding: 15,
		},
		title: {
			fontSize: 35,
		},
	},
}

Blurb.defaultProps = {
	content: {
		title: 'Sample Blurb Title',
		text: 'This is some sample blurb text.',
	},
	isMobile: false,
}

export default mergeStyles(defaultStyles)(Blurb)
