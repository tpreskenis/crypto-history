<template>
  <v-card
    class="mx-auto my-12 rounded-xl"
    depressed
    max-width="400"
    flat
  >
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <h1 class="title_card_name">Blockchain Meets <br/> History</h1>
        <v-card-text class="about_text">
        Buy, sell, or trade your Crypto-History Card like it was a traditional collectible using 
        blockchain technology.  
        Bitcoin and ether are cryptocurrencies but a Crypto-History card is a cryptocollectibles.  
        Be the only person in the world to own a piece of history featuring well-known icons from across time such as George Washington, 
        Julius Caesar, and Ludwig Beethoven.       
        </v-card-text>
        <div style="text-align: -webkit-center; margin-bottom: 25px;">
          <v-img style="max-width: 40%; margin-top: 10px; margin-bottom: 50px;" src="../../assets/example-card.png"></v-img>
        </div>
      </swiper-slide>
      <swiper-slide>
        <h1 class="title_card_name" style="margin-top: 25px;">How It Works<br/></h1>
        <v-card-text class="about_text" style="margin-top: 35px;">
          Crypto-History runs on the same blockchain technology as Ethereum. 
          Just like each individual coin, each Crypto History card is linked to one, and only one,
          token.     
        </v-card-text>
        <div style="text-align: -webkit-center;">
          <v-img style="max-width: 55%; margin-top: 20px;" src="../../assets/hand-holding-phone.png"></v-img>
        </div>
      </swiper-slide>
      <swiper-slide>
        <h1 class="title_card_name" style="margin-top: 25px;">Learn More!<br/></h1>
        <div class="container info-col">
          <div style="text-align: -webkit-center;">
            <v-img class='image_info' src="../../assets/ethereum.png"  @click="openEr()"></v-img>
          </div>
          <div style="text-align: -webkit-center;">
            <v-img class='image_info' src="../../assets/npr-logo.png" @click="openNPR()"></v-img>
          </div>
          <div>
            <p class="information-text">Links are not endorsements, but provide more information about NFTs.</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </v-card>
</template>
<script>
  export default {
    name: "About",
    data: () => ({
      show: false,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
    }),
    methods: {
      openNPR: function() {  
          window.open("https://www.npr.org/2021/03/05/974089381/whats-an-nft-and-why-are-people-paying-millions-to-buy-them", "_blank");    
      },
      openEr: function() {
          window.open("https://ethereum.org/en/", "_blank");    
      }
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
    width: 90% !important;
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