var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var blacklist = require('blacklist');
var classNames = require('classnames');
var ReactInterval = require('react-interval');
var { shouldComponentUpdate } = require('react/lib/ReactComponentWithPureRenderMixin');

const safeTop = element => {
	const { innerHeight, pageYOffset, getComputedStyle } = window;
	const { clientHeight, offsetTop } = element;
	const { marginBottom, marginTop } = getComputedStyle(element);
	const [mTop, mBottom] = [parseInt(marginTop, 10), parseInt(marginBottom, 10)];
	const height = clientHeight + mTop + mBottom;

	if ((offsetTop - mTop) < pageYOffset && offsetTop - mTop + height > pageYOffset + innerHeight) {
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
	getInitialState() {
		return { top: typeof this.props.top !== 'undefined' ? this.props.top : window.pageYOffset };
	},
	shouldComponentUpdate,
	updateTop() {
		const top = safeTop(React.findDOMNode(this.refs.dialog));
		if (top !== false) {
			this.setState({ top });
		}
	},
	renderDialog() {
		if (!this.props.isOpen) return null;

		return (
			<div ref="dialog" className="Modal-dialog" style={{ top: this.state.top }}>
				<ReactInterval timeout={200} enabled={typeof this.props.top === 'undefined'}
					callback={this.updateTop} />
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


// expose the children to the top level export
module.exports.Body = require('./ModalBody');
module.exports.Footer = require('./ModalFooter');
module.exports.Header = require('./ModalHeader');
