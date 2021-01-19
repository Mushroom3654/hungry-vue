<template>
  <div>
    <div id="map">
      <span class="kakaomap-address" v-if="juso !== null">{{juso}}</span>
    </div>

    <p class="text-white text-left mb-0">위도: {{this.latitude}}, 경도: {{this.longitude}}</p>
    <div class="d-flex justify-content-center">
      <b-button variant="outline-primary" @click="setCenter">현재 위치</b-button>
      <b-form-input class="w-25 ml-4" v-model="search" @keypress.enter="$refs.search.click()"/>
      <b-button ref="search" class="ml-2" variant="outline-success" @click="searchLocation">검색</b-button>
    </div>
  </div>
</template>

<script>
import setting from '@/vue/kakaomapSetting'

export default {
  name: 'Kakaomap',

  props: {
    center: {type: Object}
  },

  data () {
    return {
      map: null,
      latitude: null,
      longitude: null,
      search: null,
      juso: null
    }
  },

  mounted () {
    this.getCenter()
    if (window.kakao && window.kakao.maps) {
      setTimeout(() => { this.initMap() }, 100)
    } else {
      const script = document.createElement('script')
      /* global kakao */
      script.onload = () => {
        setTimeout(() => { kakao.maps.load(this.initMap) }, 100)
      }
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${setting.key}&libraries=services`
      document.head.appendChild(script)
    }
  },

  methods: {
    initMap () {
      let container = document.getElementById('map')
      let options = {
        center: new kakao.maps.LatLng(this.center.latitude, this.center.longitude),
        level: 3
      }
      let map = new kakao.maps.Map(container, options)
      let marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(this.center.latitude, this.center.longitude)
      })
      marker.setMap(map)

      // 지도에 컨트롤 띄우기
      map.addControl(new kakao.maps.MapTypeControl(), kakao.maps.ControlPosition.TOPRIGHT)
      map.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.RIGHT)

      // 지도 중심 변경 이벤트
      kakao.maps.event.addListener(map, 'dragend', () => {
        let lat = map.getCenter()
        this.latitude = lat.getLat()
        this.longitude = lat.getLng()
      })

      // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시
      kakao.maps.event.addListener(map, 'idle', () => {
        this.searchAddrFromCoords(map.getCenter(), this.displayCenterInfo)
      })
      // 현재 지도 중심좌표로 주소를 검색
      this.searchAddrFromCoords(map.getCenter(), this.displayCenterInfo)

      this.map = map

      // 지형도 띄우기
      // map.setMapTypeId(kakao.maps.MapTypeId.HYBRID)
    },

    searchAddrFromCoords (coords, callback) {
      let geocoder = new kakao.maps.services.Geocoder()
      // 좌표로 행정동 주소 정보를 요청합니다
      geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback)
    },

    displayCenterInfo (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        for (let i = 0; i < result.length; i++) {
          // 행정동의 region_type 값은 'H' 이므로
          if (result[i].region_type === 'H') {
            this.juso = result[i].address_name
            break
          }
        }
      }
    },

    getCenter () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.latitude = position.coords.latitude
          this.longitude = position.coords.longitude
        })
      }
    },

    setCenter () {
      this.getCenter()
      setTimeout(() => { this.map.panTo(new kakao.maps.LatLng(this.latitude, this.longitude), 100) }, 10)
    },

    searchLocation () {
      if (this.search === null) return
      let geocoder = new kakao.maps.services.Geocoder()
      geocoder.addressSearch(this.search, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          let coords = new kakao.maps.LatLng(result[0].y, result[0].x)
          this.latitude = result[0].y
          this.longitude = result[0].x
          let marker = new kakao.maps.Marker({
            map: this.map,
            position: coords
          })
          marker.setMap(this.map)
          this.map.setCenter(coords)
        }
      })
    }
  }
}
</script>

<style>
#map {
  /* width: 360px; */
  width:100%;
  height: 550px
}
.kakaomap-address {
  background:rgba(255, 255, 255, 0.8);
  position: absolute;
  padding: 5px;
  font-weight: bold;
  top: 1%;
  left: 1%;
  z-index: 999;
  color:black;
}
</style>
