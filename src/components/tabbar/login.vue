<template>
  <div style="height:300px;width:100%;">
    <div class="mui-bar mui-bar-nav" style="margin-top:40px;width:100%;">
			    <h1 class="mui-title">登录</h1>
		  </div>
		<div class="mui-content">
			<form id='login-form' class="mui-input-group" >
				<div class="mui-input-row">
					<label>账号</label>
					<input id='account' type="text" v-model="username" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" v-model="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
			</form>
			<div class="mui-content-padded">
				<router-link to="/login"><button id='login' class="mui-btn mui-btn-block mui-btn-primary" @click="login">登录</button></router-link>
				<div class="link-area"><router-link id='reg' to="/reg">注册账号</router-link> <span class="spliter">|</span> <a id='forgetPassword'>忘记密码</a>
				</div>
			</div>
		</div>
  </div>
</template>

<script src="../../lib/mui/js/mui.enterfocus.js"></script>
<script src="../../lib/mui/js/app.js"></script>
<script>
import { Toast } from "mint-ui"
import {setCookie,getCookie} from "../../lib/public/cookie.js"
export default{
				data(){
					return{
                username: '',
								password: '',
								};
            },
      methods:{
					login() {
                    this.$http.jsonp("http://vue.cn/src/lib/public/login.php?username=" + this.username + "&password=" + this.password).then(res => {
                        console.log(res.body);
                        if (res.body.type == 1) {
                           Toast({
															message: '登录成功',
															position: 'bottom',
															duration: 2000
														});
														 setCookie('username',this.username,1000*60)
														this.$router.push({path:'/my'})
                        } else {
                           Toast({
															message: '登录失败，请重新登录。若无账号，请先注册',
															position: 'bottom',
															duration: 2000
														});
                        }
                    })
								}
						},    
        };
</script>
<style lang="scss" scoped>
  .area {
				margin: 20px auto 0px auto;
			}
			
			.mui-input-group {
				margin-top: 10px;
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
			
			.link-area {
				display: block;
				margin-top: 25px;
				text-align: center;
			}
			
			.spliter {
				color: #bbb;
				padding: 0px 8px;
			}
			
			.oauth-area {
				position: absolute;
				bottom: 20px;
				left: 0px;
				text-align: center;
				width: 100%;
				padding: 0px;
				margin: 0px;
			}
			
			.oauth-area .oauth-btn {
				display: inline-block;
				width: 50px;
				height: 50px;
				background-size: 30px 30px;
				background-position: center center;
				background-repeat: no-repeat;
				margin: 0px 20px;
				/*-webkit-filter: grayscale(100%); */
				border: solid 1px #ddd;
				border-radius: 25px;
			}
			
			.oauth-area .oauth-btn:active {
				border: solid 1px #aaa;
			}
			
			.oauth-area .oauth-btn.disabled {
				background-color: #ddd;
			}
</style>