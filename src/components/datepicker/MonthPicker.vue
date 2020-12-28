<template>
  <div class="month-picker">
    <div ref="monthList" class="month-list">
      <div :class="['month-item', {'selected': month === selectedMonth}]" v-for="(month, index) in months" :key="index" @click="selectYear(month, $event.target)">{{ month }}월</div>
    </div>
  </div>
</template>

<script>
import util from '../../vue/util'

export default {
  name: 'MonthPicker',

  props: {
    month: { type: [String, Number], default: () => { return new Date().getMonth() + 1 } }
  },

  data () {
    return {
      selectedMonth: this.month * 1,
      months: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    }
  },

  mounted () {
    this.setInitialMonth()
  },

  methods: {
    setInitialMonth () {
      let selected = this.$refs.monthList.getElementsByClassName('month-item')[this.months.indexOf(`${this.selectedMonth}`)]
      if (selected) {
        selected.click()
      }
    },

    selectYear (month, el) {
      if (this.selectedMonth < month) this.scrollToDownSelected(el)
      else this.scrollToUpSelected(el)
      this.selectedMonth = month
      this.$emit('select', util.fixNumberBelowTen(month))
    },

    scrollToDownSelected (el) {
      if (!el) return
      this.$refs.monthList.scrollTop = el.offsetTop - Math.floor((this.$refs.monthList.clientHeight / 2)) - 60
    },

    scrollToUpSelected (el) {
      if (!el) return
      this.$refs.monthList.scrollTop = el.offsetTop - Math.floor((this.$refs.monthList.clientHeight / 2)) - 50
    }
  }
}
</script>

<style scoped>
  .month-picker{height: 300px}
  .month-list::-webkit-scrollbar {display: none;}
  .month-list{list-style-type: none;overflow: scroll;-webkit-overflow-scrolling: touch;height: inherit;padding:0;text-align: center;cursor:pointer}
  .month-list .month-item {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .month-list .month-item{font-size:1.5rem;transition: font-size .3s;}
  .month-list .month-item:hover{font-size: 2rem}
  .month-list .month-item.selected{font-size: 2rem;color: #2438e9}
</style>
