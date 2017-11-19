'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'InputGroupSection',
	propTypes: {
		className: React.PropTypes.string,
		grow: React.PropTypes.bool
	},
	render: function render() {
		// classes
		var className = classNames('InputGroup_section', {
			'InputGroup_section--grow': this.props.grow
		}, this.props.className);

		return React.createElement('div', _extends({}, this.props, { className: className }));
	}
});