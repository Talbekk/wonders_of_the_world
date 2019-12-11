<template lang="html">
  <wonder-page :wonders="[selectedWonder]" :username='username'></wonder-page>
</template>

<script>

import WonderPage from '../components/WonderPage';

export default {
  name: 'wonder',
  props: {
    selectedWonder: Object,
    username: String
  },
  components: {
    'wonder-page': WonderPage
  }

}
</script>

<style lang="css" scoped>
</style>
