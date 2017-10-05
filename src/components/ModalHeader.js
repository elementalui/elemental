const classnames = require('classnames');
const React = require('react');
const blacklist = require('blacklist');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

export default createReactClass({
	displayName: 'ModalHeader',
	propTypes: {
		children: PropTypes.node,
		className: PropTypes.string,
		onClose: PropTypes.func,
		showCloseButton: PropTypes.bool,
		text: PropTypes.string,
	},
	handleClose () {
		document.body.style.overflow = '';
		this.props.onClose();
	},
	render () {

		// elements
		const className = classnames('Modal__header', this.props.className);
		const close = this.props.showCloseButton ? <button type="button" onClick={this.handleClose} className="Modal__header__close" /> : null;
		const text = this.props.text ? <h4 className="Modal__header__text">{this.props.text}</h4> : null;
		const props = blacklist(this.props, 'children', 'onClose', 'showCloseButton', 'text');

		return (
			<div {...props} className={className}>
				{close}
				{text}
				{this.props.children}
			</div>
		);
	},
});
