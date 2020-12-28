export default {
  getToday () {
    return `${new Date().getFullYear()}-${new Date().getMonth() > 9 ? new Date().getMonth() + 1 : '0' + (new Date().getMonth() + 1)}-${new Date().getDate()}`
  },

  getStartDayOfMonth (date) {
    if (!date) return
    if (date.constructor === String) return `${date.slice(0, 4)}-${date.slice(5, 7)}-01`
    return `${date.getFullYear()}-${this.fixNumberBelowTen(date.getMonth() + 1)}-01`
  },

  getDay (date) {
    let week = ['일', '월', '화', '수', '목', '금', '토']
    if (date.constructor === String) {
      return week[new Date(date).getDay()]
    }
    return week[date.getDay()]
  },

  getLastDayOfMonth (date) {
    let d = date ? new Date(date) : new Date()
    let year = d.getFullYear()
    let month = d.getMonth() + 1
    return new Date(year, month, 0).getDate()
  },

  fixNumberBelowTen (value) {
    if (!value) return
    return value > 9 ? value : '0' + value
  }
}
