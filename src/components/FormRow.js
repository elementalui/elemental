var React = require('react/addons');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'FormRow',
	propTypes: {
		className: React.PropTypes.string
	},
	render() {
		// classes
		var className = classNames('form-row', this.props.className);

		return (
			<div className={className}>
				{this.props.children}
			</div>
		);
	}
});
