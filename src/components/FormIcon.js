var React = require('react');
var classNames = require('classnames');
var Spinner = require('./Spinner');

var icons = require('../Octicons').map;

module.exports = React.createClass({
	displayName: 'FormIcon',
	propTypes: {
		className: React.PropTypes.string,
		color: React.PropTypes.oneOf(['danger', 'default', 'muted', 'primary', 'success', 'warning']),
		fill: React.PropTypes.oneOf(['danger', 'default', 'muted', 'primary', 'success', 'warning']),
		icon: React.PropTypes.string,
		isLoading: React.PropTypes.bool,
		type: React.PropTypes.string
	},
	render() {
		// classes
		var className = classNames(
			'IconField__icon',
			icons[this.props.icon].className,
			(this.props.fill ? 'IconField__icon-fill--' + this.props.fill : null),
			(this.props.type ? 'IconField__icon-color--' + this.props.type : null),
			this.props.className
		);

		var component = this.props.isLoading ? (
			<Spinner size="sm" />
		) : (
			<div className={className} />
		);

		return component;
	}
});
