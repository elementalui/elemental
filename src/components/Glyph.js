var React = require('react/addons');
var classNames = require('classnames');

var icons = require('../Octicons').map;
var validNames = require('../Octicons').keys;

var Glyph = React.createClass({
	displayName: 'Glyph',
	propTypes: {
		className: React.PropTypes.string,
		icon: React.PropTypes.oneOf(validNames),
		type: React.PropTypes.oneOf(['danger', 'default', 'muted', 'primary', 'success', 'warning'])
	},
	render() {
		// classes
		var className = classNames(
			'Glyph__icon',
			icons[this.props.icon].className,
			(this.props.type ? 'IconField__icon-color--' + this.props.type : null),
			this.props.className
		);
		return <i className={className} />;
	}
});

module.exports = Glyph;
module.exports.names = validNames;
