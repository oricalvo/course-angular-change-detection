<script lang="ts">
import {ref} from "vue";

export default {
  setup() {
    const count = ref(0);

    function inc() {
      console.log("123");
      count.value++;
    }

    return {
      count,
      inc,
    }
  }
}
</script>

<template>
  <h1>App</h1>
  <span>{{ count }}</span>
  <button @click="inc">Inc</button>
</template>
