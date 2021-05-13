<template>
  <div class="com">
    <h2>Foo 组件</h2>
    <div>
      <p @click="addNum">
        <button>我是在实例中通多this.$store.commit('add')直接同步改变的</button>
      </p>
      <p @click="add(1)">
        <button>我是在实例中通多mapMutation映射到methods方法中直接同步改变的</button>
      </p>
      <p>
        我是在模板中通过$store.commit直接同步修改的<button @click="$store.commit('add', 1)">
          +
        </button>
        <!-- @click="$store.commit('add')" -->
      </p>

      <p>
        ---------- 我是通多$store.state.count直接访问的=====》
        {{ $store.state.count }}
      </p>

      <div>
        <p>我是通多计算属性变化1=====》{{ showData }}</p>
      </div>

      <div>
        <p>我是通多getter获取的=====》{{ $store.getters.getDataByGetters }}</p>
        <p>我是通多mapGetter获取的=====》{{ getDataByGetters }}</p>
        <p>我是通多mapGetter获取的=====》{{ findUserById(1) }}</p>
        <p>我是通多Getter获取的=====》{{ $store.getters.findUserById(2) }}</p>
        <p>通过让 getter 返回一个函数，来实现给 getter 传参在你对 store 里的数组进行查询时非常有用》{{ name }}</p>
      </div>
      <div>
        <p>我是通多mapState数组获取的 映射到计算属性=====》{{ counts }}</p>
        <p>我是通多mapState对象获取的=====》{{ counting }}</p>
        <p>我是通多mapState对象获取的 映射到计算属性=====》{{ totalCount }}</p>
      </div>

      <div>
        {{ getNum }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'foo',
  data () {
    return {
      num: 1,
      name: ''
    }
  },
  methods: {
    numPlus: function () {
      setInterval(() => {
        this.num++
      }, 1000)
    },

    addNum () {
      this.$store.commit('add', 2)
    },
    getName () {
      const { name } = this.findUserById(4)
      this.name = name
    },
    ...mapMutations(['add'])
  },
  computed: {
    // 展开运算符
    // ...mapState(['count']),

    ...mapState({
      // counts: function (state) {
      //   return state.count
      // }

      // 箭头函数
      counts: (state) => state.count,
      counting: (state) => state.count,
      totalCount: (state) => state.count
    }),

    ...mapGetters(['getDataByGetters', 'findUserById']),
    showData: function () {
      return this.$store.state.count
    },

    getNum () {
      return this.num
    }
  },
  mounted: function () {
    this.numPlus()
    this.getName()
  }
}
</script>

<style></style>
