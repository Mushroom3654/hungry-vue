<template>
  <div>
    <b-row class="project-content">
      <b-col class="col-xl-6 col-lg-6 col-12 project-content-section">
        <div class="text-area">
          <h2>차세대 ERP 프로젝트</h2>
          <h5>기존 시스템을 웹 버전의 서비스로 새로 재구축하는 프로젝트</h5>
          <h6>2020.01 ~ 2020.06</h6>
          <h6>큐브코아</h6>
          <h6>솔루션서비스팀 사원</h6>
        </div>
      </b-col>
      <b-col class="col-xl-6 col-lg-6 col-12 project-content-section">
        <div class="text-area">
          <h5>
            입사 후 첫 프로젝트로 프론트엔드 개발자로 투입되어
            Vue js, Bootstrap을 사용한 페이지 제작과 디자인, Ajax, RESTful API를 사용한 서비스 구현을 담당하였습니다.
            서비스하기 위한 프로젝트는 아니었고 차후 회사의 시스템의 변화를 위한
            프로토타입 프로젝트로 Javascript, Vuejs, Axios의 숙달과 연습 및 협업을 경험하는 프로젝트였습니다.
          </h5>
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
  name: 'NewErp',

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
