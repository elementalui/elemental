var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'InputGroupSection',
	propTypes: {
		className: React.PropTypes.string,
		grow: React.PropTypes.bool
	},
	render() {
		// classes
		var className = classNames('InputGroup_section', {
			'InputGroup_section--grow': this.props.grow
		}, this.props.className);

		return (
			<div {...this.props} className={className} />
		);
	}
});
