<template>
    <div class="test">
        <welcome-info/>
    </div>
</template>
<script>

import welcomeInfo from './welcome_card';

export default {
  name: 'welcome_layout',

  components: {
      welcomeInfo,
  },

  data: () => ({
      //...
    }),
  };
</script>
<style scoped lang="scss">
.rounded-self {
    contain: content;
    width: 25%;
    border-radius: 50%;
}
</style>