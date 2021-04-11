<!--  -->
<template>
  <div @click='getData'>获取数据</div>
</template>

<script>
export default {
  name: 'GetPic',
  data () {
    return {
    }
  },
  methods: {
    // getData: function () {
    //   this.$axios.get('www.sanbohe.com/getShopList').then(
    //     res => {}
    //   )
    // }
    getData: function () {
      this.$axios({
        url: '/getShopList',
        method: 'post',
        data: { limit: 10, page: 1 }
      }).then(res => {
        console.log(res)
      })
    }
  }
}

</script>

<style lang='stylus' scoped>

</style>
