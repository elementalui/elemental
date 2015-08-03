var React = require('react/addons');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'FormRow',
	propTypes: {
		className: React.PropTypes.string
	},
	render() {
		var className = classNames('FormRow', this.props.className);

		return (
			<div className={className}>
				{this.props.children}
			</div>
		);
	}
});
