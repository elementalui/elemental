const React = require('react');
const classNames = require('classnames');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

const icons = require('../Octicons').map;
const validNames = require('../Octicons').keys;

const Glyph = createReactClass({
	displayName: 'Glyph',
	propTypes: {
		className: PropTypes.string,
		icon: PropTypes.oneOf(validNames),
		type: PropTypes.oneOf([
			'danger',
			'default',
			'muted',
			'primary',
			'success',
			'warning',
		]),
	},
	render () {
		// classes
		const className = classNames(
			'Glyph__icon',
			icons[this.props.icon].className,
			(this.props.type ? 'IconField__icon-color--' + this.props.type : null),
			this.props.className
		);
		return <i className={className} />;
	},
});

Glyph.names = validNames;

export default Glyph;
