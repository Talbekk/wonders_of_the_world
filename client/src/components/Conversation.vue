<template lang="html">

<div id="">
<host></host>
<traveller></traveller>
</div>

</template>

<script>

import Traveller from './Traveller.vue';
import Host from './Host.vue';

export default {
  name: "conversation",
  props: {
    wonder : Object
  },
    components: {
      "host": Host,
      "traveller": Traveller
    }

}

</script>

<style lang="css" scoped>
</style>
