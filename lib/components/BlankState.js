'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');

module.exports = React.createClass({
	displayName: 'BlankState',
	propTypes: {
		children: React.PropTypes.node.isRequired
	},
	render: function render() {
		return React.createElement('div', _extends({ className: 'BlankState' }, this.props));
	}
});

module.exports.Heading = React.createClass({
	displayName: 'BlankStateHeading',
	propTypes: {
		children: React.PropTypes.node.isRequired
	},
	render: function render() {
		return React.createElement('h2', _extends({ className: 'BlankState__heading' }, this.props));
	}
});