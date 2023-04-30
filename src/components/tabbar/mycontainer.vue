<template>

<div>
						<ul class="mui-table-view mui-table-view-chevron" style="margin-top:10px;">
							<li class="mui-table-view-cell mui-media" @click="nolog">
								<router-link class="mui-navigate-right" :to="log">
									<img class="mui-media-object mui-pull-left head-img" id="head-img" src="../../../images/tou.jpg">
									<div class="mui-media-body">
										<h3 style="font-weight:normal;margin-left:20px;">{{name}}</h3>
									</div>
								</router-link>
							</li>
						</ul>
			<div style="margin-top:10px;">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							全部订单
							<p style="float:right;margin-right:20px;font-size:14px;">查看详情</p>
						</a>
					</li>
				</ul>
			</div>
			<div class="detail" >
				<ul style="padding:0;">
				<li class="cen" v-for="(item,i) in list" :key="item.id">
					<span :class="item.classn"></span>
					<p>{{item.name}}</p>
				</li>
				</ul>
			</div>
			<div style="margin-top:10px;">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							我的账单
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							浏览记录
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							优惠券
						</a>
					</li>
					<li class="mui-table-view-cell">
						<router-link class="mui-navigate-right" to="/about">
							关于我们
						</router-link>
					</li>
				</ul>
			</div>
			<div style="margin-top:20px;" v-show="flag" @click="quit">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell" style="text-align: center;">
						<a>退出登录</a>
					</li>
				</ul>
			</div>
</div>
</template>


<script>
import { setCookie,getCookie,delCookie } from '../../lib/public/cookie.js'
import { Toast,MessageBox } from "mint-ui"
	export default{
    data(){
				return {
					name:"",
					flag: false,
					log:"/login",
					list:[{id:1,classn:"mui-icon-extra mui-icon-extra-card",name:"待支付"},{id:2,classn:"mui-icon-extra mui-icon-extra-gift",name:"待发货"},{id:3,classn:"mui-icon-extra mui-icon-extra-express",name:"待收货"},{id:4,classn:"mui-icon-extra mui-icon-extra-comment",name:"待评价"},{id:5,classn:"mui-icon-extra mui-icon-extra-custom",name:"售后"},]
				}
		},
		mounted(){
			let uname=getCookie('username')
			this.name=uname
			if(uname==""){
				// MessageBox('提示','未登录，请登录！');
				MessageBox.confirm('未登录，请先登录').then(action => {
					this.$router.push({path:'/login'})
});
			}else{
				this.flag=true
				this.log="/my"
			}
			
		},
		methods:{
			quit(){
				MessageBox.confirm('是否退出登录').then(action => {
					this.$router.push({path:'/home'})
					delCookie('username'),
					Toast({
						message: '退出登录成功',
						position: 'bottom',
						duration: 1000
					});
				});
			},
			nolog(){
				if(this.log==="/my"){
					Toast({
						message: '你已登录成功，无需再次登录',
						position: 'bottom',
						duration: 1000
					});
			}
			}
		}
	}

</script>

<style lang="scss" scoped>
.detail{
	background-color:white;
	height:70px;
	width:100%;
	margin-top:10px;
}
.cen{
	list-style:none;
	width:16.5%;
	height:70px;
	text-align:center;
	padding-top:15px;
	margin:0 0 0 10px;
	float:left;
	span{
		font-size:20px;
	}
}

</style>