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
	getDefaultProps() {
		return {
			placement: 'top'
		};
	},
	getInitialState() {
		return {
			hover: false
		};
	},
	componentDidMount() {
		var target = React.findDOMNode(this.refs.target);
		this.setState({
			targetHeight: target.offsetHeight,
			targetWidth: target.offsetWidth
		});
	},

	handleHover() {
		this.setState({ hover: true });
	},
	handleUnHover() {
		this.setState({ hover: false });
	},

	render() {
		// classes
		var componentClass = classNames(
			'TooltipOuter',
			this.props.className
		);

		// props
		var props = blacklist(this.props, ['content', 'className', 'placement', 'target']);

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
		var tooltip = this.state.hover ? (
			<span style={tooltipStyle} className={'Tooltip ' + this.props.placement}>
				<span className="TooltipContent">{this.props.content}</span>
				<span className="TooltipArrow" />
			</span>
		) : null;
		
		return (
			<span onMouseOver={this.handleHover} onMouseOut={this.handleUnHover} className={componentClass} style={{ display: 'inline-block', position: 'relative' }} {...props}>
				<span ref="target" style={{ display: 'inline-block' }}>
					{this.props.children}
				</span>
				<ReactCSSTransitionGroup transitionName="Tooltip" component="span">{tooltip}</ReactCSSTransitionGroup>
			</span>
		);
	}
});
