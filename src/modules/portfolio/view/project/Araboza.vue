<template>
  <div>
    <b-carousel
      id="card-project"
      class="card-project"
      v-model="slide"
      :interval="10000"
      controls
      img-width="1024"
      img-height="350"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-blank img-blank-color="#1A1A1D">
        <b-card>
          <div class="left-right">
            <div style="width:50%">
              <h2>Araboza (아라보자)</h2>
              <h5>커뮤니티 화제도 분석 웹 애플리케이션 (Capstone)</h5>
              <h6>2019-06 ~ 2019.10</h6>
            </div>
            <div>
              <div class="araboza-img-1"></div>
<!--              <img src="@/../static/image/image-araboza-1.png" width="300px" height="100%"/>-->
            </div>
          </div>
          <a class="project-link" href="https://github.com/devgswb/Araboza">https://github.com/devgswb/Araboza</a>
        </b-card>
      </b-carousel-slide>
      <b-carousel-slide img-blank img-blank-color="#1A1A1D">
        <b-card>
          <div class="card-text-area">
            <h5>빅데이터가 화두가 되고, 인플루엔서가 등장하며, 오늘날에는 각 커뮤니티 반응조차 중요한 팩터로 기사화가 이루어지고 있으며
              기업들은 이러한 화제 및 데이터 분석을 빅데이터 솔루션 업체에 의뢰하여 제공받고 있습니다<br>
              반면 일반인들이 종합적인 데이터에 접근하긴 쉽지 않고, 그런 부분에서 대중들이 많이 이용하는 커뮤니티를 선정하고, 해당 사이트에 대한 데이터를 간편하게 제공한다면 정보 접근성 측면에서 기여할 수 있지 않을까? 하는 기본 아이디어에서 이 프로젝트는 시작되게 되었습니다.</h5>
          </div>
        </b-card>
      </b-carousel-slide>
      <b-carousel-slide img-blank img-blank-color="#1A1A1D">
        <b-card>
          <div class="card-text-area">
            <h3 class="card-text-area-title">※ 무엇으로 만들었나?</h3>
            <h5>- Ubuntu 18.04 Bionic Beaver(Server)</h5>
            <h5>- Javascript, React.js, Amchart.js(Frontend)</h5>
            <h5>- Python, Django, MongoDB(Backend)</h5>
            <h5>- BeautifulSoup 라이브러리(크롤링)</h5>
            <h5>- Git, Sourcetree, Robo 3t</h5>
          </div>
        </b-card>
      </b-carousel-slide>
      <b-carousel-slide img-blank img-blank-color="#1A1A1D">
        <b-card>
          <div class="card-text-area">
            <div class="left-right">
              <div style="width:50%">
                <h3 class="card-text-area-title">※ 담당</h3>
                <h5>- React Js를 사용한 결과 페이지 제작</h5>
                <h5>- 차트 라이브러리를 사용한 데이터 시각화</h5>
              </div>
              <div>
                <div class="araboza-img-2"></div>
<!--                <img src="@/../static/image/image-araboza-2.png" width="300px" height="100%"/>-->
              </div>
            </div>
          </div>
        </b-card>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'Araboza',

  data () {
    return {
      slide: 0,
      sliding: null
    }
  },

  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },

    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
