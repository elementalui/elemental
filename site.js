require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],2:[function(require,module,exports){
/**
 * Represents a cancellation caused by navigating away
 * before the previous transition has fully resolved.
 */
"use strict";

function Cancellation() {}

module.exports = Cancellation;
},{}],3:[function(require,module,exports){
'use strict';

var invariant = require('react/lib/invariant');
var canUseDOM = require('react/lib/ExecutionEnvironment').canUseDOM;

var History = {

  /**
   * The current number of entries in the history.
   *
   * Note: This property is read-only.
   */
  length: 1,

  /**
   * Sends the browser back one entry in the history.
   */
  back: function back() {
    invariant(canUseDOM, 'Cannot use History.back without a DOM');

    // Do this first so that History.length will
    // be accurate in location change listeners.
    History.length -= 1;

    window.history.back();
  }

};

module.exports = History;
},{"react/lib/ExecutionEnvironment":41,"react/lib/invariant":44}],4:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

/* jshint -W084 */
var PathUtils = require('./PathUtils');

function deepSearch(route, pathname, query) {
  // Check the subtree first to find the most deeply-nested match.
  var childRoutes = route.childRoutes;
  if (childRoutes) {
    var match, childRoute;
    for (var i = 0, len = childRoutes.length; i < len; ++i) {
      childRoute = childRoutes[i];

      if (childRoute.isDefault || childRoute.isNotFound) continue; // Check these in order later.

      if (match = deepSearch(childRoute, pathname, query)) {
        // A route in the subtree matched! Add this route and we're done.
        match.routes.unshift(route);
        return match;
      }
    }
  }

  // No child routes matched; try the default route.
  var defaultRoute = route.defaultRoute;
  if (defaultRoute && (params = PathUtils.extractParams(defaultRoute.path, pathname))) {
    return new Match(pathname, params, query, [route, defaultRoute]);
  } // Does the "not found" route match?
  var notFoundRoute = route.notFoundRoute;
  if (notFoundRoute && (params = PathUtils.extractParams(notFoundRoute.path, pathname))) {
    return new Match(pathname, params, query, [route, notFoundRoute]);
  } // Last attempt: check this route.
  var params = PathUtils.extractParams(route.path, pathname);
  if (params) {
    return new Match(pathname, params, query, [route]);
  }return null;
}

var Match = (function () {
  function Match(pathname, params, query, routes) {
    _classCallCheck(this, Match);

    this.pathname = pathname;
    this.params = params;
    this.query = query;
    this.routes = routes;
  }

  _createClass(Match, null, [{
    key: 'findMatch',

    /**
     * Attempts to match depth-first a route in the given route's
     * subtree against the given path and returns the match if it
     * succeeds, null if no match can be made.
     */
    value: function findMatch(routes, path) {
      var pathname = PathUtils.withoutQuery(path);
      var query = PathUtils.extractQuery(path);
      var match = null;

      for (var i = 0, len = routes.length; match == null && i < len; ++i) match = deepSearch(routes[i], pathname, query);

      return match;
    }
  }]);

  return Match;
})();

module.exports = Match;
},{"./PathUtils":6}],5:[function(require,module,exports){
'use strict';

var PropTypes = require('./PropTypes');

/**
 * A mixin for components that modify the URL.
 *
 * Example:
 *
 *   var MyLink = React.createClass({
 *     mixins: [ Router.Navigation ],
 *     handleClick(event) {
 *       event.preventDefault();
 *       this.transitionTo('aRoute', { the: 'params' }, { the: 'query' });
 *     },
 *     render() {
 *       return (
 *         <a onClick={this.handleClick}>Click me!</a>
 *       );
 *     }
 *   });
 */
var Navigation = {

  contextTypes: {
    router: PropTypes.router.isRequired
  },

  /**
   * Returns an absolute URL path created from the given route
   * name, URL parameters, and query values.
   */
  makePath: function makePath(to, params, query) {
    return this.context.router.makePath(to, params, query);
  },

  /**
   * Returns a string that may safely be used as the href of a
   * link to the route with the given name.
   */
  makeHref: function makeHref(to, params, query) {
    return this.context.router.makeHref(to, params, query);
  },

  /**
   * Transitions to the URL specified in the arguments by pushing
   * a new URL onto the history stack.
   */
  transitionTo: function transitionTo(to, params, query) {
    this.context.router.transitionTo(to, params, query);
  },

  /**
   * Transitions to the URL specified in the arguments by replacing
   * the current URL in the history stack.
   */
  replaceWith: function replaceWith(to, params, query) {
    this.context.router.replaceWith(to, params, query);
  },

  /**
   * Transitions to the previous URL.
   */
  goBack: function goBack() {
    return this.context.router.goBack();
  }

};

module.exports = Navigation;
},{"./PropTypes":7}],6:[function(require,module,exports){
'use strict';

var invariant = require('react/lib/invariant');
var assign = require('object-assign');
var qs = require('qs');

var paramCompileMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|[*.()\[\]\\+|{}^$]/g;
var paramInjectMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$?]*[?]?)|[*]/g;
var paramInjectTrailingSlashMatcher = /\/\/\?|\/\?\/|\/\?/g;
var queryMatcher = /\?(.*)$/;

var _compiledPatterns = {};

function compilePattern(pattern) {
  if (!(pattern in _compiledPatterns)) {
    var paramNames = [];
    var source = pattern.replace(paramCompileMatcher, function (match, paramName) {
      if (paramName) {
        paramNames.push(paramName);
        return '([^/?#]+)';
      } else if (match === '*') {
        paramNames.push('splat');
        return '(.*?)';
      } else {
        return '\\' + match;
      }
    });

    _compiledPatterns[pattern] = {
      matcher: new RegExp('^' + source + '$', 'i'),
      paramNames: paramNames
    };
  }

  return _compiledPatterns[pattern];
}

var PathUtils = {

  /**
   * Returns true if the given path is absolute.
   */
  isAbsolute: function isAbsolute(path) {
    return path.charAt(0) === '/';
  },

  /**
   * Joins two URL paths together.
   */
  join: function join(a, b) {
    return a.replace(/\/*$/, '/') + b;
  },

  /**
   * Returns an array of the names of all parameters in the given pattern.
   */
  extractParamNames: function extractParamNames(pattern) {
    return compilePattern(pattern).paramNames;
  },

  /**
   * Extracts the portions of the given URL path that match the given pattern
   * and returns an object of param name => value pairs. Returns null if the
   * pattern does not match the given path.
   */
  extractParams: function extractParams(pattern, path) {
    var _compilePattern = compilePattern(pattern);

    var matcher = _compilePattern.matcher;
    var paramNames = _compilePattern.paramNames;

    var match = path.match(matcher);

    if (!match) {
      return null;
    }var params = {};

    paramNames.forEach(function (paramName, index) {
      params[paramName] = match[index + 1];
    });

    return params;
  },

  /**
   * Returns a version of the given route path with params interpolated. Throws
   * if there is a dynamic segment of the route path for which there is no param.
   */
  injectParams: function injectParams(pattern, params) {
    params = params || {};

    var splatIndex = 0;

    return pattern.replace(paramInjectMatcher, function (match, paramName) {
      paramName = paramName || 'splat';

      // If param is optional don't check for existence
      if (paramName.slice(-1) === '?') {
        paramName = paramName.slice(0, -1);

        if (params[paramName] == null) return '';
      } else {
        invariant(params[paramName] != null, 'Missing "%s" parameter for path "%s"', paramName, pattern);
      }

      var segment;
      if (paramName === 'splat' && Array.isArray(params[paramName])) {
        segment = params[paramName][splatIndex++];

        invariant(segment != null, 'Missing splat # %s for path "%s"', splatIndex, pattern);
      } else {
        segment = params[paramName];
      }

      return segment;
    }).replace(paramInjectTrailingSlashMatcher, '/');
  },

  /**
   * Returns an object that is the result of parsing any query string contained
   * in the given path, null if the path contains no query string.
   */
  extractQuery: function extractQuery(path) {
    var match = path.match(queryMatcher);
    return match && qs.parse(match[1]);
  },

  /**
   * Returns a version of the given path without the query string.
   */
  withoutQuery: function withoutQuery(path) {
    return path.replace(queryMatcher, '');
  },

  /**
   * Returns a version of the given path with the parameters in the given
   * query merged into the query string.
   */
  withQuery: function withQuery(path, query) {
    var existingQuery = PathUtils.extractQuery(path);

    if (existingQuery) query = query ? assign(existingQuery, query) : existingQuery;

    var queryString = qs.stringify(query, { arrayFormat: 'brackets' });

    if (queryString) {
      return PathUtils.withoutQuery(path) + '?' + queryString;
    }return PathUtils.withoutQuery(path);
  }

};

module.exports = PathUtils;
},{"object-assign":35,"qs":36,"react/lib/invariant":44}],7:[function(require,module,exports){
'use strict';

var assign = require('react/lib/Object.assign');
var ReactPropTypes = require('react').PropTypes;
var Route = require('./Route');

var PropTypes = assign({}, ReactPropTypes, {

  /**
   * Indicates that a prop should be falsy.
   */
  falsy: function falsy(props, propName, componentName) {
    if (props[propName]) {
      return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
    }
  },

  /**
   * Indicates that a prop should be a Route object.
   */
  route: ReactPropTypes.instanceOf(Route),

  /**
   * Indicates that a prop should be a Router object.
   */
  //router: ReactPropTypes.instanceOf(Router) // TODO
  router: ReactPropTypes.func

});

module.exports = PropTypes;
},{"./Route":9,"react":undefined,"react/lib/Object.assign":42}],8:[function(require,module,exports){
/**
 * Encapsulates a redirect to the given route.
 */
"use strict";

function Redirect(to, params, query) {
  this.to = to;
  this.params = params;
  this.query = query;
}

module.exports = Redirect;
},{}],9:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var assign = require('react/lib/Object.assign');
var invariant = require('react/lib/invariant');
var warning = require('react/lib/warning');
var PathUtils = require('./PathUtils');

var _currentRoute;

var Route = (function () {
  function Route(name, path, ignoreScrollBehavior, isDefault, isNotFound, onEnter, onLeave, handler) {
    _classCallCheck(this, Route);

    this.name = name;
    this.path = path;
    this.paramNames = PathUtils.extractParamNames(this.path);
    this.ignoreScrollBehavior = !!ignoreScrollBehavior;
    this.isDefault = !!isDefault;
    this.isNotFound = !!isNotFound;
    this.onEnter = onEnter;
    this.onLeave = onLeave;
    this.handler = handler;
  }

  _createClass(Route, [{
    key: 'appendChild',

    /**
     * Appends the given route to this route's child routes.
     */
    value: function appendChild(route) {
      invariant(route instanceof Route, 'route.appendChild must use a valid Route');

      if (!this.childRoutes) this.childRoutes = [];

      this.childRoutes.push(route);
    }
  }, {
    key: 'toString',
    value: function toString() {
      var string = '<Route';

      if (this.name) string += ' name="' + this.name + '"';

      string += ' path="' + this.path + '">';

      return string;
    }
  }], [{
    key: 'createRoute',

    /**
     * Creates and returns a new route. Options may be a URL pathname string
     * with placeholders for named params or an object with any of the following
     * properties:
     *
     * - name                     The name of the route. This is used to lookup a
     *                            route relative to its parent route and should be
     *                            unique among all child routes of the same parent
     * - path                     A URL pathname string with optional placeholders
     *                            that specify the names of params to extract from
     *                            the URL when the path matches. Defaults to `/${name}`
     *                            when there is a name given, or the path of the parent
     *                            route, or /
     * - ignoreScrollBehavior     True to make this route (and all descendants) ignore
     *                            the scroll behavior of the router
     * - isDefault                True to make this route the default route among all
     *                            its siblings
     * - isNotFound               True to make this route the "not found" route among
     *                            all its siblings
     * - onEnter                  A transition hook that will be called when the
     *                            router is going to enter this route
     * - onLeave                  A transition hook that will be called when the
     *                            router is going to leave this route
     * - handler                  A React component that will be rendered when
     *                            this route is active
     * - parentRoute              The parent route to use for this route. This option
     *                            is automatically supplied when creating routes inside
     *                            the callback to another invocation of createRoute. You
     *                            only ever need to use this when declaring routes
     *                            independently of one another to manually piece together
     *                            the route hierarchy
     *
     * The callback may be used to structure your route hierarchy. Any call to
     * createRoute, createDefaultRoute, createNotFoundRoute, or createRedirect
     * inside the callback automatically uses this route as its parent.
     */
    value: function createRoute(options, callback) {
      options = options || {};

      if (typeof options === 'string') options = { path: options };

      var parentRoute = _currentRoute;

      if (parentRoute) {
        warning(options.parentRoute == null || options.parentRoute === parentRoute, 'You should not use parentRoute with createRoute inside another route\'s child callback; it is ignored');
      } else {
        parentRoute = options.parentRoute;
      }

      var name = options.name;
      var path = options.path || name;

      if (path && !(options.isDefault || options.isNotFound)) {
        if (PathUtils.isAbsolute(path)) {
          if (parentRoute) {
            invariant(path === parentRoute.path || parentRoute.paramNames.length === 0, 'You cannot nest path "%s" inside "%s"; the parent requires URL parameters', path, parentRoute.path);
          }
        } else if (parentRoute) {
          // Relative paths extend their parent.
          path = PathUtils.join(parentRoute.path, path);
        } else {
          path = '/' + path;
        }
      } else {
        path = parentRoute ? parentRoute.path : '/';
      }

      if (options.isNotFound && !/\*$/.test(path)) path += '*'; // Auto-append * to the path of not found routes.

      var route = new Route(name, path, options.ignoreScrollBehavior, options.isDefault, options.isNotFound, options.onEnter, options.onLeave, options.handler);

      if (parentRoute) {
        if (route.isDefault) {
          invariant(parentRoute.defaultRoute == null, '%s may not have more than one default route', parentRoute);

          parentRoute.defaultRoute = route;
        } else if (route.isNotFound) {
          invariant(parentRoute.notFoundRoute == null, '%s may not have more than one not found route', parentRoute);

          parentRoute.notFoundRoute = route;
        }

        parentRoute.appendChild(route);
      }

      // Any routes created in the callback
      // use this route as their parent.
      if (typeof callback === 'function') {
        var currentRoute = _currentRoute;
        _currentRoute = route;
        callback.call(route, route);
        _currentRoute = currentRoute;
      }

      return route;
    }
  }, {
    key: 'createDefaultRoute',

    /**
     * Creates and returns a route that is rendered when its parent matches
     * the current URL.
     */
    value: function createDefaultRoute(options) {
      return Route.createRoute(assign({}, options, { isDefault: true }));
    }
  }, {
    key: 'createNotFoundRoute',

    /**
     * Creates and returns a route that is rendered when its parent matches
     * the current URL but none of its siblings do.
     */
    value: function createNotFoundRoute(options) {
      return Route.createRoute(assign({}, options, { isNotFound: true }));
    }
  }, {
    key: 'createRedirect',

    /**
     * Creates and returns a route that automatically redirects the transition
     * to another route. In addition to the normal options to createRoute, this
     * function accepts the following options:
     *
     * - from         An alias for the `path` option. Defaults to *
     * - to           The path/route/route name to redirect to
     * - params       The params to use in the redirect URL. Defaults
     *                to using the current params
     * - query        The query to use in the redirect URL. Defaults
     *                to using the current query
     */
    value: function createRedirect(options) {
      return Route.createRoute(assign({}, options, {
        path: options.path || options.from || '*',
        onEnter: function onEnter(transition, params, query) {
          transition.redirect(options.to, options.params || params, options.query || query);
        }
      }));
    }
  }]);

  return Route;
})();

module.exports = Route;
},{"./PathUtils":6,"react/lib/Object.assign":42,"react/lib/invariant":44,"react/lib/warning":45}],10:[function(require,module,exports){
'use strict';

var invariant = require('react/lib/invariant');
var canUseDOM = require('react/lib/ExecutionEnvironment').canUseDOM;
var getWindowScrollPosition = require('./getWindowScrollPosition');

function shouldUpdateScroll(state, prevState) {
  if (!prevState) {
    return true;
  } // Don't update scroll position when only the query has changed.
  if (state.pathname === prevState.pathname) {
    return false;
  }var routes = state.routes;
  var prevRoutes = prevState.routes;

  var sharedAncestorRoutes = routes.filter(function (route) {
    return prevRoutes.indexOf(route) !== -1;
  });

  return !sharedAncestorRoutes.some(function (route) {
    return route.ignoreScrollBehavior;
  });
}

/**
 * Provides the router with the ability to manage window scroll position
 * according to its scroll behavior.
 */
var ScrollHistory = {

  statics: {

    /**
     * Records curent scroll position as the last known position for the given URL path.
     */
    recordScrollPosition: function recordScrollPosition(path) {
      if (!this.scrollHistory) this.scrollHistory = {};

      this.scrollHistory[path] = getWindowScrollPosition();
    },

    /**
     * Returns the last known scroll position for the given URL path.
     */
    getScrollPosition: function getScrollPosition(path) {
      if (!this.scrollHistory) this.scrollHistory = {};

      return this.scrollHistory[path] || null;
    }

  },

  componentWillMount: function componentWillMount() {
    invariant(this.constructor.getScrollBehavior() == null || canUseDOM, 'Cannot use scroll behavior without a DOM');
  },

  componentDidMount: function componentDidMount() {
    this._updateScroll();
  },

  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    this._updateScroll(prevState);
  },

  _updateScroll: function _updateScroll(prevState) {
    if (!shouldUpdateScroll(this.state, prevState)) {
      return;
    }var scrollBehavior = this.constructor.getScrollBehavior();

    if (scrollBehavior) scrollBehavior.updateScrollPosition(this.constructor.getScrollPosition(this.state.path), this.state.action);
  }

};

module.exports = ScrollHistory;
},{"./getWindowScrollPosition":25,"react/lib/ExecutionEnvironment":41,"react/lib/invariant":44}],11:[function(require,module,exports){
'use strict';

var PropTypes = require('./PropTypes');

/**
 * A mixin for components that need to know the path, routes, URL
 * params and query that are currently active.
 *
 * Example:
 *
 *   var AboutLink = React.createClass({
 *     mixins: [ Router.State ],
 *     render() {
 *       var className = this.props.className;
 *
 *       if (this.isActive('about'))
 *         className += ' is-active';
 *
 *       return React.DOM.a({ className: className }, this.props.children);
 *     }
 *   });
 */
var State = {

  contextTypes: {
    router: PropTypes.router.isRequired
  },

  /**
   * Returns the current URL path.
   */
  getPath: function getPath() {
    return this.context.router.getCurrentPath();
  },

  /**
   * Returns the current URL path without the query string.
   */
  getPathname: function getPathname() {
    return this.context.router.getCurrentPathname();
  },

  /**
   * Returns an object of the URL params that are currently active.
   */
  getParams: function getParams() {
    return this.context.router.getCurrentParams();
  },

  /**
   * Returns an object of the query params that are currently active.
   */
  getQuery: function getQuery() {
    return this.context.router.getCurrentQuery();
  },

  /**
   * Returns an array of the routes that are currently active.
   */
  getRoutes: function getRoutes() {
    return this.context.router.getCurrentRoutes();
  },

  /**
   * A helper method to determine if a given route, params, and query
   * are active.
   */
  isActive: function isActive(to, params, query) {
    return this.context.router.isActive(to, params, query);
  }

};

module.exports = State;
},{"./PropTypes":7}],12:[function(require,module,exports){
/* jshint -W058 */

'use strict';

var Cancellation = require('./Cancellation');
var Redirect = require('./Redirect');

/**
 * Encapsulates a transition to a given path.
 *
 * The willTransitionTo and willTransitionFrom handlers receive
 * an instance of this class as their first argument.
 */
function Transition(path, retry) {
  this.path = path;
  this.abortReason = null;
  // TODO: Change this to router.retryTransition(transition)
  this.retry = retry.bind(this);
}

Transition.prototype.abort = function (reason) {
  if (this.abortReason == null) this.abortReason = reason || 'ABORT';
};

Transition.prototype.redirect = function (to, params, query) {
  this.abort(new Redirect(to, params, query));
};

Transition.prototype.cancel = function () {
  this.abort(new Cancellation());
};

Transition.from = function (transition, routes, components, callback) {
  routes.reduce(function (callback, route, index) {
    return function (error) {
      if (error || transition.abortReason) {
        callback(error);
      } else if (route.onLeave) {
        try {
          route.onLeave(transition, components[index], callback);

          // If there is no callback in the argument list, call it automatically.
          if (route.onLeave.length < 3) callback();
        } catch (e) {
          callback(e);
        }
      } else {
        callback();
      }
    };
  }, callback)();
};

Transition.to = function (transition, routes, params, query, callback) {
  routes.reduceRight(function (callback, route) {
    return function (error) {
      if (error || transition.abortReason) {
        callback(error);
      } else if (route.onEnter) {
        try {
          route.onEnter(transition, params, query, callback);

          // If there is no callback in the argument list, call it automatically.
          if (route.onEnter.length < 4) callback();
        } catch (e) {
          callback(e);
        }
      } else {
        callback();
      }
    };
  }, callback)();
};

module.exports = Transition;
},{"./Cancellation":2,"./Redirect":8}],13:[function(require,module,exports){
/**
 * Actions that modify the URL.
 */
'use strict';

var LocationActions = {

  /**
   * Indicates a new location is being pushed to the history stack.
   */
  PUSH: 'push',

  /**
   * Indicates the current location should be replaced.
   */
  REPLACE: 'replace',

  /**
   * Indicates the most recent entry should be removed from the history stack.
   */
  POP: 'pop'

};

module.exports = LocationActions;
},{}],14:[function(require,module,exports){
'use strict';

var LocationActions = require('../actions/LocationActions');

/**
 * A scroll behavior that attempts to imitate the default behavior
 * of modern browsers.
 */
var ImitateBrowserBehavior = {

  updateScrollPosition: function updateScrollPosition(position, actionType) {
    switch (actionType) {
      case LocationActions.PUSH:
      case LocationActions.REPLACE:
        window.scrollTo(0, 0);
        break;
      case LocationActions.POP:
        if (position) {
          window.scrollTo(position.x, position.y);
        } else {
          window.scrollTo(0, 0);
        }
        break;
    }
  }

};

module.exports = ImitateBrowserBehavior;
},{"../actions/LocationActions":13}],15:[function(require,module,exports){
/**
 * A scroll behavior that always scrolls to the top of the page
 * after a transition.
 */
"use strict";

var ScrollToTopBehavior = {

  updateScrollPosition: function updateScrollPosition() {
    window.scrollTo(0, 0);
  }

};

module.exports = ScrollToTopBehavior;
},{}],16:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

/**
 * This component is necessary to get around a context warning
 * present in React 0.13.0. It sovles this by providing a separation
 * between the "owner" and "parent" contexts.
 */

var React = require('react');

