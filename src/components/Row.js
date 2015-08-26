import React from 'react/addons';
import blacklist from 'blacklist';
import E from '../constants';

module.exports = React.createClass({
	displayName: 'Row',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		gutter: React.PropTypes.number,
	},
	getDefaultProps () {
		return {
			gutter: E.width.gutter,
		};
	},
	render() {
		let { gutter } = this.props;
		let rowStyle = {
			display: 'flex',
			flexWrap: 'wrap',
			marginLeft: (gutter / -2),
			marginRight: (gutter / -2),
		};
		let props = blacklist(this.props, 'gutter', 'style');

		return (
			<div style={Object.assign(rowStyle, this.props.style)} {...props} />
		);
	}
});
