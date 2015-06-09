/* eslint no-script-url: 0 */

var React = require('react');
var Dropdown = require('elemental').Dropdown;
var Tooltip = require('elemental').Tooltip;
var Button = require('elemental').Button;

var DROPDOWN_OPTIONS = [
	{ type: 'item', anchor: 'javascript:;', label: 'Action' },
	{ type: 'item', anchor: 'javascript:;', label: 'Another action' },
	{ type: 'item', anchor: 'javascript:;', label: 'Something else here' },
	{ type: 'divider' },
	{ type: 'header', label: 'Dropdown header' },
	{ type: 'item', anchor: 'javascript:;', label: 'Separated link' }
];

var BUTTON_SIZES = [
	{ label: 'Large',            value: 'lg' },
	{ label: 'Default',          value: 'md' },
	{ label: 'Small',            value: 'sm' },
	{ label: 'Extra Small',      value: 'xs' }
];

var BUTTON_VARIANTS = [
	{ label: 'Primary',          value: 'primary' },
	{ label: 'Success',          value: 'success' },
	{ label: 'Warning',          value: 'warning' },
	{ label: 'Danger',           value: 'danger' },
	{ label: 'Default Primary',  value: 'default-primary' },
	{ label: 'Default Success',  value: 'default-success' },
	{ label: 'Default Warning',  value: 'default-warning' },
	{ label: 'Default Danger',   value: 'default-danger' },
	{ label: 'Link',             value: 'link' },
	{ label: 'Link Text',        value: 'link-text' },
	{ label: 'Link Cancel',      value: 'link-cancel' },
	{ label: 'Link Delete',      value: 'link-delete' }
];

var Buttons = React.createClass({
	displayName: 'VIEW_Buttons',
	getInitialState() {
		return {
			dropdownOpen: false
		};
	},
	toggleDropdown() {
		this.setState({ dropdownOpen: !this.state.dropdownOpen });
	},
	renderButtonSizes() {
		return BUTTON_SIZES.map(size => {
			return (
				<div key={size.value} className="col-sm-3">
					<div className="demo-box u-text-center">
						<Button size={size.value}>{size.label}</Button>
					</div>
				</div>
			);
		});
	},
	renderButtonVariants() {
		return BUTTON_VARIANTS.map(type => {
			return (
				<div key={type.value} className="col-sm-3">
					<div className="demo-box u-text-center">
						<Button type={type.value}>{type.label}</Button>
					</div>
				</div>
			);
		});
	},

	render () {
		return (
			<div className="demo-container container">
				<h1>Buttons</h1>
				<h2>Sizes</h2>
				<div className="row">
					{this.renderButtonSizes()}
				</div>

				<h2>Variants</h2>
				<div className="row">
					{this.renderButtonVariants()}
				</div>

				<h2>Button Groups</h2>
				<div className="ButtonGroup">
					<Button type="default">Left</Button>
					<Button type="default">Middle</Button>
					<Button type="default">Right</Button>
				</div>

				<h2>Dropdown</h2>
				<div className="row">
					<div className="col-sm-6">
						<Dropdown items={DROPDOWN_OPTIONS} buttonLabel="Default Trigger" />
					</div>
					<div className="col-sm-6">
						<Dropdown items={DROPDOWN_OPTIONS}>
							<h3 style={{ marginTop: 15 }}>Custom Trigger</h3>
						</Dropdown>
					</div>
				</div>

				<h2>Tooltip</h2>
				<p>
					<span> This is a sentence with a </span>
					<Tooltip placement="top" content="This is the tooltip content!">
						<span className="a">top aligned toolip with a really long target</span>
					</Tooltip>
					<span> some more content </span>
					<Tooltip placement="right" content="This is the tooltip content!">
						<span className="a">right aligned toolip</span>
					</Tooltip>
					<span> some more content </span>
					<Tooltip placement="bottom" content="This is the tooltip content!">
						<span className="a">bottom aligned toolip</span>
					</Tooltip>
					<span> some more content </span>
					<Tooltip placement="left" content="This is the tooltip content!">
						<span className="a">left aligned toolip</span>
					</Tooltip>
				</p>
			</div>
		);
	}
});

module.exports = Buttons;
