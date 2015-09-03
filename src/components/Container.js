import React from 'react/addons';
import blacklist from 'blacklist';
import E from '../constants';

module.exports = React.createClass({
	displayName: 'Container',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		clearfix: React.PropTypes.bool,
		gutter: React.PropTypes.number,
		maxWidth: React.PropTypes.number,
		style: React.PropTypes.object,
	},
	getDefaultProps () {
		return {
			gutter: E.width.gutter,
			maxWidth: E.width.container,
		};
	},
	render() {
		let { gutter, maxWidth } = this.props;
		let containerStyle = {
			marginLeft: 'auto',
			marginRight: 'auto',
			paddingLeft: gutter,
			paddingRight: gutter,
			maxWidth: maxWidth,
		};
		let clearfixStyle = { clear: 'both', display: 'table' };
		let props = blacklist(this.props, 'gutter', 'maxWidth', 'style');

		return this.props.clearfix ? (
			<div style={Object.assign(containerStyle, this.props.style)} {...props}>
				<span style={clearfixStyle} />
				{this.props.children}
				<span style={clearfixStyle} />
			</div>
		) : (
			<div style={Object.assign(containerStyle, this.props.style)} {...props} />
		);
	}
});
