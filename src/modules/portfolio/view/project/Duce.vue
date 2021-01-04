<template>
  <div class="project-duce">
    <b-row class="project-content">
      <b-col class="col-xl-6 col-lg-6 col-12 project-content-section">
        <div class="text-area">
          <h2>Duce</h2>
          <h5>캡스톤 전시관 사이트</h5>
          <h6>2019-03 ~ 2019.06</h6>
          <h6>졸업작품</h6>
          <div style="text-align: left">
            <a class="project-link" href="https://github.com/devgswb/duce">https://github.com/devgswb/duce</a>
          </div>
        </div>
      </b-col>
      <b-col class="col-xl-6 col-lg-6 col-12 project-content-section">
        <div>
          <div class="duce-img"></div>
        </div>
      </b-col>
      <b-col class="col-xl-6 col-lg-6 col-12 project-content-section">
        <div class="text-area">
          <h5>
            졸업생이라면 후배들이 어떤 작품을 만들었는지 궁금할거란
            생각이 들었고, 또한 재학생이라면 힘들게 만든 작품이
            아무런 자료도 남기지 않고 잊혀진다면 그것도 아쉬운 일이기에
            캡스톤 디자인 전시관은 재학생에겐 보람을, 졸업생에겐 추억을
            떠올리는 공간이 될 수 있을 것이란 취지로 제작하게 되었습니다
          </h5>
        </div>
      </b-col>
      <b-col class="col-xl-6 col-lg-6 col-12 project-content-section">
        <div class="text-area">
          <h3 class="text-area-title">※ 무엇으로 만들었나?</h3>
          <h5>- Ubuntu 18.04 Bionic Beaver(Server)</h5>
          <h5>- Java, Spring Boot(MVC), Maven(Gson, Scalr...)</h5>
          <h5>- Javascript(JQuery, bxSlider...)</h5>
          <h5>- Bootstrap 4 & Material Design Lite</h5>
          <h5>- MySQL, Git</h5>
        </div>
      </b-col>
      <b-col class="col-xl-6 col-lg-6 col-12 project-content-section">
        <div class="text-area">
          <h3 class="text-area-title">※ 담당</h3>
          <h5>- Jsp를 사용한 로그인 회원가입 페이지 작성</h5>
          <h5>- Spring Security 프레임워크를 사용한 권한, 인증 설정</h5>
          <h5>- 로그인, 회원가입, ID, 비밀번호 찾기 기능 구현</h5>
          <h5>&nbsp;(비밀번호 암호화, 권한(ROLE) 설정 등)</h5>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Duce',

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
