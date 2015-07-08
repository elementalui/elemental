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
	renderDialog() {
		if (!this.props.isOpen) return null;
		
		var top = typeof this.props.top !== 'undefined' ? this.props.top : window.pageYOffset;

		return (
			<div className="Modal-dialog" style={{ top }}>
				<div className="Modal-content">
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
		var className = classNames('Modal', this.props.className);

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
