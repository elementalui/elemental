var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

var ALERT_TYPES = [
	'danger',
	'default',
	'info',
	'primary',
	'success',
	'warning'
]

module.exports = React.createClass({
	displayName: 'Tag',
	propTypes: {
		className: React.PropTypes.string,
		hasClearButton: React.PropTypes.bool,
		label: React.PropTypes.string.isRequired,
		onClear: React.PropTypes.func,
		onClick: React.PropTypes.func,
		type: React.PropTypes.oneOf(ALERT_TYPES)
	},
	getDefaultProps() {
		return {
			type: 'default'
		};
	},
	render() {
		var componentClass = classNames(
			'Tag',
			'Tag--' + this.props.type,
			this.props.className
		);

		var props = blacklist(this.props, 'className', 'label', 'type');
		props.className = componentClass

		return (
			<div {...props}>
				<button className="Tag__label">{this.props.label}</button>
				<button className="Tag__clear">&times;</button>
			</div>
		);
	}
});