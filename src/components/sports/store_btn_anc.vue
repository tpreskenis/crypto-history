<template>
    <div style="text-align: center;">
        <v-btn
        fab
        large
        style="margin-bottom: 15px;"
        disabled
        @click="openCryptoStore()"
      >
        <v-icon style="color: rgba(255,132,0,1);" large>fa-store</v-icon>
        </v-btn>
    </div>
</template>
<script>
  export default {
    name: "store_button",
    data: () => ({
      show: false,
    }),
    methods: {
      openCryptoStore: function() {  
          window.open("https://opensea.io/accounts/Crypto-History", "_blank");    
      },
    }
  }
</script>