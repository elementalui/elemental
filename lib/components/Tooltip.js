/* eslint react/no-did-mount-set-state: 0 */

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var blacklist = require('blacklist');

module.exports = React.createClass({
	displayName: 'Tooltip',
	propTypes: {
		className: React.PropTypes.string,
		content: React.PropTypes.string,
		placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
	},
	getDefaultProps: function getDefaultProps() {
		return {
			placement: 'top'
		};
	},
	getInitialState: function getInitialState() {
		return {
			visible: false
		};
	},
	componentDidMount: function componentDidMount() {
		var target = this.refs.target.getDOMNode();
		this.setState({
			targetHeight: target.offsetHeight,
			targetWidth: target.offsetWidth
		});
	},

	showTooltip: function showTooltip() {
		this.setState({ visible: true });
	},
	hideTooltip: function hideTooltip() {
		this.setState({ visible: false });
	},

	renderTooltip: function renderTooltip() {
		if (!this.state.visible) return null;

		// style
		var tooltipStyle = {};

		if (this.props.placement === 'top') {
			tooltipStyle.top = '-100%';
			tooltipStyle.left = '50%';
			tooltipStyle.msTransform = 'translateX(-50%)';
			tooltipStyle.WebkitTransform = 'translateX(-50%)';
			tooltipStyle.transform = 'translateX(-50%)';
			tooltipStyle.marginTop = -4;
		} else if (this.props.placement === 'bottom') {
			tooltipStyle.bottom = '-100%';
			tooltipStyle.left = '50%';
			tooltipStyle.msTransform = 'translateX(-50%)';
			tooltipStyle.WebkitTransform = 'translateX(-50%)';
			tooltipStyle.transform = 'translateX(-50%)';
			tooltipStyle.marginBottom = -4;
		} else if (this.props.placement === 'left') {
			tooltipStyle.top = '50%';
			tooltipStyle.right = '100%';
			tooltipStyle.marginTop = -(this.state.targetHeight / 2);
			tooltipStyle.marginRight = 4;
		} else if (this.props.placement === 'right') {
			tooltipStyle.top = '50%';
			tooltipStyle.left = '100%';
			tooltipStyle.marginTop = -(this.state.targetHeight / 2);
			tooltipStyle.marginLeft = 4;
		}

		return React.createElement(
			'span',
			{ style: tooltipStyle, className: 'Tooltip ' + this.props.placement },
			React.createElement(
				'span',
				{ className: 'TooltipContent' },
				this.props.content
			),
			React.createElement('span', { className: 'TooltipArrow' })
		);
	},

	render: function render() {
		// props
		var props = blacklist(this.props, 'content', 'placement', 'target');

		return React.createElement(
			'span',
			_extends({ ref: 'target', onMouseOver: this.showTooltip, onMouseOut: this.hideTooltip, onFocus: this.showTooltip, onBlur: this.hideTooltip, style: { position: 'relative' } }, props),
			this.props.children,
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'Tooltip', component: 'span' },
				this.renderTooltip()
			)
		);
	}
});