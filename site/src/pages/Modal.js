var React = require('react/addons');

var Button = require('elemental').Button;
var FormField = require('elemental').FormField;
var FormInput = require('elemental').FormInput;
var Modal = require('elemental').Modal;
var ModalBody = require('elemental').ModalBody;
var ModalFooter = require('elemental').ModalFooter;
var ModalHeader = require('elemental').ModalHeader;
var Spinner = require('elemental').Spinner;

var ExampleSource = require('../components/ExampleSource');

module.exports = React.createClass({
	displayName: 'VIEW_Modal',
	getInitialState() {
		return {
			formProcessing: false,
			modalIsOpen: false,
			email: '',
			password: ''
		};
	},
	toggleModal() {
		var self = this;
		this.setState({
			modalIsOpen: !this.state.modalIsOpen
		}, function () {
			if (self.state.modalIsOpen) {
				self.refs.email.getDOMNode().focus();
			}
		});
	},
	submitForm(e) {
		e.preventDefault();
		var self = this;
		this.setState({ formProcessing: true });

		setTimeout(function() {
			self.setState({
				formProcessing: false,
				modalIsOpen: false,
				email: '',
				password: ''
			});
		}, 3000);
	},
	render() {
		var self = this;

		// handle form input
		function updateInput(e) {
			var newState = {};
			newState[e.target.name] = e.target.value;
			self.setState(newState);
		};

		// variable submit button
		var submitButton = this.state.formProcessing ? (
			<Button type="primary" disabled>
				<Spinner type="inverted" />
				Submitting
			</Button>
		) : (
			<Button type="primary" disabled={!this.state.email || !this.state.password} submit>Submit</Button>
		);
		return (
			<div className="demo-container container">
				<h1>Modal</h1>

				<h2>Static Example</h2>
				<div className="code-example">
					<div className="code-example__example">
						<div className="Modal-content">
							<ModalHeader text="Modal Header" showCloseButton />
							<ModalBody>
								<p>Content and controls go in the Modal Body.</p>
							</ModalBody>
							<ModalFooter>
								<Button type="primary">Modal Footer</Button>
								<Button type="link-cancel">Button</Button>
							</ModalFooter>
						</div>
					</div>
					<ExampleSource>
						{`
							<Modal>
								<ModalHeader text="Modal Header" showCloseButton />
								<ModalBody>
									<p>Content and controls go in the Modal Body.</p>
								</ModalBody>
								<ModalFooter>
									<Button type="primary">Modal Footer</Button>
									<Button type="link-cancel">Button</Button>
								</ModalFooter>
							</Modal>
						`}
					</ExampleSource>
				</div>

				<h2>Live Demo</h2>
				<div className="code-example">
					<div className="code-example__example">
						<Button onClick={this.toggleModal}>Launch Modal</Button>
					</div>
					<ExampleSource>
						{`
							<Button onClick={this.toggleModal}>Launch Modal</Button>
						`}
					</ExampleSource>
					<ExampleSource>
						{`
							<Modal isOpen={this.state.modalIsOpen} onCancel={this.toggleModal} backdropClosesModal>
								<ModalHeader text="Live Demo" showCloseButton onClose={this.toggleModal} />
								<form action="#" onSubmit={this.submitForm} noValidate>
									<ModalBody>
										<FormField label="Email">
											<FormInput label="Email" type="email" name="email" ref="email" value={this.state.email} onChange={updateInput} required />
										</FormField>
										<FormField label="Password">
											<FormInput label="Password" type="password" name="password" ref="password" value={this.state.password} onChange={updateInput} required />
										</FormField>
									</ModalBody>
									<ModalFooter>
										{submitButton}
										<Button onClick={this.toggleModal} type="link-cancel" disabled={this.state.formProcessing}>Cancel</Button>
									</ModalFooter>
								</form>
							</Modal>
						`}
					</ExampleSource>
					<ExampleSource>
						{`
							var submitButton = this.state.formProcessing ? (
								<Button type="primary" disabled>
									<Spinner type="inverted" />
									Submitting
								</Button>
							) : (
								<Button type="primary" disabled={!this.state.email || !this.state.password} submit>Submit</Button>
							);
						`}
					</ExampleSource>
				</div>

				<h2>Usage</h2>
				<h3>Modal</h3>
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
								<td className="usage-table__prop">backdropClosesModal</td>
								<td className="usage-table__type">bool</td>
								<td className="usage-table__default">false</td>
								<td className="usage-table__description">Pass through to make the backdrop available as a target to dismiss the modal.</td>
							</tr>
							<tr>
								<td className="usage-table__prop">isOpen</td>
								<td className="usage-table__type">bool</td>
								<td className="usage-table__default">false</td>
								<td className="usage-table__description">Managed by state;  this is how to control the visibility of the modal.</td>
							</tr>
							<tr>
								<td className="usage-table__prop">onCancel</td>
								<td className="usage-table__type">func</td>
								<td className="usage-table__default">undefined</td>
								<td className="usage-table__description">The function used to handle cancel events on the modal; typically sets the open state to <code className="inline-code">false</code></td>
							</tr>
							<tr>
								<td className="usage-table__prop">top</td>
								<td className="usage-table__type">string</td>
								<td className="usage-table__default">''</td>
								<td className="usage-table__description">Optionally pass through a distance from top. If omitted (recommended) the modal will automatically calculate the correct distance.</td>
							</tr>
						</tbody>
					</Table>
				</div>

				<h3>Modal Header</h3>
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
								<td className="usage-table__description">Alternative to using the text attribute, for when you need more control over the content.</td>
							</tr>
							<tr>
								<td className="usage-table__prop">showCloseButton</td>
								<td className="usage-table__type">bool</td>
								<td className="usage-table__default">false</td>
								<td className="usage-table__description">Allow users to dismiss the modal.</td>
							</tr>
							<tr>
								<td className="usage-table__prop">onClose</td>
								<td className="usage-table__type">func</td>
								<td className="usage-table__default">undefined</td>
								<td className="usage-table__description">What to do when the user clicks the close button</td>
							</tr>
							<tr>
								<td className="usage-table__prop">text</td>
								<td className="usage-table__type">string</td>
								<td className="usage-table__default">''</td>
								<td className="usage-table__description">Creates a title for the modal. We use "text" because <code className="inline-code">title</code> is reserved.</td>
							</tr>
						</tbody>
					</Table>
				</div>

				<h3>Modal Body/Footer</h3>
				<p>These are simple wrappers to abstract the classnames, they may become more functional in the future.</p>

				<Modal isOpen={this.state.modalIsOpen} onCancel={this.toggleModal} backdropClosesModal>
					<ModalHeader text="Live Demo" showCloseButton onClose={this.toggleModal} />
					<form action="#" onSubmit={this.submitForm} noValidate>
						<ModalBody>
							<FormField label="Email">
								<FormInput label="Email" type="email" name="email" ref="email" value={this.state.email} onChange={updateInput} required />
							</FormField>
							<FormField label="Password">
								<FormInput label="Password" type="password" name="password" ref="password" value={this.state.password} onChange={updateInput} required />
							</FormField>
						</ModalBody>
						<ModalFooter>
							{submitButton}
							<Button onClick={this.toggleModal} type="link-cancel" disabled={this.state.formProcessing}>Cancel</Button>
						</ModalFooter>
					</form>
				</Modal>
			</div>
		);
	}
});
