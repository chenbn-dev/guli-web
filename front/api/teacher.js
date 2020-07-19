import request from '@/utils/request'

export default {
  //讲师分页查询方法
  getTeacherList(page,limit) {
    return request({
      url: `/edu/service/teacher-front/getTeacherFrontList/${page}/${limit}`,
      method: 'post'
    })
  },
  getTeacherInfo(id) {
    return request({
      url: `/edu/service/teacher-front/getTeacherFrontInfo/${id}`,
      method: 'get'
    })
  }
}
