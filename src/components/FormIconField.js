const React = require('react');
const blacklist = require('blacklist');
const classNames = require('classnames');

const FormField = require('./FormField');
const Spinner = require('./Spinner');

const ICON_MAP = require('../Octicons').map;
const ICON_KEYS = require('../Octicons').keys;
const COLOR_VARIANTS = ['danger', 'default', 'primary', 'success', 'warning'];

module.exports = React.createClass({
	displayName: 'FormIconField',
	propTypes: {
		className: React.PropTypes.string,
		iconColor: React.PropTypes.oneOf(COLOR_VARIANTS),
		iconFill: React.PropTypes.oneOf(COLOR_VARIANTS),
		iconIsLoading: React.PropTypes.bool,
		iconKey: React.PropTypes.oneOf(ICON_KEYS).isRequired,
		iconPosition: React.PropTypes.oneOf(['left', 'right']),
	},
	getDefaultProps() {
		return {
			iconPosition: 'left',
		};
	},
	render() {
		// props
		var props = blacklist(this.props, 'children', 'iconPosition', 'iconKey', 'iconFill', 'iconColor', 'iconIsLoading');

		// classes
		var fieldClass = classNames('IconField', {
				'has-fill-icon': this.props.iconFill,
				'is-loading-icon': this.props.iconIsLoading
			},
			(this.props.iconFill ? ('field-context-' + this.props.iconFill) : null),
			(this.props.iconColor ? ('field-context-' + this.props.iconColor) : null),
			this.props.iconPosition);

		var iconClass = classNames(
			'IconField__icon',
			(this.props.iconFill ? 'IconField__icon-fill--' + this.props.iconFill : null),
			(this.props.iconColor ? 'IconField__icon-color--' + this.props.iconColor : null),
			ICON_MAP[this.props.iconKey].className
		);

		var icon = this.props.iconIsLoading ? (
			<Spinner size="sm" />
		) : (
			<span className={iconClass} />
		);

		return (
			<FormField {...props}>
				<div className={fieldClass}>
					{this.props.children}
					{icon}
				</div>
			</FormField>
		);
	},
});
