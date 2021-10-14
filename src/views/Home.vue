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
    <div style="border:1px solid red;margin:20px">
      <h3>路由传参</h3>
      <p>
        <Send />
        <Receive />
      </p>
    </div>
  </div>
</template>

<script>
import Foo from './Foo'
import Bar from './Bar'
import Send from './PostData/Send'
import Receive from './PostData/Receive'
export default {
  name: 'Home',
  components: {
    Foo,
    Bar,
    Send,
    Receive
  }
}
</script>
