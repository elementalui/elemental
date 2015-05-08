var React = require('react');
var Dropdown = require('elemental').Dropdown;
var Tooltip = require('elemental').Tooltip;
var Button = require('elemental').Button;

var DROPDOWN_OPTIONS = [
	{ type: 'item', anchor: 'javascript:;', label: 'Action' },
	{ type: 'item', anchor: 'javascript:;', label: 'Another action' },
	{ type: 'item', anchor: 'javascript:;', label: 'Something else here' },
	{ type: 'divider' },
	{ type: 'header', label: 'Dropdown header' },
	{ type: 'item', anchor: 'javascript:;', label: 'Separated link' },
];

var Buttons = React.createClass({
	displayName: 'VIEW_Buttons',
	getInitialState() {
		return {
			dropdownOpen: false
		};
	},
	toggleDropdown() {
		this.setState({ dropdownOpen: !this.state.dropdownOpen });
	},

	render () {
		return (
			<div className="demo-container container">
				<h1>Buttons</h1>
				<h2>Standard</h2>
				<Button type="default">Default</Button>
				<hr />
				<Button type="primary">Primary</Button>
				<hr />
				<Button type="default" disabled>Disabled</Button>
				<hr />
				<Button type="link">Link</Button>

				<h2>Large</h2>
				<Button type="default" size="lg">Default</Button>
				<hr />
				<Button type="primary" size="lg">Primary</Button>
				<hr />
				<Button type="default" size="lg" disabled>Disabled</Button>
				<hr />
				<Button type="link" size="lg">Link</Button>

				<h2>Small</h2>
				<Button type="default" size="sm">Default</Button>
				<hr />
				<Button type="primary" size="sm">Primary</Button>
				<hr />
				<Button type="default" size="sm" disabled>Disabled</Button>
				<hr />
				<Button type="link" size="sm">Link</Button>

				<h2>Extra Small</h2>
				<Button type="default" size="xs">Default</Button>
				<hr />
				<Button type="primary" size="xs">Primary</Button>
				<hr />
				<Button type="default" size="xs" disabled>Disabled</Button>
				<hr />
				<Button type="link" size="xs">Link</Button>

				<h2>Colours</h2>
				<Button type="primary">Primary</Button>
				<hr />
				<Button type="default-primary">Primary</Button>
				<hr />
				<Button type="success">Success</Button>
				<hr />
				<Button type="default-success">Success</Button>
				<hr />
				<Button type="warning">Warning</Button>
				<hr />
				<Button type="default-warning">Warning</Button>
				<hr />
				<Button type="danger">Danger</Button>
				<hr />
				<Button type="default-danger">Danger</Button>

				<h2>Button Groups</h2>
				<div className="ButtonGroup">
					<Button type="default">Left</Button>
					<Button type="default">Middle</Button>
					<Button type="default">Right</Button>
				</div>

				<h2>Dropdown</h2>
				<Dropdown items={DROPDOWN_OPTIONS} buttonLabel="Action" />

				<h2>Tooltip</h2>
				<p>
					<span> This is a sentence with a </span>
					<Tooltip placement="top" content="This is the tooltip content!">
						<span className="a">top aligned toolip with a really long target</span>
					</Tooltip>
					 <span> some more content </span>
					<Tooltip placement="right" content="This is the tooltip content!">
						<span className="a">right aligned toolip</span>
					</Tooltip>
					 <span> some more content </span>
					<Tooltip placement="bottom" content="This is the tooltip content!">
						<span className="a">bottom aligned toolip</span>
					</Tooltip>
					 <span> some more content </span>
					<Tooltip placement="left" content="This is the tooltip content!">
						<span className="a">left aligned toolip</span>
					</Tooltip>
				</p>
			</div>
		);
	}
});

module.exports = Buttons;
