const React = require('react');
const classNames = require('classnames');
const blacklist = require('blacklist');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

const InputGroup = createReactClass({
	displayName: 'InputGroup',
	propTypes: {
		className: PropTypes.string,
		contiguous: PropTypes.bool,
	},
	render () {
		// classes
		const className = classNames('InputGroup', {
			'InputGroup--contiguous': this.props.contiguous,
		}, this.props.className);
		const props = blacklist(this.props, 'contiguous');

		return (
			<div {...props} className={className} />
		);
	},
});

// expose the child to the top level export
InputGroup.Section = require('./InputGroupSection');

export default InputGroup;
