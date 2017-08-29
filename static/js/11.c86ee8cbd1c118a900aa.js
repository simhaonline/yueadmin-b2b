webpackJsonp([11],{763:function(e,r,t){t(913);var a=t(10)(t(847),t(961),"data-v-29d5e226",null);e.exports=a.exports},847:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t(329),s=function(e){return e&&e.__esModule?e:{default:e}}(a),o=t(70);r.default={data:function(){return{wareId:"",brandList:[],wareForm:{wareName:"",keyWords:"",openDate:"",closeDate:"",srcCityCode:"",dstCityCode:"",wareDesc:"",briefName:"",brandId:"",tripDays:1,sellPreDays:7,nocashReserveMinute:24,suggestedPrice:"",srcCityName:"请选择城市",dstCityName:"请选择城市"},rules:{wareName:[{required:!0,message:"请输入商品名称",trigger:"blur"}],briefName:[{required:!0,message:"请输入商品缩略名",trigger:"blur"}],keyWords:[{required:!0,message:"请输入商品关键字",trigger:"blur"}],openDate:[{type:"date",required:!0,message:"请选择开售日期",trigger:"change"}],closeDate:[{type:"date",required:!0,message:"请选择停售时间",trigger:"change"}],srcCityCode:[{required:!0,message:"请选择出发城市",trigger:"change"}],dstCityCode:[{required:!0,message:"请选择目的城市",trigger:"change"}],brandId:[{type:"number",required:!0,message:"请选择商品品牌",trigger:"change"}],nocashReserveMinute:[{type:"number",required:!0,message:"请输入无订金订单占位时长",trigger:"blur"}],suggestedPrice:[{type:"number",required:!0,message:"请输入建议售价",trigger:"blur"}],tripDays:[{type:"number",required:!0,message:"请选择天数",trigger:"change"}],sellPreDays:[{type:"number",required:!0,message:"请选择天数",trigger:"change"}],wareDesc:[{required:!0,message:"请填写推荐概述",trigger:"blur"}]},pickerOptions:{shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"明天",onClick:function(e){var r=new Date;r.setTime(r.getTime()+864e5),e.$emit("pick",r)}},{text:"一周后",onClick:function(e){var r=new Date;r.setTime(r.getTime()+6048e5),e.$emit("pick",r)}},{text:"一月后",onClick:function(e){var r=new Date;r.setTime(r.getTime()+2592e6),e.$emit("pick",r)}}]}}},methods:{updateData:function(e){this.wareForm.wareDesc=e},getBrandList:function(){var e=this;(0,o.readBrandList)().then(function(r){"0001"===r.data.code?e.brandList=r.data.result.brandInfo:e.$message.error(r.data.message)}).catch(function(r){e.catchError(r.response)})},getWareInfo:function(){var e=this;(0,o.readWareInfo)({wareId:this.wareId}).then(function(r){if("0001"===r.data.code){var t=r.data.result.wareInfo;t.openDate=new Date(t.openDate),t.closeDate=new Date(t.closeDate),t.srcCityCode=t.srcCityCode+"",t.dstCityCode=t.dstCityCode+"",t.nocashReserveMinute=t.nocashReserveMinute/60,e.wareForm=t}else e.$message.error(r.data.message)}).catch(function(r){console.log(r),e.catchError(r.response)})},srcCityChange:function(e){this.wareForm.srcCityCode=e},dstCityChange:function(e){this.wareForm.dstCityCode=e},submitForm:function(){var e=this;this.$refs.wareForm.validate(function(r){if(console.log(e.wareForm.verifyStatus),!r)return e.$message.error("表单输入有误"),!1;var t=(0,s.default)({},e.wareForm);t.openDate=e.$moment(t.openDate).format("YYYY-MM-DD HH:mm:ss"),t.closeDate=e.$moment(t.closeDate).format("YYYY-MM-DD HH:mm:ss"),t.nocashReserveMinute=60*t.nocashReserveMinute,console.log(t),2===e.wareForm.verifyStatus?e.$confirm("编辑商品将会重新提交审核？","提示",{type:"warning"}).then(function(){(0,o.saveWareInfo)(t).then(function(r){if("0001"===r.data.code){r.data.result.wareId;e.$message.success(r.data.message)}else e.$message.error(r.data.message)}).catch(function(r){console.log(r),e.catchError(r.response)})}).catch(function(r){console.log(r),e.$message("已取消操作")}):(0,o.saveWareInfo)(t).then(function(r){if("0001"===r.data.code){r.data.result.wareId;e.$message.success(r.data.message)}else e.$message.error(r.data.message)}).catch(function(r){console.log(r),e.catchError(r.response)})})}},mounted:function(){this.$store.dispatch("setStepActive",0),this.getBrandList(),this.wareId=parseInt(this.$route.query.wareId),this.wareId&&this.getWareInfo()}}},868:function(e,r,t){r=e.exports=t(696)(),r.push([e.i,".el-card[data-v-29d5e226]{margin:15px}.el-card__body[data-v-29d5e226]{padding:30px}.input-width .el-input[data-v-29d5e226]{width:217px}","",{version:3,sources:["D:/B2B-YueProject/yueadmin-b2b/src/pages/provider/ware/wareInput/baseEdit.vue"],names:[],mappings:"AACA,0BACE,WAAa,CACd,AACD,gCACE,YAAc,CACf,AACD,wCACE,WAAa,CACd",file:"baseEdit.vue",sourcesContent:["\n.el-card[data-v-29d5e226] {\n  margin: 15px;\n}\n.el-card__body[data-v-29d5e226] {\n  padding: 30px;\n}\n.input-width .el-input[data-v-29d5e226] {\n  width: 217px;\n}\n"],sourceRoot:""}])},913:function(e,r,t){var a=t(868);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(697)("fb16a586",a,!0)},961:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",[t("el-row",[t("el-col",{attrs:{span:20,offset:2}},[t("el-form",{ref:"wareForm",attrs:{model:e.wareForm,rules:e.rules,"label-width":"150px"}},[t("el-card",{staticClass:"input-width"},[t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{staticStyle:{height:"36px"},attrs:{label:"行程天数",prop:"tripDays"}},[t("el-input-number",{staticStyle:{width:"140px"},attrs:{min:1,max:30},model:{value:e.wareForm.tripDays,callback:function(r){e.wareForm.tripDays=r},expression:"wareForm.tripDays"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{staticStyle:{height:"36px"},attrs:{label:"至少提前多少天购买",prop:"sellPreDays"}},[t("el-input-number",{staticStyle:{width:"140px"},attrs:{min:1,max:45},model:{value:e.wareForm.sellPreDays,callback:function(r){e.wareForm.sellPreDays=r},expression:"wareForm.sellPreDays"}})],1)],1)],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"商品名称",prop:"wareName"}},[t("el-input",{attrs:{placeholder:"商品名称"},model:{value:e.wareForm.wareName,callback:function(r){e.wareForm.wareName=r},expression:"wareForm.wareName"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"商品品牌",prop:"brandId"}},[t("el-select",{model:{value:e.wareForm.brandId,callback:function(r){e.wareForm.brandId=r},expression:"wareForm.brandId"}},e._l(e.brandList,function(e){return t("el-option",{key:e.brandId,attrs:{label:e.brandName,value:e.brandId}})}))],1)],1)],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"商品缩略名",prop:"briefName"}},[t("el-input",{attrs:{placeholder:"商品缩略名"},model:{value:e.wareForm.briefName,callback:function(r){e.wareForm.briefName=r},expression:"wareForm.briefName"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"商品关键字",prop:"keyWords"}},[t("el-input",{attrs:{placeholder:"关键字以英文逗号分隔"},model:{value:e.wareForm.keyWords,callback:function(r){e.wareForm.keyWords=r},expression:"wareForm.keyWords"}})],1)],1)],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"起售时间",prop:"openDate"}},[t("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间",align:"right","picker-options":e.pickerOptions},model:{value:e.wareForm.openDate,callback:function(r){e.wareForm.openDate=r},expression:"wareForm.openDate"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"停售时间",prop:"closeDate"}},[t("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间",align:"right","picker-options":e.pickerOptions},model:{value:e.wareForm.closeDate,callback:function(r){e.wareForm.closeDate=r},expression:"wareForm.closeDate"}})],1)],1)],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"出发城市",prop:"srcCityCode"}},[t("region-picker",{attrs:{cityName:e.wareForm.srcCityName,width:"217"},on:{change:e.srcCityChange},model:{value:e.wareForm.srcCityCode,callback:function(r){e.wareForm.srcCityCode=r},expression:"wareForm.srcCityCode"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"目的城市",prop:"dstCityCode"}},[t("region-picker",{attrs:{cityName:e.wareForm.dstCityName,width:"217"},on:{change:e.dstCityChange},model:{value:e.wareForm.dstCityCode,callback:function(r){e.wareForm.dstCityCode=r},expression:"wareForm.dstCityCode"}})],1)],1)],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"建议售价",prop:"suggestedPrice"}},[t("el-input",{attrs:{placeholder:"建议售价"},model:{value:e.wareForm.suggestedPrice,callback:function(r){e.wareForm.suggestedPrice=e._n(r)},expression:"wareForm.suggestedPrice"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"无订金订单占位时长",prop:"nocashReserveMinute"}},[t("el-input-number",{staticStyle:{width:"140px"},attrs:{min:.5,max:168},model:{value:e.wareForm.nocashReserveMinute,callback:function(r){e.wareForm.nocashReserveMinute=e._n(r)},expression:"wareForm.nocashReserveMinute"}})],1)],1)],1)],1),e._v(" "),t("el-card",[t("p",{staticClass:"m-b"},[t("strong",[e._v("推荐概述")]),t("span",{staticStyle:{"margin-left":"15px","font-size":"14px"}},[e._v("最多输入8000个字符")])]),e._v(" "),t("el-form-item",{attrs:{label:"","label-width":"0",prop:"wareDesc"}},[t("vue-html5-editor",{attrs:{content:e.wareForm.wareDesc,height:400,"z-index":1},on:{change:e.updateData}})],1)],1),e._v(" "),t("el-form-item",{staticClass:"text-center"},[t("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("保存")]),e._v(" "),t("back-button")],1)],1)],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=11.c86ee8cbd1c118a900aa.js.map