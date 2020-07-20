import request from '@/utils/request'
// import id from "element-ui/src/locale/lang/id";

export default {
  //查询课程条件分页
  getCourseList(page,limit,searchObj) {
    return request({
      url: `/edu/service/coursefront/getFrontCourseList/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  // 查询所有分类的方法
  getAllSubject() {
    return request({
      url: `/edu/service/subject/getAllSubject`,
      method: 'get'
    })
  },
  // 课程详情的方法
  getCourseInfo(id) {
    return request({
      url: `/edu/service/coursefront/getFrontCourseInfo/${id}`,
      method: 'get'
    })
  }
}
