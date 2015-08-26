import React from 'react/addons';
import blacklist from 'blacklist';
import E from '../constants';

module.exports = React.createClass({
	displayName: 'ResponsiveText',
	propTypes: {
		hiddenXS: React.PropTypes.string,
		hiddenSM: React.PropTypes.string,
		hiddenMD: React.PropTypes.string,
		hiddenLG: React.PropTypes.string,
		visibleXS: React.PropTypes.string,
		visibleSM: React.PropTypes.string,
		visibleMD: React.PropTypes.string,
		visibleLG: React.PropTypes.string,
	},
	getInitialState: function() {
		return {
			windowWidth: window.innerWidth
		};
	},
	handleResize: function(e) {
		this.setState({
			windowWidth: window.innerWidth
		});
	},
	componentDidMount: function() {
		window.addEventListener('resize', this.handleResize);
	},
	componentWillUnmount: function() {
		window.removeEventListener('resize', this.handleResize);
	},
	render() {
		let { hiddenXS, hiddenSM, hiddenMD, hiddenLG, visibleXS, visibleSM, visibleMD, visibleLG } = this.props;
		let { windowWidth } = this.state;

		let text;

		// set widths / flex-basis
		if (windowWidth < E.breakpoint.xs) {
			text = visibleXS || hiddenSM || hiddenMD || hiddenLG;
		} else if (windowWidth < E.breakpoint.sm) {
			text = hiddenXS || visibleSM || hiddenMD || hiddenLG;
		} else if (windowWidth < E.breakpoint.md) {
			text = hiddenXS || hiddenSM || visibleMD || hiddenLG;
		} else {
			text = hiddenXS || hiddenSM || hiddenMD || visibleLG;
		}

		let props = blacklist(this.props, {
			'hiddenXS': true,
			'hiddenSM': true,
			'hiddenMD': true,
			'hiddenLG': true,
			'visibleXS': true,
			'visibleSM': true,
			'visibleMD': true,
			'visibleLG': true,
		});

		return <span {...props}>{text}</span>;
	}
});
