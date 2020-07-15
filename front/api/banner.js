import request from '@/utils/request'
export default {
  getBannerList() {
    return request({
      url: `/edu/cms/banner-front/getAllBanner`,
      method: 'get'
    })
  }
}
