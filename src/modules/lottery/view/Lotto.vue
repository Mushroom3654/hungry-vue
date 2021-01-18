<template>
  <div id="lotto" class="routerView">
    <div id="lotto-title" class="lot">운수 좋은 날</div>
    <div id="lotto-sub-title" class="lot">김첨지의 로또머신</div>
    <br>
    <div class="d-flex justify-content-center">
      <div  v-for="(value, key) in winning" :key="key" class="d-flex">
        <div id="plus" v-if="key === '7'">+</div>
        <div :id="'b' + key" class="ball mx-2">{{winning[key] === null ? state : value}}</div>
      </div>
    </div>
    <br>
    <b-button variant="outline-primary" @click="spin">Rolling</b-button>
    <b-button variant="outline-danger" @click="stop">Stop</b-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from '../store/lotto/store'
import * as types from '../store/lotto/types'
import '@/../static/css/lotto.css'

export default {
  name: 'Lotto',
  data () {
    return {
      state: null
    }
  },
  computed: {
    ...mapGetters({
      lotto: types.NUMBER_LIST,
      winning: types.WINNING
    })
  },
  methods: {
    ...mapActions([
      types.SAVE_RESULT,
      types.CLEAR_WINNING,
      types.SET_NUMBER_LIST
    ]),
    spin () {
      this.clearWinning()
      this.setNumberList()
      let i = 1
      let temp = null
      const timer = setInterval(() => {
        temp = Math.floor(Math.random() * 44 + 1)
        if (this.lotto.findIndex(dt => dt === temp) > -1) this.state = temp
      }, 10)
      const result = setInterval(() => {
        if (i === 7) {
          clearInterval(result)
          clearInterval(timer)
          this.$firebase.child('lotto').set(this.winning)
        }
        this.winning[i] = this.state
        this.saveResult({i: i, d: this.state})
        i++
      }, 1000)
    },
    stop () {
      console.log('stop')
    }
  }
}
</script>
