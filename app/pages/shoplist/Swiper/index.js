// pages/component/Swiper/index.js

Component({

  data: {
    indicatorDots: true,
    autoplay: false,
    interval: 3000,
    duration: 100,
  },
  properties: {
    swiperImg: {
      type: Array
    },
    logo: {
      type: String
    },
    shop_name: {
      type: String
    },
    shop_distance: {
      type: String
    }
  }
})
