<template>
  <div>
    <div class="mui-bar mui-bar-nav" style="margin-top:40px;width:100%;">
			    <h1 class="mui-title">注册</h1>
		  </div>
      <div class="mui-content">
			<form class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='account' type="text" v-model="username" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" v-model="password" class="mui-input-clear mui-input" placeholder="请输入密码" >
				</div>
				<div class="mui-input-row">
					<label>确认</label>
					<input id='password_confirm' type="password" v-model="pwd" class="mui-input-clear mui-input" placeholder="请确认密码" >
				</div>
				<div class="mui-input-row">
					<label>邮箱</label>
					<input id='email' type="email" v-model="email" class="mui-input-clear mui-input" placeholder="请输入邮箱" >
				</div>
			</form>
			<div class="mui-content-padded">
				<router-link to="/reg"><button id='reg' class="mui-btn mui-btn-block mui-btn-primary" @click="reg">注册</button></router-link>
			</div>
  </div>
   </div>
</template>

<script src="../../lib/mui/js/mui.enterfocus.js"></script>
<script src="../../lib/mui/js/app.js"></script>
<script>
import { Toast } from "mint-ui";
export default{
  data(){
		return{
			username:'',
			password:'',
			pwd:'',
			email:'',
			toastInstanse: null
		};
	},
	methods:{
		reg(){
			if(this.password==this.pwd){
				if(this.username==''){
					this.toastInstanse= Toast({
					message: '账户不能为空',
					position: 'bottom',
					duration: 3000
				});
				}else if(this.email==''){
					this.toastInstanse= Toast({
					message: '邮箱不能为空',
					position: 'bottom',
					duration: 3000
				});
				}else{
					this.$http.jsonp("http://vue.cn/src/lib/public/reg.php?username=" + this.username + "&password=" + this.password+"&email="+this.email).then(res => {console.log(res.body);
                        if (res.body.type == 1) {
                           this.toastInstanse= Toast({
															message: '注册成功！请登录',
															position: 'bottom',
															duration: 2000
														});
														this.$router.push({path:'/login'})
                        } else if(res.body.type == -1){
                           this.toastInstanse= Toast({
															message: '注册失败，请重新注册',
															position: 'bottom',
															duration: 2000
														});
												}else if(res.body.type == 0){
													this.toastInstanse= Toast({
															message: '该账户已存在，请重新注册',
															position: 'bottom',
															duration: 2000
														});
												}
												
                    })
				}
			}else{
				this.toastInstanse= Toast({
					message: '输入的密码不一致，请重新输入',
					position: 'bottom',
					duration: 3000
				});
			}
		}
	}
}
</script>

		

<style lang="scss" scoped>
.area {
				margin: 20px auto 0px auto;
			}
			.mui-input-group:first-child {
				margin-top: 20px;
			}
			.mui-input-group label {
				width: 22%;
			}
			.mui-input-row label~input,
			.mui-input-row label~select,
			.mui-input-row label~textarea {
				width: 78%;
			}
			.mui-checkbox input[type=checkbox],
			.mui-radio input[type=radio] {
				top: 6px;
			}
			.mui-content-padded {
				margin-top: 25px;
			}
			.mui-btn {
				padding: 10px;
			}
</style>