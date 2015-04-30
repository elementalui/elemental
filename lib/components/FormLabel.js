'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var classNames = require('classnames');
var _ = require('underscore');

module.exports = React.createClass({
	displayName: 'FormLabel',
	propTypes: {
		verticalAlign: React.PropTypes.oneOf(['baseline', 'bottom', 'inherit', 'initial', 'middle', 'sub', 'super', 'text-bottom', 'text-top', 'top']),
		className: React.PropTypes.string
	},
	render: function render() {
		// classes
		var className = classNames('form-label', this.props.className);

		// props
		var props = _.omit(this.props, ['htmlFor', 'id', 'className', 'style']);

		// style
		var style;
		if (this.props.verticalAlign) {
			style = {
				verticalAlign: this.props.verticalAlign
			};
		}

		return React.createElement(
			'label',
			_extends({ className: className, htmlFor: this.props.htmlFor || this.props.id, style: style || this.props.style }, props),
			this.props.children
		);
	}
});