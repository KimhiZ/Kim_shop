<template>
	<div class="mui-content">
		<div class="mui-content-padded">
					<vue-preview :slides="list" @close="handleClose" tag="img"></vue-preview>
			</div>
		</div>
</template>



<script>
	export default{
		data(){
			return{
				list:[
					{id:1,src:require("../../../images/discovery/1.jpg"),msrc:require("../../../images/discovery/1.jpg"),w:400,h:250},
					{id:2,src:require("../../../images/discovery/2.jpg"),msrc:require("../../../images/discovery/2.jpg"),w:400,h:250},
					{id:3,src:require("../../../images/discovery/3.jpg"),msrc:require("../../../images/discovery/3.jpg"),w:400,h:250},
					{id:4,src:require("../../../images/discovery/4.jpg"),msrc:require("../../../images/discovery/4.jpg"),w:400,h:250},
					{id:5,src:require("../../../images/1.jpg"),msrc:require("../../../images/1.jpg"),w:400,h:250},
					{id:6,src:require("../../../images/2.jpg"),msrc:require("../../../images/2.jpg"),w:400,h:250},
					{id:7,src:require("../../../images/3.jpg"),msrc:require("../../../images/3.jpg"),w:400,h:250},
					{id:8,src:require("../../../images/4.jpg"),msrc:require("../../../images/4.jpg"),w:400,h:250},
				]
			}
		},
		methods:{
			handleClose(){
				console.log('close event')
			}
		}
	}
</script>
	
<style lang="scss" scoped>
.mui-content-padded{
	  /deep/ .my-gallery {
	    display: flex;
	    flex-wrap: wrap;
	    figure {
	      width: 100%;
	      margin: 2px;
	      img {
	        width: 100%;
	      }
	    }
	  }
	margin-bottom: 60px;
}

</style>
