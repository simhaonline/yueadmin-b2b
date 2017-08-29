webpackJsonp([21],{750:function(e,t,i){i(921);var a=i(10)(i(834),i(975),"data-v-4f951064",null);e.exports=a.exports},834:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(329),r=function(e){return e&&e.__esModule?e:{default:e}}(a),s=i(70),l=["每周日","每周一","每周二","每周三","每周四","每周五","每周六"];t.default={data:function(){return{wareId:"",skuList:[{start:"2017-08-08",skuDate:"2017-08-08",adultPrice:999,childPrice:999,singlePrice:999,storageNum:999}],batchSkuVisible:!1,singleSkuVisible:!1,batchType:1,singleType:1,batchSkuForm:{storageNum:"",adultPrice:"",childPrice:"",singlePrice:"",skuDateRange:[]},singleSkuForm:{skuId:"",skuDate:"",storageNum:"",adultPrice:"",childPrice:"",singlePrice:""},rules:{storageNum:[{type:"number",required:!0,message:"请输入有效库存",trigger:"blur"}],adultPrice:[{type:"number",required:!0,message:"请输入有效成人价",trigger:"blur"}],childPrice:[{type:"number",required:!0,message:"请输入有效儿童价",trigger:"blur"}],singlePrice:[{type:"number",required:!0,message:"请输入有效单人补差价",trigger:"blur"}],skuDateRange:[{type:"array",required:!0,message:"请选择起止日期",trigger:"change"}],checkedWeeks:[{type:"array",required:!0,message:"至少勾选一项",trigger:"change"}]},pickerOptions:{shortcuts:[{text:"未来一周",onClick:function(e){var t=new Date,i=new Date;t.setTime(i.getTime()+6048e5),e.$emit("pick",[i,t])}},{text:"未来一个月",onClick:function(e){var t=new Date,i=new Date;t.setTime(i.getTime()+2592e6),e.$emit("pick",[i,t])}},{text:"未来三个月",onClick:function(e){var t=new Date,i=new Date;t.setTime(i.getTime()+7776e6),e.$emit("pick",[i,t])}}]},weeks:l}},methods:{getSkuList:function(){var e=this;(0,s.readSkuInfoList)({wareId:this.wareId}).then(function(t){console.log(t),"0001"===t.data.code?(e.skuList=t.data.result.skuList||[],e.skuList.forEach(function(e){e.start=e.skuDate})):e.$message.error(t.data.message)}).catch(function(t){console.log(t),e.catchError(t.response)})},dateChange:function(e){this.batchSkuForm.skuDateRange=e?e.split(" - "):[]},handleCheckedChange:function(e){var t=[0,0,0,0,0,0,0];e.forEach(function(e,i){t[e]=1});var i=t.join("");i="0000000"===i?"1111111":i,console.log(i)},changeMonth:function(e,t,i){},handleBatchAdd:function(){this.batchType=1,this.batchSkuForm.storageNum="",this.batchSkuVisible=!0},handleBatchEdit:function(){this.batchType=2,this.batchSkuForm.storageNum=0,this.batchSkuVisible=!0},batchSubmit:function(){var e=this;this.$refs.batchSkuForm.validate(function(t){if(t){var i={wareId:e.wareId,startDate:e.batchSkuForm.skuDateRange[0],endDate:e.batchSkuForm.skuDateRange[1],storageNum:e.batchSkuForm.storageNum,adultPrice:e.batchSkuForm.adultPrice,childPrice:e.batchSkuForm.childPrice,singlePrice:e.batchSkuForm.singlePrice,wareType:2};if(!i.startDate)return void e.$notify({type:"warning",title:"提示",message:"请选择起止日期"});if(1===e.batchType)(0,s.createSkuInfoBatch)(i).then(function(t){console.log(t),"0001"===t.data.code?(e.$message.success(t.data.message),e.getSkuList()):e.$message.error(t.data.message)}).catch(function(e){console.log(e)});else{if(2!==e.batchType)return void console.log("error");(0,s.updateSkuInfoBatch)(i).then(function(t){console.log(t),"0001"===t.data.code?(e.$message.success(t.data.message),e.getSkuList()):e.$message.error(t.data.message)}).catch(function(e){console.log(e)})}e.batchSkuVisible=!1,e.$refs.batchSkuForm.resetFields()}else console.log("err submit")})},dayClick:function(e,t){e=this.$moment(e).format("YYYY-MM-DD"),t?(this.singleType=2,this.singleSkuForm=(0,r.default)(this.singleSkuForm,t)):(this.singleType=1,this.singleSkuForm={},this.singleSkuForm.skuDate=e),this.singleSkuVisible=!0},singleSubmit:function(){var e=this;this.$refs.singleSkuForm.validate(function(t){if(t){var i={wareId:e.wareId,skuId:e.singleSkuForm.skuId,skuDate:e.singleSkuForm.skuDate,adultPrice:e.singleSkuForm.adultPrice,childPrice:e.singleSkuForm.childPrice,singlePrice:e.singleSkuForm.singlePrice,storageNum:e.singleSkuForm.storageNum,wareType:2};(0,s.saveSkuInfo)(i).then(function(t){"0001"===t.data.code?(e.$message.success(t.data.message),e.getSkuList()):e.$message.error(t.data.message),e.singleSkuVisible=!1}).catch(function(t){console.log(t),e.singleSkuVisible=!1})}else console.log("err submit")})}},mounted:function(){this.wareId=parseInt(this.$route.query.wareId),this.wareId&&this.getSkuList()}}},876:function(e,t,i){t=e.exports=i(696)(),t.push([e.i,".input-width-control .el-input[data-v-4f951064]{width:220px}","",{version:3,sources:["D:/B2B-YueProject/yueadmin-b2b/src/pages/provider/ware/activitySkuSet.vue"],names:[],mappings:"AACA,gDACE,WAAa,CACd",file:"activitySkuSet.vue",sourcesContent:["\n.input-width-control .el-input[data-v-4f951064] {\n  width: 220px;\n}\n"],sourceRoot:""}])},921:function(e,t,i){var a=i(876);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(697)("1c6567a7",a,!0)},975:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("el-row",{staticClass:"toolbar"},[i("el-button",{attrs:{type:"primary"},on:{click:e.handleBatchAdd}},[e._v("批量新增")]),e._v(" "),e.skuList.length>0?i("el-button",{attrs:{type:"primary"},on:{click:e.handleBatchEdit}},[e._v("批量编辑")]):e._e(),e._v(" "),i("back-button")],1),e._v(" "),i("full-calendar",{attrs:{events:e.skuList,"first-day":"0"},on:{changeMonth:e.changeMonth,dayClick:e.dayClick,eventClick:e.dayClick}}),e._v(" "),i("el-dialog",{attrs:{title:"库存价格设置（价格单位：元）"},model:{value:e.batchSkuVisible,callback:function(t){e.batchSkuVisible=t},expression:"batchSkuVisible"}},[i("el-form",{ref:"batchSkuForm",staticClass:"input-width-control",attrs:{model:e.batchSkuForm,rules:e.rules,"label-width":"180px"}},[i("el-form-item",{attrs:{label:"起止日期：",prop:"skuDateRange"}},[i("el-date-picker",{attrs:{type:"daterange",placeholder:"选择起止日期",clearable:!1,"picker-options":e.pickerOptions},on:{change:e.dateChange},model:{value:e.batchSkuForm.skuDateRange,callback:function(t){e.batchSkuForm.skuDateRange=t},expression:"batchSkuForm.skuDateRange"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"成人价：",prop:"adultPrice"}},[i("el-input",{attrs:{placeholder:"输入成人价"},model:{value:e.batchSkuForm.adultPrice,callback:function(t){e.batchSkuForm.adultPrice=e._n(t)},expression:"batchSkuForm.adultPrice"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"儿童价：",prop:"childPrice"}},[i("el-input",{attrs:{placeholder:"输入儿童价"},model:{value:e.batchSkuForm.childPrice,callback:function(t){e.batchSkuForm.childPrice=e._n(t)},expression:"batchSkuForm.childPrice"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"单人差：",prop:"singlePrice"}},[i("el-input",{attrs:{placeholder:"输入单人差"},model:{value:e.batchSkuForm.singlePrice,callback:function(t){e.batchSkuForm.singlePrice=e._n(t)},expression:"batchSkuForm.singlePrice"}})],1),e._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:1===e.batchType,expression:"batchType === 1"}],attrs:{label:"库存：",prop:"storageNum"}},[i("el-input",{attrs:{placeholder:"输入库存数量"},model:{value:e.batchSkuForm.storageNum,callback:function(t){e.batchSkuForm.storageNum=e._n(t)},expression:"batchSkuForm.storageNum"}})],1)],1),e._v(" "),i("div",{slot:"footer"},[i("el-button",{on:{click:function(t){e.batchSkuVisible=!1}}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.batchSubmit}},[e._v("提交")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:"库存价格设置（价格单位：元）",visible:e.singleSkuVisible},on:{"update:visible":function(t){e.singleSkuVisible=t}}},[i("el-form",{ref:"singleSkuForm",staticClass:"input-width-control",attrs:{model:e.singleSkuForm,rules:e.rules,"label-width":"180px"}},[i("el-form-item",{attrs:{label:"日期："}},[i("span",{staticStyle:{"font-size":"18px"},domProps:{textContent:e._s(e.singleSkuForm.skuDate)}})]),e._v(" "),i("el-form-item",{attrs:{label:"成人价：",prop:"adultPrice"}},[i("el-input",{attrs:{placeholder:"输入成人价"},model:{value:e.singleSkuForm.adultPrice,callback:function(t){e.singleSkuForm.adultPrice=e._n(t)},expression:"singleSkuForm.adultPrice"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"儿童价：",prop:"childPrice"}},[i("el-input",{attrs:{placeholder:"输入儿童价"},model:{value:e.singleSkuForm.childPrice,callback:function(t){e.singleSkuForm.childPrice=e._n(t)},expression:"singleSkuForm.childPrice"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"单人差：",prop:"singlePrice"}},[i("el-input",{attrs:{placeholder:"输入单人差"},model:{value:e.singleSkuForm.singlePrice,callback:function(t){e.singleSkuForm.singlePrice=e._n(t)},expression:"singleSkuForm.singlePrice"}})],1),e._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:1===e.singleType,expression:"singleType === 1"}],attrs:{label:"库存：",prop:"storageNum"}},[i("el-input",{attrs:{placeholder:"输入库存数量"},model:{value:e.singleSkuForm.storageNum,callback:function(t){e.singleSkuForm.storageNum=e._n(t)},expression:"singleSkuForm.storageNum"}})],1)],1),e._v(" "),i("div",{slot:"footer"},[i("el-button",{on:{click:function(t){e.singleSkuVisible=!1}}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.singleSubmit}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=21.2a6865238b221db447d2.js.map