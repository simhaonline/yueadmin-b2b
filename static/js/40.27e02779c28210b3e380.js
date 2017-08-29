webpackJsonp([40],{1014:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("h4",[e._v("订单明细")]),e._v(" "),r("el-card",[r("p",[e._v("悦视觉产品名称："),r("span",{staticStyle:{color:"#009dda"},domProps:{textContent:e._s(e.orderInfo.wareName)}})]),e._v(" "),r("p",[e._v("订单号："),r("span",{domProps:{textContent:e._s(e.orderInfo.orderCode)}}),r("span",{staticStyle:{color:"red"},domProps:{textContent:e._s(e.state)}})]),e._v(" "),r("el-button",{attrs:{type:"primary"}},[e._v("打印订单")])],1),e._v(" "),r("h4",[e._v("备注")]),e._v(" "),r("el-card",[r("p",[e._v("预定备注:"),r("span",{domProps:{textContent:e._s(e.orderInfo.remarks)}})]),e._v(" "),r("p",[e._v("商家备注:"),r("span",{domProps:{textContent:e._s(e.orderInfo.premarks)}})]),e._v(" "),r("el-dialog",{attrs:{title:"商家备注",visible:e.dialogVisible,size:"tiny"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入备注内容",rows:5},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}}),e._v(" "),r("div",{staticClass:"dialog-footer",slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.remarkConfirm}},[e._v("确定")]),e._v(" "),r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")])],1)],1)],1),e._v(" "),r("h4",[e._v("预定项目")]),e._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.orderInfo.reserveWare,border:""}},[r("el-table-column",{attrs:{prop:"wareName",align:"center",label:"商品名称"}}),e._v(" "),r("el-table-column",{attrs:{prop:"statusFreeze",align:"center",label:"订单状态",formatter:e.format}}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"份数/人数"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[e._v(e._s(parseInt(t.row.adultCount?t.row.adultCount:0)+parseInt(t.row.childCount?t.row.childCount:0))+"("+e._s(t.row.adultCount)+"大/"+e._s(t.row.childCount)+"小)")])]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"dateDepart",align:"center",label:"出发日期"}}),e._v(" "),r("el-table-column",{attrs:{prop:"dateReturn",align:"center",label:"返回日期"}}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"卖价"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[e._v("成人:"+e._s(parseInt(t.row.adultPrice?t.row.adultPrice:0).toFixed(2)))]),e._v(" "),r("p",[e._v("儿童:"+e._s(parseInt(t.row.childPrice?t.row.childPrice:0).toFixed(2)))])]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"amountAll",align:"center",label:"卖价总价"}})],1),e._v(" "),r("h4",[e._v("金额汇总")]),e._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.orderInfo.amountSummary,border:"","show-summary":""}},[r("el-table-column",{attrs:{prop:"wareName",align:"center",label:"商品名称",width:"500"}}),e._v(" "),r("el-table-column",{attrs:{prop:"createTime",align:"center",label:"操作日期"}}),e._v(" "),r("el-table-column",{attrs:{prop:"amountAll",align:"center",label:"金额"}})],1),e._v(" "),r("h4",[e._v("出行人")]),e._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.orderInfo.traveler,border:""}},[r("el-table-column",{attrs:{prop:"name",align:"center",label:"姓名"}}),e._v(" "),r("el-table-column",{attrs:{prop:"sex",align:"center",label:"性别",formatter:e.formatSex}}),e._v(" "),r("el-table-column",{attrs:{prop:"type",align:"center",label:"类型"}}),e._v(" "),r("el-table-column",{attrs:{prop:"birthday",align:"center",label:"生日"}}),e._v(" "),r("el-table-column",{attrs:{prop:"hometown",align:"center",label:"籍贯"}}),e._v(" "),r("el-table-column",{attrs:{prop:"cardType",align:"center",width:"140",label:"出行人证件类型",formatter:e.formatCardType}}),e._v(" "),r("el-table-column",{attrs:{prop:"cardNum",align:"center",label:"证件号"}}),e._v(" "),r("el-table-column",{attrs:{prop:"mobile",align:"center",label:"电话"}}),e._v(" "),r("el-table-column",{attrs:{prop:"wechat",align:"center",label:"微信"}}),e._v(" "),r("el-table-column",{attrs:{prop:"email",align:"center",label:"email"}}),e._v(" "),r("el-table-column",{attrs:{prop:"height",align:"center",label:"身高"}}),e._v(" "),r("el-table-column",{attrs:{prop:"weight",align:"center",label:"体重"}}),e._v(" "),r("el-table-column",{attrs:{prop:"bwh",align:"center",label:"三围"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("p",[e._v("胸围:"+e._s(t.row.chestSize))]),e._v(" "),r("p",[e._v("腰围:"+e._s(t.row.waistSize))]),e._v(" "),r("p",[e._v("臀围:"+e._s(t.row.hiplineSize))])]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"weddingDay",align:"center",label:"婚期"}}),e._v(" "),r("el-table-column",{attrs:{prop:"isPregnancy",align:"center",label:"女士是否怀孕"}})],1),e._v(" "),r("h4",[e._v("联系人")]),e._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.orderInfo.contacts,border:""}},[r("el-table-column",{attrs:{prop:"name",align:"center",label:"联系人姓名",width:"500"}}),e._v(" "),r("el-table-column",{attrs:{prop:"phone",align:"center",label:"联系人手机"}}),e._v(" "),r("el-table-column",{attrs:{prop:"email",align:"center",label:"联系人邮箱"}})],1)],1)},staticRenderFns:[]}},711:function(e,t,r){r(941);var a=r(10)(r(795),r(1014),"data-v-d74b17a8",null);e.exports=a.exports},795:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(70);t.default={data:function(){return{orderInfo:{wareName:"",orderCode:"",statusFreeze:"",remarks:"",premarks:"",reserveWare:[],amountSummary:[],traveler:[],contacts:[{name:"悦视觉",phone:"400123123",email:"yueshijue@163.com"}]}}},methods:{format:function(e,t){switch(e.statusFreeze){case 1:return"无冻结";case 2:return"已冻结"}},formatSex:function(e,t){switch(e.sex){case 1:return"男";case 2:return"女"}},formatCardType:function(e,t){switch(e.cardType){case 0:return"";case 1:return"身份证";case 2:return"护照";case 3:return"军官证";case 4:return"驾照";case 5:return"其他"}}},computed:{state:function(){switch(this.orderInfo.statusFreeze){case 1:return"【订单无冻结】";case 2:return"【订单已冻结】"}}},created:function(){var e=this,t=this.$route.query;(0,a.getOrderDetail)(t).then(function(t){console.log(t);var r=t.data.result;"0001"===t.data.code?(r.item.forEach(function(t,r,a){2===t.wareType&&(e.orderInfo.wareName=t.wareName)}),e.orderInfo.orderCode=r.info.orderCode,e.orderInfo.statusFreeze=r.info.statusFreeze,e.orderInfo.remarks=r.item.remarks,e.orderInfo.premarks=r.info.premarks,r.item.forEach(function(t){var a={wareName:t.wareName,statusFreeze:r.info.statusFreeze,adultCount:t.adultCount,childCount:t.childCount,dateDepart:t.dateDepart,dateReturn:t.dateReturn,adultPrice:t.adultPrice,childPrice:t.childPrice,amountAll:r.pay.amountAll};e.orderInfo.reserveWare.push(a);var l={wareName:t.wareName,createTime:r.info.createTime,amountAll:r.pay.amountAll};e.orderInfo.amountSummary.push(l)}),e.orderInfo.traveler=r.custom):e.$message.error(t.data.message)}).catch(function(t){console.log(t),e.catchError(t.response)})}}},896:function(e,t,r){t=e.exports=r(696)(),t.push([e.i,".company-info[data-v-d74b17a8]{margin-top:100px;text-align:center}p[data-v-d74b17a8]{margin:3px 0}","",{version:3,sources:["D:/B2B-YueProject/yueadmin-b2b/src/pages/admin/order/systemFreezeOrderDetail.vue"],names:[],mappings:"AACA,+BACC,iBAAkB,AAClB,iBAAmB,CACnB,AACD,mBACC,YAAa,CACb",file:"systemFreezeOrderDetail.vue",sourcesContent:["\n.company-info[data-v-d74b17a8]{\n\tmargin-top: 100px;\n\ttext-align: center;\n}\np[data-v-d74b17a8]{\t\t\n\tmargin:3px 0;\n}\n"],sourceRoot:""}])},941:function(e,t,r){var a=r(896);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(697)("14938673",a,!0)}});
//# sourceMappingURL=40.27e02779c28210b3e380.js.map