<template>
  <div class="project-seilens">
    <b-row class="project-content">
      <b-col class="col-xl-6 col-lg-6 col-12 project-content-section">
        <div class="text-area">
          <h2>세일ENS 노무자관리 앱 개발</h2>
          <h5>기존 ERP 시스템과 연동 가능한 안전관리 하이브리드 앱 제작</h5>
          <h6>2020.09 ~ 현재</h6>
          <h6>큐브코아</h6>
          <h6>건설사업팀 사원</h6>
        </div>
      </b-col>
      <b-col class="col-xl-6 col-lg-6 col-12 project-content-section">
        <div>
          <div class="seilens-labor-pic"></div>
        </div>
      </b-col>
      <b-col class="col-xl-6 col-lg-6 col-12 project-content-section">
        <div class="text-area">
          <h5>
            호반 프로젝트 직후 바로 프론트엔드, 백엔드 개발자로 투입되어
            Vue js를 사용한 페이지 제작과, 기존 호반 프로젝트에서 사용한 서드파티 라이브러리들을 자체 제작하여
            사용성을 높였고, Ajax, RESTful API를 사용한 서비스 구현을 기존과 동일하게 진행하였고
            비콘 연동 및 카카오 API를 사용한 지도 추가 등을 작업하였습니다.
            Java, SpringBoot, Mybatis + Jpa를 사용한 API 구현을 담당하였습니다.<br>
            호반 프로젝트의 경험을 기반으로 좀더 향상된 퍼포먼스와 다양한 기능들을 구현할 수 있었습니다.
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
          <h5>- Java, Spring Boot, Mybatis + Jpa를 사용한 API 제작</h5>
          <h4>Etc</h4>
          <h5>Git을 사용한 형상관리</h5>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'SeilEnsLabor',

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
