<!-- watch使用 -->
<template>
  <div>
    <p>{{msg}}</p>
    <p><button @click='msg = "李四"'>改名</button></p>
    <p><button @click="deepListen">深度监听</button></p>
  </div>
</template>

<script>
export default {
  name: 'Watch',
  data () {
    return {
      msg: '张三',
      msg1: [{
        name: '张三', children: [
          { age: 30 }
        ]
      }]
    }
  },
  methods: {
    deepListen () {
      console.log('dep');
      this.msg1[0].children[0].age = 20;
    }
  },
  watch: {
    // 简单类型用的 函数  监听
    msg (newval, oleval) {
      deep: true;
      console.log(newval, oleval);
    },
    // 深度监听 是 对象 || 数组
    // new  old 一样， 因为watch 坚挺的msg1  内存地址始终没变，访问的都是同一个内存空间
    "msg1": {
      deep: true,  // 作用是监控所有的内存地址
      handler (newv, oldv) {
        console.log(newv, oldv);
      }
    }
  }
}

</script>

<style lang='stylus' scoped></style>
