<template>
  <div class="container">
    <div class="inner">
      <div class="innerwrapper clearfix">
        <div style="float:left">

          <el-date-picker v-model='startTime'
                          @change="startDateChange"
                          :type="type"
                          :value-format="type === 'year' ? 'yyyy' : type === 'month' ? 'yyyy-MM' : 'yyyy-MM-dd'"
                          :format="type === 'year' ? 'yyyy' : type === 'month' ? 'yyyy-MM' : 'yyyy 第 WW 周'"
                          :placeholder="type === 'year' ? '开始时间(年)' : type === 'month' ? '开始时间(月)' : '开始时间(周)'">

          </el-date-picker>
        </div>
        <div style="float: left">

          <el-date-picker v-model='endTime'
                          @change="endDateChange"
                          :type="type"
                          :value-format="type === 'year' ? 'yyyy' : type === 'month' ? 'yyyy-MM' : 'yyyy-MM-dd'"
                          :format="type === 'year' ? 'yyyy' : type === 'month' ? 'yyyy-MM' : 'yyyy 第 WW 周'"
                          :placeholder="type === 'year' ? '结束时间(年)' : type === 'month' ? '结束时间(月)' : '结束时间(周)'">

          </el-date-picker>

        </div>

        <div style="float:left">
          <el-dropdown @command="handCommand">
            <el-button type="primary">
              {{`条件查询(${type === 'year' ? '年' : type === 'month' ? '月' : '周'})`}}<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command='year'>按年查询</el-dropdown-item>
              <el-dropdown-item command='month'>按月查询</el-dropdown-item>
              <el-dropdown-item command='week'>按周查询</el-dropdown-item>

            </el-dropdown-menu>
          </el-dropdown>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'ChangeTime',
  data () {
    return {
      startTime: '',
      endTime: '',
      type: 'year',
      params: {}
    }
  },
  methods: {
    handCommand (type) {
      this.startTime = ''
      this.endTime = ''
      this.type = type
    },
    startDateChange (time) {
      this.params.startTime = time
      if (this.type === 'week') {
        console.log(this.params.startTime + '是开始时间周一')
      }
      console.log('开始时间' + this.params.startTime)
    },
    endDateChange (time) {
      this.params.endTime = time
      if (this.type === 'week') {
        console.log(this.params.endTime + '是结束时间周一')
      }
      console.log('结束时间' + this.params.endTime)
    }
  }

}
</script>

<style scoped lang='less'>
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.container {
  height: 100vh;
  width: 100vh;
  .inner {
    width: 600px;
    height: 150px;

    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>
