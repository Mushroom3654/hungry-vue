<template lang="html">
  <div class="canvas-wrap">
    <tab class="tab"
      @setLineWidth="setLineWidth"
      @setLineCap="setLineCap"
      @setStrokeStyle="setStrokeStyle"
      @fillCanvas="fillCanvas"
    />
    <div class="canvas-area">
      <canvas id="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import Tab from './Tab'

export default {
  name: 'Canvas',

  components: {
    tab: Tab
  },

  data () {
    return {
      canvas: null,
      ctx: null,
      coordinate: {
        x: 0,
        y: 0
      },
      defaultStyle: {
        lineWidth: 5,
        lineCap: 'round',
        strokeStyle: 'black',
        fillStyle: 'red'
      },
      style: {
        lineWidth: 5,
        lineCap: 'round',
        strokeStyle: 'black',
        fillStyle: 'red'
      },
      paint: false,
      point: [],
      imgSrc: null,
      history: {
        redo_list: [],
        undo_list: []
      }
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

      this.setLineWidth()
      this.setLineCap()
      this.setStrokeStyle()
      this.setFillStyle()
    },

    // Init Event
    addEvent () {
      // desktop
      this.canvas.addEventListener('mousedown', this.mouseDown)
      this.canvas.addEventListener('mouseup', this.mouseUp)
      this.canvas.addEventListener('mousemove', this.mouseMove)
      // mobile
      this.canvas.addEventListener('touchstart', this.touchStart, false)
      this.canvas.addEventListener('touchend', this.touchEnd, false)
      this.canvas.addEventListener('touchmove', this.touchMove, true)
    },

    stopScroll (e) {
      if (e.target === this.canvas) e.preventDefault()
    },

    removeEvent () {
      this.canvas.removeEventListener('mousedown', this.mouseDown)
      this.canvas.removeEventListener('mouseup', this.mouseUp)
      this.canvas.removeEventListener('mousemove', this.mouseMove)

      this.canvas.removeEventListener('touchstart', this.touchStart, false)
      this.canvas.removeEventListener('touchend', this.touchEnd, false)
      this.canvas.removeEventListener('touchmove', this.touchMove, true)
    },
    // Line Draw Event
    touchStart (e) {
      this.paint = true
      this.stopScroll(e)
      this.ctx.beginPath()
      this.drawPath(e)
    },

    touchMove (e) {
      if (!this.paint) return
      this.stopScroll(e)
      this.getTouchPosition(e)
      this.ctx.lineTo(this.coordinate.x, this.coordinate.y)
      this.ctx.stroke()
    },

    touchEnd (e) {
      this.paint = false
      this.stopScroll(e)
      this.ctx.closePath()
      this.getImage()
    },

    getPosition (e) {
      this.coordinate.x = e.clientX - this.canvas.getBoundingClientRect().left
      this.coordinate.y = e.clientY - this.canvas.getBoundingClientRect().top
    },

    getTouchPosition (e) {
      this.coordinate.x = e.changedTouches[0].clientX - this.canvas.getBoundingClientRect().left
      this.coordinate.y = e.changedTouches[0].clientY - this.canvas.getBoundingClientRect().top
    },

    mouseDown (e) {
      this.paint = true
      this.ctx.beginPath()
      this.drawPath(e)
    },

    mouseMove (e) {
      if (!this.paint) return
      this.drawPath(e)
    },

    mouseUp (e) {
      this.paint = false
      this.ctx.closePath()
      this.getImage()
    },

    drawPath (e) {
      this.getPosition(e)
      this.ctx.lineTo(this.coordinate.x, this.coordinate.y)
      this.ctx.stroke()
    },

    clearCanvas () {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },

    fillCanvas () {
      this.ctx.fill()
    },
    // Util Event
    getImage () {
      this.imgSrc = this.canvas.toDataURL()
      // this.canvas.toBlob(blob => {
      //   this.imgSrc = window.URL.createObjectURL(blob)
      // }, 'image/jpg')
    },

    download () {
      let a = document.createElement('a')
      a.href = this.imgSrc
      a.download = 'drawPathing'
      a.click()
    },

    saveState (canvas, list, keepRedo = false) {
      if (!keepRedo) {
        this.history.redo_list = []
      }
      (list || this.history.undo_list).push(canvas.toDataURL())
    },

    restoreState (canvas, ctx, pop, push) {
      if (pop.length) {
        this.saveState(canvas, push, true)
        this.clearCanvas()
        let img = new Image()
        img.src = pop.pop()
        ctx.drawPathImage(img, 0, 0, canvas.width, canvas.height)
      }
    },

    undo () {
      this.restoreState(this.canvas, this.ctx, this.history.undo_list, this.history.redo_list)
    },

    redo () {
      this.restoreState(this.canvas, this.ctx, this.history.redo_list, this.history.undo_list)
    },
    // Tab Event
    setLineWidth (value) {
      if (!value) return (this.ctx.lineWidth = this.defaultStyle.lineWidth)
      this.ctx.lineWidth = value
    },

    setLineCap (value) {
      if (!value) return (this.ctx.lineCap = this.defaultStyle.lineCap)
      this.ctx.lineCap = value
    },

    setStrokeStyle (value) {
      if (!value) return (this.ctx.strokeStyle = this.defaultStyle.strokeStyle)
      this.ctx.strokeStyle = value
    },

    setFillStyle (value) {
      if (!value) return (this.ctx.fillStyle = this.defaultStyle.fillStyle)
      this.ctx.fillStyle = value
    }
  }
}
</script>

<style scoped>
.canvas-wrap {margin:0 auto;background: white;height:80vh}
.tab {width:100%;}
.canvas-area {width:100%;height: calc(100% - 60px);}
#canvas {}
</style>
