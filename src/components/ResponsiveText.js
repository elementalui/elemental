import React from 'react';
import blacklist from 'blacklist';
import E from '../constants';

module.exports = React.createClass({
	displayName: 'ResponsiveText',
	propTypes: {
		hiddenLG: React.PropTypes.string,
		hiddenMD: React.PropTypes.string,
		hiddenSM: React.PropTypes.string,
		hiddenXS: React.PropTypes.string,
		visibleLG: React.PropTypes.string,
		visibleMD: React.PropTypes.string,
		visibleSM: React.PropTypes.string,
		visibleXS: React.PropTypes.string,
	},
	getInitialState: function() {
		return {
			windowWidth: (typeof window !== 'undefined') ? window.innerWidth : 0
		};
	},
	componentDidMount: function() {
		if (typeof window !== 'undefined') window.addEventListener('resize', this.handleResize);
	},
	componentWillUnmount: function() {
		if (typeof window !== 'undefined') window.removeEventListener('resize', this.handleResize);
	},
	handleResize: function() {
		this.setState({
			windowWidth: (typeof window !== 'undefined') ? window.innerWidth : 0
		});
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
