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
            src="../../assets/notification_pics/mount_rush.jpg"
        >
            <v-card-title class="dark-title">The Mount Rushmore Collection</v-card-title>
            <v-card-subtitle class="out-title">Out Now</v-card-subtitle>
        </v-img>
      </swiper-slide>
      <swiper-slide>
        <v-img
            class="white--text align-end"
            height="200px"
            src="../../assets/notification_pics/founding-fathers.jpg"
        >
            <v-card-title class="dark-title">The Founding Fathers Collection</v-card-title>
            <v-card-subtitle class="coming-soon-title">Coming March 24th</v-card-subtitle>
        </v-img>
      </swiper-slide>
      <swiper-slide>
        <v-img
            class="white--text align-end"
            height="200px"
            src="../../assets/notification_pics/civil-war.jpg"
        >
            <v-card-title class="dark-title">The Emancipation Collection</v-card-title>
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