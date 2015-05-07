var React = require('react/addons');
var classNames = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName: 'InputGroup',
	propTypes: {
		className: React.PropTypes.string
	},
	render() {
		// props
		var props = _.omit(this.props, ['className']);

		
		// classes
		var className = classNames('InputGroup', this.props.className);

		return (
			<div className={className}>
				{this.props.children}
			</div>
		);
	}
});
