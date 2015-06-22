/* eslint no-script-url: 0 */

var React = require('react');
var { Dropdown, Tooltip, Button, ButtonGroup } = require('elemental');

const DROPDOWN_OPTIONS = [
	{ label: 'Action' },
	{ label: 'Another action' },
	{ label: 'Something else here' },
	{ type: 'divider' },
	{ type: 'header', label: 'Dropdown header' },
	{ label: 'Separated link' }
];

const BUTTON_SIZES = [
	{ label: 'Large',            value: 'lg' },
	{ label: 'Default',          value: null },
	{ label: 'Small',            value: 'sm' },
	{ label: 'Extra Small',      value: 'xs' }
];

const BUTTON_VARIANTS = [
	{ label: 'Primary',          value: 'primary' },
	{ label: 'Success',          value: 'success' },
	{ label: 'Warning',          value: 'warning' },
	{ label: 'Danger',           value: 'danger' }
];

const BUTTON_DEFAULT_VARIANTS = [
	{ label: 'Default Primary',  value: 'default-primary' },
	{ label: 'Default Success',  value: 'default-success' },
	{ label: 'Default Warning',  value: 'default-warning' },
	{ label: 'Default Danger',   value: 'default-danger' }
];

const BUTTON_LINK_VARIANTS = [
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
				<div key={size.value} className="code-example__example-element--inline">
					<Button size={size.value}>{size.label} Button</Button>
				</div>
			);
		});
	},
	renderButtonVariants(variantType) {
		return variantType.map(type => {
			return (
				<div key={type.value} className="code-example__example-element--inline">
					<Button type={type.value}>{type.label}</Button>
				</div>
			);
		});
	},

	render () {
		return (
			<div className="demo-container container">
				<h1>Buttons</h1>
				<h2>Sizes</h2>
				<div className="code-example">
					<div className="code-example__example">
						{this.renderButtonSizes()}
					</div>
					<pre className="code-example__pre">
						<code className="code-example__code language-markup">
							&lt;Button size="lg"&gt;Large Button&lt;/Button&gt;
							&lt;Button&gt;Default Button&lt;/Button&gt;
							&lt;Button size="sm"&gt;Small Button&lt;/Button&gt;
							&lt;Button size="xs"&gt;Extra Small Button&lt;/Button&gt;
						</code>
					</pre>
				</div>

				<h2>Variants</h2>
				<div className="code-example">
					<div className="code-example__example">
						{this.renderButtonVariants(BUTTON_VARIANTS)}
					</div>
					<pre className="code-example__pre">
						<code className="code-example__code language-markup">
							&lt;Button type="primary"&gt;Primary&lt;/Button&gt;
							&lt;Button type="success"&gt;Success&lt;/Button&gt;
							&lt;Button type="warning"&gt;Warning&lt;/Button&gt;
							&lt;Button type="danger"&gt;Danger&lt;/Button&gt;
						</code>
					</pre>
				</div>
				<div className="code-example">
					<div className="code-example__example">
						{this.renderButtonVariants(BUTTON_DEFAULT_VARIANTS)}
					</div>
					<pre className="code-example__pre">
						<code className="code-example__code language-markup">
							&lt;Button type="default-primary"&gt;Default Primary&lt;/Button&gt;
							&lt;Button type="default-success"&gt;Default Success&lt;/Button&gt;
							&lt;Button type="default-warning"&gt;Default Warning&lt;/Button&gt;
							&lt;Button type="default-danger"&gt;Default Danger&lt;/Button&gt;
						</code>
					</pre>
				</div>
				<div className="code-example">
					<div className="code-example__example">
						{this.renderButtonVariants(BUTTON_LINK_VARIANTS)}
					</div>
					<pre className="code-example__pre">
						<code className="code-example__code language-markup">
							&lt;Button size="lg"&gt;Large Button&lt;/Button&gt;
							&lt;Button&gt;Default Button&lt;/Button&gt;
							&lt;Button size="sm"&gt;Small Button&lt;/Button&gt;
							&lt;Button size="xs"&gt;Extra Small Button&lt;/Button&gt;
						</code>
					</pre>
				</div>

				<h2>Button Groups</h2>
				<div className="code-example">
					<div className="code-example__example">
						<ButtonGroup>
							<Button type="default">Left</Button>
							<Button type="default">Middle</Button>
							<Button type="default">Right</Button>
						</ButtonGroup>
					</div>
					<pre className="code-example__pre">
						<code className="code-example__code language-markup">
							&lt;ButtonGroup&gt;
								&lt;Button type="default">Left&lt;/Button&gt;
								&lt;Button type="default">Middle&lt;/Button&gt;
								&lt;Button type="default">Right&lt;/Button&gt;
							&lt;/ButtonGroup&gt;
						</code>
					</pre>
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
			</div>
		);
	}
});

module.exports = Buttons;
