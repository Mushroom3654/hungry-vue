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
      let years = [year + '']
      for (let i = 1; i < 100; i++) {
        years.push(year - i + '')
        years.push(year + i + '')
      }
      return years.sort()
    },

    setInitialYear () {
      let selected = this.$refs.yearList.getElementsByClassName('year-item')[this.years.indexOf(`${this.selectedYear}`)]
      if (selected) {
        selected.click()
      }
    },

    selectYear (year, el) {
      if (this.selectedYear < year) this.scrollToDownSelected(el)
      else this.scrollToUpSelected(el)
      this.selectedYear = year
      this.$emit('select', year)
    },

    scrollToDownSelected (el) {
      if (!el) return
      this.$refs.yearList.scrollTop = el.offsetTop - Math.floor((this.$refs.yearList.clientHeight / 2)) - 60
    },

    scrollToUpSelected (el) {
      if (!el) return
      this.$refs.yearList.scrollTop = el.offsetTop - Math.floor((this.$refs.yearList.clientHeight / 2)) - 50
    }
  }
}
</script>

<style scoped>
.year-picker{height: 300px}
.year-list::-webkit-scrollbar {display: none;}
.year-list{list-style-type: none;overflow: scroll;-webkit-overflow-scrolling: touch;height: inherit;padding:0;text-align: center;cursor:pointer}
.year-list .year-item {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.year-item{font-size:1.5rem;transition: font-size .3s;}
.year-list .year-item:hover{font-size: 2rem}
.year-list .year-item.selected{font-size: 2rem;color: #2438e9}
</style>
