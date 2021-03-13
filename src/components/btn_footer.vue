<template>
  <v-bottom-navigation
   :value="value"
    color="primary"
    grow
    fixed
  >
    <v-btn :class="buttonColorClass" id="no-background-hover" :ripple="false" @click="emit_nav('sports')">
      <v-icon class="navagation_icon" large>{{sportIcon}}</v-icon>
    </v-btn>
    <v-btn class="navagation_button" id="no-background-hover" :ripple="false" @click="emit_nav('info')">
      <v-icon class="navagation_icon" large>fa-info-circle</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
  export default {
    name: "btn-footer",
    data: () => ({ value: 0 }),
    computed: {
      sportIcon: function() {
        if (this.$store.state.sport_checkbox)
          return "fa-landmark"
        else 
          return "fa-flag-usa"
      },
      buttonColorClass: function() {
      if (this.$store.state.sport_checkbox) 
        return "basketball_button navagation_button"
      else
        return "baseball_button navagation_button"
      }
    },
    methods: {
      // It will default to Sports
      emit_nav: function (event) {
          this.$emit('nav_clicked', event)
      }
    }
  }
</script>
<style scoped lang="scss">
#no-background-hover::before {
   background-color: transparent !important;
}

.basketball_button {
  color: rgba(255,132,0,1) !important;
}
.baseball_button {
  color: rgba(170,10,10,1) !important;
}

.navagation_button{
  transition: all .2s ease-in-out;
  align-self: center;
  background: none !important;
}

.navagation_icon{
   transition: all .2s ease-in-out;
}

.navagation_button:active {
  .navagation_icon{
    transform: scale(0.75);
  }
}
.navagation_button:focus {
  .navagation_icon{
    transform: scale(0.5);
  }
}

</style>