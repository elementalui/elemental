import { expect } from 'chai';
import utils from '../utils';

import Pagination from '../../lib/components/Pagination';

describe('Component: Pagination', function () {

	describe('Feature: Basics', function () {

		it('renders correct number of pages', function () {
			var props = {
					currentPage: 1,
					pageSize: 10,
					total: 30
				},
				list = utils.getDOMNodeWithClass(Pagination, props, 'Pagination__list');

			expect(list.children).to.have.length(3);
		});

		it('adds appropriate class to current page element', function () {
			var props = {
					currentPage: 2,
					pageSize: 10,
					total: 30
				},
				list = utils.getDOMNodeWithClass(Pagination, props, 'Pagination__list'),
				selectedClass = 'is-selected',
				classFilter = function (el) {
					return el.getAttribute('class').includes(selectedClass);
				};

			expect(Array.from(list.children).filter(classFilter)[0].innerHTML).to.equal('2');
		});

		it('renders all pages', function () {
			var props = {
					currentPage: 1,
					pageSize: 10,
					total: 45
				},
				list = utils.getDOMNodeWithClass(Pagination, props, 'Pagination__list');

			expect(Array.from(list.children, utils.getInnerHTML)).to.eql(['1', '2', '3', '4', '5']);
		});

	});

	describe('Feature: Limit', function () {

		let getPages = function (props) {
			return Array.from(utils.getDOMNodeWithClass(Pagination, props, 'Pagination__list').children, utils.getInnerHTML);
		};

		it('renders correctly when on first page', function () {
			var props = {
				currentPage: 1,
				pageSize: 10,
				total: 100,
				limit: 6
			};

			expect(getPages(props)).to.eql(['1', '2', '3', '4', '5', '6', '7', '...']);
		});

		it('renders correctly when on last page', function () {
			var props = {
				currentPage: 10,
				pageSize: 10,
				total: 100,
				limit: 6
			};

			expect(getPages(props)).to.eql(['...', '4', '5', '6', '7', '8', '9', '10']);
		});

		it('renders correctly when on last page and it is not filled in full', function () {
			var props = {
				currentPage: 111,
				pageSize: 10,
				total: 105,
				limit: 6
			};

			expect(getPages(props)).to.eql(['...', '5', '6', '7', '8', '9', '10', '11']);
		});

		it('limits number of pages in the middle of pagination (odd number)', function () {
			var props = {
				currentPage: 10,
				pageSize: 25,
				total: 1000,
				limit: 5
			};

			expect(getPages(props)).to.eql(['...', '8', '9', '10', '11', '12', '...']);
		});

		it('limits number of pages in the middle of pagination (even number)', function () {
			var props = {
				currentPage: 10,
				pageSize: 25,
				total: 1000,
				limit: 4
			};

			expect(getPages(props)).to.eql(['...', '8', '9', '10', '11', '12', '...']);
		});

		it('renders correctly when limit is extremely small', function () {
			var props = {
				currentPage: 4,
				pageSize: 36,
				total: 130,
				limit: 2
			};

			expect(getPages(props)).to.eql(['...', '2', '3', '4']);
		});

	});

});
