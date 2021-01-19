<template>
  <div v-show="isOpen" class="color-picker">
    <div class="color-picker-content">
      <label ref="colorLabel" class="color-label"></label>
      <canvas ref="colorBlock" class="color-picker-brightness"></canvas>
      <canvas ref="colorStrip" class="color-picker-chroma"></canvas>
    </div>
    <div class="bottom-btnArea">
      <label class="text-black">{{ hex }}</label>
      <button class="btn blue" @click="confirm">확인</button>
      <button class="btn blue" @click="close">취소</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorPicker',

  data () {
    return {
      isOpen: false,
      hex: '#ffffff'
    }
  },

  mounted () {
    this.initSetting()
  },

  beforeDestroy () {
    this.removeEvent()
  },

  methods: {
    open () {
      this.isOpen = true
      this.addEvent()
    },

    close () {
      this.isOpen = false
      this.removeEvent()
    },

    confirm () {
      this.$emit('pickColor', this.hex)
      this.close()
    },

    initSetting () {
      this.bt = this.$refs.colorBlock

      this.ctx1 = this.bt.getContext('2d')
      this.w1 = this.bt.width
      this.h1 = this.bt.height

      this.ch = this.$refs.colorStrip
      this.ctx2 = this.ch.getContext('2d')
      this.w2 = this.ch.width
      this.h2 = this.ch.height

      this.cl = this.$refs.colorLabel

      this.drag = false
      this.rgba = 'rgba(255, 0, 0, 1)'

      this.ctx1.rect(0, 0, this.w1, this.w2)
      this.fillGradient()

      this.ctx2.rect(0, 0, this.w2, this.h2)
      let grd1 = this.ctx2.createLinearGradient(0, 0, 0, this.h1)
      grd1.addColorStop(0, 'rgba(255, 0, 0, 1)')
      grd1.addColorStop(0.17, 'rgba(255, 255, 0, 1)')
      grd1.addColorStop(0.34, 'rgba(0, 255, 0, 1)')
      grd1.addColorStop(0.51, 'rgba(0, 255, 255, 1)')
      grd1.addColorStop(0.68, 'rgba(0, 0, 255, 1)')
      grd1.addColorStop(0.85, 'rgba(255, 0, 255, 1)')
      grd1.addColorStop(1, 'rgba(255, 0, 0, 1)')
      this.ctx2.fillStyle = grd1
      this.ctx2.fill()
    },

    fillGradient () {
      this.ctx1.fillStyle = this.rgba
      this.ctx1.fillRect(0, 0, this.w1, this.h1)

      let grdWhite = this.ctx2.createLinearGradient(0, 0, this.w1, 0)
      grdWhite.addColorStop(0, 'rgba(255, 255, 255, 1)')
      grdWhite.addColorStop(1, 'rgba(255, 255, 255, 0)')
      this.ctx1.fillStyle = grdWhite
      this.ctx1.fillRect(0, 0, this.w1, this.h1)

      let grdBlack = this.ctx2.createLinearGradient(0, 0, 0, this.h1)
      grdBlack.addColorStop(0, 'rgba(0, 0, 0, 0)')
      grdBlack.addColorStop(1, 'rgba(0, 0, 0, 1)')
      this.ctx1.fillStyle = grdBlack
      this.ctx1.fillRect(0, 0, this.w1, this.h1)
    },

    changeColor (e) {
      let x = e.clientX - this.bt.getBoundingClientRect().left
      let y = e.clientY - this.bt.getBoundingClientRect().top
      let imgData = this.ctx1.getImageData(x, y, 1, 1).data
      this.rgba = `rgba(${imgData[0]}, ${imgData[1]}, ${imgData[2]}, 1)`
      this.cl.style.backgroundColor = this.rgba
      this.hex = this.toHex(imgData)
    },

    toHex (color) {
      let hex = [0, 1, 2].map(e => { return this.byte_to_hex(color[e]) }).join('')
      return '#' + hex
    },

    byte_to_hex (byte) {
      return ('0' + byte.toString(16)).slice(-2)
    },

    addEvent () {
      this.ch.addEventListener('click', this.click, false)

      this.bt.addEventListener('mousedown', this.mousedown, false)
      this.bt.addEventListener('mouseup', this.mouseup, false)
      this.bt.addEventListener('mousemove', this.mousemove, false)
    },

    removeEvent () {
      this.ch.removeEventListener('click', this.click, false)

      this.bt.removeEventListener('mousedown', this.mousedown, false)
      this.bt.removeEventListener('mouseup', this.mouseup, false)
      this.bt.removeEventListener('mousemove', this.mousemove, false)
    },

    click (e) {
      let offset = this.ctx1.offset()
      let x = e.pageX - offset.left
      let y = e.pageY - offset.top
      let imgData = this.ctx2.getImageData(x, y, 1, 1).data
      this.rgba = `rgba(${imgData[0]}, ${imgData[1]}, ${imgData[2]}, 1)`
      this.fillGradient()
    },

    mousedown (e) {
      this.drag = true
      this.changeColor(e)
    },

    mousemove (e) {
      if (this.drag) this.changeColor(e)
    },

    mouseup (e) {
      this.drag = false
    }
  }
}
</script>

<style scoped>
.color-picker {
  position: absolute;top:30px;left: 180px;background-color: white;height: 228px;width: 280px;border: solid 1px #ccc;padding: 20px 20px 20px 20px;cursor: default;
}
.color-picker-content{ display:flex;margin:0 auto; }
.color-label {width:30px;height:150px;background-color: red;margin:0}
.color-picker-brightness {width:150px;height:150px;margin: 0 13px 0 13px}
.color-picker-chroma {width:30px;height:150px}
canvas:hover { cursor: crosshair; }
.bottom-btnArea {text-align: right;padding:10px 0 10px 10px;}
.bottom-btnArea button {-ms-user-select: none;-webkit-user-select: none;user-select: none;}
.btn.blue{padding:4px 8px 4px 8px;border:1px solid #48cae4;background: #48cae4;color:white}
.btn.blue:hover{background: #0077b6;}

.text-black {color: black}
</style>
