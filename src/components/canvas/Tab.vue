<template>
  <div class="canvas-tab">
    <div class="tab-header">
      <div class="tab-header-item">1</div>
      <div class="tab-header-item">2</div>
    </div>
    <div class="tab-content">
      <cp @pickColor="setStrokeStyle" ref="colorPicker"/>
      <div class="tab-content-item palette" @click="openColorPicker"></div>
      <div class="tab-content-item brush" @click="setLineWidth(2)"></div>
      <div class="tab-content-item bucket" @click="fillCanvas"></div>
      <div class="tab-content-item pen" @click="setLineCap('square')"></div>
    </div>
  </div>
</template>

<script>
import ColorPicker from './ColorPicker'

export default {
  name: 'Tab',

  components: {
    cp: ColorPicker
  },

  methods: {
    openColorPicker () {
      this.$refs.colorPicker.open()
    },

    setLineWidth (value) {
      this.$emit('setLineWidth', value)
    },

    setLineCap (value) {
      this.$emit('setLineCap', value)
    },

    setStrokeStyle (value) {
      this.$emit('setStrokeStyle', value)
    },

    setFillStyle (value) {
      this.$emit('setFillStyle', value)
    },

    fillCanvas () {
      this.$emit('fillCanvas')
    }
  }
}
</script>

<style scoped>
.canvas-tab {width:inherit;height:60px;background: #ECEFF1;padding:3px;box-shadow: 1px 1px #888888;display:flex;}
/*.canvas-tab {-ms-user-select: none;-khtml-user-select: none;-webkit-user-select: none;user-select: none;}*/
.tab-header, .tab-content {padding: 5px 0 5px 0}
.tab-header { border-right: 1px solid #48787D;padding: 5px 20px 5px 5px; margin-right:15px;}
.tab-header-item, .tab-content-item {display:inline-block;width: 45px; height: 45px;background-repeat: no-repeat; background-color:  #f0fff0;box-shadow: 1px 1px #888888;cursor: pointer;margin-left:5px;}
.tab-content-item {background-image: url(../../../static/ico/canvas-items.png); background-size: 500%;}
.tab-content-item.bucket {background-position: -1.5% 30%;}
.tab-content-item.palette {background-position: 68% 30%;}
.tab-content-item.pen {background-position: 101% 30%;background-size: 490%;}
.tab-content-item.brush {background-position: 34% 30%;background-size: 490%;}
</style>
