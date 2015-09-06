var React = require('react/addons');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'Pagination',
	propTypes: {
		className: React.PropTypes.string,
		currentPage: React.PropTypes.number.isRequired,
		onPageSelect: React.PropTypes.func,
		pageSize: React.PropTypes.number.isRequired,
		plural: React.PropTypes.string,
		singular: React.PropTypes.string,
		style: React.PropTypes.object,
		total: React.PropTypes.number.isRequired,
		limit: React.PropTypes.number
	},
	renderCount () {
		let count = '';
		let { currentPage, pageSize, plural, singular, total } = this.props;
		if (!total) {
			count = 'No ' + (plural || 'records');
		} else if (total > pageSize) {
			let start = (pageSize * (currentPage - 1)) + 1;
			let end = Math.min(start + pageSize - 1, total);
			count = `Showing ${start} to ${end} of ${total}`;
		} else {
			count = 'Showing ' + total;
			if (total > 1 && plural) {
				count += ' ' + plural;
			} else if (total === 1 && singular) {
				count += ' ' + singular;
			}
		}
		return (
			<div className="Pagination__count">{count}</div>
		);
	},
	onPageSelect (i) {
		if (!this.props.onPageSelect) return;
		this.props.onPageSelect(i);
	},
	renderPages () {
		if (this.props.total <= this.props.pageSize) return null;

		let pages = [];
		let { currentPage, pageSize, total, limit } = this.props;
		let totalPages = Math.ceil(total / pageSize);
		let minPage = 0;
		let maxPage = totalPages;

		if(limit && (limit * 2 + 1 < totalPages)) {
			minPage = currentPage - limit - 1;
			maxPage = currentPage + limit;
			
			if (minPage < 0) {
				maxPage = maxPage - minPage;
				minPage = 0;
			} else if (maxPage >= totalPages) {
				minPage = totalPages - 2 * limit;
				maxPage = totalPages;
			}
		}

		for (let i = minPage; i < maxPage; i++) {
			let page = i + 1;
			let current = (page === currentPage);
			let className = classNames('Pagination__list__item', {
				'is-selected': current
			});
			/* eslint-disable no-loop-func */
			pages.push(<button key={'page_' + page} className={className} onClick={() => this.onPageSelect(page)}>{page}</button>);
			/* eslint-enable */
		}

		return (
			<div className="Pagination__list">
				{pages}
			</div>
		);

	},
	render () {
		var className = classNames('Pagination', this.props.className);
		return (
			<div className={className} style={this.props.style}>
				{this.renderCount()}
				{this.renderPages()}
			</div>
		);
	}
});
