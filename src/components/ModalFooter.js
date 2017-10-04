const classnames = require('classnames');
const React = require('react');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

export default createReactClass({
	displayName: 'ModalFooter',
	propTypes: {
		children: PropTypes.node.isRequired,
		className: PropTypes.string,
	},
	render () {
		var className = classnames('Modal__footer', this.props.className);
		return <div {...this.props} className={className} />;
	},
});
