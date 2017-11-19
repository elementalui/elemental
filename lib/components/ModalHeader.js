'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
	handleClose: function handleClose() {
		document.body.style.overflow = null;
		this.props.onClose();
	},
	render: function render() {

		// elements
		var className = classnames('Modal__header', this.props.className);
		var close = this.props.showCloseButton ? React.createElement('button', { type: 'button', onClick: this.handleClose, className: 'Modal__header__close' }) : null;
		var text = this.props.text ? React.createElement(
			'h4',
			{ className: 'Modal__header__text' },
			this.props.text
		) : null;
		return React.createElement(
			'div',
			_extends({}, this.props, { className: className }),
			close,
			text,
			this.props.children
		);
	}
});