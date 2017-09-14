var React = require('react');
var classNames = require('classnames');
var blacklist = require('blacklist');

export default React.createClass({
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
		var props = blacklist(this.props, 'contiguous');

		return (
			<div {...props} className={className} />
		);
	}
});

// expose the child to the top level export
module.exports.Section = require('./InputGroupSection');
