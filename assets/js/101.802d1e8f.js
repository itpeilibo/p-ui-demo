(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1189:function(e,a,l){"use strict";l.r(a);var t=[{label:"前纺一车间",key:"W1"},{label:"前纺二车间",key:"W2"},{label:"前纺三车间",key:"W3"}],o={data:function(){return{table:{data:[{id:1,code:1,name:"物料名称1",spec:"物料规格1",unitName:"吨"},{id:2,code:2,name:"物料名称2",spec:"物料规格2",unitName:"吨"},{id:3,code:3,name:"物料名称3",spec:"物料规格3",unitName:"吨"},{id:4,code:4,name:"物料名称4",spec:"物料规格4",unitName:"吨"},{id:5,code:5,name:"物料名称5",spec:"物料规格5",unitName:"吨"},{id:6,code:6,name:"物料名称6",spec:"物料规格6",unitName:"吨"},{id:7,code:7,name:"物料名称7",spec:"物料规格7",unitName:"吨"},{id:8,code:8,name:"物料名称8",spec:"物料规格8",unitName:"吨"},{id:9,code:9,name:"物料名称9",spec:"物料规格9",unitName:"吨"},{id:10,code:10,name:"物料名称10",spec:"物料规格10",unitName:"吨"},{id:11,code:11,name:"物料名称11",spec:"物料规格11",unitName:"吨"},{id:12,code:12,name:"物料名称12",spec:"物料规格12",unitName:"吨"},{id:13,code:13,name:"物料名称13",spec:"物料规格13",unitName:"吨"}],columns:[{label:"物料编号",width:"100px",prop:"code"},{label:"物料名称",width:"149px",prop:"name"},{label:"规格",width:"149px",prop:"spec"},{label:"单位",width:"110px",prop:"unitName"},{label:"物料编号1",width:"149px",prop:"code"},{label:"物料名称1",width:"149px",prop:"name"},{label:"规格1",width:"149px",prop:"spec"},{label:"单位1",width:"110px",prop:"unitName"},{label:"物料编号11",width:"149px",prop:"code"},{label:"物料名称11",width:"149px",prop:"name"},{label:"规格11",width:"149px",prop:"spec"},{label:"单位11",width:"110px",prop:"unitName"},{label:"物料编号111",width:"149px",prop:"code"},{label:"物料名称111",width:"149px",prop:"name"},{label:"规格111",width:"149px",prop:"spec"},{label:"单位111",width:"110px",prop:"unitName"}]},queryData:{likeCargoNo:null,likeBookNo:null,likeTransportNo:null,likeCargoName:null}}},computed:{opts:function(){var e=this.$createElement;return{likeCargoNo:{label:"货源编号",comp:"t-select",bind:{optionSource:t},span:2},likeBookNo:{labelRender:function(){return e("el-tooltip",{attrs:{content:"自定义label",placement:"top"}},[e("div",["订单编号"])])},placeholder:"自定义label",comp:"el-input",span:2},likeTransportNo:{label:"运单编号",comp:"el-input",span:2},likeCargoName:{label:"货品名称",comp:"el-input",span:2}}}},methods:{radioChange:function(e){console.log("传给后台的值",e)},conditionEnter:function(e){console.log("点击搜索查询",e)}}},n=l(10),p=Object(n.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("t-select-table",{attrs:{table:this.table,columns:this.table.columns,"max-height":400,keywords:{label:"name",value:"id"},tableWidth:1e3,isShowQuery:"",opts:this.opts},on:{radioChange:this.radioChange,submit:this.conditionEnter}})}),[],!1,null,null,null);a.default=p.exports}}]);