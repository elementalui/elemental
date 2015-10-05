var classnames = require('classnames');
var React = require('react');

module.exports = React.createClass({
	displayName: 'ModalHeader',
	propTypes: {
		children: React.PropTypes.node,
		className: React.PropTypes.string,
		onClose: React.PropTypes.func,
		showCloseButton: React.PropTypes.bool,
		text: React.PropTypes.string
	},
	render() {

		// elements
		var className = classnames('Modal__header', this.props.className);
		var close = this.props.showCloseButton ? <button type="button" onClick={this.props.onClose} className="Modal__header__close" /> : null;
		var text = this.props.text ? <h4 className="Modal__header__text">{this.props.text}</h4> : null;
		return (
			<div {...this.props} className={className}>
				{close}
				{text}
				{this.props.children}
			</div>
		);
	}
});
