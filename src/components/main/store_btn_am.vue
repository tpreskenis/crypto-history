<template>
    <div style="text-align: center;">
        <v-btn
        fab
        large
        style="margin-bottom: 15px;"
        @click="openCryptoStore()"
      >
        <v-icon style="color: rgba(170,10,10,1);" large>fa-store</v-icon>
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
          window.open("https://opensea.io/collection/american-history", "_blank");    
      },
    }
  }
</script>