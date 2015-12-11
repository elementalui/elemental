import React from 'react';
import ReactDOM from 'react-dom';
import Transition from 'react-addons-css-transition-group';
import blacklist from 'blacklist';
import classNames from 'classnames';
import ally from 'ally.js';

const TransitionPortal = React.createClass({
	displayName: 'TransitionPortal',
	portalElement: null,
	render: () => null,
	componentDidMount() {
		let p = document.createElement('div');
		document.body.appendChild(p);
		this.portalElement = p;
		this.componentDidUpdate();
	},
	componentWillUnmount() {
		document.body.removeChild(this.portalElement);
	},
	componentDidUpdate() {
		ReactDOM.render(<Transition {...this.props}>{this.props.children}</Transition>, this.portalElement);
	}
});

module.exports = React.createClass({
	displayName: 'Modal',
	propTypes: {
		backdropClosesModal: React.PropTypes.bool,
		className: React.PropTypes.string,
		isOpen: React.PropTypes.bool,
		onCancel: React.PropTypes.func,
		width: React.PropTypes.oneOfType([
			React.PropTypes.oneOf(['small', 'medium', 'large']),
			React.PropTypes.number,
		]),
	},
	getDefaultProps () {
		return {
			width: 'medium'
		};
	},
	componentWillReceiveProps: function(nextProps) {
		if (nextProps.isOpen) {
			setTimeout(() => this.handleAccessibility());
			document.body.style.overflow = 'hidden';
		} else {
			setTimeout(() => this.removeAccessibilityHandlers());
		}
	},
	handleAccessibility () {
		// Remember the element that was focused before we opened the modal
		// so we can return focus to it once we close the modal.
		this.focusedElementBeforeModalOpened = document.activeElement;

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
	handleClose () {
		document.body.style.overflow = null;
		this.props.onCancel();
	},
	renderDialog() {
		if (!this.props.isOpen) return;

		let dialogClassname = classNames('Modal-dialog', (this.props.width && isNaN(this.props.width)) ? (
			'Modal-dialog--' + this.props.width
		) : null);

		return (
			<div className={dialogClassname} style={(this.props.width && !isNaN(this.props.width)) ? { width: this.props.width + 20 } : null}>
				<div ref={ref => { this.modalElement = ref; }} className="Modal-content">
					{this.props.children}
				</div>
			</div>
		);
	},
	renderBackdrop() {
		if (!this.props.isOpen) return;

		return <div className="Modal-backdrop" onClick={this.props.backdropClosesModal ? this.handleClose : null} />;
	},
	render() {
		var className = classNames('Modal', {
			'is-open': this.props.isOpen
		}, this.props.className);

		var props = blacklist(this.props, 'backdropClosesModal', 'className', 'isOpen', 'onCancel');

		return (
			<div>
				<TransitionPortal {...props} data-modal="true" className={className} onClick={this.handleModalClick} transitionName="Modal-dialog" transitionEnterTimeout={260} transitionLeaveTimeout={140} component="div">
					{this.renderDialog()}
				</TransitionPortal>
				<TransitionPortal transitionName="Modal-background" transitionEnterTimeout={140} transitionLeaveTimeout={240} component="div">
					{this.renderBackdrop()}
				</TransitionPortal>
			</div>
		);
	}
});


// expose the children to the top level export
module.exports.Body = require('./ModalBody');
module.exports.Footer = require('./ModalFooter');
module.exports.Header = require('./ModalHeader');
