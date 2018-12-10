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
          <el-button type="text" @click="currentNavSet('gallery')">
            <span>豪华原木门系列</span>
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
      <el-row v-if="currentNav === 'gallery'" class="aboutUs" style="line-height: 42px;">
        <ul>
          <li>
            <div>
              <img src="../assets/gallery/door2.jpg" alt="">
            </div>
            <p>xx木門</p>
          </li>
          <li>
            <div><img src="../assets/gallery/door2.jpg" alt=""></div>
            <p>xx木門</p>
          </li>
          <li>
            <div><img src="../assets/gallery/door2.jpg" alt=""></div>
            <p>xx木門</p>
          </li>
          <li>
            <div><img src="../assets/gallery/door2.jpg" alt=""></div>
            <p>xx木門</p>
          </li>
          <li>
            <div><img src="../assets/gallery/door2.jpg" alt=""></div>
            <p>xx木門</p>
          </li>
          <li>
            <div><img src="../assets/gallery/door2.jpg" alt=""></div>
            <p>xx木門</p>
          </li>
          <li>
            <div><img src="../assets/gallery/door2.jpg" alt=""></div>
            <p>xx木門</p>
          </li>
          <li>
            <div><img src="../assets/gallery/door2.jpg" alt=""></div>
            <p>xx木門</p>
          </li>
        </ul>
      </el-row>
    </el-col>
  </el-row>

</template>

<script>
export default {
  name: 'case',
  data () {
    return {
      currentNav: 'gallery'
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
    currentNavSet (currentNav) {
      let _this = this
      _this.currentNav = currentNav
    }
  }
}
</script>

<style scoped>
  .aboutUs li{
    float: left;
    cursor: pointer;
    text-align: center;
  }
  .aboutUs li div{
    width: 218px; height: 218px;
    border: 1px solid transparent;
  }
  .aboutUs li div:hover{
    border: 1px solid #C2985B;
  }
  .aboutUs li img{
    width: 218px;
    height: 218px;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
  }
  .product{
    padding: 30px;
  }
  .el-button{
    font-size: 12px;
    color: #37364d;
  }
  .el-button:hover{
    color: #C2985B;
  }
</style>
