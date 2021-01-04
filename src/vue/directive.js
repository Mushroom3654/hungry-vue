import Vue from 'vue'
import debounce from 'lodash/debounce'

Vue.directive('scroll', {
  bind (el, binding, node) {
    const handleScroll = ev => {
      let header = document.querySelector('.header')
      if (!header) return
      console.log(ev)
      if (ev.target.scrollTop === 0) header.style.backgroundColor = null
      else header.style.backgroundColor = '#1A1A1D'
    }
    const debounceHandleScroll = debounce(handleScroll, 100)
    el.addEventListener('scroll', debounceHandleScroll)
  }
})
