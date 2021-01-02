<template>
  <div class="canvas-drawer">
    <div class="btnArea">

    </div>
    <div class="content-area">
      <drawer @getImage="getImage"/>
    </div>
    <div class="bottom-btnArea">
      <button class="btn blue" @click="downloadImage">이미지 다운로드</button>
    </div>
  </div>
</template>

<script>
import Drawer from '../../../components/Drawer'

export default {
  name: 'CanvasDraw',

  components: {
    drawer: Drawer
  },

  data () {
    return {
      img: null
    }
  },

  methods: {
    getImage (img) {
      this.img = img
    },

    downloadImage () {
      let a = document.createElement('a')
      a.href = this.img
      a.download = 'draw_image'
      a.click()
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
.content-area{height:60%}
.bottom-btnArea {text-align: left;margin:10px}
.btn.blue{padding:15px;border:1px solid #48cae4;background: #48cae4;color:white}
.btn.blue:hover{background: #0077b6;}
</style>
