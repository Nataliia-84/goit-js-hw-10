function t(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e,o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,p=Math.max,d=Math.min,v=function(){return l.Date.now()};function m(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=m(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var e=r.test(t);return e||u.test(t)?a(t.slice(2),e?2:8):i.test(t)?NaN:+t}e=function(t,n,e){var o,i,r,u,a,f,c=0,l=!1,s=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(n){var e=o,r=i;return o=i=void 0,c=n,u=t.apply(r,e)}function b(t){return c=t,a=setTimeout($,n),l?g(t):u}function j(t){var e=t-f;return void 0===f||e>=n||e<0||s&&t-c>=r}function $(){var t=v();if(j(t))return T(t);a=setTimeout($,function(t){var e=n-(t-f);return s?d(e,r-(t-c)):e}(t))}function T(t){return a=void 0,y&&o?g(t):(o=i=void 0,u)}function w(){var t=v(),e=j(t);if(o=arguments,i=this,f=t,e){if(void 0===a)return b(f);if(s)return a=setTimeout($,n),g(f)}return void 0===a&&(a=setTimeout($,n)),u}return n=h(n)||0,m(e)&&(l=!!e.leading,r=(s="maxWait"in e)?p(h(e.maxWait)||0,n):r,y="trailing"in e?!!e.trailing:y),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=i=a=void 0},w.flush=function(){return void 0===a?u:T(v())},w};const y=document.querySelector("#search-box"),g=document.querySelector(".country-list"),b=document.querySelector(".country-info");y.addEventListener("input",t(e)((function(t){(n=t.target.value,fetch(`https://restcountries.com/v3.1/name/${n}`).then((t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}))).then((t=>{t.length>=2?g.innerHTML=t.map((({flags:{svg:t},name:{common:n}})=>`<li class="item">\n<img src="${t}" alt="${n}" width="50">\n<h2>${n}</h2>\n</li>`)).join(""):(g.innerHTML="",b.innerHTML=function(t){return t.map((({flags:{svg:t},name:{official:n},population:e,capital:o,languages:i})=>`<div class="country-info">\n<img src="${t}" alt="${n}" width="150px">\n<h2>${n}</h2>\n<h3>Capital: ${o}</h3>\n<p>Population: ${e}</p>\n<p>Languages: ${Object.values(i).join(", ")}</p>`)).join("")}(t))})).catch((t=>console.log(t)));var n}),300));
//# sourceMappingURL=index.d5e6962a.js.map