var ContextWrapper = (function (_React$Component) {
  function ContextWrapper() {
    _classCallCheck(this, ContextWrapper);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(ContextWrapper, _React$Component);

  _createClass(ContextWrapper, [{
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return ContextWrapper;
})(React.Component);

module.exports = ContextWrapper;
},{"react":undefined}],17:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var PropTypes = require('../PropTypes');
var RouteHandler = require('./RouteHandler');
var Route = require('./Route');

/**
 * A <DefaultRoute> component is a special kind of <Route> that
 * renders when its parent matches but none of its siblings do.
 * Only one such route may be used at any given level in the
 * route hierarchy.
 */

var DefaultRoute = (function (_Route) {
  function DefaultRoute() {
    _classCallCheck(this, DefaultRoute);

    if (_Route != null) {
      _Route.apply(this, arguments);
    }
  }

  _inherits(DefaultRoute, _Route);

  return DefaultRoute;
})(Route);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

DefaultRoute.propTypes = {
  name: PropTypes.string,
  path: PropTypes.falsy,
  children: PropTypes.falsy,
  handler: PropTypes.func.isRequired
};

DefaultRoute.defaultProps = {
  handler: RouteHandler
};

module.exports = DefaultRoute;
},{"../PropTypes":7,"./Route":21,"./RouteHandler":22}],18:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var React = require('react');
var assign = require('react/lib/Object.assign');
var PropTypes = require('../PropTypes');

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

/**
 * <Link> components are used to create an <a> element that links to a route.
 * When that route is active, the link gets an "active" class name (or the
 * value of its `activeClassName` prop).
 *
 * For example, assuming you have the following route:
 *
 *   <Route name="showPost" path="/posts/:postID" handler={Post}/>
 *
 * You could use the following component to link to that route:
 *
 *   <Link to="showPost" params={{ postID: "123" }} />
 *
 * In addition to params, links may pass along query string parameters
 * using the `query` prop.
 *
 *   <Link to="showPost" params={{ postID: "123" }} query={{ show:true }}/>
 */

var Link = (function (_React$Component) {
  function Link() {
    _classCallCheck(this, Link);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Link, _React$Component);

  _createClass(Link, [{
    key: 'handleClick',
    value: function handleClick(event) {
      var allowTransition = true;
      var clickResult;

      if (this.props.onClick) clickResult = this.props.onClick(event);

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }if (clickResult === false || event.defaultPrevented === true) allowTransition = false;

      event.preventDefault();

      if (allowTransition) this.context.router.transitionTo(this.props.to, this.props.params, this.props.query);
    }
  }, {
    key: 'getHref',

    /**
     * Returns the value of the "href" attribute to use on the DOM element.
     */
    value: function getHref() {
      return this.context.router.makeHref(this.props.to, this.props.params, this.props.query);
    }
  }, {
    key: 'getClassName',

    /**
     * Returns the value of the "class" attribute to use on the DOM element, which contains
     * the value of the activeClassName property when this <Link> is active.
     */
    value: function getClassName() {
      var className = this.props.className;

      if (this.getActiveState()) className += ' ' + this.props.activeClassName;

      return className;
    }
  }, {
    key: 'getActiveState',
    value: function getActiveState() {
      return this.context.router.isActive(this.props.to, this.props.params, this.props.query);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = assign({}, this.props, {
        href: this.getHref(),
        className: this.getClassName(),
        onClick: this.handleClick.bind(this)
      });

      if (props.activeStyle && this.getActiveState()) props.style = props.activeStyle;

      return React.DOM.a(props, this.props.children);
    }
  }]);

  return Link;
})(React.Component);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

Link.contextTypes = {
  router: PropTypes.router.isRequired
};

Link.propTypes = {
  activeClassName: PropTypes.string.isRequired,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.route]).isRequired,
  params: PropTypes.object,
  query: PropTypes.object,
  activeStyle: PropTypes.object,
  onClick: PropTypes.func
};

Link.defaultProps = {
  activeClassName: 'active',
  className: ''
};

module.exports = Link;
},{"../PropTypes":7,"react":undefined,"react/lib/Object.assign":42}],19:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var PropTypes = require('../PropTypes');
var RouteHandler = require('./RouteHandler');
var Route = require('./Route');

/**
 * A <NotFoundRoute> is a special kind of <Route> that
 * renders when the beginning of its parent's path matches
 * but none of its siblings do, including any <DefaultRoute>.
 * Only one such route may be used at any given level in the
 * route hierarchy.
 */

var NotFoundRoute = (function (_Route) {
  function NotFoundRoute() {
    _classCallCheck(this, NotFoundRoute);

    if (_Route != null) {
      _Route.apply(this, arguments);
    }
  }

  _inherits(NotFoundRoute, _Route);

  return NotFoundRoute;
})(Route);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

NotFoundRoute.propTypes = {
  name: PropTypes.string,
  path: PropTypes.falsy,
  children: PropTypes.falsy,
  handler: PropTypes.func.isRequired
};

NotFoundRoute.defaultProps = {
  handler: RouteHandler
};

module.exports = NotFoundRoute;
},{"../PropTypes":7,"./Route":21,"./RouteHandler":22}],20:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var PropTypes = require('../PropTypes');
var Route = require('./Route');

/**
 * A <Redirect> component is a special kind of <Route> that always
 * redirects to another route when it matches.
 */

var Redirect = (function (_Route) {
  function Redirect() {
    _classCallCheck(this, Redirect);

    if (_Route != null) {
      _Route.apply(this, arguments);
    }
  }

  _inherits(Redirect, _Route);

  return Redirect;
})(Route);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

Redirect.propTypes = {
  path: PropTypes.string,
  from: PropTypes.string, // Alias for path.
  to: PropTypes.string,
  handler: PropTypes.falsy
};

// Redirects should not have a default handler
Redirect.defaultProps = {};

module.exports = Redirect;
},{"../PropTypes":7,"./Route":21}],21:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var React = require('react');
var invariant = require('react/lib/invariant');
var PropTypes = require('../PropTypes');
var RouteHandler = require('./RouteHandler');

/**
 * <Route> components specify components that are rendered to the page when the
 * URL matches a given pattern.
 *
 * Routes are arranged in a nested tree structure. When a new URL is requested,
 * the tree is searched depth-first to find a route whose path matches the URL.
 * When one is found, all routes in the tree that lead to it are considered
 * "active" and their components are rendered into the DOM, nested in the same
 * order as they are in the tree.
 *
 * The preferred way to configure a router is using JSX. The XML-like syntax is
 * a great way to visualize how routes are laid out in an application.
 *
 *   var routes = [
 *     <Route handler={App}>
 *       <Route name="login" handler={Login}/>
 *       <Route name="logout" handler={Logout}/>
 *       <Route name="about" handler={About}/>
 *     </Route>
 *   ];
 *   
 *   Router.run(routes, function (Handler) {
 *     React.render(<Handler/>, document.body);
 *   });
 *
 * Handlers for Route components that contain children can render their active
 * child route using a <RouteHandler> element.
 *
 *   var App = React.createClass({
 *     render: function () {
 *       return (
 *         <div class="application">
 *           <RouteHandler/>
 *         </div>
 *       );
 *     }
 *   });
 *
 * If no handler is provided for the route, it will render a matched child route.
 */

var Route = (function (_React$Component) {
  function Route() {
    _classCallCheck(this, Route);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Route, _React$Component);

  _createClass(Route, [{
    key: 'render',
    value: function render() {
      invariant(false, '%s elements are for router configuration only and should not be rendered', this.constructor.name);
    }
  }]);

  return Route;
})(React.Component);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

Route.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  handler: PropTypes.func,
  ignoreScrollBehavior: PropTypes.bool
};

Route.defaultProps = {
  handler: RouteHandler
};

module.exports = Route;
},{"../PropTypes":7,"./RouteHandler":22,"react":undefined,"react/lib/invariant":44}],22:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var React = require('react');
var ContextWrapper = require('./ContextWrapper');
var assign = require('react/lib/Object.assign');
var PropTypes = require('../PropTypes');

var REF_NAME = '__routeHandler__';

/**
 * A <RouteHandler> component renders the active child route handler
 * when routes are nested.
 */

var RouteHandler = (function (_React$Component) {
  function RouteHandler() {
    _classCallCheck(this, RouteHandler);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(RouteHandler, _React$Component);

  _createClass(RouteHandler, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        routeDepth: this.context.routeDepth + 1
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._updateRouteComponent(this.refs[REF_NAME]);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._updateRouteComponent(this.refs[REF_NAME]);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._updateRouteComponent(null);
    }
  }, {
    key: '_updateRouteComponent',
    value: function _updateRouteComponent(component) {
      this.context.router.setRouteComponentAtDepth(this.getRouteDepth(), component);
    }
  }, {
    key: 'getRouteDepth',
    value: function getRouteDepth() {
      return this.context.routeDepth;
    }
  }, {
    key: 'createChildRouteHandler',
    value: function createChildRouteHandler(props) {
      var route = this.context.router.getRouteAtDepth(this.getRouteDepth());

      if (route == null) {
        return null;
      }var childProps = assign({}, props || this.props, {
        ref: REF_NAME,
        params: this.context.router.getCurrentParams(),
        query: this.context.router.getCurrentQuery()
      });

      return React.createElement(route.handler, childProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var handler = this.createChildRouteHandler();
      // <script/> for things like <CSSTransitionGroup/> that don't like null
      return handler ? React.createElement(
        ContextWrapper,
        null,
        handler
      ) : React.createElement('script', null);
    }
  }]);

  return RouteHandler;
})(React.Component);

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

RouteHandler.contextTypes = {
  routeDepth: PropTypes.number.isRequired,
  router: PropTypes.router.isRequired
};

RouteHandler.childContextTypes = {
  routeDepth: PropTypes.number.isRequired
};

module.exports = RouteHandler;
},{"../PropTypes":7,"./ContextWrapper":16,"react":undefined,"react/lib/Object.assign":42}],23:[function(require,module,exports){
(function (process){
/* jshint -W058 */
'use strict';

var React = require('react');
var warning = require('react/lib/warning');
var invariant = require('react/lib/invariant');
var canUseDOM = require('react/lib/ExecutionEnvironment').canUseDOM;
var LocationActions = require('./actions/LocationActions');
var ImitateBrowserBehavior = require('./behaviors/ImitateBrowserBehavior');
var HashLocation = require('./locations/HashLocation');
var HistoryLocation = require('./locations/HistoryLocation');
var RefreshLocation = require('./locations/RefreshLocation');
var StaticLocation = require('./locations/StaticLocation');
var ScrollHistory = require('./ScrollHistory');
var createRoutesFromReactChildren = require('./createRoutesFromReactChildren');
var isReactChildren = require('./isReactChildren');
var Transition = require('./Transition');
var PropTypes = require('./PropTypes');
var Redirect = require('./Redirect');
var History = require('./History');
var Cancellation = require('./Cancellation');
var Match = require('./Match');
var Route = require('./Route');
var supportsHistory = require('./supportsHistory');
var PathUtils = require('./PathUtils');

/**
 * The default location for new routers.
 */
var DEFAULT_LOCATION = canUseDOM ? HashLocation : '/';

/**
 * The default scroll behavior for new routers.
 */
var DEFAULT_SCROLL_BEHAVIOR = canUseDOM ? ImitateBrowserBehavior : null;

function hasProperties(object, properties) {
  for (var propertyName in properties) if (properties.hasOwnProperty(propertyName) && object[propertyName] !== properties[propertyName]) {
    return false;
  }return true;
}

function hasMatch(routes, route, prevParams, nextParams, prevQuery, nextQuery) {
  return routes.some(function (r) {
    if (r !== route) return false;

    var paramNames = route.paramNames;
    var paramName;

    // Ensure that all params the route cares about did not change.
    for (var i = 0, len = paramNames.length; i < len; ++i) {
      paramName = paramNames[i];

      if (nextParams[paramName] !== prevParams[paramName]) return false;
    }

    // Ensure the query hasn't changed.
    return hasProperties(prevQuery, nextQuery) && hasProperties(nextQuery, prevQuery);
  });
}

function addRoutesToNamedRoutes(routes, namedRoutes) {
  var route;
  for (var i = 0, len = routes.length; i < len; ++i) {
    route = routes[i];

    if (route.name) {
      invariant(namedRoutes[route.name] == null, 'You may not have more than one route named "%s"', route.name);

      namedRoutes[route.name] = route;
    }

    if (route.childRoutes) addRoutesToNamedRoutes(route.childRoutes, namedRoutes);
  }
}

function routeIsActive(activeRoutes, routeName) {
  return activeRoutes.some(function (route) {
    return route.name === routeName;
  });
}

function paramsAreActive(activeParams, params) {
  for (var property in params) if (String(activeParams[property]) !== String(params[property])) {
    return false;
  }return true;
}

function queryIsActive(activeQuery, query) {
  for (var property in query) if (String(activeQuery[property]) !== String(query[property])) {
    return false;
  }return true;
}

/**
 * Creates and returns a new router using the given options. A router
 * is a ReactComponent class that knows how to react to changes in the
 * URL and keep the contents of the page in sync.
 *
 * Options may be any of the following:
 *
 * - routes           (required) The route config
 * - location         The location to use. Defaults to HashLocation when
 *                    the DOM is available, "/" otherwise
 * - scrollBehavior   The scroll behavior to use. Defaults to ImitateBrowserBehavior
 *                    when the DOM is available, null otherwise
 * - onError          A function that is used to handle errors
 * - onAbort          A function that is used to handle aborted transitions
 *
 * When rendering in a server-side environment, the location should simply
 * be the URL path that was used in the request, including the query string.
 */
function createRouter(options) {
  options = options || {};

  if (isReactChildren(options)) options = { routes: options };

  var mountedComponents = [];
  var location = options.location || DEFAULT_LOCATION;
  var scrollBehavior = options.scrollBehavior || DEFAULT_SCROLL_BEHAVIOR;
  var state = {};
  var nextState = {};
  var pendingTransition = null;
  var dispatchHandler = null;

  if (typeof location === 'string') location = new StaticLocation(location);

  if (location instanceof StaticLocation) {
    warning(!canUseDOM || process.env.NODE_ENV === 'test', 'You should not use a static location in a DOM environment because ' + 'the router will not be kept in sync with the current URL');
  } else {
    invariant(canUseDOM || location.needsDOM === false, 'You cannot use %s without a DOM', location);
  }

  // Automatically fall back to full page refreshes in
  // browsers that don't support the HTML history API.
  if (location === HistoryLocation && !supportsHistory()) location = RefreshLocation;

  var Router = React.createClass({

    displayName: 'Router',

    statics: {

      isRunning: false,

      cancelPendingTransition: function cancelPendingTransition() {
        if (pendingTransition) {
          pendingTransition.cancel();
          pendingTransition = null;
        }
      },

      clearAllRoutes: function clearAllRoutes() {
        Router.cancelPendingTransition();
        Router.namedRoutes = {};
        Router.routes = [];
      },

      /**
       * Adds routes to this router from the given children object (see ReactChildren).
       */
      addRoutes: function addRoutes(routes) {
        if (isReactChildren(routes)) routes = createRoutesFromReactChildren(routes);

        addRoutesToNamedRoutes(routes, Router.namedRoutes);

        Router.routes.push.apply(Router.routes, routes);
      },

      /**
       * Replaces routes of this router from the given children object (see ReactChildren).
       */
      replaceRoutes: function replaceRoutes(routes) {
        Router.clearAllRoutes();
        Router.addRoutes(routes);
        Router.refresh();
      },

      /**
       * Performs a match of the given path against this router and returns an object
       * with the { routes, params, pathname, query } that match. Returns null if no
       * match can be made.
       */
      match: function match(path) {
        return Match.findMatch(Router.routes, path);
      },

      /**
       * Returns an absolute URL path created from the given route
       * name, URL parameters, and query.
       */
      makePath: function makePath(to, params, query) {
        var path;
        if (PathUtils.isAbsolute(to)) {
          path = to;
        } else {
          var route = to instanceof Route ? to : Router.namedRoutes[to];

          invariant(route instanceof Route, 'Cannot find a route named "%s"', to);

          path = route.path;
        }

        return PathUtils.withQuery(PathUtils.injectParams(path, params), query);
      },

      /**
       * Returns a string that may safely be used as the href of a link
       * to the route with the given name, URL parameters, and query.
       */
      makeHref: function makeHref(to, params, query) {
        var path = Router.makePath(to, params, query);
        return location === HashLocation ? '#' + path : path;
      },

      /**
       * Transitions to the URL specified in the arguments by pushing
       * a new URL onto the history stack.
       */
      transitionTo: function transitionTo(to, params, query) {
        var path = Router.makePath(to, params, query);

        if (pendingTransition) {
          // Replace so pending location does not stay in history.
          location.replace(path);
        } else {
          location.push(path);
        }
      },

      /**
       * Transitions to the URL specified in the arguments by replacing
       * the current URL in the history stack.
       */
      replaceWith: function replaceWith(to, params, query) {
        location.replace(Router.makePath(to, params, query));
      },

      /**
       * Transitions to the previous URL if one is available. Returns true if the
       * router was able to go back, false otherwise.
       *
       * Note: The router only tracks history entries in your application, not the
       * current browser session, so you can safely call this function without guarding
       * against sending the user back to some other site. However, when using
       * RefreshLocation (which is the fallback for HistoryLocation in browsers that
       * don't support HTML5 history) this method will *always* send the client back
       * because we cannot reliably track history length.
       */
      goBack: function goBack() {
        if (History.length > 1 || location === RefreshLocation) {
          location.pop();
          return true;
        }

        warning(false, 'goBack() was ignored because there is no router history');

        return false;
      },

      handleAbort: options.onAbort || function (abortReason) {
        if (location instanceof StaticLocation) throw new Error('Unhandled aborted transition! Reason: ' + abortReason);

        if (abortReason instanceof Cancellation) {
          return;
        } else if (abortReason instanceof Redirect) {
          location.replace(Router.makePath(abortReason.to, abortReason.params, abortReason.query));
        } else {
          location.pop();
        }
      },

      handleError: options.onError || function (error) {
        // Throw so we don't silently swallow async errors.
        throw error; // This error probably originated in a transition hook.
      },

      handleLocationChange: function handleLocationChange(change) {
        Router.dispatch(change.path, change.type);
      },

      /**
       * Performs a transition to the given path and calls callback(error, abortReason)
       * when the transition is finished. If both arguments are null the router's state
       * was updated. Otherwise the transition did not complete.
       *
       * In a transition, a router first determines which routes are involved by beginning
       * with the current route, up the route tree to the first parent route that is shared
       * with the destination route, and back down the tree to the destination route. The
       * willTransitionFrom hook is invoked on all route handlers we're transitioning away
       * from, in reverse nesting order. Likewise, the willTransitionTo hook is invoked on
       * all route handlers we're transitioning to.
       *
       * Both willTransitionFrom and willTransitionTo hooks may either abort or redirect the
       * transition. To resolve asynchronously, they may use the callback argument. If no
       * hooks wait, the transition is fully synchronous.
       */
      dispatch: function dispatch(path, action) {
        Router.cancelPendingTransition();

        var prevPath = state.path;
        var isRefreshing = action == null;

        if (prevPath === path && !isRefreshing) {
          return;
        } // Nothing to do!

        // Record the scroll position as early as possible to
        // get it before browsers try update it automatically.
        if (prevPath && action === LocationActions.PUSH) Router.recordScrollPosition(prevPath);

        var match = Router.match(path);

        warning(match != null, 'No route matches path "%s". Make sure you have <Route path="%s"> somewhere in your routes', path, path);

        if (match == null) match = {};

        var prevRoutes = state.routes || [];
        var prevParams = state.params || {};
        var prevQuery = state.query || {};

        var nextRoutes = match.routes || [];
        var nextParams = match.params || {};
        var nextQuery = match.query || {};

        var fromRoutes, toRoutes;
        if (prevRoutes.length) {
          fromRoutes = prevRoutes.filter(function (route) {
            return !hasMatch(nextRoutes, route, prevParams, nextParams, prevQuery, nextQuery);
          });

          toRoutes = nextRoutes.filter(function (route) {
            return !hasMatch(prevRoutes, route, prevParams, nextParams, prevQuery, nextQuery);
          });
        } else {
          fromRoutes = [];
          toRoutes = nextRoutes;
        }

        var transition = new Transition(path, Router.replaceWith.bind(Router, path));
        pendingTransition = transition;

        var fromComponents = mountedComponents.slice(prevRoutes.length - fromRoutes.length);

        Transition.from(transition, fromRoutes, fromComponents, function (error) {
          if (error || transition.abortReason) return dispatchHandler.call(Router, error, transition); // No need to continue.

          Transition.to(transition, toRoutes, nextParams, nextQuery, function (error) {
            dispatchHandler.call(Router, error, transition, {
              path: path,
              action: action,
              pathname: match.pathname,
              routes: nextRoutes,
              params: nextParams,
              query: nextQuery
            });
          });
        });
      },

      /**
       * Starts this router and calls callback(router, state) when the route changes.
       *
       * If the router's location is static (i.e. a URL path in a server environment)
       * the callback is called only once. Otherwise, the location should be one of the
       * Router.*Location objects (e.g. Router.HashLocation or Router.HistoryLocation).
       */
      run: function run(callback) {
        invariant(!Router.isRunning, 'Router is already running');

        dispatchHandler = function (error, transition, newState) {
          if (error) Router.handleError(error);

          if (pendingTransition !== transition) return;

          pendingTransition = null;

          if (transition.abortReason) {
            Router.handleAbort(transition.abortReason);
          } else {
            callback.call(Router, Router, nextState = newState);
          }
        };

        if (!(location instanceof StaticLocation)) {
          if (location.addChangeListener) location.addChangeListener(Router.handleLocationChange);

          Router.isRunning = true;
        }

        // Bootstrap using the current path.
        Router.refresh();
      },

      refresh: function refresh() {
        Router.dispatch(location.getCurrentPath(), null);
      },

      stop: function stop() {
        Router.cancelPendingTransition();

        if (location.removeChangeListener) location.removeChangeListener(Router.handleLocationChange);

        Router.isRunning = false;
      },

      getLocation: function getLocation() {
        return location;
      },

      getScrollBehavior: function getScrollBehavior() {
        return scrollBehavior;
      },

      getRouteAtDepth: function getRouteAtDepth(routeDepth) {
        var routes = state.routes;
        return routes && routes[routeDepth];
      },

      setRouteComponentAtDepth: function setRouteComponentAtDepth(routeDepth, component) {
        mountedComponents[routeDepth] = component;
      },

      /**
       * Returns the current URL path + query string.
       */
      getCurrentPath: function getCurrentPath() {
        return state.path;
      },

      /**
       * Returns the current URL path without the query string.
       */
      getCurrentPathname: function getCurrentPathname() {
        return state.pathname;
      },

      /**
       * Returns an object of the currently active URL parameters.
       */
      getCurrentParams: function getCurrentParams() {
        return state.params;
      },

      /**
       * Returns an object of the currently active query parameters.
       */
      getCurrentQuery: function getCurrentQuery() {
        return state.query;
      },

      /**
       * Returns an array of the currently active routes.
       */
      getCurrentRoutes: function getCurrentRoutes() {
        return state.routes;
      },

      /**
       * Returns true if the given route, params, and query are active.
       */
      isActive: function isActive(to, params, query) {
        if (PathUtils.isAbsolute(to)) {
          return to === state.path;
        }return routeIsActive(state.routes, to) && paramsAreActive(state.params, params) && (query == null || queryIsActive(state.query, query));
      }

    },

    mixins: [ScrollHistory],

    propTypes: {
      children: PropTypes.falsy
    },

    childContextTypes: {
      routeDepth: PropTypes.number.isRequired,
      router: PropTypes.router.isRequired
    },

    getChildContext: function getChildContext() {
      return {
        routeDepth: 1,
        router: Router
      };
    },

    getInitialState: function getInitialState() {
      return state = nextState;
    },

    componentWillReceiveProps: function componentWillReceiveProps() {
      this.setState(state = nextState);
    },

    componentWillUnmount: function componentWillUnmount() {
      Router.stop();
    },

    render: function render() {
      var route = Router.getRouteAtDepth(0);
      return route ? React.createElement(route.handler, this.props) : null;
    }

  });

  Router.clearAllRoutes();

  if (options.routes) Router.addRoutes(options.routes);

  return Router;
}

module.exports = createRouter;
}).call(this,require('_process'))
},{"./Cancellation":2,"./History":3,"./Match":4,"./PathUtils":6,"./PropTypes":7,"./Redirect":8,"./Route":9,"./ScrollHistory":10,"./Transition":12,"./actions/LocationActions":13,"./behaviors/ImitateBrowserBehavior":14,"./createRoutesFromReactChildren":24,"./isReactChildren":27,"./locations/HashLocation":28,"./locations/HistoryLocation":29,"./locations/RefreshLocation":30,"./locations/StaticLocation":31,"./supportsHistory":34,"_process":1,"react":undefined,"react/lib/ExecutionEnvironment":41,"react/lib/invariant":44,"react/lib/warning":45}],24:[function(require,module,exports){
/* jshint -W084 */
'use strict';

var React = require('react');
var assign = require('react/lib/Object.assign');
var warning = require('react/lib/warning');
var DefaultRoute = require('./components/DefaultRoute');
var NotFoundRoute = require('./components/NotFoundRoute');
var Redirect = require('./components/Redirect');
var Route = require('./Route');

function checkPropTypes(componentName, propTypes, props) {
  componentName = componentName || 'UnknownComponent';

  for (var propName in propTypes) {
    if (propTypes.hasOwnProperty(propName)) {
      var error = propTypes[propName](props, propName, componentName);

      if (error instanceof Error) warning(false, error.message);
    }
  }
}

function createRouteOptions(props) {
  var options = assign({}, props);
  var handler = options.handler;

  if (handler) {
    options.onEnter = handler.willTransitionTo;
    options.onLeave = handler.willTransitionFrom;
  }

  return options;
}

function createRouteFromReactElement(element) {
  if (!React.isValidElement(element)) {
    return;
  }var type = element.type;
  var props = assign({}, type.defaultProps, element.props);

  if (type.propTypes) checkPropTypes(type.displayName, type.propTypes, props);

  if (type === DefaultRoute) {
    return Route.createDefaultRoute(createRouteOptions(props));
  }if (type === NotFoundRoute) {
    return Route.createNotFoundRoute(createRouteOptions(props));
  }if (type === Redirect) {
    return Route.createRedirect(createRouteOptions(props));
  }return Route.createRoute(createRouteOptions(props), function () {
    if (props.children) createRoutesFromReactChildren(props.children);
  });
}

/**
 * Creates and returns an array of routes created from the given
 * ReactChildren, all of which should be one of <Route>, <DefaultRoute>,
 * <NotFoundRoute>, or <Redirect>, e.g.:
 *
 *   var { createRoutesFromReactChildren, Route, Redirect } = require('react-router');
 *
 *   var routes = createRoutesFromReactChildren(
 *     <Route path="/" handler={App}>
 *       <Route name="user" path="/user/:userId" handler={User}>
 *         <Route name="task" path="tasks/:taskId" handler={Task}/>
 *         <Redirect from="todos/:taskId" to="task"/>
 *       </Route>
 *     </Route>
 *   );
 */
function createRoutesFromReactChildren(children) {
  var routes = [];

  React.Children.forEach(children, function (child) {
    if (child = createRouteFromReactElement(child)) routes.push(child);
  });

  return routes;
}

module.exports = createRoutesFromReactChildren;
},{"./Route":9,"./components/DefaultRoute":17,"./components/NotFoundRoute":19,"./components/Redirect":20,"react":undefined,"react/lib/Object.assign":42,"react/lib/warning":45}],25:[function(require,module,exports){
'use strict';

var invariant = require('react/lib/invariant');
var canUseDOM = require('react/lib/ExecutionEnvironment').canUseDOM;

/**
 * Returns the current scroll position of the window as { x, y }.
 */
function getWindowScrollPosition() {
  invariant(canUseDOM, 'Cannot get current scroll position without a DOM');

  return {
    x: window.pageXOffset || document.documentElement.scrollLeft,
    y: window.pageYOffset || document.documentElement.scrollTop
  };
}

module.exports = getWindowScrollPosition;
},{"react/lib/ExecutionEnvironment":41,"react/lib/invariant":44}],26:[function(require,module,exports){
'use strict';

exports.DefaultRoute = require('./components/DefaultRoute');
exports.Link = require('./components/Link');
exports.NotFoundRoute = require('./components/NotFoundRoute');
exports.Redirect = require('./components/Redirect');
exports.Route = require('./components/Route');
exports.ActiveHandler = require('./components/RouteHandler');
exports.RouteHandler = exports.ActiveHandler;

exports.HashLocation = require('./locations/HashLocation');
exports.HistoryLocation = require('./locations/HistoryLocation');
exports.RefreshLocation = require('./locations/RefreshLocation');
exports.StaticLocation = require('./locations/StaticLocation');
exports.TestLocation = require('./locations/TestLocation');

exports.ImitateBrowserBehavior = require('./behaviors/ImitateBrowserBehavior');
exports.ScrollToTopBehavior = require('./behaviors/ScrollToTopBehavior');

exports.History = require('./History');
exports.Navigation = require('./Navigation');
exports.State = require('./State');

exports.createRoute = require('./Route').createRoute;
exports.createDefaultRoute = require('./Route').createDefaultRoute;
exports.createNotFoundRoute = require('./Route').createNotFoundRoute;
exports.createRedirect = require('./Route').createRedirect;
exports.createRoutesFromReactChildren = require('./createRoutesFromReactChildren');

exports.create = require('./createRouter');
exports.run = require('./runRouter');
},{"./History":3,"./Navigation":5,"./Route":9,"./State":11,"./behaviors/ImitateBrowserBehavior":14,"./behaviors/ScrollToTopBehavior":15,"./components/DefaultRoute":17,"./components/Link":18,"./components/NotFoundRoute":19,"./components/Redirect":20,"./components/Route":21,"./components/RouteHandler":22,"./createRouter":23,"./createRoutesFromReactChildren":24,"./locations/HashLocation":28,"./locations/HistoryLocation":29,"./locations/RefreshLocation":30,"./locations/StaticLocation":31,"./locations/TestLocation":32,"./runRouter":33}],27:[function(require,module,exports){
'use strict';

var React = require('react');

function isValidChild(object) {
  return object == null || React.isValidElement(object);
}

function isReactChildren(object) {
  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
}

module.exports = isReactChildren;
},{"react":undefined}],28:[function(require,module,exports){
'use strict';

var LocationActions = require('../actions/LocationActions');
var History = require('../History');

var _listeners = [];
var _isListening = false;
var _actionType;

function notifyChange(type) {
  if (type === LocationActions.PUSH) History.length += 1;

  var change = {
    path: HashLocation.getCurrentPath(),
    type: type
  };

  _listeners.forEach(function (listener) {
    listener.call(HashLocation, change);
  });
}

function ensureSlash() {
  var path = HashLocation.getCurrentPath();

  if (path.charAt(0) === '/') {
    return true;
  }HashLocation.replace('/' + path);

  return false;
}

function onHashChange() {
  if (ensureSlash()) {
    // If we don't have an _actionType then all we know is the hash
    // changed. It was probably caused by the user clicking the Back
    // button, but may have also been the Forward button or manual
    // manipulation. So just guess 'pop'.
    var curActionType = _actionType;
    _actionType = null;
    notifyChange(curActionType || LocationActions.POP);
  }
}

/**
 * A Location that uses `window.location.hash`.
 */
var HashLocation = {

  addChangeListener: function addChangeListener(listener) {
    _listeners.push(listener);

    // Do this BEFORE listening for hashchange.
    ensureSlash();

    if (!_isListening) {
      if (window.addEventListener) {
        window.addEventListener('hashchange', onHashChange, false);
      } else {
        window.attachEvent('onhashchange', onHashChange);
      }

      _isListening = true;
    }
  },

  removeChangeListener: function removeChangeListener(listener) {
    _listeners = _listeners.filter(function (l) {
      return l !== listener;
    });

    if (_listeners.length === 0) {
      if (window.removeEventListener) {
        window.removeEventListener('hashchange', onHashChange, false);
      } else {
        window.removeEvent('onhashchange', onHashChange);
      }

      _isListening = false;
    }
  },

  push: function push(path) {
    _actionType = LocationActions.PUSH;
    window.location.hash = path;
  },

  replace: function replace(path) {
    _actionType = LocationActions.REPLACE;
    window.location.replace(window.location.pathname + window.location.search + '#' + path);
  },

  pop: function pop() {
    _actionType = LocationActions.POP;
    History.back();
  },

  getCurrentPath: function getCurrentPath() {
    return decodeURI(
    // We can't use window.location.hash here because it's not
    // consistent across browsers - Firefox will pre-decode it!
    window.location.href.split('#')[1] || '');
  },

  toString: function toString() {
    return '<HashLocation>';
  }

};

module.exports = HashLocation;
},{"../History":3,"../actions/LocationActions":13}],29:[function(require,module,exports){
'use strict';

var LocationActions = require('../actions/LocationActions');
var History = require('../History');

var _listeners = [];
var _isListening = false;

function notifyChange(type) {
  var change = {
    path: HistoryLocation.getCurrentPath(),
    type: type
  };

  _listeners.forEach(function (listener) {
    listener.call(HistoryLocation, change);
  });
}

function onPopState(event) {
  if (event.state === undefined) {
    return;
  } // Ignore extraneous popstate events in WebKit.

  notifyChange(LocationActions.POP);
}

/**
 * A Location that uses HTML5 history.
 */
var HistoryLocation = {

  addChangeListener: function addChangeListener(listener) {
    _listeners.push(listener);

    if (!_isListening) {
      if (window.addEventListener) {
        window.addEventListener('popstate', onPopState, false);
      } else {
        window.attachEvent('onpopstate', onPopState);
      }

      _isListening = true;
    }
  },

  removeChangeListener: function removeChangeListener(listener) {
    _listeners = _listeners.filter(function (l) {
      return l !== listener;
    });

    if (_listeners.length === 0) {
      if (window.addEventListener) {
        window.removeEventListener('popstate', onPopState, false);
      } else {
        window.removeEvent('onpopstate', onPopState);
      }

      _isListening = false;
    }
  },

  push: function push(path) {
    window.history.pushState({ path: path }, '', path);
    History.length += 1;
    notifyChange(LocationActions.PUSH);
  },

  replace: function replace(path) {
    window.history.replaceState({ path: path }, '', path);
    notifyChange(LocationActions.REPLACE);
  },

  pop: History.back,

  getCurrentPath: function getCurrentPath() {
    return decodeURI(window.location.pathname + window.location.search);
  },

  toString: function toString() {
    return '<HistoryLocation>';
  }

};

module.exports = HistoryLocation;
},{"../History":3,"../actions/LocationActions":13}],30:[function(require,module,exports){
'use strict';

var HistoryLocation = require('./HistoryLocation');
var History = require('../History');

/**
 * A Location that uses full page refreshes. This is used as
 * the fallback for HistoryLocation in browsers that do not
 * support the HTML5 history API.
 */
var RefreshLocation = {

  push: function push(path) {
    window.location = path;
  },

  replace: function replace(path) {
    window.location.replace(path);
  },

  pop: History.back,

  getCurrentPath: HistoryLocation.getCurrentPath,

  toString: function toString() {
    return '<RefreshLocation>';
  }

};

module.exports = RefreshLocation;
},{"../History":3,"./HistoryLocation":29}],31:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var invariant = require('react/lib/invariant');

