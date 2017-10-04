const React = require('react');
const classNames = require('classnames');
const blacklist = require('blacklist');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

export default createReactClass({
	displayName: 'InputGroupSection',
	propTypes: {
		className: PropTypes.string,
		grow: PropTypes.bool,
	},
	render () {
		// classes
		const className = classNames('InputGroup_section', {
			'InputGroup_section--grow': this.props.grow,
		}, this.props.className);
		const props = blacklist(this.props, 'grow');

		return (
			<div {...props} className={className} />
		);
	},
});
