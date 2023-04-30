<template>
    <div>

    
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
                <mt-swipe-item v-for="item in lunbotuList">
                    <img :src="item.src" alt="">
                </mt-swipe-item>
        </mt-swipe>

        <!-- 六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <router-link to="/home/news"><li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
                        </router-link>
		            <router-link to="/image"><li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
					</router-link>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <router-link to="/comment"><li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../../images/menu4.png" alt="">
		                    <div class="mui-media-body">评论留言</div></a></li>
					</router-link>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
					<router-link to="/about"><li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
					</router-link>
		        </ul>
      

    </div>

</template>


<script>
export default{
    data(){
        return {
            lunbotuList:[{src:"../../../images/1.jpg"},{src:"../../../images/2.jpg"},{src:"../../../images/3.jpg"},{src:"../../../images/4.jpg"},]
        };
    },
    // created(){
    //     this.getLunbotu();
    // },
    // methods:{
    //     getLunbotu(){
    //         this.$http.get('http://vue.studyit.io/api/getlunbo').then(result=>{
    //             console.log(result.body);
    //         })
    //     }
    // }
}
</script>

<style lang="scss" scoped>
    .mint-swipe{
		height: 200px;

        .mint-swipe-item{
            &:nth-child(1){
                background: lightblue;
            }
            &:nth-child(2){
                background: lightgreen;
            }
            &:nth-child(3){
                background: cyan;
            }
            img{
                width:100%;
                height:100%;
            }


        }
    }
    .mui-grid-view ,.mui-grid-9{
        background-color: #efeff4;
        border:none;
        img{
            width:60%;
            
        }
         
    }
    .mui-media-body{
        font-size:14px;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:0;
    }
   
</style>