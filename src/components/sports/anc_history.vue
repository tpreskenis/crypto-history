<template>
  <div>
    <notification/>
    <store-button/>
    <information-anc/>
  </div>
</template>
<script>
import Notification from './notification_anc'
import InformationAnc from './info-ancient'
import StoreButton from './store_btn_anc'

  export default {
    name: "anc_history_template",
    components: {
      Notification,
      InformationAnc,
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