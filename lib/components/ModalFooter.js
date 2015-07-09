'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classnames = require('classnames');
var React = require('react/addons');

module.exports = React.createClass({
	displayName: 'ModalFooter',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string
	},
	render: function render() {
		var className = classnames('Modal__footer', this.props.className);
		return React.createElement('div', _extends({}, this.props, { className: className }));
	}
});