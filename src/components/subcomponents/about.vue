<template>
	<div class="mui-content">
		<div style="margin-top:10px;">
			<ul class="mui-table-view" @click="tel()">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						联系电话
					</a>
				</li>
			</ul>
		</div>
		<div style="margin-top:10px;">
			<ul class="mui-table-view" @click="version()">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						当前APP版本
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { MessageBox,Toast } from 'mint-ui';
	export default{
		methods:{
			tel(){
				MessageBox('联系电话', '183XXXXX775');
			},
			version(){
				Toast({
					message: '当前版本：V1.0.0.1',
					duration: 2000
					})
			}
		}
	}
</script>

<style>
	.mui-content{
	}
</style>
