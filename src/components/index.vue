<template>
  <el-container id="home">
    <el-header class="header" style="padding: 0" height="115px">
      <header-container></header-container>
    </el-header>
    <el-main style="padding: 0">
        <el-row style="width: 100%;">
            <el-carousel :interval="4000" arrow="hover" height="600px" style="width: 100%;background-color: rgba(1,1,1,0);text-align: center">
              <el-carousel-item>
                <img src="../assets/banner1.jpg" height="600px" width="100%">
              </el-carousel-item>
              <el-carousel-item>
                <img src="../assets/banner2.jpg" height="600px" width="100%">
              </el-carousel-item>
              <el-carousel-item>
                <img src="../assets/banner3.jpg" height="600px" width="100%">
              </el-carousel-item>
            </el-carousel>
        </el-row>
        <keep-alive :exclude="['home']">
          <router-view/>
        </keep-alive>
      </el-main>
    <el-footer style="background-color: #000" height="137px">
      <el-row style="line-height: 137px;width: 80%;margin: 0 auto;color: #fff">
        <el-col :span="4">全国热线：13392921526 </el-col>
        <el-col :span="5">地址：中山市东升镇长和路79号第二座第一卡</el-col>
        <el-col :span="5">E-mail：gsmy168@126.com</el-col>
        <el-col :span="10">互联网ICP备案：粤ICP备17121098号 版权所有 © 中山市康正木门有限公司</el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
import HeaderContainer from './header-container'
export default {
  components: { HeaderContainer },
  name: 'home',
  data () {
    return {
      msg: 'home'
    }
  },
  methods: {

  },
  beforeRouteLeave (to, from, next) {
    this.$destroy()
    sessionStorage.removeItem('changePwdFormVisible')
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #home{
    width: 100%;
  }
  .el-header{
    padding: 0;
    border-bottom: 1px solid #D9D9D9;
    background-color: #fff;
  }
  /*.el-main{*/
    /*background: url("../assets/body.jpg") center repeat-y;*/
    /*background-size: 100%;*/
    /*background-color: #737373;*/
  /*}*/

  .el-footer{
    background: url("../assets/nav.jpg") repeat;
  }

</style>
