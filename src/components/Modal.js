var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'Modal',
	propTypes: {
		isOpen: React.PropTypes.bool,
		backdropClosesModal: React.PropTypes.bool,
		headerTitle: React.PropTypes.string,
		headerHasCloseButton: React.PropTypes.bool
	},
	render() {
		// classes
		var dialogClass = classNames('Modal-dialog', this.props.className);

		// elements
		var header = this.props.headerTitle ? <div className="Modal-header">
			{this.props.headerHasCloseButton ? <span onClick={this.props.onChange} className="Modal-close" /> : null}
			<h4 className="Modal-title">Modal Header</h4>
		</div> : null; 

		var modalBackground = this.props.isOpen ? <div className="Modal-backdrop" onClick={this.props.backdropClosesModal ? this.props.onChange : null} /> : null;
		var modalDialog = this.props.isOpen ? <div className={dialogClass}><div className="Modal-content">
			{header}
			{this.props.children}
		</div></div> : null;
		
		return (
			<div className="Modal">
				<ReactCSSTransitionGroup transitionName="Modal-dialog" component="div">
					{modalDialog}
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup transitionName="Modal-background" component="div">
					{modalBackground}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});
