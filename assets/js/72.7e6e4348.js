(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1159:function(e,a,l){"use strict";l.r(a);l(61);var t={name:"TModuleDetailDemo",data:function(){var e=this.$createElement;return{baseData:{table:{border:!0,data:[{id:"1",date:"2019-09-25",name:"张三",status:"2",address:"广东省广州市天河区"},{id:"2",date:"2019-09-26",name:"张三1",status:"1",address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"},{id:"3",date:"2019-09-27",name:"张三2",status:"3",address:"广东省广州市天河区3"}]},columns:[{prop:"name",label:"姓名",minWidth:"100",sort:!0},{prop:"date",label:"日期",minWidth:"180",sort:!0},{prop:"date",label:"日期",minWidth:"180",sort:!0},{prop:"date",label:"日期",minWidth:"180",sort:!0},{prop:"address",label:"地址",minWidth:"220",sort:!0}]},descData:{line:{name:"line",title:"模块插槽使用",slotName:"line"},goods:{name:"goods",title:"货品信息",data:[{label:"货品名称",fieldName:"cargoName",value:""},{label:"货品类别",fieldName:"cargoType",value:""},{label:"货品价值",fieldName:"cargoMoneyCentPerTon",value:""},{label:"总重量",fieldName:"cargoWeightKg",value:""},{label:"总体积",fieldName:"cargoVolumeDm3",value:""},{label:"总件数",fieldName:"cargoQty",value:""},{label:"易碎品",fieldName:"isBreakable",value:"3333",span:2},{label:"备注",fieldName:"cargoRemark",value:"占位一整行",span:4}]},freight:{name:"freight",title:"运费信息",data:[{label:"计费模式",fieldName:"calFeeType",value:""},{label:"运费单价",value:""},{label:"路损类型",fieldName:"roadLossType",value:"定率",tooltip:"测试字符串提示"},{label:"路耗定额",fieldName:"roadLossKg",value:""},{label:"整车承载",fieldName:"loadKgPerCar",value:""},{label:"保险购买",fieldName:"buyInsurance",value:"是",tooltip:function(){return e("div",[e("div",["测试函数方式提示"])])}}]}}}},mounted:function(){var e={cargoName:"汽车总动员",cargoType:"玩具",cargoMoneyCentPerTon:"500",cargoWeightKg:"500",cargoVolumeDm3:"30",cargoQty:"40",isBreakable:"否",cargoRemark:"汽车总动员备注"};this.descData.goods.data.map((function(a){a.value=e[a.fieldName]}))}},o=l(10),r=Object(o.a)(t,(function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("t-layout-page",[l("t-layout-page-item",[l("t-module-form",{ref:"sourceDetail",attrs:{title:"模块详情组件",subTitle:"模块插槽使用",handleType:"desc",descData:e.descData},scopedSlots:e._u([{key:"line",fn:function(){return[l("t-table",{attrs:{title:"模块插槽使用",table:e.baseData.table,columns:e.baseData.columns}})]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);a.default=r.exports}}]);