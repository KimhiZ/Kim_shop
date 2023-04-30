<template>
<div class="mui-content">
    <!-- <h1>shop</h1> -->
   <div class="mui-card"  id="list" v-for="(goods,index) in list" :key="goods.id" v-show="flag">
				<ul class="mui-table-view">
                    <mt-switch v-model="goods.value"></mt-switch>
					<li class="mui-table-view-cell mui-media">
                        
						<a>
							<img class="mui-media-object mui-pull-left" :src="goods.src">
							<div class="mui-media-body">
								<h1>{{goods.name}}</h1>
								<p class="mui-ellipsis">￥{{goods.price}}</p>
							</div>
                            <button type="button" class="mui-btn mui-btn-danger" style="float:right;margin-top:30px;" @click.prevent="del(goods.id)">删除</button>
						</a>
					</li>
				</ul>
			</div>
    <div v-show="!flag" style="text-align:center;margin-top:70%;"><h5 style="font-size:18px;">请先登录</h5></div>
    <div class="payy">
        <ul class="mui-table-view" style="height:60px;">
			<li>
                <div class="total"><p>合计:<span class="col">￥{{total}}</span></p></div>
                <button type="button" class="mui-btn mui-btn-danger mui-btn-block pay" style="">结算</button>
				<!-- <div class="pay"><h3>结算</h3></div> -->
			</li>
		</ul>
    </div>
</div>
</template>


<script type="text/javascript">
import { Toast } from "mint-ui";
import { setCookie,getCookie,delCookie } from '../../lib/public/cookie.js'
import { MessageBox } from 'mint-ui';
    export default{
        data(){
            return{
                total:'',
                flag:'',
                list:[
                    {id:1,src:"./images/shop/1.jpg",name:"Nike Air Flightposite",price:1199,value:true,},
                    {id:2,src:"./images/shop/2.jpg",name:"Supreme X The North Face 联名 皮质旅行袋",price:6899,value:true,},
                    {id:3,src:"./images/shop/3.jpg",name:"Levi’s ® X SUPER MARIO™ 联名系列男士短袖T恤",price:299,value:true,},
                    {id:4,src:"./images/shop/3.jpg",name:"Levi’s ® X SUPER MARIO™ 联名系列男士短袖T恤",price:299,value:true,},
                ]
            }
        },
        computed: {
            wa(){
            this.list.forEach(function(v,i){
                if(v.value){
                    console.log("1")
                }else{
                    console.log("0")
                }
            })}
         },
        created(){
            this.count()
        },
        mounted(){
			let uname=getCookie('username')
			this.name=uname
			if(uname==""){
                this.flag=false
                this.total=0  
			}else{
                this.flag=true
			}
		},
           methods:{
             del(id) {
                 MessageBox.confirm('是否删除该商品？').then(action => {
                    var index = this.list.findIndex(goods => {
                           if (goods.id == id) {
                            return true;
                        }
                    })
                    this.list.splice(index, 1)
                    });
                },
              count(){
                var totalPrice = 0;
                this.list.forEach(function (val,index) {
                    if(val.value){
                        totalPrice += val.price; 
                    }else{
                        val.price=0
                        totalPrice+=val.price
                    }
                    
                    });
                    // console.log(totalPrice)
                this.total =parseFloat(totalPrice);}
    },
    
      
    }
    // mui('.mui-switch')['switch']()
//    var isActive = document.getElementById("mySwitch").classList.contains("mui-active");

</script>


<style lang="scss" scoped>
.app-content{
    height:100%;
}
 .mui-content{
        height:100%;
        margin-bottom:134px;
    }
.mui-card{
    height:120px;
}
.mint-switch{
    float:left;
    margin:40px 0 0 5px;
}
    .mui-table-view{
        .mui-media-body{
            width:68%;
            height:100px;
            white-space:normal;
        }
        li{
            h1{
                font-size:15px;
            }
            .mui-ellipsis{
                color:red;
                width:100px;
               
                font-size: 18px;
                font-weight:bold;
                float:left;
            }
            .pay{
                width:100px;
                float:right; 
                height:50px;
                margin:4px 10px 0 0;
                border-radius:25px;
                font-size:24px;
                line-height:0;
            }
        }
        .mui-media-object{
                max-width:100px;
                height:100px;
                line-height:100px;
            }
    }
   .payy{
        left: 0;
	    position: fixed;
        bottom: 48px;
        width: 100%;
        z-index: 999;

   }
    .total{
        width: 140px;
        height: 60px;
        display:inline-block;
        // float: left;
        margin-left:10px;
        p{
            display:inline;
            line-height:60px;
            font-size:20px;
        }
        .col{
            color:red;
            font-size:22px;
            font-weight:bold;
        }
    }
</style>