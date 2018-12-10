<template>
  <bm-overlay
    ref="customOverlay"
    class="myOverlay"
    pane="labelPane"
    @draw="draw">
    <div style="text-align:left;padding: 10px;width: 200px;border: 1px solid #c8c8c8;background-color: #fff">
      <h5 style="margin: 0">中山市顾德木业有限公司</h5>
      <p style="text-indent: 0;word-break: break-all">{{text}}</p>
      <div style="position:absolute;bottom:-29px;left:144px;margin: 0 auto;border: 15px solid transparent;border-top: 15px solid #ffffff">
        <div style="position:absolute;top:-15px;left:-17px;z-index:-199;margin: 0 auto;border: 17px solid transparent;border-top: 17px solid #c8c8c8">
        </div>
      </div>
    </div>
  </bm-overlay>
</template>

<script>
import {BmOverlay} from 'vue-baidu-map'
export default {
  name: 'my-overlay',
  components: {
    BmOverlay
  },
  props: ['text', 'position', 'active'],
  data () {
    return {
      positionProp: this.position
    }
  },
  watch: {
    position: {
      handler () {
        this.$refs.customOverlay.reload()
      },
      deep: true
    }
  },
  methods: {
    handleClick () {
      global.alert('Well done.')
    },
    draw ({el, BMap, map}) {
      let _this = this
      const {lng, lat} = _this.positionProp
      const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat))
      el.style.left = pixel.x - 160 + 'px'
      el.style.top = pixel.y - 130 + 'px'
      console.log(el.style.left)
    }
  }
}
</script>

<style scoped>
.myOverlay{
  position: absolute;
}
</style>
