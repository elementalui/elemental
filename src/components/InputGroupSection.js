var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'InputGroupSection',
	propTypes: {
		className: React.PropTypes.string,
		grow: React.PropTypes.bool
	},
	render() {
		// props
		var props = blacklist(this.props, 'className');

		// classes
		var className = classNames('InputGroup_section', {
			'InputGroup_section--grow': this.props.grow
		}, this.props.className);
		props.className = className;

		return (
			<span {...props}>
				{this.props.children}
			</span>
		);
	}
});
