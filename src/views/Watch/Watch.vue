<!-- watch使用 -->
<template>
  <div>

    <div style="border:1px solid blue;">
      <p>Watch的使用</p>
      <p>{{msg}}</p>
      <p><button @click='msg = "李四"'>改名</button></p>
      <p><button @click="deepListen">watch深度监听</button></p>
    </div>

    <div style="border:1px solid red;">
      <p>computed的使用</p>
      <p>
        <input type="text"
               v-model="comMsg">
      </p>
      <p>
        {{comMsging}}
      </p>
    </div>

    <div style="border:1px solid blue;">
      <p>computed的getter使用</p>
      <p>
        <input type="text"
               v-model="comMsg1">
      </p>
      <p>
        {{comMsg11}}
      </p>
    </div>
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
      }],
      comMsg: '',
      comMsg1: ''
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
      deep: true,  // 作用是监控所有的内存地址  不加deep 兼听不到 msg1 的变化
      handler (newv, oldv) {
        console.log(newv, oldv);
      }
    }
  },
  // computed 
  computed: {
    comMsging () {
      console.log('computed');
      return this.comMsg + '好'
    },
    comMsg11: {
      // 只有当computed监测的值变化的时候，set才回被调用
      set (newV) {
        console.log('comMsg111');
        this.comMsg1 = newV;
      },
      get () {
        console.log('comMsg11');
        return this.comMsg1 + '坏';
      }
    }
  }
}

</script>

<style lang='stylus' scoped></style>
