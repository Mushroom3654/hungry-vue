export default {
  getToday () {
    return `${new Date().getFullYear()}-${new Date().getMonth() > 9 ? new Date().getMonth() + 1 : '0' + (new Date().getMonth() + 1)}-${new Date().getDate()}`
  },

  getStartDayOfMonth () {
    return `${new Date().getFullYear()}-${this.fixNumberBelowTen(new Date().getMonth() + 1)}-01`
  },

  getDay (date) {
    let week = ['일', '월', '화', '수', '목', '금', '토']
    if (date.constructor === String) {
      return week[new Date(date).getDay()]
    }
    return week[date.getDay()]
    // return new Intl.DateTimeFormat('ko-KR', {weekday: 'long'}).format(date ? new Date(date) : new Date()).slice(0, 1)
  },

  getLastDayOfMonth () {
    // let d = date ? new Date(date) : new Date()
    // let year = d.getFullYear()
    // let month = d.getMonth() + 1
    // return new Date(year, month, 0).getDate()
    return `${new Date().getFullYear()}-${this.fixNumberBelowTen(new Date().getMonth() + 1)}-${new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()}`
  },

  fixNumberBelowTen (value) {
    if (!value) return
    return value > 9 ? value : '0' + value
  }
}
