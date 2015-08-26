import React from 'react/addons';
import blacklist from 'blacklist';
import E from '../constants';

module.exports = React.createClass({
	displayName: 'Container',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		gutter: React.PropTypes.number,
		maxWidth: React.PropTypes.number,
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
		let props = blacklist(this.props, 'gutter', 'maxWidth', 'style');

		return <div style={Object.assign(containerStyle, this.props.style)} {...props} />;
	}
});
