import classnames from 'classnames';
import React from 'react';

module.exports = React.createClass({
	displayName: 'SegmentedControl',

	propTypes: {
		className: React.PropTypes.string,
		equalWidthSegments: React.PropTypes.bool,
		onChange: React.PropTypes.func.isRequired,
		options: React.PropTypes.array.isRequired,
		type: React.PropTypes.oneOf('default', 'muted', 'danger', 'info', 'primary', 'success', 'warning'),
		value: React.PropTypes.string
	},

	getDefaultProps () {
		return {
			type: 'default'
		};
	},

	onChange (value) {
		this.props.onChange(value);
	},

	render () {
		let componentClassName = classnames('SegmentedControl', ('SegmentedControl--' + this.props.type), {
			'SegmentedControl--equal-widths': this.props.equalWidthSegments
		}, this.props.className);

		let options = this.props.options.map((op) => {

			let buttonClassName = classnames('SegmentedControl__button', {
				'is-selected': op.value === this.props.value
			});

			return (
				<span key={'option-' + op.value} className="SegmentedControl__item">
					<button type="button" onClick={this.onChange.bind(this, op.value)} className={buttonClassName}>
						{op.label}
					</button>
				</span>
			);
		});

		return <div className={componentClassName}>{options}</div>;
	}
});
