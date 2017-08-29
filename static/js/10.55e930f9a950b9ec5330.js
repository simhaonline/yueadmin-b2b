webpackJsonp([10],{1021:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("table",{staticClass:"table table-bordered bg-white"},[a("thead",[a("tr",[a("th",{staticClass:"text-left",attrs:{colspan:"2"}},[t._v("费用及预订限制")]),t._v(" "),a("th",{staticClass:"text-right"},[a("el-button",{on:{click:function(e){t.editorVisible=!0}}},[t._v("预览")])],1)])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("el-checkbox",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1),t._v(" "),a("td",[t._v("商品介绍：")]),t._v(" "),a("td",[a("vue-html5-editor",{attrs:{content:t.attributeForm.introduce,height:200,"z-index":1},on:{change:t.updateIntroduce}})],1)]),t._v(" "),a("tr",[a("td",[a("el-checkbox",{attrs:{checked:""}})],1),t._v(" "),a("td",[t._v("费用说明：")]),t._v(" "),a("td",[a("vue-html5-editor",{attrs:{content:t.attributeForm.charge,height:200,"z-index":1},on:{change:t.updateCharge}})],1)]),t._v(" "),a("tr",[a("td",[a("el-checkbox",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1),t._v(" "),a("td",[t._v("使用说明：")]),t._v(" "),a("td",[a("vue-html5-editor",{attrs:{content:t.attributeForm.explains,height:200,"z-index":1},on:{change:t.updateExplains}})],1)]),t._v(" "),a("tr",[a("td",[a("el-checkbox",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1),t._v(" "),a("td",[t._v("购买须知：")]),t._v(" "),a("td",[a("vue-html5-editor",{attrs:{content:t.attributeForm.notice,height:200,"z-index":1},on:{change:t.updateNotice}})],1)]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"3"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.saveChargeInfo}},[t._v("保存")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.handleNext}},[t._v("下一步")])],1)])])]),t._v(" "),a("el-dialog",{attrs:{title:"费用及预订限制预览",size:"large"},model:{value:t.editorVisible,callback:function(e){t.editorVisible=e},expression:"editorVisible"}},[a("el-card",[a("div",{staticClass:"clearfix",slot:"header"},[a("span",{staticClass:"title"},[t._v("商品介绍")])]),t._v(" "),a("div",{domProps:{innerHTML:t._s(t.attributeForm.introduce)}})]),t._v(" "),a("el-card",[a("div",{staticClass:"clearfix",slot:"header"},[a("span",{staticClass:"title"},[t._v("费用说明")])]),t._v(" "),a("div",{domProps:{innerHTML:t._s(t.attributeForm.charge)}})]),t._v(" "),a("el-card",[a("div",{staticClass:"clearfix",slot:"header"},[a("span",{staticClass:"title"},[t._v("使用说明")])]),t._v(" "),a("div",{domProps:{innerHTML:t._s(t.attributeForm.explains)}})]),t._v(" "),a("el-card",[a("div",{staticClass:"clearfix",slot:"header"},[a("span",{staticClass:"title"},[t._v("购买须知")])]),t._v(" "),a("div",{domProps:{innerHTML:t._s(t.attributeForm.notice)}})])],1)],1)},staticRenderFns:[]}},764:function(t,e,a){a(946);var i=a(10)(a(848),a(1021),"data-v-f7c039b4",null);t.exports=i.exports},848:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(329),n=function(t){return t&&t.__esModule?t:{default:t}}(i),r=a(70);e.default={data:function(){return{wareId:"",checked:!0,editorVisible:!1,attributeForm:{id:"",introduce:"输入商品介绍",charge:"输入费用说明",explains:"输入使用说明",notice:"输入购买须知"}}},methods:{updateIntroduce:function(t){this.attributeForm.introduce=t},updateCharge:function(t){this.attributeForm.charge=t},updateExplains:function(t){this.attributeForm.explains=t},updateNotice:function(t){this.attributeForm.notice=t},getChargeInfo:function(){var t=this;(0,r.readAttribute)({wareId:this.wareId}).then(function(e){console.log(e),"0001"===e.data.code?t.attributeForm=e.data.result.AttributeInfo:t.$message.error(e.data.message)}).catch(function(t){console.log(t)})},saveChargeInfo:function(){var t=this,e=(0,n.default)({},this.attributeForm);e.wareId=this.wareId,console.log(e),(0,r.saveAttribute)(e).then(function(e){"0001"===e.data.code?(t.$message.success("保存成功"),t.getChargeInfo()):t.$message.error(e.data.message)}).catch(function(e){console.log(e),t.catchError(e.response)})},handleNext:function(){var t=this;this.$confirm("确定已保存录入信息？","提示",{type:"warning"}).then(function(){t.$router.push("storage?wareId="+t.wareId)}).catch(function(t){console.log(t)})}},mounted:function(){this.$store.dispatch("setStepActive",3),this.wareId=parseInt(this.$route.query.wareId),this.wareId&&this.getChargeInfo()}}},901:function(t,e,a){e=t.exports=a(696)(),e.push([t.i,".el-card[data-v-f7c039b4]{margin-bottom:15px;padding:0}.el-card .title[data-v-f7c039b4]{font-weight:700}.table th[data-v-f7c039b4]{padding:15px;background:#fff;border-right:0;border-bottom:1px solid #dfe6ec}.table>tbody td[data-v-f7c039b4]{text-align:center}.table>tbody td[data-v-f7c039b4]:first-child{width:60px}.table>tbody td[data-v-f7c039b4]:nth-child(2){width:120px}.table>tbody td[data-v-f7c039b4]:last-child{padding:20px}.table .text-right[data-v-f7c039b4]{text-align:right}","",{version:3,sources:["D:/B2B-YueProject/yueadmin-b2b/src/pages/provider/ware/wareInput/charge.vue"],names:[],mappings:"AACA,0BACC,mBAAoB,AACpB,SAAW,CACX,AACD,iCACC,eAAiB,CACjB,AACD,2BACC,aAAc,AACd,gBAAiB,AACjB,eAAgB,AAChB,+BAAiC,CACjC,AACD,iCACC,iBAAkB,CAClB,AAID,6CACC,UAAY,CACZ,AACD,8CACC,WAAa,CACb,AACD,4CACC,YAAc,CACd,AACD,oCACC,gBAAiB,CACjB",file:"charge.vue",sourcesContent:["\n.el-card[data-v-f7c039b4] {\n\tmargin-bottom: 15px;\n\tpadding: 0;\n}\n.el-card .title[data-v-f7c039b4] {\n\tfont-weight: bold\n}\n.table th[data-v-f7c039b4] {\n\tpadding: 15px;\n\tbackground: #fff;\n\tborder-right: 0;\n\tborder-bottom: 1px solid #dfe6ec;\n}\n.table > tbody td[data-v-f7c039b4] {\n\ttext-align: center\n}\n.table > tbody td[data-v-f7c039b4]:first-child {\n\twidth: 60px;\n}\n.table > tbody td[data-v-f7c039b4]:first-child {\n\twidth: 60px;\n}\n.table > tbody td[data-v-f7c039b4]:nth-child(2) {\n\twidth: 120px;\n}\n.table > tbody td[data-v-f7c039b4]:last-child {\n\tpadding: 20px;\n}\n.table .text-right[data-v-f7c039b4] {\n\ttext-align: right\n}\n"],sourceRoot:""}])},946:function(t,e,a){var i=a(901);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(697)("fbd49ade",i,!0)}});
//# sourceMappingURL=10.55e930f9a950b9ec5330.js.map