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
          <el-button type="text" @click="currentNavSet('hhym')">
            <span>豪华原木门系列</span>
          </el-button>
        </li>
        <li>
          <el-button type="text" @click="currentNavSet( 'xmcb')">
            <span>橡木池板门系列</span>
          </el-button>
        </li>
        <li>
          <el-button type="text" @click="currentNavSet('gyyx')">
            <span>工艺压线门系列</span>
          </el-button>
        </li>
        <li>
          <el-button type="text" @click="currentNavSet('hhbl')">
            <span>豪华玻璃门系列</span>
          </el-button>
        </li>
        <li>
          <el-button type="text" @click="currentNavSet('hhpd')">
            <span>豪华平雕门系列</span>
          </el-button>
        </li>
      </ul>
    </el-col>
    <el-col :span="19" style="min-height:600px;background-color: #f5f5f5;padding: 20px">
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
      <el-row v-if="currentNav === 'hhym'" class="products" style="line-height: 42px;">
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
      </el-row>
      <el-row v-if="currentNav === 'xmcb'" class="aboutUs" style="line-height: 42px;">
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
      </el-row>
      <el-row v-if="currentNav === 'gyyx'" class="aboutUs" style="line-height: 42px;">
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
      </el-row>
      <el-row v-if="currentNav === 'hhbl'" class="aboutUs" style="line-height: 42px;">
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
      </el-row>
      <el-row v-if="currentNav === 'hhpd'" class="aboutUs" style="line-height: 42px;">
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
        <el-col :span="6">
          <div>
            <img src="../assets/product/door1.jpg" alt="">
          </div>
          <p>xx木門</p>
        </el-col>
      </el-row>
    </el-col>
  </el-row>

</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      currentNav: 'hhym'
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
  .products li{
    float: left;
    margin: 3px;
    cursor: pointer;
    text-align: center;
  }
  .products li div{
    width: 218px; height: 218px;
    border: 1px solid transparent;
  }
  .products li div:hover{
    border: 1px solid #C2985B;
  }
  .products li img{
    width: 218px;
    height: 218px;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
  }
  .products{
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
