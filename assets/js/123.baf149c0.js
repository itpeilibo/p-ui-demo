(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{1214:function(t,e,a){"use strict";a.r(e);var i={data:function(){var t=this,e=this.$createElement;return{table:{data:[{id:"1",date:"2019-09-25",name:"张三",status:"2",address:"广东省广州市天河区"},{id:"2",date:"2019-09-26",name:"张三1",status:"1",address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"},{id:"3",date:"2019-09-27",name:"张三2",status:"3",address:"广东省广州市天河区3"}],operator:[{text:"新增",type:"primary",fun:this.add,icon:"el-icon-delete",noshow:[{key:"status",val:["1"]}]},{text:"编辑",type:"danger",show:{key:"status",val:["2"]},fun:this.edit},{text:"删除",render:function(a,i){return e("el-popconfirm",{attrs:{title:"你确定要删除吗？"},on:{confirm:function(){return t.del(i)}}},[e("div",{slot:"reference",attrs:{type:"link"}},["删除"])])}}],operatorConfig:{fixed:"right",width:280,label:"操作"},columns:[{prop:"name",label:"姓名",minWidth:"100"},{prop:"date",label:"日期",minWidth:"180"},{prop:"address",label:"地址",minWidth:"220"},{prop:"date",label:"日期",minWidth:"180"},{prop:"address",label:"地址",minWidth:"220"}]}}}},s=a(10),n=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"t-table",staticStyle:{width:"100%"}},[e("t-table",{attrs:{isCopy:"",title:"指定姓名是'张三2'的行不需要排序",table:this.table,columns:this.table.columns,sortable:"custom",isSortable:"",notSortJudge:"item.name == '张三2'",isShowPagination:!1}})],1)}),[],!1,null,null,null);e.default=n.exports}}]);