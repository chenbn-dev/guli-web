import request from '@/utils/request'

export default {
  //  1.根据课程id获取章节和小节的数据列表
  gerAllChapterVideo(courseId) {
    return request({
      url: `/edu/service/chapter/getChapterVideo/${courseId}`,
      method: 'get'
    })
  },
  //  2.添加章节
  addChapter(chapter) {
    return request({
      url: `/edu/service/chapter/addChapter`,
      method: 'post',
      data: chapter
    })
  },
  //  3.查询章节
  getChapter(chapterId) {
    return request({
      url: `/edu/service/chapter/getChapterInfo/${chapterId}`,
      method: 'get'
    })
  },
  //  4.修改
  updateChapter(chapter) {
    return request({
      url: `/edu/service/chapter/updateChapter`,
      method: 'post',
      data: chapter
    })
  },
  //  4.删除
  deleteChapter(chapterId) {
    return request({
      url: `/edu/service/chapter/${chapterId}`,
      method: 'delete'
    })
  }
}

