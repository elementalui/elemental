/* eslint no-script-url: 0 */

var React = require('react');
var { Dropdown, Table, Tooltip, Button, ButtonGroup } = require('elemental');

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
						{`
							<Button size="lg">Large Button</Button>
							<Button>Default Button</Button>
							<Button size="sm">Small Button</Button>
							<Button size="xs">Extra Small Button</Button>
						`}
					</ExampleSource>
				</div>

				<h2>Variants</h2>
				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Fill Buttons</div>
						{this.renderButtonVariants(BUTTON_VARIANTS)}
					</div>
					<ExampleSource>
						{`
							<Button type="primary">Primary</Button>
							<Button type="success">Success</Button>
							<Button type="warning">Warning</Button>
							<Button type="danger">Danger</Button>
						`}
					</ExampleSource>
				</div>
				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Default Button Alternatives</div>
						{this.renderButtonVariants(BUTTON_DEFAULT_VARIANTS)}
					</div>
					<ExampleSource>
						{`
							<Button type="default-primary">Default Primary</Button>
							<Button type="default-success">Default Success</Button>
							<Button type="default-warning">Default Warning</Button>
							<Button type="default-danger">Default Danger</Button>
						`}
					</ExampleSource>
				</div>
				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Link Style Buttons</div>
						{this.renderButtonVariants(BUTTON_LINK_VARIANTS)}
					</div>
					<ExampleSource>
						{`
							<Button type="link">Link</Button>
							<Button type="link-text">Link Text</Button>
							<Button type="link-cancel">Link Cancel</Button>
							<Button type="link-delete">Link Delete</Button>
						`}
					</ExampleSource>
				</div>

				<h3>Usage</h3>
				<div className="usage-table">
					<Table>
						<thead>
							<tr>
								<th>Prop</th>
								<th>Type</th>
								<th>Default</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="usage-table__prop">block</td>
								<td className="usage-table__type">bool</td>
								<td className="usage-table__default">false</td>
								<td className="usage-table__description">Turns the button into a block-level element which will fill the width of its container</td>
							</tr>
							<tr>
								<td className="usage-table__prop">href</td>
								<td className="usage-table__type">string</td>
								<td className="usage-table__default">''</td>
								<td className="usage-table__description">When provided the component will render as an <code className="inline-code">&lt;a&gt;</code> instead of <code className="inline-code">&lt;button&gt;</code></td>
							</tr>
							<tr>
								<td className="usage-table__prop">size</td>
								<td className="usage-table__type">string</td>
								<td className="usage-table__default">''</td>
								<td className="usage-table__description">Size of the button - one of: <code className="inline-code">lg</code> <code className="inline-code">sm</code> <code className="inline-code">xs</code></td>
							</tr>
							<tr>
								<td className="usage-table__prop">submit</td>
								<td className="usage-table__type">bool</td>
								<td className="usage-table__default">false</td>
								<td className="usage-table__description">Applies the <code className="inline-code">submit</code> attribute to the button for use in forms</td>
							</tr>
							<tr>
								<td className="usage-table__prop">type</td>
								<td className="usage-table__type">string</td>
								<td className="usage-table__default">'default'</td>
								<td className="usage-table__description">
									One of:
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
						</tbody>
					</Table>
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
					<ExampleSource>
						{`
							<ButtonGroup>
								<Button type="default">Left</Button>
								<Button type="default">Middle</Button>
								<Button type="default">Right</Button>
							</ButtonGroup>
						`}
					</ExampleSource>
				</div>

				<h3>Usage</h3>
				<div className="usage-table">
					<Table>
						<thead>
							<tr>
								<th>Prop</th>
								<th>Type</th>
								<th>Default</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="usage-table__prop">children</td>
								<td className="usage-table__type">node</td>
								<td className="usage-table__default">undefined</td>
								<td className="usage-table__description">Required. Must use Elemental <code className="inline-code">&lt;Button /&gt;</code> components for correct styling</td>
							</tr>
						</tbody>
					</Table>
				</div>

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
						{`
							<Dropdown items={[...]}>
								<h3>I am an H3!</h3>
							</Dropdown>
						`}
					</ExampleSource>
				</div>

				<h3>Usage</h3>
				<div className="usage-table">
					<Table>
						<thead>
							<tr>
								<th>Prop</th>
								<th>Type</th>
								<th>Default</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="usage-table__prop">alignRight</td>
								<td className="usage-table__type">bool</td>
								<td className="usage-table__default">false</td>
								<td className="usage-table__description">The dropdown menu is aligned left by default, apply this attribute to right align the dropdown menu</td>
							</tr>
							<tr>
								<td className="usage-table__prop">buttonHasDisclosureArrow</td>
								<td className="usage-table__type">bool</td>
								<td className="usage-table__default">true</td>
								<td className="usage-table__description">Display a disclosure arrow along with the label of the button. Ignore if a custom trigger is employed</td>
							</tr>
							<tr>
								<td className="usage-table__prop">buttonLabel</td>
								<td className="usage-table__type">string</td>
								<td className="usage-table__default">''</td>
								<td className="usage-table__description">Whatever action the button represents</td>
							</tr>
							<tr>
								<td className="usage-table__prop">buttonType</td>
								<td className="usage-table__type">string</td>
								<td className="usage-table__default">''</td>
								<td className="usage-table__description">See above section on button types</td>
							</tr>
							<tr>
								<td className="usage-table__prop">children</td>
								<td className="usage-table__type">element</td>
								<td className="usage-table__default">undefined</td>
								<td className="usage-table__description">A single child, cloned and used as the dropdown's trigger element</td>
							</tr>
							<tr>
								<td className="usage-table__prop">isOpen</td>
								<td className="usage-table__type">bool</td>
								<td className="usage-table__default">false</td>
								<td className="usage-table__description">The dropdown menu is controlled by user input. Use this if you need to manually toggle the open state of the dropdown menu</td>
							</tr>
							<tr>
								<td className="usage-table__prop">items</td>
								<td className="usage-table__type">array</td>
								<td className="usage-table__default">undefined</td>
								<td className="usage-table__description">The list of items to display in the menu formatted</td>
							</tr>
							<tr>
								<td className="usage-table__prop">onSelect</td>
								<td className="usage-table__type">func</td>
								<td className="usage-table__default">function()&nbsp;&#123;&#125;</td>
								<td className="usage-table__description">The function that is called on each menu item when clicked</td>
							</tr>
						</tbody>
					</Table>
				</div>
			</div>
		);
	}
});

module.exports = Buttons;
