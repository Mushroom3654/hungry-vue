import Vue from 'vue'

Vue.component('c-lotto', {
  template: '' +
    '<div class="d-flex justify-content-center">' +
      '<b-list-group-item v-for="(list, index) in data" :key="index" class="ml-2 balls" style="width:5rem;height:5rem;border:1.5px solid black;border-radius:5rem;line-height:3rem;font-size:2rem;cursor:default">{{ list }}</b-list-group-item>' +
    '</div>',
  props: {
    data: { type: Array, required: true }
  }
})

Vue.component('k-pagination', {
  template: '' +
    '<ul class="k-pagination">' +
      '<li class="page-item btn-first" @click="moveFirstPage"></li>' +
      '<li class="page-item btn-prev" @click="movePrevPage"></li>' +
      '<li class="page-item btn-num" v-for="(item, idx) in btnCount" :key="idx" @click="movePage(item + 1)">{{ item + 1 }}</li>' +
      '<li class="page-item btn-next" @click="moveNextPage"></li>' +
      '<li class="page-item btn-last" @click="moveLastPage"></li>' +
    '</ul>',

  model: {
    prop: 'currentPage',
    event: 'input'
  },

  props: {
    currentPage: {type: [Number, String], required: true},
    totalRowCount: {type: [Number, String], required: true},
    perPage: {type: [Number, String], default: () => { return 10 }},
    btnPerPage: {type: [Number, String], default: () => { return 5 }}
  },

  computed: {
    pageCount () {
      if (this.totalRowCount < 1) return Array.from(Array(1).keys())
      return Array.from(new Array(this.totalRowCount <= this.perPage ? 1 : this.totalRowCount % this.perPage === 0 ? Math.floor(this.totalRowCount / this.perPage) : Math.floor(this.totalRowCount / this.perPage) + 1).keys())
    },

    btnCount () {
      let last = Math.ceil(this.currentPage / this.btnPerPage) * this.btnPerPage
      return this.pageCount.slice(last - (this.btnPerPage), last)
    }
  },

  created () {
    if (this.currentPage > this.pageCount.length) this.$emit('input', 1)
  },

  mounted () {
    this.addActiveClass(this.currentPage)
  },

  methods: {
    movePage (pageNum) {
      if (pageNum === this.currentPage) return
      this.changeActiveClass(this.currentPage, pageNum)
      this.$emit('input', pageNum)
    },

    movePrevPage () {
      if (this.currentPage === 1) return
      this.movePage(this.currentPage - 1)
    },

    moveNextPage () {
      if (this.currentPage === this.pageCount.length) return
      this.movePage(this.currentPage + 1)
    },

    moveFirstPage () {
      if (this.currentPage === 1) return
      this.movePage(1)
    },

    moveLastPage () {
      if (this.currentPage === this.pageCount.length) return
      this.movePage(this.pageCount.length)
    },

    changeActiveClass (removePage, addPage) {
      this.removeActiveClass(removePage)
      this.addActiveClass(addPage)
    },

    addActiveClass (pageNum) {
      setTimeout(() => {
        if (!document.getElementsByClassName('btn-num')[(pageNum - 1) % this.btnPerPage]) return
        document.getElementsByClassName('btn-num')[(pageNum - 1) % this.btnPerPage].classList.add('active')
      }, 20)
    },

    removeActiveClass (pageNum) {
      if (!document.getElementsByClassName('btn-num')[(pageNum - 1) % this.btnPerPage]) return
      document.getElementsByClassName('btn-num')[(pageNum - 1) % this.btnPerPage].classList.remove('active')
    },

    removeAllActiveClass () {
      let active = document.querySelector('.btn-num.active')
      if (active) active.classList.remove('active')
    },

    activeFirstPage () {
      this.removeAllActiveClass()
      this.addActiveClass(1)
    }
  }
})
// Vue.component('c-date-picker', {
//   template: '' +
//     '<datepicker></datepicker>' +
//     '',
//   props: {
//     data: { type: Array, required: true }
//   }
// })
