<template>
	<section>
	<!-- 订单明细 -->
		<h4>订单明细</h4>
		<el-card>
			<p>悦视觉产品名称：<span style="color:#009dda" v-text="orderInfo.wareName"></span></p>
			<p>订单号：<span v-text="orderInfo.orderCode"></span><span style="color:red" v-text="state"></span></p>
		    <el-button type="primary" @click="providerRemark">商家备注</el-button>
		    <el-button type="primary">打印订单</el-button>
		    <el-dialog title="商家备注" :visible.sync="dialogVisible" size="tiny">
			    <el-form :model="remarkForm" :rules="remarkRules" ref="remarkForm" label-width="10px">
		            <el-form-item prop="remark">
						<el-input type="textarea" v-model="remarkForm.remark" placeholder="请输入备注内容" :rows="5"></el-input>
					</el-form-item>
				</el-form>    
				<div slot="footer" class="dialog-footer">
				    <el-button type="primary" @click="remarkConfirm('remarkForm')">确定</el-button>
				    <el-button @click="dialogVisible = false">取 消</el-button>
				</div>
			</el-dialog>
		</el-card>
	<!-- 备注 -->
		<h4>备注</h4>
	    <el-card>
		    <p>预定备注: <span v-text="orderInfo.remarks"></span></p>
		    <p>商家备注: <span v-text="orderInfo.premarks"></span></p>
		</el-card>
	<!-- 预定项目 -->
		<h4>预定项目</h4>
		<el-table
		    :data="orderInfo.reserveWare"
		    border
		    style="width: 100%">
		    <el-table-column
		      prop="wareName"
		      align="center"
		      label="商品名称">
		    </el-table-column>
		    <el-table-column
		      prop="status"
		      align="center"
		      label="订单状态"
		      :formatter="format">
		    </el-table-column>
		    <el-table-column
		      align="center"
		      label="份数/人数">
		      <template scope="scope">
		      	<p>{{parseInt(scope.row.adultCount ? scope.row.adultCount : 0) + parseInt(scope.row.childCount ? scope.row.childCount : 0)}}({{scope.row.adultCount}}大/{{scope.row.childCount}}小)</p>
		      </template>
		    </el-table-column>
		    <el-table-column
		      prop="dateDepart"
		      align="center"
		      label="出发日期">
		    </el-table-column>
		    <el-table-column
		      prop="dateReturn"
		      align="center"
		      label="返回日期">
		    </el-table-column>
		    <el-table-column
		      align="center"
		      label="卖价">
		      <template scope="scope">
		      	<p>成人:{{parseInt(scope.row.adultPrice ? scope.row.adultPrice : 0).toFixed(2)}}</p>
		      	<p>儿童:{{parseInt(scope.row.childPrice ? scope.row.childPrice : 0).toFixed(2)}}</p>
		      </template>
		    </el-table-column>
		    <el-table-column
		      prop="amountAll"
		      align="center"
		      label="卖价总价">
		    </el-table-column>
		</el-table>
	<!-- 金额汇总	 -->
		<h4>金额汇总</h4>
		<el-table
		    :data="orderInfo.amountSummary"
		    border
		    show-summary
		    style="width: 100%">
		    <el-table-column
		      prop="wareName"
		      align="center"
		      label="商品名称"
		      width="500">
		    </el-table-column>
		    <el-table-column
		      prop="createTime"
		      align="center"
		      label="操作日期">
		    </el-table-column>
		    <el-table-column
		      prop="amountAll"
		      align="center"
		      label="金额">
		    </el-table-column>
		</el-table>
	<!-- 出行人 -->
		<h4>出行人</h4>
		<el-table
		    :data="orderInfo.traveler"
		    border
		    style="width: 100%">
		    <el-table-column
		      prop="name"
		      align="center"
		      label="姓名">
		    </el-table-column>
		    <el-table-column
		      prop="sex"
		      align="center"
		      label="性别"
		      :formatter="formatSex">
		    </el-table-column>
		    <el-table-column
		      prop="type"
		      align="center"
		      label="类型">
		    </el-table-column>
		    <el-table-column
		      prop="birthday"
		      align="center"
		      label="生日">
		    </el-table-column>
		    <el-table-column
		      prop="hometown"
		      align="center"
		      label="籍贯">
		    </el-table-column>
		    <el-table-column
		      prop="cardType"
		      align="center"
		      width="140"
		      label="出行人证件类型"
		      :formatter="formatCardType">
		    </el-table-column>
		    <el-table-column
		      prop="cardNum"
		      align="center"
		      label="证件号">
		    </el-table-column>
		    <el-table-column
		      prop="mobile"
		      align="center"
		      label="电话">
		    </el-table-column>
		    <el-table-column
		      prop="wechat"
		      align="center"
		      label="微信">
		    </el-table-column>
		    <el-table-column
		      prop="email"
		      align="center"
		      label="email">
		    </el-table-column>
		    <el-table-column
		      prop="height"
		      align="center"
		      label="身高">
		    </el-table-column>
		    <el-table-column
		      prop="weight"
		      align="center"
		      label="体重">
		    </el-table-column>
		    <el-table-column
		      prop="bwh"
		      align="center"
		      label="三围">
		       <template scope="scope">
			      	<p>胸围:{{scope.row.chestSize}}</p>
			      	<p>腰围:{{scope.row.waistSize}}</p>
			      	<p>臀围:{{scope.row.hiplineSize}}</p>
		       </template>
		    </el-table-column>
		    <el-table-column
		      prop="weddingDay"
		      align="center"
		      label="婚期">
		    </el-table-column>
		    <el-table-column
		      prop="isPregnancy"
		      align="center"
		      label="女士是否怀孕">
		    </el-table-column>
		</el-table>
	<!-- 联系人 -->
		<h4>联系人</h4>
		<el-table
		    :data="orderInfo.contacts"
		    border
		    style="width: 100%">
		    <el-table-column
		      prop="name"
		      align="center"
		      label="联系人姓名"
		      width="500">
		    </el-table-column>
		    <el-table-column
		      prop="phone"
		      align="center"
		      label="联系人手机">
		    </el-table-column>
		    <el-table-column
		      prop="email"
		      align="center"
		      label="联系人邮箱">
		    </el-table-column>
		</el-table>
	</section>
