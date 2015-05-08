var React = require('react/addons');
var classNames = require('classnames');
var blacklist = require('blacklist');

module.exports = React.createClass({
	displayName: 'ElementalButton',
	propTypes: {
		className: React.PropTypes.string,
		href: React.PropTypes.string,
		onClick: React.PropTypes.func,
		size: React.PropTypes.string,
		submit: React.PropTypes.bool,
		type: React.PropTypes.string
	},
	getDefaultProps() {
		return {
			type: 'default'
		};
	},
	render() {
		// classes
		var componentClass = classNames(
			'Button',
			'Button--' + this.props.type,
			this.props.size ? 'Button--' + this.props.size : null,
			this.props.className
		);

		// props
		var props = blacklist(this.props, ['type', 'size', 'className']);
		props.className = componentClass;

		var tag = 'a';

		if (!props.href) {
			tag = 'button';
			props.type = this.props.submit ? 'submit' : 'button';
		}

		return React.createElement(
			tag,
			props,
			this.props.children
		);
	}
});