<template>
  <div class="canvas-tab">
    <div class="tab-header">
      <div class="tab-header-item">1</div>
      <div class="tab-header-item">2</div>
    </div>
    <div class="tab-content">
      <div class="tab-content-item palette" @click="setStrokeStyle('#FFA500')"></div>
      <div class="tab-content-item brush" @click="setLineWidth(2)"></div>
      <div class="tab-content-item bucket" @click="fillCanvas"></div>
      <div class="tab-content-item pen" @click="setLineCap('square')"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tab',

  methods: {
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
.canvas-tab {position:fixed;width:120px;height:inherit;z-index: 4;background: #ECEFF1;padding:3px;box-shadow: 1px 1px #888888;
  -ms-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
.tab-header { padding-bottom: 15px; margin-bottom: 15px; border-bottom: 1px solid #48787D }
.tab-header-item, .tab-content-item {display:inline-block;width: 45px; height: 45px;box-shadow: 1px 1px #888888;cursor: pointer;margin:2px;}
.tab-content-item {background: url(../../../static/ico/canvas-items.png) no-repeat #f0fff0;background-size: 500%;}
.tab-content-item.bucket {background-position: -1.5% 30%;}
.tab-content-item.palette {background-position: 68% 30%;}
.tab-content-item.pen {background-position: 101% 30%;background-size: 490%;}
.tab-content-item.brush {background-position: 34% 30%;background-size: 490%;}
</style>
