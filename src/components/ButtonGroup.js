var blacklist = require('blacklist');
var classNames = require('classnames');
var React = require('react/addons');

module.exports = React.createClass({
	displayName: 'ButtonGroup',
	propTypes: {
		children: React.PropTypes.node.isRequired
	},
	render() {
		var componentClass = classNames('ButtonGroup', this.props.className);

		// props
		var props = blacklist(this.props, 'type', 'size', 'className');
		props.className = componentClass;

		return <div {...props}>{this.props.children}</div>;
	}
});
