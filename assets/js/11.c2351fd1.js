(window.webpackJsonp=window.webpackJsonp||[]).push([[11,16,18],{1016:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"i",(function(){return s})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return p})),n.d(e,"k",(function(){return d})),n.d(e,"l",(function(){return h})),n.d(e,"c",(function(){return g})),n.d(e,"j",(function(){return m}));n(45),n(63),n(1017),n(128),n(49),n(1018),n(144),n(61),n(23),n(50),n(93);var r=/#.*$/,i=/\.(md|html)$/,a=/\/$/,s=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(r,"").replace(i,"")}function u(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;var e=t.match(r),n=e?e[0]:"",i=o(t);return a.test(i)?t:i+".html"+n}function p(t,e){var n=decodeURIComponent(t.hash),i=function(t){var e=t.match(r);if(e)return e[0]}(e);return(!i||n===i)&&o(t.path)===o(e)}function d(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var a=t.replace(/^\//,"").split("/"),s=0;s<a.length;s++){var o=a[s];".."===o?i.pop():"."!==o&&i.push(o)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));for(var r=o(e),i=0;i<t.length;i++)if(o(t[i].regularPath)===r)return Object.assign({},t[i],{type:"page",path:f(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function h(t,e,n,r){var i=n.pages,a=n.themeConfig,s=r&&a.locales&&a.locales[r]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return v(t);var o=s.sidebar||a.sidebar;if(o){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(r=t,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var r;return{}}(e,o),c=u.base,l=u.config;return"auto"===l?v(t):l?l.map((function(t){return function t(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return d(n,e,r);if(Array.isArray(e))return Object.assign(d(n,e[0],r),{title:e[1]});var a=e.children||[];return 0===a.length&&e.path?Object.assign(d(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:a.map((function(e){return t(e,n,r,i+1)})),collapsable:!1!==e.collapsable}}(t,i,c)})):[]}return[]}function v(t){var e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}function g(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},1017:function(t,e,n){"use strict";var r=n(46),i=n(327),a=n(55),s=n(103),o=n(258),u=n(62),c=n(94),l=n(171),f=n(649),p=n(328);i("match",(function(t,e,n){return[function(e){var n=c(this),i=s(e)?void 0:l(e,t);return i?r(i,e,n):new RegExp(e)[t](u(n))},function(t){var r=a(this),i=u(t),s=n(e,r,i);if(s.done)return s.value;if(!r.global)return p(r,i);var c=r.unicode;r.lastIndex=0;for(var l,d=[],h=0;null!==(l=p(r,i));){var v=u(l[0]);d[h]=v,""===v&&(r.lastIndex=f(i,o(r.lastIndex),c)),h++}return 0===h?null:d}]}))},1018:function(t,e,n){"use strict";var r=n(21),i=n(69),a=n(85),s=n(329),o=n(330),u=n(259);r({target:"Array",proto:!0,arity:1,forced:1!==[].unshift(0)||!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}}()},{unshift:function(t){var e=i(this),n=a(e),r=arguments.length;if(r){u(n+r);for(var c=n;c--;){var l=c+r;c in e?e[l]=e[c]:o(e,l)}for(var f=0;f<r;f++)e[f]=arguments[f]}return s(e,n+r)}})},1024:function(t,e,n){},1025:function(t,e,n){},1039:function(t,e,n){"use strict";n(1024)},1040:function(t,e,n){var r=n(132),i=n(81),a=n(95);t.exports=function(t){return"string"==typeof t||!i(t)&&a(t)&&"[object String]"==r(t)}},1041:function(t,e,n){"use strict";n(1025)},1042:function(t,e,n){},1047:function(t,e,n){"use strict";n.r(e);n(45),n(128),n(63);var r=n(117),i=n.n(r),a=n(1016),s={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=i()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,r=e.docsDir,a=void 0===r?"":r,s=e.docsBranch,o=void 0===s?"master":s,u=e.docsRepo,c=void 0===u?n:u;return t&&c&&this.$page.relativePath?this.createEditLink(n,c,a,o,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,r,i){if(/bitbucket.org/.test(e))return e.replace(a.a,"")+"/src"+"/".concat(r,"/")+(n?n.replace(a.a,"")+"/":"")+i+"?mode=edit&spa=0&at=".concat(r,"&fileviewer=file-view-default");return/gitlab.com/.test(e)?e.replace(a.a,"")+"/-/edit"+"/".concat(r,"/")+(n?n.replace(a.a,"")+"/":"")+i:(a.i.test(e)?e:"https://github.com/".concat(e)).replace(a.a,"")+"/edit"+"/".concat(r,"/")+(n?n.replace(a.a,"")+"/":"")+i}}},o=(n(1039),n(10)),u=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null);e.default=u.exports},1048:function(t,e,n){"use strict";n.r(e);n(49);var r=n(1016),i=n(1040),a=n.n(i),s=n(117),o=n.n(s),u={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return l(c.PREV,this)},next:function(){return l(c.NEXT,this)}}};var c={NEXT:{resolveLink:function(t,e){return f(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return f(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function l(t,e){var n=e.$themeConfig,i=e.$page,s=e.$route,u=e.$site,c=e.sidebarItems,l=t.resolveLink,f=t.getThemeLinkConfig,p=t.getPageLinkConfig,d=f(n),h=p(i),v=o()(h)?d:h;return!1===v?void 0:a()(v)?Object(r.k)(u.pages,v,s.path):l(i,c)}function f(t,e,n){var r=[];!function t(e,n){for(var r=0,i=e.length;r<i;r++)"group"===e[r].type?t(e[r].children||[],n):n.push(e[r])}(e,r);for(var i=0;i<r.length;i++){var a=r[i];if("page"===a.type&&a.path===decodeURIComponent(t.path))return r[i+n]}}var p=u,d=(n(1041),n(10)),h=Object(d.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null);e.default=h.exports},1058:function(t,e,n){"use strict";n(1042)},1079:function(t,e,n){"use strict";n.r(e);var r=n(1047),i=n(1048),a={components:{PageEdit:r.default,PageNav:i.default},props:["sidebarItems"]},s=(n(1058),n(10)),o=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.default=o.exports}}]);