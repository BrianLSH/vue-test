<!--  -->
<template>
  <div>
    <input @click="toTwo"
           type="button"
           value="让兄弟two每次加2">
  </div>
</template>

<script>
import eventBus from '../../assets/js/utils/eventBus.js'
export default {
  num: 2,
  data () {
    return {
      name: 'One'
    }
  },
  methods: {
    toTwo () {
      console.log(123)
      eventBus.$emit('sendToTwo', '来自a的')
    }
  }
}

</script>

<style lang='stylus' scoped></style>