</template>
<script>
	import { getOrderDetail, addRemark } from '@/api'
	export default {
		data () {
			return {
				remarkForm:{
					remark:''
				},				
				dialogVisible:false,			
				orderInfo:{
					wareName: '',
					orderCode: '',
					status: '',
					remarks: '',
					premarks: '',
					reserveWare:[],
					amountSummary:[],
					traveler:[],
					contacts:[{
						name:'悦视觉',
						phone:'400123123',
						email:'yueshijue@163.com'
					}]
				},
				remarkRules:{
                    remark:[
                        { required: true, message: '请输入备注内容', trigger: 'blur' }
                    ]
                },
			}
		},
		methods:{					
			format(row,col){
				switch(row.status){
					case 0:
              			return '已取消'
              			break;
              		case 1:
              			return '下单成功'
              			break;
              		case 2:
              			return '待支付'
              			break;
              		case 4:
              			return '待发团'
              			break;
              		case 5:
              			return '已发团'
              			break;
              		case 6:
              			return '已回团'
              			break;
              		case 7:
              			return '结算中'
              			break;
              		case 8:
              			return '已结算'
              			break;
              		case 9:
              			return '已完成'
              			break;
              		case 10:
              			return '已退款'
              			break;
              		default:
              		 return '未知'
              		 break;
				}
			},
			formatSex(row,col){
				switch(row.sex){
					case 1:
					  return '男'
					  break;
					case 2:
					  return '女'
					  break;
				}
			},
			formatCardType(row,col){
				switch(row.cardType){
					case 0:
					  return ''
					  break;
					case 1:
					  return '身份证'
					  break;
					case 2:
					  return '护照'
					  break;
					case 3:
					  return '军官证'
					  break;
					case 4:
					  return '驾照'
					  break;
				  	case 5:
					  return '其他'
					  break;
				}
			},
			providerRemark(){
				this.remarkForm.remark = '';
				this.dialogVisible = true;
			},
			remarkConfirm(remarkForm){
				this.$refs[remarkForm].validate((valid) => {
                    if (valid) {
						// 备注接口
						let params = {
							remark:this.remarkForm.remark,
							orderId:this.$route.query.orderId
		        		}
		        		console.log(params)
		        		addRemark(params).then(res => {
				          console.log(res)
				          if(res.data.code === '0001') {
				            this.$message.success('提交成功');
				            this.orderInfo.premarks = this.remarkForm.remark;
				          } else {
				            this.$message.error(res.data.message)
				          }				          
				        }).catch(err => {
				          console.log(err)
				          this.$catchError(err)
				        })
						this.dialogVisible = false;	
					}else {
                        console.log('error submit!!');
                        return false;
                    }
                })		
			}
		},
		computed:{
			'state':function(){
				switch(this.orderInfo.status){
					case 0:
					  return '【订单已取消】'
					  break;
					case 1:
              			return '【下单成功】'
              			break;
              		case 2:
              			return '【订单待支付，已占库存】'
              			break;
					case 4:
						return '【订单待发团】'
						break;
					case 5:
					  	return '【订单已发团】'
					  	break;
					case 6:
					  	return '【订单已回团】'
					  	break;
              		case 7:
              		  	return '【订单结算中】'
              		  	break;
              		case 8: 
              		  	return '【订单已结算】'
              		  	break;
              		case 9:
              		  	return '【订单已完成】'
              		  	break;
              		case 10:
              		  	return '【订单已退款】'
              		  	break;
              		default:
              		 	return '未知'
              		 	break;					  					  
				}
			}
		},
		created(){
			var para = this.$route.query;
			getOrderDetail(para).then((res) => {
			console.log(res)			
				var data = res.data.result;
			 if(res.data.code === "0001"){
			 	data.item.forEach((v,i,a) => {
			 		if(v.wareType === 2){
			 			this.orderInfo.wareName = v.wareName;
			 		}
			 	});
				this.orderInfo.orderCode = data.info.orderCode;
			 	this.orderInfo.status = data.info.status;
				this.orderInfo.remarks = data.item.remarks;
				this.orderInfo.premarks = data.info.premarks;
				data.item.forEach((value)=>{
					//预定项目信息
					let reserveWare = {
						wareName : value.wareName,
						status : data.info.status,
						adultCount : value.adultCount,
						childCount : value.childCount,
				 		dateDepart : value.dateDepart,
				 		dateReturn : value.dateReturn,
						adultPrice : value.adultPrice,
						childPrice : value.childPrice,
						amountAll : data.pay.amountAll
					}
					this.orderInfo.reserveWare.push(reserveWare);
					//金额汇总
					let amountSummary = {
						wareName : value.wareName,
						createTime : data.info.createTime,
						amountAll : data.pay.amountAll
					}
					this.orderInfo.amountSummary.push(amountSummary);
				})
				 // 出行人
				this.orderInfo.traveler = data.custom;
			 }else{
				this.$message.error(res.data.message)
			 }
			}).catch((err) => {
				console.log(err);
                this.$catchError(err)
			})

		}
	}
</script>
<style scoped>
	.company-info{
		margin-top: 100px;
		text-align: center;
	}
	p{		
		margin:3px 0;
	}
</style>