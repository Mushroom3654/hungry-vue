<template>
  <div class="canvas-drawer">
    <div class="btnArea">

    </div>
    <div class="content-area">
      <kb-canvas ref="canvas"/>
    </div>
    <div class="bottom-btnArea">
      <button class="btn blue" @click="download">이미지 다운로드</button>
      <button class="btn blue" @click="clearCanvas">초기화</button>
    </div>
  </div>
</template>

<script>
import Canvas from '../../../components/canvas/Canvas'

export default {
  name: 'CanvasDraw',

  components: {
    kbCanvas: Canvas
  },

  data () {
    return {
      img: null
    }
  },

  methods: {
    download () {
      this.$refs.canvas.download()
    },

    clearCanvas () {
      this.$refs.canvas.clearCanvas()
    },

    convertToBase64 (img) {
      let fr = new FileReader()
      fr.onload = function (e) {
        console.log(this.img)
        this.img = e.target.result
        console.log(this.img)
      }
      fr.readAsDataURL(img)
    }
  }
}
</script>

<style scoped>
.bottom-btnArea {text-align: left;margin:10px}
.btn.blue{padding:15px;border:1px solid #48cae4;background: #48cae4;color:white}
.btn.blue:hover{background: #0077b6;}
</style>
