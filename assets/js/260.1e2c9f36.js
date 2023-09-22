(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{1359:function(e,t,a){"use strict";a.r(t);var r=a(10),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"keep-alive不能缓存多层级路由-vue-router-菜单问题解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive不能缓存多层级路由-vue-router-菜单问题解决"}},[e._v("#")]),e._v(" keep-alive不能缓存多层级路由(vue-router)菜单问题解决")]),e._v(" "),a("h3",{attrs:{id:"需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求"}},[e._v("#")]),e._v(" 需求")]),e._v(" "),a("p",[e._v("如图需要缓存“风控报告”及“风控规则查询”页面，并且每次删除后才能重新加载（如图二）\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200609155315559.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2N3aW44OTUx,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),e._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200609162028713.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2N3aW44OTUx,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),e._v(" "),a("p",[e._v('"风控管理"是一个blank.vue文件（所有嵌套路由其父都是一个仅放<router-view />的空白文件——占位让其子视图渲染而已），代码如下')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<template>\n    <router-view />\n</template>\n<script>\nexport default {\n  name: 'Blank'\n}\n<\/script>\n")])])]),a("h3",{attrs:{id:"解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[e._v("#")]),e._v(" 解决")]),e._v(" "),a("p",[e._v("看了很多文档，都是把嵌套多级路由拍平（keep-alive满足二级/一级菜单缓存）")]),e._v(" "),a("ol",[a("li",[e._v("：需要把所有页签存在vuex中，可以参考"),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-element-admin"),a("OutboundLink")],1),e._v("项目中store有个tagsView.js文件")]),e._v(" "),a("li",[e._v("在AppMin.vue文件中，如图加上这两句\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200609163605949.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2N3aW44OTUx,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),e._v(" "),a("li",[e._v("在全局路由守卫中加上这段代码：（仅仅只是满足三级菜单缓存）")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("if (to.matched && to.matched.length > 2) {\n   for (let i = 0; i < to.matched.length; i++) {\n     const element = to.matched[i]\n     if (element.components.default.name === 'Blank') {\n       to.matched.splice(i, 1)\n     }\n   }\n }\n")])])]),a("hr"),e._v(" "),a("h3",{attrs:{id:"相关文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关文章"}},[e._v("#")]),e._v(" 相关文章")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/cwin8951/article/details/104415090",target:"_blank",rel:"noopener noreferrer"}},[e._v("axios二次封装，接口统一存放,满足RESTful风格"),a("OutboundLink")],1)]),e._v(" "),a("hr"),e._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/cwin8951/article/details/104479606",target:"_blank",rel:"noopener noreferrer"}},[e._v("基于elementUI中table组件二次封装（Vue项目）"),a("OutboundLink")],1)]),e._v(" "),a("hr")])}),[],!1,null,null,null);t.default=n.exports}}]);