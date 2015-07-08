var classnames = require('classnames');
var React = require('react/addons');

module.exports = React.createClass({
	displayName: 'ModalBody',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string
	},
	render() {
		var className = classnames('Modal__body', this.props.className);
		return <div {...this.props} className={className} />;
	}
});
