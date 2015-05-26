/* eslint react/no-did-mount-set-state: 0 */

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
	getDefaultProps() {
		return {
			placement: 'top'
		};
	},
	getInitialState() {
		return {
			visible: false
		};
	},
	componentDidMount() {
		var target = this.refs.target.getDOMNode();
		this.setState({
			targetHeight: target.offsetHeight,
			targetWidth: target.offsetWidth
		});
	},

	showTooltip() {
		this.setState({ visible: true });
	},
	hideTooltip() {
		this.setState({ visible: false });
	},

	renderTooltip() {
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

		return (
			<span style={tooltipStyle} className={'Tooltip ' + this.props.placement}>
				<span className="TooltipContent">{this.props.content}</span>
				<span className="TooltipArrow" />
			</span>
		);
	},

	render() {
		// props
		var props = blacklist(this.props, ['content', 'placement', 'target']);

		return (
			<span ref="target" onMouseOver={this.showTooltip} onMouseOut={this.hideTooltip} onFocus={this.showTooltip} onBlur={this.hideTooltip} style={{ position: 'relative' }} {...props}>
				{this.props.children}
				<ReactCSSTransitionGroup transitionName="Tooltip" component="span">{this.renderTooltip()}</ReactCSSTransitionGroup>
			</span>
		);
	}
});
