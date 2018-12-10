<template>
  <el-row>
    <el-row class="box1" style="height: 437px;">
      <div style="margin-top: 30px;margin-bottom: 60px;font-size: 20px;">企业文化</div>
      <el-row>
        <el-col :span="10" style="text-align: center;">
          <img src="../assets/door2.jpg">
        </el-col>
        <el-col :span="14">
          <div style="text-align: left;font-size: 12px;line-height: 30px;padding-right: 60px">
            <p style="font-size: 24px;line-height: 30px">
              中山市康正木门厂
            </p>
            <p>
              中山市康正木门厂是一家集设计、生产、销售中高档原木烤漆门、橡木烤漆门、木皮烤漆门、转印烤漆门、环保强化门、环保免漆门等系列产品为一体的中型专业木门企业。公司拥有现代化的生产设备，雄厚的技术力量，完善的配套设施，年产各烤漆套装门5万套以上，免漆套装门8万套以上。公司秉承“立足中国，走向全球”的经营理念，坚持市场需求为导向，产品创新为手段，顾客满意为目标。自成立以来，不断开拓国内市场，同时还打开了欧美市场。公司以“诚信、精细、和谐、共赢”为宗旨，建立了以“客户服务部”为主体的客户服务体系，组建了热忱、细致、体贴服务的精干团队，实现了对客户的产前、产中、产后的优质服务，受到了合作伙伴的赞誉；建立了严密的品质管理体系，制定了高标准的产品质量标准，严格的质量检验制度，采取了从材料、工序自检返检到成品进行了严格的一环扣一环，层层把关的质量检验措施，建立了科学的、严密的质量监控系统，实现了产品品质的稳定和提升，受到了广大消费者的好评。公司实施了品牌和可持续发展的战略。坚持“决策科学化；管理正规
            </p>
          </div>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="box1" style="background: none;">
      <div style="margin-top: 30px;font-size: 20px;">产品介绍</div>
      <el-col :span="8" class="rowMarginTop">
        <div class="productItem">
          <img src="../assets/img1.png">
          <p>XXX木门</p>
        </div>
      </el-col>
      <el-col :span="8" class="rowMarginTop">
        <div class="productItem">
          <img src="../assets/img1.png">
          <p>XXX木门</p>
        </div>
      </el-col>
      <el-col :span="8" class="rowMarginTop">
        <div class="productItem">
          <img src="../assets/img1.png">
          <p>XXX木门</p>
        </div>
      </el-col>
    </el-row>
    <el-row class="newsTitle">
      <div style="margin-top: 30px;margin-bottom: 60px;font-size: 20px;">新闻中心</div>
      <el-row class="newsItem">
        <el-col :span="6" class="newsDate">
          <p style="margin:0;height: 40px;">16</p>
          <p style="margin:0;height: 40px;">2018-10</p>
        </el-col>
        <el-col :span="18">
          <p style="font-weight: bold;">康正教您如何让保养木门</p>
          <p>木门风格:
            欧式复古风格、简约现代风格、美式风格、地中海风格、中式风格、法式浪漫风格、意大利风格。
            木门分类：
            1、复合门
            实木复合门的门芯多以松木、杉木或进口填充材料等粘合而...</p>
        </el-col>
      </el-row>
      <el-row class="newsItem">
        <el-col :span="6" class="newsDate">
          <p style="margin:0;height: 40px;">16</p>
          <p style="margin:0;height: 40px;">2018-10</p>
        </el-col>
        <el-col :span="18">
          <p style="font-weight: bold;">康正教您如何让保养木门</p>
          <p>木门风格:
            欧式复古风格、简约现代风格、美式风格、地中海风格、中式风格、法式浪漫风格、意大利风格。
            木门分类：
            1、复合门
            实木复合门的门芯多以松木、杉木或进口填充材料等粘合而...</p>
        </el-col>
      </el-row>
      <el-row class="newsItem">
        <el-col :span="6" class="newsDate">
          <p style="margin:0;height: 40px;">16</p>
          <p style="margin:0;height: 40px;">2018-10</p>
        </el-col>
        <el-col :span="18">
          <p style="font-weight: bold;">康正教您如何让保养木门</p>
          <p>木门风格:
            欧式复古风格、简约现代风格、美式风格、地中海风格、中式风格、法式浪漫风格、意大利风格。
            木门分类：
            1、复合门
            实木复合门的门芯多以松木、杉木或进口填充材料等粘合而...</p>
        </el-col>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: 'home',
  methods: {
    init () {
      sessionStorage.setItem('navName', 'home')
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.init()
    })
  }
}
</script>

<style scoped>

  .rowMarginTop{
    margin-top: 20px;
  }
  .box1{
    text-align: center;
    width: 100%;
    margin: 0 auto;
    background: url('../assets/box1_bj.jpg');
    background-size: 100%;
  }
  .productItem{
    width: 70%;
    margin: 30px auto;
    border: 1px solid transparent;
    box-shadow: transparent 5px 5px 5px;
    transition: 1s;
    -moz-transition: 1s;
    -webkit-transition: 1s;
    -o-transition: 1s;
  }
  .productItem:hover{
    box-shadow: #555555 5px 5px 5px ;
    border: 1px solid #A25D04;
  }
  .productItem p{
    margin: 10px 0;
  }
  .exampleTitle{
    text-align: center;
    background-image: url('../assets/box4_t.jpg');
    background-position: center;
    background-repeat: no-repeat;
    height: 118px;
    font-size: 20px;
    line-height: 118px
  }
  .newsTitle{
    text-align: center;
    height: 500px;
    background-image: url('../assets/img5.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .newsDate{
    text-align: center;
    font-weight: bold;
    line-height: 40px;
    width: 80px;
    color: #fff;
    background-color: #A25D04;
    height: 80px;
    margin-right: 20px;
  }
  .newsItem{
    text-align: left;
    width: 50%;
    margin: 30px auto;
  }
</style>
