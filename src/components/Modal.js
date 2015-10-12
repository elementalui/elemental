import React from 'react';
import ReactDOM from 'react-dom';
import Transition from 'react-addons-css-transition-group';
import blacklist from 'blacklist';
import classNames from 'classnames';

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
	},
	componentWillReceiveProps: function(nextProps) {
		if (nextProps.isOpen) {
			window.addEventListener('keydown', this.handleKeyDown);
			document.body.style.overflow = 'hidden';
		} else {
			window.removeEventListener('keydown', this.handleKeyDown);
			document.body.style.overflow = null;
		}
	},

	handleKeyDown (event) {
		if (event.keyCode === 27) {
			this.props.onCancel();
		}
	},
	handleModalClick (event) {
		if (event.target.dataset.modal) this.props.onCancel();
	},
	renderDialog() {
		if (!this.props.isOpen) return;

		return (
			<div className="Modal-dialog">
				<div className="Modal-content">
					{this.props.children}
				</div>
			</div>
		);
	},
	renderBackdrop() {
		if (!this.props.isOpen) return;

		return <div className="Modal-backdrop" onClick={this.props.backdropClosesModal ? this.props.onCancel : null} />;
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
