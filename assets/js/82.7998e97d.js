(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1168:function(e,t,a){"use strict";a.r(t);var l={name:"TModuleFormDemo",data:function(){return{formOpts:{goodsInformation:{title:"货品信息",name:"goodsInformation",ref:null,opts:{labelPosition:"top",formData:{id:"".concat(Math.floor(10*Math.random()+1)),account:"",password:"",name:"",sex:"",hobby:[],accountType:"",status:""},fieldList:[{label:"账号",value:"account",type:"input",comp:"el-input",event:"account"},{label:"密码",value:"password",type:"password",comp:"el-input"},{label:"昵称",value:"name",type:"input",comp:"el-input"},{label:"性别",value:"sex",type:"select-arr",comp:"el-select",list:"sexList",bind:{disabled:!1},arrLabel:"key",arrKey:"value"},{label:"平台用户",value:"accountType",type:"select-obj",comp:"el-select",list:"accountTypeList"},{label:"状态",value:"status",type:"select-arr",list:"statusList",comp:"el-select",arrLabel:"key",arrKey:"value"},{label:"爱好",value:"hobby",type:"checkbox",comp:"el-checkbox-group",list:"hobbyList",event:"checkbox",widthSize:1}],rules:{account:[{required:!0,message:"请输入账号",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],name:[{required:!0,message:"请输入昵称",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],status:[{required:!0,message:"请选择状态",trigger:"change"}],accountType:[{required:!0,message:"请选择平台用户",trigger:"change"}],hobby:[{type:"array",required:!0,message:"请至少选择一个爱好",trigger:"change"}]},listTypeInfo:{hobbyList:[{label:"吉他",value:"0"},{label:"看书",value:"1"},{label:"美剧",value:"2"},{label:"旅游",value:"3"},{label:"音乐",value:"4"}],sexList:[{key:"女",value:1},{key:"男",value:0}],accountTypeList:{0:"手机用户",1:"论坛用户",2:"平台用户"},statusList:[{key:"启用",value:1},{key:"停用",value:0}]}}},freight:{title:"运费信息",name:"freight",opts:{formData:{phone:"",createDate:"",valDate:"",wechat:"",qq:"",email:"",desc:"",number:""},fieldList:[{label:"手机号码",value:"phone",type:"input",comp:"el-input",bind:{maxlength:11}},{label:"创建时间",value:"createDate",type:"year",bind:{valueFormat:"yyyy"},comp:"el-date-picker"},{label:"element日期",value:"valDate",type:"daterange",comp:"el-date-picker",bind:{rangeSeparator:"-",startPlaceholder:"开始日期",endPlaceholder:"结束日期",valueFormat:"yyyy-MM-dd"}},{label:"微信",value:"wechat",type:"input",comp:"el-input"},{label:"QQ",value:"qq",type:"input",comp:"el-input"},{label:"邮箱",value:"email",type:"input",comp:"el-input"},{label:"计数器",value:"number",type:"inputNumber",bind:{controls:!1,min:2,max:99},comp:"el-input-number"},{label:"描述",value:"desc",type:"textarea",comp:"el-input",widthSize:1}],rules:{phone:[{required:!0,message:"请输入手机号码",trigger:"blur"}],createDate:[{required:!0,message:"请选择创建时间",trigger:"change"}],valDate:[{required:!0,message:"请选择element日期",trigger:"change"}],wechat:[{required:!0,message:"请输入微信",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"}],qq:[{required:!0,message:"请输入QQ",trigger:"blur"}]}}}}}},methods:{resetForm:function(){console.log("重置表单"),this.$refs.sourceForm.resetFormFields()},clearValidate:function(){console.log("清除校验"),this.$refs.sourceForm.clearValidate()},save:function(){this.$refs.sourceForm.saveHandle()},submit:function(e){console.log("最终提交数据",e)}}},r=a(10),s=Object(r.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("t-layout-page",[a("t-layout-page-item",[a("t-module-form",{ref:"sourceForm",attrs:{title:"表单验证",formOpts:e.formOpts,submit:e.submit},scopedSlots:e._u([{key:"footer",fn:function(){return[a("el-button",{attrs:{type:"primary"},on:{click:e.clearValidate}},[e._v("清除校验")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.resetForm}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:e.save}},[e._v("保存")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);