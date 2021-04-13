<template>
  <div>
    {{ name | newName | plusAgain }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '张三'
    }
  },
  filters: {
    newName (value) {
      return value + '123'
    },
    plusAgain (value) {
      return value + '456'
    }
  }
}
</script>

<style>
</style>
