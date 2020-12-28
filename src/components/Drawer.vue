<template lang="html">
  <div class="canvas-wrap">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: 'Drawer',

  data () {
    return {
      canvas: null,
      ctx: null,
      coord: {
        x: 0,
        y: 0
      },
      paint: false,
      point: [],
      imgSrc: null
    }
  },

  mounted () {
    this.onload()
    this.addEvent()
  },

  beforeDestroy () {
    this.removeEvent()
  },

  methods: {
    onload () {
      this.canvas = document.getElementById('canvas')
      // this.$el.parentElement
      this.canvas.width = this.canvas.parentElement.offsetWidth || '200px'
      this.canvas.height = this.canvas.parentElement.offsetHeight || '400px'
      this.ctx = this.canvas.getContext('2d')
    },

    addEvent () {
      // desktop
      document.addEventListener('mousedown', this.mouseDown)
      document.addEventListener('mouseup', this.mouseUp)
      document.addEventListener('mousemove', this.mouseMove)
      // mobile
      this.canvas.addEventListener('touchstart', this.touchStart, false)
      this.canvas.addEventListener('touchend', this.touchEnd, false)
      this.canvas.addEventListener('touchmove', this.touchMove, true)
    },

    stopScroll (e) {
      if (e.target === this.canvas) e.preventDefault()
    },

    removeEvent () {
      document.removeEventListener('mousedown', this.mouseDown)
      document.removeEventListener('mouseup', this.mouseUp)
      document.removeEventListener('mousemove', this.mouseMove)

      this.canvas.removeEventListener('touchstart', this.touchStart, false)
      this.canvas.removeEventListener('touchend', this.touchEnd, false)
      this.canvas.removeEventListener('touchmove', this.touchMove, true)
    },

    touchStart (e) {
      this.paint = true
      this.stopScroll(e)
      this.getTouchPosition(e)
      this.ctx.beginPath()
      this.ctx.lineWidth = 5
      this.ctx.lineCap = 'round'
      this.ctx.strokeStyle = 'black'
    },

    touchMove (e) {
      if (!this.paint) return
      this.stopScroll(e)
      this.getTouchPosition(e)
      this.ctx.lineTo(this.coord.x, this.coord.y)
      this.ctx.stroke()
      this.getImage()
    },

    touchEnd (e) {
      this.paint = false
      this.stopScroll(e)
      this.ctx.closePath()
      this.$emit('getSign', this.imgSrc)
    },

    getTouchPosition (e) {
      this.coord.x = e.changedTouches[0].clientX - this.canvas.getBoundingClientRect().left
      this.coord.y = e.changedTouches[0].clientY - this.canvas.getBoundingClientRect().top
    },

    mouseDown (e) {
      this.paint = true
      this.ctx.beginPath()
      this.draw(e)
    },

    mouseMove (e) {
      if (!this.paint) return
      this.draw(e)
      this.getImage()
    },

    mouseUp (e) {
      this.paint = false
      this.ctx.closePath()
      // this.download()
      this.$emit('getImage', this.imgSrc)
    },

    getPosition (e) {
      this.coord.x = e.clientX - this.canvas.getBoundingClientRect().left
      this.coord.y = e.clientY - this.canvas.getBoundingClientRect().top
    },

    draw (e) {
      this.ctx.lineWidth = 5
      this.ctx.lineCap = 'round'
      this.ctx.strokeStyle = 'black'
      this.getPosition(e)
      this.ctx.lineTo(this.coord.x, this.coord.y)
      this.ctx.stroke()
    },

    getImage () {
      this.imgSrc = this.canvas.toDataURL()
      // this.canvas.toBlob(blob => {
      //   this.imgSrc = window.URL.createObjectURL(blob)
      // }, 'image/jpg')
    },

    download () {
      const img = new Image()
      // this.imgSrc.replace('image/png', 'image/octet-stream')
      img.src = this.imgSrc
    }
  }
}
</script>

<style scoped>
.canvas-wrap {margin:0 auto;width:80%;background: white;height:500px}
#canvas {z-index: 3}
</style>