function throwCannotModify() {
  invariant(false, 'You cannot modify a static location');
}

/**
 * A location that only ever contains a single path. Useful in
 * stateless environments like servers where there is no path history,
 * only the path that was used in the request.
 */

var StaticLocation = (function () {
  function StaticLocation(path) {
    _classCallCheck(this, StaticLocation);

    this.path = path;
  }

  _createClass(StaticLocation, [{
    key: 'getCurrentPath',
    value: function getCurrentPath() {
      return this.path;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '<StaticLocation path="' + this.path + '">';
    }
  }]);

  return StaticLocation;
})();

// TODO: Include these in the above class definition
// once we can use ES7 property initializers.
// https://github.com/babel/babel/issues/619

StaticLocation.prototype.push = throwCannotModify;
StaticLocation.prototype.replace = throwCannotModify;
StaticLocation.prototype.pop = throwCannotModify;

module.exports = StaticLocation;
},{"react/lib/invariant":44}],32:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var invariant = require('react/lib/invariant');
var LocationActions = require('../actions/LocationActions');
var History = require('../History');

/**
 * A location that is convenient for testing and does not require a DOM.
 */

var TestLocation = (function () {
  function TestLocation(history) {
    _classCallCheck(this, TestLocation);

    this.history = history || [];
    this.listeners = [];
    this._updateHistoryLength();
  }

  _createClass(TestLocation, [{
    key: 'needsDOM',
    get: function () {
      return false;
    }
  }, {
    key: '_updateHistoryLength',
    value: function _updateHistoryLength() {
      History.length = this.history.length;
    }
  }, {
    key: '_notifyChange',
    value: function _notifyChange(type) {
      var change = {
        path: this.getCurrentPath(),
        type: type
      };

      for (var i = 0, len = this.listeners.length; i < len; ++i) this.listeners[i].call(this, change);
    }
  }, {
    key: 'addChangeListener',
    value: function addChangeListener(listener) {
      this.listeners.push(listener);
    }
  }, {
    key: 'removeChangeListener',
    value: function removeChangeListener(listener) {
      this.listeners = this.listeners.filter(function (l) {
        return l !== listener;
      });
    }
  }, {
    key: 'push',
    value: function push(path) {
      this.history.push(path);
      this._updateHistoryLength();
      this._notifyChange(LocationActions.PUSH);
    }
  }, {
    key: 'replace',
    value: function replace(path) {
      invariant(this.history.length, 'You cannot replace the current path with no history');

      this.history[this.history.length - 1] = path;

      this._notifyChange(LocationActions.REPLACE);
    }
  }, {
    key: 'pop',
    value: function pop() {
      this.history.pop();
      this._updateHistoryLength();
      this._notifyChange(LocationActions.POP);
    }
  }, {
    key: 'getCurrentPath',
    value: function getCurrentPath() {
      return this.history[this.history.length - 1];
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '<TestLocation>';
    }
  }]);

  return TestLocation;
})();

module.exports = TestLocation;
},{"../History":3,"../actions/LocationActions":13,"react/lib/invariant":44}],33:[function(require,module,exports){
'use strict';

var createRouter = require('./createRouter');

/**
 * A high-level convenience method that creates, configures, and
 * runs a router in one shot. The method signature is:
 *
 *   Router.run(routes[, location ], callback);
 *
 * Using `window.location.hash` to manage the URL, you could do:
 *
 *   Router.run(routes, function (Handler) {
 *     React.render(<Handler/>, document.body);
 *   });
 * 
 * Using HTML5 history and a custom "cursor" prop:
 * 
 *   Router.run(routes, Router.HistoryLocation, function (Handler) {
 *     React.render(<Handler cursor={cursor}/>, document.body);
 *   });
 *
 * Returns the newly created router.
 *
 * Note: If you need to specify further options for your router such
 * as error/abort handling or custom scroll behavior, use Router.create
 * instead.
 *
 *   var router = Router.create(options);
 *   router.run(function (Handler) {
 *     // ...
 *   });
 */
function runRouter(routes, location, callback) {
  if (typeof location === 'function') {
    callback = location;
    location = null;
  }

  var router = createRouter({
    routes: routes,
    location: location
  });

  router.run(callback);

  return router;
}

module.exports = runRouter;
},{"./createRouter":23}],34:[function(require,module,exports){
'use strict';

function supportsHistory() {
  /*! taken from modernizr
   * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
   * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
   * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
   */
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

module.exports = supportsHistory;
},{}],35:[function(require,module,exports){
'use strict';

function ToObject(val) {
	if (val == null) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

module.exports = Object.assign || function (target, source) {
	var from;
	var keys;
	var to = ToObject(target);

	for (var s = 1; s < arguments.length; s++) {
		from = arguments[s];
		keys = Object.keys(Object(from));

		for (var i = 0; i < keys.length; i++) {
			to[keys[i]] = from[keys[i]];
		}
	}

	return to;
};

},{}],36:[function(require,module,exports){
module.exports = require('./lib/');

},{"./lib/":37}],37:[function(require,module,exports){
// Load modules

var Stringify = require('./stringify');
var Parse = require('./parse');


// Declare internals

var internals = {};


module.exports = {
    stringify: Stringify,
    parse: Parse
};

},{"./parse":38,"./stringify":39}],38:[function(require,module,exports){
// Load modules

var Utils = require('./utils');


// Declare internals

var internals = {
    delimiter: '&',
    depth: 5,
    arrayLimit: 20,
    parameterLimit: 1000
};


internals.parseValues = function (str, options) {

    var obj = {};
    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

    for (var i = 0, il = parts.length; i < il; ++i) {
        var part = parts[i];
        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

        if (pos === -1) {
            obj[Utils.decode(part)] = '';
        }
        else {
            var key = Utils.decode(part.slice(0, pos));
            var val = Utils.decode(part.slice(pos + 1));

            if (Object.prototype.hasOwnProperty(key)) {
                continue;
            }

            if (!obj.hasOwnProperty(key)) {
                obj[key] = val;
            }
            else {
                obj[key] = [].concat(obj[key]).concat(val);
            }
        }
    }

    return obj;
};


internals.parseObject = function (chain, val, options) {

    if (!chain.length) {
        return val;
    }

    var root = chain.shift();

    var obj = {};
    if (root === '[]') {
        obj = [];
        obj = obj.concat(internals.parseObject(chain, val, options));
    }
    else {
        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
        var index = parseInt(cleanRoot, 10);
        var indexString = '' + index;
        if (!isNaN(index) &&
            root !== cleanRoot &&
            indexString === cleanRoot &&
            index >= 0 &&
            index <= options.arrayLimit) {

            obj = [];
            obj[index] = internals.parseObject(chain, val, options);
        }
        else {
            obj[cleanRoot] = internals.parseObject(chain, val, options);
        }
    }

    return obj;
};


internals.parseKeys = function (key, val, options) {

    if (!key) {
        return;
    }

    // The regex chunks

    var parent = /^([^\[\]]*)/;
    var child = /(\[[^\[\]]*\])/g;

    // Get the parent

    var segment = parent.exec(key);

    // Don't allow them to overwrite object prototype properties

    if (Object.prototype.hasOwnProperty(segment[1])) {
        return;
    }

    // Stash the parent if it exists

    var keys = [];
    if (segment[1]) {
        keys.push(segment[1]);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {

        ++i;
        if (!Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {
            keys.push(segment[1]);
        }
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return internals.parseObject(keys, val, options);
};


module.exports = function (str, options) {

    if (str === '' ||
        str === null ||
        typeof str === 'undefined') {

        return {};
    }

    options = options || {};
    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;

    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
    var obj = {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0, il = keys.length; i < il; ++i) {
        var key = keys[i];
        var newObj = internals.parseKeys(key, tempObj[key], options);
        obj = Utils.merge(obj, newObj);
    }

    return Utils.compact(obj);
};

},{"./utils":40}],39:[function(require,module,exports){
// Load modules

var Utils = require('./utils');


// Declare internals

var internals = {
    delimiter: '&',
    arrayPrefixGenerators: {
        brackets: function (prefix, key) {
            return prefix + '[]';
        },
        indices: function (prefix, key) {
            return prefix + '[' + key + ']';
        },
        repeat: function (prefix, key) {
            return prefix;
        }
    }
};


internals.stringify = function (obj, prefix, generateArrayPrefix) {

    if (Utils.isBuffer(obj)) {
        obj = obj.toString();
    }
    else if (obj instanceof Date) {
        obj = obj.toISOString();
    }
    else if (obj === null) {
        obj = '';
    }

    if (typeof obj === 'string' ||
        typeof obj === 'number' ||
        typeof obj === 'boolean') {

        return [encodeURIComponent(prefix) + '=' + encodeURIComponent(obj)];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys = Object.keys(obj);
    for (var i = 0, il = objKeys.length; i < il; ++i) {
        var key = objKeys[i];
        if (Array.isArray(obj)) {
            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix));
        }
        else {
            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix));
        }
    }

    return values;
};


module.exports = function (obj, options) {

    options = options || {};
    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;

    var keys = [];

    if (typeof obj !== 'object' ||
        obj === null) {

        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in internals.arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    }
    else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    }
    else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];

    var objKeys = Object.keys(obj);
    for (var i = 0, il = objKeys.length; i < il; ++i) {
        var key = objKeys[i];
        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix));
    }

    return keys.join(delimiter);
};

},{"./utils":40}],40:[function(require,module,exports){
// Load modules


// Declare internals

var internals = {};


exports.arrayToObject = function (source) {

    var obj = {};
    for (var i = 0, il = source.length; i < il; ++i) {
        if (typeof source[i] !== 'undefined') {

            obj[i] = source[i];
        }
    }

    return obj;
};


exports.merge = function (target, source) {

    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        }
        else {
            target[source] = true;
        }

        return target;
    }

    if (typeof target !== 'object') {
        target = [target].concat(source);
        return target;
    }

    if (Array.isArray(target) &&
        !Array.isArray(source)) {

        target = exports.arrayToObject(target);
    }

    var keys = Object.keys(source);
    for (var k = 0, kl = keys.length; k < kl; ++k) {
        var key = keys[k];
        var value = source[key];

        if (!target[key]) {
            target[key] = value;
        }
        else {
            target[key] = exports.merge(target[key], value);
        }
    }

    return target;
};


exports.decode = function (str) {

    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};


exports.compact = function (obj, refs) {

    if (typeof obj !== 'object' ||
        obj === null) {

        return obj;
    }

    refs = refs || [];
    var lookup = refs.indexOf(obj);
    if (lookup !== -1) {
        return refs[lookup];
    }

    refs.push(obj);

    if (Array.isArray(obj)) {
        var compacted = [];

        for (var i = 0, il = obj.length; i < il; ++i) {
            if (typeof obj[i] !== 'undefined') {
                compacted.push(obj[i]);
            }
        }

        return compacted;
    }

    var keys = Object.keys(obj);
    for (i = 0, il = keys.length; i < il; ++i) {
        var key = keys[i];
        obj[key] = exports.compact(obj[key], refs);
    }

    return obj;
};


exports.isRegExp = function (obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};


exports.isBuffer = function (obj) {

    if (obj === null ||
        typeof obj === 'undefined') {

        return false;
    }

    return !!(obj.constructor &&
        obj.constructor.isBuffer &&
        obj.constructor.isBuffer(obj));
};

},{}],41:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */

/*jslint evil: true */

"use strict";

