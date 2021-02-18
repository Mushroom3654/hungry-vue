<template>
  <div class="month-picker">
    <div ref="monthList" class="c-dp-month-list">
      <div :class="['c-dp-month-item', {'selected': month === selectedMonth}]" v-for="(month, index) in months" :key="index" @click="selectMonth(month, $event.target)">{{ month }}월</div>
    </div>
  </div>
</template>

<script>
// import util from './util'
export default {
  name: 'MonthPicker',

  props: {
    month: { type: [String, Number], default: () => { return new Date().getMonth() + 1 } }
  },

  data () {
    return {
      selectedMonth: this.month,
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }
  },

  mounted () {
    this.setInitialMonth()
  },

  methods: {
    setInitialMonth () {
      console.log(this.selectedMonth)
      let selected = this.$refs.monthList.getElementsByClassName('c-dp-month-item')[this.months.indexOf(this.selectedMonth)]
      if (selected) {
        selected.click()
      }
    },

    selectMonth (month, el) {
      if (!month) return
      if (this.selectedMonth < month) this.scrollToDownSelected(el)
      else this.scrollToUpSelected(el)
      this.selectedMonth = month
      this.$emit('select', {month: month})
    },

    scrollToDownSelected (el) {
      if (!el) return
      this.$refs.monthList.scrollTop = el.offsetTop - Math.floor(this.$refs.monthList.offsetTop + (this.$refs.monthList.clientHeight / 2)) + 15
    },

    scrollToUpSelected (el) {
      if (!el) return
      this.$refs.monthList.scrollTop = el.offsetTop - Math.floor(this.$refs.monthList.offsetTop + (this.$refs.monthList.clientHeight / 2)) + 21
    }
  }
}
</script>
