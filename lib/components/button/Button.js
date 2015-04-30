'use strict';

var React = require('react/addons');
var classNames = require('classnames');
var blacklist = require('blacklist');

module.exports = React.createClass({
	displayName: 'ElementalButton',
	propTypes: {
		onClick: React.PropTypes.func,
		type: React.PropTypes.string,
		size: React.PropTypes.string,
		href: React.PropTypes.string,
		className: React.PropTypes.string
	},
	getDefaultProps: function getDefaultProps() {
		return {
			type: 'default'
		};
	},
	render: function render() {
		// classes
		var componentClass = classNames('Button', 'Button-' + this.props.type, this.props.size ? 'Button-' + this.props.size : null, this.props.className);

		// props
		var props = blacklist(this.props, ['type', 'size', 'className']);
		props.className = componentClass;

		var tag = 'a';

		if (!props.href) {
			tag = 'button';
			props.type = 'button';
		}

		return React.createElement(tag, props, this.props.children);
	}
});