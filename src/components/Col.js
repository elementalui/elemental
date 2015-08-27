import React from 'react/addons';
import blacklist from 'blacklist';
import E from '../constants';

module.exports = React.createClass({
	displayName: 'Col',
	propTypes: {
		basis: React.PropTypes.oneOfType([
			React.PropTypes.number, // allow pixels
			React.PropTypes.string, // allow percentage
		]),
		children: React.PropTypes.node.isRequired,
		gutter: React.PropTypes.number,
		xs: React.PropTypes.string, // width as a percentage
		sm: React.PropTypes.string, // width as a percentage
		md: React.PropTypes.string, // width as a percentage
		lg: React.PropTypes.string, // width as a percentage
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
	handleResize: function(e) {
		this.setState({
			windowWidth: window.innerWidth
		});
	},
	componentDidMount: function() {
		window.addEventListener('resize', this.handleResize);
	},
	componentWillUnmount: function() {
		window.removeEventListener('resize', this.handleResize);
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
			columnStyle.width = xs || '100%';
		} else if (windowWidth < E.breakpoint.sm) {
			columnStyle.width = sm || xs;
		} else if (windowWidth < E.breakpoint.md) {
			columnStyle.width = md || sm || xs;
		} else {
			columnStyle.width = lg || md || sm || xs;
		}

		if (columnStyle.width in E.fractions) {
			columnStyle.width = E.fractions[columnStyle.width];
		}

		let props = blacklist(this.props, 'basis', 'gutter', 'style', 'xs', 'sm', 'md', 'lg');

		return <div style={Object.assign(columnStyle, this.props.style)} {...props} />;
	}
});
