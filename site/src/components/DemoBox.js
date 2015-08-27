import React from 'react';
import classnames from 'classnames';
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
			msFlexPack: ALIGN_TRANSFORM[this.props.align],
			WebkitJustifyContent: ALIGN_TRANSFORM[this.props.align],
			marginBottom: E.width.gutter,
			padding: '.66em 1.5em',
		};
		if (this.props.inverted) {
			boxStyle['backgroundColor'] = E.color.appPrimary;
		}
		let className = classnames('DemoBox', this.props.className);

		return <div {...this.props} style={Object.assign({}, boxStyle, this.props.style)} className={className} />;
	}
});

module.exports = DemoBox;
