var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'Pagination',
	propTypes: {
		className: React.PropTypes.string,
		currentPage: React.PropTypes.number.isRequired,
		limit: React.PropTypes.number,
		onPageSelect: React.PropTypes.func,
		pageSize: React.PropTypes.number.isRequired,
		plural: React.PropTypes.string,
		singular: React.PropTypes.string,
		style: React.PropTypes.object,
		total: React.PropTypes.number.isRequired,
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
		let minPage = 1;
		let maxPage = totalPages;

		if (limit && (limit < totalPages)) {
			let rightLimit = Math.floor(limit / 2);
			let leftLimit =  rightLimit + (limit % 2) - 1;

			minPage = currentPage - leftLimit;
			maxPage = currentPage + rightLimit;

			if (minPage < 1) {
				maxPage = limit;
				minPage = 1;
			}

			if (maxPage > totalPages) {
				minPage = totalPages - limit + 1;
				maxPage = totalPages;
			}
		}

		if (minPage > 1) {
			pages.push(<button key={'page_start'} className={'Pagination__list__item'} onClick={() => this.onPageSelect(1)}>...</button>);
		}

		for (let page = minPage; page <= maxPage; page++) {
			let current = (page === currentPage);
			let className = classNames('Pagination__list__item', {
				'is-selected': current
			});
			/* eslint-disable no-loop-func */
			pages.push(<button key={'page_' + page} className={className} onClick={() => this.onPageSelect(page)}>{page}</button>);
			/* eslint-enable */
		}

		if (maxPage < totalPages) {
			pages.push(<button key={'page_end'} className={'Pagination__list__item'} onClick={() => this.onPageSelect(totalPages)}>...</button>);
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
