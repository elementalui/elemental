var React = require('react/addons');
var Button = require('elemental').Button;
var DateSelect = require('react-date-select');

var DateSelectExamples = React.createClass({
	getInitialState() {
		return {
			singleDateValue: new Date(),
			multiDateValue1: [new Date(), new Date()],
			multiDateValue2: [new Date(), new Date()]
		};
	},
	onDateChange(key, value) {
		this.setState({ key: value });
	},
	render() {
		return (
			<div className="demo-container container">
				<h1>Date Picker</h1>
				<p className="lead">
					We built <a href="http://jedwatson.github.io/react-date-select">react-date-select</a> for Elemental, and published it separately to <a href="https://www.npmjs.com/package/react-date-select">npm</a>
				</p>

				<h2>Day Picker</h2>
				<p>Pick a single date</p>
				<DateSelect value={this.state.singleDateValue} onChange={this.onDateChange.bind(this, 'singleDateValue')}>
					<Button>Open date picker</Button>
				</DateSelect>

				<h2>Multi Picker</h2>
				<p>Pick a start and end date</p>
				<DateSelect value={this.state.multiDateValue1} onChange={this.onDateChange.bind(this, 'multiDateValue1')} isMulti>
					<Button>Open range picker</Button>
				</DateSelect>

				<h2>Multi Picker with Ranges</h2>
				<p>Pick a start and end date, with the option to use predefined ranges.</p>
				<DateSelect value={this.state.multiDateValue2} onChange={this.onDateChange.bind(this, 'multiDateValue2')} isMulti showPredefinedRanges>
					<Button>Launch range picker (with default ranges)</Button>
				</DateSelect>
			</div>
		);
	}
});

module.exports = DateSelectExamples;
