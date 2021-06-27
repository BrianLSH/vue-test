<<<<<<< HEAD
<!--  -->
<template>
  <div>
    asd
    <div>
      <p>
        one组件========>
        <one></one>
      </p>

      <p>
        two组件===>
        <two></two>
      </p>

    </div>
  </div>

</template>

<script>
import One from './one.vue'
import Two from './two.vue'
export default {
  components: {
    One,
    Two
  },
  data () {
    return {
    }
  }
}

</script>

<style lang='stylus' scoped></style>
=======
<template>
  <div>
    <p>父组件</p>
    <p>测试一下git</p>
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
>>>>>>> bd6834983119d1460aa99f00bbe5d798381e6bb3
