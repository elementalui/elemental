import React from 'react';
import blacklist from 'blacklist';
import classnames from 'classnames';
import E from '../constants';

module.exports = React.createClass({
	displayName: 'Row',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string,
		gutter: React.PropTypes.number,
		style: React.PropTypes.object,
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
			msFlexWrap: 'wrap',
			WebkitFlexWrap: 'wrap',
			marginLeft: (gutter / -2),
			marginRight: (gutter / -2),
		};
		let className = classnames('Row', this.props.className);
		let props = blacklist(this.props, 'className', 'gutter', 'style');

		return (
			<div {...props} style={Object.assign(rowStyle, this.props.style)} className={className} />
		);
	}
});
