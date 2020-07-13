import request from '@/utils/request'

export default {
  //  1.添加小节
  addVideo(video) {
    return request({
      url: `/edu/service/video/addVideo`,
      method: 'post',
      data: video
    })
  },
  //  2.删除
  removeVideo(id) {
    return request({
      url: `/edu/service/video/remove/${id}`,
      method: 'delete'
    })
  },
  //  3.修改
  updateVideo(video) {
    return request({
      url: `/edu/service/video/updateVideo`,
      method: 'post',
      data: video
    })
  },
  // 删除小节
  deleteAliyunVideo(id){
    return request({
      url: `/edu/vod/video/removeAliyunVideo/${id}`,
      method: 'delete'
    })
  }
}

