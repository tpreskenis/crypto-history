<template>
  <v-card
    class="mx-auto my-12 rounded-xl"
    depressed
    max-width="400"
    flat
  >
        <h1 class="title_card_name" style="margin-top: 25px;">Discover America</h1>
        <v-card-text class="about_text" style="margin-top: 15px;">
          Collect Crypto History cards from across the history of the United States of America!
          From George Washington to Abraham Lincoln, each card contains a piece of an American 
          Icon!  
        </v-card-text>
        <div style="text-align: -webkit-center;">
          <v-img style="max-width: 55%;" src="../../assets/mini-logos.png"></v-img>
        </div>
  </v-card>
</template>
<script>
  export default {
    name: "About",
    data: () => ({
      show: false,
    }),
    methods: {

    }
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
    text-align: center;  
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

.information-text {
    text-align: center;
    font-size: small;
    font-style: italic;
    color: gray;
}

.info-col {
  display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 370px;
}
.image_info {
  max-width: 40%;
  cursor: pointer;
}
</style>