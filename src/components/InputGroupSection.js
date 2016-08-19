var React = require('react');
var classNames = require('classnames');
var blacklist = require('blacklist');

module.exports = React.createClass({
	displayName: 'InputGroupSection',
	propTypes: {
		className: React.PropTypes.string,
		grow: React.PropTypes.bool
	},
	render() {
		// classes
		var className = classNames('InputGroup_section', {
			'InputGroup_section--grow': this.props.grow
		}, this.props.className);
		var props = blacklist(this.props, 'grow');

		return (
			<div {...props} className={className} />
		);
	}
});
