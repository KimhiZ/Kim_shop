<template>

<div style="margin:10px 0 60px 0;">
 <div class="mui-content">
			<div class="mui-card">
				<ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell mui-collapse" v-for="cate in cates" :key="cates.id"><a class="mui-navigate-right" href="#">{{cate.cname}}</a>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell" v-for="item in cate.names"><a class="mui-navigate-right" href="#">{{item.name}}</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
</div>

</template>

<script>
			export default{
        data(){
          return{
            cates:[{id:1,cname:"鞋类",names:[{name:"千元潮鞋"},{name:"女神必备"},{name:"运动装备"},{name:"奢侈高街"},{name:"夏日凉拖"}]},{id:2,cname:"服饰",names:[{name:"潮服新品"},{name:"女款服饰"},{name:"球衣球裤"},{name:"夹克卫衣"},{name:"T恤"},{name:"裤装"},{name:"衬衫"},{name:"日潮"},{name:"美潮"},{name:"国潮"},{name:"高街"}]},{id:3,cname:"手表",names:[{name:"情路对表"},{name:"潮流腕表"},{name:"时尚腕表"},{name:"奢华腕表"},{name:"女神表款"}]},{id:4,cname:"箱包",names:[{name:"腰包"},{name:"手拿包"},{name:"单肩包"},{name:"双肩背包"},{name:"手提包"}]},{id:5,cname:"潮玩",names:[{name:"潮流玩具"},{name:"乐高专区"},{name:"潮物周边"},{name:"拼装模型"},{name:"动漫手办"}]},{id:6,cname:"配件",names:[{name:"首饰"},{name:"眼镜/太阳镜"},{name:"腰带"},{name:"潮帽"},{name:"袜子"},{name:"丝巾"}]},{id:7,cname:"数码",names:[{name:"耳机专区"},{name:"音响专区"},{name:"相机专区"},{name:"手机通讯"},{name:"电脑外设"},{name:"游戏设备"},{name:"数码潮配"},{name:"个护家电"}]},{id:8,cname:"美妆",names:[{name:"人气口红"},{name:"每日护肤"},{name:"男士香水护肤"},{name:"夏日香气"},{name:"防晒榜单"},{name:"眼霜精华"},{name:"卸妆洁面"},{name:"清透底妆"},{name:"腮红高光"}]},]
          }
        }
      }
</script>


<style lang="scss" scoped>
  
</style>