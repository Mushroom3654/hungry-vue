<template>
  <div v-if="isOpen" class="backdrop">
    <div class="picker-popup">
      <div class="picker-header">
        <div class="btn-header btn-year" @click="openYearPicker">{{selectedYear}}년</div>
        <div class="btn-header btn-month-date" @click="openMonthPicker">{{selectedMonth}}월 {{selectedDate}}일</div>
      </div>
      <div class="picker-body">
        <year-picker v-if="pageFlow.current === 'YEAR'" :year="selectedYear" @select="selectYear"/>
        <month-picker v-if="pageFlow.current === 'MONTH'" :month="selectedMonth" @select="selectMonth"/>
        <date-picker v-if="pageFlow.current === 'DATE'" :date="date" @select="selectDate"/>
      </div>
      <div class="picker-footer">
        <div class="btnArea-bottom">
          <button @click="close">취소</button>
          <button @click="confirm">확인</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import YearPicker from './YearPicker'
import MonthPicker from './MonthPicker'
import Calendar from './Calendar'
import util from '../../vue/util'

export default {
  name: 'DatePicker',

  components: {
    yearPicker: YearPicker,
    monthPicker: MonthPicker,
    datePicker: Calendar
  },

  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    type: { type: String, default: () => { return 'DATE' } },
    value: { type: [String, Date], default: () => { return util.getToday() } }
  },

  data () {
    return {
      isOpen: false,
      pageFlow: {
        YEAR: {
          flow: ['YEAR'],
          type: 'YEAR'
        },
        MONTH: {
          flow: ['YEAR', 'MONTH'],
          type: 'MONTH'
        },
        DATE: {
          flow: ['YEAR', 'MONTH', 'DATE'],
          type: 'DATE'
        },
        type: 'DATE',
        current: 'DATE',
        flow: ['YEAR', 'MONTH', 'DATE']
      },
      date: this.value,
      selectedYear: null,
      selectedMonth: null,
      selectedDate: null
    }
  },

  mounted () {
    this.changeFlow(this.type)
    this.addEscEvent()
  },

  methods: {
    open () {
      this.setInitialData()
      this.isOpen = true
    },

    close () {
      this.isOpen = false
    },

    confirm () {
      if (this.pageFlow.type !== this.pageFlow.current) {
        return this.changePicker(this.pageFlow.flow[this.pageFlow.flow.indexOf(this.pageFlow.current) + 1])
      }
      this.update()
      this.close()
    },

    update () {
      this.$emit('change', this.date)
    },

    setInitialData () {
      this.selectedYear = this.value.slice(0, 4)
      this.selectedMonth = this.value.slice(5, 7)
      this.selectedDate = this.value.slice(8, 10)
    },

    selectYear (year) {
      this.selectedYear = year
      this.date = `${this.selectedYear}-${this.selectedMonth}-${this.selectedDate}`
    },

    selectMonth (month) {
      this.selectedMonth = month
      this.date = `${this.selectedYear}-${this.selectedMonth}-${this.selectedDate}`
    },

    selectDate (date) {
      this.selectedDate = date
      this.date = `${this.selectedYear}-${this.selectedMonth}-${this.selectedDate}`
    },

    openYearPicker () {
      this.changePicker('YEAR')
    },

    openMonthPicker () {
      this.changePicker('MONTH')
    },

    openDatePicker () {
      this.changePicker('DATE')
    },

    changePicker (type) {
      this.pageFlow.current = type
    },

    changeFlow (type) {
      this.pageFlow.type = type
      this.pageFlow.flow = this.pageFlow[type].flow
      this.pageFlow.current = this.pageFlow.flow[this.pageFlow.flow.length - 1]
    },

    addEscEvent () {
      document.body.addEventListener('keyup', e => {
        if (e.keyCode === 27) this.close()
      })
    }
  }
}
</script>

<style scoped>
  .backdrop {z-index:999;position:fixed;top:0;right:0;bottom:0;left:0;background: rgba(0, 0, 0, .5); transition: opacity .5s}
  .picker-popup {position:fixed;top:50%;left:50%;transform: translate(-50%, -50%);background: #fff; max-width: calc(100% - 40px);width:340px;box-shadow: rgba(0, 0, 0, .3)}
  .picker-header {background: #2438e9;color:#f1f1f1;padding: 7px 15px}
  .picker-header .btn-month-date{font-size: 1.5rem}
  .picker-header .btn-header {cursor:pointer;}
  /*.picker-body {height: 300px;width:300px}*/
  .picker-footer{text-align: right;padding: 7px 15px}
</style>
