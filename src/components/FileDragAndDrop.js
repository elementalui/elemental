const React = require('react');
const classNames = require('classnames');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

/*
	Based on: https://github.com/paramaggarwal/react-dropzone
*/

var Dropzone = createReactClass({
	propTypes: {
		className: PropTypes.string,
		label: PropTypes.string,
		labelActive: PropTypes.string,
		onDrop: PropTypes.func.isRequired,
	},
	getDefaultProps () {
		return {
			label: 'Drag Files Here',
			labelActive: 'Drop to Upload',
		};
	},
	getInitialState () {
		return {
			isDragActive: false,
		};
	},
	onDragLeave () {
		this.setState({
			isDragActive: false,
		});
	},
	onDragOver (e) {
		e.preventDefault();
		e.dataTransfer.dropEffect = 'copy';
		this.setState({
			isDragActive: true,
		});
	},
	onDrop (e) {
		e.preventDefault();

		this.setState({
			isDragActive: false,
		});

		var files;
		if (e.dataTransfer) {
			files = e.dataTransfer.files;
		} else if (e.target) {
			files = e.target.files;
		}

		if (this.props.onDrop) {
			files = Array.prototype.slice.call(files);
			this.props.onDrop(files);
		}
	},
	onClick () {
		this.refs.fileInput.click();
	},
	render () {
		let className = classNames('FileDragAndDrop', {
			active: this.state.isDragActive,
		}, this.props.className);
		return (
			<button className={className} type="button" onClick={this.onClick} onDragLeave={this.onDragLeave} onDragOver={this.onDragOver} onDrop={this.onDrop}>
				<input style={{ display: 'none' }} type="file" multiple ref="fileInput" onChange={this.onDrop} />
				<div className="FileDragAndDrop__label">{this.state.isDragActive ? this.props.labelActive : this.props.label}</div>
				{this.props.children}
			</button>
		);
	},
});

export default Dropzone;
