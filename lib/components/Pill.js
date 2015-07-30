'use strict';

var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

var ALERT_TYPES = ['danger', 'default', 'info', 'primary', 'success', 'warning', 'danger-inverted', 'default-inverted', 'info-inverted', 'primary-inverted', 'success-inverted', 'warning-inverted'];

module.exports = React.createClass({
	displayName: 'Pill',
	propTypes: {
		className: React.PropTypes.string,
		label: React.PropTypes.string.isRequired,
		onClear: React.PropTypes.func,
		onClick: React.PropTypes.func,
		showClearButton: React.PropTypes.bool,
		type: React.PropTypes.oneOf(ALERT_TYPES)
	},
	getDefaultProps: function getDefaultProps() {
		return {
			type: 'default'
		};
	},
	renderClearButton: function renderClearButton() {
		if (!this.props.showClearButton) return null;
		return React.createElement(
			'button',
			{ onClick: this.props.onClear, className: "Pill__clear" },
			'×'
		);
	},
	render: function render() {
		var componentClass = classNames('Pill', 'Pill--' + this.props.type, this.props.className);

		var props = blacklist(this.props, 'className', 'showClearButton', 'label', 'onClear', 'onClick', 'type');
		props.className = componentClass;

		return React.createElement(
			'div',
			props,
			React.createElement(
				'button',
				{ onClick: this.props.onClick, className: "Pill__label" },
				this.props.label
			),
			this.renderClearButton()
		);
	}
});