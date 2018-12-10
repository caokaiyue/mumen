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
          <el-button type="text">
            <span>行业新闻</span>
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
      <el-row class="news">
        <ul>
          <li>
            <el-row class="newsText" style="cursor: pointer">
              <el-col :span="20">
                <h3 style="border: none;color: #C2985B">康正木门解析什么是实木门？</h3>
                <p>
                  实木门取原木为主材做门芯，经过烘干处理，然后再经过下料、抛光、开榫、打眼等工序加工而成。 用实木加工制作的装饰门，有全木、半玻、全玻三种款式，从木材加工工艺上看有指接木与原木的两种，指接木是原木经锯切...
                </p>
              </el-col>
              <el-col :span="4">
                <p>[2018-11-11]</p>
              </el-col>
            </el-row>
          </li>
          <li>
            <el-row class="newsText" style="cursor: pointer">
              <el-col :span="20">
                <h3 style="border: none;color: #C2985B">康正木门解析什么是实木门？</h3>
                <p>
                  实木门取原木为主材做门芯，经过烘干处理，然后再经过下料、抛光、开榫、打眼等工序加工而成。 用实木加工制作的装饰门，有全木、半玻、全玻三种款式，从木材加工工艺上看有指接木与原木的两种，指接木是原木经锯切...
                </p>
              </el-col>
              <el-col :span="4">
                <p>[2018-11-11]</p>
              </el-col>
            </el-row>
          </li>
        </ul>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'news',
  computed: {
    navName () {
      return this.$store.state.navName
    },
    navNameCn () {
      return this.$store.state.navNameCn
    }
  }
}
</script>

<style scoped>
.news{
  padding: 30px;
}
.newsText{
  padding: 20px 0;
  border-bottom: 1px solid #c8c8c8;
}
.newsText:hover{
  color: #C2985B
}
.el-button{
  font-size: 12px;
  color: #37364d;
}
.el-button:hover{
  color: #C2985B;
}
</style>
