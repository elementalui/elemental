'use strict';

var React = require('react/addons');
var classNames = require('classnames');
var _ = require('underscore');
var Spinner = require('elemental').Spinner;

var icons = require('../FormIcons').map;

module.exports = React.createClass({
	displayName: 'FormIcon',
	propTypes: {
		className: React.PropTypes.string,
		icon: React.PropTypes.oneOf(['calendar', 'camera', 'cart', 'close-circled', 'close', 'cog', 'home', 'information', 'mail', 'menu', 'search', 'star-outline', 'star', 'telephone', 'time', 'user', 'users', 'warning']),
		fill: React.PropTypes.oneOf(['danger', 'default', 'muted', 'primary', 'success', 'warning']),
		color: React.PropTypes.oneOf(['danger', 'default', 'muted', 'primary', 'success', 'warning']),
		isLoading: React.PropTypes.bool
	},
	render: function render() {
		// classes
		var componentClass = classNames('form-icon', this.props.fill ? 'form-icon-fill--' + this.props.fill : null, this.props.type ? 'form-icon-color--' + this.props.type : null, this.props.className);

		var iconClass = classNames('form-icon-src', icons[this.props.icon].className);

		var component = this.props.isLoading ? React.createElement(Spinner, { size: 'sm' }) : React.createElement(
			'div',
			{ className: componentClass },
			React.createElement('span', { className: iconClass })
		);

		return component;
	}
});