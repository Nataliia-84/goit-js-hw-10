!function(){function n(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e,o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(n){return n&&n.constructor===Symbol?"symbol":typeof n};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,m=function(){return s.Date.now()};function y(t){var e=void 0===t?"undefined":n(o)(t);return!!t&&("object"==e||"function"==e)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(o)(t))||function(n){return!!n&&"object"==typeof n}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var f=u.test(t);return f||c.test(t)?a(t.slice(2),f?2:8):r.test(t)?NaN:+t}e=function(n,t,e){var o,i,r,u,c,a,f=0,l=!1,s=!1,d=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function b(t){var e=o,r=i;return o=i=void 0,f=t,u=n.apply(r,e)}function g(n){return f=n,c=setTimeout(T,t),l?b(n):u}function j(n){var e=n-a;return void 0===a||e>=t||e<0||s&&n-f>=r}function T(){var n=m();if(j(n))return w(n);c=setTimeout(T,function(n){var e=t-(n-a);return s?p(e,r-(n-f)):e}(n))}function w(n){return c=void 0,d&&o?b(n):(o=i=void 0,u)}function O(){var n=m(),e=j(n);if(o=arguments,i=this,a=n,e){if(void 0===c)return g(a);if(s)return c=setTimeout(T,t),b(a)}return void 0===c&&(c=setTimeout(T,t)),u}return t=h(t)||0,y(e)&&(l=!!e.leading,r=(s="maxWait"in e)?v(h(e.maxWait)||0,t):r,d="trailing"in e?!!e.trailing:d),O.cancel=function(){void 0!==c&&clearTimeout(c),f=0,o=a=i=c=void 0},O.flush=function(){return void 0===c?u:w(m())},O};var b=document.querySelector("#search-box"),g=document.querySelector(".country-list"),j=document.querySelector(".country-info");b.addEventListener("input",n(e)((function(n){(t=n.target.value,fetch("https://restcountries.com/v3.1/name/".concat(t)).then((function(n){if(!n.ok)throw new Error(n.statusText);return n.json()}))).then((function(n){n.length>=2?g.innerHTML=n.map((function(n){var t=n.flags.svg,e=n.name.common;return'<li class="item">\n<img src="'.concat(t,'" alt="').concat(e,'" width="50">\n<h2>').concat(e,"</h2>\n</li>")})).join(""):(g.innerHTML="",j.innerHTML=function(n){return n.map((function(n){var t=n.flags.svg,e=n.name.official,o=n.population,i=n.capital,r=n.languages;return'<div class="country-info">\n<img src="'.concat(t,'" alt="').concat(e,'" width="150px">\n<h2>').concat(e,"</h2>\n<h3>Capital: ").concat(i,"</h3>\n<p>Population: ").concat(o,"</p>\n<p>Languages: ").concat(Object.values(r).join(", "),"</p>")})).join("")}(n))})).catch((function(n){return console.log(n)}));var t}),300))}();
//# sourceMappingURL=index.272e53cb.js.map
