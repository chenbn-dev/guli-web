import request from '@/utils/request'

export default {
  //  1.根据课程id获取章节和小节的数据列表
  gerAllChapterVideo(courseId) {
    return request({
      url: `/guli/edu/chapter/getChapterVideo/${courseId}`,
      method: 'get'
    })
  }
}

