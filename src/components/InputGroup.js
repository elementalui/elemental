var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'InputGroup',
	propTypes: {
		className: React.PropTypes.string,
		contiguous: React.PropTypes.bool
	},
	render() {
		// classes
		var className = classNames('InputGroup', {
			'InputGroup--contiguous': this.props.contiguous
		}, this.props.className);

		return (
			<div {...this.props} className={className} />
		);
	}
});

// expose the child to the top level export
module.exports.Section = require('./InputGroupSection');
