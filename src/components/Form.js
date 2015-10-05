var blacklist = require('blacklist');
var classnames = require('classnames');
var React = require('react');

module.exports = React.createClass({
	displayName: 'Form',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string,
		component: React.PropTypes.oneOfType([
			React.PropTypes.element,
			React.PropTypes.string
		]),
		type: React.PropTypes.oneOf(['basic', 'horizontal', 'inline'])
	},
	getDefaultProps () {
		return {
			component: 'form',
			type: 'basic'
		};
	},
	render() {
		var props = blacklist(this.props, 'children', 'type');
		props.className = classnames('Form', ('Form--' + this.props.type), this.props.className);

		return React.createElement(this.props.component, props, this.props.children);
	}
});
