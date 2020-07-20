import request from '@/utils/request'
export default {
  getPlayAuth(vid) {
    return request({
      url: `/edu/vod/video/getPlayAuth/${vid}`,
      method: 'get'
    })
  }

}
