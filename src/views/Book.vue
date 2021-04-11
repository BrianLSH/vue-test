<template>
  <div>
      book
      <hr>
      <table>
          <tbody>
<tr v-for="item in books" :key="item.id">
    <td>{{item.name}}</td>
    <td>{{item.id}}</td>
    <td>{{item.data}}</td>
    <td>
        <span @click="edit(item.id)">修改</span>
        <span>|</span>
        <span @click="del(item.id)">删除</span>
    </td>
</tr>
          </tbody>
      </table>

      <div>
          <label for="id">编号</label>
          <input :disabled="flag"  type="text" id='id' v-model="id">
          <label for="name">名称</label>
          <input type="text" id='name' v-model="name">
<button @click="handleClick">提交</button>
      </div>
  </div>

</template>

<script>

export default {
  name: 'Book',

  data: function () {
    return {
      id: '',
      name: '',
      flag: false,
      books: [{
        id: 1,
        name: '三国演义',
        date: ''
      }, {
        id: 2,
        name: '水浒传',
        date: ''
      }, {
        id: 3,
        name: '红楼梦',
        date: ''
      }, {
        id: 4,
        name: '西游记',
        date: ''
      }]
    }
  },
  methods: {
    handleClick: function () {
      if (this.flag) {
        this.books.some((item) => {
        //   if (item.id === this.id) {
        //     item.name = this.name
        //     return true
        //   }

          return item.id !== this.id
        })
        this.flag = false
      } else {
        var book = {}
        book.id = this.id
        book.name = this.name
        book.data = ''
        console.log(book)
        this.books.push(book)
        console.log(this.books)
        // this.id = ''
        // this.name = ''
      }
      this.id = ''
      this.name = ''
    },
    edit: function (id) {
      console.log(id)
      this.flag = true
      var book = this.books.filter(function (item) {
        return item.id === id
      })
      console.log(book)
      this.id = book[0].id
      this.name = book[0].name
    },
    del: function (id) {
    //   var index = this.books.findIndex((item) => {
    //     return item.id === id
    //   })
    //   this.books.splice(index, 1)
      this.books = this.books.filter(function (item) {
        return item.id !== id
      })
    }
  }

}
</script>

<style>

</style>
