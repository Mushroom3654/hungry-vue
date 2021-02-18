<template>
  <div v-if="isOpen" class="backdrop">
    <div class="picker-popup">
      <div class="picker-header">
        <div class="btn-header btn-year" @click="openYearPicker">{{selected.year}}년</div>
        <div class="btn-header btn-month-date" v-if="pageFlow.type === 'DATE'" @click="openMonthPicker">{{selected.month}}월 {{selected.date}}일</div>
      </div>
      <div class="picker-body">
        <year-picker v-if="pageFlow.current === 'YEAR'" :year="selected.year" @select="selectDate"/>
        <month-picker v-if="pageFlow.current === 'MONTH'" :month="selected.month" @select="selectDate"/>
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
import util from './util'

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
    value: { type: [String, Object], default: () => { return util.getToday() } }
  },

  data () {
    return {
      isOpen: false,
      pageFlow: {
        YEAR: ['YEAR'],
        MONTH: ['YEAR', 'MONTH'],
        DATE: ['YEAR', 'MONTH', 'DATE'],
        type: 'DATE',
        current: 'DATE',
        flow: ['YEAR', 'MONTH', 'DATE']
      },
      date: null,
      selected: {
        year: null,
        month: null,
        date: null
      }
    }
  },

  methods: {
    open () {
      this.changeFlow(this.type)
      this.setInitialData()
      this.isOpen = true
      this.stopDocumentScroll()
      this.addEscEvent()
    },

    close () {
      this.isOpen = false
      this.reviveDocumentScroll()
      this.removeEscEvent()
    },

    confirm () {
      if (this.pageFlow.type !== this.pageFlow.current) {
        return this.step()
      }
      this.update()
      this.close()
    },

    update () {
      if (this.pageFlow.type === 'DATE') return this.updateDateType()
      if (this.pageFlow.type === 'MONTH') return this.updateMonthType()
      if (this.pageFlow.type === 'YEAR') return this.updateYearType()
    },

    updateDateType () {
      this.$emit('change', this.date)
    },

    updateMonthType () {
      this.$emit('change', `${this.selected.year}-${util.fixNumberBelowTen(this.selected.month)}`)
    },

    updateYearType () {
      this.$emit('change', `${this.selected.year}`)
    },

    setInitialData () {
      if (this.value) {
        if (this.type === 'MONTH' && this.value.length < 7) this.date = util.getToday()
        else if (this.type === 'DATE' && this.value.length < 10) this.date = util.getToday()
        else this.date = this.value
      } else this.date = util.getToday()
      this.selected.year = this.date.slice(0, 4) * 1
      this.selected.month = this.date.slice(5, 7) * 1
      this.selected.date = this.date.slice(8, 10) * 1
    },

    step () {
      return this.changePicker(this.pageFlow.flow[this.pageFlow.flow.indexOf(this.pageFlow.current) + 1])
    },

    selectYear (year) {
      this.selected.year = year
      this.date = `${this.selected.year}-${this.selected.month}-${this.selected.date}`
    },

    selectMonth (month) {
      this.selected.month = month
      this.date = `${this.selected.year}-${this.selected.month}-${this.selected.date}`
    },

    selectDate (date) {
      if (date.year) this.selected.year = date.year
      if (date.month) this.selected.month = date.month
      if (date.date) this.selected.date = date.date
      this.date = `${this.selected.year}-${util.fixNumberBelowTen(this.selected.month)}-${util.fixNumberBelowTen(this.selected.date)}`
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
      this.pageFlow.flow = this.pageFlow[type]
      this.pageFlow.current = this.pageFlow.flow[this.pageFlow.flow.length - 1]
    },

    stopDocumentScroll () {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    },

    reviveDocumentScroll () {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    },

    addEscEvent () {
      document.body.addEventListener('keyup', this.escEvent)
    },

    removeEscEvent () {
      document.body.removeEventListener('keyup', this.escEvent)
    },

    escEvent (e) {
      if (e.keyCode === 27) this.close()
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
