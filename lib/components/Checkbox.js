'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var blacklist = require('blacklist');
var classNames = require('classnames');
var React = require('react/addons');

var Checkbox = React.createClass({
	displayName: 'Checkbox',

	propTypes: {
		inline: React.PropTypes.bool,
		label: React.PropTypes.string
	},
	render: function render() {
		var componentClass = classNames('Checkbox', {
			'Checkbox--disabled': this.props.disabled,
			'Checkbox--inline': this.props.inline
		}, this.props.className);
		var props = blacklist(this.props, 'className', 'label');

		return React.createElement(
			'label',
			{ className: componentClass },
			React.createElement('input', _extends({ type: 'checkbox', className: 'Checkbox__input' }, props)),
			this.props.label && React.createElement(
				'span',
				{ className: 'Checkbox__label' },
				this.props.label
			)
		);
	}
});

module.exports = Checkbox;