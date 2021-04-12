<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    {{ $store.state.count }} || {{$store.state.count}}
    <div style="background-color:red;">
      <p>我是getters</p>
      <p>
        {{$store.getters.getDataByGetters}}
      </p>
    </div>
    <hr>
    <Foo />
    <Bar />
  </div>
</template>

<script>
import Foo from './Foo'
import Bar from './Bar'
export default {
  name: 'Home',
  components: {
    Foo,
    Bar
  }
}
</script>
