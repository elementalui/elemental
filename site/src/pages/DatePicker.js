var React = require('react/addons');
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
				<h2>Day Picker</h2>
				<p>Pick a single date</p>
				<DateSelect value={this.state.singleDateValue} onChange={this.onDateChange.bind(this, 'singleDateValue')} />
				
				<h2>Multi Picker</h2>
				<p>Pick a start and end date</p>
				<DateSelect value={this.state.multiDateValue1} onChange={this.onDateChange.bind(this, 'multiDateValue1')} isMulti buttonLabel="Launch range picker" />
				
				<h2>Multi Picker with Ranges</h2>
				<p>Pick a start and end date, with the option to use predefined ranges.</p>
				<DateSelect value={this.state.multiDateValue2} onChange={this.onDateChange.bind(this, 'multiDateValue2')} isMulti showPredefinedRanges buttonLabel="Launch range picker (with default ranges)" />
			</div>
		);
	}
});

module.exports = DateSelectExamples;
