<template>

  <div class="app-container">

    <h2 style="text-align: center;">发布新课程</h2>

    <el-steps :active="3" process-status="wait" align-center style="margin-bottom: 40px;">
      <el-step title="填写课程基本信息"/>
      <el-step title="创建课程大纲"/>
      <el-step title="发布课程"/>
    </el-steps>

    <div class="ccInfo">
      <img :src="publishCourse.cover">
      <div class="main">
        <h2>{{ publishCourse.title }}</h2>
        <p class="gray"><span>共{{ publishCourse.lessonNum }}课时</span></p>
        <p><span>所属分类：{{ publishCourse.subjectLevelOne }} — {{ publishCourse.subjectLevelTwo }}</span></p>
        <p>课程讲师：{{ publishCourse.teacherName }}</p>
        <h3 class="red">￥{{ publishCourse.price }}</h3>
      </div>
    </div>

    <div>
      <el-button @click="previous">返回修改</el-button>
      <el-button :disabled="saveBtnDisabled" type="primary" @click="publish">发布课程</el-button>
    </div>
  </div>
</template>
<script>
  import course from "@/api/edu/course";
export default {
  data() {
    return {
      saveBtnDisabled: false, // 保存按钮是否禁用
      courseId: '',
      publishCourse: {}
    }
  },
  created() {
    // 获取路由中的课程id
    if (this.$route.params && this.$route.params.id) {
      this.courseId = this.$route.params.id
      alert(this.courseId)
      //调用接口方法根据课程id查询
      this.getCoursePublishId()
    }

  },
  methods: {
    // 根据课程id查询课程确认信息
    getCoursePublishId() {
      alert(1)
      course.getPublishCourseInfo(this.courseId).then(response => {
        this.publishCourse = response.data.publishCourse
        alert(JSON.stringify(this.publishCourse))
      })
    },
    previous() {
      this.$router.push({ path: '/course/chapter/' + this.courseId })
    },
    publish() {
      this.$router.push({ path: '/course/list' + this.courseId })
    }
  }
}
</script>
<style scoped>
  .ccInfo {
    background: #f5f5f5;
    padding: 20px;
    overflow: hidden;
    border: 1px dashed #DDD;
    margin-bottom: 40px;
    position: relative;
  }
  .ccInfo img {
    background: #d6d6d6;
    width: 500px;
    height: 278px;
    display: block;
    float: left;
    border: none;
  }
  .ccInfo .main {
    margin-left: 520px;
  }

  .ccInfo .main h2 {
    font-size: 28px;
    margin-bottom: 30px;
    line-height: 1;
    font-weight: normal;
  }
  .ccInfo .main p {
    margin-bottom: 10px;
    word-wrap: break-word;
    line-height: 24px;
    max-height: 48px;
    overflow: hidden;
  }

  .ccInfo .main p {
    margin-bottom: 10px;
    word-wrap: break-word;
    line-height: 24px;
    max-height: 48px;
    overflow: hidden;
  }
  .ccInfo .main h3 {
    left: 540px;
    bottom: 20px;
    line-height: 1;
    font-size: 28px;
    color: #d32f24;
    font-weight: normal;
    position: absolute;
  }
</style>
