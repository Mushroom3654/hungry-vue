<template>
  <div>
    <b-form-input type="text" />
    <div id="timepicker">
      <b-container fluid>
        <b-row class="top">
          <b-col>
<!--            <fontIcon class="caretUp" style="font-size:27px;cursor:pointer" @mousedown="changeHour(true)" :icon="['fas', 'caret-up']" />-->
          </b-col>
          <b-col>
<!--            <fontIcon class="caretUp" style="font-size:27px;cursor:pointer" @mousedown="changeMin(true)" :icon="['fas', 'caret-up']" />-->
          </b-col>
          <b-col></b-col>
        </b-row>
        <b-row class="mid">
          <b-col>
            <span class="time">{{ hours }}</span>
          </b-col>
          <b-col>
            <span class="time">{{ minutes }}</span>
          </b-col>
          <b-col>
<!--            <b-button variant="primary" @click="dn = !dn" stlye="font-weight:bold">{{ dayNight }}</b-button>-->
          </b-col>
        </b-row>
        <b-row class="bot">
          <b-col>
<!--            <fontIcon class="caretDown" style="font-size:27px;cursor:pointer" @mousedown="changeHour(false)" :icon="['fas', 'caret-down']" />-->
          </b-col>
          <b-col>
<!--            <fontIcon class="caretDown" style="font-size:27px;cursor:pointer" @mousedown="changeMin(false)" :icon="['fas', 'caret-down']" />-->
          </b-col>
          <b-col></b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TimePicker',
  model: {
    prop: 'time',
    event: 'change'
  },
  props: {
    time: {type: String}
  },
  data () {
    return {
      hour: 1,
      min: 0,
      // hourList: [],
      // minList: [],
      dn: false,
      result: null
    }
  },
  computed: {
    dayNight () {
      if (!this.dn) return 'AM'
      return 'PM'
    },
    hours () {
      if (this.hour < 10) return '0' + this.hour
      return this.hour
    },
    minutes () {
      if (this.min < 10) return '0' + this.min
      return this.min
    },
    res () {
      let hour = this.hour
      if (this.dn) {
        hour += 12
        if (hour === 24) hour = 0
      }
      return `${hour} : ${this.minutes}`
    }
  },
  watch: {
    res: {
      deep: false,
      handler (nv, ov) {
        this.$emit('change', this.res)
      }
    }
  },
  created () {
    this.hour = new Date().getHours()
    this.min = new Date().getMinutes()
    // for (let i = 1; i < 13; i++) {
    //   this.hourList.push(i)
    // }
    // for (let i = 0; i < 60; i++) {
    //   this.minList.push(i)
    // }
  },
  methods: {
    changeHour (up) {
      if (up) {
        this.hour++
        if (this.hour > 12) this.hour = 1
        return
      }
      this.hour > 1 ? this.hour-- : this.hour = 12
    },
    changeMin (up) {
      if (up) {
        this.min++
        if (this.min > 59) {
          this.min = 0
          this.changeHour(true)
        }
        return
      }
      if (this.min > 0) this.min--
      else {
        this.min = 59
        this.changeHour(false)
      }
    }
  }
}
</script>

<style lang="css" scoped>
#timepicker {
  width:300px;
  height:200px;
  border:1px solid black
}
.top, .bot {
  height:60px;
  line-height: 60px
}
.mid {
  height:80px;
  line-height: 80px
}
.time {
  font-size: 2rem;
  cursor: pointer;
}
</style>
