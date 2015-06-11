var React = require('react/addons');

var Button = require('elemental').Button;
var FormField = require('elemental').FormField;
var FormInput = require('elemental').FormInput;
var Modal = require('elemental').Modal;
var Spinner = require('elemental').Spinner;

module.exports = React.createClass({
	displayName: 'VIEW_Modal',
	getInitialState() {
		return {
			formProcessing: false,
			modalIsOpen: false,
			'inputEmail': '',
			'inputPassword': ''
		};
	},
	toggleModal() {
		this.setState({ modalIsOpen: !this.state.modalIsOpen });
	},
	submitForm() {
		var self = this;
		self.setState({ formProcessing: true });

		setTimeout(function() {
			self.setState({ formProcessing: false, modalIsOpen: false });
		}, 4000);
	},
	render() {
		var self = this;

		// handle form input and validation
		function updateEmail(e) {
			self.setState({ inputEmail: e.target.value });
		}
		function updatePassword(e) {
			self.setState({ inputPassword: e.target.value });
		}

		var submitButton = this.state.formProcessing ? (
			<Button onClick={this.submitForm} type="primary" disabled>
				<Spinner type="inverted" />
				Submitting
			</Button>
		) : (
			<Button onClick={this.submitForm} type="primary" disabled={!this.state.inputEmail || !this.state.inputPassword}>Submit</Button>
		);
		return (
			<div className="demo-container container">
				<h1>Modal</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac viverra augue. Vivamus ultricies nec massa a vulputate. Donec non lacus sit amet augue faucibus sodales ut at nulla. Donec id tincidunt nulla. Aenean sit amet libero velit. Nam maximus leo sit amet dolor tincidunt egestas. Nunc facilisis tellus et sapien consectetur varius. In ligula orci, tincidunt eu molestie sit amet, facilisis in nisl. Cras elit risus, scelerisque quis elementum sed, convallis a mi. Etiam placerat eros vitae hendrerit varius.</p>
				<p>Morbi maximus metus diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla dolor felis, vulputate quis imperdiet vel, molestie tincidunt dui. Nulla aliquet ut lorem ac dignissim. Cras sem lectus, iaculis quis mi quis, convallis euismod massa. Fusce augue ipsum, consectetur ut nisl vel, convallis varius felis. Aenean finibus id justo et varius.</p>
				<Button onClick={this.toggleModal}>Launch Modal</Button>
				<Modal isOpen={this.state.modalIsOpen} onCancel={this.toggleModal} headerTitle="Modal Header" headerHasCloseButton backdropClosesModal>
					<form>
						<div className="Modal-body">
							<FormField label="Email">
								<FormInput label="Email" type="email" value={this.state.inputEmail} onChange={updateEmail} required />
							</FormField>
							<FormField label="Password">
								<FormInput label="Password" type="password" value={this.state.inputPassword} onChange={updatePassword} required />
							</FormField>
						</div>
						<div className="Modal-footer">
							{submitButton}
							<Button onClick={this.toggleModal} type="link-cancel" disabled={this.state.formProcessing}>Cancel</Button>
						</div>
					</form>
				</Modal>
			</div>
		);
	}
});
