<template>
  <div class="app-container">
  <!-- header -->
<mt-header fixed title="K ! M · Shop" style="background-color:#000">
	<span slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
      <mt-button slot="right" icon="more" v-show="flag"></mt-button>
</mt-header>
  <!-- router-view -->
	<transition>
		<router-view></router-view>
	</transition>

  <!-- tabbar -->
<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-cc" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-cc" to="/category">
				<span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
				<span class="mui-tab-label">分类</span>
			</router-link>
			<router-link class="mui-tab-item-cc" to="/discovery">
				<span class="mui-icon mui-icon-navigate"></span>
				<span class="mui-tab-label">发现</span>
			</router-link>
			<router-link class="mui-tab-item-cc" to="/shopcar">
				<span class=" mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">4</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-cc" to="/my">
				<span class="mui-icon mui-icon-person-filled"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>

   
  </div>

</template>

<script>
export default {
data() {
    return {
      flag: false
    };
  },
  created() {
    this.flag = this.$route.path === "/home" ? false : true;
  },
  methods: {
    goBack() {
      // 点击后退
      this.$router.go(-1);
    }
  },
  watch: {
    "$route.path": function(newVal) {
      if (newVal === "/home") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.mui-bar .mui-bar-tab{
  position:fixed;
  bottom:0;
  z-index:999;
}
.mui-bar-tab .mui-tab-item-cc {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-cc .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-cc .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
    .app-container{
      padding-top:40px;
			overflow-x:hidden;
			//margin-bottom:60px;
	  	// position:absolute;
    }
		.v-enter{
			opacity:0;
			transform:translateX(100%);
		}
		.v-leave-to{
			opacity:0;
			transform:translateX(-100%);
			position:absolute;
			z-index:2;
		}
		.v-enter-active,
		.v-leave-active{
			transition:all 0.5s ease;
		}
		.mui-bar-tab .mui-tab-item-cc.mui-active {
    color: #007aff;
}

</style>
