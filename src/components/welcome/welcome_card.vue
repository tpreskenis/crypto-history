<template>
  <v-card
    class="mx-auto my-12 rounded-xl"
    depressed
    max-width="400"
    flat
  >
    <h1 class="welcom_title">Welcome to</h1>
    <h1 class="title_card_name">Crypto History</h1>
    <div style="text-align: -webkit-center;">
        <v-img style="max-width: 40%;" src="../../assets/Crypto-history-logo.png"></v-img>
    </div>
    <v-card-actions style="place-content: center;">
      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show" style="height: 120px;">
        <v-card-actions style="place-content: center;">
      <v-card-text class="about_text">
        Buy and sell Crypto-History! <br/>
        From George Washington to Tutankhamun, collect unique history icon collectibles!
      </v-card-text>
        </v-card-actions>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
  export default {
    name: "About",
    data: () => ({
      show: false,
    }),
  }
</script>
<style scoped lang="scss">
.welcom_title {
    font-family: 'Nunito', sans-serif;
    text-align: center;  
    position: relative;
    bottom: -15px;
    font-size: larger;
    color: gray;
}
.rounded-self {
    contain: content;
    width: 35%;
    border-radius: 50%;
}
.about_text {
    position: relative;
    text-align: center;
}
.title_card_name {
    font-family: 'Nunito', sans-serif;
    text-align: center;    
    position: relative;
    bottom: -15px;
    font-size: xxx-large;
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