<!-- 计算属性 -->
<template>
  <div>
    {{ getName }}
    <div>
      ===============
    </div>
    <div>
      {{ fullName }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'Ca',
  //  name: 'ChildSlot'
  data () {
    return {
      name: '张三',
      age: 49,
      fullName: '张三 49'
    }
  },
  computed: {
    // 计算结果  getName 变量 依赖于 name  age
    getName: function () {
      return this.name + ' ' + '----' + '年龄:' + this.age
    }
  },
  watch: {
    // 监听器  监听 name  和 age 的变化
    name: function () {
      this.fullName = this.name + ' ' + '----' + '年龄:' + this.age
    },
    age: function () {
      this.fullName = this.name + ' ' + '----' + '年龄:' + this.age
    }
  }
}
</script>

<style lang="stylus" scoped></style>
