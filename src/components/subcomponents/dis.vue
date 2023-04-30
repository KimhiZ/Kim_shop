<template>
	<div class="mui-content">
		<div v-for="item in list" :key="item.id" v-show="item.id==getid">
			<h4 class="con-f">{{item.title}}</h4>
			<p class="con-time">发布时间:{{item.time}}</p>
			<hr>
			<img :src="item.sty" alt="" class="con-img">
			<p class="con-m">{{item.msg}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				getid:this.$route.params.id,
				list:[{id:1,sty:"../../images/discovery/1.jpg",title:"sacai x Nike Vaporwaffle 全新配色实物公开",time:"发布于2020-05-21",msg:"早先，在 Nike 2020 Forum 活动中，sacai 与 Nike 的全新合作作品 Vaporwaffle 就首度亮相。继黄/绿及绿/紫配色曝光后，近日 sacai x Nike Vaporwaffle 的另一款全新配色实物亦遭到公开。     该鞋款选用米白色作为鞋身设计主调同时，搭载红/黑叠加 Nike Swoosh 点缀鞋侧，并在中底部分加入皇家蓝细节设计，不同色彩之间的冲突感令其视觉效果更为突出。目前该鞋款尚无进一步发售信息释出，如有兴趣还请保持关注。"},{id:2,sty:"../../images/discovery/2.jpg",title:"Kanye West 的下一张专辑，叫做《God’s Country》？",time:"发布于2020-05-20",msg:"距离 Kanye West 的上一张专辑 《Jesus Is King》的发布已经过去了半年时间，对于粉丝们来说，当然是期待着他能为我们带来更多音乐上的惊喜。而摄影师和导演 Arthur Jafa 近日在接受 Michèle Lamy 采访时透露，他正在和 Kanye 一起制作新的音乐视频，表示 Kanye 正在准备新专辑，暂定的名字为《God’s Country》。这的确值得期待，但鉴于早先发布过程中的不断跳票，各位还是再耐心等待一阵吧。"},{id:3,sty:"../../images/discovery/3.jpg",title:"Karimoku x MEDICOM TOY x BABY MILO 三方联名 BE@RBRICK 限量玩偶即将登场",time:"发布于2020-05-15",msg:"MEDICOM TOY 日前再度携手 Karimoku 与 A BATHING APE® 带来了限量三方联名企划，以 A BATHING APE® 中人气角色 BABY MILO 为原型，将 BABY MILO 与 BE@RBRICK 木质玩偶熊结合，打造了更为高级的 BE@RBRICK 玩偶。本次选用了不同种类的木材，经过精心雕刻后玩偶的脚、手、眼睛、鼻子和嘴巴呈现不同色调。据悉，Karimoku x MEDICOM TOY  x BABY MILO 三方联名 BE@RBRICK 限量玩偶将以高达 2,240 美元的价格于 5 月 30 日在 MEDICOM TOY 商城上线。此番入手难度不容小觑，心水的朋友不妨提前做好抢购准备。"},{id:4,sty:"../../images/discovery/4.jpg",title:"Travis Scott「新倒钩」，有点意思…",time:"发布于2020-05-10",msg:"不久之后，这个足弓骨骼的 idea 被转移到人气更加火爆的鞋款 Travis Scott Air Jordan I 上，与此同时 edmond 对骨骼的形状进行了修改，并且巧妙地贴合「倒钩」Swoosh 本有的线条轮廓和延伸方向。另外一方面，这一次的 Air Jordan I 不再是 Photoshop Project 了，而是切切实实的实体球鞋改造，虽然有人在评论区里表示这只是一双「崴货」，但更多的人表示出想要入手这双鞋子。"}]
			}
		}
	}
</script>

<style>
	.con-f{
		margin: 20px 0;
		color: red;
		font-size: 18px;
		text-align: center;
	}
	.con-time{
		font-size: 12px;
		margin-left: 5px;
		color: #007AFF;
	}
	.con-img{
		width: 98%;
		margin: 10px auto;
	}
	.con-m{
		font-size: 16px;
		margin: 5px 10px;
		line-height: 20px;
		text-indent: 2em;
	}

</style>
