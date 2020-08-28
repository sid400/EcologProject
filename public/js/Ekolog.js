/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer-bin.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/customer-bin.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "customer-bin",
  props: ['base', 'bin', 'add', 'del', 'del_all', 'send_order', 'total', 'order', 'calc_order', 'body_overflow', 'check_promo'],
  bin: [],
  methods: {
    closeWindow: function closeWindow() {
      this.$root.isVisibilityModals.bin = false;
    }
  },
  computed: {
    customerBin: function customerBin() {
      return this.$root.CustomerBin.bin;
    },
    path: function path() {
      return this.$root.path;
    },
    ext: function ext() {
      return this.$root.ext;
    },
    orderResponse: function orderResponse() {
      return this.$root.orderResponse;
    }
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modal-window.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modal-window.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "modal-window",
  props: ['body_overflow', 'modal_props'],
  methods: {
    closeWindow: function closeWindow(modalProps) {
      // noinspection JSUnresolvedVariable
      this.$root.isVisibilityModals[modalProps] = false; // noinspection JSUnresolvedVariable

      this.$root.orderResponse.isDone = false;
    }
  } // data: function () {
  // },

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product-item.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product-item.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "product-item",
  props: ['product', 'add', 'delete'],
  computed: {
    path: function path() {
      return this.$root.path;
    },
    ext: function ext() {
      return this.$root.ext;
    }
  },
  data: function data() {
    return {
      path1: "public/img/products/",
      path2: ".jpeg",
      fullPath: ''
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modal-window.vue?vue&type=style&index=0&id=12b786db&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modal-window.vue?vue&type=style&index=0&id=12b786db&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modalWindow[data-v-12b786db] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    min-height: 100vh;\n    height: 100%;\n    min-width: 100%;\n    z-index: 999;\n    overflow: auto;\n}\n.modalWrapper[data-v-12b786db]{\n    position: relative;\n}\n.modalWrapper-1[data-v-12b786db] {\n    overflow: auto;\n    min-height: 100%;\n    min-width: 100%;\n}\n.modalWrapper-2[data-v-12b786db] {\n    height: 100%;\n    width: 100%;\n}\n.modalWrapper-3[data-v-12b786db] {\n\n    z-index: 990;\n}\n.modalCloser[data-v-12b786db] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    min-height: 100vw;\n    height: 100%;\n    min-width: 100%;\n    overflow: auto;\n}\n.modalCloser-1[data-v-12b786db] {\n    z-index: 0;\n}\n.modalCloser-2[data-v-12b786db] {\n    z-index: -1;\n}\n.modalCloseBatton[data-v-12b786db] {\n    cursor: pointer;\n    z-index: 999;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modal-window.vue?vue&type=style&index=0&id=12b786db&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modal-window.vue?vue&type=style&index=0&id=12b786db&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./modal-window.vue?vue&type=style&index=0&id=12b786db&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modal-window.vue?vue&type=style&index=0&id=12b786db&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/vue-cookies/vue-cookies.js":
/*!*************************************************!*\
  !*** ./node_modules/vue-cookies/vue-cookies.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Vue Cookies v1.7.3
 * https://github.com/cmp-cc/vue-cookies
 *
 * Copyright 2016, cmp-cc
 * Released under the MIT license
 */

(function () {

  var defaultConfig = {
    expires: '1d',
    path: '; path=/',
    domain: '',
    secure: '',
    sameSite: '; SameSite=Lax'
  };

  var VueCookies = {
    // install of Vue
    install: function (Vue) {
      Vue.prototype.$cookies = this;
      Vue.$cookies = this;
    },
    config: function (expireTimes, path, domain, secure, sameSite) {
      defaultConfig.expires = expireTimes ? expireTimes : '1d';
      defaultConfig.path = path ? '; path=' + path : '; path=/';
      defaultConfig.domain = domain ? '; domain=' + domain : '';
      defaultConfig.secure = secure ? '; Secure' : '';
      defaultConfig.sameSite = sameSite ? '; SameSite=' + sameSite : '; SameSite=Lax';
    },
    get: function (key) {
      var value = decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;

      if (value && value.substring(0, 1) === '{' && value.substring(value.length - 1, value.length) === '}') {
        try {
          value = JSON.parse(value);
        } catch (e) {
          return value;
        }
      }
      return value;
    },
    set: function (key, value, expireTimes, path, domain, secure, sameSite) {
      if (!key) {
        throw new Error('Cookie name is not find in first argument.');
      } else if (/^(?:expires|max\-age|path|domain|secure|SameSite)$/i.test(key)) {
        throw new Error('Cookie key name illegality, Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]\t current key name: ' + key);
      }
      // support json object
      if (value && value.constructor === Object) {
        value = JSON.stringify(value);
      }
      var _expires = '';
      expireTimes = expireTimes === undefined ? defaultConfig.expires : expireTimes;
      if (expireTimes && expireTimes != 0) {
        switch (expireTimes.constructor) {
          case Number:
            if (expireTimes === Infinity || expireTimes === -1) _expires = '; expires=Fri, 31 Dec 9999 23:59:59 GMT';
            else _expires = '; max-age=' + expireTimes;
            break;
          case String:
            if (/^(?:\d+(y|m|d|h|min|s))$/i.test(expireTimes)) {
              // get capture number group
              var _expireTime = expireTimes.replace(/^(\d+)(?:y|m|d|h|min|s)$/i, '$1');
              // get capture type group , to lower case
              switch (expireTimes.replace(/^(?:\d+)(y|m|d|h|min|s)$/i, '$1').toLowerCase()) {
                  // Frequency sorting
                case 'm':
                  _expires = '; max-age=' + +_expireTime * 2592000;
                  break; // 60 * 60 * 24 * 30
                case 'd':
                  _expires = '; max-age=' + +_expireTime * 86400;
                  break; // 60 * 60 * 24
                case 'h':
                  _expires = '; max-age=' + +_expireTime * 3600;
                  break; // 60 * 60
                case 'min':
                  _expires = '; max-age=' + +_expireTime * 60;
                  break; // 60
                case 's':
                  _expires = '; max-age=' + _expireTime;
                  break;
                case 'y':
                  _expires = '; max-age=' + +_expireTime * 31104000;
                  break; // 60 * 60 * 24 * 30 * 12
                default:
                  new Error('unknown exception of "set operation"');
              }
            } else {
              _expires = '; expires=' + expireTimes;
            }
            break;
          case Date:
            _expires = '; expires=' + expireTimes.toUTCString();
            break;
        }
      }
      document.cookie =
          encodeURIComponent(key) + '=' + encodeURIComponent(value) +
          _expires +
          (domain ? '; domain=' + domain : defaultConfig.domain) +
          (path ? '; path=' + path : defaultConfig.path) +
          (secure === undefined ? defaultConfig.secure : secure ? '; Secure' : '') +
          (sameSite === undefined ? defaultConfig.sameSite : (sameSite ? '; SameSite=' + sameSite : ''));
      return this;
    },
    remove: function (key, path, domain) {
      if (!key || !this.isKey(key)) {
        return false;
      }
      document.cookie = encodeURIComponent(key) +
          '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' +
          (domain ? '; domain=' + domain : defaultConfig.domain) +
          (path ? '; path=' + path : defaultConfig.path) +
          '; SameSite=Lax';
      return this;
    },
    isKey: function (key) {
      return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(document.cookie);
    },
    keys: function () {
      if (!document.cookie) return [];
      var _keys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/);
      for (var _index = 0; _index < _keys.length; _index++) {
        _keys[_index] = decodeURIComponent(_keys[_index]);
      }
      return _keys;
    }
  };

  if (true) {
    module.exports = VueCookies;
  } else {}
  // vue-cookies can exist independently,no dependencies library
  if (typeof window !== 'undefined') {
    window.$cookies = VueCookies;
  }

})();


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer-bin.vue?vue&type=template&id=5aa7133a&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/customer-bin.vue?vue&type=template&id=5aa7133a&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "EK_customer_bin" }, [
    _vm.orderResponse.isDone === false
      ? _c("h2", { staticClass: "EK_text-H1 EK_customer_bin_header" }, [
          _vm._v("Ваш заказ")
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.orderResponse.isDone === false
      ? _c("div", { staticClass: "EK_sep_line EK_customer_bin-sep" })
      : _vm._e(),
    _vm._v(" "),
    _vm.customerBin.length === 0 && _vm.orderResponse.isDone === false
      ? _c("div", { staticClass: "EK_customer_bin-empty" }, [
          _c("p", { staticClass: "EK_text-H1" }, [
            _vm._v("Упс, здесь пока что пусто")
          ]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "EK_Btn-stnd EK_customer_bin-btn",
              attrs: { href: "#EK_shop" },
              on: {
                click: function($event) {
                  _vm.closeWindow(), _vm.body_overflow()
                }
              }
            },
            [_vm._v("Вернуться\n            к\n            покупкам")]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.orderResponse.isDone === true
      ? _c("div", { staticClass: "EK_customer_bin-finish" }, [
          _c("p", { staticClass: "EK_text-H1 EK_customer_bin-finish_header" }, [
            _vm._v("Спасибо за заказ!")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "EK_text-H2 EK_customer_bin-finish_text" }, [
            _vm._v(
              "• Ваш заказ успешно оформлен и обрабатывается нашими\n            менеджерами"
            )
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "EK_text-H2 EK_customer_bin-finish_text" }, [
            _vm._v("• Вся подробная информация выслана вам на e-mail")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "EK_text-H2 EK_customer_bin-finish_text" }, [
            _vm._v("• Мы свяжемся с вами в ближайшее время")
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.customerBin.length > 0
      ? _c(
          "div",
          { staticClass: "EK_customer_bin_items" },
          [
            _vm._l(_vm.bin.bin, function(item) {
              return _c(
                "div",
                { key: item.id, staticClass: "EK_customer_bin_cart" },
                [
                  _c("div", { staticClass: "EK_customer_bin_cart-2" }, [
                    _c("img", {
                      staticClass: "EK_customer_bin_cart-img",
                      attrs: {
                        src: _vm.path + item.id + _vm.ext,
                        alt: _vm.base[item.id].name
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "EK_customer_bin_cart_withoutImg" },
                      [
                        _c(
                          "div",
                          { staticClass: "EK_customer_bin_cart-nameCont" },
                          [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "EK_text-T1 EK_customer_bin_cart-preName"
                              },
                              [_vm._v(_vm._s(_vm.base[item.id].pre_name) + " ")]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "EK_text-T1 EK_customer_bin_cart-name"
                              },
                              [_vm._v(_vm._s(_vm.base[item.id].name))]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "EK_customer_bin_cart-countCont" },
                          [
                            _c("span", {
                              staticClass: "EK_customer_bin_cart-btnDel",
                              on: {
                                click: function($event) {
                                  return _vm.del(item.id)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "EK_text-T1 EK_customer_bin_cart-number"
                              },
                              [_vm._v(_vm._s(item.count))]
                            ),
                            _vm._v(" "),
                            _c("span", {
                              staticClass: "EK_customer_bin_cart-btnAdd",
                              on: {
                                click: function($event) {
                                  return _vm.add(item.id)
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "EK_text-T1 EK_customer_bin_cart-price"
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.base[item.id].price * item.count) +
                                " Ї\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", {
                          staticClass:
                            "EK_text-T1 EK_customer_bin_cart-delItem",
                          on: {
                            click: function($event) {
                              return _vm.del_all(item.id)
                            }
                          }
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "EK_sep_line EK_customer_bin-sep" })
                ]
              )
            }),
            _vm._v(" "),
            _c("div", { staticClass: "EK_text-H2 EK_customer_bin-total" }, [
              _vm._v(
                "\n            Сумма заказа: " +
                  _vm._s(_vm.total) +
                  " Ї\n        "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "EK_customer_bin-payBlock" }, [
              _c("div", { staticClass: "EK_text-H1 EK_customer_bin-header" }, [
                _vm._v("Оплата")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "EK_sep_line EK_customer_bin-sep" }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "EK_customer_bin-payItem",
                  on: {
                    click: function($event) {
                      _vm.bin.paymentMethod = 1
                    }
                  }
                },
                [
                  _c("div", { staticClass: "EK_customer_bin-check-Box" }, [
                    _c("svg", { staticClass: "EK_customer_bin-checkBoxIcon" }, [
                      _c("use", {
                        staticClass: "use1",
                        attrs: { "xlink:href": "#EK_ico-circleMini" }
                      }),
                      _vm._v(" "),
                      _vm.bin.paymentMethod === 1
                        ? _c("use", {
                            staticClass: "use2",
                            attrs: { "xlink:href": "#EK_ico-tickMini" }
                          })
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "EK_text-T1 EK_customer_bin-text" }, [
                    _vm._v("картой на сайте")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "EK_customer_bin-payItem",
                  on: {
                    click: function($event) {
                      _vm.bin.paymentMethod = 2
                    }
                  }
                },
                [
                  _c("div", { staticClass: "EK_customer_bin-check-Box" }, [
                    _c("svg", { staticClass: "EK_customer_bin-checkBoxIcon" }, [
                      _c("use", {
                        staticClass: "use1",
                        attrs: { "xlink:href": "#EK_ico-circleMini" }
                      }),
                      _vm._v(" "),
                      _vm.bin.paymentMethod === 2
                        ? _c("use", {
                            staticClass: "use2",
                            attrs: { "xlink:href": "#EK_ico-tickMini" }
                          })
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "EK_text-T1 EK_customer_bin-text" }, [
                    _vm._v("картой при получении")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "EK_customer_bin-payItem",
                  on: {
                    click: function($event) {
                      _vm.bin.paymentMethod = 3
                    }
                  }
                },
                [
                  _c("div", { staticClass: "EK_customer_bin-check-Box" }, [
                    _c("svg", { staticClass: "EK_customer_bin-checkBoxIcon" }, [
                      _c("use", {
                        staticClass: "use1",
                        attrs: { "xlink:href": "#EK_ico-circleMini" }
                      }),
                      _vm._v(" "),
                      _vm.bin.paymentMethod === 3
                        ? _c("use", {
                            staticClass: "use2",
                            attrs: { "xlink:href": "#EK_ico-tickMini" }
                          })
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "EK_text-T1 EK_customer_bin-text" }, [
                    _vm._v("наличными при получении")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "EK_sep_line EK_customer_bin-sep" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "EK_customer_bin-payBlock" }, [
              _c("div", { staticClass: "EK_text-H1 EK_customer_bin-header" }, [
                _vm._v("Доставка")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "EK_sep_line EK_customer_bin-sep" }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: " EK_customer_bin-payItem",
                  on: {
                    click: function($event) {
                      ;(_vm.bin.delivery = 1), _vm.calc_order()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "EK_customer_bin-check-Box" }, [
                    _c("svg", { staticClass: "EK_customer_bin-checkBoxIcon" }, [
                      _c("use", {
                        staticClass: "use1",
                        attrs: { "xlink:href": "#EK_ico-circleMini" }
                      }),
                      _vm._v(" "),
                      _vm.bin.delivery === 1
                        ? _c("use", {
                            staticClass: "use2",
                            attrs: { "xlink:href": "#EK_ico-tickMini" }
                          })
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "EK_text-T1 EK_customer_bin-text" }, [
                    _vm._v("по России курьером - 450 Ї")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "EK_customer_bin-payItem",
                  on: {
                    click: function($event) {
                      ;(_vm.bin.delivery = 2), _vm.calc_order()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "EK_customer_bin-check-Box" }, [
                    _c("svg", { staticClass: "EK_customer_bin-checkBoxIcon" }, [
                      _c("use", {
                        staticClass: "use1",
                        attrs: { "xlink:href": "#EK_ico-circleMini" }
                      }),
                      _vm._v(" "),
                      _vm.bin.delivery === 2
                        ? _c("use", {
                            staticClass: "use2",
                            attrs: { "xlink:href": "#EK_ico-tickMini" }
                          })
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "EK_text-T1 EK_customer_bin-text" }, [
                    _vm._v("по России СДЭКом - 300 Ї")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "EK_customer_bin-payItem",
                  on: {
                    click: function($event) {
                      ;(_vm.bin.delivery = 3), _vm.calc_order()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "EK_customer_bin-check-Box" }, [
                    _c("svg", { staticClass: "EK_customer_bin-checkBoxIcon" }, [
                      _c("use", {
                        staticClass: "use1",
                        attrs: { "xlink:href": "#EK_ico-circleMini" }
                      }),
                      _vm._v(" "),
                      _vm.bin.delivery === 3
                        ? _c("use", {
                            staticClass: "use2",
                            attrs: { "xlink:href": "#EK_ico-tickMini" }
                          })
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "EK_text-T1 EK_customer_bin-text" }, [
                    _vm._v("почтой России - 250 Ї")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "EK_customer_bin-sep" }),
              _vm._v(" "),
              _c("div", { staticClass: "EK_sep_line EK_customer_bin-sep" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "EK_customer_bin-customerInfo" }, [
              _c("div", { staticClass: "EK_text-H1 EK_customer_bin-header" }, [
                _vm._v("Данные для доставки")
              ]),
              _vm._v(" "),
              _c("form", { staticClass: "EK_customer_bin-formDelivery" }, [
                _c(
                  "div",
                  { staticClass: "EK_customer_bin-formDelivery-wrapper" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.bin.userData.name,
                          expression: "bin.userData.name"
                        }
                      ],
                      staticClass: "EK_Form-inputUnderlineBlack",
                      attrs: {
                        type: "text",
                        name: "",
                        id: "EK_in_del-1",
                        placeholder: "ФИО"
                      },
                      domProps: { value: _vm.bin.userData.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.bin.userData,
                            "name",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.orderResponse.validator.hasOwnProperty("name")
                      ? _c(
                          "div",
                          { staticClass: "EK_questions_form_error EK_text-T2" },
                          [_vm._v("Проверьте поле ФИО\n                    ")]
                        )
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "EK_customer_bin-formDelivery-wrapper" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.bin.userData.phone,
                          expression: "bin.userData.phone"
                        }
                      ],
                      staticClass: "EK_Form-inputUnderlineBlack",
                      attrs: {
                        type: "text",
                        name: "",
                        id: "EK_in_del-2",
                        placeholder: "Телефон"
                      },
                      domProps: { value: _vm.bin.userData.phone },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.bin.userData,
                            "phone",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.orderResponse.validator.hasOwnProperty("phone")
                      ? _c(
                          "div",
                          { staticClass: "EK_questions_form_error EK_text-T2" },
                          [
                            _vm._v(
                              "Проверьте поле Телефон\n                    "
                            )
                          ]
                        )
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "EK_customer_bin-formDelivery-wrapper" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.bin.userData.email,
                          expression: "bin.userData.email"
                        }
                      ],
                      staticClass: "EK_Form-inputUnderlineBlack",
                      attrs: {
                        type: "text",
                        name: "",
                        id: "EK_in_del-3",
                        placeholder: "E-mail"
                      },
                      domProps: { value: _vm.bin.userData.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.bin.userData,
                            "email",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.orderResponse.validator.hasOwnProperty("email")
                      ? _c(
                          "div",
                          { staticClass: "EK_questions_form_error EK_text-T2" },
                          [
                            _vm._v(
                              "Проверьте поле E-mail\n                    "
                            )
                          ]
                        )
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "EK_customer_bin-formDelivery-wrapper" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.bin.userData.town,
                          expression: "bin.userData.town"
                        }
                      ],
                      staticClass: "EK_Form-inputUnderlineBlack",
                      attrs: {
                        type: "text",
                        name: "",
                        id: "EK_in_del-4",
                        placeholder: "Город"
                      },
                      domProps: { value: _vm.bin.userData.town },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.bin.userData,
                            "town",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.orderResponse.validator.hasOwnProperty("town")
                      ? _c(
                          "div",
                          { staticClass: "EK_questions_form_error EK_text-T2" },
                          [_vm._v("Проверьте поле Город\n                    ")]
                        )
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "EK_customer_bin-formDelivery-wrapper" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.bin.userData.street,
                          expression: "bin.userData.street"
                        }
                      ],
                      staticClass: "EK_Form-inputUnderlineBlack",
                      attrs: {
                        type: "text",
                        name: "",
                        id: "EK_in_del-5",
                        placeholder: "Улица, дом, номер квартиры"
                      },
                      domProps: { value: _vm.bin.userData.street },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.bin.userData,
                            "street",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.orderResponse.validator.hasOwnProperty("street")
                      ? _c(
                          "div",
                          { staticClass: "EK_questions_form_error EK_text-T2" },
                          [
                            _vm._v(
                              "Проверьте поле Улица, дом, номер квартиры\n                    "
                            )
                          ]
                        )
                      : _vm._e()
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "EK_customer_bin-promo" }, [
              _c("div", { staticClass: "EK_text-H1 EK_customer_bin-header" }, [
                _vm._v("У вас есть промокод?")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.bin.promoCode,
                    expression: "bin.promoCode"
                  }
                ],
                staticClass: "EK_Form-inputBorder EK_customer_bin-promoInput",
                attrs: { type: "text", placeholder: "Промокод" },
                domProps: { value: _vm.bin.promoCode },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.bin, "promoCode", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "EK_Btn-clr EK_customer_bin-promoBtn",
                  on: {
                    click: function($event) {
                      _vm.check_promo(), _vm.calc_order()
                    }
                  }
                },
                [_vm._v("Применить")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "EK_text-H2 EK_customer_bin-total" }, [
              _vm._v(
                "\n            Сумма: " + _vm._s(_vm.order) + " Ї\n        "
              )
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "EK_Btn-stnd EK_customer_bin-btn",
                attrs: { href: "#EK_shop" },
                on: {
                  click: function($event) {
                    return _vm.send_order()
                  }
                }
              },
              [_vm._v("Оформить заказ")]
            )
          ],
          2
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modal-window.vue?vue&type=template&id=12b786db&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/modal-window.vue?vue&type=template&id=12b786db&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "modalWindow" }, [
    _c("div", { staticClass: "modalWrapper modalWrapper-1" }, [
      _c("div", {
        staticClass: "modalCloser modalCloser-1",
        on: {
          click: function($event) {
            _vm.closeWindow(_vm.modal_props), _vm.body_overflow()
          }
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "modalWrapper modalWrapper-2" }, [
        _c(
          "div",
          {
            staticClass: "modalCloseBatton",
            on: {
              click: function($event) {
                _vm.closeWindow(_vm.modal_props), _vm.body_overflow()
              }
            }
          },
          [_vm._t("close_btn")],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "modalWrapper modalWrapper-3" },
          [
            _c("div", {
              staticClass: "modalCloser modalCloser-2",
              on: {
                click: function($event) {
                  _vm.closeWindow(_vm.modal_props), _vm.body_overflow()
                }
              }
            }),
            _vm._v(" "),
            _vm._t("content")
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product-item.vue?vue&type=template&id=e9f28708&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/product-item.vue?vue&type=template&id=e9f28708&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "EK_shop_item" }, [
    _c("img", {
      staticClass: "EK_shop_item_img",
      attrs: {
        src: _vm.path + _vm.product.product_id + _vm.ext,
        alt: _vm.product.name
      }
    }),
    _vm._v(" "),
    _c("h3", { staticClass: "EK_text-H2 EK_shop_item_title" }, [
      _vm._v(_vm._s(_vm.product.pre_name) + " " + _vm._s(_vm.product.name))
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "EK_sep_line EK_shop_item_line" }),
    _vm._v(" "),
    _c("p", { staticClass: "EK_text-T1 EK_shop_item_desc" }, [
      _vm._v(_vm._s(_vm.product.short_description))
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "EK_sep_line EK_shop_item_line" }),
    _vm._v(" "),
    _c("div", { staticClass: "EK_shop_item_sep" }, [
      _c(
        "span",
        {
          staticClass: "EK_Btn-stnd  EK_shop_item_btn",
          on: {
            click: function($event) {
              return _vm.add(_vm.product.product_id)
            }
          }
        },
        [_vm._v("В корзину")]
      ),
      _vm._v(" "),
      _c("span", { staticClass: "EK_text-H2 EK_shop_item_price" }, [
        _vm._v(_vm._s(_vm.product.price) + " Ї")
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/Ekolog.js":
/*!********************************!*\
  !*** ./resources/js/Ekolog.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-cookies */ "./node_modules/vue-cookies/vue-cookies.js");
/* harmony import */ var vue_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_cookies__WEBPACK_IMPORTED_MODULE_0__);
// Vue.component('product-item', {
//     data: function () {
//         return {
//         }
//     },
//     template:
//         '<div class="EK_shop_item">' +
//             '<img src="../../../../public/LandingPages/EK/img/products/Dark%20Brown%20Soap.jpeg" alt="" class="EK_shop_item_img">' +
//             '<h3 class="EK_text-H2 EK_shop_item_title">Мыло “Зефир”</h3>' +
//             '<div class="EK_sep_line EK_shop_item_line"></div>' +
//             '<p class="EK_text-T1 EK_shop_item_desc">Натуральное мыло с запахом зефира. Состоит только из природных компонентов: масел и экстрактов целебных трав</p>' +
//             '<div class="EK_sep_line EK_shop_item_line"></div>' +
//             '<div class="EK_shop_item_sep">' +
//                 '<span class="EK_Btn-stnd  EK_shop_item_btn">В корзину</span>' +
//                 '<span class="EK_text-H2 EK_shop_item_price">666 &#1031;</span>' +
//             '</div>' +
//         '</div>'
// })
Vue.component('product-item', __webpack_require__(/*! ./components/product-item */ "./resources/js/components/product-item.vue")["default"]);
Vue.component('modal-window', __webpack_require__(/*! ./components/modal-window */ "./resources/js/components/modal-window.vue")["default"]);
Vue.component('customer-bin', __webpack_require__(/*! ./components/customer-bin */ "./resources/js/components/customer-bin.vue")["default"]);

Vue.use(vue_cookies__WEBPACK_IMPORTED_MODULE_0___default.a);
var EK = new Vue({
  el: '#EK',
  data: {
    isVisibilityModals: {
      bin: false,
      smallMenu: false
    },
    productBase: null,
    productBaseObj: null,
    totalBin: null,
    totalOrder: null,
    discount: 0,
    filteredProductBase: [],
    subscribe: {
      subscribeMail: null,
      subscribeMailCheck: false,
      subscribeStatus: false,
      subscribeExists: false,
      subscribeFormIsVisible: true,
      subscribeErrors: null
    },
    feedback: {
      data: {
        name: null,
        email: null,
        text: null
      },
      validate: {
        feedbackSave: false,
        errorSaving: false,
        errorValidator: false
      },
      errors: {
        name: [false],
        email: [false],
        text: [false]
      },
      btnValue: 'Отправить'
    },
    promoCodes: {
      'test10': 10,
      'test20': 20,
      'test30': 30,
      'test40': 40
    },
    deliveryCosts: {
      1: 450,
      2: 300,
      3: 250
    },
    orderResponse: {
      isDone: false,
      Error: false,
      massage: null,
      validator: {}
    },
    path: 'img/products/',
    ext: '.jpeg',
    Shops: {
      productQuery: '0',
      productCategoriesEn: ['all', 'soap', 'Brushes', 'roles', 'dishes', 'other'],
      productCategories: {
        0: 'Все продукты',
        1: 'Мыло',
        2: 'Щётки',
        3: 'Ролики для лица',
        4: 'Посуда',
        5: 'Другое'
      }
    },
    CustomerBin: {
      userData: {
        name: null,
        phone: null,
        email: null,
        town: null,
        street: null
      },
      promoCode: null,
      paymentMethod: 1,
      delivery: 1,
      bin: []
    }
  },
  computed: {
    test: function test() {
      return 'test';
    }
  },
  methods: {
    // SERVICE METHODS
    arrayToObj: function arrayToObj(arr) {
      var obj = {};
      arr.forEach(function (item) {
        var id = item.id;
        obj[id] = item;
      });
      return obj;
    },
    changeClass: function changeClass(selector, firstClass, secondClass) {
      var bodyClass = document.querySelector(selector).classList;
      var isFirstClass = bodyClass.contains(firstClass);
      var isSecondClass = bodyClass.contains(secondClass);

      if (isFirstClass) {
        bodyClass.replace(firstClass, secondClass);
      } else if (isSecondClass) {
        bodyClass.replace(secondClass, firstClass);
      } else {
        bodyClass.add(firstClass);
      }
    },
    bodyOverflow: function bodyOverflow() {
      this.changeClass('body', 'EK_overflow_auto', 'EK_overflow_hidden');
    },
    CloseModal: function CloseModal(ModalParam) {
      this[ModalParam] = false;
    },
    // PUSH AND PULL METHODS
    sendFeedback: function sendFeedback() {
      var _this = this;

      var data = this.feedback.data;
      axios.post('http://landosiki/api/EK/feedback', data).then(function (response) {
        console.log(response.data);

        if (response.data.errorValidator) {
          _this.feedback.errors = response.data.errors;
          _this.feedback.validate.errorValidator = response.data.errorValidator; // return;
        } else if (response.data.errorSaving) {
          _this.feedback.validate.errorSaving = response.data.errorSaving; // return;
        } else {
          _this.feedback.data.text = null;
          _this.feedback.errors = {
            name: [false],
            email: [false],
            text: [false]
          };
          _this.feedback.btnValue = 'Еще один';
          _this.feedback.validate.feedbackSave = response.data.feedbackSave; // return;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    sendSubscribe: function sendSubscribe() {
      var _this2 = this;

      var mail = this.subscribe.subscribeMail;
      axios.post('http://landosiki/api/EK/subscribe', {
        'mail': mail
      }).then(function (response) {
        /**
         * @type {Object}
         */
        var resp = response.data;
        /**
         *
         */

        if (resp.mailCheck === true) {
          /**
           * @param {boolean} resp.mailCheck
           */
          _this2.subscribe.subscribeMailCheck = true;
          _this2.subscribe.subscribeErrors = resp.errors.mail;
        } else if (resp.isExistsMail === true) {
          /**
           * @param {boolean} resp.isExistsMail
           */
          _this2.subscribe.subscribeExists = true;
          _this2.subscribe.subscribeFormIsVisible = false; // return;
        } else if (resp.isExistsMail === false) {
          _this2.subscribe.subscribeStatus = true;
          _this2.subscribe.subscribeFormIsVisible = false; // return
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    sendOrder: function sendOrder() {
      var _this3 = this;

      var bin = this.CustomerBin;
      axios.post('http://landosiki/api/EK/putOrder', bin).then(function (response) {
        _this3.orderResponse = response.data;

        if (_this3.orderResponse.isDone === true) {
          _this3.CustomerBin.bin = [];
          Vue["$cookies"].remove('CustomerBin');
        }
      })["catch"](function (error) {
        console.log("error");
        console.log(error);
      });
    },
    // ALL ACTION WITH PRODUCT DATA METHODS
    filterProducts: function filterProducts() {
      var _this4 = this;

      this.filteredProductBase = [];

      if (this.Shops.productQuery === '0') {
        console.log('no filter');
        this.filteredProductBase = this.productBase;
      } else {
        this.productBase.forEach(function (product) {
          if (parseInt(product.category) === parseInt(_this4.Shops.productQuery)) {
            /**
             * @param  {string} product.category
             */
            _this4.filteredProductBase.push(product);
          }
        });
      }
    },
    //DISCOUNT METHODS
    checkPromoCode: function checkPromoCode() {
      var promoCode = this.CustomerBin.promoCode;
      var promoCodes = this.promoCodes;

      if (promoCodes[promoCode] > 0) {
        this.setDiscount(promoCodes[promoCode]);
      }
    },
    setDiscount: function setDiscount(disc) {
      this.discount = disc;
    },
    //CALC METHODS
    calcTotalOrder: function calcTotalOrder() {
      var bin = this.CustomerBin;
      var dl = this.deliveryCosts;
      var tb = this.totalBin;
      return this.totalOrder = Math.round((tb + dl[bin['delivery']]) / 100 * (100 - this.discount));
    },
    calcTotalBin: function calcTotalBin() {
      var bin = this.CustomerBin.bin;
      var base = this.productBaseObj;
      var sum = 0;
      bin.forEach(function (item) {
        var product = base[item.id];
        sum += product['price'] * item.count;
      });
      return this.totalBin = Math.round(sum);
    },
    // ACTION WITH BIN METHODS
    addBinItem: function addBinItem(id) {
      var prodStatus = this.searchItemInBin(id);

      if (prodStatus === false) {
        this.CustomerBin.bin.push({
          'id': id,
          'count': 1
        });
      } else {
        var item = this.CustomerBin.bin[prodStatus];
        item.count += 1;
      }

      var bin = JSON.stringify(this.CustomerBin.bin);
      Vue["$cookies"].set('CustomerBin', bin);
      this.calcTotalBin();
      this.calcTotalOrder();
    },
    deleteBinItem: function deleteBinItem(id) {
      var prodStatus = this.searchItemInBin(id);
      var item = this.CustomerBin.bin[prodStatus];
      var count = item.count;

      if (count > 1) {
        item.count -= 1;
      } else {
        this.CustomerBin.bin.splice(prodStatus, 1);
      }

      var bin = JSON.stringify(this.CustomerBin.bin);
      Vue["$cookies"].set('CustomerBin', bin);
      this.calcTotalBin();
      this.calcTotalOrder();
    },
    deleteAllBinItem: function deleteAllBinItem(id) {
      var prodStatus = this.searchItemInBin(id);
      this.CustomerBin.bin.splice(prodStatus, 1);
      var bin = JSON.stringify(this.CustomerBin.bin);
      Vue["$cookies"].set('CustomerBin', bin);
      this.calcTotalBin();
      this.calcTotalOrder();
    },
    searchItemInBin: function searchItemInBin(id) {
      if (this.CustomerBin.bin.length === 0) {
        return false;
      } else {
        var ind = false;
        this.CustomerBin.bin.forEach(function (element, index) {
          if (element.id === id) {
            ind = index;
            return ind;
          }
        });
        return ind;
      }
    }
  },
  beforeMount: function beforeMount() {
    var _this5 = this;

    // noinspection CommaExpressionJS
    axios.get('http://landosiki/api/EK/GetProduct').then(function (response) {
      return _this5.productBase = response.data, _this5.productBaseObj = _this5.arrayToObj(response.data), _this5.filteredProductBase = response.data;
    });
  },
  mounted: function mounted() {
    var cookieBin = Vue["$cookies"].get('CustomerBin');

    if (cookieBin) {
      this.CustomerBin.bin = JSON.parse(cookieBin);
    }
  },
  beforeUpdate: function beforeUpdate() {
    this.filterProducts();
    this.calcTotalBin();
    this.calcTotalOrder();
  }
});
console.log(EK);

/***/ }),

/***/ "./resources/js/components/customer-bin.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/customer-bin.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customer_bin_vue_vue_type_template_id_5aa7133a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-bin.vue?vue&type=template&id=5aa7133a&scoped=true& */ "./resources/js/components/customer-bin.vue?vue&type=template&id=5aa7133a&scoped=true&");
/* harmony import */ var _customer_bin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-bin.vue?vue&type=script&lang=js& */ "./resources/js/components/customer-bin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _customer_bin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _customer_bin_vue_vue_type_template_id_5aa7133a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _customer_bin_vue_vue_type_template_id_5aa7133a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5aa7133a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/customer-bin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/customer-bin.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/customer-bin.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_bin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./customer-bin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer-bin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_bin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/customer-bin.vue?vue&type=template&id=5aa7133a&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/customer-bin.vue?vue&type=template&id=5aa7133a&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_bin_vue_vue_type_template_id_5aa7133a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./customer-bin.vue?vue&type=template&id=5aa7133a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customer-bin.vue?vue&type=template&id=5aa7133a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_bin_vue_vue_type_template_id_5aa7133a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customer_bin_vue_vue_type_template_id_5aa7133a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/modal-window.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/modal-window.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_window_vue_vue_type_template_id_12b786db_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-window.vue?vue&type=template&id=12b786db&scoped=true& */ "./resources/js/components/modal-window.vue?vue&type=template&id=12b786db&scoped=true&");
/* harmony import */ var _modal_window_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-window.vue?vue&type=script&lang=js& */ "./resources/js/components/modal-window.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _modal_window_vue_vue_type_style_index_0_id_12b786db_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-window.vue?vue&type=style&index=0&id=12b786db&scoped=true&lang=css& */ "./resources/js/components/modal-window.vue?vue&type=style&index=0&id=12b786db&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _modal_window_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modal_window_vue_vue_type_template_id_12b786db_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modal_window_vue_vue_type_template_id_12b786db_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "12b786db",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modal-window.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/modal-window.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/modal-window.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_window_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./modal-window.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modal-window.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_window_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modal-window.vue?vue&type=style&index=0&id=12b786db&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/modal-window.vue?vue&type=style&index=0&id=12b786db&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_window_vue_vue_type_style_index_0_id_12b786db_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./modal-window.vue?vue&type=style&index=0&id=12b786db&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modal-window.vue?vue&type=style&index=0&id=12b786db&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_window_vue_vue_type_style_index_0_id_12b786db_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_window_vue_vue_type_style_index_0_id_12b786db_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_window_vue_vue_type_style_index_0_id_12b786db_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_window_vue_vue_type_style_index_0_id_12b786db_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_window_vue_vue_type_style_index_0_id_12b786db_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/modal-window.vue?vue&type=template&id=12b786db&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/modal-window.vue?vue&type=template&id=12b786db&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_window_vue_vue_type_template_id_12b786db_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./modal-window.vue?vue&type=template&id=12b786db&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/modal-window.vue?vue&type=template&id=12b786db&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_window_vue_vue_type_template_id_12b786db_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_window_vue_vue_type_template_id_12b786db_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/product-item.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/product-item.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_item_vue_vue_type_template_id_e9f28708_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-item.vue?vue&type=template&id=e9f28708&scoped=true& */ "./resources/js/components/product-item.vue?vue&type=template&id=e9f28708&scoped=true&");
/* harmony import */ var _product_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-item.vue?vue&type=script&lang=js& */ "./resources/js/components/product-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _product_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _product_item_vue_vue_type_template_id_e9f28708_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _product_item_vue_vue_type_template_id_e9f28708_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e9f28708",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/product-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/product-item.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/product-item.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./product-item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/product-item.vue?vue&type=template&id=e9f28708&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/product-item.vue?vue&type=template&id=e9f28708&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_item_vue_vue_type_template_id_e9f28708_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./product-item.vue?vue&type=template&id=e9f28708&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/product-item.vue?vue&type=template&id=e9f28708&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_item_vue_vue_type_template_id_e9f28708_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_item_vue_vue_type_template_id_e9f28708_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!**************************************!*\
  !*** multi ./resources/js/Ekolog.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\OpenServer(5.3.7)\domains\EcologProject\resources\js\Ekolog.js */"./resources/js/Ekolog.js");


/***/ })

/******/ });