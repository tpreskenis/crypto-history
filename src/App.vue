<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      flat
      style="height: 76px;"
    >
    <vue-header @nav_clicked="navigation"/>
    </v-app-bar>
    
        <v-main :class="background_class">
            <transition name="fade" mode="out-in">
            <welcome-layout v-if="top_level_navigation == 'welcome'" key="welcome"/>
            <sports-layout v-if="top_level_navigation == 'sports'" key="sports"/>
            <info-layout v-if="top_level_navigation == 'info'" key="info"/>
            </transition>
        </v-main>
      <waves/>
  </v-app>
</template>

<script>

import vueHeader from './components/btn_header';
import waves from './components/waves'

import welcomeLayout from './components/welcome/layout';
import infoLayout from './components/info/layout';
import sportsLayout from './components/sports/layout';


export default {
  name: 'App',

  components: {
    waves,
    vueHeader,
    welcomeLayout,
    sportsLayout,
    infoLayout
  },

  data: () => ({
    page_title: "Welcome",
    top_level_navigation: 'welcome',
    reload: false,
  }),
  computed: {
    background_class: function() {
      if (this.top_level_navigation == 'sports' && this.$store.state.sport_checkbox) {
        // Basketball
        return "basketball_background"
      }
      else if (this.top_level_navigation == 'sports' && !this.$store.state.sport_checkbox) {
        // Baseball
        return "baseball_background"
      }
      else if (this.top_level_navigation == 'info') {
        // Info
        return "info_background"
      }
      else 
        return "welcome_background"
    },
    topIconColor: function() {
      if (this.top_level_navigation == 'sports' && this.$store.state.sport_checkbox) {
        // Basketball
        return "rgba(255,132,0,1)"
      }
      else if (this.top_level_navigation == 'sports' && !this.$store.state.sport_checkbox) {
        // Baseball
        return "rgba(170,10,10,1)"
      }
      else if (this.top_level_navigation == 'info') {
        // Info
        return "#1E88E5"
      }
      else 
        return "#1E88E5"
    }
  },
  methods: {
    navigation (value) {
      this.top_level_navigation = value
      if (this.top_level_navigation == 'sports')
        this.page_title = "Crypto-History"
      if (this.top_level_navigation == 'info')
        this.page_title = "Information"
      if (this.top_level_navigation == 'welcome')
        this.page_title = "Welcome"
    },
  },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');

// This alters Vuetifys Light Theme
.theme--light.v-bottom-navigation .v-btn:not(.v-btn--active) {
    color: rgba(0, 0, 0, 0.3) !important;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.v-toolbar__content {
  display: block !important;
}
.v-snack__content {
  text-align: -webkit-center !important;
}
</style>
<style scoped lang="scss">

// Using Maven Pro --> Similar to ars-maquette
.app_title {
  font-family: 'Nunito', sans-serif;
  color: black;
}

.app_title_button {
  margin: 0px !important;
}

.app_title_button_icon{
   transition: all .2s ease-in-out;
}

.app_title_button:active {
  .app_title_button_icon{
    transform: scale(0.75);
  }
}

.spin_icon {
  animation-name: spin;
  animation-duration: 1000ms;
  animation-timing-function: linear; 
}

@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}

#no-background-hover::before {
   background-color: transparent !important;
}

.baseball_background {
  padding: 10px !important;
  align-items: center;
  background: linear-gradient(60deg, rgb(0, 119, 255) 0%, rgb(138, 202, 255) 100%);
}
.basketball_background {
  padding: 10px !important;
  align-items: center;
  background: linear-gradient(60deg, rgb(255, 115, 0) 0%, rgb(213, 199, 0) 100%);
}
.info_background {
  padding: 10px !important;
  align-items: center;
  background: linear-gradient(60deg, rgba(0,168,255,1) 0%, rgb(0, 213, 142) 100%);
}
.welcome_background {
    padding: 10px !important;
    align-items: center;
    background: linear-gradient(60deg,rgb(183, 58, 146) 0%,rgb(193, 0, 48) 100%);
}

</style>