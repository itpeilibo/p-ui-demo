(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1020:function(e,t,n){},1026:function(e,t,n){},1031:function(e,t,n){"use strict";n(1020)},1032:function(e,t,n){"use strict";n.r(t);n(23);var i=n(1045),r=n(1033),s=n(1016);function a(e,t){if("group"===t.type){var n=t.path&&Object(s.e)(e,t.path),i=t.children.some((function(t){return"group"===t.type?a(e,t):"page"===t.type&&Object(s.e)(e,t.path)}));return n||i}return!1}var o={name:"SidebarLinks",components:{SidebarGroup:i.default,SidebarLink:r.default},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var e=function(e,t){for(var n=0;n<t.length;n++){var i=t[n];if(a(e,i))return n}return-1}(this.$route,this.items);e>-1&&(this.openGroupIndex=e)},toggleGroup:function(e){this.openGroupIndex=e===this.openGroupIndex?-1:e},isActive:function(e){return Object(s.e)(this.$route,e.regularPath)}}},l=n(10),p=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.items.length?n("ul",{staticClass:"sidebar-links"},e._l(e.items,(function(t,i){return n("li",{key:i},["group"===t.type?n("SidebarGroup",{attrs:{item:t,open:i===e.openGroupIndex,collapsable:t.collapsable||t.collapsible,depth:e.depth},on:{toggle:function(t){return e.toggleGroup(i)}}}):n("SidebarLink",{attrs:{"sidebar-depth":e.sidebarDepth,item:t}})],1)})),0):e._e()}),[],!1,null,null,null);t.default=p.exports},1033:function(e,t,n){"use strict";n.r(t);n(23),n(131),n(45),n(128),n(61);var i=n(1016);function r(e,t,n,i,r){var s={props:{to:t,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return r>2&&(s.style={"padding-left":r+"rem"}),e("RouterLink",s,n)}function s(e,t,n,a,o){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!t||l>o?null:e("ul",{class:"sidebar-sub-headers"},t.map((function(t){var p=Object(i.e)(a,n+"#"+t.slug);return e("li",{class:"sidebar-sub-header"},[r(e,n+"#"+t.slug,t.title,p,t.level-1),s(e,t.children,n,a,o,l+1)])})))}var a={functional:!0,props:["item","sidebarDepth"],render:function(e,t){var n=t.parent,a=n.$page,o=(n.$site,n.$route),l=n.$themeConfig,p=n.$themeLocaleConfig,u=t.props,c=u.item,d=u.sidebarDepth,h=Object(i.e)(o,c.path),b="auto"===c.type?h||c.children.some((function(e){return Object(i.e)(o,c.basePath+"#"+e.slug)})):h,f="external"===c.type?function(e,t,n){return e("a",{attrs:{href:t,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,e("OutboundLink")])}(e,c.path,c.title||c.path):r(e,c.path,c.title||c.path,b),m=[a.frontmatter.sidebarDepth,d,p.sidebarDepth,l.sidebarDepth,1].find((function(e){return void 0!==e})),v=p.displayAllHeaders||l.displayAllHeaders;return"auto"===c.type?[f,s(e,c.children,c.basePath,o,m)]:(b||v)&&c.headers&&!i.d.test(c.path)?[f,s(e,Object(i.c)(c.headers),c.path,o,m)]:f}},o=(n(1031),n(10)),l=Object(o.a)(a,void 0,void 0,!1,null,null,null);t.default=l.exports},1043:function(e,t,n){"use strict";n(1026)},1044:function(e,t,n){},1045:function(e,t,n){"use strict";n.r(t);var i=n(1016),r={name:"SidebarGroup",components:{DropdownTransition:n(1028).default},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(1032).default},methods:{isActive:i.e}},s=(n(1043),n(10)),a=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"sidebar-group",class:[{collapsable:e.collapsable,"is-sub-group":0!==e.depth},"depth-"+e.depth]},[e.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:e.open,active:e.isActive(e.$route,e.item.path)},attrs:{to:e.item.path},nativeOn:{click:function(t){return e.$emit("toggle")}}},[n("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?n("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]):n("p",{staticClass:"sidebar-heading",class:{open:e.open},on:{click:function(t){return e.$emit("toggle")}}},[n("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?n("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]),e._v(" "),n("DropdownTransition",[e.open||!e.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:e.item.children,"sidebar-depth":e.item.sidebarDepth,"initial-open-group-index":e.item.initialOpenGroupIndex,depth:e.depth+1}}):e._e()],1)],1)}),[],!1,null,null,null);t.default=a.exports},1059:function(e,t,n){"use strict";n(1044)},1080:function(e,t,n){"use strict";n.r(t);var i=n(1032),r=n(1046),s={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:r.default},props:["items"]},a=(n(1059),n(10)),o=Object(a.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("aside",{staticClass:"sidebar"},[t("NavLinks"),this._v(" "),this._t("top"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);t.default=o.exports}}]);