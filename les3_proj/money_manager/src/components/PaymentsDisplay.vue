<template>
  <div :class="[$style.wrapper]">
    {{ items }}
  </div>
</template>
 
<script>
export default {
  props: {
    items: {
      tupe: Array,
      default: [],
    },
  },
};
</script>
 
<style lang="scss" module>
</style>