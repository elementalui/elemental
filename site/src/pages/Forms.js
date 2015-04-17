var React = require('react');

var InputGroup = require('elemental').InputGroup;
var EmailInputGroup = require('elemental').EmailInputGroup;
var PasswordInputGroup = require('elemental').PasswordInputGroup;
var SelectInputGroup = require('elemental').SelectInputGroup;
var RadioGroup = require('elemental').RadioGroup;

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

		var countryOptions = COUNTRIES.map(function(country, i) {
			return { label: country.name, value: country.code }
		});

		return (
			<div className="demo-container container">
				<h1>Forms</h1>
				<h2 id="section-basic" className="u-padding-top-lg">Basic Example</h2>
				<form className="u-margin-bottom-lg">
					<div className="form-group">
						<label className="form-label" htmlFor="basicFormInputEmail">Email address</label>
						<input className="form-input" placeholder="Enter email" id="basicFormInputEmail" />
					</div>
					<div className="form-group">
						<label className="form-label" htmlFor="basicFormInputPassword">Password</label>
						<input className="form-input" placeholder="Password" id="basicFormInputPassword" />
					</div>
					<div className="form-group">
						<label className="checkbox-label">
							<input type="checkbox" className="checkbox-input" /> Check me out
						</label>
					</div>
					<button type="button" className="btn btn-default">Submit</button>
				</form>


				<h2 id="section-horizontal" className="u-padding-top-lg">Horizontal Form</h2>
				<form className="horizontal-form u-margin-bottom-lg">
					<div className="form-group">
						<label className="form-label" htmlFor="horizontalFormInputEmail">Email address</label>
						<input className="form-input" placeholder="Enter email" id="horizontalFormInputEmail" />
					</div>
					<div className="form-group">
						<label className="form-label" htmlFor="horizontalFormInputPassword">Password</label>
						<input type="password" className="form-input" placeholder="Password" id="horizontalFormInputPassword" />
					</div>
					<div className="form-group">
						<div className="form-label" />
						<button type="button" className="btn btn-default">Submit</button>
					</div>
				</form>


				<h2 id="section-inline" className="u-padding-top-lg">Inline Form</h2>
				<form className="inline-form u-margin-bottom-lg">
					<div className="form-group">
						<label className="form-label" htmlFor="horizontalFormInputEmail">Email address</label>
						<input className="form-input" placeholder="Enter email" id="horizontalFormInputEmail" />
					</div>
					<div className="form-group">
						<label className="form-label" htmlFor="horizontalFormInputPassword">Password</label>
						<input type="password" className="form-input" placeholder="Password" id="horizontalFormInputPassword" />
					</div>
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
					<div className="form-group">
						<div className="input-group">
							<div className="input-group-control input-group-field">
								<input type="text" className="form-input" placeholder="Input group field" />
							</div>
							<div className="input-group-control input-group-btn">
								<button className="btn btn-default" type="button">Button</button>
							</div>
						</div>
					</div>
					<div className="form-group">
						<div className="input-group">
							<div className="input-group-control input-group-field">
								<input type="text" className="form-input" placeholder="Input group field" />
							</div>
							<div className="input-group-control input-group-btn">
								<button className="btn btn-primary" type="button">Button</button>
							</div>
						</div>
					</div>
				</form>

				
				<h2 id="section-controls" className="u-padding-top-lg">Supported Controls</h2>
				<form className="u-margin-bottom-lg">
					<div className="form-group">
						<label className="form-label" htmlFor="supportedControlsInput">Input</label>
						<input className="form-input" placeholder="Input" id="supportedControlsInput" />
					</div>
					<div className="form-group">
						<label className="form-label" htmlFor="supportedControlsInput">Code Input</label>
						<input className="form-input form-input-code" placeholder="Input" id="supportedControlsInput" />
					</div>
					<div className="form-group">
						<label className="form-label" htmlFor="supportedControlsInputLarge">Large Input</label>
						<input className="form-input form-input-lg" placeholder="Large" id="supportedControlsInputLarge" />
					</div>
					<div className="form-group">
						<label className="form-label" htmlFor="supportedControlsInputSmall">Small Input</label>
						<input className="form-input form-input-sm" placeholder="Small" id="supportedControlsInputSmall" />
					</div>
					<div className="form-group">
						<label className="form-label" htmlFor="supportedControlsInputDisabled">Disabled Input</label>
						<input className="form-input" placeholder="Disabled" id="supportedControlsInputDisabled" disabled />
					</div>
					<div className="form-group">
						<label className="form-label" htmlFor="supportedControlsTextarea">Textarea</label>
						<textarea className="form-input" placeholder="Textarea" id="supportedControlsTextarea" />
					</div>
					<div className="form-group">
						<label className="form-label" htmlFor="supportedControlsTextarea">Code Textarea</label>
						<textarea className="form-input form-input-code" placeholder="Textarea" id="supportedControlsTextarea" />
					</div>
					<div className="form-group">
						<label className="form-label" htmlFor="supportedControlsSelect">Select</label>
						<select className="form-input" id="supportedControlsSelect">
							{[1,2,3,4,5].map(function(item) { return <option value={item}>Option {item}</option> })}
						</select>
					</div>
					<div className="form-group">
						<label className="form-label" htmlFor="supportedControlsSelectDisabled">Disabled Select</label>
						<select className="form-input" id="supportedControlsSelectDisabled" disabled>
							{[1,2,3,4,5].map(function(item) { return <option value={item}>Option {item}</option> })}
						</select>
					</div>
					<div className="form-group">
						<div className="form-label">Checkboxes</div>
						{[1,2,3].map(function(item) { return <div className="checkbox">
							<label className="checkbox-label">
								<input type="checkbox" className="checkbox-input" /> Check me out
							</label>
						</div> })}
					</div>
					<div className="form-group">
						<div className="form-label">Radios</div>
						{[1,2,3].map(function(item) { return <div className="radio">
							<label className="radio-label">
								<input type="radio" name="supportedControlsRadios" className="radio-input" /> Pick me
							</label>
						</div> })}
					</div>
					<div className="form-group">
						<div className="form-label">Inline Checkboxes</div>
						<div className="inline-controls">
							{[1,2,3].map(function(item) { return <span className="checkbox">
								<label className="checkbox-label">
									<input type="checkbox" className="checkbox-input" /> Check me out
								</label>
							</span> })}
						</div>
					</div>
					<div className="form-group">
						<div className="form-label">Inline Radios</div>
						<div className="inline-controls">
							{[1,2,3].map(function(item) { return <span className="radio">
								<label className="radio-label">
									<input type="radio" name="supportedControlsInlineRadios" className="radio-input" /> Pick me
								</label>
							</span> })}
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
						<InputGroup size="one-quarter" type="text"   label="Expiration"          placeholder="MM/YYYY"     name="credit-card-expiration" />
						<InputGroup size="one-quarter" type="number" label="Security Code (CCV)" placeholder="123"         name="credit-card-security" />
					</div>
					<div className="form-groups">
						<InputGroup size="one-half" label="First Name" placeholder="First Name" name="first-name" />
						<InputGroup size="one-half" label="Last Name"  placeholder="Last Name"  name="last-name" />
					</div>
					<InputGroup label="Billing Address" placeholder="Address Line 1" name="address-street1" />
					<InputGroup placeholder="Address Line 2" name="address-street2" />
					<div className="form-groups">
						<InputGroup size="two-thirds" placeholder="City"  name="city" />
						<InputGroup size="one-third"  placeholder="State" name="state" />
					</div>
					<div className="form-groups">
						<InputGroup size="one-third"  placeholder="Post Code"  name="city" />
						<SelectInputGroup options={countryOptions} firstOption="Country" />
					</div>
				</form>
			</div>
		);
	}
});

module.exports = Forms;
