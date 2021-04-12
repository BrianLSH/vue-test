<template>
  <div class="com">
    <h2>Foo 组件</h2>
    <div>
      <p @click="addNum">
        <button>我是在实例中通多this.$store.commit('add')直接同步改变的</button>
      </p>
      <p>
        我是在模板中通过$store.commit直接同步修改的<button
          @click="$store.commit('add', 1)"
        >
          +
        </button>
        <!-- @click="$store.commit('add')" -->
      </p>

      <p>
        ---------- 我是通多$store.state.count直接访问的=====》
        {{ $store.state.count }}
      </p>

      <div>
        <p>我是通多计算属性变化=====》{{ showData }}</p>
      </div>

      <div>
        <p>我是通多getter获取的=====》{{ $store.getters.getDataByGetters }}</p>
      </div>
      <div>
        <p>我是通多mapState数组获取的=====》{{ counts }}</p>
         <p>我是通多mapState对象获取的=====》{{ counting }}</p>
           <p>我是通多mapState对象获取的=====》{{ totalCount }}</p>
      </div>

      <div>
        {{ getNum }}
      </div>
    </div>
  </div>
</template>

<script>
// console.log(this.$store.state.count)
import { mapState } from 'vuex'
export default {
  name: 'foo',
  data () {
    return {
      num: 1
    }
  },
  methods: {
    // addNum: function () {
    //   this.$store.commit('add', 2)
    // }
    numPlus: function () {
      setInterval(() => {
        this.num++
      }, 1000)
    },

    addNum () {
      this.$store.commit('add', 2)
    }
  },
  computed: {
    // 展开运算符
    // ...mapState(['count']),

    ...mapState({
      // counts: function (state) {
      //   return state.count
      // }

      // 箭头函数
      counts: state => state.count,
      counting: state => state.count,
      totalCount: state => state.count
    }),
    showData: function () {
      return this.$store.state.count
    },
    getNum: function () {
      return this.num
    }
  },
  mounted: function () {
    this.numPlus()
  }
}
</script>

<style></style>