var canUseDOM = !!(
  (typeof window !== 'undefined' &&
  window.document && window.document.createElement)
);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners:
    canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;

},{}],42:[function(require,module,exports){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Object.assign
 */

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

'use strict';

function assign(target, sources) {
  if (target == null) {
    throw new TypeError('Object.assign target cannot be null or undefined');
  }

  var to = Object(target);
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
    var nextSource = arguments[nextIndex];
    if (nextSource == null) {
      continue;
    }

    var from = Object(nextSource);

    // We don't currently support accessors nor proxies. Therefore this
    // copy cannot throw. If we ever supported this then we must handle
    // exceptions and side-effects. We don't support symbols so they won't
    // be transferred.

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
  }

  return to;
}

module.exports = assign;

},{}],43:[function(require,module,exports){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyFunction
 */

function makeEmptyFunction(arg) {
  return function() {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
function emptyFunction() {}

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function() { return this; };
emptyFunction.thatReturnsArgument = function(arg) { return arg; };

module.exports = emptyFunction;

},{}],44:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

"use strict";

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if ("production" !== process.env.NODE_ENV) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        'Invariant Violation: ' +
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))
},{"_process":1}],45:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule warning
 */

"use strict";

var emptyFunction = require("./emptyFunction");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if ("production" !== process.env.NODE_ENV) {
  warning = function(condition, format ) {for (var args=[],$__0=2,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function()  {return args[argIndex++];});
      console.warn(message);
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))
},{"./emptyFunction":43,"_process":1}],46:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _srcConstants = require('../../../src/constants');

var _srcConstants2 = _interopRequireDefault(_srcConstants);

var ALIGN_TRANSFORM = {
	'center': 'center',
	'left': 'flex-start',
	'right': 'flex-end'
};

var DemoBox = _react2['default'].createClass({
	displayName: 'DemoBox',

	propTypes: {
		align: _react2['default'].PropTypes.oneOf(['center', 'left', 'right']),
		children: _react2['default'].PropTypes.node.isRequired,
		className: _react2['default'].PropTypes.string,
		inverted: _react2['default'].PropTypes.bool,
		style: _react2['default'].PropTypes.object
	},
	getDefaultProps: function getDefaultProps() {
		return {
			align: 'center'
		};
	},
	render: function render() {
		var boxStyle = {
			backgroundColor: 'rgba(0,0,0,0.05)',
			borderRadius: 4,
			display: 'flex',
			justifyContent: ALIGN_TRANSFORM[this.props.align],
			msFlexPack: ALIGN_TRANSFORM[this.props.align],
			WebkitJustifyContent: ALIGN_TRANSFORM[this.props.align],
			marginBottom: _srcConstants2['default'].width.gutter,
			padding: '.66em 1.5em'
		};
		if (this.props.inverted) {
			boxStyle.backgroundColor = _srcConstants2['default'].color.appPrimary;
		}
		var className = (0, _classnames2['default'])('DemoBox', this.props.className);

		return _react2['default'].createElement('div', _extends({}, this.props, { style: _extends({}, boxStyle, this.props.style), className: className }));
	}
});

module.exports = DemoBox;

},{"../../../src/constants":60,"classnames":undefined,"react":undefined}],47:[function(require,module,exports){
/* global Prism */
'use strict';

var classNames = require('classnames');
var React = require('react');

var ExampleSource = React.createClass({
	displayName: 'ExampleSource',

	propTypes: {
		children: React.PropTypes.string.isRequired,
		language: React.PropTypes.string
	},
	getDefaultProps: function getDefaultProps() {
		return {
			language: 'markup'
		};
	},
	componentDidMount: function componentDidMount() {
		this.highlight();
	},
	componentDidUpdate: function componentDidUpdate() {
		this.highlight();
	},
	highlight: function highlight() {
		Prism.highlightElement(this.refs.code.getDOMNode(), true);
	},
	fixIndentation: function fixIndentation(children) {
		if (typeof children !== 'string') return children;
		var lines = children.split('\n').filter(function (l) {
			return l;
		});
		if (!lines.length) return children;
		var indent = /^\t+/.exec(lines[0]);
		if (indent) {
			indent = indent[0].length;
			lines = lines.map(function (s) {
				return s.substr(indent);
			});
		}
		return lines.join('\n');
	},
	render: function render() {
		var codeClass = classNames('code-example__code', 'language-' + this.props.language);
		return React.createElement(
			'pre',
			{ className: 'code-example__pre' },
			React.createElement(
				'code',
				{ ref: 'code', className: codeClass },
				this.fixIndentation(this.props.children)
			)
		);
	}
});

module.exports = ExampleSource;

},{"classnames":undefined,"react":undefined}],48:[function(require,module,exports){
// Thank you https://gist.github.com/Keeguon/2310008
'use strict';

module.exports = [{ name: 'Afghanistan', code: 'AF' }, { name: 'Åland Islands', code: 'AX' }, { name: 'Albania', code: 'AL' }, { name: 'Algeria', code: 'DZ' }, { name: 'American Samoa', code: 'AS' }, { name: 'AndorrA', code: 'AD' }, { name: 'Angola', code: 'AO' }, { name: 'Anguilla', code: 'AI' }, { name: 'Antarctica', code: 'AQ' }, { name: 'Antigua and Barbuda', code: 'AG' }, { name: 'Argentina', code: 'AR' }, { name: 'Armenia', code: 'AM' }, { name: 'Aruba', code: 'AW' }, { name: 'Australia', code: 'AU' }, { name: 'Austria', code: 'AT' }, { name: 'Azerbaijan', code: 'AZ' }, { name: 'Bahamas', code: 'BS' }, { name: 'Bahrain', code: 'BH' }, { name: 'Bangladesh', code: 'BD' }, { name: 'Barbados', code: 'BB' }, { name: 'Belarus', code: 'BY' }, { name: 'Belgium', code: 'BE' }, { name: 'Belize', code: 'BZ' }, { name: 'Benin', code: 'BJ' }, { name: 'Bermuda', code: 'BM' }, { name: 'Bhutan', code: 'BT' }, { name: 'Bolivia', code: 'BO' }, { name: 'Bosnia and Herzegovina', code: 'BA' }, { name: 'Botswana', code: 'BW' }, { name: 'Bouvet Island', code: 'BV' }, { name: 'Brazil', code: 'BR' }, { name: 'British Indian Ocean Territory', code: 'IO' }, { name: 'Brunei Darussalam', code: 'BN' }, { name: 'Bulgaria', code: 'BG' }, { name: 'Burkina Faso', code: 'BF' }, { name: 'Burundi', code: 'BI' }, { name: 'Cambodia', code: 'KH' }, { name: 'Cameroon', code: 'CM' }, { name: 'Canada', code: 'CA' }, { name: 'Cape Verde', code: 'CV' }, { name: 'Cayman Islands', code: 'KY' }, { name: 'Central African Republic', code: 'CF' }, { name: 'Chad', code: 'TD' }, { name: 'Chile', code: 'CL' }, { name: 'China', code: 'CN' }, { name: 'Christmas Island', code: 'CX' }, { name: 'Cocos (Keeling) Islands', code: 'CC' }, { name: 'Colombia', code: 'CO' }, { name: 'Comoros', code: 'KM' }, { name: 'Congo', code: 'CG' }, { name: 'Congo, The Democratic Republic of the', code: 'CD' }, { name: 'Cook Islands', code: 'CK' }, { name: 'Costa Rica', code: 'CR' }, { name: 'Cote D\'Ivoire', code: 'CI' }, { name: 'Croatia', code: 'HR' }, { name: 'Cuba', code: 'CU' }, { name: 'Cyprus', code: 'CY' }, { name: 'Czech Republic', code: 'CZ' }, { name: 'Denmark', code: 'DK' }, { name: 'Djibouti', code: 'DJ' }, { name: 'Dominica', code: 'DM' }, { name: 'Dominican Republic', code: 'DO' }, { name: 'Ecuador', code: 'EC' }, { name: 'Egypt', code: 'EG' }, { name: 'El Salvador', code: 'SV' }, { name: 'Equatorial Guinea', code: 'GQ' }, { name: 'Eritrea', code: 'ER' }, { name: 'Estonia', code: 'EE' }, { name: 'Ethiopia', code: 'ET' }, { name: 'Falkland Islands (Malvinas)', code: 'FK' }, { name: 'Faroe Islands', code: 'FO' }, { name: 'Fiji', code: 'FJ' }, { name: 'Finland', code: 'FI' }, { name: 'France', code: 'FR' }, { name: 'French Guiana', code: 'GF' }, { name: 'French Polynesia', code: 'PF' }, { name: 'French Southern Territories', code: 'TF' }, { name: 'Gabon', code: 'GA' }, { name: 'Gambia', code: 'GM' }, { name: 'Georgia', code: 'GE' }, { name: 'Germany', code: 'DE' }, { name: 'Ghana', code: 'GH' }, { name: 'Gibraltar', code: 'GI' }, { name: 'Greece', code: 'GR' }, { name: 'Greenland', code: 'GL' }, { name: 'Grenada', code: 'GD' }, { name: 'Guadeloupe', code: 'GP' }, { name: 'Guam', code: 'GU' }, { name: 'Guatemala', code: 'GT' }, { name: 'Guernsey', code: 'GG' }, { name: 'Guinea', code: 'GN' }, { name: 'Guinea-Bissau', code: 'GW' }, { name: 'Guyana', code: 'GY' }, { name: 'Haiti', code: 'HT' }, { name: 'Heard Island and Mcdonald Islands', code: 'HM' }, { name: 'Holy See (Vatican City State)', code: 'VA' }, { name: 'Honduras', code: 'HN' }, { name: 'Hong Kong', code: 'HK' }, { name: 'Hungary', code: 'HU' }, { name: 'Iceland', code: 'IS' }, { name: 'India', code: 'IN' }, { name: 'Indonesia', code: 'ID' }, { name: 'Iran, Islamic Republic Of', code: 'IR' }, { name: 'Iraq', code: 'IQ' }, { name: 'Ireland', code: 'IE' }, { name: 'Isle of Man', code: 'IM' }, { name: 'Israel', code: 'IL' }, { name: 'Italy', code: 'IT' }, { name: 'Jamaica', code: 'JM' }, { name: 'Japan', code: 'JP' }, { name: 'Jersey', code: 'JE' }, { name: 'Jordan', code: 'JO' }, { name: 'Kazakhstan', code: 'KZ' }, { name: 'Kenya', code: 'KE' }, { name: 'Kiribati', code: 'KI' }, { name: 'Korea, Democratic People\'S Republic of', code: 'KP' }, { name: 'Korea, Republic of', code: 'KR' }, { name: 'Kuwait', code: 'KW' }, { name: 'Kyrgyzstan', code: 'KG' }, { name: 'Lao People\'S Democratic Republic', code: 'LA' }, { name: 'Latvia', code: 'LV' }, { name: 'Lebanon', code: 'LB' }, { name: 'Lesotho', code: 'LS' }, { name: 'Liberia', code: 'LR' }, { name: 'Libyan Arab Jamahiriya', code: 'LY' }, { name: 'Liechtenstein', code: 'LI' }, { name: 'Lithuania', code: 'LT' }, { name: 'Luxembourg', code: 'LU' }, { name: 'Macao', code: 'MO' }, { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' }, { name: 'Madagascar', code: 'MG' }, { name: 'Malawi', code: 'MW' }, { name: 'Malaysia', code: 'MY' }, { name: 'Maldives', code: 'MV' }, { name: 'Mali', code: 'ML' }, { name: 'Malta', code: 'MT' }, { name: 'Marshall Islands', code: 'MH' }, { name: 'Martinique', code: 'MQ' }, { name: 'Mauritania', code: 'MR' }, { name: 'Mauritius', code: 'MU' }, { name: 'Mayotte', code: 'YT' }, { name: 'Mexico', code: 'MX' }, { name: 'Micronesia, Federated States of', code: 'FM' }, { name: 'Moldova, Republic of', code: 'MD' }, { name: 'Monaco', code: 'MC' }, { name: 'Mongolia', code: 'MN' }, { name: 'Montserrat', code: 'MS' }, { name: 'Morocco', code: 'MA' }, { name: 'Mozambique', code: 'MZ' }, { name: 'Myanmar', code: 'MM' }, { name: 'Namibia', code: 'NA' }, { name: 'Nauru', code: 'NR' }, { name: 'Nepal', code: 'NP' }, { name: 'Netherlands', code: 'NL' }, { name: 'Netherlands Antilles', code: 'AN' }, { name: 'New Caledonia', code: 'NC' }, { name: 'New Zealand', code: 'NZ' }, { name: 'Nicaragua', code: 'NI' }, { name: 'Niger', code: 'NE' }, { name: 'Nigeria', code: 'NG' }, { name: 'Niue', code: 'NU' }, { name: 'Norfolk Island', code: 'NF' }, { name: 'Northern Mariana Islands', code: 'MP' }, { name: 'Norway', code: 'NO' }, { name: 'Oman', code: 'OM' }, { name: 'Pakistan', code: 'PK' }, { name: 'Palau', code: 'PW' }, { name: 'Palestinian Territory, Occupied', code: 'PS' }, { name: 'Panama', code: 'PA' }, { name: 'Papua New Guinea', code: 'PG' }, { name: 'Paraguay', code: 'PY' }, { name: 'Peru', code: 'PE' }, { name: 'Philippines', code: 'PH' }, { name: 'Pitcairn', code: 'PN' }, { name: 'Poland', code: 'PL' }, { name: 'Portugal', code: 'PT' }, { name: 'Puerto Rico', code: 'PR' }, { name: 'Qatar', code: 'QA' }, { name: 'Reunion', code: 'RE' }, { name: 'Romania', code: 'RO' }, { name: 'Russian Federation', code: 'RU' }, { name: 'RWANDA', code: 'RW' }, { name: 'Saint Helena', code: 'SH' }, { name: 'Saint Kitts and Nevis', code: 'KN' }, { name: 'Saint Lucia', code: 'LC' }, { name: 'Saint Pierre and Miquelon', code: 'PM' }, { name: 'Saint Vincent and the Grenadines', code: 'VC' }, { name: 'Samoa', code: 'WS' }, { name: 'San Marino', code: 'SM' }, { name: 'Sao Tome and Principe', code: 'ST' }, { name: 'Saudi Arabia', code: 'SA' }, { name: 'Senegal', code: 'SN' }, { name: 'Serbia and Montenegro', code: 'CS' }, { name: 'Seychelles', code: 'SC' }, { name: 'Sierra Leone', code: 'SL' }, { name: 'Singapore', code: 'SG' }, { name: 'Slovakia', code: 'SK' }, { name: 'Slovenia', code: 'SI' }, { name: 'Solomon Islands', code: 'SB' }, { name: 'Somalia', code: 'SO' }, { name: 'South Africa', code: 'ZA' }, { name: 'South Georgia and the South Sandwich Islands', code: 'GS' }, { name: 'Spain', code: 'ES' }, { name: 'Sri Lanka', code: 'LK' }, { name: 'Sudan', code: 'SD' }, { name: 'Suriname', code: 'SR' }, { name: 'Svalbard and Jan Mayen', code: 'SJ' }, { name: 'Swaziland', code: 'SZ' }, { name: 'Sweden', code: 'SE' }, { name: 'Switzerland', code: 'CH' }, { name: 'Syrian Arab Republic', code: 'SY' }, { name: 'Taiwan, Province of China', code: 'TW' }, { name: 'Tajikistan', code: 'TJ' }, { name: 'Tanzania, United Republic of', code: 'TZ' }, { name: 'Thailand', code: 'TH' }, { name: 'Timor-Leste', code: 'TL' }, { name: 'Togo', code: 'TG' }, { name: 'Tokelau', code: 'TK' }, { name: 'Tonga', code: 'TO' }, { name: 'Trinidad and Tobago', code: 'TT' }, { name: 'Tunisia', code: 'TN' }, { name: 'Turkey', code: 'TR' }, { name: 'Turkmenistan', code: 'TM' }, { name: 'Turks and Caicos Islands', code: 'TC' }, { name: 'Tuvalu', code: 'TV' }, { name: 'Uganda', code: 'UG' }, { name: 'Ukraine', code: 'UA' }, { name: 'United Arab Emirates', code: 'AE' }, { name: 'United Kingdom', code: 'GB' }, { name: 'United States', code: 'US' }, { name: 'United States Minor Outlying Islands', code: 'UM' }, { name: 'Uruguay', code: 'UY' }, { name: 'Uzbekistan', code: 'UZ' }, { name: 'Vanuatu', code: 'VU' }, { name: 'Venezuela', code: 'VE' }, { name: 'Viet Nam', code: 'VN' }, { name: 'Virgin Islands, British', code: 'VG' }, { name: 'Virgin Islands, U.S.', code: 'VI' }, { name: 'Wallis and Futuna', code: 'WF' }, { name: 'Western Sahara', code: 'EH' }, { name: 'Yemen', code: 'YE' }, { name: 'Zambia', code: 'ZM' }, { name: 'Zimbabwe', code: 'ZW' }];

},{}],49:[function(require,module,exports){
"use strict";

module.exports = [{ "name": "Hanna Villarreal", "email": "aptent.taciti@euismodacfermentum.com", "password": "ZKG57ZFJ9HK", "age": 39, "gender": "female" }, { "name": "Hermione Maddox", "email": "Curabitur.massa@eu.ca", "password": "ECI38CRA9MB", "age": 55, "gender": "female" }, { "name": "Vladimir Rodgers", "email": "diam@ettristiquepellentesque.com", "password": "ESK96WFK9OD", "age": 36, "gender": "male" }, { "name": "Kelsie Ewing", "email": "rutrum.non@tellus.co.uk", "password": "KVE70PUO5TB", "age": 47, "gender": "female" }, { "name": "Yetta Higgins", "email": "quis.pede@lectusquis.com", "password": "KAE34UXU2QZ", "age": 43, "gender": "female" }, { "name": "Kadeem Montgomery", "email": "facilisis.facilisis@vitaesodalesat.edu", "password": "POX16RXV9HL", "age": 46, "gender": "male" }, { "name": "Martina Dodson", "email": "Cras.lorem@convallis.org", "password": "TIY32LRA7IU", "age": 41, "gender": "female" }, { "name": "Grady Gonzalez", "email": "posuere.cubilia@Aenean.org", "password": "VKN16PHI8PW", "age": 33, "gender": "male" }, { "name": "Lacey Hutchinson", "email": "Maecenas.iaculis@sedpede.net", "password": "LDN67DTE6CC", "age": 29, "gender": "female" }, { "name": "John Santiago", "email": "eleifend.egestas@convallis.ca", "password": "ZEY52DKW3ZZ", "age": 47, "gender": "male" }, { "name": "Philip Floyd", "email": "Proin@enimnisl.ca", "password": "RZK97GMJ7EK", "age": 63, "gender": "male" }, { "name": "Leslie Chavez", "email": "sociis.natoque.penatibus@porttitor.net", "password": "AKN50QNQ8HK", "age": 68, "gender": "female" }, { "name": "Alisa Allison", "email": "vitae@netusetmalesuada.ca", "password": "XLP00XDR9UW", "age": 60, "gender": "female" }, { "name": "Joshua Clarke", "email": "mi@quamPellentesque.net", "password": "LSN56SXD3SH", "age": 47, "gender": "male" }, { "name": "Victoria Holden", "email": "magna@pedeac.net", "password": "BUS61XTJ6KI", "age": 25, "gender": "female" }, { "name": "Kibo Goodwin", "email": "est@nec.org", "password": "GWM68BLL8LN", "age": 64, "gender": "male" }, { "name": "Marvin Justice", "email": "Integer@Quisquetincidunt.co.uk", "password": "NRQ89UJQ5FH", "age": 56, "gender": "male" }, { "name": "Justin Rowland", "email": "magna.a.neque@anequeNullam.ca", "password": "JKQ17ZVE3TE", "age": 21, "gender": "male" }, { "name": "Tiger Blevins", "email": "enim.sit@felisNulla.net", "password": "MLA03EJG4WI", "age": 34, "gender": "male" }, { "name": "Peter Bray", "email": "nascetur@Nullamutnisi.edu", "password": "BAL79WGC4II", "age": 64, "gender": "male" }];

},{}],50:[function(require,module,exports){
/* eslint no-script-url: 0 */

'use strict';

var React = require('react');

var _require = require('elemental');

var Button = _require.Button;
var ButtonGroup = _require.ButtonGroup;
var Container = _require.Container;
var Dropdown = _require.Dropdown;
var Table = _require.Table;

var ExampleSource = require('../components/ExampleSource');

var DROPDOWN_OPTIONS = [{ label: 'Action' }, { label: 'Another action' }, { label: 'Something else here' }, { type: 'divider' }, { type: 'header', label: 'Dropdown header' }, { label: 'Separated link' }];

var BUTTON_SIZES = [{ label: 'Large', value: 'lg' }, { label: 'Default', value: null }, { label: 'Small', value: 'sm' }, { label: 'Extra Small', value: 'xs' }];

var BUTTON_VARIANTS = [{ label: 'Primary', value: 'primary' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Danger', value: 'danger' }];

var BUTTON_DEFAULT_VARIANTS = [{ label: 'Default Primary', value: 'default-primary' }, { label: 'Default Success', value: 'default-success' }, { label: 'Default Warning', value: 'default-warning' }, { label: 'Default Danger', value: 'default-danger' }];

var BUTTON_HOLLOW_VARIANTS = [{ label: 'Hollow Primary', value: 'hollow-primary' }, { label: 'Hollow Success', value: 'hollow-success' }, { label: 'Hollow Warning', value: 'hollow-warning' }, { label: 'Hollow Danger', value: 'hollow-danger' }];

var BUTTON_LINK_VARIANTS = [{ label: 'Link', value: 'link' }, { label: 'Link Text', value: 'link-text' }, { label: 'Link Cancel', value: 'link-cancel' }, { label: 'Link Delete', value: 'link-delete' }];

var Buttons = React.createClass({
	displayName: 'VIEW_Buttons',
	getInitialState: function getInitialState() {
		return {
			dropdownOpen: false
		};
	},
	toggleDropdown: function toggleDropdown() {
		this.setState({ dropdownOpen: !this.state.dropdownOpen });
	},
	renderButtonSizes: function renderButtonSizes() {
		return BUTTON_SIZES.map(function (size) {
			return React.createElement(
				'div',
				{ key: size.value, className: 'code-example__example-element--inline' },
				React.createElement(
					Button,
					{ size: size.value },
					size.label,
					' Button'
				)
			);
		});
	},
	renderButtonVariants: function renderButtonVariants(variantType) {
		return variantType.map(function (type) {
			return React.createElement(
				'div',
				{ key: type.value, className: 'code-example__example-element--inline' },
				React.createElement(
					Button,
					{ type: type.value },
					type.label
				)
			);
		});
	},

	render: function render() {
		return React.createElement(
			Container,
			{ maxWidth: 800, className: 'demo-container' },
			React.createElement(
				'h1',
				null,
				'Buttons'
			),
			React.createElement(
				'h2',
				null,
				'Sizes'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					this.renderButtonSizes()
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Button size="lg">Large Button</Button>\n\t\t\t\t\t\t\t<Button>Default Button</Button>\n\t\t\t\t\t\t\t<Button size="sm">Small Button</Button>\n\t\t\t\t\t\t\t<Button size="xs">Extra Small Button</Button>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Variants'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Fill Buttons'
					),
					this.renderButtonVariants(BUTTON_VARIANTS)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Button type="primary">Primary</Button>\n\t\t\t\t\t\t\t<Button type="success">Success</Button>\n\t\t\t\t\t\t\t<Button type="warning">Warning</Button>\n\t\t\t\t\t\t\t<Button type="danger">Danger</Button>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Default Button Alternatives'
					),
					this.renderButtonVariants(BUTTON_DEFAULT_VARIANTS)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Button type="default-primary">Default Primary</Button>\n\t\t\t\t\t\t\t<Button type="default-success">Default Success</Button>\n\t\t\t\t\t\t\t<Button type="default-warning">Default Warning</Button>\n\t\t\t\t\t\t\t<Button type="default-danger">Default Danger</Button>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Hollow Button Alternatives'
					),
					this.renderButtonVariants(BUTTON_HOLLOW_VARIANTS)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Button type="hollow-primary">Hollow Primary</Button>\n\t\t\t\t\t\t\t<Button type="hollow-success">Hollow Success</Button>\n\t\t\t\t\t\t\t<Button type="hollow-warning">Hollow Warning</Button>\n\t\t\t\t\t\t\t<Button type="hollow-danger">Hollow Danger</Button>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Link Style Buttons'
					),
					this.renderButtonVariants(BUTTON_LINK_VARIANTS)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Button type="link">Link</Button>\n\t\t\t\t\t\t\t<Button type="link-text">Link Text</Button>\n\t\t\t\t\t\t\t<Button type="link-cancel">Link Cancel</Button>\n\t\t\t\t\t\t\t<Button type="link-delete">Link Delete</Button>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h3',
				null,
				'Usage'
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'block'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'bool'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'false'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Turns the button into a block-level element which will fill the width of its container'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'href'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'string'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'\'\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'When provided the component will render as an ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'<a>'
								),
								' instead of ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'<button>'
								)
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'size'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'enum'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'\'\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Size of the button - one of: ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'lg'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'sm'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'xs'
								)
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'submit'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'bool'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'false'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Applies the ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'submit'
								),
								' attribute to the button for use in forms'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'type'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'enum'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'\'default\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'One of:',
								React.createElement('br', null),
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'default'
								),
								React.createElement('br', null),
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'default-primary'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'default-success'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'default-warning'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'default-danger'
								),
								React.createElement('br', null),
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'primary'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'success'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'warning'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'danger'
								),
								React.createElement('br', null),
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'link'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'link-text'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'link-cancel'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'link-delete'
								)
							)
						)
					)
				)
			),
			React.createElement(
				'h2',
				null,
				'Button Groups'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						ButtonGroup,
						null,
						React.createElement(
							Button,
							{ type: 'default' },
							'Left'
						),
						React.createElement(
							Button,
							{ type: 'default' },
							'Middle'
						),
						React.createElement(
							Button,
							{ type: 'default' },
							'Right'
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<ButtonGroup>\n\t\t\t\t\t\t\t\t<Button type="default">Left</Button>\n\t\t\t\t\t\t\t\t<Button type="default">Middle</Button>\n\t\t\t\t\t\t\t\t<Button type="default">Right</Button>\n\t\t\t\t\t\t\t</ButtonGroup>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h3',
				null,
				'Usage'
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'children'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'node'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'undefined'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Required. Must use Elemental ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'<Button />'
								),
								' components for correct styling'
							)
						)
					)
				)
			),
			React.createElement(
				'h2',
				null,
				'Dropdown'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(Dropdown, { items: DROPDOWN_OPTIONS, buttonLabel: 'Default Trigger', className: 'reallyLongCustomClassNameThatStandsOut' })
				),
				React.createElement(
					ExampleSource,
					null,
					'<Dropdown items={[...]} buttonLabel="Default Trigger" />'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Custom Trigger'
					),
					React.createElement(
						Dropdown,
						{ items: DROPDOWN_OPTIONS, className: 'reallyLongCustomClassNameThatStandsOut' },
						React.createElement(
							'h3',
							{ style: { marginBottom: 0 } },
							'I am an H3!'
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Dropdown items={[...]}>\n\t\t\t\t\t\t\t\t<h3>I am an H3!</h3>\n\t\t\t\t\t\t\t</Dropdown>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h3',
				null,
				'Usage'
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'alignRight'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'bool'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'false'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'The dropdown menu is aligned left by default, apply this attribute to right align the dropdown menu'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'buttonHasDisclosureArrow'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'bool'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'true'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Display a disclosure arrow along with the label of the button. Ignore if a custom trigger is employed'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'buttonLabel'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'string'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'\'\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Whatever action the button represents'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'buttonType'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'enum'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'\'\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'See above section on button types'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'children'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'element'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'undefined'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'A single child, cloned and used as the dropdown\'s trigger element'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'isOpen'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'bool'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'false'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'The dropdown menu is controlled by user input. Use this if you need to manually toggle the open state of the dropdown menu'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'items'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'array'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'undefined'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'The list of items to display in the menu formatted'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'onSelect'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'func'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'function() {}'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'The function that is called on each menu item when clicked'
							)
						)
					)
				)
			)
		);
	}
});

