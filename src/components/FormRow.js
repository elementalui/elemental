var React = require('react');
var classNames = require('classnames');

export default React.createClass({
	displayName: 'FormRow',
	propTypes: {
		className: React.PropTypes.string,
	},
	render () {
		var className = classNames('FormRow', this.props.className);

		return (
			<div className={className}>
				{this.props.children}
			</div>
		);
	},
});
