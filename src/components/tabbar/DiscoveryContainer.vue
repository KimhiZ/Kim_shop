<template>

   <!-- <h1>discoverycontainer</h1> -->
   <div class="mui-content">
   <div class="mui-card" v-for="item in list" :key="item.id">
				<div class="mui-card-header mui-card-media" :style="item.sty"></div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>{{item.time}}</p>
						<p style="color: #333;">{{item.msg}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<a><span class="mui-icon-extra mui-icon-extra-like" style="font-size:20px"></span></a>
					<router-link class="mui-card-link" :to="'/dis/'+item.id">查看更多</router-link>
				</div>
			</div>
      </div>

</template>


<script>
export default{
    data(){
      return {
        list:[{id:1,sty:"height:40vw;background-image:url(../../images/discovery/1.jpg)",msg:"sacai x Nike Vaporwaffle 全新配色实物公开",time:"发布于2020-05-21"},{id:2,sty:"height:40vw;background-image:url(../../images/discovery/2.jpg)",msg:"Kanye West 的下一张专辑，叫做《God’s Country》？",time:"发布于2020-05-20"},{id:3,sty:"height:40vw;background-image:url(../../images/discovery/3.jpg)",msg:"Karimoku x MEDICOM TOY x BABY MILO 三方联名 BE@RBRICK 限量玩偶即将登场",time:"发布于2020-05-15"},{id:4,sty:"height:40vw;background-image:url(../../images/discovery/4.jpg)",msg:"Travis Scott「新倒钩」，有点意思…",time:"发布于2020-05-10"}]
      }
    }
}
</script>

<style lang="scss" scoped>
   .mui-content{
		 margin-bottom:65px;
	 }

</style>