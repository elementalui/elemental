'use strict';

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var blacklist = require('blacklist');
var classNames = require('classnames');
var ReactInterval = require('react-interval');

var _require = require('react/lib/ReactComponentWithPureRenderMixin');

var shouldComponentUpdate = _require.shouldComponentUpdate;

var safeTop = function safeTop(element) {
	var innerHeight = window.innerHeight;
	var pageYOffset = window.pageYOffset;
	var getComputedStyle = window.getComputedStyle;
	var clientHeight = element.clientHeight;
	var offsetTop = element.offsetTop;

	var _getComputedStyle = getComputedStyle(element);

	var marginBottom = _getComputedStyle.marginBottom;
	var marginTop = _getComputedStyle.marginTop;
	var mTop = parseInt(marginTop, 10);
	var mBottom = parseInt(marginBottom, 10);

	var height = clientHeight + mTop + mBottom;

	if (offsetTop - mTop < pageYOffset && offsetTop - mTop + height > pageYOffset + innerHeight) {
		// Scrolling within modal content, don't move
		return false;
	}
	if (offsetTop - mTop < pageYOffset && height > innerHeight) {
		// Stick to the window bottom
		return pageYOffset + innerHeight - height;
	} else {
		// Stick to the window top
		return pageYOffset;
	}
};

module.exports = React.createClass({
	displayName: 'Modal',
	propTypes: {
		backdropClosesModal: React.PropTypes.bool,
		className: React.PropTypes.string,
		isOpen: React.PropTypes.bool,
		onCancel: React.PropTypes.func,
		top: React.PropTypes.number
	},
	getInitialState: function getInitialState() {
		return { top: typeof this.props.top !== 'undefined' ? this.props.top : window.pageYOffset };
	},
	shouldComponentUpdate: shouldComponentUpdate,
	updateTop: function updateTop() {
		var top = safeTop(React.findDOMNode(this.refs.dialog));
		if (top !== false) {
			this.setState({ top: top });
		}
	},
	renderDialog: function renderDialog() {
		if (!this.props.isOpen) return null;

		return React.createElement(
			'div',
			{ ref: "dialog", className: "Modal-dialog", style: { top: this.state.top } },
			React.createElement(ReactInterval, { timeout: 200, enabled: typeof this.props.top === 'undefined',
				callback: this.updateTop }),
			React.createElement(
				'div',
				{ className: "Modal-content" },
				this.props.children
			)
		);
	},
	renderBackdrop: function renderBackdrop() {
		if (!this.props.isOpen) return null;

		return React.createElement('div', { className: "Modal-backdrop", onClick: this.props.backdropClosesModal ? this.props.onCancel : null });
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
				{ transitionName: "Modal-dialog", component: "div" },
				this.renderDialog()
			),
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: "Modal-background", component: "div" },
				this.renderBackdrop()
			)
		);
	}
});

// expose the children to the top level export
module.exports.Body = require('./ModalBody');
module.exports.Footer = require('./ModalFooter');
module.exports.Header = require('./ModalHeader');