var React = require('react');

var Button = require('elemental').Button;
var EmailInputGroup = require('elemental').EmailInputGroup;
var PasswordInputGroup = require('elemental').PasswordInputGroup;
var RadioGroup = require('elemental').RadioGroup;

var FormDragAndDrop = require('elemental').FormDragAndDrop;
var FormFile = require('elemental').FormFile;
var FormGroup = require('elemental').FormGroup;
var FormGroupRow = require('elemental').FormGroupRow;
var FormInput = require('elemental').FormInput;
var FormLabel = require('elemental').FormLabel;
var FormSelect = require('elemental').FormSelect;

var controlOptions = [
	{ label: 'Caramel',    value: 'caramel' },
	{ label: 'Chocolate',  value: 'chocolate' },
	{ label: 'Strawberry', value: 'strawberry' },
	{ label: 'Vanilla',    value: 'vanilla' }
];
var COUNTRIES = require('../data/countries');

var Forms = React.createClass({
	displayName: 'VIEW_Forms',

	getInitialState () {
		return {
			'inputEmail': '',
			'inputPassword': ''
		};
	},

	onDrop: function (files) {
		console.log('Received files: ', files);
		this.setState({
			files: files
		});
	},

	render () {
		var self = this;

		// handle form input and validation
		function updateSelect(option) {
			self.setState({inputSelect: option});
		}
		function updateRadios(option) {
			self.setState({radioGroup: option});
		}
		function updateInlineRadios(option) {
			self.setState({inlineRadioGroup: option});
		}
		function updateEmail(e) {
			self.setState({inputEmail: e.target.value});
		}
		function updatePassword(e) {
			self.setState({inputPassword: e.target.value});
		}

		// elements

		var countryOptions = COUNTRIES.map(function(country, i) {
			return { label: country.name, value: country.code }
		});

		var checkboxes = [1,2,3].map(function(item) {
			return (
				<div key={'checkbox-' + item} className="checkbox">
					<label className="checkbox-label">
						<input type="checkbox" className="checkbox-input" /> Check me out
					</label>
				</div>
			);
		});

		var radios = [1,2,3].map(function(item) {
			return (
				<div key={'radio-' + item} className="radio">
					<label className="radio-label">
						<input type="radio" name="supportedControlsRadios" className="radio-input" /> Pick me
					</label>
				</div>
			);
		});

		var options = [1,2,3,4,5].map(function(item) {
			return <option key={'option-' + item} value={item}>Option {item}</option>
		});

		return (
			<div className="demo-container container">
				<h1>Forms</h1>
				<h2 id="section-basic" className="u-padding-top-lg">Basic Example</h2>
				<form className="u-margin-bottom-lg">
					<FormGroup label="Email address" htmlFor="basic-form-input-email">
						<FormInput type="email" placeholder="Enter email" name="basic-form-input-email" />
					</FormGroup>
					<FormGroup label="Password" htmlFor="basic-form-input-password">
						<FormInput type="password" placeholder="Password" name="basic-form-input-password" />
					</FormGroup>
					<div className="form-group">
						<label className="checkbox-label">
							<input type="checkbox" className="checkbox-input" /> Check me out
						</label>
					</div>
					<Button type="default">Submit</Button>
				</form>


				<h2 id="section-horizontal" className="u-padding-top-lg">Horizontal Form</h2>
				<form className="horizontal-form u-margin-bottom-lg">
					<FormGroup label="Email address" htmlFor="horizontal-form-input-email">
						<FormInput type="email" placeholder="Enter email" name="horizontal-form-input-email" />
					</FormGroup>
					<FormGroup label="Password" htmlFor="horizontal-form-input-password">
						<FormInput type="password" placeholder="Password" name="horizontal-form-input-password" />
					</FormGroup>
					<FormGroup>
						<Button type="default" customClass="horizontal-form-submit-button">Submit</Button>
					</FormGroup>
				</form>


				<h2 id="section-inline" className="u-padding-top-lg">Inline Form</h2>
				<form className="inline-form u-margin-bottom-lg">
					<FormGroup label="Email address" htmlFor="inline-form-input-email">
						<FormInput type="email" placeholder="Enter email" name="inline-form-input-email" />
					</FormGroup>
					<FormGroup label="Password" htmlFor="inline-form-input-password">
						<FormInput type="password" placeholder="Password" name="inline-form-input-password" />
					</FormGroup>
					<div className="checkbox">
						<label className="checkbox-label">
							<input type="checkbox" className="checkbox-input" /> Check it
						</label>
					</div>
					<div className="form-group">
						<Button type="default">Submit</Button>
					</div>
				</form>


				<h2 id="section-groups" className="u-padding-top-lg">Input Groups</h2>
				<form className="u-margin-bottom-lg">
					<div className="input-group">
						<input type="text" className="form-input input-group-field" placeholder="Input group field" />
						<span className="input-group-button">
							<Button type="default">Button</Button>
						</span>
					</div>
					<div className="input-group">
						<input type="text" className="form-input input-group-field" placeholder="Input group field" />
						<span className="input-group-button">
							<Button type="primary">Button</Button>
						</span>
					</div>
				</form>

				
				<h2 id="section-controls" className="u-padding-top-lg">Supported Controls</h2>
				<form className="u-margin-bottom-lg">
					<FormGroup label="Input" htmlFor="supported-controls-input">
						<FormInput placeholder="Input" name="supported-controls-input" />
					</FormGroup>
					<FormGroup label="Large Input" htmlFor="supported-controls-input-lg">
						<FormInput placeholder="Large" name="supported-controls-input-lg" size="lg" />
					</FormGroup>
					<FormGroup label="Small Input" htmlFor="supported-controls-input-sm">
						<FormInput placeholder="Small" name="supported-controls-input-sm" size="sm" />
					</FormGroup>
					<FormGroup label="Disabled Input" htmlFor="supported-controls-input-disabled">
						<FormInput placeholder="Disabled" name="supported-controls-input-disabled" disabled />
					</FormGroup>
					<FormGroup label="Textarea" htmlFor="supported-controls-textarea">
						<FormInput placeholder="Textarea" name="supported-controls-textarea" multiline />
					</FormGroup>
					<FormGroup label="Select" htmlFor="supported-controls-select">
						<FormSelect options={controlOptions} firstOption="Select" />
					</FormGroup>
					<FormSelect label="Disabled Select" options={controlOptions} htmlFor="supported-conrols-select-disabled" firstOption="Disabled Select" disabled />
					<div className="form-group">
						<div className="form-label">Checkboxes</div>
						{checkboxes}
					</div>
					<div className="form-group">
						<div className="form-label">Radios</div>
						{radios}
					</div>
					<div className="form-group">
						<div className="form-label">Inline Checkboxes</div>
						<div className="inline-controls">
							{checkboxes}
						</div>
					</div>
					<div className="form-group">
						<div className="form-label">Inline Radios</div>
						<div className="inline-controls">
							{radios}
						</div>
					</div>
					<div className="form-group">
						<label className="form-label">Help Block</label>
						<div className="form-help">A block of help text that may extend beyond one line. Use &lt;span&gt; or &lt;div&gt; to control display.</div>
					</div>
				</form>
				
				<h2 id="section-validation" className="u-padding-top-lg">Validation</h2>
				<form className="u-margin-bottom-xl">
					<RadioGroup label="Radios" value={this.state.inlineRadioGroup} onChange={updateInlineRadios} options={controlOptions} name="inlineRadioGroup" required inline />
					<FormSelect   label="Select"   value={this.state.inputSelect}   onChange={updateSelect} options={controlOptions} htmlFor="inputSelect" required prependEmptyOption />
					<EmailInputGroup    label="Email"    value={this.state.inputEmail}    onChange={updateEmail}    required />
					<PasswordInputGroup label="Password" value={this.state.inputPassword} onChange={updatePassword} required />
				</form>

				<h2 id="section-complex" className="u-padding-top-lg">Complex Forms</h2>
				<form className="u-margin-bottom-lg">
					<FormGroupRow>
						<FormGroup label="Credit Card Number" htmlFor="credit-card-number">
							<FormInput pattern="[0-9]*" placeholder="Card Number" name="credit-card-number" />
						</FormGroup>
						<FormGroup width="one-quarter" label="Expiration" htmlFor="credit-card-expiration">
							<FormInput placeholder="MM/YYYY" name="credit-card-expiration" />
						</FormGroup>
						<FormGroup width="one-quarter" label="Security Code (CCV)" htmlFor="credit-card-security">
							<FormInput pattern="[0-9]*" placeholder="123" name="credit-card-security" />
						</FormGroup>
					</FormGroupRow>
					<FormGroupRow>
						<FormGroup width="one-half" label="First Name" htmlFor="first-name">
							<FormInput placeholder="First Name" name="first-name" />
						</FormGroup>
						<FormGroup width="one-half" label="Last Name" htmlFor="last-name">
							<FormInput placeholder="Last Name" name="last-name" />
						</FormGroup>
					</FormGroupRow>
					<FormGroup label="Billing Address" htmlFor="address-street1">
						<FormInput placeholder="Address Line 1" name="address-street1" />
					</FormGroup>
					<FormGroup>
						<FormInput placeholder="Address Line 2" name="address-street2" />
					</FormGroup>
					<FormGroupRow>
						<FormGroup width="two-thirds">
							<FormInput placeholder="City" name="city" />
						</FormGroup>
						<FormGroup width="one-third">
							<FormInput placeholder="State" name="state" />
						</FormGroup>
					</FormGroupRow>
					<FormGroupRow>
						<FormGroup width="one-third">
							<FormInput width="one-third" placeholder="Post Code" name="city" />
						</FormGroup>
						<FormGroup>
							<FormSelect options={countryOptions} firstOption="Country" />
						</FormGroup>
					</FormGroupRow>
				</form>

				<h2 id="section-upload" className="u-padding-top-lg">File Upload</h2>
				<form className="horizontal-form u-margin-bottom-lg">
					<div className="form-group">
						<FormLabel verticalAlign="top">Image</FormLabel>
						<FormFile buttonLabelInitial="Upload Image" buttonLabelChange="Change Image" accept="image/jpg, image/gif, image/png" />
					</div>
					<div className="form-group">
						<FormLabel verticalAlign="top">Images</FormLabel>
						<FormDragAndDrop files={this.state.files} onDrop={this.onDrop} />
					</div>
				</form>
			</div>
		);
	}
});

module.exports = Forms;