module.exports = Buttons;

},{"../components/ExampleSource":47,"elemental":undefined,"react":undefined}],51:[function(require,module,exports){
/* eslint no-script-url: 0 */

'use strict';

var React = require('react/addons');
var classNames = require('classnames');

var ExampleSource = require('../components/ExampleSource');

var _require = require('elemental');

var Container = _require.Container;
var Table = _require.Table;

var USERS = require('../data/users');
var TABLE_HEADERS = ['', 'User', 'Age', 'Gender'];

var CSSExamples = React.createClass({
	displayName: 'CSSExamples',

	getInitialState: function getInitialState() {
		return {
			allChecked: false,
			selectedRows: {}
		};
	},

	toggleAllRows: function toggleAllRows() {
		var selectedRows = {};

		if (!this.state.allChecked) {
			for (var i = 0; i < USERS.length; i++) {
				selectedRows[i] = true;
			}
		}

		this.setState({
			selectedRows: selectedRows,
			allChecked: !this.state.allChecked
		});
	},

	handleChange: function handleChange(e) {
		var selectedRows = this.state.selectedRows;
		if (e.target.value in selectedRows) {
			delete selectedRows[e.target.value];
		} else {
			selectedRows[e.target.value] = true;
		}
		this.setState({
			selectedRows: selectedRows
		});
	},
	render: function render() {
		var self = this;

		var tableHeaderCols = TABLE_HEADERS.map(function (thead, i) {
			var row = !i ? React.createElement(
				'th',
				{ key: 'header-' + i },
				React.createElement(
					'label',
					{ title: 'Toggle all users' },
					React.createElement('input', { type: 'checkbox', onChange: self.toggleAllRows })
				)
			) : React.createElement(
				'th',
				{ key: 'header-' + i },
				thead
			);
			return row;
		});

		var tableRows = USERS.map(function (user, i) {
			var checked = (i in self.state.selectedRows);
			var rowClass = classNames({
				'row-selected': checked
			});

			return React.createElement(
				'tr',
				{ key: 'row-' + i, className: rowClass },
				React.createElement(
					'td',
					null,
					React.createElement(
						'label',
						{ className: 'table-checkbox-label' },
						React.createElement('input', { id: 'checkbox-' + i, value: i, onChange: self.handleChange, checked: checked, type: 'checkbox', name: 'users' })
					)
				),
				React.createElement(
					'td',
					null,
					React.createElement(
						'a',
						{ href: 'javascript:;' },
						user.name
					)
				),
				React.createElement(
					'td',
					null,
					user.age
				),
				React.createElement(
					'td',
					null,
					user.gender.substr(0, 1).toUpperCase()
				)
			);
		});

		return React.createElement(
			Container,
			{ maxWidth: 800, className: 'demo-container' },
			React.createElement(
				'h1',
				null,
				'CSS'
			),
			React.createElement(
				'h2',
				null,
				'Typography'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'h1',
						null,
						'h.1 Elemental heading'
					),
					React.createElement(
						'h2',
						null,
						'h.2 Elemental heading'
					),
					React.createElement(
						'h3',
						null,
						'h.3 Elemental heading'
					),
					React.createElement(
						'h4',
						null,
						'h.4 Elemental heading'
					),
					React.createElement(
						'h5',
						null,
						'h.5 Elemental heading'
					),
					React.createElement(
						'h6',
						null,
						'h.6 Elemental heading'
					),
					React.createElement('hr', null),
					React.createElement(
						'div',
						{ className: 'lead' },
						'This is a page lead, it introduces the proceeding content.'
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<h1>h.1 Elemental heading</h1>\n\t\t\t\t\t\t\t<h2>h.2 Elemental heading</h2>\n\t\t\t\t\t\t\t<h3>h.3 Elemental heading</h3>\n\t\t\t\t\t\t\t<h4>h.4 Elemental heading</h4>\n\t\t\t\t\t\t\t<h5>h.5 Elemental heading</h5>\n\t\t\t\t\t\t\t<h6>h.6 Elemental heading</h6>\n\t\t\t\t\t\t\t<hr />\n\t\t\t\t\t\t\t<div className="lead">This is a page lead, it introduces the proceeding content.</div>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Tables'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						Table,
						null,
						React.createElement(
							'colgroup',
							null,
							React.createElement('col', { width: '50' }),
							React.createElement('col', { width: '' }),
							React.createElement('col', { width: '10%' }),
							React.createElement('col', { width: '10%' })
						),
						React.createElement(
							'thead',
							null,
							tableHeaderCols
						),
						React.createElement(
							'tbody',
							null,
							tableRows
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Table>\n\t\t\t\t\t\t\t\t<colgroup>\n\t\t\t\t\t\t\t\t\t<col width="50" />\n\t\t\t\t\t\t\t\t\t<col width="" />\n\t\t\t\t\t\t\t\t\t<col width="10%" />\n\t\t\t\t\t\t\t\t\t<col width="10%" />\n\t\t\t\t\t\t\t\t</colgroup>\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" />\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t<th>User</th>\n\t\t\t\t\t\t\t\t\t\t<th>Age</th>\n\t\t\t\t\t\t\t\t\t\t<th>Gender</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t{...}\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" />\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:;">Hanna Villarreal</a>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>39</td>\n\t\t\t\t\t\t\t\t\t\t<td>F</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t{...}\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</Table>\n\t\t\t\t\t\t'
				)
			)
		);
	}
});

module.exports = CSSExamples;

},{"../components/ExampleSource":47,"../data/users":49,"classnames":undefined,"elemental":undefined,"react/addons":undefined}],52:[function(require,module,exports){
/* eslint no-alert: 0 */

'use strict';

var React = require('react');

var _require = require('elemental');

var Button = _require.Button;
var Checkbox = _require.Checkbox;
var Container = _require.Container;
var EmailInputGroup = _require.EmailInputGroup;
var FileDragAndDrop = _require.FileDragAndDrop;
var FileUpload = _require.FileUpload;
var Form = _require.Form;
var FormField = _require.FormField;
var FormIconField = _require.FormIconField;
var FormInput = _require.FormInput;
var FormNote = _require.FormNote;
var FormRow = _require.FormRow;
var FormSelect = _require.FormSelect;
var InputGroup = _require.InputGroup;
var PasswordInputGroup = _require.PasswordInputGroup;
var Radio = _require.Radio;
var RadioGroup = _require.RadioGroup;
var Table = _require.Table;

var ExampleSource = require('../components/ExampleSource');

var controlOptions = [{ label: 'Caramel', value: 'caramel' }, { label: 'Chocolate', value: 'chocolate' }, { label: 'Strawberry', value: 'strawberry' }, { label: 'Vanilla', value: 'vanilla' }];
var COUNTRIES = require('../data/countries');
var COLOR_VARIANTS = [{ label: 'Default', icon: 'star', value: 'default' }, { label: 'Primary', icon: 'info', value: 'primary' }, { label: 'Success', icon: 'check', value: 'success' }, { label: 'Warning', icon: 'alert', value: 'warning' }, { label: 'Danger', icon: 'stop', value: 'danger' }];

var Forms = React.createClass({
	displayName: 'VIEW_Forms',

	getInitialState: function getInitialState() {
		return {
			'inputEmail': '',
			'inputPassword': '',
			'inputConfirm': ''
		};
	},

	onDrop: function onDrop(files) {
		var outputFileInfo = files.map(function (file) {
			return '"' + file.name + '" (' + Math.round(file.size / 1024) + 'Kb)';
		});
		alert('Received files: \n' + outputFileInfo.join('\n'));
		this.setState({
			files: files
		});
	},
	handleSearch: function handleSearch() {
		var self = this;
		self.setState({ searching: true });

		setTimeout(function () {
			self.setState({ searching: false });
		}, 1000);
	},

	render: function render() {
		var self = this;

		// handle form input and validation
		function updateSelect(option) {
			self.setState({ inputSelect: option });
		}
		function updateInlineRadios(option) {
			self.setState({ inlineRadioGroup: option });
		}
		function updateEmail(e) {
			self.setState({ inputEmail: e.target.value });
		}
		function updatePassword(e) {
			self.setState({ inputPassword: e.target.value });
		}
		function updateConfirm(e) {
			self.setState({ inputConfirm: e.target.value });
		}
		function validateConfirm(value) {
			return value === self.state.inputPassword;
		}

		// elements
		var countryOptions = COUNTRIES.map(function (country) {
			return { label: country.name, value: country.code };
		});

		// Icon Loops

		var iconContextVariantsColor = COLOR_VARIANTS.map(function (color) {
			return React.createElement(
				FormIconField,
				{ key: color.value, width: 'one-fifth', iconPosition: 'left', iconKey: color.icon, iconColor: color.value },
				React.createElement(FormInput, { placeholder: color.label, name: 'icon-form-context-variants-color' + color.value })
			);
		});

		var iconContextVariantsFill = COLOR_VARIANTS.map(function (color) {
			return React.createElement(
				FormIconField,
				{ key: color.value, width: 'one-fifth', iconPosition: 'left', iconKey: color.icon, iconFill: color.value },
				React.createElement(FormInput, { placeholder: color.label, name: 'icon-form-context-variants-color' + color.value })
			);
		});

		return React.createElement(
			Container,
			{ maxWidth: 800, className: 'demo-container' },
			React.createElement(
				'h1',
				null,
				'Forms'
			),
			React.createElement(
				'h2',
				null,
				'Basic Example'
			),
			React.createElement(
				'p',
				null,
				'Individual form controls automatically receive some global styling. All textual ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'<FormInput>'
				),
				', and ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'<FormSelect>'
				),
				' elements with are set to ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'width: 100%;'
				),
				' by default. Wrap controls in ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'<FormField>'
				),
				' for optimum spacing.'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						Form,
						null,
						React.createElement(
							FormField,
							{ label: 'Email address', htmlFor: 'basic-form-input-email' },
							React.createElement(FormInput, { type: 'email', placeholder: 'Enter email', name: 'basic-form-input-email' })
						),
						React.createElement(
							FormField,
							{ label: 'Password', htmlFor: 'basic-form-input-password' },
							React.createElement(FormInput, { type: 'password', placeholder: 'Password', name: 'basic-form-input-password' })
						),
						React.createElement(
							FormField,
							null,
							React.createElement(Checkbox, { label: 'Check it' })
						),
						React.createElement(
							Button,
							{ type: 'default' },
							'Submit'
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Form>\n\t\t\t\t\t\t\t\t<FormField label="Email address" htmlFor="basic-form-input-email">\n\t\t\t\t\t\t\t\t\t<FormInput type="email" placeholder="Enter email" name="basic-form-input-email" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField label="Password" htmlFor="basic-form-input-password">\n\t\t\t\t\t\t\t\t\t<FormInput type="password" placeholder="Password" name="basic-form-input-password" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField>\n\t\t\t\t\t\t\t\t\t<Checkbox label="Check it" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<Button type="default">Submit</Button>\n\t\t\t\t\t\t\t</Form>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Horizontal Form'
			),
			React.createElement(
				'p',
				null,
				'Adding the type ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'horizontal'
				),
				' to your ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'<Form />'
				),
				' changes the ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'FormField'
				),
				' component to behave like a row. The label width can be updated from inside the LESS variables file where it\'s defined as ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'@form-label-width'
				),
				'. This only applies to forms within viewports that are at least 768px wide.'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						Form,
						{ type: 'horizontal' },
						React.createElement(
							FormField,
							{ label: 'Email address', htmlFor: 'horizontal-form-input-email' },
							React.createElement(FormInput, { type: 'email', placeholder: 'Enter email', name: 'horizontal-form-input-email' })
						),
						React.createElement(
							FormField,
							{ label: 'Password', htmlFor: 'horizontal-form-input-password' },
							React.createElement(FormInput, { type: 'password', placeholder: 'Password', name: 'horizontal-form-input-password' })
						),
						React.createElement(
							FormField,
							{ offsetAbsentLabel: true },
							React.createElement(Checkbox, { label: 'Check it' })
						),
						React.createElement(
							FormField,
							{ offsetAbsentLabel: true },
							React.createElement(
								Button,
								{ type: 'default' },
								'Submit'
							)
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Form type="horizontal">\n\t\t\t\t\t\t\t\t<FormField label="Email address" htmlFor="horizontal-form-input-email">\n\t\t\t\t\t\t\t\t\t<FormInput type="email" placeholder="Enter email" name="horizontal-form-input-email" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField label="Password" htmlFor="horizontal-form-input-password">\n\t\t\t\t\t\t\t\t\t<FormInput type="password" placeholder="Password" name="horizontal-form-input-password" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField offsetAbsentLabel>\n\t\t\t\t\t\t\t\t\t<Checkbox label="Check it" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField offsetAbsentLabel>\n\t\t\t\t\t\t\t\t\t<Button type="default">Submit</Button>\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t</Form>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Inline Form'
			),
			React.createElement(
				'p',
				null,
				'Add the type ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'inline'
				),
				' to your ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'<Form />'
				),
				' for left-aligned and inline-block controls. This only applies to forms within viewports that are at least 768px wide.'
			),
			React.createElement(
				'p',
				null,
				'Note: you should always use labels to improve accessibility - they are only visible to screen readers. Form labels within viewports that are below 768px wide will be rendered regularly to improve usability.'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						Form,
						{ type: 'inline' },
						React.createElement(
							FormField,
							{ label: 'Email address', htmlFor: 'inline-form-input-email' },
							React.createElement(FormInput, { type: 'email', placeholder: 'Enter email', name: 'inline-form-input-email' })
						),
						React.createElement(
							FormField,
							{ label: 'Password', htmlFor: 'inline-form-input-password' },
							React.createElement(FormInput, { type: 'password', placeholder: 'Password', name: 'inline-form-input-password' })
						),
						React.createElement(
							FormField,
							null,
							React.createElement(Checkbox, { label: 'Check it' })
						),
						React.createElement(
							FormField,
							null,
							React.createElement(
								Button,
								{ type: 'default' },
								'Submit'
							)
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Form type="inline">\n\t\t\t\t\t\t\t\t<FormField label="Email address" htmlFor="inline-form-input-email">\n\t\t\t\t\t\t\t\t\t<FormInput type="email" placeholder="Enter email" name="inline-form-input-email" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField label="Password" htmlFor="inline-form-input-password">\n\t\t\t\t\t\t\t\t\t<FormInput type="password" placeholder="Password" name="inline-form-input-password" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField>\n\t\t\t\t\t\t\t\t\t<Checkbox label="Check it" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField>\n\t\t\t\t\t\t\t\t\t<Button type="default">Submit</Button>\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t</Form>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Input Groups'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Contiguous form elements'
					),
					React.createElement(
						InputGroup,
						{ contiguous: true },
						React.createElement(
							InputGroup.Section,
							{ grow: true },
							React.createElement(FormInput, { type: 'text', placeholder: 'Input group field' })
						),
						React.createElement(
							InputGroup.Section,
							null,
							React.createElement(
								Button,
								null,
								'Button'
							)
						)
					),
					React.createElement(
						InputGroup,
						{ contiguous: true },
						React.createElement(
							InputGroup.Section,
							{ type: 'primary' },
							React.createElement(
								Button,
								null,
								React.createElement('span', { className: 'octicon octicon-pencil' })
							)
						),
						React.createElement(
							InputGroup.Section,
							{ grow: true },
							React.createElement(FormInput, { type: 'text', placeholder: 'Input group field' })
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<InputGroup contiguous>\n\t\t\t\t\t\t\t\t<InputGroup.Section grow>\n\t\t\t\t\t\t\t\t\t<FormInput type="text" placeholder="Input group field" />\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t\t<InputGroup.Section>\n\t\t\t\t\t\t\t\t\t<Button>Button</Button>\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t</InputGroup>\n\t\t\t\t\t\t\t<InputGroup contiguous>\n\t\t\t\t\t\t\t\t<InputGroup.Section type="primary">\n\t\t\t\t\t\t\t\t\t<Button><span className="octicon octicon-pencil" /></Button>\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t\t<InputGroup.Section grow>\n\t\t\t\t\t\t\t\t\t<FormInput type="text" placeholder="Input group field" />\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t</InputGroup>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Separate when required'
					),
					React.createElement(
						InputGroup,
						null,
						React.createElement(
							InputGroup.Section,
							{ grow: true },
							React.createElement(FormInput, { type: 'text', placeholder: 'Input group field' })
						),
						React.createElement(
							InputGroup.Section,
							null,
							React.createElement(
								Button,
								{ type: 'primary' },
								'Button'
							)
						)
					),
					React.createElement(
						InputGroup,
						null,
						React.createElement(
							InputGroup.Section,
							null,
							React.createElement(
								Button,
								{ type: 'primary' },
								React.createElement('span', { className: 'octicon octicon-pencil' })
							)
						),
						React.createElement(
							InputGroup.Section,
							{ grow: true },
							React.createElement(FormInput, { type: 'text', placeholder: 'Input group field' })
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<InputGroup>\n\t\t\t\t\t\t\t\t<InputGroup.Section grow>\n\t\t\t\t\t\t\t\t\t<FormInput type="text" placeholder="Input group field" />\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t\t<InputGroup.Section>\n\t\t\t\t\t\t\t\t\t<Button type="primary">Button</Button>\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t</InputGroup>\n\t\t\t\t\t\t\t<InputGroup>\n\t\t\t\t\t\t\t\t<InputGroup.Section>\n\t\t\t\t\t\t\t\t\t<Button type="primary">\n\t\t\t\t\t\t\t\t\t\t<span className="octicon octicon-pencil" />\n\t\t\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t\t<InputGroup.Section grow>\n\t\t\t\t\t\t\t\t\t<FormInput type="text" placeholder="Input group field" />\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t</InputGroup>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'More sophisticated formations'
					),
					React.createElement(
						InputGroup,
						{ contiguous: true },
						React.createElement(
							InputGroup.Section,
							null,
							React.createElement(
								Button,
								null,
								'Alpha'
							)
						),
						React.createElement(
							InputGroup.Section,
							{ grow: true },
							React.createElement(FormInput, { type: 'text', placeholder: 'Input group field' })
						),
						React.createElement(
							InputGroup.Section,
							null,
							React.createElement(
								Button,
								{ type: 'primary' },
								'Omega'
							)
						)
					),
					React.createElement(
						InputGroup,
						null,
						React.createElement(
							InputGroup.Section,
							{ grow: true },
							React.createElement(FormInput, { type: 'text', placeholder: 'Input group field 1' })
						),
						React.createElement(
							InputGroup.Section,
							{ grow: true },
							React.createElement(FormInput, { type: 'text', placeholder: 'Input group field 2' })
						),
						React.createElement(
							InputGroup.Section,
							null,
							React.createElement(
								Button,
								{ type: 'primary' },
								'Primary'
							)
						),
						React.createElement(
							InputGroup.Section,
							null,
							React.createElement(
								Button,
								null,
								'Default'
							)
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<InputGroup contiguous>\n\t\t\t\t\t\t\t\t<InputGroup.Section>\n\t\t\t\t\t\t\t\t\t<Button>Alpha</Button>\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t\t<InputGroup.Section grow>\n\t\t\t\t\t\t\t\t\t<FormInput type="text" placeholder="Input group field" />\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t\t<InputGroup.Section>\n\t\t\t\t\t\t\t\t\t<Button type="primary">Omega</Button>\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t</InputGroup>\n\t\t\t\t\t\t\t<InputGroup>\n\t\t\t\t\t\t\t\t<InputGroup.Section grow>\n\t\t\t\t\t\t\t\t\t<FormInput type="text" placeholder="Input group field" />\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t\t<InputGroup.Section>\n\t\t\t\t\t\t\t\t\t<Button type="primary">Primary</Button>\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t\t<InputGroup.Section>\n\t\t\t\t\t\t\t\t\t<Button>Default</Button>\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t</InputGroup>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Sizes'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						FormField,
						{ label: 'Input', htmlFor: 'supported-controls-input' },
						React.createElement(FormInput, { placeholder: 'Input', name: 'supported-controls-input' })
					),
					React.createElement(
						FormField,
						{ label: 'Large Input', htmlFor: 'supported-controls-input-lg' },
						React.createElement(FormInput, { placeholder: 'Large', name: 'supported-controls-input-lg', size: 'lg' })
					),
					React.createElement(
						FormField,
						{ label: 'Small Input', htmlFor: 'supported-controls-input-sm' },
						React.createElement(FormInput, { placeholder: 'Small', name: 'supported-controls-input-sm', size: 'sm' })
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<FormField label="Input" htmlFor="supported-controls-input">\n\t\t\t\t\t\t\t\t<FormInput placeholder="Input" name="supported-controls-input" />\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t<FormField label="Large Input" htmlFor="supported-controls-input-lg">\n\t\t\t\t\t\t\t\t<FormInput placeholder="Large" name="supported-controls-input-lg" size="lg" />\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t<FormField label="Small Input" htmlFor="supported-controls-input-sm">\n\t\t\t\t\t\t\t\t<FormInput placeholder="Small" name="supported-controls-input-sm" size="sm" />\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Supported Controls'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(FormInput, { placeholder: 'Input' })
				),
				React.createElement(
					ExampleSource,
					null,
					'<FormInput placeholder="Input" />'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(FormInput, { placeholder: 'Textarea', multiline: true })
				),
				React.createElement(
					ExampleSource,
					null,
					'<FormInput placeholder="Textarea" multiline />'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(FormSelect, { options: controlOptions, firstOption: 'Select', onChange: updateSelect })
				),
				React.createElement(
					ExampleSource,
					null,
					'<FormSelect options={[...]} firstOption="Select" onChange={this.handleSelect} />'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						FormField,
						{ label: 'Checkboxes' },
						React.createElement(Checkbox, { label: 'Check me out' }),
						React.createElement(Checkbox, { label: 'Check me out' })
					),
					React.createElement(
						FormField,
						{ label: 'Radios' },
						React.createElement(Radio, { name: 'default_radios', label: 'Pick me' }),
						React.createElement(Radio, { name: 'default_radios', label: 'Pick me' })
					),
					React.createElement(
						FormField,
						{ label: 'Inline Checkboxes' },
						React.createElement(
							'div',
							{ className: 'inline-controls' },
							React.createElement(Checkbox, { label: 'Check me out' }),
							React.createElement(Checkbox, { label: 'Check me out' })
						)
					),
					React.createElement(
						FormField,
						{ label: 'Inline Radios' },
						React.createElement(
							'div',
							{ className: 'inline-controls' },
							React.createElement(Radio, { name: 'inline_radios', label: 'Pick me' }),
							React.createElement(Radio, { name: 'inline_radios', label: 'Pick me' })
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<FormField label="Checkboxes">\n\t\t\t\t\t\t\t\t<Checkbox label="Check me out" />\n\t\t\t\t\t\t\t\t<Checkbox label="I\'m disabled" disabled />\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t<FormField label="Radios">\n\t\t\t\t\t\t\t\t<Radio name="default_radios" label="Pick me" />\n\t\t\t\t\t\t\t\t<Radio name="default_radios" label="Pick me" />\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t<FormField label="Inline Checkboxes">\n\t\t\t\t\t\t\t\t<div className="inline-controls">\n\t\t\t\t\t\t\t\t\t<Checkbox label="Check me out" />\n\t\t\t\t\t\t\t\t\t<Checkbox label="I\'m disabled" disabled />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t<FormField label="Inline Radios">\n\t\t\t\t\t\t\t\t<div className="inline-controls">\n\t\t\t\t\t\t\t\t\t<Radio name="inline_radios" label="Pick me" />\n\t\t\t\t\t\t\t\t\t<Radio name="inline_radios" label="Pick me" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Disabled State'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						FormField,
						{ label: 'Input', htmlFor: 'supported-controls-input-disabled' },
						React.createElement(FormInput, { placeholder: 'Input', name: 'supported-controls-input-disabled', disabled: true })
					),
					React.createElement(
						FormField,
						{ label: 'Textarea', htmlFor: 'supported-controls-textarea' },
						React.createElement(FormInput, { placeholder: 'Textarea', name: 'supported-controls-textarea-disabled', disabled: true, multiline: true })
					),
					React.createElement(FormSelect, { label: 'Select', options: controlOptions, onChange: updateSelect, htmlFor: 'supported-conrols-select-disabled', firstOption: 'Select', disabled: true }),
					React.createElement(
						FormField,
						{ label: 'Checkboxes' },
						React.createElement(Checkbox, { label: 'Check me out', disabled: true })
					),
					React.createElement(
						FormField,
						{ label: 'Radios' },
						React.createElement(Radio, { name: 'default_radios', label: 'Pick me', disabled: true })
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<FormField label="Input" htmlFor="supported-controls-input-disabled">\n\t\t\t\t\t\t\t\t<FormInput placeholder="Input" name="supported-controls-input-disabled" disabled />\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t<FormField label="Textarea" htmlFor="supported-controls-textarea">\n\t\t\t\t\t\t\t\t<FormInput placeholder="Textarea" name="supported-controls-textarea-disabled" disabled multiline />\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t<FormSelect label="Select" options={controlOptions} onChange={updateSelect} htmlFor="supported-conrols-select-disabled" firstOption="Select" disabled />\n\t\t\t\t\t\t\t<FormField label="Checkboxes">\n\t\t\t\t\t\t\t\t<Checkbox label="Check me out" disabled />\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t<FormField label="Radios">\n\t\t\t\t\t\t\t\t<Radio name="default_radios" label="Pick me" disabled />\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Notes'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						FormField,
						{ label: 'Input with note' },
						React.createElement(FormInput, null),
						React.createElement(
							FormNote,
							null,
							'A note to help the user understand its associated field; may extend beyond one line.'
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<FormField label="Input with note">\n\t\t\t\t\t\t\t\t<FormInput />\n\t\t\t\t\t\t\t\t<FormNote>A note to help the user understand its associated field; may extend beyond one line.</FormNote>\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Complex Forms'
			),
			React.createElement(
				'p',
				null,
				'Wrap any group of ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'<FormField>'
				),
				' in the ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'<FormRow>'
				),
				' component to easily set desired widths.'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						FormRow,
						null,
						React.createElement(
							FormField,
							{ width: 'one-half', label: 'Credit Card Number', htmlFor: 'credit-card-number' },
							React.createElement(FormInput, { pattern: '[0-9]*', placeholder: 'Card Number', name: 'credit-card-number' })
						),
						React.createElement(
							FormField,
							{ width: 'one-quarter', label: 'Expiration', htmlFor: 'credit-card-expiration' },
							React.createElement(FormInput, { placeholder: 'MM/YYYY', name: 'credit-card-expiration' })
						),
						React.createElement(
							FormField,
							{ width: 'one-quarter', label: 'Security Code (CCV)', htmlFor: 'credit-card-security' },
							React.createElement(FormInput, { pattern: '[0-9]*', placeholder: '123', name: 'credit-card-security' })
						)
					),
					React.createElement(
						FormRow,
						null,
						React.createElement(
							FormField,
							{ width: 'one-half', label: 'First Name', htmlFor: 'first-name' },
							React.createElement(FormInput, { placeholder: 'First Name', name: 'first-name' })
						),
						React.createElement(
							FormField,
							{ width: 'one-half', label: 'Last Name', htmlFor: 'last-name' },
							React.createElement(FormInput, { placeholder: 'Last Name', name: 'last-name' })
						)
					),
					React.createElement(
						FormField,
						{ label: 'Billing Address', htmlFor: 'address-street1' },
						React.createElement(FormInput, { placeholder: 'Address Line 1', name: 'address-street1' })
					),
					React.createElement(
						FormField,
						null,
						React.createElement(FormInput, { placeholder: 'Address Line 2', name: 'address-street2' })
					),
					React.createElement(
						FormRow,
						null,
						React.createElement(
							FormField,
							{ width: 'two-thirds' },
							React.createElement(FormInput, { placeholder: 'City', name: 'city' })
						),
						React.createElement(
							FormField,
							{ width: 'one-third' },
							React.createElement(FormInput, { placeholder: 'State', name: 'state' })
						),
						React.createElement(
							FormField,
							{ width: 'one-third' },
							React.createElement(FormInput, { width: 'one-third', placeholder: 'Post Code', name: 'city' })
						),
						React.createElement(
							FormField,
							{ width: 'two-thirds' },
							React.createElement(FormSelect, { options: countryOptions, firstOption: 'Country', onChange: updateSelect })
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<FormRow>\n\t\t\t\t\t\t\t\t<FormField width="one-half" label="Credit Card Number" htmlFor="credit-card-number">\n\t\t\t\t\t\t\t\t\t<FormInput pattern="[0-9]*" placeholder="Card Number" name="credit-card-number" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField width="one-quarter" label="Expiration" htmlFor="credit-card-expiration">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="MM/YYYY" name="credit-card-expiration" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField width="one-quarter" label="Security Code (CCV)" htmlFor="credit-card-security">\n\t\t\t\t\t\t\t\t\t<FormInput pattern="[0-9]*" placeholder="123" name="credit-card-security" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t</FormRow>\n\t\t\t\t\t\t\t<FormRow>\n\t\t\t\t\t\t\t\t<FormField width="one-half" label="First Name" htmlFor="first-name">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="First Name" name="first-name" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField width="one-half" label="Last Name" htmlFor="last-name">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Last Name" name="last-name" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t</FormRow>\n\t\t\t\t\t\t\t<FormField label="Billing Address" htmlFor="address-street1">\n\t\t\t\t\t\t\t\t<FormInput placeholder="Address Line 1" name="address-street1" />\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t<FormField>\n\t\t\t\t\t\t\t\t<FormInput placeholder="Address Line 2" name="address-street2" />\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t<FormRow>\n\t\t\t\t\t\t\t\t<FormField width="two-thirds">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="City" name="city" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField width="one-third">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="State" name="state" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField width="one-third">\n\t\t\t\t\t\t\t\t\t<FormInput width="one-third" placeholder="Post Code" name="city" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField width="two-thirds">\n\t\t\t\t\t\t\t\t\t<FormSelect options={countryOptions} firstOption="Country" onChange={updateSelect} />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t</FormRow>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h3',
				null,
				'Usage'
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								null,
								'label'
							),
							React.createElement(
								'td',
								null,
								'string'
							),
							React.createElement(
								'td',
								null,
								'\'\''
							),
							React.createElement('td', { className: 'usage-table__description' })
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								null,
								'offsetAbsentLabel'
							),
							React.createElement(
								'td',
								null,
								'bool'
							),
							React.createElement(
								'td',
								null,
								'false'
							),
							React.createElement('td', { className: 'usage-table__description' })
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								null,
								'width'
							),
							React.createElement(
								'td',
								null,
								'string'
							),
							React.createElement(
								'td',
								null,
								'\'\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Declare a width for your field; must be used inside a ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'<FormRow>'
								),
								' component. Possible options:',
								React.createElement('br', null),
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'one-half'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'two-quarters'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'three-sixths'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'one-quarter'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'three-quarters'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'one-third'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'two-sixths'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'two-thirds'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'four-sixths'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'one-fifth'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'two-fifths'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'three-fifths'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'four-fifths'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'one-sixth'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'five-sixths'
								)
							)
						)
					)
				)
			),
			React.createElement(
				'h2',
				null,
				'Icons'
			),
			React.createElement(
				'p',
				{ className: 'lead' },
				'Elemental uses the wonderful ',
				React.createElement(
					'a',
					{ href: 'https://octicons.github.com/', target: '_blank' },
					'Octicons Suite from GitHub'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Alignment'
					),
					React.createElement(
						FormRow,
						null,
						React.createElement(
							FormIconField,
							{ width: 'one-half', iconPosition: 'left', iconColor: 'default', iconKey: 'star' },
							React.createElement(FormInput, { placeholder: 'Left Aligned', name: 'icon-alignment-left' })
						),
						React.createElement(
							FormIconField,
							{ width: 'one-half', iconPosition: 'right', iconColor: 'default', iconKey: 'star' },
							React.createElement(FormInput, { placeholder: 'Right Aligned', name: 'icon-alignment-right' })
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<FormRow>\n\t\t\t\t\t\t\t\t<FormIconField width="one-half" iconPosition="left" iconColor="default" iconKey="star">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Left Aligned" name="icon-alignment-left" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t\t<FormIconField width="one-half" iconPosition="right" iconColor="default" iconKey="star">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Right Aligned" name="icon-alignment-right" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t</FormRow>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Context Variants: Color'
					),
					React.createElement(
						FormRow,
						null,
						iconContextVariantsColor
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<FormRow>\n\t\t\t\t\t\t\t\t<FormIconField width="one-fifth" iconPosition="left" iconKey="star" iconColor="default">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Default" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t\t<FormIconField width="one-fifth" iconPosition="left" iconKey="info" iconColor="primary">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Primary" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t\t<FormIconField width="one-fifth" iconPosition="left" iconKey="check" iconColor="success">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Success" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t\t<FormIconField width="one-fifth" iconPosition="left" iconKey="alert" iconColor="warning">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Warning" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t\t<FormIconField width="one-fifth" iconPosition="left" iconKey="stop" iconColor="danger">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Danger" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t</FormRow>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Context Variants: Fill'
					),
					React.createElement(
						FormRow,
						null,
						iconContextVariantsFill
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<FormRow>\n\t\t\t\t\t\t\t\t<FormIconField width="one-fifth" iconPosition="left" iconKey="star" iconFill="default">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Default" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t\t<FormIconField width="one-fifth" iconPosition="left" iconKey="info" iconFill="primary">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Primary" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t\t<FormIconField width="one-fifth" iconPosition="left" iconKey="check" iconFill="success">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Success" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t\t<FormIconField width="one-fifth" iconPosition="left" iconKey="alert" iconFill="warning">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Warning" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t\t<FormIconField width="one-fifth" iconPosition="left" iconKey="stop" iconFill="danger">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Danger" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t</FormRow>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Loading Indicator'
					),
					React.createElement(
						FormIconField,
						{ iconPosition: 'right', iconKey: 'search', iconColor: 'default', iconIsLoading: this.state.searching },
						React.createElement(FormInput, { onChange: this.handleSearch, type: 'search', placeholder: 'Search...', name: 'icon-form-search' })
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<FormIconField iconPosition="right" iconKey="search" iconColor="default" iconIsLoading={this.state.searching}>\n\t\t\t\t\t\t\t\t<FormInput onChange={this.handleSearch} type="search" placeholder="Search..." name="icon-form-search" />\n\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Validation'
			),
			React.createElement(
				'form',
				null,
				React.createElement(RadioGroup, { label: 'Radios', value: this.state.inlineRadioGroup, onChange: updateInlineRadios, options: controlOptions, name: 'inlineRadioGroup', required: true, inline: true }),
				React.createElement(FormSelect, { label: 'Select', value: this.state.inputSelect, onChange: updateSelect, options: controlOptions, htmlFor: 'inputSelect', required: true, prependEmptyOption: true }),
				React.createElement(EmailInputGroup, { label: 'Email', value: this.state.inputEmail, onChange: updateEmail, required: true }),
				React.createElement(PasswordInputGroup, { label: 'Password', value: this.state.inputPassword, onChange: updatePassword, required: true }),
				React.createElement(PasswordInputGroup, { label: 'Confirm', value: this.state.inputConfirm, onChange: updateConfirm, required: true, validatePassword: validateConfirm, invalidMessage: 'Password confirmation doesn\'t match password' })
			),
			React.createElement(
				'h2',
				null,
				'File Upload'
			),
			React.createElement(
				Form,
				{ type: 'horizontal' },
				React.createElement(
					FormField,
					{ label: 'Image' },
					React.createElement(FileUpload, { buttonLabelInitial: 'Upload Image', buttonLabelChange: 'Change Image', accept: 'image/jpg, image/gif, image/png' })
				),
				React.createElement(
					FormField,
					{ label: 'Images' },
					React.createElement(FileDragAndDrop, { files: this.state.files, onDrop: this.onDrop })
				)
			)
		);
	}
});

