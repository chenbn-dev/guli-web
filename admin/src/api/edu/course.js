import request from '@/utils/request'

export default {
  //  1.添加课程基本信息
  addCourseInfo(courseInfo) {
    return request({
      url: `/edu/service/course/addCourseInfo`,
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
      url: `/edu/service/course/getCourseInfo/${id}`,
      method: 'get'
    })
  },
  // 修改课程信息
  updateCourseInfoData(courseInfoVO) {
    return request({
      url: `/edu/service/course/updateCourseInfo`,
      method: 'post',
      data: courseInfoVO
    })
  },
  // 课程确认信息显示
  getPublishCourseInfo(id) {
    return request({
      url: `/edu/service/course/getPublishCourseInfo/${id}`,
      method: 'get'
    })
  },
  // 课程最终发布，修改课程状态
  publishCourse(id) {
    return request({
      url: `/edu/service/course/publishCourse/${id}`,
      method: 'post'
    })
  },
  //TODO 课程列表

  //
  getListCourse() {
    return request({
      url: `/edu/service/course`,
      method: 'get'
    })
  }
}

