import React from 'react';
import blacklist from 'blacklist';
import E from '../constants';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

export default createReactClass({
	displayName: 'Col',
	propTypes: {
		/* eslint-disable react/jsx-sort-prop-types */
		basis: PropTypes.oneOfType([
			PropTypes.number, // allow pixels
			PropTypes.string, // allow percentage
		]),
		children: PropTypes.node,
		gutter: PropTypes.number,
		style: PropTypes.object,
		lg: PropTypes.string, // width as a percentage or fraction
		md: PropTypes.string, // width as a percentage or fraction
		sm: PropTypes.string, // width as a percentage or fraction
		xs: PropTypes.string, // width as a percentage or fraction
		/* eslint-enable */
	},
	getDefaultProps () {
		return {
			gutter: E.width.gutter,
		};
	},
	getInitialState: function() {
		return {
			windowWidth: (typeof window !== 'undefined') ? window.innerWidth : 0
		};
	},
	componentDidMount: function() {
		if (typeof window !== 'undefined') window.addEventListener('resize', this.handleResize);
	},
	componentWillUnmount: function() {
		if (typeof window !== 'undefined') window.removeEventListener('resize', this.handleResize);
	},
	handleResize: function() {
		this.setState({
			windowWidth: (typeof window !== 'undefined') ? window.innerWidth : 0
		});
	},
	render() {
		let { basis, gutter, xs, sm, md, lg } = this.props;
		let { windowWidth } = this.state;

		let columnStyle = {
			minHeight: 1,
			paddingLeft: (gutter / 2),
			paddingRight: (gutter / 2),
		};

		// if no width control is provided fill available space
		if (!basis && !xs && !sm && !md && !lg) {
			columnStyle.flex = '1 1 auto';
			columnStyle.msFlex = '1 1 auto';
			columnStyle.WebkitFlex = '1 1 auto';
		}

		// set widths / flex-basis
		if (basis) {
			columnStyle.flex = '1 0 ' + basis;
			columnStyle.msFlex = '1 0 ' + basis;
			columnStyle.WebkitFlex = '1 0 ' + basis;
		} else if (windowWidth < E.breakpoint.xs) {
			columnStyle.width = xs;
		} else if (windowWidth < E.breakpoint.sm) {
			columnStyle.width = sm || xs;
		} else if (windowWidth < E.breakpoint.md) {
			columnStyle.width = md || sm || xs;
		} else {
			columnStyle.width = lg || md || sm || xs;
		}

		if (!columnStyle.width) {
			columnStyle.width = '100%';
		}

		if (columnStyle.width in E.fractions) {
			columnStyle.width = E.fractions[columnStyle.width];
		}

		let props = blacklist(this.props, 'basis', 'gutter', 'style', 'xs', 'sm', 'md', 'lg');

		return <div style={Object.assign(columnStyle, this.props.style)} {...props} />;
	},
});
