'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _blacklist = require('blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = require('../constants');

var TransitionPortal = _react2['default'].createClass({
	displayName: 'TransitionPortal',
	componentDidMount: function componentDidMount() {
		if (!_constants.canUseDOM) return;
		var p = document.createElement('div');
		document.body.appendChild(p);
		this.portalElement = p;
		this.componentDidUpdate();
	},
	componentDidUpdate: function componentDidUpdate() {
		if (!_constants.canUseDOM) return;
		_reactDom2['default'].render(_react2['default'].createElement(
			_reactAddonsCssTransitionGroup2['default'],
			this.props,
			this.props.children
		), this.portalElement);
	},
	componentWillUnmount: function componentWillUnmount() {
		if (!_constants.canUseDOM) return;
		document.body.removeChild(this.portalElement);
	},
	portalElement: null,
	render: function render() {
		return null;
	}
});

module.exports = _react2['default'].createClass({
	displayName: 'Modal',
	propTypes: {
		autofocusFirstElement: _react2['default'].PropTypes.bool,
		backdropClosesModal: _react2['default'].PropTypes.bool,
		className: _react2['default'].PropTypes.string,
		isOpen: _react2['default'].PropTypes.bool,
		onCancel: _react2['default'].PropTypes.func,
		width: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['small', 'medium', 'large']), _react2['default'].PropTypes.number])
	},
	getDefaultProps: function getDefaultProps() {
		return {
			width: 'medium'
		};
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (!_constants.canUseDOM) return;
		if (!this.props.isOpen && nextProps.isOpen) {
			// setTimeout(() => this.handleAccessibility());
			document.body.style.overflow = 'hidden';
		} else if (this.props.isOpen && !nextProps.isOpen) {
			// setTimeout(() => this.removeAccessibilityHandlers());
			document.body.style.overflow = null;
		}
	},
	/*
 handleAccessibility () {
 	// Remember the element that was focused before we opened the modal
 	// so we can return focus to it once we close the modal.
 	this.focusedElementBeforeModalOpened = document.activeElement;
 		// We're using a transition to reveal the modal,
 	// so wait until the element is visible, before
 	// finding the first keyboard focusable element
 	// and passing focus to it, otherwise the browser
 	// might scroll the document to reveal the element
 	// receiving focus
 	if (this.props.autofocusFirstElement) {
 		ally.when.visibleArea({
 			context: this.modalElement,
 			callback: function(context) {
 				// the modal is visible on screen, so find the first
 				// keyboard focusable element (giving any element with
 				// autofocus attribute precendence). If the modal does
 				// not contain any keyboard focusabe elements, focus will
 				// be given to the modal itself.
 				var element = ally.query.firstTabbable({
 					context: context,
 					defaultToContext: true,
 				});
 				element.focus();
 			},
 		});
 	}
 		// Make sure that no element outside of the modal
 	// can be interacted with while the modal is visible.
 	this.disabledHandle = ally.maintain.disabled({
 		filter: this.modalElement,
 	});
 		// Make sure that no element outside of the modal
 	// is exposed via the Accessibility Tree, to prevent
 	// screen readers from navigating to content it shouldn't
 	// be seeing while the modal is open.
 	this.hiddenHandle = ally.maintain.hidden({
 		filter: this.modalElement,
 	});
 		// React to escape keys as mandated by ARIA Practices
 	this.keyHandle = ally.when.key({
 		escape: this.handleClose,
 	});
 },
 removeAccessibilityHandlers () {
 	// undo listening to keyboard
 	this.keyHandle && this.keyHandle.disengage();
 		// undo hiding elements outside of the modal
 	this.hiddenHandle && this.hiddenHandle.disengage();
 		// undo disabling elements outside of the modal
 	this.disabledHandle && this.disabledHandle.disengage();
 		// return focus to where it was before we opened the modal
 	this.focusedElementBeforeModalOpened && this.focusedElementBeforeModalOpened.focus();
 },
 handleModalClick (event) {
 	if (event.target.dataset.modal) this.handleClose();
 },
 */
	handleClose: function handleClose() {
		this.props.onCancel();
	},
	renderDialog: function renderDialog() {
		var _this = this;

		if (!this.props.isOpen) return;
		var dialogClassname = (0, _classnames2['default'])('Modal-dialog', this.props.width && isNaN(this.props.width) ? 'Modal-dialog--' + this.props.width : null);
		return _react2['default'].createElement(
			'div',
			{ className: dialogClassname, style: this.props.width && !isNaN(this.props.width) ? { width: this.props.width + 20 } : null },
			_react2['default'].createElement(
				'div',
				{ ref: function (ref) {
						_this.modalElement = ref;
					}, className: 'Modal-content' },
				this.props.children
			)
		);
	},
	renderBackdrop: function renderBackdrop() {
		if (!this.props.isOpen) return;
		return _react2['default'].createElement('div', { className: 'Modal-backdrop', onClick: this.props.backdropClosesModal ? this.handleClose : null });
	},
	render: function render() {
		var className = (0, _classnames2['default'])('Modal', {
			'is-open': this.props.isOpen
		}, this.props.className);
		var props = (0, _blacklist2['default'])(this.props, 'backdropClosesModal', 'className', 'isOpen', 'onCancel');
		return _react2['default'].createElement(
			'div',
			null,
			_react2['default'].createElement(
				TransitionPortal,
				_extends({}, props, { 'data-modal': 'true', className: className, /*onClick={this.handleModalClick}*/transitionName: 'Modal-dialog', transitionEnterTimeout: 260, transitionLeaveTimeout: 140, component: 'div' }),
				this.renderDialog()
			),
			_react2['default'].createElement(
				TransitionPortal,
				{ transitionName: 'Modal-background', transitionEnterTimeout: 140, transitionLeaveTimeout: 240, component: 'div' },
				this.renderBackdrop()
			)
		);
	}
});

// expose the children to the top level export
module.exports.Body = require('./ModalBody');
module.exports.Footer = require('./ModalFooter');
module.exports.Header = require('./ModalHeader');