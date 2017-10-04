import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

function Form ({ className, component, type, ...props }) {
	const Component = component;
	props.className = classnames('Form', ('Form--' + type), className);

	return <Component {...props} />;
};

Form.propTypes = {
	component: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
	]),
	type: PropTypes.oneOf(['basic', 'horizontal', 'inline']),
};
Form.defaultProps = {
	component: 'form',
	type: 'basic',
};

export default Form;
