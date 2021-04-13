<template>
  <div>
    <input type="text" v-model="nm" />
    <div>
      {{childMessage}}
    </div>
    ================== ================
    <show-name @get-child="showChild" :name="nm"></show-name>
  </div>
</template>

<script>
import showName from './ShowName.vue'
export default {
  components: { showName },
  name: 'delivery',
  props: ['id'],
  data () {
    return {
      nm: '',
      childMessage: ''
    }
  },
  methods: {
    showChild (data) {
      this.childMessage = data
    }
  }
}
</script>

<style scoped lang='less'>
div {
  margin: 0px auto;
}
</style>
