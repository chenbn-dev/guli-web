import request from '@/utils/request'

export default {
  //  课程分类列表
  getAllSubjectData() {
    return request({
      url: `/edu/service/subject/getAllSubject`,
      method: 'get'
    })
  }
}

