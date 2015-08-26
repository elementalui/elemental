import React from 'react';
import E from '../../../src/constants';

const ALIGN_TRANSFORM = {
	'center': 'center',
	'left': 'flex-start',
	'right': 'flex-end',
}

var DemoBox = React.createClass({
	propTypes: {
		align: React.PropTypes.oneOf(['center', 'left', 'right']),
		children: React.PropTypes.node.isRequired,
	},
	getDefaultProps () {
		return {
			align: 'center'
		};
	},
	render () {
		let boxStyle = {
			backgroundColor: 'rgba(0,0,0,0.05)',
			borderRadius: 4,
			display: 'flex',
			justifyContent: ALIGN_TRANSFORM[this.props.align],
			marginBottom: E.width.gutter,
			padding: '.66em 1.5em',
		};
		if (this.props.inverted) {
			style[backgroundColor] = E.color.appPrimary;
		}

		return <div style={Object.assign(boxStyle, this.props.style)} {...this.props} />;
	}
});

module.exports = DemoBox;
