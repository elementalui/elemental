import React from 'react';
import PropTypes from 'prop-types';
import blacklist from 'blacklist';
import classnames from 'classnames';
import createReactClass from 'create-react-class';
import E from '../constants';

export default createReactClass({
	displayName: 'Row',
	propTypes: {
		children: PropTypes.node.isRequired,
		className: PropTypes.string,
		gutter: PropTypes.number,
		style: PropTypes.object,
	},
	getDefaultProps () {
		return {
			gutter: E.width.gutter,
		};
	},
	render () {
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
	},
});
