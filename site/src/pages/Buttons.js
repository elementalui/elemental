/* eslint no-script-url: 0 */

var React = require('react');
var { Dropdown, Tooltip, Button, ButtonGroup } = require('elemental');

var ExampleSource = require('../components/ExampleSource');

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
					<ExampleSource>
						{`<Button size="lg">Large Button</Button>
						<Button>Default Button</Button>
						<Button size="sm">Small Button</Button>
						<Button size="xs">Extra Small Button</Button>`}
					</ExampleSource>
				</div>

				<h2>Variants</h2>
				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Fill Buttons</div>
						{this.renderButtonVariants(BUTTON_VARIANTS)}
					</div>
					<ExampleSource>
						{`<Button type="primary">Primary</Button>
						<Button type="success">Success</Button>
						<Button type="warning">Warning</Button>
						<Button type="danger">Danger</Button>`}
					</ExampleSource>
				</div>
				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Default Button Alternatives</div>
						{this.renderButtonVariants(BUTTON_DEFAULT_VARIANTS)}
					</div>
					<ExampleSource>
						{`<Button type="default-primary">Default Primary</Button>
						<Button type="default-success">Default Success</Button>
						<Button type="default-warning">Default Warning</Button>
						<Button type="default-danger">Default Danger</Button>`}
					</ExampleSource>
				</div>
				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Link Style Buttons</div>
						{this.renderButtonVariants(BUTTON_LINK_VARIANTS)}
					</div>
					<ExampleSource>
						{`<Button type="link">Link</Button>
						<Button type="link-text">Link Text</Button>
						<Button type="link-cancel">Link Cancel</Button>
						<Button type="link-delete">Link Delete</Button>`}
					</ExampleSource>
				</div>

				<h3>Usage</h3>
				<table className="table usage-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Type</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<body>
						<tr>
							<td>block</td>
							<td>bool</td>
							<td>false</td>
							<td>Turns the button into a block-level element which will fill the width of its container</td>
						</tr>
						<tr>
							<td>className</td>
							<td>string</td>
							<td>''</td>
							<td>Pass a custom class through to the component, applied in addition to its own manufactured classes</td>
						</tr>
						<tr>
							<td>href</td>
							<td>string</td>
							<td>''</td>
							<td>When provided the component will render as an <code className="inline-code">&lt;a&gt;</code> instead of <code className="inline-code">&lt;button&gt;</code></td>
						</tr>
						<tr>
							<td>onClick</td>
							<td>func</td>
							<td>undefined</td>
							<td>Passed through to the rendered element</td>
						</tr>
						<tr>
							<td>size</td>
							<td>string</td>
							<td>''</td>
							<td>
								Size of the button - one of: <code className="inline-code">lg</code> <code className="inline-code">sm</code> <code className="inline-code">xs</code>
							</td>
						</tr>
						<tr>
							<td>submit</td>
							<td>bool</td>
							<td>false</td>
							<td>Applies the <code className="inline-code">submit</code> attribute to the button for use in forms</td>
						</tr>
						<tr>
							<td>type</td>
							<td>string</td>
							<td>'default'</td>
							<td>
								Style of the button - one of:
								<br />
								<code className="inline-code">default</code>
								<br />
								<code className="inline-code">default-primary</code> <code className="inline-code">default-success</code> <code className="inline-code">default-warning</code> <code className="inline-code">default-danger</code>
								<br />
								<code className="inline-code">primary</code> <code className="inline-code">success</code> <code className="inline-code">warning</code> <code className="inline-code">danger</code>
								<br />
								<code className="inline-code">link</code> <code className="inline-code">link-text</code> <code className="inline-code">link-cancel</code> <code className="inline-code">link-delete</code>
							</td>
						</tr>
					</body>
				</table>

				<h2>Button Groups</h2>
				<div className="code-example">
					<div className="code-example__example">
						<ButtonGroup>
							<Button type="default">Left</Button>
							<Button type="default">Middle</Button>
							<Button type="default">Right</Button>
						</ButtonGroup>
					</div>
					<ExampleSource>
						{`<ButtonGroup>
							<Button type="default">Left</Button>
							<Button type="default">Middle</Button>
							<Button type="default">Right</Button>
						</ButtonGroup>`}
					</ExampleSource>
				</div>

				<h3>Usage</h3>
				<p>Provides no extra functionality - purely a wrapper to style buttons.</p>
				<table className="table usage-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Type</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<body>
						<tr>
							<td>children</td>
							<td>node</td>
							<td>undefined</td>
						<td>Must use Elemental <code className="inline-code">&lt;Button /&gt;</code> components for correct styling</td>
						</tr>
						<tr>
							<td>className</td>
							<td>string</td>
							<td>''</td>
							<td>Pass a custom class through to the component, applied in addition to its own manufactured classes</td>
						</tr>
					</body>
				</table>

				<h2>Dropdown</h2>
				<div className="code-example">
					<div className="code-example__example">
						<Dropdown items={DROPDOWN_OPTIONS} buttonLabel="Default Trigger" className="reallyLongCustomClassNameThatStandsOut" />
					</div>
					<ExampleSource>
						{`<Dropdown items={[...]} buttonLabel="Default Trigger" />`}
					</ExampleSource>
				</div>
				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Custom Trigger</div>
						<Dropdown items={DROPDOWN_OPTIONS} className="reallyLongCustomClassNameThatStandsOut">
							<h3 style={{ marginBottom: 0 }}>I am an H3!</h3>
						</Dropdown>
					</div>
					<ExampleSource>
						{`<Dropdown items={[...]}>
							<h3>I am an H3!</h3>
						</Dropdown>`}
					</ExampleSource>
				</div>

				<h3>Usage</h3>
				<table className="table usage-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Type</th>
							<th>Default</th>
							<th>Description</th>
						</tr>
					</thead>
					<body>
						<tr>
							<td>alignRight</td>
							<td>bool</td>
							<td>false</td>
							<td>The dropdown menu is aligned left by default, apply this attribute to right align the dropdown menu</td>
						</tr>
						<tr>
							<td>buttonHasDisclosureArrow</td>
							<td>bool</td>
							<td>true</td>
							<td>Display a disclosure arrow along with the label of the button. Ignore if a custom trigger is employed</td>
						</tr>
						<tr>
							<td>buttonLabel</td>
							<td>string</td>
							<td>''</td>
							<td>Whatever action the button represents</td>
						</tr>
						<tr>
							<td>buttonType</td>
							<td>string</td>
							<td>''</td>
							<td>See above section on button types</td>
						</tr>
						<tr>
							<td>children</td>
							<td>element</td>
							<td>undefined</td>
							<td>A single child, cloned and used as the dropdown's trigger element</td>
						</tr>
						<tr>
							<td>className</td>
							<td>string</td>
							<td>''</td>
							<td>Pass a custom class through to the component, applied in addition to its own manufactured classes</td>
						</tr>
						<tr>
							<td>isOpen</td>
							<td>bool</td>
							<td>false</td>
							<td>The dropdown menu is controlled by user input. Use this if you need to manually toggle the open state of the dropdown menu</td>
						</tr>
						<tr>
							<td>items</td>
							<td>array</td>
							<td>undefined</td>
							<td>The list of items to display in the menu formatted</td>
						</tr>
						<tr>
							<td>onSelect</td>
							<td>func</td>
							<td>function()&nbsp;&#123;&#125;</td>
							<td>The function that is called on each menu item when clicked</td>
						</tr>
					</body>
				</table>
			</div>
		);
	}
});

module.exports = Buttons;
