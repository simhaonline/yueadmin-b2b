webpackJsonp([28],{737:function(e,t,a){a(918);var r=a(10)(a(821),a(968),"data-v-39df79a8",null);e.exports=r.exports},821:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(70);t.default={data:function(){return{loading:!1,filter:{orderCode:"",wareName:"",startDate:"",endDate:""},pageNo:1,pageSize:10,total:0,pickerOptions:{shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"一周前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",t)}},{text:"一月前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-2592e6),e.$emit("pick",t)}}]},orderList:[{orderId:"1001",wareId:"0001",wareName:"产品1",orderStatus:1,orderTotal:20,date:"2017-06-10",adultPrice:"12000"}]}},methods:{formatStatus:function(e){switch(e.statusComplain){case 1:return"改单中";case 2:return"改单被驳回";default:return"未知"}},startDateChange:function(e){this.filter.startDate=e},endDateChange:function(e){this.filter.endDate=e},handleSizeChange:function(e){this.pageSize=e,this.getOrderList()},handleCurrentChange:function(e){this.pageNo=e,this.getOrderList()},handleCheck:function(e,t){this.$router.push({path:"/provider/order/changeOrderDetail",query:{orderId:t.orderId}})},getOrderList:function(){var e=this;if(this.filter.startDate>this.filter.endDate)return this.$notify.error({title:"提示",message:"起始时间不得大于截止时间"}),!1;var t={pageNo:this.pageNo,pageSize:this.pageSize,orderCode:this.filter.orderCode,wareName:this.filter.wareName,startDate:this.filter.startDate,endDate:this.filter.endDate,statusComplain:"complain"};console.log(t),(0,r.readOrderList)(t).then(function(t){console.log(t),"0001"===t.data.code?(e.orderList=t.data.result.orderList,e.total=t.data.result.pageInfo.count):e.$message.error(t.data.message),e.loading=!1}).catch(function(t){console.log(t),e.catchError(t.response),e.loading=!1})}},mounted:function(){this.getOrderList()}}},873:function(e,t,a){t=e.exports=a(696)(),t.push([e.i,".page[data-v-39df79a8],.search[data-v-39df79a8]{background:#fff}","",{version:3,sources:["D:/B2B-YueProject/yueadmin-b2b/src/pages/provider/order/changeOrders.vue"],names:[],mappings:"AACA,gDACC,eAAiB,CACjB",file:"changeOrders.vue",sourcesContent:["\n.search[data-v-39df79a8],.page[data-v-39df79a8]{\n\tbackground: #fff;\n}\n"],sourceRoot:""}])},918:function(e,t,a){var r=a(873);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(697)("d575a7a0",r,!0)},968:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("el-row",{staticClass:"toolbar search"},[a("el-form",{attrs:{inline:!0,model:e.filter}},[a("el-form-item",{attrs:{label:""}},[a("el-input",{attrs:{placeholder:"输入订单号"},model:{value:e.filter.orderCode,callback:function(t){e.filter.orderCode=t},expression:"filter.orderCode"}})],1),e._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-input",{attrs:{placeholder:"输入商品名称"},model:{value:e.filter.wareName,callback:function(t){e.filter.wareName=t},expression:"filter.wareName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"出发日期："}},[a("el-date-picker",{attrs:{type:"date",editable:!1,format:"yyyy-MM-dd",placeholder:"选择日期","picker-options":e.pickerOptions},on:{change:e.startDateChange},model:{value:e.filter.startDate,callback:function(t){e.filter.startDate=t},expression:"filter.startDate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"至"}},[a("el-date-picker",{attrs:{type:"date",editable:!1,placeholder:"选择日期","picker-options":e.pickerOptions},on:{change:e.endDateChange},model:{value:e.filter.endDate,callback:function(t){e.filter.endDate=t},expression:"filter.endDate"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.getOrderList}},[e._v("查询")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.orderList,border:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"orderCode",label:"订单编号",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"wareId",label:"产品编号",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"wareName",label:"产品名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"statusComplain",label:"订单状态",width:"120",formatter:e.formatStatus}}),e._v(" "),a("el-table-column",{attrs:{prop:"childCount",label:"订单总人数",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n\t\t    \t"+e._s(parseInt(""!=t.row.adultCount?t.row.adultCount:0)+parseInt(""!=t.row.childCount?t.row.childCount:0))+"\n\t\t    ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"dateDepart",label:"出发日期",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{prop:"adultPrice",label:"成人底价",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){e.handleCheck(t.$index,t.row)}}},[e._v("查看")])]}}])})],1),e._v(" "),a("el-row",{staticClass:"toolbar page"},[a("el-pagination",{attrs:{"current-page":e.pageNo,"page-size":e.pageSize,"page-sizes":[10,20,30,40],layout:"total, sizes, prev, next, pager, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.pageNo=t}}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=28.bf011d55579a118a9a10.js.map