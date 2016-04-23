exports.getThemeValidator = function(options) {
	function msg(propName, componentName) {
		return 'Invalid prop `' + propName + '` supplied to' +
			' `' + componentName + '`. Validation failed.';
	}

	return function(props, propName, componentName) {
		if (propName !== 'theme') return;

		// Missing the theme object.
		if (typeof props.theme !== 'object') {
			return new Error(msg('theme', componentName));
		}

		if (options.classes) {
			// Missing classes object.
			if (typeof props.theme.classes !== 'object') {
				return new Error(msg('theme.classes', componentName));
			}

			// Missing specific classes.
			for (var i = 0; i < options.classes.length; i++) {
				var name = options.classes[i];
				if (typeof props.theme.classes[name] !== 'string') {
					return new Error(msg('theme.classes.' + name, componentName));
				}
			}

			// Unknown class in the theme.
			for (var name in props.theme.classes) {
				if (options.classes.indexOf(name) === -1) {
					return new Error(msg('theme.classes.' + name, componentName));
				}
			}
		}
	};
};
