<template>
  <swiper :slides-per-view="1"
  :space-between="30"
  :autoplay="{ delay: 3000 }"
  pagination
  class="mySwiper">
    <swiper-slide v-for="imgSrc in images" :key="imgSrc">
      <img :src="imgSrc" class="banner-image" alt="Banner Image" />
    </swiper-slide>
    <div class="swiper-pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

SwiperCore.use([Pagination, Autoplay]);

export default {
  name: 'SiteBanner',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      images: [
        require('@/assets/a19384d7-2cab-4be1-81d3-e7b38cd16ad8.jpg')
      ]
    };
  }
};
</script>

<style scoped>
.banner-image {
  width: 100%;
  object-fit: cover;
  max-height: 500px;
  display: block;
}
</style>
