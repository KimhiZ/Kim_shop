<template>
<div class="mui-card" style="margin-bottom: 35px;">
  <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
      <router-link :to="'/home/news/newsinfo/'+item.id">
        <img class="mui-media-object mui-pull-left" :src="item.src">
        <div class="mui-media-body">
          <h1>{{item.con}}</h1>
          <p class="mui-ellipsis">发表时间：{{item.time}}</p>
        </div>
      </router-link>
    </li>

  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      list: [{
        id: 1,
        con: "没有完美的个人，只有完美的团队 团队精神是企业文化的核心 强化竞争意识，营造团队精神，培育合作员工，创造合作团队 同心才能走得更远，同德才能走得更近，成就团队辉煌，助我人生成长 团结共进，众志成城 诚信高效、服务...",
        time: "2020-05-22 02:02:11",
        src: "../../../images/news/1.jpg"
      }, {
        id: 2,
        con: "团队是指一种为了实现某一目标而由相互协作的个体所组成的正式群体。是由员工和管理层组成的一个共同体，它合理利用每一个成员的知识和技能协同工作，解决问题，达到共同的目标。",
        time: "2020-05-2 22:06:11",
        src: "../../../images/news/2.jpg"
      }, {
        id: 3,
        con: "团队应该有一个既定的目标，为团队成员导航，知道要向何处去，没有目标这个团队就没有存在的价值。",
        time: "2020-05-22 14:06:34",
        src: "../../../images/news/3.jpg"
      }, {
        id: 4,
        con: "有多少教科书就有多少种关于团队的解释，这里把团队定义为：团队是由员工和管理层组成的一个共同体，有共同理想目标，愿意共同承担责任，共享荣辱，在团队发展过程中，经过长期的学习、磨合、调整和创新，形成主动、高效、合作且有创意的团体，解决问题，达到共同的目标。",
        time: "2020-05-23 09:02:33",
        src: "../../../images/news/4.jpg"
      }, {
        id: 5,
        con: "团队的定位，团队在企业中处于什么位置，由谁选择和决定团队的成员，团队最终应对谁负责，团队采取什么方式激励下属? 个体的定位，作为成员在团队中扮演什么角色?是订计划还是具体实施或评估?",
        time: "2020-05-26 12:02:41",
        src: "../../../images/news/5.jpg"
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.mui-media-body {
  width: 250px;
  height: 50px;
}

.mui-table-view-cell .mui-media {
  top: 0;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.mui-table-view {
  li {
    h1 {
      font-size: 15px;
    }

    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
    }
  }
}
</style>
