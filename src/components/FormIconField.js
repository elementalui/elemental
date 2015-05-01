var React = require('react/addons');
var classNames = require('classnames');
var _ = require('underscore');

var FormField = require('elemental').FormField;
var Spinner = require('elemental').Spinner;
var icons = require("../FormIcons").map;

var COLOR_VARIANTS = ['danger', 'default', 'primary', 'success', 'warning'];

module.exports = React.createClass({
	displayName: 'FormIconField',
	propTypes: {
		className: React.PropTypes.string,
		iconPosition: React.PropTypes.oneOf(['left', 'right']),
		iconKey: React.PropTypes.string.isRequired,
		iconFill: React.PropTypes.oneOf(COLOR_VARIANTS),
		iconColor: React.PropTypes.oneOf(COLOR_VARIANTS),
		iconIsLoading: React.PropTypes.bool
	},
	getDefaultProps() {
		return {
			iconPosition: 'left'
		};
	},
	render() {
		// props
		var props = _.omit(this.props, ['className', 'iconPosition', 'iconKey', 'iconFill', 'iconColor', 'iconIsLoading']);

		
		// classes
		var fieldClass = classNames('form-icon-field', {
				'has-fill-icon': this.props.iconFill,
				'is-loading-icon': this.props.iconIsLoading
			},
			(this.props.iconFill ? ('field-context-' + this.props.iconFill) : null),
			(this.props.iconColor ? ('field-context-' + this.props.iconColor) : null),
			this.props.iconPosition);

		var iconContainerClass = classNames('form-icon',
			(this.props.iconFill ? 'form-icon-fill--' + this.props.iconFill : null),
			(this.props.iconColor ? 'form-icon-color--' + this.props.iconColor : null),
			this.props.className);

		var iconClass = classNames(
			'form-icon-src',
			icons[this.props.iconKey].className
		);

		var icon = this.props.iconIsLoading ? (
			<Spinner size="sm" />
		) : (
			<div className={iconContainerClass}>
				<span className={iconClass} />
			</div>
		);

		return (
			<FormField {...props}>
				<div className={fieldClass}>
					{this.props.children}
					{icon}
				</div>
			</FormField>
		);
	}
});