module.exports = Forms;

},{"../components/ExampleSource":47,"../data/countries":48,"elemental":undefined,"react":undefined}],53:[function(require,module,exports){
/* eslint no-script-url: 0 */

'use strict';

var React = require('react');

var _require = require('elemental');

var Glyph = _require.Glyph;
var Container = _require.Container;
var Table = _require.Table;
var Col = _require.Col;
var Row = _require.Row;
var Card = _require.Card;
var Button = _require.Button;

var ExampleSource = require('../components/ExampleSource');

var GLYPH_COLOR_TYPES = ['danger', 'default', 'muted', 'primary', 'success', 'warning'];

var Glyphs = React.createClass({
	displayName: 'VIEW_Glyphs',
	renderGlyphColorTypes: function renderGlyphColorTypes() {
		return GLYPH_COLOR_TYPES.map(function (color) {
			return React.createElement(
				'span',
				null,
				React.createElement(
					'code',
					{ className: 'inline-code' },
					color
				),
				' '
			);
		});
	},
	renderGlyphColors: function renderGlyphColors(icon) {
		return GLYPH_COLOR_TYPES.map(function (color) {
			return React.createElement(
				'div',
				{ key: color + icon, className: 'code-example__example-element--inline' },
				React.createElement(Glyph, { icon: icon, type: color }),
				' ',
				color
			);
		});
	},
	renderGlyphColorsExample: function renderGlyphColorsExample(icon) {
		var stringRep = '';
		GLYPH_COLOR_TYPES.forEach(function (color) {
			stringRep += '<Glyph icon=\'' + icon + '\' type=\'' + color + '\' />\n';
		});
		return stringRep;
	},
	renderGlyphGrid: function renderGlyphGrid(perRow) {
		var rows = [];
		var colSize = '1/' + perRow;

		var row = [];
		Glyph.names.forEach(function (glyph, index) {
			if (index % perRow === 0) {
				rows.push(row);
				row = [];
			}
			row.push(glyph);
		});

		return rows.map(function (row, index) {
			var cols = row.map(function (glyph) {
				return React.createElement(
					Col,
					{ key: 'col_' + glyph, sm: colSize },
					React.createElement(
						Card,
						{ className: 'code-example--glyph__icon' },
						React.createElement(Glyph, { key: glyph, icon: glyph }),
						React.createElement(
							'div',
							{ className: 'code-example--glyph__icon-name' },
							glyph
						)
					)
				);
			});
			return React.createElement(
				Row,
				{ key: 'row_' + index },
				cols
			);
		});
	},
	render: function render() {
		return React.createElement(
			Container,
			{ maxWidth: 800, className: 'demo-container' },
			React.createElement(
				'h1',
				null,
				'Glyphs'
			),
			React.createElement(
				'h2',
				null,
				'Basic Example'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(Glyph, { icon: 'thumbsup' })
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Glyph icon="thumbsup" />\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'icon'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'string'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'\'\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Required. Icon name from Octicons.'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'type'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'enum'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'\'default\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'One of:',
								React.createElement('br', null),
								this.renderGlyphColorTypes()
							)
						)
					)
				)
			),
			React.createElement(
				'h2',
				null,
				'Icons'
			),
			React.createElement(
				'p',
				{ className: 'lead' },
				'Elemental uses the wonderful ',
				React.createElement(
					'a',
					{ href: 'https://octicons.github.com/', target: '_blank' },
					'Octicons Suite from GitHub'
				)
			),
			this.renderGlyphGrid(6),
			React.createElement(
				'h2',
				null,
				'Colors'
			),
			React.createElement(
				'p',
				{ className: 'lead' },
				'Glyph colors can be customized.'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Glyph colors'
					),
					this.renderGlyphColors('heart')
				),
				React.createElement(
					ExampleSource,
					null,
					this.renderGlyphColorsExample('heart')
				)
			),
			React.createElement(
				'h2',
				null,
				'Buttons'
			),
			React.createElement(
				'p',
				{ className: 'lead' },
				'Glyphs work well with ',
				React.createElement(
					'a',
					{ href: '/buttons' },
					'Buttons'
				),
				'.'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Buttons'
					),
					React.createElement(
						Button,
						{ type: 'primary' },
						React.createElement(Glyph, { icon: 'beaker' })
					),
					' ',
					React.createElement(
						Button,
						{ type: 'danger' },
						React.createElement(Glyph, { icon: 'flame' })
					),
					' ',
					React.createElement(
						Button,
						{ type: 'success' },
						React.createElement(Glyph, { icon: 'squirrel' })
					),
					' ',
					React.createElement(
						Button,
						{ type: 'warning' },
						React.createElement(Glyph, { icon: 'beaker' })
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Button type="primary"><Glyph icon="beaker" /></Button>\n\t\t\t\t\t\t\t<Button type="danger"><Glyph icon="flame" /></Button>\n\t\t\t\t\t\t\t<Button type="success"><Glyph icon="squirrel" /></Button>\n\t\t\t\t\t\t\t<Button type="warning"><Glyph icon="beaker" /></Button>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Link Buttons'
					),
					React.createElement(
						Button,
						{ type: 'link' },
						React.createElement(Glyph, { icon: 'bug' })
					),
					React.createElement(
						Button,
						{ type: 'link' },
						React.createElement(Glyph, { icon: 'squirrel', type: 'danger' })
					),
					React.createElement(
						Button,
						{ type: 'link-delete' },
						React.createElement(Glyph, { icon: 'circle-slash' })
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Button type="link"><Glyph icon="bug" /></Button>\n\t\t\t\t\t\t\t<Button type="link"><Glyph icon="squirrel" type="danger" /></Button>\n\t\t\t\t\t\t\t<Button type="link-delete"><Glyph icon="delete" /></Button>\n\t\t\t\t\t\t'
				)
			)
		);
	}
});

