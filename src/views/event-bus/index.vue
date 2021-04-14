<template>
  <div>
    <p>父组件</p>
<brother-one></brother-one>

<brother-two></brother-two>
  </div>
</template>

<script>
import BrotherOne from './BrotherOne.vue'
import BrotherTwo from './BrotherTwo.vue'

export default {
  name: 'eventbus',
  components: {
    BrotherOne,
    BrotherTwo
  }

}
</script>

<style>

</style>
