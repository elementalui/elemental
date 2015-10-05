import React from 'react';
import blacklist from 'blacklist';
import E from '../constants';

module.exports = React.createClass({
	displayName: 'Col',
	propTypes: {
		/* eslint-disable react/jsx-sort-prop-types */
		basis: React.PropTypes.oneOfType([
			React.PropTypes.number, // allow pixels
			React.PropTypes.string, // allow percentage
		]),
		children: React.PropTypes.node,
		gutter: React.PropTypes.number,
		style: React.PropTypes.object,
		lg: React.PropTypes.string, // width as a percentage or fraction
		md: React.PropTypes.string, // width as a percentage or fraction
		sm: React.PropTypes.string, // width as a percentage or fraction
		xs: React.PropTypes.string, // width as a percentage or fraction
		/* eslint-enable */
	},
	getDefaultProps () {
		return {
			gutter: E.width.gutter,
		};
	},
	getInitialState: function() {
		return {
			windowWidth: window.innerWidth
		};
	},
	componentDidMount: function() {
		window.addEventListener('resize', this.handleResize);
	},
	componentWillUnmount: function() {
		window.removeEventListener('resize', this.handleResize);
	},
	handleResize: function() {
		this.setState({
			windowWidth: window.innerWidth
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
	}
});
