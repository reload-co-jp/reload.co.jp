(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8e3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext({});t.AmpStateContext=r},9470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,u=void 0!==o&&o;return n||a&&u}},2717:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=f,t.default=void 0;var r=n(6495).Z,a=n(2648).Z,o=(0,n(1598).Z)(n(7294)),u=a(n(1585)),i=n(8e3),c=n(5850),d=n(9470);n(9475);function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function l(e,t){var n=t.inAmpMode;return e.reduce(s,[]).reverse().concat(f(n).reverse()).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,u=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){u=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,d=p.length;c<d;c++){var f=p[c];if(a.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?o=!1:n.add(f);else{var s=a.props[f],l=r[f]||new Set;"name"===f&&u||!l.has(s)?(l.add(s),r[f]=l):o=!1}}}return o}}()).reverse().map((function(e,t){var a=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var u=r({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,o.default.cloneElement(e,u)}return o.default.cloneElement(e,{key:a})}))}var m=function(e){var t=e.children,n=o.useContext(i.AmpStateContext),r=o.useContext(c.HeadManagerContext);return o.default.createElement(u.default,{reduceComponentsToState:l,headManager:r,inAmpMode:d.isInAmpMode(n)},t)};t.default=m,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.headManager,n=e.reduceComponentsToState;function i(){if(t&&t.mountedInstances){var a=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(a,e))}}if(a){var c;null==t||null==(c=t.mountedInstances)||c.add(e.children),i()}return o((function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}})),o((function(){return t&&(t._pendingUpdate=i),function(){t&&(t._pendingUpdate=i)}})),u((function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}})),null};var r=(0,n(1598).Z)(n(7294));var a=!1,o=a?function(){}:r.useLayoutEffect,u=a?function(){}:r.useEffect},8655:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:function(){return s}});n(7294);var a=n(9008),o=n.n(a),u=(n(8476),n(5893));function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d="\u682a\u5f0f\u4f1a\u793e\u30ea\u30ed\u30fc\u30c9",f="\u682a\u5f0f\u4f1a\u793e\u30ea\u30ed\u30fc\u30c9\u306f\u30b7\u30b9\u30c6\u30e0\u30fb\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u3092\u901a\u3058\u3066\u65b0\u3057\u3044\u9078\u629e\u80a2\u3068\u65b0\u3057\u3044\u53ef\u80fd\u6027\u3092\u4e0e\u3048\u308b\u958b\u767a\u4f1a\u793e\u3067\u3059\u3002",s=function(e){var t=e.Component,n=e.pageProps;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(o(),{children:[(0,u.jsx)("meta",{charSet:"utf-8"}),(0,u.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"}),(0,u.jsx)("meta",{name:"description",content:f}),(0,u.jsx)("meta",{property:"og:title",content:d}),(0,u.jsx)("meta",{property:"og:description",content:f}),(0,u.jsx)("meta",{property:"og:url",content:"https://reload.co.jp"}),(0,u.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,u.jsx)("meta",{property:"og:image",content:"https://fffff-cafe.com/images/cover.jpg"}),(0,u.jsx)("title",{children:d})]}),(0,u.jsx)(t,c({},n))]})}},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8655)}])},8476:function(){},9008:function(e,t,n){e.exports=n(2717)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(9898)}));var n=e.O();_N_E=n}]);