'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _blacklist = require('blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

module.exports = _react2['default'].createClass({
	displayName: 'Row',
	propTypes: {
		children: _react2['default'].PropTypes.node.isRequired,
		className: _react2['default'].PropTypes.string,
		gutter: _react2['default'].PropTypes.number,
		style: _react2['default'].PropTypes.object
	},
	getDefaultProps: function getDefaultProps() {
		return {
			gutter: _constants2['default'].width.gutter
		};
	},
	render: function render() {
		var gutter = this.props.gutter;

		var rowStyle = {
			display: 'flex',
			flexWrap: 'wrap',
			msFlexWrap: 'wrap',
			WebkitFlexWrap: 'wrap',
			marginLeft: gutter / -2,
			marginRight: gutter / -2
		};
		var className = (0, _classnames2['default'])('Row', this.props.className);
		var props = (0, _blacklist2['default'])(this.props, 'className', 'gutter', 'style');

		return _react2['default'].createElement('div', _extends({}, props, { style: _extends(rowStyle, this.props.style), className: className }));
	}
});