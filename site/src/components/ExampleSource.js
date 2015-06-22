var React = require('react');

var ExampleSource = React.createClass({
	fixIndentation (children) {
		if (typeof children !== 'string') return children;
		var lines = children.split('\n').filter(l => l);
		if (!lines.length) return children;
		var indent = /^\t+/.exec(lines[0]);
		if (indent) {
			indent = indent[0].length;
			lines = lines.map(s => s.substr(indent));
		}
		return lines.join('\n');
	},
	render () {
		return (
			<pre className="code-example__pre">
				<code className="code-example__code language-markup">
					{this.fixIndentation(this.props.children)}
				</code>
			</pre>
		);
	}
});

module.exports = ExampleSource;
