var React = require('react');

var Button = require('elemental').Button;
var EmailInputGroup = require('elemental').EmailInputGroup;
var FileInput = require('elemental').FileInput;
var InputGroup = require('elemental').InputGroup;
var PasswordInputGroup = require('elemental').PasswordInputGroup;
var RadioGroup = require('elemental').RadioGroup;
var SelectInputGroup = require('elemental').SelectInputGroup;

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
					<InputGroup type="email" label="Email address"  placeholder="Enter email" name="basic-form-input-email" />
					<InputGroup type="password" label="Password"  placeholder="Password" name="basic-form-input-password" />
					<div className="form-group">
						<label className="checkbox-label">
							<input type="checkbox" className="checkbox-input" /> Check me out
						</label>
					</div>
					<button type="button" className="btn btn-default">Submit</button>
				</form>


				<h2 id="section-horizontal" className="u-padding-top-lg">Horizontal Form</h2>
				<form className="horizontal-form u-margin-bottom-lg">
					<InputGroup type="email" label="Email address"  placeholder="Enter email" name="horizontal-form-input-email" />
					<InputGroup type="password" label="Password"  placeholder="Password" name="horizontal-form-input-password" />
					<div className="form-group">
						<div className="form-label" />
						<button type="button" className="btn btn-default">Submit</button>
					</div>
				</form>


				<h2 id="section-inline" className="u-padding-top-lg">Inline Form</h2>
				<form className="inline-form u-margin-bottom-lg">
					<InputGroup label="Email" type="email" placeholder="Enter email" name="inline-form-input-email" />
					<InputGroup label="Password" type="password" placeholder="Password" name="inline-form-input-password" />
					<div className="checkbox">
						<label className="checkbox-label">
							<input type="checkbox" className="checkbox-input" /> Check it
						</label>
					</div>
					<div className="form-group">
						<button type="button" className="btn btn-default">Submit</button>
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
					<InputGroup label="Input"  placeholder="Input" name="supported-controls-input" />
					<InputGroup label="Large Input"  placeholder="Large" name="supported-controls-input-lg" inputClass="form-input-lg" />
					<InputGroup label="Small Input"  placeholder="Small" name="supported-controls-input-sm" inputClass="form-input-sm" />
					<InputGroup label="Disabled Input"  placeholder="Disabled" name="supported-controls-input-disabled" disabled />
					<InputGroup label="Textarea"  placeholder="Textarea" name="supported-controls-textarea" multiline />
					<SelectInputGroup label="Select" options={controlOptions} htmlFor="supported-conrols-select" firstOption="Select" />
					<SelectInputGroup label="Disabled Select" options={controlOptions} htmlFor="supported-conrols-select-disabled" firstOption="Disabled Select" disabled />
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
					<SelectInputGroup   label="Select"   value={this.state.inputSelect}   onChange={updateSelect} options={controlOptions} htmlFor="inputSelect" required prependEmptyOption />
					<EmailInputGroup    label="Email"    value={this.state.inputEmail}    onChange={updateEmail}    required />
					<PasswordInputGroup label="Password" value={this.state.inputPassword} onChange={updatePassword} required />
				</form>

				<h2 id="section-complex" className="u-padding-top-lg">Complex Forms</h2>
				<form className="u-margin-bottom-lg">
					<div className="form-groups">
						<InputGroup type="number" label="Credit Card Number"  placeholder="Card Number" name="credit-card-number" />
						<InputGroup width="one-quarter" type="text"   label="Expiration"          placeholder="MM/YYYY"     name="credit-card-expiration" />
						<InputGroup width="one-quarter" type="number" label="Security Code (CCV)" placeholder="123"         name="credit-card-security" />
					</div>
					<div className="form-groups">
						<InputGroup width="one-half" label="First Name" placeholder="First Name" name="first-name" />
						<InputGroup width="one-half" label="Last Name"  placeholder="Last Name"  name="last-name" />
					</div>
					<InputGroup label="Billing Address" placeholder="Address Line 1" name="address-street1" />
					<InputGroup placeholder="Address Line 2" name="address-street2" />
					<div className="form-groups">
						<InputGroup width="two-thirds" placeholder="City"  name="city" />
						<InputGroup width="one-third"  placeholder="State" name="state" />
					</div>
					<div className="form-groups">
						<InputGroup width="one-third"  placeholder="Post Code"  name="city" />
						<SelectInputGroup options={countryOptions} firstOption="Country" />
					</div>
				</form>

				<h2 id="section-upload" className="u-padding-top-lg">File Upload</h2>
				<form className="horizontal-form u-margin-bottom-lg">
					<div className="form-group">
						<div className="form-label">Image</div>
						<div className="form-control">
							<FileInput buttonLabel="Upload Image" />
						</div>
					</div>
				</form>
			</div>
		);
	}
});

module.exports = Forms;
