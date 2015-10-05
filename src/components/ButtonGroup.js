var classnames = require('classnames');
var React = require('react');

module.exports = React.createClass({
	displayName: 'ButtonGroup',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string
	},
	render() {
		var className = classnames('ButtonGroup', this.props.className);
		return <div {...this.props} className={className} />;
	}
});
