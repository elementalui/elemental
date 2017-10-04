const React = require('react');
const classNames = require('classnames');
const PropTypes = require('prop-types');
const Spinner = require('./Spinner');
const createReactClass = require('create-react-class');

const icons = require('../Octicons').map;

export default createReactClass({
	displayName: 'FormIcon',
	propTypes: {
		className: PropTypes.string,
		color: PropTypes.oneOf(['danger', 'default', 'muted', 'primary', 'success', 'warning']),
		fill: PropTypes.oneOf(['danger', 'default', 'muted', 'primary', 'success', 'warning']),
		icon: PropTypes.string,
		isLoading: PropTypes.bool,
		type: PropTypes.string,
	},
	render () {
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
	},
});
