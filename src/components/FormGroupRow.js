var React = require('react/addons');
var classNames = require('classnames');
var _ = require('underscore');

module.exports = React.createClass({
	displayName: 'FormGroupRow',
	propTypes: {
		className: React.PropTypes.string
	},
	render() {
		// classes
		var className = classNames('form-group-row', this.props.className);

		
		// props
		var props = _.omit(this.props, ['className']);

		return (
			<div className={className}>
				{this.props.children}
			</div>
		);
	}
});
