var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'InputGroup',
	propTypes: {
		className: React.PropTypes.string,
		contiguous: React.PropTypes.bool
	},
	getDefaultProps() {
		return {
			contiguous: true
		};
	},
	render() {
		// props
		var props = blacklist(this.props, 'className');


		// classes
		var className = classNames('InputGroup', {
			'is-contiguous': this.props.contiguous
		}, this.props.className);

		return (
			<div className={className} {...props}>
				{this.props.children}
			</div>
		);
	}
});

// expose the addon to the top level export
module.exports.Section = require('./InputGroupSection');