module.exports = Glyphs;

},{"../components/ExampleSource":47,"elemental":undefined,"react":undefined}],54:[function(require,module,exports){
/* eslint no-script-url: 0 */

'use strict';

var React = require('react/addons');

var _require = require('elemental');

var Col = _require.Col;
var Container = _require.Container;
var Row = _require.Row;
var ResponsiveText = _require.ResponsiveText;

var DemoBox = require('../components/DemoBox');
var ExampleSource = require('../components/ExampleSource');

var GridExample = React.createClass({
	displayName: 'GridExample',

	render: function render() {
		return React.createElement(
			Container,
			{ maxWidth: 800, className: 'demo-container' },
			React.createElement(
				'h1',
				null,
				'Grid'
			),
			React.createElement(
				'h2',
				null,
				'Let\'s start simple'
			),
			React.createElement(
				'p',
				{ className: 'lead' },
				'Elemental uses its own component-based grid system. You can specify column widths in pixels, percentages or fractions (between 1/2 and 1/20).'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Equal Columns'
					),
					React.createElement(
						Row,
						null,
						React.createElement(
							Col,
							{ sm: '1/3' },
							React.createElement(
								DemoBox,
								null,
								'One Third'
							)
						),
						React.createElement(
							Col,
							{ sm: '1/3' },
							React.createElement(
								DemoBox,
								null,
								'One Third'
							)
						),
						React.createElement(
							Col,
							{ sm: '1/3' },
							React.createElement(
								DemoBox,
								null,
								'One Third'
							)
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Row>\n\t\t\t\t\t\t\t\t<Col sm="1/3">\n\t\t\t\t\t\t\t\t\t<DemoBox>One Third</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col sm="1/3">\n\t\t\t\t\t\t\t\t\t<DemoBox>One Third</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col sm="1/3">\n\t\t\t\t\t\t\t\t\t<DemoBox>One Third</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t</Row>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Unequal Columns'
					),
					React.createElement(
						Row,
						null,
						React.createElement(
							Col,
							{ sm: '1/4' },
							React.createElement(
								DemoBox,
								null,
								'One Quarter'
							)
						),
						React.createElement(
							Col,
							{ sm: '1/2' },
							React.createElement(
								DemoBox,
								null,
								'One Half'
							)
						),
						React.createElement(
							Col,
							{ sm: '1/4' },
							React.createElement(
								DemoBox,
								null,
								'One Quarter'
							)
						),
						React.createElement(
							Col,
							{ sm: '2/3' },
							React.createElement(
								DemoBox,
								null,
								'Two Thirds'
							)
						),
						React.createElement(
							Col,
							{ sm: '1/3' },
							React.createElement(
								DemoBox,
								null,
								'One Third'
							)
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Row>\n\t\t\t\t\t\t\t\t<Col sm="1/4">\n\t\t\t\t\t\t\t\t\t<DemoBox>One Quarter</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col sm="1/2">\n\t\t\t\t\t\t\t\t\t<DemoBox>One Half</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col sm="1/4">\n\t\t\t\t\t\t\t\t\t<DemoBox>One Quarter</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col sm="2/3">\n\t\t\t\t\t\t\t\t\t<DemoBox>Two Thirds</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col sm="1/3">\n\t\t\t\t\t\t\t\t\t<DemoBox>One Third</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t</Row>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Resize your window'
			),
			React.createElement(
				'p',
				{ className: 'lead' },
				'We\'ve made sure you can accomodate even the trickiest design combinations'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Columns on a small device'
					),
					React.createElement(
						Row,
						null,
						React.createElement(
							Col,
							{ xs: '33%', sm: '25%', lg: '33.333%' },
							React.createElement(
								DemoBox,
								null,
								React.createElement(ResponsiveText, { visibleXS: '⅓', visibleSM: 'Quarter', visibleMD: 'One Quarter', visibleLG: 'One Third' })
							)
						),
						React.createElement(
							Col,
							{ xs: '33%', sm: '50%', lg: '33.333%' },
							React.createElement(
								DemoBox,
								null,
								React.createElement(ResponsiveText, { visibleXS: '⅓', visibleSM: 'One Half', visibleMD: 'One Half', visibleLG: 'One Third' })
							)
						),
						React.createElement(
							Col,
							{ xs: '33%', sm: '25%', lg: '33.333%' },
							React.createElement(
								DemoBox,
								null,
								React.createElement(ResponsiveText, { visibleXS: '⅓', visibleSM: 'Quarter', visibleMD: 'One Quarter', visibleLG: 'One Third' })
							)
						),
						React.createElement(
							Col,
							{ xs: '50%', sm: '33.333%', md: '66.667%', lg: '20%' },
							React.createElement(
								DemoBox,
								null,
								React.createElement(ResponsiveText, { visibleXS: '½', visibleSM: 'One Third', visibleMD: 'Two Thirds', visibleLG: 'One Fifth' })
							)
						),
						React.createElement(
							Col,
							{ xs: '50%', sm: '66.667%', md: '33.333%', lg: '60%' },
							React.createElement(
								DemoBox,
								null,
								React.createElement(ResponsiveText, { visibleXS: '½', visibleSM: 'Two Thirds', visibleMD: 'One Third', visibleLG: 'Three Fifths' })
							)
						),
						React.createElement(
							Col,
							{ xs: '100%', sm: '33.333%', md: '25%', lg: '20%' },
							React.createElement(
								DemoBox,
								null,
								React.createElement(ResponsiveText, { visibleXS: '1', visibleSM: 'One Third', visibleMD: 'One Quarter', visibleLG: 'One Fifth' })
							)
						),
						React.createElement(
							Col,
							{ xs: '50%', sm: '33.333%', md: '50%', lg: '50%' },
							React.createElement(
								DemoBox,
								null,
								React.createElement(ResponsiveText, { visibleXS: '½', visibleSM: 'One Third', visibleMD: 'One Half', visibleLG: 'One Half' })
							)
						),
						React.createElement(
							Col,
							{ xs: '50%', sm: '33.333%', md: '25%', lg: '50%' },
							React.createElement(
								DemoBox,
								null,
								React.createElement(ResponsiveText, { visibleXS: '½', visibleSM: 'One Third', visibleMD: 'One Quarter', visibleLG: 'One Half' })
							)
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Row>\n\t\t\t\t\t\t\t\t<Col xs="33%" sm="25%" lg="33.333%">\n\t\t\t\t\t\t\t\t\t<DemoBox>\n\t\t\t\t\t\t\t\t\t\t<ResponsiveText visibleXS="⅓" visibleSM="One Quarter" visibleMD="One Quarter" visibleLG="One Third" />\n\t\t\t\t\t\t\t\t\t</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col xs="33%" sm="50%" lg="33.333%">\n\t\t\t\t\t\t\t\t\t<DemoBox>\n\t\t\t\t\t\t\t\t\t\t<ResponsiveText visibleXS="⅓" visibleSM="One Half" visibleMD="One Half" visibleLG="One Third" />\n\t\t\t\t\t\t\t\t\t</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col xs="33%" sm="25%" lg="33.333%">\n\t\t\t\t\t\t\t\t\t<DemoBox>\n\t\t\t\t\t\t\t\t\t\t<ResponsiveText visibleXS="⅓" visibleSM="One Quarter" visibleMD="One Quarter" visibleLG="One Third" />\n\t\t\t\t\t\t\t\t\t</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col xs="50%" sm="33.333%" md="66.667%" lg="20%">\n\t\t\t\t\t\t\t\t\t<DemoBox>\n\t\t\t\t\t\t\t\t\t\t<ResponsiveText visibleXS="½" visibleSM="One Third" visibleMD="Two Thirds" visibleLG="One Fifth" />\n\t\t\t\t\t\t\t\t\t</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col xs="50%" sm="66.667%" md="33.333%" lg="60%">\n\t\t\t\t\t\t\t\t\t<DemoBox>\n\t\t\t\t\t\t\t\t\t\t<ResponsiveText visibleXS="½" visibleSM="Two Thirds" visibleMD="One Third" visibleLG="Three Fifths" />\n\t\t\t\t\t\t\t\t\t</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col xs="100%" sm="33.333%" md="25%" lg="20%">\n\t\t\t\t\t\t\t\t\t<DemoBox>\n\t\t\t\t\t\t\t\t\t\t<ResponsiveText visibleXS="1" visibleSM="One Third" visibleMD="One Quarter" visibleLG="One Fifth" />\n\t\t\t\t\t\t\t\t\t</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col xs="50%" sm="33.333%" md="50%" lg="50%">\n\t\t\t\t\t\t\t\t\t<DemoBox>\n\t\t\t\t\t\t\t\t\t\t<ResponsiveText visibleXS="½" visibleSM="One Third" visibleMD="One Half" visibleLG="One Half" />\n\t\t\t\t\t\t\t\t\t</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col xs="50%" sm="33.333%" md="25%" lg="50%">\n\t\t\t\t\t\t\t\t\t<DemoBox>\n\t\t\t\t\t\t\t\t\t\t<ResponsiveText visibleXS="½" visibleSM="One Third" visibleMD="One Quarter" visibleLG="One Half" />\n\t\t\t\t\t\t\t\t\t</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t</Row>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Columns with a basis'
					),
					React.createElement(
						Row,
						null,
						React.createElement(
							Col,
							{ basis: '25%' },
							React.createElement(
								DemoBox,
								null,
								'♥'
							)
						),
						React.createElement(
							Col,
							{ basis: '25%' },
							React.createElement(
								DemoBox,
								null,
								'♥'
							)
						),
						React.createElement(
							Col,
							{ basis: '25%' },
							React.createElement(
								DemoBox,
								null,
								'♥'
							)
						),
						React.createElement(
							Col,
							{ basis: '25%' },
							React.createElement(
								DemoBox,
								null,
								'♥'
							)
						),
						React.createElement(
							Col,
							{ basis: '25%' },
							React.createElement(
								DemoBox,
								null,
								'♥'
							)
						),
						React.createElement(
							Col,
							{ basis: '25%' },
							React.createElement(
								DemoBox,
								null,
								'♥'
							)
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t<Row>\n\t\t\t\t\t\t\t<Col basis="25%"><DemoBox>♥</DemoBox></Col>\n\t\t\t\t\t\t\t<Col basis="25%"><DemoBox>♥</DemoBox></Col>\n\t\t\t\t\t\t\t<Col basis="25%"><DemoBox>♥</DemoBox></Col>\n\t\t\t\t\t\t\t<Col basis="25%"><DemoBox>♥</DemoBox></Col>\n\t\t\t\t\t\t\t<Col basis="25%"><DemoBox>♥</DemoBox></Col>\n\t\t\t\t\t\t\t<Col basis="25%"><DemoBox>♥</DemoBox></Col>\n\t\t\t\t\t\t</Row>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'p',
				null,
				'Using columns without declaring a width or basis will NOT WRAP but evenly distribute their width using the available horizontal space of the row. Be careful with this one.'
			),
			React.createElement(
				'p',
				null,
				'With the release of React.js 0.14.x we\'ll be able to use the more agreeable syntax ',
				React.createElement(
					'span',
					{ className: 'inline-code' },
					'<Row basis="X">...</Row>'
				),
				' through parent-based context.'
			)
		);
	}
});

module.exports = GridExample;
/*
@jossmac - this isn't working like it used to...
<h2>Something completely different</h2>
<p className="lead">What's that you say, a grid that lays itself out? I'll eat my hat!</p>
<div className="code-example">
<div className="code-example__example">
	<div className="code-example__example__heading">Columns without attributes</div>
	<Row>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
	</Row>
	<Row>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
	</Row>
</div>
<ExampleSource>
	{`
	<Row>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
	</Row>
	<Row>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
	</Row>
	`}
</ExampleSource>
</div>
*/

},{"../components/DemoBox":46,"../components/ExampleSource":47,"elemental":undefined,"react/addons":undefined}],55:[function(require,module,exports){
'use strict';

var React = require('react');
var Router = require('react-router');

var NavItems = [{ value: 'css', icon: 'paintcan', label: 'CSS' }, { value: 'buttons', icon: 'screen-full', label: 'Buttons' }, { value: 'forms', icon: 'diff-modified', label: 'Forms' }, { value: 'spinner', icon: 'ellipsis', label: 'Spinner' }, { value: 'modal', icon: 'versions', label: 'Modal' }, { value: 'misc', icon: 'code', label: 'Misc' }
// { value: 'date-picker', icon: 'calendar', label: 'Date' }
];

var _require = require('elemental');

var Col = _require.Col;
var Container = _require.Container;
var Row = _require.Row;

var Home = React.createClass({
	displayName: 'VIEW_Home',

	render: function render() {
		var menuItems = NavItems.map(function (item) {
			return React.createElement(
				Col,
				{ xs: '1/3', sm: '1/6', key: item.label, className: 'demo-banner-nav__col col-xs-4 col-sm-2' },
				React.createElement(
					Router.Link,
					{ key: item.value, className: 'demo-banner-nav__item', onClick: self.toggleMenu, to: item.value },
					React.createElement('span', { className: 'demo-banner-nav__icon octicon octicon-' + item.icon }),
					React.createElement(
						'div',
						{ className: 'demo-banner-nav__label' },
						React.createElement(
							'span',
							{ className: 'demo-banner-nav__label-inner' },
							item.label
						)
					)
				)
			);
		});
		return React.createElement(
			'div',
			null,
			React.createElement(
				'header',
				{ className: 'demo-banner demo-banner--primary' },
				React.createElement(
					Container,
					{ maxWidth: 768, className: 'demo-container' },
					React.createElement('span', { className: 'demo-banner-illustration' }),
					React.createElement(
						'h1',
						{ className: 'demo-banner__heading demo-banner__heading-1' },
						'Elemental UI'
					),
					React.createElement(
						'h2',
						{ className: 'demo-banner__heading demo-banner__heading-2' },
						'A UI Toolkit for React.js Websites and Apps'
					),
					React.createElement(
						'div',
						{ className: 'demo-banner__buttons' },
						React.createElement(
							'a',
							{ className: 'Button Button--demo-primary', href: 'https://twitter.com/elementalui', target: '_blank' },
							'Follow @ElementalUI on Twitter'
						),
						React.createElement(
							'a',
							{ className: 'Button Button--demo-link', href: 'https://github.com/elementalui/elemental', target: '_blank' },
							'View the GitHub Project'
						)
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'demo-banner demo-banner--secondary' },
				React.createElement(
					Container,
					{ maxWidth: 768, className: 'demo-container' },
					React.createElement(
						'h2',
						{ className: 'demo-banner__heading demo-banner__heading-2' },
						'Project Status'
					),
					React.createElement(
						'ul',
						{ className: 'demo-banner-list' },
						React.createElement(
							'li',
							null,
							'Currently under development, initially for use in ',
							React.createElement(
								'a',
								{ href: 'http://www.keystonejs.com' },
								'KeystoneJS'
							)
						),
						React.createElement(
							'li',
							null,
							'We are experimenting with Component APIs'
						),
						React.createElement(
							'li',
							null,
							'Potentially, we\'ll transition from stylesheets to more inline styles, and would love feedback'
						)
					),
					React.createElement(
						'h5',
						{ className: 'demo-banner-divider' },
						React.createElement(
							'span',
							{ className: 'demo-banner-divider-inner' },
							'Demos'
						)
					),
					React.createElement(
						Row,
						{ className: 'demo-banner-nav' },
						menuItems
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'demo-banner demo-banner--tertiary' },
				React.createElement(
					Container,
					{ maxWidth: 768, className: 'demo-container' },
					React.createElement(
						'h2',
						{ className: 'demo-banner__heading demo-banner__heading-2' },
						'Why build ',
						React.createElement(
							'em',
							null,
							'another'
						),
						' UI kit?'
					),
					React.createElement(
						'p',
						null,
						'We believe there is a need for a high quality, modular set of UI scaffolding components and controls for React that are built from the outset to natively implement React patterns.'
					),
					React.createElement(
						'p',
						null,
						React.createElement(
							'strong',
							null,
							'Elemental UI'
						),
						' has been born to solve real-world requirements in projects we work on, and for use in the node.js content management platform ',
						React.createElement(
							'a',
							{ href: 'http://www.keystonejs.com', target: '_blank' },
							'KeystoneJS'
						),
						'.'
					),
					React.createElement(
						'p',
						null,
						'Our goal is to create a set of functional and unopinionated components that are useful on their own or together, with an unobtrusive default style and flexible theme capabilities.'
					),
					React.createElement(
						'p',
						null,
						'Thanks and credit go to the many other great CSS Component libraries that have been developed and whose shoulders we stand on, especially Bootstrap.'
					),
					React.createElement(
						'div',
						{ className: 'demo-banner-points' },
						React.createElement(
							Row,
							null,
							React.createElement(
								Col,
								{ sm: '1/3' },
								React.createElement(
									'h3',
									null,
									'Open Source'
								),
								React.createElement(
									'p',
									null,
									'Available for use under the MIT license,  built on foundations of React.js, LESS, Babel and Gulp, and inspired by other great projects.'
								)
							),
							React.createElement(
								Col,
								{ sm: '1/3' },
								React.createElement(
									'h3',
									null,
									'Modern Workflows'
								),
								React.createElement(
									'p',
									null,
									'Elemental is designed to be installed from npm and built into your project with browserify or webpack. You can customise it by including our LESS too.'
								)
							),
							React.createElement(
								Col,
								{ sm: '1/3' },
								React.createElement(
									'h3',
									null,
									'Made by Thinkmill'
								),
								React.createElement(
									'p',
									null,
									'Elemental UI is the cornerstone of Thinkmill\'s development suite, made by people who share a passion for HTML, CSS and JavaScript.'
								)
							)
						)
					)
				)
			)
		);
	}
});

module.exports = Home;

},{"elemental":undefined,"react":undefined,"react-router":26}],56:[function(require,module,exports){
'use strict';

var React = require('react');
var DemoBox = require('../components/DemoBox');
var ExampleSource = require('../components/ExampleSource');

var _require = require('elemental');

var Alert = _require.Alert;
var Card = _require.Card;
var Col = _require.Col;
var Container = _require.Container;
var FormField = _require.FormField;
var FormInput = _require.FormInput;
var InputGroup = _require.InputGroup;
var Pagination = _require.Pagination;
var Pill = _require.Pill;
var Row = _require.Row;
var Table = _require.Table;

var MAX_PAGESIZE = 100;
var MAX_RECORDS = 1000;

var Misc = React.createClass({
	displayName: 'VIEW_Misc',

	getInitialState: function getInitialState() {
		return {
			currentPage: 2,
			pageSize: 25,
			plural: 'Potatoes',
			singular: 'Potato',
			total: 123,
			limit: 5
		};
	},

	handlePaginationValueChange: function handlePaginationValueChange(e) {
		var newState = {};
		var fieldName = e.target.name;
		var newValue = e.target.value;

		if (fieldName === 'currentPage' || fieldName === 'pageSize' || fieldName === 'total' || fieldName === 'limit') {
			newValue = parseInt(newValue);

			if (isNaN(newValue) || newValue < 0) {
				newValue = 0;
			}
			if (fieldName !== 'total' && newValue < 1) {
				newValue = 1;
			}
			if (fieldName === 'pageSize' && newValue > MAX_PAGESIZE) {
				newValue = MAX_PAGESIZE;
			}
			if (fieldName === 'total' && newValue > MAX_RECORDS) {
				newValue = MAX_RECORDS;
			}
		}

		newState[fieldName] = newValue;
		this.setState(newState);
	},

	handlePageSelect: function handlePageSelect(page) {
		this.setState({
			currentPage: page
		});
	},

	render: function render() {
		return React.createElement(
			Container,
			{ maxWidth: 800, className: 'demo-container' },
			React.createElement(
				'h1',
				null,
				'Miscellaneous'
			),
			React.createElement(
				'p',
				{ className: 'lead' },
				'Some components march to the beat of their own drum…'
			),
			React.createElement(
				'h2',
				null,
				'Alerts'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						Alert,
						{ type: 'info' },
						React.createElement(
							'strong',
							null,
							'Info:'
						),
						' This could be something helpful, better read it just to make sure.'
					),
					React.createElement(
						Alert,
						{ type: 'success' },
						React.createElement(
							'strong',
							null,
							'Success:'
						),
						' Nothing to worry about, everything is going great!'
					),
					React.createElement(
						Alert,
						{ type: 'warning' },
						React.createElement(
							'strong',
							null,
							'Warning:'
						),
						' Pay attention to me, things are not going according to plan.'
					),
					React.createElement(
						Alert,
						{ type: 'danger' },
						React.createElement(
							'strong',
							null,
							'Error:'
						),
						' You need to take action, something has gone terribly wrong!'
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Alert type="info"><strong>Info:</strong> This could be something helpful, better read it just to make sure.</Alert>\n\t\t\t\t\t\t\t<Alert type="success"><strong>Success:</strong> Nothing to worry about, everything is going great!</Alert>\n\t\t\t\t\t\t\t<Alert type="warning"><strong>Warning:</strong> Pay attention to me, things are not going according to plan.</Alert>\n\t\t\t\t\t\t\t<Alert type="danger"><strong>Error:</strong> You need to take action, something has gone terribly wrong!</Alert>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h3',
				null,
				'Usage'
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'children'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'node'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'undefined'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Required'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'type'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'enum'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'\'\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Required. One of:',
								React.createElement('br', null),
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'danger'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'info'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'primary'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'success'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'warning'
								)
							)
						)
					)
				)
			),
			React.createElement(
				'h2',
				null,
				'Cards'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						Card,
						null,
						'Hi there, I\'m a card! I\'m pretty simple, but with a little imagination I can be really awesome :)'
					),
					React.createElement(
						Row,
						null,
						React.createElement(
							Col,
							{ xs: '1/3' },
							React.createElement(
								Card,
								null,
								'Use'
							)
						),
						React.createElement(
							Col,
							{ xs: '1/3' },
							React.createElement(
								Card,
								null,
								'me'
							)
						),
						React.createElement(
							Col,
							{ xs: '1/3' },
							React.createElement(
								Card,
								null,
								'in'
							)
						)
					),
					React.createElement(
						Row,
						null,
						React.createElement(
							Col,
							{ xs: '1/2' },
							React.createElement(
								Card,
								null,
								'a'
							)
						),
						React.createElement(
							Col,
							{ xs: '1/2' },
							React.createElement(
								Card,
								null,
								'grid'
							)
						)
					),
					React.createElement(
						Card,
						null,
						React.createElement(
							'h3',
							{ style: { marginTop: 0 } },
							'Alternatively'
						),
						React.createElement(
							DemoBox,
							{ style: { color: '#999', paddingBottom: 40, paddingTop: 40 } },
							React.createElement('span', { className: 'mega-octicon octicon-file-media' })
						),
						React.createElement(
							'div',
							null,
							'As part of more complete and sophisticated component. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis maximus nisi, non feugiat ipsum. Vestibulum condimentum massa nec tempus tincidunt.'
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Card>Hi there, I\'m a card! I\'m pretty simple, but with a little imagination I can be really awesome :)</Card>\n\t\t\t\t\t\t\t<Row>\n\t\t\t\t\t\t\t\t<Col><Card>Use</Card></Col>\n\t\t\t\t\t\t\t\t<Col><Card>me</Card></Col>\n\t\t\t\t\t\t\t\t<Col><Card>in</Card></Col>\n\t\t\t\t\t\t\t\t<Col><Card>a</Card></Col>\n\t\t\t\t\t\t\t\t<Col><Card>grid</Card></Col>\n\t\t\t\t\t\t\t</Row>\n\t\t\t\t\t\t\t<Card>...</Card>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h3',
				null,
				'Usage'
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'children'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'node'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'undefined'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Required'
							)
						)
					)
				)
			),
			React.createElement(
				'h2',
				null,
				'Pagination'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(Pagination, {
						currentPage: this.state.currentPage,
						onPageSelect: this.handlePageSelect,
						pageSize: this.state.pageSize,
						plural: this.state.plural,
						singular: this.state.singular,
						style: { lineHeight: '34px', marginBottom: 0, minHeight: 34 },
						total: this.state.total,
						limit: this.state.limit
					})
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Pagination\n\t\t\t\t\t\t\t\tcurrentPage={this.state.currentPage}\n\t\t\t\t\t\t\t\tonPageSelect={this.handlePageSelect}\n\t\t\t\t\t\t\t\tpageSize={this.state.pageSize}\n\t\t\t\t\t\t\t\tplural={this.state.plural}\n\t\t\t\t\t\t\t\tsingular={this.state.singular}\n\t\t\t\t\t\t\t\ttotal={this.state.total}\n\t\t\t\t\t\t\t\tlimit={this.state.limit}\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				InputGroup,
				null,
				React.createElement(
					InputGroup.Section,
					{ grow: true },
					React.createElement(
						FormField,
						{ label: 'Current page' },
						React.createElement(FormInput, { name: 'currentPage', type: 'number', value: this.state.currentPage, onChange: this.handlePaginationValueChange, placeholder: 'Current page' })
					)
				),
				React.createElement(
					InputGroup.Section,
					{ grow: true },
					React.createElement(
						FormField,
						{ label: 'Page size' },
						React.createElement(FormInput, { name: 'pageSize', type: 'number', value: this.state.pageSize, onChange: this.handlePaginationValueChange, placeholder: 'Page size' })
					)
				),
				React.createElement(
					InputGroup.Section,
					{ grow: true },
					React.createElement(
						FormField,
						{ label: 'Plural' },
						React.createElement(FormInput, { name: 'plural', type: 'text', value: this.state.plural, onChange: this.handlePaginationValueChange, placeholder: 'Plural' })
					)
				),
				React.createElement(
					InputGroup.Section,
					{ grow: true },
					React.createElement(
						FormField,
						{ label: 'Singular' },
						React.createElement(FormInput, { name: 'singular', type: 'text', value: this.state.singular, onChange: this.handlePaginationValueChange, placeholder: 'Singular' })
					)
				),
				React.createElement(
					InputGroup.Section,
					{ grow: true },
					React.createElement(
						FormField,
						{ label: 'Total records' },
						React.createElement(FormInput, { name: 'total', type: 'number', value: this.state.total, onChange: this.handlePaginationValueChange, placeholder: 'Total records' })
					)
				),
				React.createElement(
					InputGroup.Section,
					{ grow: true },
					React.createElement(
						FormField,
						{ label: 'Limit' },
						React.createElement(FormInput, { name: 'limit', type: 'number', value: this.state.limit, onChange: this.handlePaginationValueChange, placeholder: 'Limit' })
					)
				)
			),
			React.createElement(
				'h3',
				null,
				'Usage'
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'currentPage'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'number'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'none (required)'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'The current page number.'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'onPageSelect'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'func'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'none (required)'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'How you want to handle page selection by the user.'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'pageSize'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'number'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'none (required)'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'The number of records to display per page.'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'plural'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'string'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'none'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Displayed when there are no records "No Items", or the total number of records is less than the records per page "Showing 10 Items".'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'singular'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'string'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'none'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Displayed when there is a single record "Showing 1 Item".'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'total'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'number'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'none (required)'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'The total number of records.'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'limit'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'number'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'none'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'The number of pages to show in pagination.'
							)
						)
					)
				)
			),
			React.createElement(
				'h2',
				null,
				'Pills'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(Pill, { label: 'Create', type: 'success-inverted' }),
					React.createElement(Pill, { label: 'First Pill', type: 'primary', onClear: function () {} }),
					React.createElement(Pill, { label: 'Second Pill', type: 'primary', onClear: function () {} }),
					React.createElement(Pill, { label: 'Third Pill', type: 'primary', onClear: function () {} }),
					React.createElement(Pill, { label: 'Clear All' })
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Pill label="Create" type="success-inverted" />\n\t\t\t\t\t\t\t<Pill label="First Pill" type="primary" onClear={this.handleClear} />\n\t\t\t\t\t\t\t<Pill label="Second Pill" type="primary" onClear={this.handleClear} />\n\t\t\t\t\t\t\t<Pill label="Third Pill" type="primary" onClear={this.handleClear} />\n\t\t\t\t\t\t\t<Pill label="Clear All" />\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h3',
				null,
				'Usage'
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'label'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'string'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'false'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Required. The tag label'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'onClear'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'func'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'undefined'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Handle clear events on the pill. The clear button is rendered when this is supplied'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'type'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'enum'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'\'default\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'One of:',
								React.createElement('br', null),
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'danger'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'default'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'info'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'primary'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'success'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'warning'
								),
								React.createElement('br', null),
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'danger-inverted'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'default-inverted'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'info-inverted'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'primary-inverted'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'success-inverted'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'warning-inverted'
								)
							)
						)
					)
				)
			)
		);
	}
});

