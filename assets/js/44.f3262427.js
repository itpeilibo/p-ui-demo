(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1126:function(e,t,a){"use strict";a.r(t);a(23),a(172);var n={name:"customRender",data:function(){var e=this;return{columns:[{title:"取料地",dataIndex:"addrName"},{title:"物料名称",dataIndex:"materialName"},{title:"产地",dataIndex:"materialProducingArea"},{title:"取样时间点",dataIndex:"timeNames",customRender:function(e){return e.toString()}},{title:"接收机构",dataIndex:"usingDeptNames",customRender:function(t,a){return{children:e.$createElement("div",{},[e.$createElement("a-tooltip",{attrs:{title:t.toString()}},[e.$createElement("span",{domProps:{innerHTML:t.toString()},style:{maxWidth:160,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",cursor:"pointer"}})])])}}},{title:"类型",dataIndex:"samplingType",customRender:function(e){return 0==e?"常规":1==e?"非常规":2==e?"通用":void 0}},{title:"状态",dataIndex:"status",isCustomRender:!0,customRender:function(t,a){return{children:e.$createElement("div",{},[e.$createElement("a-switch",{attrs:{checked:Boolean(a.status),size:"small"},on:{change:function(t){e.onStatusChange(t,a)}}})])}}}],sourceData:[{id:85,addrName:"916料场",materialName:"卡粉-new",materialProducingArea:"京环-new",samplingType:0,status:1,timeNames:["2点半"],usingDeptNames:["BBQ煤炉","总调度室","球团3期","竖炉"]},{id:80,addrName:"一号料场",materialName:"测试物料",materialProducingArea:"测试场地",samplingType:2,status:1,timeNames:["12点"],usingDeptNames:["总调度室","112烧结厂"]},{id:79,addrName:"一号料场",materialName:"喷煤",materialProducingArea:"二期喷煤厂",samplingType:0,status:1,timeNames:["20点","08点"],usingDeptNames:["总调度室","112烧结厂"]}]}},methods:{onStatusChange:function(e,t){console.log(e,t)}}},i=a(10),r=Object(i.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("t-layout-page",[t("t-layout-page-item",[t("t-ant-layout-table",{attrs:{columns:this.columns,dataSource:this.sourceData}})],1)],1)}),[],!1,null,null,null);t.default=r.exports}}]);