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
	'default-inverted',
	'info-inverted',
	'primary-inverted',
	'success-inverted',
	'warning-inverted'
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
	renderClearButton() {
		if (!this.props.hasClearButton) return;
		return <button onClick={this.props.onClear} className="Tag__clear">&times;</button>
	},
	render() {
		var componentClass = classNames(
			'Tag',
			'Tag--' + this.props.type,
			this.props.className
		);

		var props = blacklist(this.props, 'className', 'hasClearButton', 'label', 'onClear', 'onClick', 'type');
		props.className = componentClass

		return (
			<div {...props}>
				<button onClick={this.props.onClick} className="Tag__label">{this.props.label}</button>
				{this.renderClearButton()}
			</div>
		);
	}
});