module.exports = Misc;

},{"../components/DemoBox":46,"../components/ExampleSource":47,"elemental":undefined,"react":undefined}],57:[function(require,module,exports){
'use strict';

var React = require('react/addons');

var _require = require('elemental');

var Button = _require.Button;
var Container = _require.Container;
var FormField = _require.FormField;
var FormInput = _require.FormInput;
var Modal = _require.Modal;
var ModalBody = _require.ModalBody;
var ModalFooter = _require.ModalFooter;
var ModalHeader = _require.ModalHeader;
var Spinner = _require.Spinner;
var Table = _require.Table;

var ExampleSource = require('../components/ExampleSource');

module.exports = React.createClass({
	displayName: 'VIEW_Modal',
	getInitialState: function getInitialState() {
		return {
			modalIsOpen: false
		};
	},
	toggleModal: function toggleModal(visible) {
		this.setState({
			modalIsOpen: visible
		});
	},
	render: function render() {
		return React.createElement(
			Container,
			{ maxWidth: 800, className: 'demo-container' },
			React.createElement(
				'h1',
				null,
				'Modal'
			),
			React.createElement(
				'h2',
				null,
				'Static Example'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'Modal-content' },
						React.createElement(ModalHeader, { text: 'Modal Header' }),
						React.createElement(
							ModalBody,
							null,
							React.createElement(
								FormField,
								{ label: 'Email' },
								React.createElement(FormInput, { label: 'Email', type: 'email', name: 'email', ref: 'email', placeholder: 'name@example.com', onChange: this.updateInput, required: true })
							),
							React.createElement(
								FormField,
								{ label: 'Password' },
								React.createElement(FormInput, { label: 'Password', type: 'password', name: 'password', ref: 'password', placeholder: 'min. 8 chars', onChange: this.updateInput, required: true })
							)
						),
						React.createElement(
							ModalFooter,
							null,
							React.createElement(
								Button,
								{ type: 'primary' },
								'Submit'
							),
							React.createElement(
								Button,
								{ type: 'link-cancel' },
								'Cancel'
							)
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Modal>\n\t\t\t\t\t\t\t\t<ModalHeader text="Modal Header" />\n\t\t\t\t\t\t\t\t<ModalBody>\n\t\t\t\t\t\t\t\t\t<form>[...]</form>\n\t\t\t\t\t\t\t\t</ModalBody>\n\t\t\t\t\t\t\t\t<ModalFooter>\n\t\t\t\t\t\t\t\t\t<Button type="primary">Modal Footer</Button>\n\t\t\t\t\t\t\t\t\t<Button type="link-cancel">Button</Button>\n\t\t\t\t\t\t\t\t</ModalFooter>\n\t\t\t\t\t\t\t</Modal>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Live Demo'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						Button,
						{ onClick: this.toggleModal.bind(this, true) },
						'Launch Modal'
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Button onClick={this.toggleModal}>Launch Modal</Button>\n\t\t\t\t\t\t'
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Modal isOpen={this.state.modalIsOpen} onCancel={this.toggleModal} backdropClosesModal>\n\t\t\t\t\t\t\t\t<ModalHeader text="Lots of text to show scroll behavior" showCloseButton onClose={this.toggleModal} />\n\t\t\t\t\t\t\t\t<ModalBody>[...]</ModalBody>\n\t\t\t\t\t\t\t\t<ModalFooter>\n\t\t\t\t\t\t\t\t\t<Button type="primary" onClick={this.toggleModal}>Close modal</Button>\n\t\t\t\t\t\t\t\t\t<Button type="link-cancel" onClick={this.toggleModal}>Also closes modal</Button>\n\t\t\t\t\t\t\t\t</ModalFooter>\n\t\t\t\t\t\t\t</Modal>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Usage'
			),
			React.createElement(
				'h3',
				null,
				'Modal'
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'backdropClosesModal'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'bool'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'false'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Pass through to make the backdrop available as a target to dismiss the modal.'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'isOpen'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'bool'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'false'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Managed by state;  this is how to control the visibility of the modal.'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'onCancel'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'func'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'undefined'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'The function used to handle cancel events on the modal; typically sets the open state to ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'false'
								)
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'top'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'string'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'\'\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Optionally pass through a distance from top. If omitted (recommended) the modal will automatically calculate the correct distance.'
							)
						)
					)
				)
			),
			React.createElement(
				'h3',
				null,
				'Modal Header'
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'children'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'node'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'undefined'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Alternative to using the text attribute, for when you need more control over the content.'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'showCloseButton'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'bool'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'false'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Allow users to dismiss the modal.'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'onClose'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'func'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'undefined'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'What to do when the user clicks the close button'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'text'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'string'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'\'\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Creates a title for the modal. We use "text" because ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'title'
								),
								' is reserved.'
							)
						)
					)
				)
			),
			React.createElement(
				'h3',
				null,
				'Modal Body/Footer'
			),
			React.createElement(
				'p',
				null,
				'These are simple wrappers to abstract the classnames, they may become more functional in the future.'
			),
			React.createElement(
				Modal,
				{ isOpen: this.state.modalIsOpen, onCancel: this.toggleModal.bind(this, false), backdropClosesModal: true },
				React.createElement(ModalHeader, { text: 'Lots of text to show scroll behavior', showCloseButton: true, onClose: this.toggleModal.bind(this, false) }),
				React.createElement(
					ModalBody,
					null,
					React.createElement(
						'p',
						{ style: { color: '#999', fontSize: '.85em' } },
						'From the Wikipedia article ',
						React.createElement(
							'a',
							{ href: 'https://en.wikipedia.org/wiki/Elemental', target: '_blank' },
							'https://en.wikipedia.org/wiki/Elemental'
						)
					),
					React.createElement(
						'p',
						null,
						'An elemental is a mythic being described in occult and alchemical works from around the time of the European Renaissance and particularly elaborated in the 16th century works of Paracelsus.'
					),
					React.createElement(
						'p',
						null,
						'There are four elemental categories: gnomes, undines, sylphs, and salamanders. These correspond to the Classical elements of antiquity: earth, water, air and fire. Aether (quintessence) was not assigned an elemental.'
					),
					React.createElement(
						'p',
						null,
						'Terms employed for beings associated with alchemical elements vary by source and gloss.'
					),
					React.createElement(
						'h2',
						null,
						'History'
					),
					React.createElement(
						'p',
						null,
						'The Paracelsian concept of elementals draws from several much older traditions in mythology and religion. Common threads can be found in folklore, animism, and anthropomorphism. Examples of creatures such as the Pygmy were taken from Greek mythology.'
					),
					React.createElement(
						'p',
						null,
						'The elements of earth, water, air, and fire, were classed as the fundamental building blocks of nature. This system prevailed in the Classical world and was highly influential in medieval natural philosophy. Although Paracelsus uses these foundations and the popular preexisting names of elemental creatures, he is doing so to present new ideas which expand on his own philosophical system. The homunculus is another example of a Paracelsian idea with roots in earlier alchemical, scientific, and folklore traditions.'
					),
					React.createElement(
						'h3',
						null,
						'Paracelsus'
					),
					React.createElement(
						'p',
						null,
						'In his 16th-century alchemical work Liber de Nymphis, sylphis, pygmaeis et salamandris et de caeteris spiritibus, Paracelsus identified mythological beings as belonging to one of the four elements. Part of the Philosophia Magna, this book was first printed in 1566 after Paracelsus\' death. He wrote the book to "describe the creatures that are outside the cognizance of the light of nature, how they are to be understood, what marvellous works God has created". He states that there is more bliss in describing these "divine objects" than in describing fencing, court etiquette, cavalry, and other worldly pursuits.'
					),
					React.createElement(
						'p',
						null,
						'The concept of elementals seems to have been conceived by Paracelsus in the 16th century, though he did not in fact use the term "elemental" or a German equivalent.[5] He regarded them not so much as spirits but as beings between creatures and spirits, generally being invisible to mankind but having physical and commonly humanoid bodies, as well as eating, sleeping, and wearing clothes like humans. Paracelsus gave common names for the elemental types, as well as correct names, which he seems to have considered somewhat more proper, "recht namen". He also referred to them by purely German terms which are roughly equivalent to "water people," "mountain people," and so on, using all the different forms interchangeably.'
					)
				),
				React.createElement(
					ModalFooter,
					null,
					React.createElement(
						Button,
						{ type: 'primary', onClick: this.toggleModal.bind(this, false) },
						'Close modal'
					),
					React.createElement(
						Button,
						{ type: 'link-cancel', onClick: this.toggleModal.bind(this, false) },
						'Also closes modal'
					)
				)
			)
		);
	}
});

},{"../components/ExampleSource":47,"elemental":undefined,"react/addons":undefined}],58:[function(require,module,exports){
'use strict';

var React = require('react');

var _require = require('elemental');

var Button = _require.Button;
var Col = _require.Col;
var Container = _require.Container;
var Row = _require.Row;
var Spinner = _require.Spinner;
var Table = _require.Table;

var DemoBox = require('../components/DemoBox');
var ExampleSource = require('../components/ExampleSource');

var Buttons = React.createClass({
	displayName: 'VIEW_Spinner',
	render: function render() {
		return React.createElement(
			Container,
			{ maxWidth: 800, className: 'demo-container' },
			React.createElement(
				'h1',
				null,
				'Spinner'
			),
			React.createElement(
				'h2',
				null,
				'Common use cases'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Page Element'
					),
					React.createElement(
						Row,
						null,
						React.createElement(
							Col,
							null,
							React.createElement(
								DemoBox,
								{ style: { paddingBottom: 20, paddingTop: 20 } },
								React.createElement(Spinner, { size: 'md' })
							)
						),
						React.createElement(
							Col,
							null,
							React.createElement(
								DemoBox,
								{ style: { paddingBottom: 20, paddingTop: 20 } },
								React.createElement(Spinner, { size: 'md', type: 'primary' })
							)
						),
						React.createElement(
							Col,
							null,
							React.createElement(
								DemoBox,
								{ style: { paddingBottom: 20, paddingTop: 20 }, inverted: true },
								React.createElement(Spinner, { size: 'md', type: 'inverted' })
							)
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t<Spinner size="md" />\n\t\t\t\t\t\t<Spinner size="md" type="primary" />\n\t\t\t\t\t\t<Spinner size="md" type="inverted" />\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Inside Buttons'
					),
					React.createElement(
						'div',
						{ className: 'code-example__example-element--inline' },
						React.createElement(
							Button,
							null,
							React.createElement(Spinner, null)
						)
					),
					React.createElement(
						'div',
						{ className: 'code-example__example-element--inline' },
						React.createElement(
							Button,
							{ disabled: true },
							React.createElement(Spinner, { type: 'primary' }),
							'Saving'
						)
					),
					React.createElement(
						'div',
						{ className: 'code-example__example-element--inline' },
						React.createElement(
							Button,
							{ type: 'primary' },
							React.createElement(Spinner, { type: 'inverted' }),
							'Submitting'
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t<Button><Spinner /></Button>\n\t\t\t\t\t\t<Button disabled><Spinner type="primary" />Saving</Button>\n\t\t\t\t\t\t<Button type="primary"><Spinner type="inverted" />Submitting</Button>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Full Page Load'
					),
					React.createElement(
						'div',
						{ style: { paddingBottom: 60, paddingTop: 60, textAlign: 'center' } },
						React.createElement(Spinner, { size: 'lg' })
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t<Spinner size="lg" />\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h3',
				null,
				'Usage'
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'size'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'enum'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'sm'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								React.createElement(
									'p',
									null,
									'Declare the size of the dots in the spinner. Possible options:',
									React.createElement('br', null),
									React.createElement(
										'code',
										{ className: 'inline-code' },
										'sm'
									),
									' ',
									React.createElement(
										'code',
										{ className: 'inline-code' },
										'md'
									),
									' ',
									React.createElement(
										'code',
										{ className: 'inline-code' },
										'lg'
									)
								),
								'Spinners automatically become small when inside of buttons'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'type'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'enum'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'default'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Declare the colour of the dots in the spinner. Possible options:',
								React.createElement('br', null),
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'default'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'primary'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'inverted'
								)
							)
						)
					)
				)
			)
		);
	}
});

module.exports = Buttons;

},{"../components/DemoBox":46,"../components/ExampleSource":47,"elemental":undefined,"react":undefined}],59:[function(require,module,exports){
'use strict';

var React = require('react');
var Router = require('react-router');

var NavItems = [{ value: 'css', label: 'CSS' }, { value: 'grid', label: 'Grid' }, { value: 'buttons', label: 'Buttons' }, { value: 'glyphs', label: 'Glyphs' }, { value: 'forms', label: 'Forms' }, { value: 'spinner', label: 'Spinner' }, { value: 'modal', label: 'Modal' }, { value: 'misc', label: 'Misc' }
// { value: 'date-picker', label: 'Date Picker' }
];

var PageNav = React.createClass({
	displayName: 'PageNav',

	getInitialState: function getInitialState() {
		return {
			mobileMenuIsVisible: false,
			windowHeight: window.innerHeight,
			windowWidth: window.innerWidth
		};
	},

	componentDidMount: function componentDidMount() {
		window.addEventListener('resize', this.handleResize);
	},

	componentWillUnmount: function componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	},

	handleResize: function handleResize() {
		this.setState({
			windowHeight: window.innerHeight,
			windowWidth: window.innerWidth
		});
	},

	toggleMenu: function toggleMenu() {
		this.setState({
			mobileMenuIsVisible: !this.state.mobileMenuIsVisible
		});
	},

	render: function render() {
		var self = this;
		var height = this.state.windowWidth < 768 ? this.state.windowHeight : 'auto';
		var menuClass = this.state.mobileMenuIsVisible ? 'primary-nav-menu is-visible' : 'primary-nav-menu is-hidden';
		var menuItems = NavItems.map(function (item) {
			return React.createElement(
				Router.Link,
				{ key: item.value, className: 'primary-nav__item', onClick: self.toggleMenu, to: item.value },
				React.createElement(
					'span',
					{ className: 'primary-nav__item-inner' },
					item.label
				)
			);
		});
		return React.createElement(
			'nav',
			{ className: 'primary-nav' },
			React.createElement(
				Router.Link,
				{ to: 'home', className: 'primary-nav__brand special', title: 'Home' },
				React.createElement('img', { src: './images/elemental-logo-paths.svg', className: 'primary-nav__brand-src' })
			),
			React.createElement(
				'button',
				{ onClick: this.toggleMenu, className: 'primary-nav__item primary-nav-menu-trigger' },
				React.createElement('span', { className: 'primary-nav-menu-trigger-icon octicon octicon-navicon' }),
				React.createElement(
					'span',
					{ className: 'primary-nav-menu-trigger-label' },
					this.state.mobileMenuIsVisible ? 'Close' : 'Menu'
				)
			),
			React.createElement(
				'div',
				{ className: menuClass, style: { height: height } },
				React.createElement(
					'div',
					{ className: 'primary-nav-menu-inner' },
					menuItems
				)
			),
			React.createElement(
				'a',
				{ href: 'https://github.com/elementalui/elemental', target: '_blank', title: 'View on GitHub', className: 'primary-nav__brand right' },
				React.createElement('img', { src: './images/github-logo.svg', className: 'primary-nav__brand-src' })
			)
		);
	}
});

var App = React.createClass({
	displayName: 'App',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'page-wrapper' },
			React.createElement(PageNav, null),
			React.createElement(
				'div',
				{ className: 'page-body' },
				React.createElement(Router.RouteHandler, null)
			),
			React.createElement(
				'div',
				{ className: 'page-footer' },
				React.createElement(
					'div',
					{ className: 'demo-container container' },
					'Copyright © 2015 · (MIT) License · Built by ',
					React.createElement(
						'a',
						{ href: 'http://www.thinkmill.com.au', target: '_blank' },
						'Thinkmill'
					),
					', initially for integration with ',
					React.createElement(
						'a',
						{ href: 'http://www.keystonejs.com', target: '_blank' },
						'KeystoneJS'
					)
				)
			)
		);
	}
});

var basepath = window.location.pathname.slice(0, 10) === '/elemental' ? '/elemental' : '';

var routes = React.createElement(
	Router.Route,
	{ name: 'app', path: basepath + '/', handler: App },
	React.createElement(Router.Route, { name: 'home', path: basepath + '/', handler: require('./pages/Home') }),
	React.createElement(Router.Route, { name: 'css', path: basepath + '/css', handler: require('./pages/CSS') }),
	React.createElement(Router.Route, { name: 'grid', path: basepath + '/grid', handler: require('./pages/Grid') }),
	React.createElement(Router.Route, { name: 'buttons', path: basepath + '/buttons', handler: require('./pages/Buttons') }),
	React.createElement(Router.Route, { name: 'glyphs', path: basepath + '/glyphs', handler: require('./pages/Glyphs') }),
	React.createElement(Router.Route, { name: 'forms', path: basepath + '/forms', handler: require('./pages/Forms') }),
	React.createElement(Router.Route, { name: 'spinner', path: basepath + '/spinner', handler: require('./pages/Spinner') }),
	React.createElement(Router.Route, { name: 'modal', path: basepath + '/modal', handler: require('./pages/Modal') }),
	React.createElement(Router.Route, { name: 'misc', path: basepath + '/misc', handler: require('./pages/Misc') }),
	React.createElement(Router.DefaultRoute, { handler: require('./pages/Home') })
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(React.createElement(Handler, null), document.body);
});
/*<Router.Link to="home">Home</Router.Link>*/ /*<Router.Route name="date-picker" path={basepath + '/date-picker'} handler={require('./pages/DatePicker')} />*/

},{"./pages/Buttons":50,"./pages/CSS":51,"./pages/Forms":52,"./pages/Glyphs":53,"./pages/Grid":54,"./pages/Home":55,"./pages/Misc":56,"./pages/Modal":57,"./pages/Spinner":58,"react":undefined,"react-router":26}],60:[function(require,module,exports){
// breakpoints
'use strict';

exports.breakpoint = {
	xs: 480,
	sm: 768,
	md: 992,
	lg: 1200
};

// border radii
exports.borderRadius = {
	xs: 2,
	sm: 4,
	md: 8,
	lg: 16,
	xl: 32
};

// color
exports.color = {
	appDanger: '#d64242',
	appInfo: '#56cdfc',
	appPrimary: '#1385e5',
	appSuccess: '#34c240',
	appWarning: '#fa9f47',
	brandPrimary: '#31adb8'
};

// spacing
exports.spacing = {
	xs: 5,
	sm: 10,
	md: 20,
	lg: 40,
	xl: 80
};

// widths
exports.width = {
	container: 1170,
	gutter: 20
};

// fractions (for col widths)

function perc(n) {
	return n * 100 + '%';
}

function denominators(n) {
	for (var d = 2; d <= 20; d++) {
		if (n < d) {
			exports.fractions[n + '/' + d] = perc(n / d);
		}
	}
}

exports.fractions = {};

for (var numerator = 1; numerator <= 19; numerator++) {
	denominators(numerator);
}

},{}]},{},[59]);
