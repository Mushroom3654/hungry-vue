<template>
  <div class="test-page">
    <section class="section jumin-check">
      <h4>주민 체크</h4>
      <div class="test-content">
        <input type="text" ref="jumin_first" v-model="jumin.first" maxlength="6" @input="() => { if (jumin.first.length > 5) focusOn('jumin_second') }"/>
        <span> - </span>
        <input type="text" ref="jumin_second" v-model="jumin.second" maxlength="7" />
        <label>{{ juminCheck(jumin.first + jumin.second) }}</label>
      </div>
    </section>
    <section class="section pagination">
      <h4>Pagination Test</h4>
      <div class="test-content">
        <button @click="createRandomData">데이터 생성</button>
        <div>
          <label>전체 데이터 수 : {{ items.length }}</label>
          <label>현재 페이지 : {{ page.currentPage }}</label>
          <label>페이지당 개수 : {{ page.perPage }}</label>
        </div>
        <table class="temp_table">
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          <tr v-for="(item, idx) in pagingList" :key="idx">
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
          </tr>
        </table>
        <k-pagination v-model="page.currentPage" :totalRowCount="page.totalRowCount" :perPage="page.perPage"/>
      </div>
    </section>
    <section class="section date-picker">
      <h4>달력</h4>
      <div class="test-content">
        <datepicker ref="dp" v-model="date"/>
        <input type="text" v-model="date" />
        <button @click="$refs.dp.open()">달력</button>
      </div>
    </section>
  </div>
</template>

<script>
import DatePicker from '../components/datepicker/DatePicker'
import util from '../vue/util'

export default {
  name: 'Test',

  components: {
    datepicker: DatePicker
  },

  data () {
    return {
      jumin: {
        first: null,
        second: null
      },
      page: {
        currentPage: 1,
        totalRowCount: 0,
        perPage: 10,
        btnPerPage: 5
      },
      items: [],
      date: util.getToday()
    }
  },

  computed: {
    passJumin () {
      if ((this.jumin.first + this.jumin.second).length === 0) return '번호를 전부 입력해주세요'
    },

    pagingList () {
      return this.items.slice((this.page.currentPage - 1) * this.page.perPage, this.page.currentPage * this.page.perPage)
    }
  },

  methods: {
    juminCheck (noId) {
      if (!noId || noId.length < 1) return ''
      if (noId.length !== 13) return '번호를 전부 입력해 주세요'

      const yy = noId.slice(0, 2)
      const mm = noId.slice(2, 4)
      const dd = noId.slice(4, 6)
      const gender = noId.slice(6, 7)
      const native = gender < 5 || gender > 8

      let sum = 0

      if (yy < 20 || mm < 1 || mm > 12 || dd < 0 || dd > 31 || gender < 1) return '잘못된 주민등록 번호 입니다'

      for (let i = 0; i < 12; i++) sum += (i % 8 + 2) * noId.slice(i, i + 1)

      sum = native ? (11 - (sum % 11)) % 10 : ((11 - (sum % 11)) % 10 + 2) % 10
      if (parseInt(sum) !== parseInt(noId.slice(12, 13))) return '잘못된 주민등록 번호 입니다'

      return `✓ ${native ? ' 내국인' : ' 외국인'}`
    },

    createRandomData () {
      this.items = []
      let count = Math.floor(Math.random() * 99) + 1
      for (let i = 0; i < count; i++) {
        this.items.push({ name: this.createName(), age: Math.floor(Math.random() * 99) + 1 })
      }
      console.table(this.items)
      this.page.totalRowCount = this.items.length
    },

    createName () {
      let text = ''
      let first = '김이박최정강조윤장임한오서신권황안송류전홍고문양손배조백허유남심노정하곽성차주우구신임나전민유진지엄채원천방공강현함변염양변여추노도소신석선설마주연방위표명기반왕모장남탁국여진구'
      let last = '가강건경고관광구규근기길나남노누다단달담대덕도동두라래로루리마만명무문미민바박백범별병보사산상새서석선설섭성세소솔수숙순숭슬승시신아안애엄여연영예오옥완요용우원월위유윤율으은의이익인일자잔장재전정제조종주준중지진찬창채천철초춘충치탐태택판하한해혁현형혜호홍화환회효훈휘희운모배부림봉혼황량린을비솜공면탁온디항후려균묵송욱휴언들견추걸삼열웅분변양출타흥겸곤번식란더손술반빈실직악람권복심헌엽학개평늘랑향울련'
      for (let i = 0; i < 1; i++) {
        text += first.charAt(Math.floor(Math.random() * first.length))
      }
      for (let i = 0; i < 2; i++) {
        text += last.charAt(Math.floor(Math.random() * last.length))
      }
      return text
    },

    focusOn (ref) {
      this.$refs[ref].focus()
    }
  }
}
</script>

<style scoped>
  .test-page {padding:30px 0}
  .test-page h4, span, label {color:#f1f1f1}
  .test-page .section {width:80%;border: 1px solid #f1f1f1;padding:10px;margin:10px auto;text-align: left}
  .temp_table th, td {border:1px solid #f1f1f1}
  .temp_table th {background: lightblue}
  .temp_table th:first-child {padding: 2px 20px}
  .temp_table th:last-child {padding: 2px 10px}
  .temp_table td {padding: 2px;background: seashell;text-align: center}
</style>
