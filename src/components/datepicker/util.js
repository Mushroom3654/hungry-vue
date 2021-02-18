export default {
  getToday () {
    return `${new Date().getFullYear()}-${new Date().getMonth() + 1 > 9 ? new Date().getMonth() + 1 : '0' + (new Date().getMonth() + 1)}-${new Date().getDate()}`
  },

  getStartDateOfMonth (date) {
    if (!date) return
    if (date.constructor === String) return `${date.slice(0, 4)}-${date.slice(5, 7)}-01`
    return `${date.getFullYear()}-${this.fixNumberBelowTen(date.getMonth() + 1)}-01`
  },

  getLastDateOfMonth (date) {
    let d = date ? new Date(date) : new Date()
    return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate()
  },

  getDay (date) {
    return new Intl.DateTimeFormat('ko-KR', {weekday: 'long'}).format(date ? new Date(date) : new Date()).slice(0, 1)
  },

  fixNumberBelowTen (value) {
    if (!value) return
    return value > 9 ? value : '0' + value
  }
}
