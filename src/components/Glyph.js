var React = require('react');
var classNames = require('classnames');

const Octicons = require('../Octicons').Octicon;
const icons = Octicons.map;
const validNames = Octicons.keys;

var Glyph = React.createClass({
	displayName: 'Glyph',
	propTypes: {
		className: React.PropTypes.string,
		icon: React.PropTypes.oneOf(validNames),
		type: React.PropTypes.oneOf([
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
		var className = classNames(
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
