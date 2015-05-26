'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'Tooltip',
	propTypes: {
		content: React.PropTypes.string,
		placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
		className: React.PropTypes.string
	},
	getDefaultProps: function getDefaultProps() {
		return {
			placement: 'top'
		};
	},
	getInitialState: function getInitialState() {
		return {
			hover: false
		};
	},
	componentDidMount: function componentDidMount() {
		var target = React.findDOMNode(this.refs.target);
		this.setState({
			targetHeight: target.offsetHeight,
			targetWidth: target.offsetWidth
		});
	},

	handleHover: function handleHover() {
		this.setState({ hover: true });
	},
	handleUnHover: function handleUnHover() {
		this.setState({ hover: false });
	},

	render: function render() {
		// classes
		var componentClass = classNames('TooltipOuter', this.props.className);

		// props
		var props = blacklist(this.props, 'content', 'className', 'placement', 'target');

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

		// content
		var tooltip = this.state.hover ? React.createElement(
			'span',
			{ style: tooltipStyle, className: 'Tooltip ' + this.props.placement },
			React.createElement(
				'span',
				{ className: 'TooltipContent' },
				this.props.content
			),
			React.createElement('span', { className: 'TooltipArrow' })
		) : null;

		return React.createElement(
			'span',
			_extends({ onMouseOver: this.handleHover, onMouseOut: this.handleUnHover, className: componentClass, style: { display: 'inline-block', position: 'relative' } }, props),
			React.createElement(
				'span',
				{ ref: 'target', style: { display: 'inline-block' } },
				this.props.children
			),
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'Tooltip', component: 'span' },
				tooltip
			)
		);
	}
});
