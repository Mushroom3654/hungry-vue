<template>
  <div class="year-picker">
    <div ref="yearList" class="year-list">
      <div :class="['year-item', {'selected': year === selectedYear}]" v-for="(year, index) in years" :key="index" @click="selectYear(year, $event.target)">{{ year }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YearPicker',

  props: {
    year: { type: [String, Number], default: () => { return new Date().getFullYear() } }
  },

  data () {
    return {
      selectedYear: this.year,
      years: []
    }
  },

  created () {
    this.years = this.setYears()
  },

  mounted () {
    this.setInitialYear()
  },

  methods: {
    setYears () {
      let year = new Date().getFullYear()
      let years = [year]
      for (let i = 1; i < 100; i++) {
        years.push(year - i)
        years.push(year + i)
      }
      return years.sort()
    },

    setInitialYear () {
      let selected = this.$refs.yearList.getElementsByClassName('year-item')[this.years.indexOf(this.selectedYear)]
      if (selected) {
        selected.click()
      }
    },

    selectYear (year, el) {
      if (!year) return
      if (this.selectedYear < year) this.scrollToDownSelected(el)
      else this.scrollToUpSelected(el)
      this.selectedYear = year
      this.$emit('select', {year: year})
    },

    scrollToDownSelected (el) {
      if (!el) return
      this.$refs.yearList.scrollTop = el.offsetTop - Math.floor(this.$refs.yearList.offsetTop + (this.$refs.yearList.clientHeight / 2)) + 15
    },

    scrollToUpSelected (el) {
      if (!el) return
      this.$refs.yearList.scrollTop = el.offsetTop - Math.floor(this.$refs.yearList.offsetTop + (this.$refs.yearList.clientHeight / 2)) + 21
    }
  }
}
</script>
