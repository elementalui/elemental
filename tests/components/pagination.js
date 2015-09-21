import { expect } from 'chai';
import Test from 'legit-tests';

import Pagination from '../../lib/components/Pagination';

describe('Component: Pagination', function () {

  describe('Feature: Basics', function () {

    it('renders correct number of pages', function () {

      Test(<Pagination currentPage={1} pageSize={10} total={30}/>)
      .find('.Pagination__list')
      .test(({Pagination__list}) => {
        expect(Pagination__list.props.children).to.have.length(3);
      });
    });

    it('adds appropriate class to current page element', function () {

      let classFilter = function (el) {
        return el.props.className.includes('is-selected');
      };

      Test(<Pagination currentPage={2} pageSize={10} total={30}/>)
      .find('.Pagination__list')
      .test(({Pagination__list}) => {
        expect(Array.from(Pagination__list.props.children).filter(classFilter)[0].props.children).to.equal(2);
      });
    });

    it('renders all pages', function () {
      Test(<Pagination currentPage={1} pageSize={10} total={45}/>)
      .find('.Pagination__list')
      .test(({Pagination__list}) => {
        let values = Pagination__list.props.children.map(child=>{
          return child.props.children
        })

        expect(values).to.eql([1, 2, 3, 4, 5]);
      });
    });

  });

  describe('Feature: Limit', function () {

    it('renders correctly when on first page', function () {
      Test(<Pagination currentPage={1} pageSize={10} total={100} limit={6} />)
      .find('.Pagination__list')
      .test(({Pagination__list}) => {
        let values = Pagination__list.props.children.map(child=>{
          return child.props.children
        })

        expect(values).to.eql([1, 2, 3, 4, 5, 6, 7, '...']);
      });

    });

    it('renders correctly when on last page', function () {
      Test(<Pagination currentPage={10} pageSize={10} total={100} limit={6} />)
      .find('.Pagination__list')
      .test(({Pagination__list}) => {
        let values = Pagination__list.props.children.map(child=>{
          return child.props.children
        })

        expect(values).to.eql(['...', 4, 5, 6, 7, 8, 9, 10]);
      });
    });

    it('renders correctly when on last page and it is not filled in full', function () {
      Test(<Pagination currentPage={111} pageSize={10} total={105} limit={6} />)
      .find('.Pagination__list')
      .test(({Pagination__list}) => {
        let values = Pagination__list.props.children.map(child=>{
          return child.props.children
        })

        expect(values).to.eql(['...', 5, 6, 7, 8, 9, 10, 11]);
      });
    });

    it('limits number of pages in the middle of pagination (odd number)', function () {
      Test(<Pagination currentPage={10} pageSize={25} total={1000} limit={5} />)
      .find('.Pagination__list')
      .test(({Pagination__list}) => {
        let values = Pagination__list.props.children.map(child=>{
          return child.props.children
        })

        expect(values).to.eql(['...', 8, 9, 10, 11, 12, '...']);
      });
    });

    it('limits number of pages in the middle of pagination (even number)', function () {
      Test(<Pagination currentPage={10} pageSize={25} total={1000} limit={4} />)
      .find('.Pagination__list')
      .test(({Pagination__list}) => {
        let values = Pagination__list.props.children.map(child=>{
          return child.props.children
        })

        expect(values).to.eql(['...', 8, 9, 10, 11, 12, '...']);
      });
    });

    it('renders correctly when limit is extremely small', function () {
      Test(<Pagination currentPage={4} pageSize={36} total={130} limit={2} />)
      .find('.Pagination__list')
      .test(({Pagination__list}) => {
        let values = Pagination__list.props.children.map(child=>{
          return child.props.children
        })

        expect(values).to.eql(['...', 2, 3, 4]);
      });
    });

  });

});
