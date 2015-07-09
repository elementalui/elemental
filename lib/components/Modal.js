'use strict';

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'Modal',
	propTypes: {
		backdropClosesModal: React.PropTypes.bool,
		className: React.PropTypes.string,
		isOpen: React.PropTypes.bool,
		onCancel: React.PropTypes.func,
		top: React.PropTypes.number
	},
	renderDialog: function renderDialog() {
		if (!this.props.isOpen) return null;

		var top = typeof this.props.top !== 'undefined' ? this.props.top : window.pageYOffset;

		return React.createElement(
			'div',
			{ className: 'Modal-dialog', style: { top: top } },
			React.createElement(
				'div',
				{ className: 'Modal-content' },
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

// expose the children to the top level export
module.exports.Body = require('./ModalBody');
module.exports.Footer = require('./ModalFooter');
module.exports.Header = require('./ModalHeader');