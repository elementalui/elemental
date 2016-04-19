'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _blacklist = require('blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

module.exports = _react2['default'].createClass({
	displayName: 'Col',
	propTypes: {
		/* eslint-disable react/jsx-sort-prop-types */
		basis: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, // allow pixels
		_react2['default'].PropTypes.string]),
		// allow percentage
		children: _react2['default'].PropTypes.node,
		gutter: _react2['default'].PropTypes.number,
		style: _react2['default'].PropTypes.object,
		lg: _react2['default'].PropTypes.string, // width as a percentage or fraction
		md: _react2['default'].PropTypes.string, // width as a percentage or fraction
		sm: _react2['default'].PropTypes.string, // width as a percentage or fraction
		xs: _react2['default'].PropTypes.string },
	// width as a percentage or fraction
	/* eslint-enable */
	getDefaultProps: function getDefaultProps() {
		return {
			gutter: _constants2['default'].width.gutter
		};
	},
	getInitialState: function getInitialState() {
		return {
			windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0
		};
	},
	componentDidMount: function componentDidMount() {
		if (typeof window !== 'undefined') window.addEventListener('resize', this.handleResize);
	},
	componentWillUnmount: function componentWillUnmount() {
		if (typeof window !== 'undefined') window.removeEventListener('resize', this.handleResize);
	},
	handleResize: function handleResize() {
		this.setState({
			windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0
		});
	},
	render: function render() {
		var _props = this.props;
		var basis = _props.basis;
		var gutter = _props.gutter;
		var xs = _props.xs;
		var sm = _props.sm;
		var md = _props.md;
		var lg = _props.lg;
		var windowWidth = this.state.windowWidth;

		var columnStyle = {
			minHeight: 1,
			paddingLeft: gutter / 2,
			paddingRight: gutter / 2
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
		} else if (windowWidth < _constants2['default'].breakpoint.xs) {
			columnStyle.width = xs;
		} else if (windowWidth < _constants2['default'].breakpoint.sm) {
			columnStyle.width = sm || xs;
		} else if (windowWidth < _constants2['default'].breakpoint.md) {
			columnStyle.width = md || sm || xs;
		} else {
			columnStyle.width = lg || md || sm || xs;
		}

		if (!columnStyle.width) {
			columnStyle.width = '100%';
		}

		if (columnStyle.width in _constants2['default'].fractions) {
			columnStyle.width = _constants2['default'].fractions[columnStyle.width];
		}

		var props = (0, _blacklist2['default'])(this.props, 'basis', 'gutter', 'style', 'xs', 'sm', 'md', 'lg');

		return _react2['default'].createElement('div', _extends({ style: _extends(columnStyle, this.props.style) }, props));
	}
});