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
  },
  // 根据课程id查询课程基本信息
  getCourseInfoData(id) {
    return request({
      url: `/guli/edu/course/getCourseInfo/${id}`,
      method: 'get'
    })
  },
  // 修改课程信息
  updateCourseInfoData(courseInfoVO) {
    return request({
      url: `/guli/edu/course/updateCourseInfo`,
      method: 'post',
      data: courseInfoVO
    })
  },
  // 课程确认信息显示
  getPublishCourseInfo(id) {
    return request({
      url: `/guli/edu/course/getPublishCourseInfo/${id}`,
      method: 'get'
    })
  }
}

