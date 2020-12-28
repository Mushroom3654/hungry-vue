<template>
  <div id="example" class="routerView pt-5">
    <!-- 보간법 -->
    <h1 v-html="'보간법 {{ state }}'"></h1>
    <h2>{{ msg }}</h2>
    <h3>msg = {{ msg !== null ? 'TRUE' : 'FALSE' }}</h3>

    <!-- v-if, v-show -->
    <div class="mb-2">
      <b-button variant="outline-primary" @click="show = !show">Show</b-button>
      <div>
        <h2 v-if="show">V-IF</h2>
        <h2 v-else>엘리먼트 display: none</h2>
      </div>
      <div>
        <h2 v-if="show">V-SHOW</h2>
        <h2 v-else>엘리먼트 visible: false</h2>
      </div>
    </div>

    <!-- v-for -->
    <div>
      <p>data : {{ data }}</p>
      <label>v-for : {{'>>'}} </label>
      <label v-for="(list, index) in data" :key="index">{{list}}</label>
    </div>

    <!-- v-bind -->
    <div>
      <p>dynamic property</p>
      <p v-html="'<button :style={background: ~~~}'"></p>
      <b-button variant="outline-success" v-bind:disabled="!show">v-bind</b-button>
      <b-button :variant="btnVariant">v-bind-color</b-button>
    </div>

    <!-- 수식어 -->
    <input type="text" v-model.number="num"/>
    <p>Text: {{num}}, Type: {{typeof num}}</p>

    <!-- v-model -->
    <div>
      <input type="text" v-model="txt" />
    </div>
    <p>Text: {{txt}}, Type: {{typeof txt}}</p>

    <!-- computed -->
    <div>
      <input type="text" v-model.number="num" />
    </div>
    <p v-if="num > 0">{{num}} + 2 = {{computedNum}}</p>

    <!-- watch -->
    <div>
      <input type="text" v-model="txt" />
    </div>
    <p>{{revTxt}}</p>

    <!-- 이벤트 핸들링 -->
    <div>
      <p>{{counter}}</p>
      <b-button v-on:click="counter += 1">+</b-button>
      <b-button @click="dec">-</b-button>
    </div>

    <!-- component -->
    <div class="text-center">
      <c-lotto :data="data"></c-lotto>
    </div>
<!--    <timepicker v-model="time"/>-->
<!--    <div>{{ time }}</div>-->
  </div>
</template>

<script>
import TimePicker from '@/components/datepicker/TimePicker'

export default {
  name: 'Example',
  components: {
    timepicker: TimePicker
  },
  data () {
    return {
      msg: 'Vue Example',
      btnVariant: 'primary',
      txt: '',
      revTxt: '',
      num: '',
      counter: 0,
      show: true,
      // data: [1, 2, 3, 4, 5, 6]
      data: ['a', 'b', 'c', 'd', 'e', 'f'],
      time: null
    }
  },

  computed: {
    computedNum () {
      return this.num + 2
    }
  },

  watch: {
    txt: function (nv, ov) {
      this.revTxt = nv.split('').reverse().join('')
    }
  },

  mounted () {
    document.addEventListener('touchmove', function (e) {
      let point = e.changedTouches[0]
      let target = document.elementFromPoint(point.clientX, point.clientY)
      console.log(target)
    })
  },

  methods: {
    dec () {
      this.counter -= 1
    }
  }
}
</script>

<style>
#example {
  background: white
}
#example label, p {
  font-size: 2rem
}
.balls:hover {
  transition: 0.5s;
  height:6rem !important;
  width:6rem !important;
  border-radius: 6rem !important;
  line-height: 4rem !important;
  cursor: pointer !important;
}
</style>
