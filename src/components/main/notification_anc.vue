<template>
  <v-card
    class="mx-auto my-12 rounded-xl"
    depressed
    max-width="400"
    flat
  >
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <v-img
            class="white--text align-end"
            height="200px"
            src="../../assets/notification_pics/romans.jpg"
        >
            <v-card-title class="dark-title">The Rome Collection</v-card-title>
            <v-card-subtitle class="coming-soon-title">Coming March 31th</v-card-subtitle>
        </v-img>
      </swiper-slide>
      <swiper-slide>
        <v-img
            class="white--text align-end"
            height="200px"
            src="../../assets/notification_pics/gods.jpg"
        >
            <v-card-title class="dark-title">Gods And Monsters Collection</v-card-title>
            <v-card-subtitle class="coming-soon-title">Coming April 7th</v-card-subtitle>
        </v-img>
      </swiper-slide>
      <swiper-slide>
        <v-img
            class="white--text align-end"
            height="200px"
            src="../../assets/notification_pics/knights.jpg"
        >
            <v-card-title class="dark-title">Knights Of The Table Collection</v-card-title>
            <v-card-subtitle class="coming-soon-title">Coming Soon</v-card-subtitle>
        </v-img>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </v-card>
</template>
<script>
  export default {
    name: 'notifications-america',
    data: () => ({
      show: false,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoplay: {
            delay: 4000,
            disableOnInteraction: false
          },
        },
    }),
  }
</script>
<style lang="scss" scoped>
.dark-title {
    font-weight: bold;
    color: white;
}
.out-title {
    font-weight: bold;
    color: darkblue !important;
}
.coming-soon-title {
    font-weight: bold;
    color: crimson !important;
}
</style>