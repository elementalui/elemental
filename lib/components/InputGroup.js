'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'InputGroup',
	propTypes: {
		className: React.PropTypes.string,
		contiguous: React.PropTypes.bool
	},
	render: function render() {
		// props
		var props = blacklist(this.props, 'className');

		// classes
		var className = classNames('InputGroup', {
			'InputGroup--contiguous': this.props.contiguous
		}, this.props.className);

		return React.createElement(
			'div',
			_extends({ className: className }, props),
			this.props.children
		);
	}
});

// expose the child to the top level export
module.exports.Section = require('./InputGroupSection');