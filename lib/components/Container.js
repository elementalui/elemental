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
	displayName: 'Container',
	propTypes: {
		children: _react2['default'].PropTypes.node.isRequired,
		clearfix: _react2['default'].PropTypes.bool,
		gutter: _react2['default'].PropTypes.number,
		maxWidth: _react2['default'].PropTypes.number,
		style: _react2['default'].PropTypes.object
	},
	getDefaultProps: function getDefaultProps() {
		return {
			gutter: _constants2['default'].width.gutter,
			maxWidth: _constants2['default'].width.container
		};
	},
	render: function render() {
		var _props = this.props;
		var gutter = _props.gutter;
		var maxWidth = _props.maxWidth;

		var containerStyle = {
			marginLeft: 'auto',
			marginRight: 'auto',
			paddingLeft: gutter,
			paddingRight: gutter,
			maxWidth: maxWidth
		};
		var clearfixStyle = { clear: 'both', display: 'table' };
		var props = (0, _blacklist2['default'])(this.props, 'gutter', 'maxWidth', 'style');

		return this.props.clearfix ? _react2['default'].createElement(
			'div',
			_extends({ style: _extends(containerStyle, this.props.style) }, props),
			_react2['default'].createElement('span', { style: clearfixStyle }),
			this.props.children,
			_react2['default'].createElement('span', { style: clearfixStyle })
		) : _react2['default'].createElement('div', _extends({ style: _extends(containerStyle, this.props.style) }, props));
	}
});