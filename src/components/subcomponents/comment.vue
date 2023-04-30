<template>
	<div class="cmt-con">
		<h3>发表评论</h3>
		<hr />
		<textarea placeholder="请输入评论留言内容(最多200字)" maxlength="200" v-model='content'></textarea>
		<mt-button type="primary" size="large" @click="add" style="margin-bottom: 20px;">发表评论</mt-button>
		
		<div class="cmt-list" v-for="item in list" :key="item.id">
			<div class="cmt-item">
				<div class="cmt-title">
					第{{item.id}}楼&nbsp;&nbsp;用户：{{item.name}} <span style="float: right;margin-right: 5px; font-size: 12px;color: #007AFF;">发表时间：{{item.time}}</span>
				</div>
				<div class="cmt-body">
					{{item.con}}
				</div>
			</div>
		</div>
	</div>
  </template>
  
  <script>
	  import { setCookie,getCookie,delCookie } from '../../lib/public/cookie.js'
	  import { Toast} from 'mint-ui'
	  export default{
		data(){
			return{
				content:'',
				name:'',
				list:[
					{id:1,name:"工具人",con:"黑哥一笑，生死难料",time:"2020-05-29 22:00:02"},
					{id:2,name:"lm",con:"wdnmd",time:"2020-05-29 22:01:02"},
					{id:3,name:"乔治弟弟",con:"？？？？",time:"2020-05-29 22:02:02"},
					{id:4,name:"阿挂",con:"哈哈哈哈",time:"2020-05-29 22:03:02"},
				]
			}
		},
		mounted(){
			let uname=getCookie('username')
			this.name=uname
		},
		  methods:{
			  add(){
				  
				  var formatNumber = n => {
				    n = n.toString()
				    return n[1] ? n : '0' + n
				  }
				  // 时间格式化
				  var formatTime = date => {
				    const year = date.getFullYear()
				    const month = date.getMonth() + 1
				    const day = date.getDate()
				    const hour = date.getHours()
				    const minute = date.getMinutes()
				    const second = date.getSeconds()
				    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
				  }
				  if(this.content==''){
					  Toast('输入评论内容不能为空！')
				  }else if(this.name==''){
					Toast('请先登录再进行评论')
					this.content=''
				  }else{
					  this.list.push({
					      id: this.list.length=== 0 ? 1 : (this.list[this.list.length - 1].id) + 1,
					      name: this.name,
					  					  con:this.content,
					      time: this.time=formatTime(new Date())
					  }),this.content=''
				  }
			  }
		  }
	  }
  </script>
  <style lang="scss" scoped>
	  .cmt-con{
		  margin-bottom: 60px;
		  h3{
			  font-size: 18px;
		  }
		  textarea{
			  font-size: 14px;
			  height: 85px;
			  margin: 0;
		  }
		  .cmt-list{
			  margin: 6px 0;
			  .cmt-item{
				  font-size: 13px;
				  .cmt-title{
					  line-height: 30px;
					  background-color: #ccc;
				  }
				  .cmt-body{
					  line-height: 35px;
					  text-indent: 2em;
				  }
			  }
		  }
	  }
	  
  </style>