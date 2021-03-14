<template>
  <div class="text-center">
        <v-btn 
          style="bottom: 35px;"
          fab
          href="mailto:help@crypto-history.io"
        >
          <v-icon color="primary" large>fa-envelope</v-icon>
        </v-btn>
  </div>
</template>
<script>
  export default {
    name: "Contact",
    data: () => ({
      dialog: false,
    }),
  }
</script>
<style scoped lang="scss">
.rounded-self {
    contain: content;
    width: 35%;
    border-radius: 50%;
}
.about_text {
    position: relative;
    bottom: -8px;
}
.title_card_name {
    font-family: 'Nunito', sans-serif;
    text-align-last: center;
    position: relative;
    line-height: 40px;
    bottom: -15px;
    margin-bottom: 15px;
}
.mini_title {
    font-family: 'Nunito', sans-serif;
    margin-left: 5%;
}

.about_button {
  margin: 0px !important;
}

.about_button_icon{
   transition: all .2s ease-in-out;
}

.about_button:active {
  .about_button_icon{
    transform: scale(0.75);
  }
}

#no-background-hover::before {
   background-color: transparent !important;
}

</style>