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
				<p>Buy why, some say, the moon? Why choose this as our goal? And they may as well ask why climb the highest mountain?</p>
				<p>The sky is the limit only for those who aren't afraid to fly!</p>
				<p>As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.</p>
				<Button onClick={this.toggleModal}>Launch Modal</Button>
				<p>If you could see the earth illuminated when you were in a place as dark as night, it would look to you more splendid than the moon.</p>
				<p>NASA is not about the ‘Adventure of Human Space Exploration’…We won’t be doing it just to get out there in space – we’ll be doing it because the things we learn out there will be making life better for a lot of people who won’t be able to go.</p>
				<p>It suddenly struck me that that tiny pea, pretty and blue, was the Earth. I put up my thumb and shut one eye, and my thumb blotted out the planet Earth. I didn't feel like a giant. I felt very, very small.</p>
				<p>We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win.</p>
				<p>Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning back from science. The early warnings about technological dangers also come from science.</p>
				<p>It suddenly struck me that that tiny pea, pretty and blue, was the Earth. I put up my thumb and shut one eye, and my thumb blotted out the planet Earth. I didn't feel like a giant. I felt very, very small.</p>
				<p>Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next 10.</p>
				<p>We have an infinite amount to learn both from nature and from each other</p>
				<p>The Earth was small, light blue, and so touchingly alone, our home that must be defended like a holy relic. The Earth was absolutely round. I believe I never knew what the word round meant until I saw Earth from space.</p>
				<p>We want to explore. We’re curious people. Look back over history, people have put their lives at stake to go out and explore … We believe in what we’re doing. Now it’s time to go.</p>
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
