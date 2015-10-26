var React = require('react/addons');
var classNames = require('classnames');
var blacklist = require('blacklist');
var jss = require('../jss');
var style = require('../styles/button');

const BUTTON_SIZES = ['lg', 'sm', 'xs'];

const BUTTON_TYPES = [
	'default',
	'default-primary',
	'default-success',
	'default-warning',
	'default-danger',
	'hollow-primary',
	'hollow-success',
	'hollow-warning',
	'hollow-danger',
	'primary',
	'success',
	'warning',
	'danger',
	'link',
	'link-text',
	'link-cancel',
	'link-delete'
];

var Button = React.createClass({
	displayName: 'Button',
	propTypes: {
		block: React.PropTypes.bool,
		className: React.PropTypes.string,
		href: React.PropTypes.string,
		isActive: React.PropTypes.bool,
		sheet: React.PropTypes.instanceOf(jss.constructor),
		size: React.PropTypes.oneOf(BUTTON_SIZES),
		submit: React.PropTypes.bool,
		type: React.PropTypes.oneOf(BUTTON_TYPES)
	},
	getDefaultProps() {
		return {
			type: 'default'
		};
	},
	render() {
		var classes = this.props.sheet.classes;
		// classes
		var componentClass = classNames(
			classes[this.props.type],
			classes[this.props.size],
			this.props.block ? classes.block : null,
			this.props.isActive ? classes.active : null,
			this.props.className
		);

		// props
		var props = blacklist(this.props, 'type', 'size', 'className');
		props.className = componentClass;

		var tag = 'button';
		props.type = this.props.submit ? 'submit' : 'button';

		if (props.href) {
			tag = 'a';
			props.type = null;
		}

		return React.createElement(
			tag,
			props,
			this.props.children
		);
	}
});

module.exports = jss.useSheet(Button, style);
