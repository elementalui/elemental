'use strict';

var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

var ALERT_TYPES = ['danger', 'default', 'info', 'primary', 'success', 'warning', 'default-inverted', 'info-inverted', 'primary-inverted', 'success-inverted', 'warning-inverted'];

module.exports = React.createClass({
	displayName: 'Tag',
	propTypes: {
		className: React.PropTypes.string,
		showClearButton: React.PropTypes.bool,
		label: React.PropTypes.string.isRequired,
		onClear: React.PropTypes.func,
		onClick: React.PropTypes.func,
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
			{ onClick: this.props.onClear, className: 'Tag__clear' },
			'×'
		);
	},
	render: function render() {
		var componentClass = classNames('Tag', 'Tag--' + this.props.type, this.props.className);

		var props = blacklist(this.props, 'className', 'showClearButton', 'label', 'onClear', 'onClick', 'type');
		props.className = componentClass;

		return React.createElement(
			'div',
			props,
			React.createElement(
				'button',
				{ onClick: this.props.onClick, className: 'Tag__label' },
				this.props.label
			),
			this.renderClearButton()
		);
	}
});