'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'Modal',
	propTypes: {
		backdropClosesModal: React.PropTypes.bool,
		className: React.PropTypes.string,
		headerHasCloseButton: React.PropTypes.bool,
		headerTitle: React.PropTypes.string,
		isOpen: React.PropTypes.bool,
		onCancel: React.PropTypes.func
	},
	renderDialog: function renderDialog() {
		if (!this.props.isOpen) return null;

		// elements
		var header = this.props.headerTitle ? React.createElement(
			'div',
			{ className: 'Modal-header' },
			this.props.headerHasCloseButton ? React.createElement('span', { onClick: this.props.onCancel, className: 'Modal-close' }) : null,
			React.createElement(
				'h4',
				{ className: 'Modal-title' },
				this.props.headerTitle
			)
		) : null;

		return React.createElement(
			'div',
			{ className: 'Modal-dialog' },
			React.createElement(
				'div',
				{ className: 'Modal-content' },
				header,
				this.props.children
			)
		);
	},
	renderBackdrop: function renderBackdrop() {
		if (!this.props.isOpen) return null;

		return React.createElement('div', { className: 'Modal-backdrop', onClick: this.props.backdropClosesModal ? this.props.onCancel : null });
	},
	render: function render() {
		// classes
		var className = classNames('Modal', this.props.className);

		// props
		var props = blacklist(this.props, 'backdropClosesModal', 'className', 'headerHasCloseButton', 'headerTitle', 'isOpen');
		props.className = className;

		return React.createElement(
			'div',
			props,
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'Modal-dialog', component: 'div' },
				this.renderDialog()
			),
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'Modal-background', component: 'div' },
				this.renderBackdrop()
			)
		);
	}
});

// create simple children for the modal
module.exports.Body = React.createClass({
	displayName: 'ModalBody',
	propTypes: {
		className: React.PropTypes.string
	},
	render: function render() {
		// props
		var props = blacklist(this.props, 'className');

		// classes
		var className = classNames('Modal-body', this.props.className);

		return React.createElement(
			'div',
			_extends({ className: className }, props),
			this.props.children
		);
	}
});
module.exports.Footer = React.createClass({
	displayName: 'ModalFooter',
	propTypes: {
		className: React.PropTypes.string
	},
	render: function render() {
		// props
		var props = blacklist(this.props, 'className');

		// classes
		var className = classNames('Modal-footer', this.props.className);

		return React.createElement(
			'div',
			_extends({ className: className }, props),
			this.props.children
		);
	}
});