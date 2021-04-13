<template>
  <div>
    <div v-if="Math.random > 0.3">A</div>
    <div v-if="Math.random > 0.5">B</div>
    <div v-else-if="0.5<Math.random < 0.8">C</div>
    <div v-else>D</div>
  </div>
</template>

<script>
export default {
  name: 'if',
  data () {
    return {
      num: ''
    }
  },
  methods: {},
  computed: {}
}
</script>

<style>
</style>
