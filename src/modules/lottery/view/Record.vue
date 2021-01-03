<template>
  <div class="record routerView">
    <h3>당첨기록</h3>
    <div class="mb-1" v-if="!row">
      <input type="file" @change="readExcel" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
    </div>
    <!-- <div>{{record}}</div> -->
    <div>
      <b-table class="table mb-1" :items="record" :fields="fields" :per-page="perPage" :current-page="currentPage" head-variant="light" table-variant="dark" hover outlined></b-table>
      <b-spinner class="spinner" variant="primary" v-if="!row"></b-spinner>
      <div v-if="row" class="d-flex justify-content-between mb-0">
        <b-pagination size="sm" v-model="currentPage" :total-rows="row" :per-page="perPage" aria-controls="tb" align="right"></b-pagination>
        <label>Total : {{row}}</label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from '../store/record/store'
import * as types from '../store/record/types'
import * as xlsx from 'xlsx'

export default {
  name: 'Record',
  data () {
    return {
      currentPage: 1,
      perPage: 10
    }
  },
  computed: {
    ...mapGetters({
      record: types.RECORD,
      fields: types.FIELDS
    }),
    row () {
      return this.record.length
    }
  },
  methods: {
    ...mapActions([
      types.QUERY_RECORD,
      types.SET_RECORD
    ]),

    readRecord () {
      this.queryRecord()
    },

    readExcel (ev) {
      const file = ev.target.files[0]
      // const fileName = file.name
      const reader = new FileReader()
      let tmpResult = {}
      reader.onload = e => {
        let data = new Uint8Array(e.target.result)
        let excelFile = xlsx.read(data, { type: 'array' })
        excelFile.SheetNames.forEach(function (sheetName) {
          const roa = xlsx.utils.sheet_to_json(excelFile.Sheets[sheetName], { header: 1 })
          if (roa.length) tmpResult[sheetName] = roa
        })
        this.setRecord(this.transformRecord(tmpResult.excel)).then(res => {
          this.$firebase.child('record').set(this.record)
        })
      }
      reader.readAsArrayBuffer(file)
    },

    transformRecord (data) {
      let record = []
      data.forEach((e, i) => {
        if (i < 3) return
        let item = {}
        item.round = e[1]
        item.date = e[2]
        item.first = e[5]
        item.second = e[6]
        item.third = e[7]
        item.fourth = e[8]
        item.fifth = e[9]
        item.sixth = e[10]
        item.bonus = e[11]
        record.push(item)
      })
      return record
    }
  },

  created () {
    if (!this.record || !this.record.length) this.readRecord()
  }
}
</script>

<style lang="css" scoped>
  .table, h3, label { color:white }
  .table td, .table th {padding:0 !important;margin:0}
  .spinner { position: absolute; z-index: 999; top: 50%; left: 50%; }
</style>
