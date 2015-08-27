/* eslint no-script-url: 0 */

const React = require('react/addons');
const classNames = require('classnames');
const { Col, Container, Row, ResponsiveText } = require('elemental');

const DemoBox = require('../components/DemoBox');
const ExampleSource = require('../components/ExampleSource');

var GridExample = React.createClass({
	render() {
		return (
			<Container maxWidth={800} className="demo-container">
				<h1>Grid</h1>

				<h2>Let's start simple</h2>
				<p className="lead">Elemental uses its own component-based grid system</p>

				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Equal Columns</div>
						<Row>
							<Col sm="33.333%">
								<DemoBox>One Third</DemoBox>
							</Col>
							<Col sm="33.333%">
								<DemoBox>One Third</DemoBox>
							</Col>
							<Col sm="33.333%">
								<DemoBox>One Third</DemoBox>
							</Col>
						</Row>
					</div>
					<ExampleSource>
						{`
							<Row>
								<Col sm="33.333%">
									<DemoBox>One Third</DemoBox>
								</Col>
								<Col sm="33.333%">
									<DemoBox>One Third</DemoBox>
								</Col>
								<Col sm="33.333%">
									<DemoBox>One Third</DemoBox>
								</Col>
							</Row>
						`}
					</ExampleSource>
				</div>

				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Unequal Columns</div>
						<Row>
							<Col sm="25%">
								<DemoBox>One Quarter</DemoBox>
							</Col>
							<Col sm="50%">
								<DemoBox>One Half</DemoBox>
							</Col>
							<Col sm="25%">
								<DemoBox>One Quarter</DemoBox>
							</Col>
							<Col sm="66.667%">
								<DemoBox>Two Thirds</DemoBox>
							</Col>
							<Col sm="33.333%">
								<DemoBox>One Third</DemoBox>
							</Col>
						</Row>
					</div>
					<ExampleSource>
						{`
							<Row>
								<Col sm="25%">
									<DemoBox>One Quarter</DemoBox>
								</Col>
								<Col sm="50%">
									<DemoBox>One Half</DemoBox>
								</Col>
								<Col sm="25%">
									<DemoBox>One Quarter</DemoBox>
								</Col>
								<Col sm="66.667%">
									<DemoBox>Two Thirds</DemoBox>
								</Col>
								<Col sm="33.333%">
									<DemoBox>One Third</DemoBox>
								</Col>
							</Row>
						`}
					</ExampleSource>
				</div>

				<h2>Resize your window</h2>
				<p className="lead">We've made sure you can accomodate even the trickiest design combinations</p>

				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Columns on a small device</div>
						<Row>
							<Col xs="33%" sm="25%" lg="33.333%">
								<DemoBox>
									<ResponsiveText visibleXS="⅓" visibleSM="Quarter" visibleMD="One Quarter" visibleLG="One Third" />
								</DemoBox>
							</Col>
							<Col xs="33%" sm="50%" lg="33.333%">
								<DemoBox>
									<ResponsiveText visibleXS="⅓" visibleSM="One Half" visibleMD="One Half" visibleLG="One Third" />
								</DemoBox>
							</Col>
							<Col xs="33%" sm="25%" lg="33.333%">
								<DemoBox>
									<ResponsiveText visibleXS="⅓" visibleSM="Quarter" visibleMD="One Quarter" visibleLG="One Third" />
								</DemoBox>
							</Col>
							<Col xs="50%" sm="33.333%" md="66.667%" lg="20%">
								<DemoBox>
									<ResponsiveText visibleXS="½" visibleSM="One Third" visibleMD="Two Thirds" visibleLG="One Fifth" />
								</DemoBox>
							</Col>
							<Col xs="50%" sm="66.667%" md="33.333%" lg="60%">
								<DemoBox>
									<ResponsiveText visibleXS="½" visibleSM="Two Thirds" visibleMD="One Third" visibleLG="Three Fifths" />
								</DemoBox>
							</Col>
							<Col xs="100%" sm="33.333%" md="25%" lg="20%">
								<DemoBox>
									<ResponsiveText visibleXS="1" visibleSM="One Third" visibleMD="One Quarter" visibleLG="One Fifth" />
								</DemoBox>
							</Col>
							<Col xs="50%" sm="33.333%" md="50%" lg="50%">
								<DemoBox>
									<ResponsiveText visibleXS="½" visibleSM="One Third" visibleMD="One Half" visibleLG="One Half" />
								</DemoBox>
							</Col>
							<Col xs="50%" sm="33.333%" md="25%" lg="50%">
								<DemoBox>
									<ResponsiveText visibleXS="½" visibleSM="One Third" visibleMD="One Quarter" visibleLG="One Half" />
								</DemoBox>
							</Col>
						</Row>
					</div>
					<ExampleSource>
						{`
							<Row>
								<Col xs="33%" sm="25%" lg="33.333%">
									<DemoBox>
										<ResponsiveText visibleXS="⅓" visibleSM="One Quarter" visibleMD="One Quarter" visibleLG="One Third" />
									</DemoBox>
								</Col>
								<Col xs="33%" sm="50%" lg="33.333%">
									<DemoBox>
										<ResponsiveText visibleXS="⅓" visibleSM="One Half" visibleMD="One Half" visibleLG="One Third" />
									</DemoBox>
								</Col>
								<Col xs="33%" sm="25%" lg="33.333%">
									<DemoBox>
										<ResponsiveText visibleXS="⅓" visibleSM="One Quarter" visibleMD="One Quarter" visibleLG="One Third" />
									</DemoBox>
								</Col>
								<Col xs="50%" sm="33.333%" md="66.667%" lg="20%">
									<DemoBox>
										<ResponsiveText visibleXS="½" visibleSM="One Third" visibleMD="Two Thirds" visibleLG="One Fifth" />
									</DemoBox>
								</Col>
								<Col xs="50%" sm="66.667%" md="33.333%" lg="60%">
									<DemoBox>
										<ResponsiveText visibleXS="½" visibleSM="Two Thirds" visibleMD="One Third" visibleLG="Three Fifths" />
									</DemoBox>
								</Col>
								<Col xs="100%" sm="33.333%" md="25%" lg="20%">
									<DemoBox>
										<ResponsiveText visibleXS="1" visibleSM="One Third" visibleMD="One Quarter" visibleLG="One Fifth" />
									</DemoBox>
								</Col>
								<Col xs="50%" sm="33.333%" md="50%" lg="50%">
									<DemoBox>
										<ResponsiveText visibleXS="½" visibleSM="One Third" visibleMD="One Half" visibleLG="One Half" />
									</DemoBox>
								</Col>
								<Col xs="50%" sm="33.333%" md="25%" lg="50%">
									<DemoBox>
										<ResponsiveText visibleXS="½" visibleSM="One Third" visibleMD="One Quarter" visibleLG="One Half" />
									</DemoBox>
								</Col>
							</Row>
						`}
					</ExampleSource>
				</div>

				<h2>Something completely different</h2>
				<p className="lead">What's that you say, a grid that lays itself out? I'll eat my hat!</p>

				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Columns without attributes</div>
						<Row>
							<Col><DemoBox>♥</DemoBox></Col>
							<Col><DemoBox>♥</DemoBox></Col>
							<Col><DemoBox>♥</DemoBox></Col>
						</Row>
						<Row>
							<Col><DemoBox>♥</DemoBox></Col>
							<Col><DemoBox>♥</DemoBox></Col>
							<Col><DemoBox>♥</DemoBox></Col>
							<Col><DemoBox>♥</DemoBox></Col>
							<Col><DemoBox>♥</DemoBox></Col>
							<Col><DemoBox>♥</DemoBox></Col>
						</Row>
					</div>
					<ExampleSource>
						{`
						<Row>
							<Col><DemoBox>♥</DemoBox></Col>
							<Col><DemoBox>♥</DemoBox></Col>
							<Col><DemoBox>♥</DemoBox></Col>
						</Row>
						<Row>
							<Col><DemoBox>♥</DemoBox></Col>
							<Col><DemoBox>♥</DemoBox></Col>
							<Col><DemoBox>♥</DemoBox></Col>
							<Col><DemoBox>♥</DemoBox></Col>
							<Col><DemoBox>♥</DemoBox></Col>
							<Col><DemoBox>♥</DemoBox></Col>
						</Row>
						`}
					</ExampleSource>
				</div>
				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Columns with a basis</div>
						<Row>
							<Col basis="25%"><DemoBox>♥</DemoBox></Col>
							<Col basis="25%"><DemoBox>♥</DemoBox></Col>
							<Col basis="25%"><DemoBox>♥</DemoBox></Col>
							<Col basis="25%"><DemoBox>♥</DemoBox></Col>
							<Col basis="25%"><DemoBox>♥</DemoBox></Col>
							<Col basis="25%"><DemoBox>♥</DemoBox></Col>
						</Row>
					</div>
					<ExampleSource>
						{`
						<Row>
							<Col basis="25%"><DemoBox>♥</DemoBox></Col>
							<Col basis="25%"><DemoBox>♥</DemoBox></Col>
							<Col basis="25%"><DemoBox>♥</DemoBox></Col>
							<Col basis="25%"><DemoBox>♥</DemoBox></Col>
							<Col basis="25%"><DemoBox>♥</DemoBox></Col>
							<Col basis="25%"><DemoBox>♥</DemoBox></Col>
						</Row>
						`}
					</ExampleSource>
				</div>
				<p>Using columns without declaring a width or basis will NOT WRAP but evenly distribute their width using the available horizontal space of the row. Be careful with this one.</p>
				<p>With the release of React.js 0.14.x we'll be able to use the more agreeable syntax <span className="inline-code">&lt;Row basis="X"&gt;...&lt;/Row&gt;</span> through parent-based context.</p>
			</Container>
		);
	}
});

module.exports = GridExample;
