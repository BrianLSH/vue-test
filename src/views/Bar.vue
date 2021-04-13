<template>
  <div class="com">
    <h2>Bar 组件</h2>
    <p>{{ $store.state.count }}</p>
    <button @click="$store.dispatch('jian')">我不是助手函数-</button>
    <button @click="jian()">助手函数-</button>
    <p @click='miniusNum'> <button>点我异步减</button></p>
    <p @click='miniusNum1'> <button>助手函数异步减</button></p>
    <div>
      我是user模块下的user

      <p>mapState模块化获得的==...mapState('users', ['uName']),===={{ uName }}</p>
      <p>mapState模块化获得的==......mapState('product', ['pName']),,===={{ pName }}</p>

      <p>mapState助手函数获得的==...... ...mapStateProduct(['pSex']),,===={{ pSex }}</p>
    </div>
    <div>
      <p>我是user模块的getter通过----对象方式----...mapGetters({ getConsole: 'users' })获得----------{{getConsole}}</p>
      <p>我是user模块的getter通过----数组字符串方式----...mapGetters('users', ['getConsole2'])获得----------{{getConsole2}}</p>
    </div>
    </div>

</template>

<script>
import {
  mapActions, mapState,
  createNamespacedHelpers,
  mapGetters
} from 'vuex'
const { mapState: mapStateProduct } = createNamespacedHelpers('product')
export default {
  methods: {
    ...mapActions(['jian']),
    // miniusNum: function () {
    //   this.$store.dispatch('jian')
    // }
    miniusNum () {
      // this.$store.dispatch('jian')
      this.jian()
    },
    miniusNum1 () {
      this.jian()
    }

  },
  computed: {
    ...mapState('users', ['uName']),
    ...mapState('product', ['pName']),
    ...mapStateProduct(['pName', 'pSex']),
    ...mapGetters({
      getConsole: 'users/getConsole'
    }),
    ...mapGetters('users', ['getConsole2'])
  }
}
</script>

<style></style>
