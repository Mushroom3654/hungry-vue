<template>
  <div class="test-slot-container">
    <slot name="title">Title in Slot</slot>
    <slot name="content">Content in Slot</slot>
    <slot name="scope" :data="slotData">{{ slotData.scope }}</slot>
  </div>
</template>

<script>
export default {
  name: 'TestSlot',

  data () {
    return {
      slotData: {
        scope: 'Scope in Slot'
      }
    }
  }
}
</script>

<style scoped>

</style>
