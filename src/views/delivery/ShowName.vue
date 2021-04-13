<template>
<div>
    {{name}}
<input @click="toParent" type="button" value="传给父组件">
</div>
</template>

<script>
export default {
  name: 'show-name',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      hello: '我是子组件的---hello'
    }
  },
  methods: {
    toParent () {
      this.$emit('get-child', this.hello)
    }
  }
}
</script>

<style>

</style>
