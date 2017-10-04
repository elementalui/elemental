const React = require('react');
const createReactClass = require('create-react-class');

const {
	Button,
	Container,
	FormField,
	FormInput,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	Spinner,
	Table
} = require('elemental');

const ExampleSource = require('../components/ExampleSource');

module.exports = createReactClass({
	displayName: 'VIEW_Modal',
	getInitialState() {
		return {
			modalIsOpen: false,
			sizedModalIsOpen: false,
		};
	},
	toggleModal(visible) {
		this.setState({
			modalIsOpen: visible
		});
	},
	toggleSizedModal(visible, size) {
		this.setState({
			sizedModalIsOpen: visible,
			modalSize: size,
		});
	},
	render() {
		return (
			<Container maxWidth={800} className="demo-container">
				<h1>Modal</h1>

				<h2>Static Example</h2>
				<div className="code-example">
					<div className="code-example__example">
						<div className="Modal-content">
							<ModalHeader text="Modal Header" />
							<ModalBody>
								<FormField label="Email">
									<FormInput label="Email" type="email" name="email" ref="email" placeholder="name@example.com" onChange={this.updateInput} required />
								</FormField>
								<FormField label="Password">
									<FormInput label="Password" type="password" name="password" ref="password" placeholder="min. 8 chars" onChange={this.updateInput} required />
								</FormField>
							</ModalBody>
							<ModalFooter>
								<Button type="primary">Submit</Button>
								<Button type="link-cancel">Cancel</Button>
							</ModalFooter>
						</div>
					</div>
					<ExampleSource>
						{`
							<Modal>
								<ModalHeader text="Modal Header" />
								<ModalBody>
									<form>[...]</form>
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
						<Button onClick={this.toggleModal.bind(this, true)}>Launch Modal</Button>
					</div>
					<ExampleSource>
						{`
							<Button onClick={this.toggleModal}>Launch Modal</Button>
						`}
					</ExampleSource>
					<ExampleSource>
						{`
							<Modal isOpen={this.state.modalIsOpen} onCancel={this.toggleModal} backdropClosesModal>
								<ModalHeader text="Lots of text to show scroll behavior" showCloseButton onClose={this.toggleModal} />
								<ModalBody>[...]</ModalBody>
								<ModalFooter>
									<Button type="primary" onClick={this.toggleModal}>Close modal</Button>
									<Button type="link-cancel" onClick={this.toggleModal}>Also closes modal</Button>
								</ModalFooter>
							</Modal>
						`}
					</ExampleSource>
				</div>

				<h2>Sizes</h2>
				<div className="code-example">
					<div className="code-example__example">
						<Button onClick={() => this.toggleSizedModal(true, 'small')} style={{ marginRight: 10 }}>Small</Button>
						<Button onClick={() => this.toggleSizedModal(true, 'large')} style={{ marginRight: 10 }}>Large</Button>
						<Button onClick={() => this.toggleSizedModal(true, 768)}>768px</Button>
					</div>
					<ExampleSource>
						{`
							<Modal ... width="small">...</Modal>
							<Modal ... width="large">...</Modal>
							<Modal ... width={768}>...</Modal>
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
								<td className="usage-table__prop">width</td>
								<td className="usage-table__type">number/enum</td>
								<td className="usage-table__default">'medium'</td>
								<td className="usage-table__description">Explicitly set a numeric width or provide one of three sizes; 'small', 'medium', 'large' - 320px, 640px, 960px respectively.</td>
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

				<Modal isOpen={this.state.modalIsOpen} onCancel={this.toggleModal.bind(this, false)} backdropClosesModal>
					<ModalHeader text="Lots of text to show scroll behavior" showCloseButton onClose={this.toggleModal.bind(this, false)} />
					<ModalBody>
						<p style={{ color: '#999', fontSize: '.85em' }}>From the Wikipedia article <a href="https://en.wikipedia.org/wiki/Elemental" target="_blank">https://en.wikipedia.org/wiki/Elemental</a></p>
						<p>An elemental is a mythic being described in occult and alchemical works from around the time of the European Renaissance and particularly elaborated in the 16th century works of Paracelsus.</p>
						<p>There are four elemental categories: gnomes, undines, sylphs, and salamanders. These correspond to the Classical elements of antiquity: earth, water, air and fire. Aether (quintessence) was not assigned an elemental.</p>
						<p>Terms employed for beings associated with alchemical elements vary by source and gloss.</p>
						<h2>History</h2>
						<p>The Paracelsian concept of elementals draws from several much older traditions in mythology and religion. Common threads can be found in folklore, animism, and anthropomorphism. Examples of creatures such as the Pygmy were taken from Greek mythology.</p>
						<p>The elements of earth, water, air, and fire, were classed as the fundamental building blocks of nature. This system prevailed in the Classical world and was highly influential in medieval natural philosophy. Although Paracelsus uses these foundations and the popular preexisting names of elemental creatures, he is doing so to present new ideas which expand on his own philosophical system. The homunculus is another example of a Paracelsian idea with roots in earlier alchemical, scientific, and folklore traditions.</p>
						<h3>Paracelsus</h3>
						<p>In his 16th-century alchemical work Liber de Nymphis, sylphis, pygmaeis et salamandris et de caeteris spiritibus, Paracelsus identified mythological beings as belonging to one of the four elements. Part of the Philosophia Magna, this book was first printed in 1566 after Paracelsus' death. He wrote the book to "describe the creatures that are outside the cognizance of the light of nature, how they are to be understood, what marvellous works God has created". He states that there is more bliss in describing these "divine objects" than in describing fencing, court etiquette, cavalry, and other worldly pursuits.</p>
						<p>The concept of elementals seems to have been conceived by Paracelsus in the 16th century, though he did not in fact use the term "elemental" or a German equivalent.[5] He regarded them not so much as spirits but as beings between creatures and spirits, generally being invisible to mankind but having physical and commonly humanoid bodies, as well as eating, sleeping, and wearing clothes like humans. Paracelsus gave common names for the elemental types, as well as correct names, which he seems to have considered somewhat more proper, "recht namen". He also referred to them by purely German terms which are roughly equivalent to "water people," "mountain people," and so on, using all the different forms interchangeably.</p>
					</ModalBody>
					<ModalFooter>
						<Button type="primary" onClick={this.toggleModal.bind(this, false)}>Close modal</Button>
						<Button type="link-cancel" onClick={this.toggleModal.bind(this, false)}>Also closes modal</Button>
					</ModalFooter>
				</Modal>
				<Modal isOpen={this.state.sizedModalIsOpen} onCancel={() => this.toggleSizedModal(false, null)} backdropClosesModal width={this.state.modalSize}>
					<ModalHeader text={this.state.modalSize} showCloseButton onClose={() => this.toggleSizedModal(false, null)} />
					<ModalBody>
						<p>&hellip;</p>
					</ModalBody>
				</Modal>
			</Container>
		);
	}
});
