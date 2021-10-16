
<!--  -->
<template>
  <div>
    asd
    <div>
      <p>
        one组件========>
        <one></one>
      </p>

      <p>
        two组件===>
        <two></two>
      </p>

    </div>
  </div>

</template>

<script>
import One from './one.vue'
import Two from './two.vue'
export default {
  components: {
    One,
    Two
  },
  data () {
    return {
    }
  }
}

</script>

<style lang='stylus' scoped></style>