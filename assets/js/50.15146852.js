(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1132:function(e,t,n){"use strict";n.r(t);var i={name:"dh-modal-demo",data:function(){return{visible:!1,width:"40%",title:"请选择企业",entSelectType:"",entList:[{id:107,entName:"上海某某电子商务有限公司",entCode:"60003627",entType:null,entIdPcloud:"717380413542105088"},{id:108,entName:"上海某某电子商务22",entCode:"60003627",entType:null,entIdPcloud:"717380413542105088"}]}},mounted:function(){this.entSelectType=this.entList[0].id},methods:{openDialog:function(){this.visible=!0},selectType:function(e){this.entSelectType=e.id,this.visible=!1},cancel:function(){this.visible=!1},ok:function(){this.visible=!1}}},l=n(10),c=Object(l.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dh-modal-demo",staticStyle:{"min-height":"100px",width:"100%",padding:"10px"}},[n("a-button",{attrs:{type:"danger"},on:{click:e.openDialog}},[e._v("常规弹窗")]),e._v(" "),n("t-ant-modal",{staticClass:"ent-choose",attrs:{title:"请选择企业"},on:{cancel:e.cancel,ok:e.ok},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("div",{staticClass:"select-ent-box flex-box flex-col"},e._l(e.entList,(function(t){return n("div",{key:t.id,staticClass:"radio-line-item t-overflow-hidden",class:e.entSelectType===t.id?"radioSelected":"",on:{click:function(n){return e.selectType(t)}}},[e.entSelectType===t.id?n("i",{staticClass:"el-icon-check icon-check"}):e._e(),e._v("\n        "+e._s(t.entName)+"\n        "),n("span",{staticStyle:{color:"#999"}},[e._v("(企业编码:"+e._s(t.entCode)+")")])])})),0)])],1)}),[],!1,null,null,null);t.default=c.exports}}]);