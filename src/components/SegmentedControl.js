import React, { PropTypes } from 'react';
import classnames from 'classnames';

function SegmentedControl ({
	className,
	equalWidthSegments,
	onChange,
	options,
	type,
	value,
	...props,
}) {
	props.className = classnames('SegmentedControl', ('SegmentedControl--' + type), {
		'SegmentedControl--equal-widths': equalWidthSegments,
	}, className);

	return (
		<div {...props}>
			{options.map((op) => {

				let buttonClassName = classnames('SegmentedControl__button', {
					'is-selected': op.value === value,
				});

				return (
					<span key={'option-' + op.value} className="SegmentedControl__item">
						<button type="button" onClick={() => onChange(op.value)} className={buttonClassName}>
							{op.label}
						</button>
					</span>
				);
			})}
		</div>);
};

SegmentedControl.propTypes = {
	className: PropTypes.string,
	equalWidthSegments: PropTypes.bool,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired,
	type: PropTypes.oneOf(['default', 'muted', 'danger', 'info', 'primary', 'success', 'warning']),
	value: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.number,
		PropTypes.string,
	]),
};
SegmentedControl.defaultProps = {
	type: 'default',
};

module.exports = SegmentedControl;
