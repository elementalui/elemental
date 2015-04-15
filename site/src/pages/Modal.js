var React = require('react/addons');

var Modal = require('elemental').Modal;
var EmailInputGroup = require('elemental').EmailInputGroup;
var PasswordInputGroup = require('elemental').PasswordInputGroup;

module.exports = React.createClass({
	displayName: 'VIEW_Modal',
	getInitialState() {
		return {
			modalIsOpen: false,
			'inputEmail': '',
			'inputPassword': ''
		};
	},
	toggleModal() {
		this.setState({ modalIsOpen: !this.state.modalIsOpen });
	},
	render() {
		var self = this;

		// handle form input and validation
		function updateEmail(e) {
			self.setState({inputEmail: e.target.value});
		}
		function updatePassword(e) {
			self.setState({inputPassword: e.target.value});
		}
		return (
			<div className="page-container">
				<h1>Modal</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac viverra augue. Vivamus ultricies nec massa a vulputate. Donec non lacus sit amet augue faucibus sodales ut at nulla. Donec id tincidunt nulla. Aenean sit amet libero velit. Nam maximus leo sit amet dolor tincidunt egestas. Nunc facilisis tellus et sapien consectetur varius. In ligula orci, tincidunt eu molestie sit amet, facilisis in nisl. Cras elit risus, scelerisque quis elementum sed, convallis a mi. Etiam placerat eros vitae hendrerit varius.</p>
				<p>Morbi maximus metus diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla dolor felis, vulputate quis imperdiet vel, molestie tincidunt dui. Nulla aliquet ut lorem ac dignissim. Cras sem lectus, iaculis quis mi quis, convallis euismod massa. Fusce augue ipsum, consectetur ut nisl vel, convallis varius felis. Aenean finibus id justo et varius.</p>
				<button onClick={this.toggleModal} type="button" className="btn btn-default">Launch Modal</button>
				<Modal isOpen={this.state.modalIsOpen} onChange={this.toggleModal} headerTitle="Modal Header" headerHasCloseButton backdropClosesModal>
					<form>
						<div className="modal-body">
							<EmailInputGroup    label="Email"    value={this.state.inputEmail}    onChange={updateEmail}    required />
							<PasswordInputGroup label="Password" value={this.state.inputPassword} onChange={updatePassword} required />
						</div>
						<div className="modal-footer">
							<button onClick={this.toggleModal} type="button" className="btn btn-primary">Submit</button>
							<button onClick={this.toggleModal} type="button" className="btn btn-link-cancel">Cancel</button>
						</div>
					</form>
				</Modal>
			</div>
		);
	}
});
