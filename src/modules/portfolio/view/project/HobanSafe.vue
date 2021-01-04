<template>
  <div class="project-hoban">
    <b-row class="project-content">
      <b-col class="col-xl-6 col-lg-6 col-12 project-content-section">
        <div class="text-area">
          <h2>호반건설 안전관리 앱 개발</h2>
          <h5>기존 ERP 시스템과 연동 가능한 안전관리 하이브리드 앱 제작</h5>
          <h6>2020.06 ~ 2020.09</h6>
          <h6>큐브코아</h6>
          <h6>솔루션서비스팀 사원</h6>
        </div>
      </b-col>
      <b-col class="col-xl-6 col-lg-6 col-12 project-content-section">
        <div>
          <div class="hoban-safe-pic"></div>
          <div class="hoban-safe-pic2"></div>
        </div>
      </b-col>
      <b-col class="col-xl-6 col-lg-6 col-12 project-content-section">
        <div class="text-area">
          <h5>
            프론트엔드 개발자로 참여하게 되어
            Vue js, BootStrap, 서드파티 라이브러리 (Tui Grid, datepicker...) 들을
            사용한 페이지 제작 및 디자인과 Ajax, RESTful API를 사용한 서비스 구현,
            컴포넌트 제작 및 모듈화 작업 등을 진행하였습니다.
            프로젝트 중반부터 프론트 개발과 동시에 서비스 구현, Java, SpringBoot, Mybatis를 사용한 API 구현을 담당하였습니다.<br>
            첫 프로젝트라 불안한 감이 없잖아 있었지만 끊임없는 맨땅에 헤딩하는 과정을 거쳐 큰 이슈 없이 제작을 완료하였고 서비스 할 수 있었습니다.
          </h5>
        </div>
      </b-col>
      <b-col class="col-xl-6 col-lg-6 col-12 project-content-section">
        <div class="text-area">
          <h3 class="text-area-title">※ 담당</h3>
          <h4>Frontend</h4>
          <h5>- Vue js, Bootstrap을 사용한 페이지 제작 및 디자인</h5>
          <h5>- 서드 파티라이브러리를 사용한 기능 구현 (그리드, 캘린더 등)</h5>
          <h5>- Ajax, RESTful API를 이용한 서비스 구현 </h5>
          <h4>Backend</h4>
          <h5>- Java, Spring Boot, Mybatis를 사용한 API 제작</h5>
          <h4>Etc</h4>
          <h5>Git을 사용한 형상관리</h5>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'HobanSafe',

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
