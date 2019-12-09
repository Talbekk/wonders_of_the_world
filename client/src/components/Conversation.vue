<template lang="html">

<div id="">
<host></host>
<traveller></traveller>
</div>

</template>

<script>

import Traveller from './traveller.vue';
import Host from './host.vue';

export default {
  name: "conversation",
  props: ['wonder'],
    components: {
      "host": Host,
      "traveller": Traveller
    }

}

</script>

<style lang="css" scoped>
</style>
