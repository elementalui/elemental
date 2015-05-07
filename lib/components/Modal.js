'use strict';

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
	render: function render() {
		// classes
		var dialogClass = classNames('Modal-dialog', this.props.className);

		// elements
		var header = this.props.headerTitle ? React.createElement(
			'div',
			{ className: 'Modal-header' },
			this.props.headerHasCloseButton ? React.createElement('span', { onClick: this.props.onChange, className: 'Modal-close' }) : null,
			React.createElement(
				'h4',
				{ className: 'Modal-title' },
				'Modal Header'
			)
		) : null;

		var modalBackground = this.props.isOpen ? React.createElement('div', { className: 'Modal-backdrop', onClick: this.props.backdropClosesModal ? this.props.onChange : null }) : null;
		var modalDialog = this.props.isOpen ? React.createElement(
			'div',
			{ className: dialogClass },
			React.createElement(
				'div',
				{ className: 'Modal-content' },
				header,
				this.props.children
			)
		) : null;

		return React.createElement(
			'div',
			{ className: 'Modal' },
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'Modal-dialog', component: 'div' },
				modalDialog
			),
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'Modal-background', component: 'div' },
				modalBackground
			)
		);
	}
});