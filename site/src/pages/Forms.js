/* eslint no-alert: 0 */

var React = require('react');

var {
	Button,
	Checkbox,
	EmailInputGroup,
	FileDragAndDrop,
	FileUpload,
	FormField,
	FormIconField,
	FormInput,
	FormLabel,
	FormNote,
	FormRow,
	FormSelect,
	InputGroup,
	PasswordInputGroup,
	Radio,
	RadioGroup
} = require('elemental');

var ExampleSource = require('../components/ExampleSource');


const controlOptions = [
	{ label: 'Caramel',    value: 'caramel' },
	{ label: 'Chocolate',  value: 'chocolate' },
	{ label: 'Strawberry', value: 'strawberry' },
	{ label: 'Vanilla',    value: 'vanilla' }
];
const COUNTRIES = require('../data/countries');
const COLOR_VARIANTS = [
	{ label: 'Default', icon: 'star', value: 'default' },
	{ label: 'Primary', icon: 'info', value: 'primary' },
	{ label: 'Success', icon: 'check', value: 'success' },
	{ label: 'Warning', icon: 'alert', value: 'warning' },
	{ label: 'Danger',  icon: 'stop', value: 'danger' }
];

var Forms = React.createClass({
	displayName: 'VIEW_Forms',

	getInitialState () {
		return {
			'inputEmail': '',
			'inputPassword': ''
		};
	},

	onDrop (files) {
		var outputFileInfo = files.map(function(file) {
			return '"' + file.name + '" (' + Math.round(file.size / 1024) + 'Kb)';
		});
		alert('Received files: \n' + outputFileInfo.join('\n'));
		this.setState({
			files: files
		});
	},
	handleSearch () {
		var self = this;
		self.setState({ searching: true });

		setTimeout(function() {
			self.setState({ searching: false });
		}, 1000);
	},

	render () {
		var self = this;

		// handle form input and validation
		function updateSelect(option) {
			self.setState({ inputSelect: option });
		}
		function updateInlineRadios(option) {
			self.setState({ inlineRadioGroup: option });
		}
		function updateEmail(e) {
			self.setState({ inputEmail: e.target.value });
		}
		function updatePassword(e) {
			self.setState({ inputPassword: e.target.value });
		}

		// elements
		var countryOptions = COUNTRIES.map(function(country) {
			return { label: country.name, value: country.code };
		});

		var checkboxes = [1, 2, 3].map(function(item) {
			return <Checkbox key={'checkbox_' + item} name={'checkbox_' + item} label="Check me out" />;
		});

		var radios = [1, 2, 3].map(function(item) {
			return <Radio key={'radio_' + item} name="supportedControlsRadios" label="Pick me" />;
		});

		// Icon Loops

		var iconContextVariantsColor = COLOR_VARIANTS.map(function(color) {
			return (
				<FormIconField key={color.value} width="one-fifth" iconPosition="left" iconKey={color.icon} iconColor={color.value}>
					<FormInput placeholder={color.label} name={'icon-form-context-variants-color' + color.value} />
				</FormIconField>
			);
		});

		var iconContextVariantsFill = COLOR_VARIANTS.map(function(color) {
			return (
				<FormIconField key={color.value} width="one-fifth" iconPosition="left" iconKey={color.icon} iconFill={color.value}>
					<FormInput placeholder={color.label} name={'icon-form-context-variants-color' + color.value} />
				</FormIconField>
			);
		});

		return (
			<div className="demo-container container">
				<h1>Forms</h1>


				<h2>Basic Example</h2>
				<p>Individual form controls automatically receive some global styling. All textual <code className="inline-code">{`<FormInput>`}</code>, and <code className="inline-code">{`<FormSelect>`}</code> elements with are set to <code className="inline-code">width: 100%;</code> by default. Wrap controls in <code className="inline-code">{`<FormField>`}</code> for optimum spacing.</p>
				<div className="code-example">
					<div className="code-example__example">
						<form>
							<FormField label="Email address" htmlFor="basic-form-input-email">
								<FormInput type="email" placeholder="Enter email" name="basic-form-input-email" />
							</FormField>
							<FormField label="Password" htmlFor="basic-form-input-password">
								<FormInput type="password" placeholder="Password" name="basic-form-input-password" />
							</FormField>
							<FormField>
								<Checkbox label="Check it" />
							</FormField>
							<Button type="default">Submit</Button>
						</form>
					</div>
					<ExampleSource>
						{`
							<form>
								<FormField label="Email address" htmlFor="basic-form-input-email">
									<FormInput type="email" placeholder="Enter email" name="basic-form-input-email" />
								</FormField>
								<FormField label="Password" htmlFor="basic-form-input-password">
									<FormInput type="password" placeholder="Password" name="basic-form-input-password" />
								</FormField>
								<FormField>
									<Checkbox label="Check it" />
								</FormField>
								<Button type="default">Submit</Button>
							</form>
						`}
					</ExampleSource>
				</div>



				<h2>Horizontal Form</h2>
				<p>Adding the class <code className="inline-code">.form-horizontal</code> to your wrapper (which doesn't have to be a <code className="inline-code">{`<form>`}</code> tag) changes the <code className="inline-code">FormField</code> component to behave like a row. The label width can be updated from inside the LESS variables file where it's defined as <code className="inline-code">@form-label-width</code>. This only applies to forms within viewports that are at least 768px wide.</p>
				<div className="code-example">
					<div className="code-example__example">
						<form className="horizontal-form">
							<FormField label="Email address" htmlFor="horizontal-form-input-email">
								<FormInput type="email" placeholder="Enter email" name="horizontal-form-input-email" />
							</FormField>
							<FormField label="Password" htmlFor="horizontal-form-input-password">
								<FormInput type="password" placeholder="Password" name="horizontal-form-input-password" />
							</FormField>
							<FormField offsetAbsentLabel>
								<Checkbox label="Check it" />
							</FormField>
							<FormField offsetAbsentLabel>
								<Button type="default">Submit</Button>
							</FormField>
						</form>
					</div>
					<ExampleSource>
						{`
							<form className="horizontal-form">
								<FormField label="Email address" htmlFor="horizontal-form-input-email">
									<FormInput type="email" placeholder="Enter email" name="horizontal-form-input-email" />
								</FormField>
								<FormField label="Password" htmlFor="horizontal-form-input-password">
									<FormInput type="password" placeholder="Password" name="horizontal-form-input-password" />
								</FormField>
								<FormField offsetAbsentLabel>
									<Checkbox label="Check it" />
								</FormField>
								<FormField offsetAbsentLabel>
									<Button type="default">Submit</Button>
								</FormField>
							</form>
						`}
					</ExampleSource>
				</div>



				<h2>Inline Form</h2>
				<p>Adding the class <code className="inline-code">.form-inline</code> to your wrapper (which doesn't have to be a <code className="inline-code">{`<form>`}</code> tag)  for left-aligned and inline-block controls. This only applies to forms within viewports that are at least 768px wide.</p>
				<p>Note: you should always use labels to improve accessibility - they are only visible to screen readers. Form labels within viewports that are below 768px wide will be rendered regularly to improve usability.</p>
				<div className="code-example">
					<div className="code-example__example">
						<form className="inline-form">
							<FormField label="Email address" htmlFor="inline-form-input-email">
								<FormInput type="email" placeholder="Enter email" name="inline-form-input-email" />
							</FormField>
							<FormField label="Password" htmlFor="inline-form-input-password">
								<FormInput type="password" placeholder="Password" name="inline-form-input-password" />
							</FormField>
							<FormField>
								<Checkbox label="Check it" />
							</FormField>
							<FormField>
								<Button type="default">Submit</Button>
							</FormField>
						</form>
					</div>
					<ExampleSource>
						{`
							<form className="inline-form">
								<FormField label="Email address" htmlFor="inline-form-input-email">
									<FormInput type="email" placeholder="Enter email" name="inline-form-input-email" />
								</FormField>
								<FormField label="Password" htmlFor="inline-form-input-password">
									<FormInput type="password" placeholder="Password" name="inline-form-input-password" />
								</FormField>
								<FormField>
									<Checkbox label="Check it" />
								</FormField>
								<FormField>
									<Button type="default">Submit</Button>
								</FormField>
							</form>
						`}
					</ExampleSource>
				</div>



				<h2>Input Groups</h2>
				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Contiguous form elements</div>
						<InputGroup contiguous>
							<InputGroup.Section grow>
								<FormInput type="text" placeholder="Input group field" />
							</InputGroup.Section>
							<InputGroup.Section>
								<Button>Button</Button>
							</InputGroup.Section>
						</InputGroup>
						<InputGroup contiguous>
							<InputGroup.Section type="primary">
								<Button><span className="octicon octicon-pencil" /></Button>
							</InputGroup.Section>
							<InputGroup.Section grow>
								<FormInput type="text" placeholder="Input group field" />
							</InputGroup.Section>
						</InputGroup>
					</div>
					<ExampleSource>
						{`
							<InputGroup contiguous>
								<InputGroup.Section grow>
									<FormInput type="text" placeholder="Input group field" />
								</InputGroup.Section>
								<InputGroup.Section>
									<Button>Button</Button>
								</InputGroup.Section>
							</InputGroup>
							<InputGroup contiguous>
								<InputGroup.Section type="primary">
									<Button><span className="octicon octicon-pencil" /></Button>
								</InputGroup.Section>
								<InputGroup.Section grow>
									<FormInput type="text" placeholder="Input group field" />
								</InputGroup.Section>
							</InputGroup>
						`}
					</ExampleSource>
				</div>

				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Separate when required</div>
						<InputGroup>
							<InputGroup.Section grow>
								<FormInput type="text" placeholder="Input group field" />
							</InputGroup.Section>
							<InputGroup.Section>
								<Button type="primary">Button</Button>
							</InputGroup.Section>
						</InputGroup>
						<InputGroup>
							<InputGroup.Section>
								<Button type="primary">
									<span className="octicon octicon-pencil" />
								</Button>
							</InputGroup.Section>
							<InputGroup.Section grow>
								<FormInput type="text" placeholder="Input group field" />
							</InputGroup.Section>
						</InputGroup>
					</div>
					<ExampleSource>
						{`
							<InputGroup>
								<InputGroup.Section grow>
									<FormInput type="text" placeholder="Input group field" />
								</InputGroup.Section>
								<InputGroup.Section>
									<Button type="primary">Button</Button>
								</InputGroup.Section>
							</InputGroup>
							<InputGroup>
								<InputGroup.Section>
									<Button type="primary">
										<span className="octicon octicon-pencil" />
									</Button>
								</InputGroup.Section>
								<InputGroup.Section grow>
									<FormInput type="text" placeholder="Input group field" />
								</InputGroup.Section>
							</InputGroup>
						`}
					</ExampleSource>
				</div>

				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">More sophisticated formations</div>
							<InputGroup contiguous>
								<InputGroup.Section>
									<Button>Alpha</Button>
								</InputGroup.Section>
								<InputGroup.Section grow>
									<FormInput type="text" placeholder="Input group field" />
								</InputGroup.Section>
								<InputGroup.Section>
									<Button type="primary">Omega</Button>
								</InputGroup.Section>
							</InputGroup>
							<InputGroup>
								<InputGroup.Section grow>
									<FormInput type="text" placeholder="Input group field" />
								</InputGroup.Section>
								<InputGroup.Section>
									<Button type="primary">Primary</Button>
								</InputGroup.Section>
								<InputGroup.Section>
									<Button>Default</Button>
								</InputGroup.Section>
							</InputGroup>
					</div>
					<ExampleSource>
						{`
							<InputGroup contiguous>
								<InputGroup.Section>
									<Button>Alpha</Button>
								</InputGroup.Section>
								<InputGroup.Section grow>
									<FormInput type="text" placeholder="Input group field" />
								</InputGroup.Section>
								<InputGroup.Section>
									<Button type="primary">Omega</Button>
								</InputGroup.Section>
							</InputGroup>
							<InputGroup>
								<InputGroup.Section grow>
									<FormInput type="text" placeholder="Input group field" />
								</InputGroup.Section>
								<InputGroup.Section>
									<Button type="primary">Primary</Button>
								</InputGroup.Section>
								<InputGroup.Section>
									<Button>Default</Button>
								</InputGroup.Section>
							</InputGroup>
						`}
					</ExampleSource>
				</div>



				<h2>Sizes</h2>
				<div className="code-example">
					<div className="code-example__example">
						<FormField label="Input" htmlFor="supported-controls-input">
							<FormInput placeholder="Input" name="supported-controls-input" />
						</FormField>
						<FormField label="Large Input" htmlFor="supported-controls-input-lg">
							<FormInput placeholder="Large" name="supported-controls-input-lg" size="lg" />
						</FormField>
						<FormField label="Small Input" htmlFor="supported-controls-input-sm">
							<FormInput placeholder="Small" name="supported-controls-input-sm" size="sm" />
						</FormField>
					</div>
					<ExampleSource>
						{`
							<FormField label="Input" htmlFor="supported-controls-input">
								<FormInput placeholder="Input" name="supported-controls-input" />
							</FormField>
							<FormField label="Large Input" htmlFor="supported-controls-input-lg">
								<FormInput placeholder="Large" name="supported-controls-input-lg" size="lg" />
							</FormField>
							<FormField label="Small Input" htmlFor="supported-controls-input-sm">
								<FormInput placeholder="Small" name="supported-controls-input-sm" size="sm" />
							</FormField>
						`}
					</ExampleSource>
				</div>



				<h2>Supported Controls</h2>
				<div className="code-example">
					<div className="code-example__example">
						<FormInput placeholder="Input" />
					</div>
					<ExampleSource>
						{`<FormInput placeholder="Input" />`}
					</ExampleSource>
				</div>
				<div className="code-example">
					<div className="code-example__example">
						<FormInput placeholder="Textarea" multiline />
					</div>
					<ExampleSource>
						{`<FormInput placeholder="Textarea" multiline />`}
					</ExampleSource>
				</div>
				<div className="code-example">
					<div className="code-example__example">
						<FormSelect options={controlOptions} firstOption="Select" onChange={updateSelect} />
					</div>
					<ExampleSource>
						{`<FormSelect options={[...]} firstOption="Select" onChange={this.handleSelect} />`}
					</ExampleSource>
				</div>
				<div className="code-example">
					<div className="code-example__example">
						<FormField label="Checkboxes">
							<Checkbox label="Check me out" />
							<Checkbox label="Check me out" />
						</FormField>
						<FormField label="Radios">
							<Radio name="default_radios" label="Pick me" />
							<Radio name="default_radios" label="Pick me" />
						</FormField>
						<FormField label="Inline Checkboxes">
							<div className="inline-controls">
								<Checkbox label="Check me out" />
								<Checkbox label="Check me out" />
							</div>
						</FormField>
						<FormField label="Inline Radios">
							<div className="inline-controls">
								<Radio name="inline_radios" label="Pick me" />
								<Radio name="inline_radios" label="Pick me" />
							</div>
						</FormField>
					</div>
					<ExampleSource>
						{`
							<FormField label="Checkboxes">
								<Checkbox label="Check me out" />
								<Checkbox label="I'm disabled" disabled />
							</FormField>
							<FormField label="Radios">
								<Radio name="default_radios" label="Pick me" />
								<Radio name="default_radios" label="Pick me" />
							</FormField>
							<FormField label="Inline Checkboxes">
								<div className="inline-controls">
									<Checkbox label="Check me out" />
									<Checkbox label="I'm disabled" disabled />
								</div>
							</FormField>
							<FormField label="Inline Radios">
								<div className="inline-controls">
									<Radio name="inline_radios" label="Pick me" />
									<Radio name="inline_radios" label="Pick me" />
								</div>
							</FormField>
						`}
					</ExampleSource>
				</div>


				<h2>Disabled State</h2>
				<div className="code-example">
					<div className="code-example__example">
						<FormField label="Input" htmlFor="supported-controls-input-disabled">
							<FormInput placeholder="Input" name="supported-controls-input-disabled" disabled />
						</FormField>
						<FormField label="Textarea" htmlFor="supported-controls-textarea">
							<FormInput placeholder="Textarea" name="supported-controls-textarea-disabled" disabled multiline />
						</FormField>
						<FormSelect label="Select" options={controlOptions} onChange={updateSelect} htmlFor="supported-conrols-select-disabled" firstOption="Select" disabled />
						<FormField label="Checkboxes">
							<Checkbox label="Check me out" disabled />
						</FormField>
						<FormField label="Radios">
							<Radio name="default_radios" label="Pick me" disabled />
						</FormField>
					</div>
					<ExampleSource>
						{`
							<FormField label="Input" htmlFor="supported-controls-input-disabled">
								<FormInput placeholder="Input" name="supported-controls-input-disabled" disabled />
							</FormField>
							<FormField label="Textarea" htmlFor="supported-controls-textarea">
								<FormInput placeholder="Textarea" name="supported-controls-textarea-disabled" disabled multiline />
							</FormField>
							<FormSelect label="Select" options={controlOptions} onChange={updateSelect} htmlFor="supported-conrols-select-disabled" firstOption="Select" disabled />
							<FormField label="Checkboxes">
								<Checkbox label="Check me out" disabled />
							</FormField>
							<FormField label="Radios">
								<Radio name="default_radios" label="Pick me" disabled />
							</FormField>
						`}
					</ExampleSource>
				</div>


				<h2>Notes</h2>
				<div className="code-example">
					<div className="code-example__example">
						<FormField label="Input with note">
							<FormInput />
							<FormNote>A note to help the user understand its associated field; may extend beyond one line.</FormNote>
						</FormField>
					</div>
					<ExampleSource>
						{`
							<FormField label="Input with note">
								<FormInput />
								<FormNote>A note to help the user understand its associated field; may extend beyond one line.</FormNote>
							</FormField>
						`}
					</ExampleSource>
				</div>


				<h2>Complex Forms</h2>
				<p>Wrap any group of <code className="inline-code">{`<FormField>`}</code> in the <code className="inline-code">{`<FormRow>`}</code> component to easily set desired widths.</p>
				<div className="code-example">
					<div className="code-example__example">
						<FormRow>
							<FormField width="one-half" label="Credit Card Number" htmlFor="credit-card-number">
								<FormInput pattern="[0-9]*" placeholder="Card Number" name="credit-card-number" />
							</FormField>
							<FormField width="one-quarter" label="Expiration" htmlFor="credit-card-expiration">
								<FormInput placeholder="MM/YYYY" name="credit-card-expiration" />
							</FormField>
							<FormField width="one-quarter" label="Security Code (CCV)" htmlFor="credit-card-security">
								<FormInput pattern="[0-9]*" placeholder="123" name="credit-card-security" />
							</FormField>
						</FormRow>
						<FormRow>
							<FormField width="one-half" label="First Name" htmlFor="first-name">
								<FormInput placeholder="First Name" name="first-name" />
							</FormField>
							<FormField width="one-half" label="Last Name" htmlFor="last-name">
								<FormInput placeholder="Last Name" name="last-name" />
							</FormField>
						</FormRow>
						<FormField label="Billing Address" htmlFor="address-street1">
							<FormInput placeholder="Address Line 1" name="address-street1" />
						</FormField>
						<FormField>
							<FormInput placeholder="Address Line 2" name="address-street2" />
						</FormField>
						<FormRow>
							<FormField width="two-thirds">
								<FormInput placeholder="City" name="city" />
							</FormField>
							<FormField width="one-third">
								<FormInput placeholder="State" name="state" />
							</FormField>
							<FormField width="one-third">
								<FormInput width="one-third" placeholder="Post Code" name="city" />
							</FormField>
							<FormField width="two-thirds">
								<FormSelect options={countryOptions} firstOption="Country" onChange={updateSelect} />
							</FormField>
						</FormRow>
					</div>
					<ExampleSource>
						{`
							<FormRow>
								<FormField width="one-half" label="Credit Card Number" htmlFor="credit-card-number">
									<FormInput pattern="[0-9]*" placeholder="Card Number" name="credit-card-number" />
								</FormField>
								<FormField width="one-quarter" label="Expiration" htmlFor="credit-card-expiration">
									<FormInput placeholder="MM/YYYY" name="credit-card-expiration" />
								</FormField>
								<FormField width="one-quarter" label="Security Code (CCV)" htmlFor="credit-card-security">
									<FormInput pattern="[0-9]*" placeholder="123" name="credit-card-security" />
								</FormField>
							</FormRow>
							<FormRow>
								<FormField width="one-half" label="First Name" htmlFor="first-name">
									<FormInput placeholder="First Name" name="first-name" />
								</FormField>
								<FormField width="one-half" label="Last Name" htmlFor="last-name">
									<FormInput placeholder="Last Name" name="last-name" />
								</FormField>
							</FormRow>
							<FormField label="Billing Address" htmlFor="address-street1">
								<FormInput placeholder="Address Line 1" name="address-street1" />
							</FormField>
							<FormField>
								<FormInput placeholder="Address Line 2" name="address-street2" />
							</FormField>
							<FormRow>
								<FormField width="two-thirds">
									<FormInput placeholder="City" name="city" />
								</FormField>
								<FormField width="one-third">
									<FormInput placeholder="State" name="state" />
								</FormField>
								<FormField width="one-third">
									<FormInput width="one-third" placeholder="Post Code" name="city" />
								</FormField>
								<FormField width="two-thirds">
									<FormSelect options={countryOptions} firstOption="Country" onChange={updateSelect} />
								</FormField>
							</FormRow>
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
								<td>label</td>
								<td>string</td>
								<td>''</td>
								<td className="usage-table__description">

								</td>
							</tr>
							<tr>
								<td>offsetAbsentLabel</td>
								<td>bool</td>
								<td>false</td>
								<td className="usage-table__description">
								</td>
							</tr>
							<tr>
								<td>width</td>
								<td>string</td>
								<td>''</td>
								<td className="usage-table__description">
									Declare a width for your field; must be used inside a <code className="inline-code">{`<FormRow>`}</code> component. Possible options:
									<br />
									<code className="inline-code inline-code--list-item">one-half</code> <code className="inline-code inline-code--list-item">two-quarters</code> <code className="inline-code inline-code--list-item">three-sixths</code> <code className="inline-code inline-code--list-item">one-quarter</code> <code className="inline-code inline-code--list-item">three-quarters</code> <code className="inline-code inline-code--list-item">one-third</code> <code className="inline-code inline-code--list-item">two-sixths</code> <code className="inline-code inline-code--list-item">two-thirds</code> <code className="inline-code inline-code--list-item">four-sixths</code> <code className="inline-code inline-code--list-item">one-fifth</code> <code className="inline-code inline-code--list-item">two-fifths</code> <code className="inline-code inline-code--list-item">three-fifths</code> <code className="inline-code inline-code--list-item">four-fifths</code> <code className="inline-code inline-code--list-item">one-sixth</code> <code className="inline-code inline-code--list-item">five-sixths</code>
								</td>
							</tr>
						</tbody>
					</Table>
				</div>


				<h2>Icons</h2>
				<p className="lead">Elemental uses the wonderful <a href="https://octicons.github.com/" target="_blank">Octicons Suite from GitHub</a></p>
				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Alignment</div>
						<FormRow>
							<FormIconField width="one-half" iconPosition="left" iconColor="default" iconKey="star">
								<FormInput placeholder="Left Aligned" name="icon-alignment-left" />
							</FormIconField>
							<FormIconField width="one-half" iconPosition="right" iconColor="default" iconKey="star">
								<FormInput placeholder="Right Aligned" name="icon-alignment-right" />
							</FormIconField>
						</FormRow>
					</div>
					<ExampleSource>
						{`
							<FormRow>
								<FormIconField width="one-half" iconPosition="left" iconColor="default" iconKey="star">
									<FormInput placeholder="Left Aligned" name="icon-alignment-left" />
								</FormIconField>
								<FormIconField width="one-half" iconPosition="right" iconColor="default" iconKey="star">
									<FormInput placeholder="Right Aligned" name="icon-alignment-right" />
								</FormIconField>
							</FormRow>
						`}
					</ExampleSource>
				</div>
				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Context Variants: Color</div>
						<FormRow>
							{iconContextVariantsColor}
						</FormRow>
					</div>
					<ExampleSource>
						{`
							<FormRow>
								<FormIconField width="one-fifth" iconPosition="left" iconKey="star" iconColor="default">
									<FormInput placeholder="Default" />
								</FormIconField>
								<FormIconField width="one-fifth" iconPosition="left" iconKey="info" iconColor="primary">
									<FormInput placeholder="Primary" />
								</FormIconField>
								<FormIconField width="one-fifth" iconPosition="left" iconKey="check" iconColor="success">
									<FormInput placeholder="Success" />
								</FormIconField>
								<FormIconField width="one-fifth" iconPosition="left" iconKey="alert" iconColor="warning">
									<FormInput placeholder="Warning" />
								</FormIconField>
								<FormIconField width="one-fifth" iconPosition="left" iconKey="stop" iconColor="danger">
									<FormInput placeholder="Danger" />
								</FormIconField>
							</FormRow>
						`}
					</ExampleSource>
				</div>
				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Context Variants: Fill</div>
						<FormRow>
							{iconContextVariantsFill}
						</FormRow>
					</div>
					<ExampleSource>
						{`
							<FormRow>
								<FormIconField width="one-fifth" iconPosition="left" iconKey="star" iconFill="default">
									<FormInput placeholder="Default" />
								</FormIconField>
								<FormIconField width="one-fifth" iconPosition="left" iconKey="info" iconFill="primary">
									<FormInput placeholder="Primary" />
								</FormIconField>
								<FormIconField width="one-fifth" iconPosition="left" iconKey="check" iconFill="success">
									<FormInput placeholder="Success" />
								</FormIconField>
								<FormIconField width="one-fifth" iconPosition="left" iconKey="alert" iconFill="warning">
									<FormInput placeholder="Warning" />
								</FormIconField>
								<FormIconField width="one-fifth" iconPosition="left" iconKey="stop" iconFill="danger">
									<FormInput placeholder="Danger" />
								</FormIconField>
							</FormRow>
						`}
					</ExampleSource>
				</div>
				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Loading Indicator</div>
						<FormIconField iconPosition="right" iconKey="search" iconColor="default" iconIsLoading={this.state.searching}>
							<FormInput onChange={this.handleSearch} type="search" placeholder="Search..." name="icon-form-search" />
						</FormIconField>
					</div>
					<ExampleSource>
						{`
							<FormIconField iconPosition="right" iconKey="search" iconColor="default" iconIsLoading={this.state.searching}>
								<FormInput onChange={this.handleSearch} type="search" placeholder="Search..." name="icon-form-search" />
							</FormIconField>
						`}
					</ExampleSource>
				</div>


				<h2>Validation</h2>
				<form>
					<RadioGroup         label="Radios"   value={this.state.inlineRadioGroup} onChange={updateInlineRadios} options={controlOptions} name="inlineRadioGroup" required inline />
					<FormSelect         label="Select"   value={this.state.inputSelect}      onChange={updateSelect} options={controlOptions} htmlFor="inputSelect" required prependEmptyOption />
					<EmailInputGroup    label="Email"    value={this.state.inputEmail}       onChange={updateEmail}    required />
					<PasswordInputGroup label="Password" value={this.state.inputPassword}    onChange={updatePassword} required />
				</form>


				<h2>File Upload</h2>
				<form className="horizontal-form">
					<div className="form-field">
						<FormLabel verticalAlign="top">Image</FormLabel>
						<FileUpload buttonLabelInitial="Upload Image" buttonLabelChange="Change Image" accept="image/jpg, image/gif, image/png" />
					</div>
					<div className="form-field">
						<FormLabel verticalAlign="top">Images</FormLabel>
						<FileDragAndDrop files={this.state.files} onDrop={this.onDrop} />
					</div>
				</form>
			</div>
		);
	}
});

module.exports = Forms;
