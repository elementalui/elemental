const React = require('react');
const classNames = require('classnames');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

export default createReactClass({
	displayName: 'FormRow',
	propTypes: {
		className: PropTypes.string,
	},
	render () {
		const className = classNames('FormRow', this.props.className);

		return (
			<div className={className}>
				{this.props.children}
			</div>
		);
	},
});
