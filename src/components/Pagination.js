var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'Pagination',
	propTypes: {
		className:    React.PropTypes.string,
		currentPage:  React.PropTypes.number,
		first:        React.PropTypes.number,
		last:         React.PropTypes.number,
		next:         React.PropTypes.bool,
		onPageSelect: React.PropTypes.func,
		pages:        React.PropTypes.array,
		previous:     React.PropTypes.bool,
		total:        React.PropTypes.number,
		totalPages:   React.PropTypes.number,
	},
	renderCount() {
		var { first, last, total } = this.props;
		return (
			<div className="Pagination__count">Showing {first} to {last} of {total}</div>
		);
	},
	renderList() {
		let { currentPage, onPageSelect, pages} = this.props;
		if (!pages) return 'No pages...';

		var list = pages.map((pg) => {
			var className = classNames('Pagination__list__item', {
				'is-selected': currentPage === pg
			});
			return <button key={'page_' + pg} className={className} onClick={onPageSelect}>{pg}</button>;
		});

		return (
			<div className="Pagination__list">
				{list}
			</div>
		);
	},
	render() {
		// props
		var props = blacklist(this.props, 'className');
		
		// classes
		var componentClass = classNames('Pagination', this.props.className);
		props.className = componentClass;

		return (
			<div {...props}>
				{this.renderCount()}
				{this.renderList()}
			</div>
		);
	}
});
