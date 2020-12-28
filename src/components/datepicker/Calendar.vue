<template>
  <div class="date-picker">
    <div class="change-month">
      <button class="btn-prev-month" @click="goPrevMonth"></button>
      <div>{{ currentYearAndMonth }}</div>
      <button class="btn-next-month" @click="goNextMonth"></button>
    </div>
    <div ref="datePicker" class="calendar">
      <div class="week-list">
        <div class="week-item" v-for="day in week" :key="day"><span>{{ day }}</span></div>
      </div>
      <div ref="dateList" class="date-list">
        <div :class="['date-item', {'selected': isToday(date)}]" v-for="(date, index) in dates" :key="index" @click="selectDate(date)"><span><span>{{ date }}</span></span></div>
      </div>
    </div>
  </div>
</template>

<script>
import util from '../../vue/util'

export default {
  name: 'Calendar',

  props: {
    date: { type: [Date, String], default: () => { return new Date() } }
  },

  data () {
    return {
      week: ['일', '월', '화', '수', '목', '금', '토'],
      selectedDate: this.date.slice(8, 10),
      calendar: {
        year: this.date.slice(0, 4),
        month: this.date.slice(5, 7),
        date: this.date.slice(8, 10)
      },
      dates: []
    }
  },

  computed: {
    currentYearAndMonth () {
      return `${this.calendar.year}년 ${this.calendar.month}월`
    }
  },

  created () {
    this.setDatesOfMonth(this.date)
  },

  mounted () {
    this.setInitialDate()
  },

  methods: {
    setDatesOfMonth (date) {
      let block = [...Array(this.week.indexOf(util.getDay(util.getStartDayOfMonth(date)))).keys()].map(() => '')
      this.dates = block.concat([...Array(util.getLastDayOfMonth(date)).keys()].map((e, i) => i + 1 + ''))
    },

    setInitialDate () {
      let selected = this.$refs.dateList.getElementsByClassName('date-item')[this.dates.indexOf(`${this.selectedDate}` * 1)]
      if (selected) {
        selected.click()
      }
    },

    selectDate (date) {
      this.selectedDate = date
      this.calendar.date = date
      this.$emit('select', util.fixNumberBelowTen(date))
    },

    goPrevMonth () {
      if (this.calendar.month === 1) {
        this.calendar.year--
        this.calendar.month = 12
      } else {
        this.calendar.month--
      }
      this.setDatesOfMonth(`${this.calendar.year}-${this.calendar.month}`)
    },

    goNextMonth () {
      if (this.calendar.month === 12) {
        this.calendar.year++
        this.calendar.month = 1
      } else {
        this.calendar.month++
      }
      this.setDatesOfMonth(`${this.calendar.year}-${this.calendar.month}`)
    },

    isToday (date) {
      return date === this.selectedDate
    }
  }
}
</script>

<style scoped>
  .date-picker {height: inherit}
  .date-picker::-webkit-scrollbar {display: none;}
  .date-picker .change-month {display:flex;justify-content:space-between;margin:10px 15px 5px 15px;}
  .date-picker .change-month div {font-size: 14px}
  .btn-prev-month, .btn-next-month {border:none;background: none}
  .btn-prev-month:before {content: '<'}
  .btn-next-month:before {content: '>'}
  .week-list, .date-list {display: flex;flex-wrap: wrap;padding: 5px 15px}
  .week-list .week-item {font-weight: 900 !important;}
  .week-item, .date-item {display:inline-block;width:14.28571%;line-height: 19px;cursor:pointer;text-align: center;font-size: 15px;font-weight: 300;}
  .date-list .date-item span {display:block;width:100%;height:0;position:relative;padding: 0 0 100%;overflow:hidden}
  .date-list .date-item span span {position:absolute;top:0;right:0;;bottom:0;left:0;align-items: center;-webkit-box-pack: center;-webkit-box-align: center;border-radius:50%;transition: background-color .3s, color .3s;}
  .date-list .date-item.selected span span {background-color: #2438e9;color:#f1f1f1}
  .week-item, .date-item {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
