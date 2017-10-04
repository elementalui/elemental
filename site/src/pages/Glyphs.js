/* eslint no-script-url: 0 */

var React = require('react');
var createReactClass = require('create-react-class');
var { Glyph, Container, Table, Col, Row, Card, Button } = require('elemental');

var ExampleSource = require('../components/ExampleSource');

const GLYPH_COLOR_TYPES = [
	'danger',
	'default',
	'muted',
	'primary',
	'success',
	'warning'
];

var Glyphs = createReactClass({
	displayName: 'VIEW_Glyphs',
	renderGlyphColorTypes() {
		return GLYPH_COLOR_TYPES.map(color => {
			return <span key={'color_'+color}><code className="inline-code">{color}</code>{' '}</span>;
		});
	},
	renderGlyphColors(icon) {
		return GLYPH_COLOR_TYPES.map(color => {
			return (
				<div key={color+icon} className="code-example__example-element--inline">
					<Glyph icon={icon} type={color} />
					{' '}
					{color}
				</div>
			);
		});
	},
	renderGlyphColorsExample(icon) {
		var stringRep = '';
		GLYPH_COLOR_TYPES.forEach(color => {
			stringRep += `<Glyph icon='${icon}' type='${color}' />\n`;
		});
		return stringRep;
	},
	renderGlyphGrid(perRow) {
		var rows = [];
		var colSize = '1/' + perRow;

		var row = [];
		Glyph.names.forEach((glyph, index) => {
			if (index % perRow === 0) {
				rows.push(row);
				row = [];
			}
			row.push(glyph);
		});

		return rows.map((row, index) => {
				var cols = row.map(glyph => {
					return (
						<Col key={'col_'+glyph} sm={colSize}>
							<Card className="code-example--glyph__icon">
								<Glyph key={glyph} icon={glyph} />
								<div className="code-example--glyph__icon-name">
									{glyph}
								</div>
							</Card>
						</Col>
					);
				});
				return <Row key={'row_' + index}>{cols}</Row>;
		});

	},
	render () {
		return (
			<Container maxWidth={800} className="demo-container">
				<h1>Glyphs</h1>
				<h2>Basic Example</h2>
				<div className="code-example">
					<div className="code-example__example">
						<Glyph icon="thumbsup" />
					</div>
					<ExampleSource>
						{`
							<Glyph icon="thumbsup" />
						`}
					</ExampleSource>
				</div>
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
								<td className="usage-table__prop">icon</td>
								<td className="usage-table__type">string</td>
								<td className="usage-table__default">''</td>
								<td className="usage-table__description">Required. Icon name from Octicons.</td>
							</tr>
							<tr>
								<td className="usage-table__prop">type</td>
								<td className="usage-table__type">enum</td>
								<td className="usage-table__default">'default'</td>
								<td className="usage-table__description">
									One of:
									<br />
									{this.renderGlyphColorTypes()}
								</td>
							</tr>
						</tbody>
					</Table>
				</div>
				<h2>Icons</h2>
				<p className="lead">Elemental uses the wonderful <a href="https://octicons.github.com/" target="_blank">Octicons Suite from GitHub</a></p>
				{this.renderGlyphGrid(6)}
				<h2>Colors</h2>
				<p className="lead">Glyph colors can be customized.</p>
				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Glyph colors</div>
							{this.renderGlyphColors('heart')}
					</div>
					<ExampleSource>
						{this.renderGlyphColorsExample('heart')}
					</ExampleSource>
				</div>
				<h2>Buttons</h2>
				<p className="lead">Glyphs work well with <a href="/buttons">Buttons</a>.</p>
				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Buttons</div>
							<Button type="primary"><Glyph icon="beaker"/></Button>
							{' '}
							<Button type="danger"><Glyph icon="flame"/></Button>
							{' '}
							<Button type="success"><Glyph icon="squirrel"/></Button>
							{' '}
							<Button type="warning"><Glyph icon="beaker"/></Button>
					</div>
					<ExampleSource>
						{`
							<Button type="primary"><Glyph icon="beaker" /></Button>
							<Button type="danger"><Glyph icon="flame" /></Button>
							<Button type="success"><Glyph icon="squirrel" /></Button>
							<Button type="warning"><Glyph icon="beaker" /></Button>
						`}
					</ExampleSource>
				</div>
				<div className="code-example">
					<div className="code-example__example">
						<div className="code-example__example__heading">Link Buttons</div>
							<Button type="link"><Glyph icon="bug"/></Button>
							<Button type="link"><Glyph icon="squirrel" type="danger" /></Button>
							<Button type="link-delete"><Glyph icon="circle-slash" /></Button>
					</div>
					<ExampleSource>
						{`
							<Button type="link"><Glyph icon="bug" /></Button>
							<Button type="link"><Glyph icon="squirrel" type="danger" /></Button>
							<Button type="link-delete"><Glyph icon="delete" /></Button>
						`}
					</ExampleSource>
				</div>
			</Container>
		);
	}
});

module.exports = Glyphs;
