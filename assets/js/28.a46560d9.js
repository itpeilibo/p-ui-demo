(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1073:function(t,e,a){},1097:function(t,e,a){"use strict";a(1073)},1131:function(t,e,a){"use strict";a.r(e);var n={name:"tableSlot",data:function(){return{table:{firstColumn:{type:"selection"},data:[{id:"1",date:"2019-09-25",name:"张三",status:"2",amount:3e3,address:"广东省广州市天河区"},{id:"2",date:"2019-09-26",name:"张三1",status:"2",amount:2e3,address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"},{id:"3",date:"2019-09-27",name:"张三2",status:"3",amount:4e3,address:"广东省广州市天河区3"}]},TtableColumns:[{prop:"name",label:"姓名",minWidth:"100"},{prop:"date",label:"日期",minWidth:"160"},{prop:"address",label:"地址",minWidth:"220"},{prop:"status",label:"状态",minWidth:"100"},{prop:"amount",label:"金额",minWidth:"160",slotName:"amount"},{prop:"address77",label:"地址77",minWidth:"220"},{prop:"name1",label:"姓名1",minWidth:"100"},{prop:"date22",label:"日期22",minWidth:"180"},{prop:"address33",label:"地址33",minWidth:"220"},{prop:"name44",label:"姓名44",minWidth:"100"},{prop:"date55",label:"日期55",minWidth:"180"},{prop:"address66",label:"地址66",minWidth:"220"}],selectedRowKeys:[],pageOpt:{current:1,pageSize:10,total:0}}},methods:{handleTableChange:function(t){console.log(1212,t)},selectionChange:function(t){console.log("复选框选中值",t),this.selectedRowKeys=t}}},l=(a(1097),a(10)),o=Object(l.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("t-layout-page",[a("t-layout-page-item",[a("t-ant-layout-table",{attrs:{title:"table插槽，默认table将不渲染",pagination:t.pageOpt},on:{paginationChange:t.handleTableChange},scopedSlots:t._u([{key:"btn",fn:function(){return[a("a-button",{attrs:{type:"primary",icon:"plus"}},[t._v("新增")]),t._v(" "),a("a-button",{attrs:{type:"primary",disabled:0===t.selectedRowKeys.length}},[t._v("重新处理")]),t._v(" "),a("a-button",{attrs:{type:"primary",disabled:0===t.selectedRowKeys.length}},[t._v("作废")])]},proxy:!0},{key:"table",fn:function(){return[a("t-table",{attrs:{columnSetting:"",name:"AntTableSlot",table:t.table,columns:t.TtableColumns},on:{"selection-change":t.selectionChange},scopedSlots:t._u([{key:"amount",fn:function(e){var a=e.param;return[t._v(t._s(a.row.amount))]}}])})]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=o.exports}}]);