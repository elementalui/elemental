'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

module.exports = _reactAddons2['default'].createClass({
	displayName: 'Table',

	propTypes: {
		children: _reactAddons2['default'].PropTypes.any,
		className: _reactAddons2['default'].PropTypes.string
	},

	render: function render() {
		// classes
		var className = (0, _classnames2['default'])('Table', this.props.className);

		// render table element
		return _reactAddons2['default'].createElement('table', _extends({ className: className }, this.props));
	}
});