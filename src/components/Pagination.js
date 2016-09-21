const React = require('react');
const classNames = require('classnames');

const Page = React.createClass({
	displayName: 'Page',
	propTypes: {
		children: React.PropTypes.node,
		label: React.PropTypes.string,
		onSelect: React.PropTypes.func,
		page: React.PropTypes.number,
		selected: React.PropTypes.bool,
	},
	onSelect () {
		this.props.onSelect(this.props.page);
	},
	render () {
		const { children, selected, label } = this.props;
		const className = classNames('Pagination__list__item', {
			'is-selected': selected,
		});
		return (
			<button className={className} onClick={this.onSelect}>
				{children}
			</button>
		);
	},
});

function range(props) {
  const { currentPage, pageSize, total } = props;
  if (!total) {
    return {};
  } else {
    const start = (pageSize * (currentPage - 1)) + 1;
    const end = Math.min(start + pageSize - 1, total);
    return { start, end };
  }
}

module.exports = React.createClass({
	displayName: 'Pagination',
	propTypes: {
		className: React.PropTypes.string,
		currentPage: React.PropTypes.number.isRequired,
		limit: React.PropTypes.number,
    label: React.PropTypes.func,
		onPageSelect: React.PropTypes.func,
		pageSize: React.PropTypes.number.isRequired,
		plural: React.PropTypes.string,
		singular: React.PropTypes.string,
		style: React.PropTypes.object,
		total: React.PropTypes.number.isRequired,
	},
	renderCount () {
		let count = '';
		let { currentPage, pageSize, plural, singular, total, label } = this.props;
    if (typeof label === 'function') {
      const params = Object.assign(range(this.props), { currentPage, pageSize, total });
      count = label(params);
    } else {
      if (!total) {
        count = 'No ' + (plural || 'records');
      } else if (total > pageSize) {
        const { start, end } = range(this.props);
        count = `Showing ${start} to ${end} of ${total}`;
      } else {
        count = 'Showing ' + total;
        if (total > 1 && plural) {
          count += ' ' + plural;
        } else if (total === 1 && singular) {
          count += ' ' + singular;
        }
      }
    }
		return (
			<div className="Pagination__count">{count}</div>
		);
	},
	onPageSelect (page) {
		if (this.props.onPageSelect) {
			this.props.onPageSelect(page);
		}
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
			pages.push(<Page key="page_start" onSelect={this.onPageSelect} page={1}>...</Page>);
		}
		for (let page = minPage; page <= maxPage; page++) {
			let selected = (page === currentPage);
			/* eslint-disable no-loop-func */
			pages.push(<Page key={'page_' + page} selected={selected} onSelect={this.onPageSelect} page={page}>{page}</Page>);
			/* eslint-enable */
		}
		if (maxPage < totalPages) {
			pages.push(<Page key="page_end" onSelect={this.onPageSelect} page={totalPages}>...</Page>);
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
