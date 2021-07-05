<template>
  <div :class="[$style.wrapper]">
    {{ items }}
  </div>
</template>
 
<script>
export default {
  props: ["items"],
};
</script>
 
<style lang="scss" module>
</style>