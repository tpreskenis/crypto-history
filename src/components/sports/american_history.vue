<template>
  <div>
    <notification/>
    <store-button/>
    <information-ame/>
  </div>
</template>
<script>
import Notification from './notification_am'
import InformationAme from './info-america'
import StoreButton from './store_btn_am'
  export default {
    name: "american_history_template",
    components: {
      Notification,
      InformationAme,
      StoreButton
    },
    data: () => ({
    }),
    computed: {

    }
  }
</script>
<style lang="scss" scoped>
</style>