import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';
import classnames from 'classnames';
import E from '../../../src/constants';

const ALIGN_TRANSFORM = {
	'center': 'center',
	'left': 'flex-start',
	'right': 'flex-end',
};

var DemoBox = createReactClass({
	propTypes: {
		align: PropTypes.oneOf(['center', 'left', 'right']),
		children: PropTypes.node.isRequired,
		className: PropTypes.string,
		inverted: PropTypes.bool,
		style: PropTypes.object,
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
			boxStyle.backgroundColor = E.color.appPrimary;
		}
		let className = classnames('DemoBox', this.props.className);

		return (
			<div style={Object.assign({}, boxStyle, this.props.style)} className={className}>
				{ this.props.children }
			</div>
		);
	}
});

module.exports = DemoBox;
