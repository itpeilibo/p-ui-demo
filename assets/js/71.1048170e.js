(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1157:function(e,a,l){"use strict";l.r(a);l(61);var t={name:"TModuleDetailDemo",data:function(){var e=this.$createElement;return{descData:{goods:{name:"goods",title:"禁止收缩",disabled:!0,data:[{label:"货品名称",fieldName:"cargoName",value:""},{label:"货品类别",fieldName:"cargoType",value:""},{label:"货品价值",fieldName:"cargoMoneyCentPerTon",value:""},{label:"总重量",fieldName:"cargoWeightKg",value:""},{label:"总体积",fieldName:"cargoVolumeDm3",value:""},{label:"总件数",fieldName:"cargoQty",value:""},{label:"易碎品",fieldName:"isBreakable",value:"3333",span:2},{label:"备注",fieldName:"cargoRemark",value:"占位一整行",span:4}]},freight:{name:"freight",title:"运费信息",data:[{label:"计费模式",fieldName:"calFeeType",value:""},{label:"运费单价",value:""},{label:"路损类型",fieldName:"roadLossType",value:"定率",tooltip:"测试字符串提示"},{label:"路耗定额",fieldName:"roadLossKg",value:""},{label:"整车承载",fieldName:"loadKgPerCar",slotName:"loadKgPerCar",value:""},{label:"保险购买",fieldName:"buyInsurance",value:"是",tooltip:function(){return e("div",[e("div",["测试函数方式提示"])])}}]},line:{name:"line",title:"线路信息",disabled:!0,slotName:"line",btn:"material"}}}},mounted:function(){var e={cargoName:"汽车总动员",cargoType:"玩具",cargoMoneyCentPerTon:"500",cargoWeightKg:"500",cargoVolumeDm3:"30",cargoQty:"40",isBreakable:"否",cargoRemark:"汽车总动员备注"};this.descData.goods.data.map((function(a){a.value=e[a.fieldName]}))}},r=l(10),o=Object(r.a)(t,(function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("t-layout-page",[l("t-layout-page-item",[l("t-module-form",{ref:"sourceDetail",attrs:{title:"模块详情组件运用",subTitle:"模块禁止收缩",handleType:"desc",descData:e.descData},scopedSlots:e._u([{key:"extra",fn:function(){return[l("el-button",{attrs:{type:"primary"}},[e._v("主要按钮")]),e._v(" "),l("el-button",{attrs:{type:"success"}},[e._v("成功按钮")]),e._v(" "),l("el-button",{attrs:{type:"danger"}},[e._v("信息按钮")])]},proxy:!0},{key:"line",fn:function(){return[l("el-button",{attrs:{type:"danger"}},[e._v("自定义模块detail插槽")])]},proxy:!0},{key:"material",fn:function(){return[l("el-button",{attrs:{size:"small",type:"primary"}},[e._v("批量通过")]),e._v(" "),l("el-button",{attrs:{size:"small",type:"danger"}},[e._v("批量驳回")]),e._v(" "),l("el-button",{attrs:{size:"small"}},[e._v("导出")])]},proxy:!0},{key:"loadKgPerCar",fn:function(){return[l("div",{staticClass:"text-danger"},[e._v("value自定义插槽")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);a.default=o.exports}}]);