(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1133:function(t,e,a){"use strict";a.r(e);a(23),a(172);var n={name:"titleTable",data:function(){var t=this;return{columns:[{title:"取料地",dataIndex:"addrName"},{title:"物料名称",dataIndex:"materialName"},{title:"产地",dataIndex:"materialProducingArea"},{title:"取样时间点",dataIndex:"timeNames",customRender:function(t){return t.toString()}},{title:"接收机构",dataIndex:"usingDeptNames",customRender:function(t){return t.toString()}},{title:"类型",dataIndex:"samplingType",customRender:function(t){return 0==t?"常规":1==t?"非常规":2==t?"通用":void 0}},{title:"状态",dataIndex:"status",isCustomRender:!0,customRender:function(e,a){return{children:t.$createElement("div",{},[t.$createElement("a-switch",{attrs:{checked:Boolean(a.status),size:"small"},on:{change:function(e){t.onStatusChange(e,a)}}})])}}}],sourceData:[{id:85,addrName:"916料场",materialName:"卡粉-new",materialProducingArea:"京环-new",samplingType:0,status:1,timeNames:["2点半"],usingDeptNames:["BBQ煤炉","总调度室","球团3期","竖炉"]},{id:80,addrName:"一号料场",materialName:"测试物料",materialProducingArea:"测试场地",samplingType:2,status:1,timeNames:["12点"],usingDeptNames:["总调度室","112烧结厂"]},{id:79,addrName:"一号料场",materialName:"喷煤",materialProducingArea:"二期喷煤厂",samplingType:0,status:1,timeNames:["20点","08点"],usingDeptNames:["总调度室","112烧结厂"]}]}},methods:{onStatusChange:function(t,e){console.log(t,e)}}},i=a(10),s=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("t-layout-page",[e("t-layout-page-item",[e("t-ant-layout-table",{attrs:{title:"样品列表444",columns:this.columns,dataSource:this.sourceData}})],1)],1)}),[],!1,null,null,null);e.default=s.exports}}]);