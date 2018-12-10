<template>
  <el-row id="head">
    <el-col :span="10" :offset="2">
      <div class="logo">
        <img src="../assets/logo.png" height="90px" style="margin: 13px 0 12px 0">
      </div>
    </el-col>
    <el-col :span="12">
      <div style="font-size: 28px;text-align: right;color: #A25D04">
        <el-row class="navBar">
          <el-col :span="4" :offset="2">
            <router-link
              :to="{name:'home'}">
              <el-button class="navBtn" type="text" size="medium">
                <span>网站首页</span>
              </el-button>
            </router-link>
          </el-col>
          <el-col :span="4">
            <router-link
              :to="{name:'news',
                params:{
                  navName:'news'
                }}">
              <el-button class="navBtn" type="text" size="medium" @click="navNameSave('news')">
                <span>新闻动态</span>
              </el-button>
            </router-link>
          </el-col>
          <el-col :span="4">
            <router-link
              :to="{name:'product',
                params:{
                  navName:'product'
                }}">
              <el-button class="navBtn" type="text" size="medium" @click="navNameSave('product')">
                <span>产品展示</span>
              </el-button>
            </router-link>
          </el-col>
          <el-col :span="4">
            <router-link
              :to="{name:'case',
                params:{
                  navName:'case'
                }}">
              <el-button class="navBtn" type="text" size="medium" @click="navNameSave('case')">
                <span>案例展示</span>
              </el-button>
            </router-link>
          </el-col>
          <el-col :span="4">
            <router-link
              :to="{
                name:'aboutUs',
                params:{
                  navName:'aboutUs'
                }
              }">
              <el-button class="navBtn" type="text" size="medium" @click="navNameSave('aboutUs')">
                <span>关于我们</span>
              </el-button>
            </router-link>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'header-container',
  data () {
    return {
    }
  },
  methods: {
    navNameSave (navName) {
      this.$store.dispatch('setNavName', navName)
      window.scrollTo(0, 660)
    }
  }
}
</script>

<style scoped>
#head{
  height: 115px;
  line-height: 115px;
  /*background-size: cover;*/
  /*background-image: url(../assets/top.jpg)*/
}
.logo{
  width: 219px;
  height: 115px;
  cursor: pointer;
  text-align: center;
}
.navBar{
  text-align: center;
  line-height: 115px;
  height: 37px;
}
.navBar .navBtn{
  font-size: 16px;
  color: #000;
  opacity: 0.8;
}
.navBar .navBtn:hover{
  font-size: 16px;
  color: #C2985B;
  opacity: 0.8;
}
</style>
