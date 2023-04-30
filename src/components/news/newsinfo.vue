<template>
<div class="newsinfo-container">
  <h3 class="title">新闻标题</h3>
  <p class="subtitle">
    <span>发表时间：{{this.ti}}</span>
  </p>
  <hr>
  <div class="content">{{this.content}}<br><img :src="this.src1" style="width:70%;" /></div>
  
  <!-- 评论区-->
  <comment-box></comment-box>
</div>
</template>


<script>
	import comment from '../subcomponents/comment.vue'
export default {
  data() {
    return {
      id:this.$route.params.id,
      content:'',
      ti:'',
      src1:'',
      list:[{id:1,con:"没有完美的个人，只有完美的团队 团队精神是企业文化的核心 强化竞争意识，营造团队精神，培育合作员工，创造合作团队 同心才能走得更远，同德才能走得更近，成就团队辉煌，助我人生成长 团结共进，众志成城 诚信高效、服务...",time:"2020-05-22 02:02:11",src:"../../../images/news/1.jpg"},{id:2,con:"团队是指一种为了实现某一目标而由相互协作的个体所组成的正式群体。是由员工和管理层组成的一个共同体，它合理利用每一个成员的知识和技能协同工作，解决问题，达到共同的目标。",time:"2020-05-2 22:06:11",src:"../../../images/news/2.jpg"},{id:3,con:"团队应该有一个既定的目标，为团队成员导航，知道要向何处去，没有目标这个团队就没有存在的价值。",time:"2020-05-22 14:06:34",src:"../../../images/news/3.jpg"},{id:4,con:"有多少教科书就有多少种关于团队的解释，这里把团队定义为：团队是由员工和管理层组成的一个共同体，有共同理想目标，愿意共同承担责任，共享荣辱，在团队发展过程中，经过长期的学习、磨合、调整和创新，形成主动、高效、合作且有创意的团体，解决问题，达到共同的目标。",time:"2020-05-23 09:02:33",src:"../../../images/news/4.jpg"},{id:5,con:"团队的定位，团队在企业中处于什么位置，由谁选择和决定团队的成员，团队最终应对谁负责，团队采取什么方式激励下属? 个体的定位，作为成员在团队中扮演什么角色?是订计划还是具体实施或评估?",time:"2020-05-26 12:02:41",src:"../../../images/news/5.jpg"}]
    }
  },
  created(){
    this.getnews()
  },
  methods:{
    //           categorystr += c.category + ","
    //           classifystr += c.classify + ","
    //         });
    //         categorystr = categorystr.substring(0,categorystr.length-1)
    //         classifystr = classifystr.substring(0,classifystr.length-1)
    //         this.categoryList = categorystr.split(",")
    //         this.classifystr = classifystr.split(",")
    getnews(){
      let id=this.id
      var content=""
      var time=""
      var src1=""
      this.list.forEach(function (val,index) {
        if(val.id=id){
         content+=val.con+","
         time+=val.time+","
          src1+=val.src+","
        }else{}
        
     });
     var cont=content.split(",")
        var ti1=time.split(",")
        var src2=src1.split(",")
        // console.log(cont[id-1],ti1[id-1],src2[id-1])
        this.content=String(cont[id-1])
        this.ti=String(ti1[id-1])
        this.src1=String(src2[id-1])
    }
  },
  components:{
	  'comment-box':comment
  }
}
</script>

<style lang="scss" scoped>
.newsinfo-container{
  padding:0 4px;
  .title{
    font-size:16px;
    text-align:center;
    margin:15px 0;
    color:red;
  }
  .subtitle{
    font-size:13px;
    color:#226aff;
  }
  .content{}
}
</style>