<template>
  <div class="project-araboza">
    <b-row class="project-content">
      <b-col class="col-xl-6 col-lg-6 col-12 project-content-section">
        <div class="text-area">
          <h2>Araboza (아라보자)</h2>
          <h5>커뮤니티 화제도 분석 웹 애플리케이션</h5>
          <h6>2019-06 ~ 2019.10</h6>
          <h6>Capstone Project</h6>
          <h6>전국 캡스톤 프로젝트 경진대회 참가</h6>
          <div style="text-align: left">
            <a class="project-link" href="https://github.com/devgswb/Araboza">https://github.com/devgswb/Araboza</a>
          </div>
        </div>
      </b-col>
      <b-col class="col-xl-6 col-lg-6 col-12 project-content-section">
        <div>
          <div class="araboza-img-1"></div>
        </div>
      </b-col>
      <b-col class="col-xl-6 col-lg-6 col-12 project-content-section">
        <div class="text-area">
          <h5>빅데이터가 화두가 되고, 인플루엔서가 등장하며, 오늘날에는 각 커뮤니티 반응조차 중요한 팩터로 기사화가 이루어지고 있으며
            기업들은 이러한 화제 및 데이터 분석을 빅데이터 솔루션 업체에 의뢰하여 제공받고 있습니다<br>
            반면 일반인들이 종합적인 데이터에 접근하긴 쉽지 않고, 그런 부분에서 대중들이 많이 이용하는 커뮤니티를 선정하고, 해당 사이트에 대한 데이터를 간편하게 제공한다면 정보 접근성 측면에서 기여할 수 있지 않을까? 하는 기본 아이디어에서 이 프로젝트는 시작되게 되었습니다.</h5>
        </div>
      </b-col>
      <b-col class="col-xl-6 col-lg-6 col-12 project-content-section">
        <div class="text-area">
          <h3 class="text-area-title">※ 무엇으로 만들었나?</h3>
          <h5>- Ubuntu 18.04 Bionic Beaver(Server)</h5>
          <h5>- Javascript, React.js, Amchart.js(Frontend)</h5>
          <h5>- Python, Django, MongoDB(Backend)</h5>
          <h5>- BeautifulSoup 라이브러리(크롤링)</h5>
          <h5>- Git, Sourcetree, Robo 3t</h5>
        </div>
      </b-col>
      <b-col class="col-xl-6 col-lg-6 col-12 project-content-section">
        <div class="text-area">
          <h3 class="text-area-title">※ 담당</h3>
          <h4>Frontend</h4>
          <h5>- Vue js, Bootstrap을 사용한 페이지 제작 및 디자인</h5>
          <h5>- 공용 컴포넌트 제작 및 유틸 로직 구현</h5>
          <h5>- Ajax, RESTful API를 이용한 서비스 구현 </h5>
          <h4>Backend</h4>
          <h5>- Java, Spring Boot, Mybatis + Jpa를 사용한 API 제작</h5>
          <h4>Etc</h4>
          <h5>Git을 사용한 형상관리</h5>
        </div>
      </b-col>
      <b-col class="col-xl-6 col-lg-6 col-12 project-content-section">
        <div>
          <div class="araboza-img-2"></div>
        </div>
      </b-col>
    </b-row>
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
