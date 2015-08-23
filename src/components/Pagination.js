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
		total: React.PropTypes.number.isRequired
	},
	renderCount () {
		let count = '';
		let { currentPage, pageSize, plural, singular, total } = this.props;
		if (!total) {
			count = 'No ' + (plural || 'records');
		} else if (total > pageSize) {
			let start = pageSize * currentPage;
			let end = Math.min(start + pageSize, total);
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
		let { currentPage, pageSize, total } = this.props;

		for (let i = 0; i < Math.ceil(total / pageSize); i++) {
			let page = i + 1;
			let current = (page === currentPage);
			let className = classNames('Pagination__list__item', {
				'is-selected': current
			});
			pages.push(<button key={'page_' + page} className={className} onClick={() => this.onPageSelect(page)}>{page}</button>);
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
