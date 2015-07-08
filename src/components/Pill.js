var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

var ALERT_TYPES = [
	'danger',
	'default',
	'info',
	'primary',
	'success',
	'warning',
	'danger-inverted',
	'default-inverted',
	'info-inverted',
	'primary-inverted',
	'success-inverted',
	'warning-inverted'
];

module.exports = React.createClass({
	displayName: 'Pill',
	propTypes: {
		className: React.PropTypes.string,
		label: React.PropTypes.string.isRequired,
		onClear: React.PropTypes.func,
		onClick: React.PropTypes.func,
		showClearButton: React.PropTypes.bool,
		type: React.PropTypes.oneOf(ALERT_TYPES)
	},
	getDefaultProps() {
		return {
			type: 'default'
		};
	},
	renderClearButton() {
		if (!this.props.showClearButton) return null;
		return <button onClick={this.props.onClear} className="Pill__clear">&times;</button>;
	},
	render() {
		var componentClass = classNames(
			'Pill',
			'Pill--' + this.props.type,
			this.props.className
		);

		var props = blacklist(this.props, 'className', 'showClearButton', 'label', 'onClear', 'onClick', 'type');
		props.className = componentClass;

		return (
			<div {...props}>
				<button onClick={this.props.onClick} className="Pill__label">{this.props.label}</button>
				{this.renderClearButton()}
			</div>
		);
	}
});
