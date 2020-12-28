<template>
  <div id="record" class="routerView px-2 pt-2">
    <h3>당첨기록</h3>
    <div class="mb-1" v-if="result.length < 1">
      <input type="file" @change="readExcel" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
    </div>
    <!-- <div>{{result}}</div> -->
    <div>
      <b-table id="tb" class="mb-1" :items="result" :fields="fields" :per-page="perPage" :current-page="currentPage" head-variant="light" table-variant="dark" hover outlined></b-table>
      <b-spinner class="spinner" variant="primary" v-if="result.length < 1"></b-spinner>
      <div v-if="row > 0" class="d-flex justify-content-between mb-0">
        <b-pagination size="sm" v-model="currentPage" :total-rows="row" :per-page="perPage" aria-controls="tb" align="right"></b-pagination>
        <label>Total : {{row}}</label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from '@/store/record/store'
import * as types from '@/store/record/types'

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
      result: types.RESULT,
      fields: types.FIELDS
    }),
    row () {
      return this.result.length
    }
  },
  methods: {
    ...mapActions([
      types.SET_RESULT
    ]),
    readExcel (ev) {
      this.setResult(ev)
    }
  },
  mounted () {

  }
}
</script>

<style lang="css" scoped>
  h3 {
    color:white
  }
  .table {
    color: white
  }
  label {
    color: white;
    font-weight: bold;
  }
  .spinner {
    position: absolute;
    z-index: 999;
    top: 50%;
    left: 50%;
  }
</style>
