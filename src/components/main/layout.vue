<template>
    <div>
        <his-switch @switch_clicked="switch_navigation"/>
        <transition name="fade" mode="out-in">
            <american v-if="!this.$store.state.sport_checkbox"/>
            <anchient v-if="this.$store.state.sport_checkbox"/>
        </transition>
    </div>
</template>
<script>
import hisSwitch from './switch';

import american from './american_history';
import anchient from './anc_history';

export default {
  name: 'sports_layout',

  components: {
    hisSwitch,
    american,
    anchient
  },

  data: () => ({
    current_sport: 'item_one',
  }),
  methods: {
    switch_navigation (value) {
      this.current_sport = value
    }
  }
};
</script>