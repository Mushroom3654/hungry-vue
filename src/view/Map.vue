<template>
  <div class="routerView p-4">
    <kakaomap :center="location"/>
  </div>
</template>

<script>
import Kakaomap from '@/components/Kakaomap'

export default {
  name: 'Map',
  components: {
    kakaomap: Kakaomap
  },
  data () {
    return {
      location: {
        latitude: null,
        longitude: null
      }
    }
  },
  mounted () {
    let self = this
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        self.location.latitude = position.coords.latitude
        self.location.longitude = position.coords.longitude
      })
    }
  }
}
</script>

<style lang="css" scoped>

</style>
