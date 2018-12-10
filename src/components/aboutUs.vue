<template>
  <el-row class="rowWidth" style="width: 80%;margin: 0 auto;background-color: #fff">
    <el-col :span="5">
      <div style="background-color: #C2985B;line-height: 36px;text-indent:20px;padding: 20px;color: #fff">
        <p style="font-size: 30px;">
          {{navNameCn}}
        </p>
        <p>
          {{navName}}
        </p>
      </div>
      <ul class="detailsList">
        <li>
          <el-button type="text" @click="currentNavSet('aboutUs')">
            <span>公司简介</span>
          </el-button>
        </li>
        <li>
          <el-button type="text" @click="currentNavSet( 'culture')">
            <span>企业文化</span>
          </el-button>
        </li>
        <li>
          <el-button type="text" @click="currentNavSet('contact')">
            <span>联系我们</span>
          </el-button>
        </li>
      </ul>
    </el-col>
    <el-col :span="19" style="background-color: #f5f5f5;padding: 20px">
      <el-row style="border-bottom: 1px solid #c8c8c8">
        当前位置：
        <router-link
          :to="{name:'home'}">
          <el-button type="text" size="medium">
            <span>首页</span>
          </el-button>
        </router-link>
        >{{navNameCn}}
      </el-row>
      <el-row v-if="currentNav === 'aboutUs'" class="aboutUs" style="line-height: 42px;">
        <p>
          中山市康正木门厂是一家集设计、生产、销售中高档原木烤漆门、橡木烤漆门、木皮烤漆门、转印烤漆门、环保强化门、环保免漆门等系列产品为一体的中型专业木门企业。公司拥有现代化的生产设备，雄厚的技术力量，完善的配套设施，年产各烤漆套装门5万套以上，免漆套装门8万套以上。公司秉承“立足中国，走向全球”的经营理念，坚持市场需求为导向，产品创新为手段，顾客满意为目标。自成立以来，不断开拓国内市场，同时还打开了欧美市场。公司以“诚信、精细、和谐、共赢”为宗旨，建立了以“客户服务部”为主体的客户服务体系，组建了热忱、细致、体贴服务的精干团队，实现了对客户的产前、产中、产后的优质服务，受到了合作伙伴的赞誉；建立了严密的品质管理体系，制定了高标准的产品质量标准，严格的质量检验制度，采取了从材料、工序自检返检到成品进行了严格的一环扣一环，层层把关的质量检验措施，建立了科学的、严密的质量监控系统，实现了产品品质的稳定和提升，受到了广大消费者的好评。公司实施了品牌和可持续发展的战略。坚持“决策科学化；管理正规
        </p>
      </el-row>
      <el-row v-if="currentNav === 'culture'" class="aboutUs" style="line-height: 42px;">
        <p>
          公司文化(暂无）
        </p>
      </el-row>
      <el-row v-if="currentNav === 'contact'" class="aboutUs" style="font-size:12px;line-height: 20px;">
        <baidu-map id="map" ak="ahHFRlQhQBowNeG00CuOpojLbrURTcFs" :center="center" :zoom="zoom" @ready="handler" :scroll-wheel-zoom="true">
          <!--<bm-info-window :position="markerPoint" :show="infoWindow.show" title="中山市顾德木业有限公司" :width="250" :offset="infoWindow.offset">-->
            <!--<p v-text="infoWindow.contents" style="text-indent: 0em;"></p>-->
          <!--</bm-info-window>-->
          <my-overlay
            :position="markerPoint"
            :text="infoWindow.contents">
          </my-overlay>
          <bm-marker :position="markerPoint" :dragging="false">
          </bm-marker>
        </baidu-map>
        <p>公司名字：中山市顾德木业有限公司</p>
        <p>地 址：广东省中山市东升镇丽城一路20号首层第二卡</p>
        <p>电 话：0760-22825383</p>
        <p>刘经理：18125206530</p>
        <p>传 真 ：0760-22825391</p>
        <p> 邮 编 ：528400</p>
        <p>E-mail ：1161707904@qq.com</p>
      </el-row>
    </el-col>
  </el-row>

</template>

<script>
import {BaiduMap, BmMarker, BmInfoWindow, BmOverlay} from 'vue-baidu-map'
import MyOverlay from './MyOverlay.vue'
// import BmMaker from 'vue-baidu-map'
export default {
  name: 'aboutUs',
  components: {
    BaiduMap,
    BmMarker,
    BmInfoWindow,
    BmOverlay,
    MyOverlay
  },
  data () {
    return {
      currentNav: 'aboutUs',
      center: {lng: 0, lat: 0},
      markerPoint: {lng: 113.28721, lat: 22.646339},
      zoom: 3,
      infoWindow: {
        show: true,
        contents: '广东省中山市东升镇丽城一路20号首层第二卡',
        offset: {
          width: -20,
          height: -20
        }
      }
    }
  },
  computed: {
    navName () {
      return this.$store.state.navName
    },
    navNameCn () {
      return this.$store.state.navNameCn
    }
  },
  methods: {
    handler ({BMap, map}) {
      let _this = this
      _this.center.lng = 113.28721
      _this.center.lat = 22.646339
      _this.zoom = 14
    },
    currentNavSet (currentNav) {
      let _this = this
      _this.currentNav = currentNav
    }
  }
}
</script>

<style scoped>
.aboutUs {
  font-size: 20px;
  line-height: 36px;
  text-indent: 2em;
  padding: 30px;
}
.el-button{
  font-size: 12px;
  color: #37364d;
}
.el-button:hover{
  color: #C2985B;
}
  #map{
    width: 100%;
    height: 400px;
  }
</style>
