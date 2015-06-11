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
	renderDialog() {
		if (!this.props.isOpen) return null;

		// elements
		var header = this.props.headerTitle ? <div className="Modal-header">
			{this.props.headerHasCloseButton ? <span onClick={this.props.onCancel} className="Modal-close" /> : null}
			<h4 className="Modal-title">{this.props.headerTitle}</h4>
		</div> : null;

		return (
			<div className="Modal-dialog">
				<div className="Modal-content">
					{header}
					{this.props.children}
				</div>
			</div>
		);
	},
	renderBackdrop() {
		if (!this.props.isOpen) return null;

		return <div className="Modal-backdrop" onClick={this.props.backdropClosesModal ? this.props.onCancel : null} />;
	},
	render() {
		// classes
		var className = classNames('Modal', {
			'is-open': this.props.isOpen
		}, this.props.className);

		// props
		var props = blacklist(this.props, 'backdropClosesModal', 'className', 'headerHasCloseButton', 'headerTitle', 'isOpen');
		props.className = className;

		return (
			<div {...props}>
				<ReactCSSTransitionGroup transitionName="Modal-dialog" component="div">
					{this.renderDialog()}
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup transitionName="Modal-background" component="div">
					{this.renderBackdrop()}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});


// create simple children for the modal
module.exports.Body = React.createClass({
	displayName: 'ModalBody',
	propTypes: {
		className: React.PropTypes.string
	},
	render() {
		// props
		var props = blacklist(this.props, 'className');


		// classes
		var className = classNames('Modal-body', this.props.className);

		return (
			<div className={className} {...props}>
				{this.props.children}
			</div>
		);
	}
});
module.exports.Footer = React.createClass({
	displayName: 'ModalFooter',
	propTypes: {
		className: React.PropTypes.string
	},
	render() {
		// props
		var props = blacklist(this.props, 'className');


		// classes
		var className = classNames('Modal-footer', this.props.className);

		return (
			<div className={className} {...props}>
				{this.props.children}
			</div>
		);
	}
});
