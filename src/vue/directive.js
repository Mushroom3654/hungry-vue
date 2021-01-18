import Vue from 'vue'
import debounce from 'lodash/debounce'
// const isSupportIntersectionObserver = 'IntersectionObserver' in window
//
// const intersectionObserver = isSupportIntersectionObserver
//   ? new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const imageURL = entry.target.getAttribute('~~')
//         if (!imageURL.length) return
//         entry.target.style.backgroundImage = imageURL
//         observer.unobserve(entry.target)
//       }
//     })
//   }) : null

let addDash = el => {
  if (el.value.length === 5) {
    if (el.value[4] !== '-') {
      el.value = el.value.slice(0, 4) + '-' + el.value.slice(-1)
      return
    }
  }
  if (el.value.length === 8) {
    if (el.value[7] !== '-') {
      el.value = el.value.slice(0, 7) + '-' + el.value.slice(-1)
      return
    }
  }
  if (el.value.length > 10) el.value = el.value.slice(0, 10)
}

let dateValidation = el => {
  switch (el.value.length) {
    case 6:
      if (el.value.slice(-1) > 1) el.value = el.value.slice(0, el.value.length - 2) + '-0' + el.value.slice(-1)
      break
    case 7:
      if (el.value.slice(el.value.length - 2) < 1) {
        if (el.value.slice(-1) < 1) el.value = el.value.slice(0, el.value.length - 1)
      } else if (el.value.slice(el.value.length - 2, el.value.length - 1) === '1') {
        if (el.value.slice(-1) > 2) el.value = el.value.slice(0, el.value.length - 1)
      }
      break
    case 9:
      if (el.value.slice(el.value.length - 4, el.value.length - 2) === '02') {
        if (el.value.slice(-1) > 2) el.value = el.value.slice(0, el.value.length - 1)
        return
      }
      if (el.value.slice(-1) > 3) el.value = el.value.slice(0, el.value.length - 1)
      break
    case 10:
      if (el.value.slice(el.value.length - 2) < 1) {
        if (el.value.slice(-1) < 1) el.value = el.value.slice(0, el.value.length - 1)
      } else {
        if (el.value.slice(el.value.length - 2) > new Date(el.value.slice(0, 4), el.value.slice(5, 7), 0).getDate()) el.value = el.value.slice(0, el.value.length - 1)
      }
      break
  }
}

Vue.directive('daterange', {
  bind (el) {
    el.addEventListener('keypress', (e) => {
      let input = false
      if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 8) input = true
      if (!input) e.preventDefault()
    })
    el.addEventListener('input', (e) => {
      if (e.isComposing) el.value = el.value.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '')
      addDash(el)
      dateValidation(el)
    })
  }
})

Vue.directive('number', {
  bind (el, binding) {
    el.addEventListener('keypress', (e) => {
      let input = false
      let maxLength = binding.value
      if (!binding.modifiers.slice) {
        if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 8 || e.keyCode === 9) input = true
      }
      if (el.value.length < maxLength) input = true
      if (!input) e.preventDefault()
    })
    el.addEventListener('input', (e) => {
      if (e.isComposing) el.value = el.value.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '')
    })
  }
})

Vue.directive('txt', {
  bind (el, binding) {
    let slice = binding.modifiers.slice
    let maxLength = binding.value
    el.addEventListener('keypress', (e) => {
      let input = false
      if (slice && el.value.length < (maxLength || 15)) input = true
      if (!input) e.preventDefault()
    })
    if (binding.modifiers.eng) {
      el.addEventListener('input', (e) => {
        if (e.isComposing) el.value = el.value.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '')
      })
    }
  }
})

Vue.directive('scroll', {
  bind (el, binding, node) {
    const handleScroll = ev => {
      let header = document.querySelector('.header')
      if (!header) return

      if (ev.target.scrollTop === 0) header.style.backgroundColor = null
      else header.style.backgroundColor = '#1A1A1D'
    }
    const debounceHandleScroll = debounce(handleScroll, 100)
    el.addEventListener('scroll', debounceHandleScroll)
  }
})
