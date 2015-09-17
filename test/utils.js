import React from 'react/addons'

var TestUtils = React.addons.TestUtils;

export default {

	getComponent: function (Component, props) {
		return TestUtils.renderIntoDocument(
			<Component {...props} />
		);
	},

	getDOMWithClass: function (Component, props, className) {
		var component = this.getComponent(Component, props);
		return TestUtils.findRenderedDOMComponentWithClass(component, className);
	},

	getDOMNodeWithClass: function (Component, props, className) {
		return this.getDOMWithClass(Component, props, className).getDOMNode();
	},

	getInnerHTML: function (dom) {
		return dom.innerHTML;
	}

}
