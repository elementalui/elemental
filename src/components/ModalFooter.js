var classnames = require('classnames');
var React = require('react');

export default React.createClass({
	displayName: 'ModalFooter',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string
	},
	render() {
		var className = classnames('Modal__footer', this.props.className);
		return <div {...this.props} className={className} />;
	}
});
