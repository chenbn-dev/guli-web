import request from '@/utils/request'

export default {
  //  1.添加小节
  addVideo(video) {
    return request({
      url: `/guli/edu/video/addVideo`,
      method: 'post',
      data: video
    })
  },
  //  2.删除
  removeVideo(id) {
    return request({
      url: `/guli/edu/video/remove/${id}`,
      method: 'delete'
    })
  },
  //  3.修改
  updateVideo(video) {
    return request({
      url: `/guli/edu/video/updateVideo`,
      method: 'post',
      data: video
    })
  }
}

