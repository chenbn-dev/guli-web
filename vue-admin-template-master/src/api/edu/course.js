import request from '@/utils/request'

export default {
  //  1.添加课程基本信息
  addCourseInfo(courseInfo) {
    return request({
      url: `/guli/edu/course/addCourseInfo`,
      method: 'post',
      data: courseInfo
    })
  },
  // 查询所有讲师
  getListTeacher() {
    return request({
      url: `/edu/service/teacher/findAll`,
      method: 'get'
    })
  }
}

