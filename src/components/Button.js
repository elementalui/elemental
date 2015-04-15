var React = require('react/addons');
var classNames = require('classnames');
var Colours = require('../mixins/Colours');
var Defaults = require('../mixins/Defaults');
var _ = require('underscore');

function cssVerticalGradient(startColor, endColor, startPercent='0%', endPercent='100%') {
	return 'linear-gradient(to bottom, ' + startColor + ' ' + startPercent + ',' +  endColor + ' ' + endPercent + ')'
}


module.exports = React.createClass({
	displayName: 'Button',
	mixins: [Colours, Defaults],
	propTypes: {
		onClick: React.PropTypes.func,
		type: React.PropTypes.string,
		size: React.PropTypes.string,
		customClass: React.PropTypes.string
	},
	getInitialState() {
		return {
			active: false,
			focus: false,
			hover: false,
			disabled: false
		};
	},
	getDefaultProps() {
		return {
			type: 'default'
		};
	},

	handlePressed() {
		this.setState({ active: true });
	},
	handleUnPressed() {
		this.setState({ active: false });
	},
	handleBlur() {
		this.setState({ focus: false });
	},
	handleFocus() {
		this.setState({ focus: true });
	},
	handleHover() {
		this.setState({ hover: true });
	},
	handleUnHover() {
		this.setState({ hover: false });
	},

	render() {
		var self = this;

		// classes
		var componentClass = classNames(
			'btn',
			this.props.customClass
		);

		// style helpers
		function buttonVariant(background, color) {
			var styles = {
				backgroundImage: cssVerticalGradient(self.shadeColor(background, 0.04), self.shadeColor(background, -0.04)),
				backgroundColor: background,
				backgroundRepeat: 'repeat-x',
				color: color
			};

			if (self.state.hover) {
				styles = _.extend(styles, {
					backgroundImage: cssVerticalGradient(self.shadeColor(background, 0.08), background),
					outline: 'none'
				});
			}
			if (self.state.focus) {
				styles = _.extend(styles, {
					backgroundImage: cssVerticalGradient(self.shadeColor(background, 0.08), background),
					boxShadow: '0 0 0 1px ' + self.ui.color.bodyBackground + ', 0 0 0 3px ' + self.blendColors(self.ui.color.bodyBackground, background, 0.3),
					outline: 'none'
				});
			}
			if (self.state.active) {
				styles = _.extend(styles, {
					backgroundColor: self.shadeColor(background, -0.04),
					backgroundImage: 'none',
					boxShadow: 'none'
				});
			}

			return styles;
		}
		function buttonDefaultVariant(border, color) {
			var styles = {
				background: 'none',
				borderColor: border,
				color: color
			};
			if (self.state.focus || self.state.hover) {
				styles = _.extend(styles, {
					backgroundColor: self.blendColors(color, self.ui.color.bodyBackground, 0.9),
					backgroundImage: 'none',
					borderColor: self.shadeColor(border, 0.1),
					outline: 'none'
				});
			}
			if (self.state.focus) {
				styles = _.extend(styles, {
					boxShadow: '0 0 0 1px ' + self.ui.color.bodyBackground + ', 0 0 0 3px ' + self.blendColors(self.ui.color.bodyBackground, border, 0.3),
				});
			}
			if (self.state.active) {
				styles = _.extend(styles, {
					backgroundColor: self.blendColors(color, self.ui.color.bodyBackground, 0.8),
					borderColor: self.shadeColor(border, -0.1),
					boxShadow: 'none',
					color: color
				});
			}

			return styles;
		}
		function buttonLink(color) {
			var styles = {
				borderRadius: 0,
				color: color,
				fontWeight: 'normal'
			};
			if (self.state.active || self.state.focus || self.state.hover) {
				styles = _.extend(styles, {
					backgroundColor: 'transparent',
					backgroundImage: 'none',
					boxShadow: 'none',
					borderColor: 'transparent'
				});
			}
			if (self.state.hover) {
				styles = _.extend(styles, {
					color: self.shadeColor(color, 0.1),
					textDecoration: 'underline'
				});
			}

			return styles;
		}

		
		// Set Styles
		// ------------------------------

		var componentStyles = {
			background: 'none',
			border: '1px solid transparent',
			borderRadius: self.ui.borderRadius.base,
			cursor: 'pointer',
			display: 'inline-block',
			fontWeight: 500,
			height: self.ui.component.height,
			lineHeight: self.ui.component.lineHeight,
			marginBottom: '0',
			overflow: 'hidden',
			padding: '0 ' + self.ui.component.padding,
			textAlign: 'center',
			touchAction: 'manipulation',
			verticalAlign: 'middle',
			WebkitAppearance: 'none',
			whiteSpace: 'nowrap'
		};

		// type variants
		if (this.props.type === 'default') {
			componentStyles = _.extend(componentStyles, buttonDefaultVariant(this.blendColors(self.ui.color.primary, self.ui.color.bodyBackground, 0.5), self.ui.color.primary));
		}
		if (this.props.type === 'default-danger') {
			componentStyles = _.extend(componentStyles, buttonDefaultVariant(this.blendColors(self.ui.color.danger, self.ui.color.bodyBackground, 0.5), self.ui.color.danger));
		}
		if (this.props.type === 'default-warning') {
			componentStyles = _.extend(componentStyles, buttonDefaultVariant(this.blendColors(self.ui.color.warning, self.ui.color.bodyBackground, 0.5), self.ui.color.warning));
		}
		if (this.props.type === 'default-success') {
			componentStyles = _.extend(componentStyles, buttonDefaultVariant(this.blendColors(self.ui.color.success, self.ui.color.bodyBackground, 0.5), self.ui.color.success));
		}
		if (this.props.type === 'primary') {
			componentStyles = _.extend(componentStyles, buttonVariant(self.ui.color.primary, '#fff'));
		}
		if (this.props.type === 'danger') {
			componentStyles = _.extend(componentStyles, buttonVariant(self.ui.color.danger, '#fff'));
		}
		if (this.props.type === 'warning') {
			componentStyles = _.extend(componentStyles, buttonVariant(self.ui.color.warning, '#fff'));
		}
		if (this.props.type === 'success') {
			componentStyles = _.extend(componentStyles, buttonVariant(self.ui.color.success, '#fff'));
		}
		if (this.props.type === 'link') {
			componentStyles = _.extend(componentStyles, buttonLink(self.ui.color.primary));
		}

		// size variants
		if (this.props.size === 'large') {
			componentStyles = _.extend(componentStyles, { fontSize: self.ui.fontSize.large });
		}
		if (this.props.size === 'small') {
			componentStyles = _.extend(componentStyles, { fontSize: self.ui.fontSize.small });
		}
		if (this.props.size === 'xsmall') {
			componentStyles = _.extend(componentStyles, { fontSize: self.ui.fontSize.xsmall });
		}

		// props
		var props = _.omit(this.props, ['type', 'size', 'customClass']);
		
		return (
			<button
				onBlur={this.handleBlur}
				onFocus={this.handleFocus}
				onMouseDown={this.handlePressed}
				onMouseUp={this.handleUnPressed}
				onMouseOver={this.handleHover}
				onMouseOut={this.handleUnHover}
				type="button"
				className={componentClass}
				style={componentStyles}
				{...props}>
				{this.props.children}
			</button>
		);
	}
});
