'use strict';

var React = require('react/addons');
var classNames = require('classnames');
var _ = require('underscore');

var FormField = require('elemental').FormField;
var Spinner = require('elemental').Spinner;
var icons = require('../FormIcons').map;

var COLOR_VARIANTS = ['danger', 'default', 'primary', 'success', 'warning'];

module.exports = React.createClass({
	displayName: 'FormIconField',
	propTypes: {
		className: React.PropTypes.string,
		iconPosition: React.PropTypes.oneOf(['left', 'right']),
		iconKey: React.PropTypes.oneOf(['calendar', 'camera', 'cart', 'close-circled', 'close', 'cog', 'home', 'information', 'mail', 'menu', 'search', 'star-outline', 'star', 'telephone', 'time', 'user', 'users', 'warning']).isRequired,
		iconFill: React.PropTypes.oneOf(COLOR_VARIANTS),
		iconColor: React.PropTypes.oneOf(COLOR_VARIANTS),
		iconIsLoading: React.PropTypes.bool
	},
	getDefaultProps: function getDefaultProps() {
		return {
			iconPosition: 'left'
		};
	},
	render: function render() {
		// props
		var props = _.omit(this.props, ['className', 'iconPosition', 'iconKey', 'iconFill', 'iconColor', 'iconIsLoading']);

		// classes
		var fieldClass = classNames('form-icon-field', {
			'is-fill-icon': this.props.iconFill,
			'is-loading-icon': this.props.iconIsLoading
		}, this.props.iconPosition);

		var iconContainerClass = classNames('form-icon', this.props.iconFill ? 'form-icon-fill--' + this.props.iconFill : null, this.props.iconColor ? 'form-icon-color--' + this.props.iconColor : null, this.props.className);

		var iconClass = classNames('form-icon-src', icons[this.props.iconKey].className);

		var icon = this.props.iconIsLoading ? React.createElement(Spinner, { size: 'sm' }) : React.createElement(
			'div',
			{ className: iconContainerClass },
			React.createElement('span', { className: iconClass })
		);

		return React.createElement(
			FormField,
			props,
			React.createElement(
				'div',
				{ className: fieldClass },
				icon,
				this.props.children
			)
		);
	}
});