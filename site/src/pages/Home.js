const React = require('react');
const Router = require('react-router');

const { Container, Button } = require('elemental');
const ExampleSource = require('../components/ExampleSource');
const BUTTON_SIZES = [
	{
		prop: 'size',
		value: 's',
		label: 'Small',
	},
	{
		prop: 'size',
		value: 'm',
		label: 'Medium (default)',
	},
	{
		prop: 'size',
		value: 'l',
		label: 'Large',
	},
	{
		prop: 'size',
		value: 'xl',
		label: 'Extra Large',
	},
];

const BUTTON_STYLES = [
	{
		prop: 'style',
		value: 'primary',
		label: 'Primary (Default)',
	},
	{
		prop: 'style',
		value: 'secondary',
		label: 'Secondary',
	},
	{
		prop: 'style',
		value: 'alert',
		label: 'Alert',
	},
];
const BUTTON_GA = [
	{
		prop: 'tracking_ga',
		value: 'button_value',
		label: 'button_value (Default)',
	},
	{
		prop: 'tracking_ga',
		value: 'trackingValue',
		label: 'trackingValue',
	},
];

const BUTTON_OPTIMIZELY = [
	{
		prop: 'tracking_optimizely',
		value: 'button_value',
		label: 'button_value (Default)',
	},
	{
		prop: 'tracking_optimizely',
		value: 'trackingValue',
		label: 'trackingValue',
	},
];


var Home = React.createClass({
	displayName: 'VIEW_Home',

	renderButtonSizes() {
		return BUTTON_SIZES.map(size => {
			return (
				<div key={size.value}>
					<Button size={size.value}>{size.label} Button</Button>
				</div>
			);
		});
	},

	renderButtonStyles() {
		return variantType.map(type => {
			return (
				<div key={type.value}>
					<Button style={type.value}>{type.label}</Button>
				</div>
			);
		});
	},

	renderButtonGATracking() {
		return variantType.map(type => {
			return (
				<div key={type.value}>
					<Button tracking_ga={type.value}>{type.label}</Button>
				</div>
			);
		});
	},

	renderButtonOptimizelyTracking() {
		return variantType.map(type => {
			return (
				<div key={type.value}>
					<Button tracking_optimizely={type.value}>{type.label}</Button>
				</div>
			);
		});
	},

	renderButtonSource(variantType) {
		var parts = variantType.map(type => {
			return `<Button "${type.prop}"="${type.value}">${type.label}</Button>`;
		});
		return parts.join('\n');
	},


	render () {
			return (
				<main>
					<Container maxWidth={768} className="demo-container">
						<h2>Button Styles</h2>
						{this.renderButtonStyles()}
						<ExampleSource>
							{this.renderButtonSource(BUTTON_STYLES)}
						</ExampleSource>
					</Container>

					<Container maxWidth={768} className="demo-container">
						<h2>Button Sizes</h2>
						{this.renderButtonSizes()}
						<ExampleSource>
							{this.renderButtonSource(BUTTON_SIZES)}
						</ExampleSource>
					</Container>

					<Container maxWidth={768} className="demo-container">
						<h2>Button GA Tracking</h2>
						{this.renderButtonGATracking(BUTTON_GA)}
						<ExampleSource>
							{this.renderButtonSource(BUTTON_GA)}
						</ExampleSource>
					</Container>

					<Container maxWidth={768} className="demo-container">
						<h2>Button Optimizely Tracking</h2>
						{this.renderButtonGATracking(BUTTON_OPTIMIZELY)}
						<ExampleSource>
							{this.renderButtonSource(BUTTON_OPTIMIZELY)}
						</ExampleSource>
					</Container>
				</main>
		);}
	});
module.exports = Home;
