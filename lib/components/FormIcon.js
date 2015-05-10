'use strict';

var React = require('react/addons');
var classNames = require('classnames');
var _ = require('lodash');
var Spinner = require('elemental').Spinner;

var icons = require('../Octicons').map;

module.exports = React.createClass({
	displayName: 'FormIcon',
	propTypes: {
		className: React.PropTypes.string,
		icon: React.PropTypes.string,
		fill: React.PropTypes.oneOf(['danger', 'default', 'muted', 'primary', 'success', 'warning']),
		color: React.PropTypes.oneOf(['danger', 'default', 'muted', 'primary', 'success', 'warning']),
		isLoading: React.PropTypes.bool
	},
	render: function render() {
		// classes
		var className = classNames('IconField__icon', icons[this.props.icon].className, this.props.fill ? 'IconField__icon-fill--' + this.props.fill : null, this.props.type ? 'IconField__icon-color--' + this.props.type : null, this.props.className);

		var component = this.props.isLoading ? React.createElement(Spinner, { size: 'sm' }) : React.createElement('div', { className: className });

		return component;
	}
});