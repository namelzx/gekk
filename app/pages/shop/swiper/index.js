// pages/reads/swiper/index.js
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  data: {
    indicatorDots: true,
    autoplay: false,
    interval: 3000,
    duration: 100,
  },
  properties:{
    swiperImg:{
      type: Array
    },
    shop_distance: {
      type: String
    },
    shop_name: {
      type: String
    },
    shop:{
      type:Object
    }
  }
})